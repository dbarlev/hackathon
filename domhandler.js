// @ts-nocheck
(function (window){
    'use strict';
    console.log('Started to run DOM handler');
    /**
     * Provides some kind of Singleton pattern functionality for DOM handler
     */
    window['domhandlerisrunning'] = window['domhandlerisrunning'] || false;

    if(window['domhandlerisrunning']){
        return;
    } 
    window['domhandlerisrunning'] = true;

    const ELEMENT_NODE = 1;
    const ATTRIBUTE_NODE = 2;

    let elementLookup = new Array();
    let eventsLookup = new Array();
    let originals = {};
    let blockedEventTypes = new Array();

    /**
     * Stores prototypes of EventTarget and HTMLElement
     */
    let prototypes = {
        element: window.HTMLElement.prototype,
        eventTarget: EventTarget.prototype
    };
    /**
     * This callback function used by MutationObserver
     * to detect if there is any of newly created eleemnts
     * has inline events and if there are - registers then on
     * DOM handler's registry.
     * 
     * @param {Array<MutationRecord>} mutationsList 
     * @param {MutationObserver} observer 
     */
    let mutationObserverCallback = function (mutationsList, observer){
        mutationsList.forEach(function(mutation){
            switch(mutation.type){
                 case 'attributes':
                   if(
                        mutation.attributeName.toLowerCase().indexOf('on') === 0 && 
                        typeof(mutation.target.getAttribute(mutation.attributeName)) == 'string'
                    ){
                        
                        _registerEventListener(
                            mutation.target, 
                            _normilizeEventType(mutation.attributeName.toLowerCase()),
                            mutation.target.getAttribute(mutation.attributeName),
                            true,
                            true
                        );
                    }
                    break;
                case 'childList':
                    //added nodes
                    for(let index = 0, maxIndex = mutation.addedNodes.length; index < maxIndex; index += 1){
                        let node = mutation.addedNodes[index];

                        if(node.nodeType != ELEMENT_NODE){
                            continue;
                        }

                        for(let attributesIndex = 0, maxAttributesIndex = node.attributes.length; attributesIndex < maxAttributesIndex; attributesIndex += 1){
                            let attribute = node.attributes[attributesIndex];
                            
                            if(attribute.nodeType != ATTRIBUTE_NODE || attribute.name.toLowerCase() == 'style'){
                                continue;
                            }

                            if(attribute.name.toLowerCase().indexOf('on') === 0){
                                _registerEventListener(
                                    node, 
                                    _normilizeEventType(attribute.name.toLowerCase()),
                                    node.getAttribute(attribute.name),
                                    true,
                                    true
                                );
                            }
                        }
                    }
                    //removed nodes
                    for (let index = 0, maxIndex = mutation.removedNodes.length; index < maxIndex; index += 1) {
                        const element = mutation.removedNodes[index];
                        if (element.id && elementLookup[element.id] && elementLookup[element.id].events) {
                            const allEvenet = Object.keys(elementLookup[element.id].events);
                            delete elementLookup[element.id];
                            allEvenet.forEach(_event => {
                                const event = "_" + _event;
                                eventsLookup[event].Elements = eventsLookup[event].Elements.filter(el => el != element);
                            });
                        }
                    }
                    break;
            }
        });
    };
   
    /**
     * Whenever whole DOM is ready, start listening for DOM changes by
     * MutationObserver.
     */
    window.document.addEventListener('DOMContentLoaded', function(){
        let mutationObserver = new MutationObserver(mutationObserverCallback);

        mutationObserver.observe(
            window.document.body,
            {
                attributes: true, 
                childList: true, 
                subtree: true,
                characterData: false 
            }
        );

        let allElementsWithInlineEvents = _findElementsWithArributePrefix('*', 'on');

        for(let index = 0, maxIndex = allElementsWithInlineEvents.length; index < maxIndex; index += 1){
            let element = allElementsWithInlineEvents[index];

            for(let attributesIndex = 0, maxAttributesIndex = element.attributes.length; attributesIndex < maxAttributesIndex; attributesIndex += 1){
                let attribute = element.attributes[attributesIndex];

                if(attribute.name.startsWith('on')){
                    _registerEventListener(
                        element, 
                        _normilizeEventType(attribute.name.toLowerCase()),
                        element.getAttribute(attribute.name),
                        true,
                        true
                    );
                }
            }
        }
    });

    /**
     * Serches for DOM elements compliant with givent CSS selector
     * and has attribute which name starts with given prefix.
     * 
     * @param {string} selector 
     * @param {string} prefix 
     */
    function _findElementsWithArributePrefix(selector, prefix)
    {
        return [].slice.call(document.querySelectorAll(selector)).filter(function (e)
        {
            return [].slice.call(e.attributes).filter(
                function (attr)
                {
                    return attr.name.startsWith(prefix);
                }
            ).length;
        });
    }

    /**
     * Generates RFC-4122 compliant
     * v4 unique identifier 
     */
    function _uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);

            return v.toString(16);
        });
    }

    /**
     * This delegate function used by Element.addEventListener wrapper 
     * instead of original native delegate.
     * 
     * @param {string} type 
     * @param {function} listener 
     * @param {boolean} useCapture 
     */
    function _wrappedAddEventListenerElementDelegate(type, listener, useCapture) {
        let eventType = _normilizeEventType(type);
        let targetElement = this;

        if(blockedEventTypes.includes(eventType)){
            return;
        }

        try {
            _registerEventListener(targetElement, eventType, listener, useCapture);
        } catch (error) {
            console.log(error);
         } finally {
            originals['element'].addEventListener.call(this, type, listener, useCapture);
        }
    }

    /**
     * This delegate function used by EventTarget.addEventListener wrapper 
     * instead of original native delegate.
     * 
     * @param {string} type 
     * @param {function} listener 
     * @param {boolean} useCapture 
     */
    function _wrappedAddEventListenerEventTargetDelegate(type, listener, useCapture) {
        let eventType = _normilizeEventType(type);
        let targetElement = this;

        if(blockedEventTypes.includes(eventType)){
            return;
        }

        try {
            _registerEventListener(targetElement, eventType, listener, useCapture);
        } catch (error) { 
            console.log(error);
        } finally {
            originals['eventTarget'].addEventListener.call(this, type, listener, useCapture);
        }
    }

    /**
     * Returns unified event name
     * 
     * @param {string} type 
     */
    function _normilizeEventType(type) {
        type = type.toLowerCase();

        if (type.indexOf("on") === 0)
        {
            type = type.substring(2, type.length);
        }
        return type;
    }

    /**
     * Serches given element in
     * DOM handler's registry
     * 
     * @param {HTMLElement} element 
     */
    function _getElementFormLookup(element){
        
        if(typeof(element.id) === 'undefined' || element.id == null || element.id === ''){
            element.id = 'uTester-' + _uuidv4();
        }
        if (!document.body.contains(element)) return { element: element, events: {} };
        elementLookup[element.id] = elementLookup[element.id] || {
            element: element,
            events: {}
        };

        return elementLookup[element.id];
    }

    /**
     * Serches enrty of given type in
     * DOM handler's registry
     * 
     * @param {string} type 
     */
    function _getEventFromLookup(type) {
        const _type = "_" + type;
        eventsLookup[_type] = eventsLookup[_type] || {
            Elements: new Array()
        };

        return eventsLookup[_type];
    }

    /**
     * Register element that have event listener of assigned type into 
     * DOM handler's registtry
     * 
     * @param {HTMLElement} element 
     * @param {string} type 
     * @param {Function} listener 
     * @param {boolean} useCapture 
     * @param {boolean} isInline 
     */
    function _registerEventListener(element, type, listener, useCapture, isInline){
        if(!element || element.nodeType != ELEMENT_NODE || !document.body || !document.body.contains(element) || (typeof listener === "string" && listener.length === 0)){
            return;
        }

        let lookupItem = _getElementFormLookup(element);

        lookupItem.events[type] = lookupItem.events[type] || {
            listeners: []
        };

        lookupItem.events[type].listeners.push({
            listener: listener,
            useCapture: (useCapture === true),
            isInline: (isInline === true)
        });

        let eventLookupItem = _getEventFromLookup(type);
        
        if(eventLookupItem.Elements.indexOf(element) === -1){
            eventLookupItem.Elements.push(element);
        }
    }

    /**
     * Wraps Element.addEventListener method
     */
    function _wrapElementAddEventListener() {
        originals['element'] = {
            addEventListener: prototypes.element.addEventListener
        };
        
        prototypes.element.addEventListener = _wrappedAddEventListenerElementDelegate;
    }

    /**
     * Wraps targetEvent.addEventListener method
     */
    function _wrapEventTargetAddEventListener(){
        originals['eventTarget'] = {
            addEventListener: prototypes.eventTarget.addEventListener
        };
        
        prototypes.eventTarget.addEventListener = _wrappedAddEventListenerEventTargetDelegate;
    }

    _wrapElementAddEventListener();
    _wrapEventTargetAddEventListener();

    /**
     * Propogate DOM handler to window 
     * so everyone who need it can call it.
     */
    window.u1st_domHandler = {
        /**
         * Returns all elements that has event listeners resistered by DOM handler.
         */
        getAllElementsWithEvents: function () {
            elementLookup.forEach((event) => {
                elementLookup[event].Elements = elementLookup[event].Elements ? eventsLookup[event].Elements.filter(el => el.parentElement) : [];
            })
            return elementLookup;
        },
        /**
         * Returns all elements taht has event listeners
         * of given types.
         * 
         * @param {Array<string>} types 
         * @param {boolean} includeOnlyBodyElements 
         */
        getAllElementsWithSpecificEvents: function(types, includeOnlyBodyElements = false) {
            let events = new Array();
            const eventsMap = Object.keys(eventsLookup);
            const _types = types.map(v => "_" + v);
            for(let index = 0, maxIndex = _types.length; index < maxIndex; index += 1){
                if (eventsMap.indexOf(_types[index]) > -1 && eventsLookup[_types[index]].Elements) {
                    eventsLookup[_types[index]].Elements = eventsLookup[_types[index]].Elements.filter(el => el.parentElement);
                    events[(_types[index]).substring(1)] = eventsLookup[_types[index]];
                }
            }

            return events;
        },
        getElementEvents: function(element){
            return _getElementFormLookup(element);
        },
        elementLookup,
        eventsLookup
    };

    console.log('Done runing DOM handler.');
})(window);