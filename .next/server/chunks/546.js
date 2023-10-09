"use strict";
exports.id = 546;
exports.ids = [546];
exports.modules = {

/***/ 5214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _miscellaneous_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7694);




const VButton = ({ children , startIconName , endIconName , iconProps , ...props })=>{
    const StartIcon = startIconName ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_miscellaneous_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        iconName: startIconName,
        ...iconProps
    }) : null;
    const EndIcon = endIconName ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_miscellaneous_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        iconName: endIconName,
        ...iconProps
    }) : null;
    const getSX = ()=>{
        if (startIconName === "rightArrow") {
            return {
                "& svg": {
                    transform: "rotate(180deg)",
                    transition: "transform 0.3s"
                },
                ":hover svg": {
                    transform: "rotate(180deg) scaleX(1.2) translateX(2px)"
                }
            };
        }
        if (endIconName === "rightArrow") {
            return {
                "& svg": {
                    transition: "transform 0.3s"
                },
                ":hover svg": {
                    transform: "scaleX(1.2) translateX(2px)"
                }
            };
        }
        return null;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
        startIcon: StartIcon,
        endIcon: EndIcon,
        ...props,
        sx: {
            ...getSX(),
            ...props.sx
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VButton);


/***/ }),

/***/ 546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8965);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _VButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5214);




const VLinkButton = ({ href , passHref , legacyBehavior , target ="_self" , children , ...buttonProps })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        passHref: passHref,
        legacyBehavior: legacyBehavior,
        target: target,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            ...buttonProps,
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VLinkButton);


/***/ })

};
;