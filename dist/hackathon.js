(()=>{var __webpack_modules__={752:module=>{eval('\r\nclass Autocomplete {\r\n\r\n    constructor(manager){\r\n        this.manager = manager;\r\n    }\r\n\r\n    validate(){\r\n        this.manager.sameAxisX().hasLinks().isInputValueExists();\r\n        this.markDom();\r\n    }\r\n\r\n    markDom(){\r\n        console.log("success");\r\n    }\r\n}\r\n\r\nmodule.exports = {\r\n    Autocomplete\r\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzUyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNrYXRob24vLi9zcmMvaWRlbnRpZmllcnMvYXV0b2NvbXBsZXRlLmpzP2RiZDQiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNsYXNzIEF1dG9jb21wbGV0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFuYWdlcil7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMubWFuYWdlci5zYW1lQXhpc1goKS5oYXNMaW5rcygpLmlzSW5wdXRWYWx1ZUV4aXN0cygpO1xyXG4gICAgICAgIHRoaXMubWFya0RvbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcmtEb20oKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgQXV0b2NvbXBsZXRlXHJcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///752\n')},710:(module,__unused_webpack_exports,__webpack_require__)=>{eval("const {Autocomplete} = __webpack_require__(752);\r\n\r\nconst registerIdentifier = (manager) => {\r\n    const identifiers = [\r\n        Autocomplete\r\n    ]\r\n\r\n    for(let identifier of identifiers){\r\n        try {\r\n            const isValid = new identifier(manager).validate();\r\n            if(isValid) break;\r\n        } catch (error) {\r\n            // handle errors\r\n        }\r\n    }\r\n}\r\n\r\n\r\nmodule.exports = registerIdentifier;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzEwLmpzIiwibWFwcGluZ3MiOiJBQUFBLE9BQU8sY0FBYyxFQUFFLG1CQUFPLENBQUMsR0FBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNrYXRob24vLi9zcmMvaWRlbnRpZmllcnMvcmVnaXN0ZXIuanM/NDdiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7QXV0b2NvbXBsZXRlfSA9IHJlcXVpcmUoXCIuL2F1dG9jb21wbGV0ZVwiKTtcclxuXHJcbmNvbnN0IHJlZ2lzdGVySWRlbnRpZmllciA9IChtYW5hZ2VyKSA9PiB7XHJcbiAgICBjb25zdCBpZGVudGlmaWVycyA9IFtcclxuICAgICAgICBBdXRvY29tcGxldGVcclxuICAgIF1cclxuXHJcbiAgICBmb3IobGV0IGlkZW50aWZpZXIgb2YgaWRlbnRpZmllcnMpe1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWQgPSBuZXcgaWRlbnRpZmllcihtYW5hZ2VyKS52YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICBpZihpc1ZhbGlkKSBicmVhaztcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZWdpc3RlcklkZW50aWZpZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///710\n")},138:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{eval("const identifiersManger = __webpack_require__(563)\r\nconst registerIdentifier = __webpack_require__(710)\r\nconst registerValidators = __webpack_require__(939)\r\n\r\nclass Startup {\r\n    init(){\r\n        //TODO: daniel - event and observer are invoked here\r\n        this.register();\r\n    }\r\n\r\n    register(){\r\n        registerValidators(identifiersManger);\r\n        registerIdentifier(new identifiersManger());\r\n    }\r\n}\r\n\r\nnew Startup().init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM4LmpzIiwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQixtQkFBTyxDQUFDLEdBQVc7QUFDN0MsMkJBQTJCLG1CQUFPLENBQUMsR0FBd0I7QUFDM0QsMkJBQTJCLG1CQUFPLENBQUMsR0FBdUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2thdGhvbi8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlkZW50aWZpZXJzTWFuZ2VyID0gcmVxdWlyZShcIi4vbWFuYWdlclwiKVxyXG5jb25zdCByZWdpc3RlcklkZW50aWZpZXIgPSByZXF1aXJlKFwiLi9pZGVudGlmaWVycy9yZWdpc3RlclwiKVxyXG5jb25zdCByZWdpc3RlclZhbGlkYXRvcnMgPSByZXF1aXJlKFwiLi92YWxpZGF0b3JzL3JlZ2lzdGVyXCIpXHJcblxyXG5jbGFzcyBTdGFydHVwIHtcclxuICAgIGluaXQoKXtcclxuICAgICAgICAvL1RPRE86IGRhbmllbCAtIGV2ZW50IGFuZCBvYnNlcnZlciBhcmUgaW52b2tlZCBoZXJlXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKCl7XHJcbiAgICAgICAgcmVnaXN0ZXJWYWxpZGF0b3JzKGlkZW50aWZpZXJzTWFuZ2VyKTtcclxuICAgICAgICByZWdpc3RlcklkZW50aWZpZXIobmV3IGlkZW50aWZpZXJzTWFuZ2VyKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgU3RhcnR1cCgpLmluaXQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///138\n")},563:module=>{eval("module.exports = function validatorManger(){};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTYzLmpzIiwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2F0aG9uLy4vc3JjL21hbmFnZXIuanM/NTMzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHZhbGlkYXRvck1hbmdlcigpe307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///563\n")},712:module=>{eval("class AutoCompleteValidators{\r\n    constructor(manager){\r\n        this.manager = manager;\r\n        this.register();\r\n    }\r\n\r\n    register(){\r\n        this.manager.prototype.isInputValueExists = this.isInputValueExists;\r\n    }\r\n\r\n    isInputValueExists(text, element){\r\n        return this;\r\n    }\r\n}\r\n\r\nmodule.exports = AutoCompleteValidators;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzEyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2F0aG9uLy4vc3JjL3ZhbGlkYXRvcnMvYXV0b2NvbXBsZXRlVmFsaWRhdG9yLmpzPzFkODgiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXV0b0NvbXBsZXRlVmFsaWRhdG9yc3tcclxuICAgIGNvbnN0cnVjdG9yKG1hbmFnZXIpe1xyXG4gICAgICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKCl7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyLnByb3RvdHlwZS5pc0lucHV0VmFsdWVFeGlzdHMgPSB0aGlzLmlzSW5wdXRWYWx1ZUV4aXN0cztcclxuICAgIH1cclxuXHJcbiAgICBpc0lucHV0VmFsdWVFeGlzdHModGV4dCwgZWxlbWVudCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQXV0b0NvbXBsZXRlVmFsaWRhdG9yczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///712\n")},649:module=>{eval("class DomValidators{\r\n    constructor(manager){\r\n        this.manager = manager;\r\n        this.register();\r\n    }\r\n\r\n    register(){\r\n        this.manager.prototype.hasLinks = this.hasLinks;\r\n    }\r\n\r\n    hasLinks(elements){\r\n        return this;\r\n    }\r\n}\r\n\r\nmodule.exports = DomValidators;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjQ5LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2F0aG9uLy4vc3JjL3ZhbGlkYXRvcnMvZG9tVmFsaWRhdG9ycy5qcz9hMWRjIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERvbVZhbGlkYXRvcnN7XHJcbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyKXtcclxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcigpe1xyXG4gICAgICAgIHRoaXMubWFuYWdlci5wcm90b3R5cGUuaGFzTGlua3MgPSB0aGlzLmhhc0xpbmtzO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0xpbmtzKGVsZW1lbnRzKXtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEb21WYWxpZGF0b3JzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///649\n")},555:module=>{eval("class PositionValidators{\r\n    constructor(manager){\r\n        this.manager = manager;\r\n        this.register();\r\n    }\r\n\r\n    register(){\r\n        this.manager.prototype.sameAxisX = this.sameAxisX;\r\n        this.manager.prototype.sameAxisY = this.sameAxisY;\r\n    }\r\n\r\n    sameAxisX(elements){\r\n        return this;\r\n    }\r\n\r\n    sameAxisY(elements){\r\n        return this;\r\n    }\r\n}\r\n\r\nmodule.exports = PositionValidators;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTU1LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2thdGhvbi8uL3NyYy92YWxpZGF0b3JzL3Bvc2l0aW9uVmFsaWRhdG9ycy5qcz8wOGE5Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBvc2l0aW9uVmFsaWRhdG9yc3tcclxuICAgIGNvbnN0cnVjdG9yKG1hbmFnZXIpe1xyXG4gICAgICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKCl7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyLnByb3RvdHlwZS5zYW1lQXhpc1ggPSB0aGlzLnNhbWVBeGlzWDtcclxuICAgICAgICB0aGlzLm1hbmFnZXIucHJvdG90eXBlLnNhbWVBeGlzWSA9IHRoaXMuc2FtZUF4aXNZO1xyXG4gICAgfVxyXG5cclxuICAgIHNhbWVBeGlzWChlbGVtZW50cyl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2FtZUF4aXNZKGVsZW1lbnRzKXtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3NpdGlvblZhbGlkYXRvcnM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///555\n")},939:(module,__unused_webpack_exports,__webpack_require__)=>{eval("const PositionValidators = __webpack_require__(555);\r\nconst DomValidators = __webpack_require__(649);\r\nconst AutoCompleteValidators = __webpack_require__(712);\r\n\r\nconst registerValidators = (manager) => {\r\n    const validators = [\r\n        PositionValidators,\r\n        DomValidators,\r\n        AutoCompleteValidators\r\n    ]\r\n\r\n    validators.forEach(validator => new validator(manager));\r\n}\r\n\r\n\r\nmodule.exports = registerValidators;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTM5LmpzIiwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQixtQkFBTyxDQUFDLEdBQXNCO0FBQ3pELHNCQUFzQixtQkFBTyxDQUFDLEdBQWlCO0FBQy9DLCtCQUErQixtQkFBTyxDQUFDLEdBQXlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2F0aG9uLy4vc3JjL3ZhbGlkYXRvcnMvcmVnaXN0ZXIuanM/ZjkyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQb3NpdGlvblZhbGlkYXRvcnMgPSByZXF1aXJlKFwiLi9wb3NpdGlvblZhbGlkYXRvcnNcIik7XHJcbmNvbnN0IERvbVZhbGlkYXRvcnMgPSByZXF1aXJlKFwiLi9kb21WYWxpZGF0b3JzXCIpO1xyXG5jb25zdCBBdXRvQ29tcGxldGVWYWxpZGF0b3JzID0gcmVxdWlyZShcIi4vYXV0b2NvbXBsZXRlVmFsaWRhdG9yXCIpO1xyXG5cclxuY29uc3QgcmVnaXN0ZXJWYWxpZGF0b3JzID0gKG1hbmFnZXIpID0+IHtcclxuICAgIGNvbnN0IHZhbGlkYXRvcnMgPSBbXHJcbiAgICAgICAgUG9zaXRpb25WYWxpZGF0b3JzLFxyXG4gICAgICAgIERvbVZhbGlkYXRvcnMsXHJcbiAgICAgICAgQXV0b0NvbXBsZXRlVmFsaWRhdG9yc1xyXG4gICAgXVxyXG5cclxuICAgIHZhbGlkYXRvcnMuZm9yRWFjaCh2YWxpZGF0b3IgPT4gbmV3IHZhbGlkYXRvcihtYW5hZ2VyKSk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlZ2lzdGVyVmFsaWRhdG9yczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///939\n")}},__webpack_module_cache__={};function __webpack_require__(c){var n=__webpack_module_cache__[c];if(void 0!==n)return n.exports;var r=__webpack_module_cache__[c]={exports:{}};return __webpack_modules__[c](r,r.exports,__webpack_require__),r.exports}var __webpack_exports__=__webpack_require__(138)})();