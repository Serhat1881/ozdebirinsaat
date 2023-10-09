"use strict";
exports.id = 154;
exports.ids = [154];
exports.modules = {

/***/ 1154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const BrushAnimation = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "clamp(3rem, 10vw, 4rem)",
            animation: `bounce 1s both`,
            fontWeight: 500,
            "@keyframes bounce": {
                from: {
                    animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    transform: "translate3d(0, 0, 0)"
                },
                "20%": {
                    animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    transform: "translate3d(0, 0, 0)"
                },
                "53%": {
                    animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    transform: "translate3d(0, 0, 0)"
                },
                "80%": {
                    animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    transform: "translate3d(0, 0, 0)"
                },
                to: {
                    animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    transform: "translate3d(0, 0, 0)"
                },
                "40%, 43%": {
                    animationTimingFunction: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
                    transform: "translate3d(0, -30px, 0)"
                },
                "70%": {
                    animationTimingFunction: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
                    transform: "translate3d(0, -15px, 0)"
                },
                "90%": {
                    transform: "translate3d(0, -4px, 0)"
                }
            }
        },
        className: "animated-box",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrushAnimation);


/***/ })

};
;