"use strict";
exports.id = 14;
exports.ids = [14];
exports.modules = {

/***/ 1491:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2905);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4424);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_2__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-nocheck





const Imgix = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 3489, 23)), {
    loadableGenerated: {
        modules: [
            "../C:\\Users\\celal\\Desktop\\\xf6zdebirinsaat\\src\\components\\displays\\DisplayContentHtml.tsx -> " + "react-imgix"
        ]
    }
});
const DisplayContentHtml = ({ content , className , style  })=>{
    if (!content) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        className: `${className}`,
        style: style,
        children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__["default"])(content, {
            replace: (domNode)=>{
                if (domNode.name === "img" && domNode.attribs && domNode.attribs.src) {
                    const props = (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__.attributesToProps)(domNode.attribs);
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Imgix, {
                            ...props
                        })
                    }, props.src);
                }
                if (domNode.name == "table") {
                    const props = (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__.attributesToProps)(domNode.attribs);
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            overflowX: "scroll"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                            ...props,
                            children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__.domToReact)(domNode.children)
                        })
                    }, props.key);
                }
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayContentHtml);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4409);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const DisplayImage = ({ imagePath , width =1 , height , alt , className , sx , fill =true , sizes ="100vw" , imgStyle , priority =false , index , onImageClick  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        position: "relative",
        width: width,
        height: height,
        className: className,
        sx: {
            overflow: "hidden",
            cursor: "pointer",
            ...sx
        },
        "data-index": index,
        onClick: onImageClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: imagePath,
            fill: fill,
            alt: alt,
            sizes: sizes,
            priority: priority,
            style: {
                objectFit: "cover",
                ...imgStyle
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayImage);


/***/ }),

/***/ 439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7694);




const Share = ()=>{
    const [hoveredItem, setHoveredItem] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const handleIconClick = (platform)=>{
        switch(platform){
            case "phone":
                window.open("tel:+905364953074");
                break;
            case "whatsapp":
                window.open("https://wa.me/905364953074");
                break;
            case "message":
                window.open("mailto:ozdebirinsaat@gmail.com");
                break;
            case "location":
                window.open("/iletisim");
                break;
            default:
                break;
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        direction: "row",
        paddingTop: 2,
        paddingBottom: 4,
        spacing: 1,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                onClick: ()=>handleIconClick("phone"),
                iconName: "phone",
                color: hoveredItem === "phone" ? "black" : "shareIconColor",
                sx: {
                    width: 40,
                    height: 40,
                    border: "1px solid",
                    borderColor: "shareIconColor",
                    padding: 1,
                    cursor: "pointer"
                },
                onMouseEnter: ()=>setHoveredItem("phone"),
                onMouseLeave: ()=>setHoveredItem("")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                onClick: ()=>handleIconClick("whatsapp"),
                iconName: "whatsapp",
                color: hoveredItem === "whatsapp" ? "black" : "shareIconColor",
                sx: {
                    width: 40,
                    height: 40,
                    border: "1px solid",
                    borderColor: "shareIconColor",
                    padding: 1,
                    cursor: "pointer"
                },
                onMouseEnter: ()=>setHoveredItem("whatsapp"),
                onMouseLeave: ()=>setHoveredItem("")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                onClick: ()=>handleIconClick("message"),
                iconName: "message",
                color: hoveredItem === "message" ? "black" : "shareIconColor",
                sx: {
                    width: 40,
                    height: 40,
                    border: "1px solid",
                    borderColor: "shareIconColor",
                    padding: 1,
                    cursor: "pointer"
                },
                onMouseEnter: ()=>setHoveredItem("message"),
                onMouseLeave: ()=>setHoveredItem("")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                onClick: ()=>handleIconClick("location"),
                iconName: "location",
                color: hoveredItem === "location" ? "black" : "shareIconColor",
                sx: {
                    width: 40,
                    height: 40,
                    border: "1px solid",
                    borderColor: "shareIconColor",
                    padding: 1,
                    cursor: "pointer"
                },
                onMouseEnter: ()=>setHoveredItem("location"),
                onMouseLeave: ()=>setHoveredItem("")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Share);


/***/ }),

/***/ 7014:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _displays_DisplayContentHtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1491);
/* harmony import */ var _displays_DisplayImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9165);
/* harmony import */ var _miscellaneous_Share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(439);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_displays_DisplayContentHtml__WEBPACK_IMPORTED_MODULE_4__]);
_displays_DisplayContentHtml__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const WorkshopSection = ({ title , description , coverImage , coverImageAlt , content  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                marginTop: 2,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    variant: "h6",
                    component: "h1",
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                marginY: 2,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    variant: "body2",
                    children: description
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_displays_DisplayImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                imagePath: coverImage,
                alt: coverImageAlt,
                priority: true,
                width: 1,
                height: 417
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_miscellaneous_Share__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                url: router.asPath,
                title: "İstanbul \xd6zdebir İnşaat & \xc7ilingir"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_displays_DisplayContentHtml__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                content: content
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkshopSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;