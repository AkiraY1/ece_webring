"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/layouts/Image.jsx":
/*!******************************************!*\
  !*** ./src/components/layouts/Image.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_MemberContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/MemberContext */ \"./src/context/MemberContext.jsx\");\n/* harmony import */ var _ASCIIText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ASCIIText */ \"./src/components/layouts/ASCIIText.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Image = ()=>{\n    _s();\n    const { memberItem } = (0,_context_MemberContext__WEBPACK_IMPORTED_MODULE_2__.useMember)();\n    let firstName = memberItem.name.split(\" \")[0].toLowerCase() // to get image\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-w-[350px] max-w-[350px] min-h-[425px] flex flex-col items-center gap-4 px-4 pt-6 font-mono text-white border-2 border-dotted rounded-lg outline outline-2 outline-offset-8 outline-stone-500 outline-dashed border-stone-600\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-4 pb-8 space-y-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ASCIIText__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    imagePath: \"/people/\".concat(firstName, \".png\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-bold\",\n                            children: [\n                                memberItem.name,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: memberItem.cohort\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                memberItem.year,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, undefined),\n                        memberItem.legacy ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Legacy status:\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-yellow-700\",\n                                    children: memberItem.status\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: memberItem.siteURL,\n                            target: \"_blank\",\n                            className: \"font-mono text-white truncate hover:text-stone-300\",\n                            children: memberItem.siteURL\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Image, \"if9jYxFAbzV9nVP+ddDHt/YPbXA=\", false, function() {\n    return [\n        _context_MemberContext__WEBPACK_IMPORTED_MODULE_2__.useMember\n    ];\n});\n_c = Image;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Image);\nvar _c;\n$RefreshReg$(_c, \"Image\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXRzL0ltYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDa0I7QUFDUztBQUNSO0FBRTVDLE1BQU1LLFFBQVE7O0lBQ1osTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR0gsaUVBQVNBO0lBQ2hDLElBQUlJLFlBQVlELFdBQVdFLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUNDLFdBQVcsR0FBRyxlQUFlOztJQUUzRSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNSLGtEQUFpQkE7b0JBQUNTLFdBQVcsV0FBcUIsT0FBVk4sV0FBVTs7Ozs7OzhCQUNuRCw4REFBQ0k7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBRUYsV0FBVTs7Z0NBQWFOLFdBQVdFLElBQUk7Z0NBQUM7Ozs7Ozs7c0NBQzFDLDhEQUFDTTtzQ0FBR1IsV0FBV1MsTUFBTTs7Ozs7O3NDQUNyQiw4REFBQ0Q7O2dDQUFHUixXQUFXVSxJQUFJO2dDQUFDOzs7Ozs7O3dCQUNuQlYsV0FBV1csTUFBTSxpQkFDaEIsOERBQUNIOztnQ0FBRTs4Q0FDRCw4REFBQ0k7b0NBQUtOLFdBQVU7OENBQW1CTixXQUFXYSxNQUFNOzs7Ozs7Ozs7OztzREFFcEQ7c0NBRUosOERBQUNDOzRCQUFFQyxNQUFNZixXQUFXZ0IsT0FBTzs0QkFBRUMsUUFBTzs0QkFBU1gsV0FBVTtzQ0FBc0ROLFdBQVdnQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt6STtHQXZCTWpCOztRQUNtQkYsNkRBQVNBOzs7S0FENUJFO0FBd0JOLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xheW91dHMvSW1hZ2UuanN4PzVkY2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZU1lbWJlciB9IGZyb20gJ0AvY29udGV4dC9NZW1iZXJDb250ZXh0JztcclxuaW1wb3J0IEFzY2lpQXJ0Q29udmVydGVyIGZyb20gJy4vQVNDSUlUZXh0JztcclxuXHJcbmNvbnN0IEltYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgbWVtYmVySXRlbSB9ID0gdXNlTWVtYmVyKCk7XHJcbiAgbGV0IGZpcnN0TmFtZSA9IG1lbWJlckl0ZW0ubmFtZS5zcGxpdCgnICcpWzBdLnRvTG93ZXJDYXNlKCkgLy8gdG8gZ2V0IGltYWdlXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LVszNTBweF0gbWF4LXctWzM1MHB4XSBtaW4taC1bNDI1cHhdIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC00IHB4LTQgcHQtNiBmb250LW1vbm8gdGV4dC13aGl0ZSBib3JkZXItMiBib3JkZXItZG90dGVkIHJvdW5kZWQtbGcgb3V0bGluZSBvdXRsaW5lLTIgb3V0bGluZS1vZmZzZXQtOCBvdXRsaW5lLXN0b25lLTUwMCBvdXRsaW5lLWRhc2hlZCBib3JkZXItc3RvbmUtNjAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdweC00IHBiLTggc3BhY2UteS02Jz5cclxuICAgICAgICA8QXNjaWlBcnRDb252ZXJ0ZXIgaW1hZ2VQYXRoPXtgL3Blb3BsZS8ke2ZpcnN0TmFtZX0ucG5nYH0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57bWVtYmVySXRlbS5uYW1lfSA8L3A+XHJcbiAgICAgICAgICA8cD57bWVtYmVySXRlbS5jb2hvcnR9PC9wPlxyXG4gICAgICAgICAgPHA+e21lbWJlckl0ZW0ueWVhcn0gPC9wPlxyXG4gICAgICAgICAge21lbWJlckl0ZW0ubGVnYWN5ID9cclxuICAgICAgICAgICAgPHA+TGVnYWN5IHN0YXR1czombmJzcDtcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy03MDBcIj57bWVtYmVySXRlbS5zdGF0dXN9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDogPD48Lz5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDxhIGhyZWY9e21lbWJlckl0ZW0uc2l0ZVVSTH0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtd2hpdGUgdHJ1bmNhdGUgaG92ZXI6dGV4dC1zdG9uZS0zMDBcIj57bWVtYmVySXRlbS5zaXRlVVJMfTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1iZXIiLCJBc2NpaUFydENvbnZlcnRlciIsIkltYWdlIiwibWVtYmVySXRlbSIsImZpcnN0TmFtZSIsIm5hbWUiLCJzcGxpdCIsInRvTG93ZXJDYXNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1hZ2VQYXRoIiwicCIsImNvaG9ydCIsInllYXIiLCJsZWdhY3kiLCJzcGFuIiwic3RhdHVzIiwiYSIsImhyZWYiLCJzaXRlVVJMIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/layouts/Image.jsx\n"));

/***/ })

});