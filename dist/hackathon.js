(()=>{var __webpack_modules__={752:module=>{eval('\r\nclass Autocomplete {\r\n\r\n    constructor(manager){\r\n        this.manager = manager;\r\n    }\r\n\r\n    validate(addedElement){\r\n        this.manager.sameAxisX().hasLinks().valExist(addedElement);\r\n        this.output();\r\n    }\r\n\r\n    output(){\r\n        console.log("success");\r\n    }\r\n}\r\n\r\nmodule.exports = {\r\n    Autocomplete\r\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzUyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNrYXRob24vLi9zcmMvaWRlbnRpZmllcnMvYXV0b2NvbXBsZXRlLmpzP2RiZDQiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNsYXNzIEF1dG9jb21wbGV0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFuYWdlcil7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZShhZGRlZEVsZW1lbnQpe1xyXG4gICAgICAgIHRoaXMubWFuYWdlci5zYW1lQXhpc1goKS5oYXNMaW5rcygpLnZhbEV4aXN0KGFkZGVkRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvdXRwdXQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgQXV0b2NvbXBsZXRlXHJcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///752\n')},710:(module,__unused_webpack_exports,__webpack_require__)=>{eval("const {Autocomplete} = __webpack_require__(752);\r\n\r\nconst registerIdentifier = (manager, addedElement) => {\r\n    const identifiers = [\r\n        Autocomplete\r\n    ]\r\n\r\n    for(let identifier of identifiers){\r\n        try {\r\n            const instance = new identifier(manager);\r\n            const isValid = instance.validate(addedElement);\r\n            if(isValid){\r\n                instance.output();\r\n                break;\r\n            }\r\n        } catch (error) {\r\n            // handle errors\r\n        }\r\n    }\r\n}\r\n\r\n\r\nmodule.exports = registerIdentifier;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzEwLmpzIiwibWFwcGluZ3MiOiJBQUFBLE9BQU8sY0FBYyxFQUFFLG1CQUFPLENBQUMsR0FBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2thdGhvbi8uL3NyYy9pZGVudGlmaWVycy9yZWdpc3Rlci5qcz80N2I0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtBdXRvY29tcGxldGV9ID0gcmVxdWlyZShcIi4vYXV0b2NvbXBsZXRlXCIpO1xyXG5cclxuY29uc3QgcmVnaXN0ZXJJZGVudGlmaWVyID0gKG1hbmFnZXIsIGFkZGVkRWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgaWRlbnRpZmllcnMgPSBbXHJcbiAgICAgICAgQXV0b2NvbXBsZXRlXHJcbiAgICBdXHJcblxyXG4gICAgZm9yKGxldCBpZGVudGlmaWVyIG9mIGlkZW50aWZpZXJzKXtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBpZGVudGlmaWVyKG1hbmFnZXIpO1xyXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gaW5zdGFuY2UudmFsaWRhdGUoYWRkZWRFbGVtZW50KTtcclxuICAgICAgICAgICAgaWYoaXNWYWxpZCl7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5vdXRwdXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcmVnaXN0ZXJJZGVudGlmaWVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///710\n")},138:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{eval("const identifiersManger = __webpack_require__(563)\r\nconst registerIdentifier = __webpack_require__(710)\r\nconst registerValidators = __webpack_require__(939)\r\n\r\nclass Startup {\r\n    init(){\r\n        //TODO: daniel - event and observer are invoked here\r\n        registerValidators(identifiersManger);\r\n        this.register();\r\n    }\r\n\r\n    register(){\r\n        registerIdentifier(new identifiersManger());\r\n    }\r\n}\r\n\r\nnew Startup().init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM4LmpzIiwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQixtQkFBTyxDQUFDLEdBQVc7QUFDN0MsMkJBQTJCLG1CQUFPLENBQUMsR0FBd0I7QUFDM0QsMkJBQTJCLG1CQUFPLENBQUMsR0FBdUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2thdGhvbi8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlkZW50aWZpZXJzTWFuZ2VyID0gcmVxdWlyZShcIi4vbWFuYWdlclwiKVxyXG5jb25zdCByZWdpc3RlcklkZW50aWZpZXIgPSByZXF1aXJlKFwiLi9pZGVudGlmaWVycy9yZWdpc3RlclwiKVxyXG5jb25zdCByZWdpc3RlclZhbGlkYXRvcnMgPSByZXF1aXJlKFwiLi92YWxpZGF0b3JzL3JlZ2lzdGVyXCIpXHJcblxyXG5jbGFzcyBTdGFydHVwIHtcclxuICAgIGluaXQoKXtcclxuICAgICAgICAvL1RPRE86IGRhbmllbCAtIGV2ZW50IGFuZCBvYnNlcnZlciBhcmUgaW52b2tlZCBoZXJlXHJcbiAgICAgICAgcmVnaXN0ZXJWYWxpZGF0b3JzKGlkZW50aWZpZXJzTWFuZ2VyKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoKXtcclxuICAgICAgICByZWdpc3RlcklkZW50aWZpZXIobmV3IGlkZW50aWZpZXJzTWFuZ2VyKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgU3RhcnR1cCgpLmluaXQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///138\n")},563:module=>{eval("module.exports = function validatorManger(){};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTYzLmpzIiwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2F0aG9uLy4vc3JjL21hbmFnZXIuanM/NTMzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHZhbGlkYXRvck1hbmdlcigpe307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///563\n")},712:module=>{eval("class AutoCompleteValidators{\r\n    constructor(manager){\r\n        this.manager = manager;\r\n        this.register();\r\n    }\r\n\r\n    register(){\r\n        this.manager.prototype.valExist = this.valExist;\r\n    }\r\n\r\n    valExist(element){\r\n        const text = window.u1Autocomplete.value;\r\n        var walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);\r\n        \r\n        while(node = walker.nextNode()) {\r\n        if(node.nodeValue.toLowerCase().includes(text))\r\n            throw new Error;\r\n        }\r\n\r\n        return this;\r\n    }\r\n}\r\n\r\nmodule.exports = AutoCompleteValidators;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzEyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2thdGhvbi8uL3NyYy92YWxpZGF0b3JzL2F1dG9jb21wbGV0ZVZhbGlkYXRvci5qcz8xZDg4Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEF1dG9Db21wbGV0ZVZhbGlkYXRvcnN7XHJcbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyKXtcclxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcigpe1xyXG4gICAgICAgIHRoaXMubWFuYWdlci5wcm90b3R5cGUudmFsRXhpc3QgPSB0aGlzLnZhbEV4aXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHZhbEV4aXN0KGVsZW1lbnQpe1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSB3aW5kb3cudTFBdXRvY29tcGxldGUudmFsdWU7XHJcbiAgICAgICAgdmFyIHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZWxlbWVudCwgTm9kZUZpbHRlci5TSE9XX1RFWFQsIG51bGwsIGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgICB3aGlsZShub2RlID0gd2Fsa2VyLm5leHROb2RlKCkpIHtcclxuICAgICAgICBpZihub2RlLm5vZGVWYWx1ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRleHQpKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBdXRvQ29tcGxldGVWYWxpZGF0b3JzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///712\n")},649:module=>{eval("class DomValidators{\r\n    constructor(manager){\r\n        this.manager = manager;\r\n        this.register();\r\n    }\r\n\r\n    register(){\r\n        this.manager.prototype.hasLinks = this.hasLinks;\r\n    }\r\n\r\n    hasLinks(elements){\r\n        return this;\r\n    }\r\n}\r\n\r\nmodule.exports = DomValidators;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjQ5LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2F0aG9uLy4vc3JjL3ZhbGlkYXRvcnMvZG9tVmFsaWRhdG9ycy5qcz9hMWRjIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERvbVZhbGlkYXRvcnN7XHJcbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyKXtcclxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcigpe1xyXG4gICAgICAgIHRoaXMubWFuYWdlci5wcm90b3R5cGUuaGFzTGlua3MgPSB0aGlzLmhhc0xpbmtzO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0xpbmtzKGVsZW1lbnRzKXtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEb21WYWxpZGF0b3JzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///649\n")},555:module=>{eval("class PositionValidators{\r\n    constructor(manager){\r\n        this.manager = manager;\r\n        this.register();\r\n    }\r\n\r\n    register(){\r\n        this.manager.prototype.sameAxisX = this.sameAxisX;\r\n        this.manager.prototype.sameAxisY = this.sameAxisY;\r\n    }\r\n\r\n    sameAxisX(elements){\r\n        return this;\r\n    }\r\n\r\n    sameAxisY(elements){\r\n        return this;\r\n    }\r\n}\r\n\r\nmodule.exports = PositionValidators;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTU1LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2thdGhvbi8uL3NyYy92YWxpZGF0b3JzL3Bvc2l0aW9uVmFsaWRhdG9ycy5qcz8wOGE5Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBvc2l0aW9uVmFsaWRhdG9yc3tcclxuICAgIGNvbnN0cnVjdG9yKG1hbmFnZXIpe1xyXG4gICAgICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKCl7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyLnByb3RvdHlwZS5zYW1lQXhpc1ggPSB0aGlzLnNhbWVBeGlzWDtcclxuICAgICAgICB0aGlzLm1hbmFnZXIucHJvdG90eXBlLnNhbWVBeGlzWSA9IHRoaXMuc2FtZUF4aXNZO1xyXG4gICAgfVxyXG5cclxuICAgIHNhbWVBeGlzWChlbGVtZW50cyl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2FtZUF4aXNZKGVsZW1lbnRzKXtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3NpdGlvblZhbGlkYXRvcnM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///555\n")},939:(module,__unused_webpack_exports,__webpack_require__)=>{eval("const PositionValidators = __webpack_require__(555);\r\nconst DomValidators = __webpack_require__(649);\r\nconst AutoCompleteValidators = __webpack_require__(712);\r\n\r\nconst registerValidators = (manager) => {\r\n    const validators = [\r\n        PositionValidators,\r\n        DomValidators,\r\n        AutoCompleteValidators\r\n    ]\r\n\r\n    validators.forEach(validator => new validator(manager));\r\n}\r\n\r\n\r\nmodule.exports = registerValidators;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTM5LmpzIiwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQixtQkFBTyxDQUFDLEdBQXNCO0FBQ3pELHNCQUFzQixtQkFBTyxDQUFDLEdBQWlCO0FBQy9DLCtCQUErQixtQkFBTyxDQUFDLEdBQXlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2F0aG9uLy4vc3JjL3ZhbGlkYXRvcnMvcmVnaXN0ZXIuanM/ZjkyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQb3NpdGlvblZhbGlkYXRvcnMgPSByZXF1aXJlKFwiLi9wb3NpdGlvblZhbGlkYXRvcnNcIik7XHJcbmNvbnN0IERvbVZhbGlkYXRvcnMgPSByZXF1aXJlKFwiLi9kb21WYWxpZGF0b3JzXCIpO1xyXG5jb25zdCBBdXRvQ29tcGxldGVWYWxpZGF0b3JzID0gcmVxdWlyZShcIi4vYXV0b2NvbXBsZXRlVmFsaWRhdG9yXCIpO1xyXG5cclxuY29uc3QgcmVnaXN0ZXJWYWxpZGF0b3JzID0gKG1hbmFnZXIpID0+IHtcclxuICAgIGNvbnN0IHZhbGlkYXRvcnMgPSBbXHJcbiAgICAgICAgUG9zaXRpb25WYWxpZGF0b3JzLFxyXG4gICAgICAgIERvbVZhbGlkYXRvcnMsXHJcbiAgICAgICAgQXV0b0NvbXBsZXRlVmFsaWRhdG9yc1xyXG4gICAgXVxyXG5cclxuICAgIHZhbGlkYXRvcnMuZm9yRWFjaCh2YWxpZGF0b3IgPT4gbmV3IHZhbGlkYXRvcihtYW5hZ2VyKSk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlZ2lzdGVyVmFsaWRhdG9yczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///939\n")}},__webpack_module_cache__={};function __webpack_require__(c){var n=__webpack_module_cache__[c];if(void 0!==n)return n.exports;var e=__webpack_module_cache__[c]={exports:{}};return __webpack_modules__[c](e,e.exports,__webpack_require__),e.exports}var __webpack_exports__=__webpack_require__(138)})();