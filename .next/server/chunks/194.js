"use strict";
exports.id = 194;
exports.ids = [194];
exports.modules = {

/***/ 7269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const GoogleMap = ({ width ="100%" , height =600 , overlay =false  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        position: "relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: 1,
                sx: {
                    background: overlay ? "linear-gradient(to bottom, white, transparent 60%)" : "none",
                    pointerEvents: "none"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                title: "İstanbul \xd6zdebir İnşaat & \xc7ilingir",
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.6854509478244!2d29.226674176034!3d40.878776671368996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac30676e0239f%3A0xa2b4ab47552d5db8!2s%C3%96zdebir%20Pendik%20%C3%A7ilingir%20h%C4%B1rdavat%20nalbur!5e0!3m2!1str!2str!4v1696618086970!5m2!1str!2str",
                width: width,
                height: height,
                style: {
                    border: 0
                },
                allowFullScreen: true,
                loading: "lazy",
                referrerPolicy: "no-referrer-when-downgrade"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoogleMap);


/***/ }),

/***/ 8939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sections_ContactSection)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(849);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/buttons/VLinkButton.tsx
var VLinkButton = __webpack_require__(546);
// EXTERNAL MODULE: ./src/components/miscellaneous/Icon.tsx + 34 modules
var Icon = __webpack_require__(7694);
;// CONCATENATED MODULE: ./src/components/miscellaneous/WrappedIcon.tsx




const WrappedIcon = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
        position: "relative",
        width: {
            xs: 75,
            md: 100
        },
        height: {
            xs: 75,
            md: 100
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                position: "absolute",
                top: 0,
                left: 0,
                borderLeft: "1px solid",
                borderTop: "1px solid",
                width: "15%",
                height: "15%"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                position: "absolute",
                top: 0,
                right: 0,
                borderRight: "1px solid",
                borderTop: "1px solid",
                width: "15%",
                height: "15%"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                position: "absolute",
                bottom: 0,
                left: 0,
                borderLeft: "1px solid",
                borderBottom: "1px solid",
                width: "15%",
                height: "15%"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                position: "absolute",
                bottom: 0,
                right: 0,
                borderRight: "1px solid",
                borderBottom: "1px solid",
                width: "15%",
                height: "15%"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Icon/* default */.Z, {
                ...props,
                sx: {
                    fontSize: {
                        xs: 56,
                        md: 64
                    },
                    ...props.sx
                }
            })
        ]
    });
};
/* harmony default export */ const miscellaneous_WrappedIcon = (WrappedIcon);

;// CONCATENATED MODULE: ./src/components/cards/InformationWithIcon.tsx





const InformationWithIcon = ({ iconName , phoneName , text , link , target ="_self"  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Stack, {
        alignItems: "center",
        flexWrap: "wrap",
        flex: 1,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(miscellaneous_WrappedIcon, {
                iconName: iconName
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                sx: {
                    marginTop: 2,
                    textAlign: "center",
                    maxWidth: 280
                },
                children: [
                    text && link && /*#__PURE__*/ (0,jsx_runtime.jsxs)(VLinkButton/* default */.Z, {
                        href: link,
                        target: target,
                        variant: "text",
                        color: "black",
                        sx: {
                            color: "primary.second",
                            paddingY: 0,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                variant: "body2",
                                children: phoneName
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                variant: "body2",
                                children: text
                            })
                        ]
                    }),
                    text && !link && /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                        variant: "body2",
                        children: text
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const cards_InformationWithIcon = (InformationWithIcon);

;// CONCATENATED MODULE: ./src/components/sections/ContactSection.tsx




const ContactSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Stack, {
        direction: {
            xs: "column",
            md: "row"
        },
        spacing: 4,
        justifyContent: "center",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(cards_InformationWithIcon, {
                iconName: "phone",
                phoneName: "Fuat Erdağ",
                text: "0542 278 21 34",
                link: "tel:+905422782134"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(cards_InformationWithIcon, {
                iconName: "phone",
                phoneName: "Zeki Erdağ",
                text: "0000 000 00 00",
                link: "tel:+900000000000"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(cards_InformationWithIcon, {
                iconName: "whatsapp",
                text: "Fuat Erdağ",
                link: "https://wa.me/905422782134",
                target: "_blank"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(cards_InformationWithIcon, {
                iconName: "location",
                text: "İstanbul"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(cards_InformationWithIcon, {
                iconName: "message",
                text: "ozdebirinsaat@gmail.com",
                link: "mailto:ozdebirinsaat@gmail.com",
                target: "_blank"
            })
        ]
    });
};
/* harmony default export */ const sections_ContactSection = (ContactSection);


/***/ })

};
;