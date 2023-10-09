(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7672:
/***/ ((module) => {

// Exports
module.exports = {
	"SliderPaginationWrapper": "SliderPagination_SliderPaginationWrapper__Qw0KZ"
};


/***/ }),

/***/ 4851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ cards_InformationCard)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(849);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/buttons/VLinkButton.tsx
var VLinkButton = __webpack_require__(546);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4409);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/miscellaneous/FramedPicture.tsx




const FramedPhotoCollage = ({ images  })=>{
    const theme = (0,material_.useTheme)();
    const isWideScreen = (0,material_.useMediaQuery)(theme.breakpoints.up("md"));
    const [currentImages] = external_react_default().useState(images);
    const containerRef = (0,external_react_.useRef)(null);
    const [scrollOffset, setScrollOffset] = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        const handleScroll = ()=>{
            if (containerRef.current && isWideScreen) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const centerY = window.innerHeight / 2;
                const scrollPercentage = (centerY - containerRect.top - containerRect.height / 2) / window.innerHeight;
                const maxScrollOffset = 0.001;
                if (scrollPercentage <= maxScrollOffset) {
                    setScrollOffset(scrollPercentage);
                } else {
                    setScrollOffset(maxScrollOffset);
                }
            }
        };
        if (!isWideScreen) {
            setScrollOffset(0);
        }
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, [
        isWideScreen
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Stack, {
        ref: containerRef,
        position: "relative",
        maxHeight: {
            xs: 600,
            md: 475
        },
        height: "100vh",
        overflow: "hidden",
        spacing: 0.5,
        padding: "1.25rem 1rem",
        direction: {
            xs: "column",
            md: "row"
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                position: "absolute",
                top: 0,
                left: 0,
                width: 70,
                height: 70,
                zIndex: -1,
                borderTop: "1px solid",
                borderLeft: "1px solid"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                position: "absolute",
                top: 0,
                right: 0,
                width: 70,
                height: 70,
                borderTop: "1px solid",
                borderRight: "1px solid",
                zIndex: -1
            }),
            /*#__PURE__*/ jsx_runtime.jsx(material_.Stack, {
                flex: 1,
                spacing: 0.5,
                direction: {
                    xs: "row",
                    md: "column"
                },
                children: currentImages.slice(0, 2).map(({ src , alt  }, index)=>/*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                        flex: 1,
                        position: "relative",
                        sx: {
                            transform: `translateX(${scrollOffset * (index + 1) * 250}px) translateY(${scrollOffset * (index + 1) * 250}px)`,
                            transition: "transform 0.3s ease",
                            objectFit: "cover",
                            zIndex: 1,
                            "&:nth-of-type(2)": {
                                transform: `translateX(${-scrollOffset * (index + 1) * -150}px) translateY(${scrollOffset * (index + 1) * -150}px)`,
                                transition: "transform 0.3s ease",
                                objectFit: "cover",
                                zIndex: 1
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: src,
                            alt: alt,
                            fill: true,
                            sizes: `(max-width: ${theme.breakpoints.values.sm}px) 258px` + `,(max-width: ${theme.breakpoints.values.md}px) 400px` + `, 370px`,
                            style: {
                                objectFit: "cover"
                            }
                        })
                    }, src))
            }),
            /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                flex: 1,
                position: "relative",
                children: currentImages[2]?.src && /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: currentImages[2].src,
                    alt: currentImages[2].alt,
                    fill: true,
                    sizes: `(max-width: ${theme.breakpoints.values.sm}px) 520px` + `,(max-width: ${theme.breakpoints.values.md}px) 804px` + `, 370px`,
                    style: {
                        objectFit: "cover",
                        objectPosition: "center 72%"
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(material_.Stack, {
                flex: 1,
                spacing: 0.5,
                direction: {
                    xs: "row",
                    md: "column"
                },
                children: currentImages.slice(3).map(({ src , alt  }, index)=>/*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                        flex: 1,
                        position: "relative",
                        sx: {
                            transform: `translateX(${-scrollOffset * (index + 1) * 250}px) translateY(${scrollOffset * (index + 1) * 250}px)`,
                            transition: "transform 0.3s ease",
                            objectFit: "cover",
                            "&:nth-of-type(2)": {
                                transform: `translateX(${scrollOffset * (index + 1) * -150}px) translateY(${scrollOffset * (index + 1) * -150}px)`,
                                transition: "transform 0.3s ease",
                                objectFit: "cover",
                                zIndex: 1
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: src,
                            alt: alt,
                            fill: true,
                            sizes: `(max-width: ${theme.breakpoints.values.sm}px) 258px` + `,(max-width: ${theme.breakpoints.values.md}px) 400px` + `, 370px`,
                            style: {
                                objectFit: "cover"
                            }
                        })
                    }, src))
            }),
            /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "60%",
                zIndex: -1,
                bgcolor: "black.main"
            })
        ]
    });
};
/* harmony default export */ const FramedPicture = (FramedPhotoCollage);

;// CONCATENATED MODULE: ./src/components/cards/InformationCard.tsx





const InformationCard = ({ title , description , images , buttonHref  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
        marginTop: 12,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(FramedPicture, {
                images: images
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Stack, {
                alignItems: "center",
                paddingX: {
                    xs: 0,
                    sm: 5,
                    md: 10
                },
                paddingTop: 5,
                paddingBottom: 2,
                spacing: 2,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                        variant: "title2",
                        component: "h2",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                        variant: "body1",
                        textAlign: "center",
                        children: description
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(VLinkButton/* default */.Z, {
                        href: buttonHref,
                        variant: "outlined",
                        endIconName: "rightArrow",
                        color: "black",
                        sx: {
                            marginTop: 3
                        },
                        children: "Detaylı Bilgi"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const cards_InformationCard = (InformationCard);


/***/ }),

/***/ 3868:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_hizmetler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9815);
/* harmony import */ var _example_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8388);
/* harmony import */ var _sliders_standart_StandartSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(866);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sliders_standart_StandartSlider__WEBPACK_IMPORTED_MODULE_5__]);
_sliders_standart_StandartSlider__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const SliderSection = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        container: true,
        columnSpacing: {
            xs: 0,
            md: 10
        },
        paddingTop: {
            xs: 10,
            md: 0
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                item: true,
                xs: 12,
                md: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h5",
                        component: "h2",
                        fontWeight: 900,
                        children: _example_data__WEBPACK_IMPORTED_MODULE_4__/* .sliderData.title */ .Z.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "body2",
                        children: _example_data__WEBPACK_IMPORTED_MODULE_4__/* .sliderData.description */ .Z.description
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                item: true,
                xs: 12,
                md: 7,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sliders_standart_StandartSlider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    slides: _data_hizmetler__WEBPACK_IMPORTED_MODULE_3__/* .programs */ .O2,
                    href: _example_data__WEBPACK_IMPORTED_MODULE_4__/* .sliderData.href */ .Z.href
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7643:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3015);
/* harmony import */ var _components_buttons_VButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5214);
/* harmony import */ var _helpers_sliders_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5531);
/* harmony import */ var _hooks_useSwiperRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3503);
/* harmony import */ var _SliderItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5349);
/* harmony import */ var _SliderPagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6741);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_5__, swiper_react__WEBPACK_IMPORTED_MODULE_6__]);
([swiper__WEBPACK_IMPORTED_MODULE_5__, swiper_react__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const HomeMainSlider = ({ slides  })=>{
    const { breakpoints  } = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const [paginationEl, paginationElRef] = (0,_hooks_useSwiperRef__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const handlePrev = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);
    const handleNext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const interval = setInterval(()=>{
            handleNext();
        }, 15000);
        return ()=>clearInterval(interval);
    }, [
        handleNext
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        position: "relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.Swiper, {
                direction: "vertical",
                ref: sliderRef,
                loop: true,
                pagination: {
                    type: "custom",
                    el: paginationEl,
                    renderCustom (_, current, total) {
                        return (0,_helpers_sliders_pagination__WEBPACK_IMPORTED_MODULE_11__/* .paginationMainSlider */ .$)(current, total);
                    }
                },
                modules: [
                    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination
                ],
                breakpoints: {
                    [breakpoints.values.xs]: {
                        direction: "horizontal"
                    },
                    [breakpoints.values.md]: {
                        direction: "vertical"
                    }
                },
                style: {
                    height: "calc(100vh - 84px)"
                },
                autoplay: {
                    delay: 15000,
                    disableOnInteraction: false
                },
                speed: 1000,
                children: slides.map((slide, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SliderItem__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            title: slide.title,
                            priority: index === 0,
                            image: slide.image,
                            description: slide.description,
                            buttonHref: slide.buttonHref
                        })
                    }, slide.id);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
                    maxWidth: "xl",
                    sx: {
                        height: "100%",
                        display: "flex",
                        alignItems: {
                            xs: "flex-start",
                            md: "center"
                        },
                        paddingTop: {
                            xs: 8,
                            md: 0
                        },
                        justifyContent: "flex-end"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                        direction: {
                            xs: "row",
                            md: "column"
                        },
                        alignItems: "center",
                        spacing: {
                            xs: 2,
                            md: 1
                        },
                        paddingBottom: {
                            xs: 4,
                            md: 0
                        },
                        zIndex: 1,
                        sx: {
                            "& > button": {
                                display: {
                                    xs: "none",
                                    md: "flex"
                                }
                            }
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_buttons_VButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                onClick: handlePrev,
                                startIconName: "rightArrow",
                                variant: "outlined",
                                "aria-label": "Previous slide",
                                sx: {
                                    width: 40,
                                    height: 40,
                                    "& span": {
                                        margin: 0
                                    },
                                    "& svg": {
                                        transform: {
                                            xs: "rotate(180deg) ",
                                            md: "rotate(-90deg) !important"
                                        },
                                        transition: {
                                            xs: "transform 0.3s",
                                            md: "transform 0.3s"
                                        }
                                    },
                                    "&:hover svg": {
                                        transform: {
                                            md: "scale(1.2) translateY(-2px) rotate(-90deg)!important"
                                        }
                                    }
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SliderPagination__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                ref: paginationElRef
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_buttons_VButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                onClick: handleNext,
                                startIconName: "rightArrow",
                                variant: "outlined",
                                "aria-label": "Next slide",
                                sx: {
                                    width: 40,
                                    height: 40,
                                    "& span": {
                                        margin: 0
                                    },
                                    "& svg": {
                                        transform: {
                                            xs: "rotate(0)",
                                            md: "rotate(90deg) !important"
                                        },
                                        transition: {
                                            xs: "transform 0.3s",
                                            md: "transform 0.3s"
                                        }
                                    },
                                    "&:hover svg": {
                                        transform: {
                                            xs: "scale(1.2) translateX(2px) rotate(0) !important",
                                            md: "scale(1.2) translateY(2px) rotate(90deg) !important"
                                        }
                                    }
                                }
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeMainSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SliderItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(849);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4409);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/buttons/VLinkButton.tsx
var VLinkButton = __webpack_require__(546);
;// CONCATENATED MODULE: ./src/components/sliders/home-main/SliderOverlay.tsx



const SliderOverlay = ({ children , type ="dark" , ...props })=>{
    const renderOverlayTypeSX = ()=>{
        switch(type){
            case "dark":
                return {
                    backgroundColor: "rgba(0,0,0,.5)",
                    width: "100%",
                    height: "100%"
                };
            default:
                return {
                    backgroundColor: "rgba(0,0,0,.5)",
                    width: "100%",
                    height: "100%"
                };
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
        ...props,
        sx: {
            ...renderOverlayTypeSX(),
            ...props.sx
        },
        children: children
    });
};
SliderOverlay.displayName = "SliderOverlay";
/* harmony default export */ const home_main_SliderOverlay = (SliderOverlay);

;// CONCATENATED MODULE: ./src/components/sliders/home-main/SliderItem.tsx






const HomeMainSliderItem = ({ title , description , image , priority =false , buttonHref ="#!"  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(home_main_SliderOverlay, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                position: "fixed",
                zIndex: -1,
                height: "100%",
                width: "100%",
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: image,
                    fill: true,
                    sizes: "100vw",
                    priority: priority,
                    alt: title,
                    style: {
                        objectFit: "cover",
                        objectPosition: "center"
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(material_.Container, {
                maxWidth: "xl",
                sx: {
                    height: "100%"
                },
                children: /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                    container: true,
                    alignItems: "center",
                    columnSpacing: 10,
                    sx: {
                        height: "100%"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Grid, {
                        item: true,
                        xs: 11,
                        md: 6,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                variant: "h2",
                                component: "h1",
                                color: "white.main",
                                fontWeight: 400,
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                marginTop: 2,
                                children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                    variant: "body2",
                                    color: "white.main",
                                    children: description
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                marginTop: 5,
                                children: /*#__PURE__*/ jsx_runtime.jsx(VLinkButton/* default */.Z, {
                                    href: buttonHref,
                                    variant: "outlined",
                                    endIconName: "rightArrow",
                                    children: "Detaylı Bilgi"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const SliderItem = (HomeMainSliderItem);


/***/ }),

/***/ 6741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SliderPagination_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7672);
/* harmony import */ var _SliderPagination_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SliderPagination_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const SliderPagination = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef((_, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        ref: ref,
        className: (_SliderPagination_module_scss__WEBPACK_IMPORTED_MODULE_3___default().SliderPaginationWrapper)
    });
});
SliderPagination.displayName = "SliderPagination";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderPagination);


/***/ }),

/***/ 866:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _components_buttons_VButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5214);
/* harmony import */ var _components_buttons_VLinkButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(546);
/* harmony import */ var _StandartSliderItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7960);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
swiper_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const StandartSlider = ({ slides , href  })=>{
    const { breakpoints  } = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const handlePrev = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);
    const handleNext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                ref: sliderRef,
                slidesPerView: 1,
                spaceBetween: 40,
                breakpoints: {
                    [breakpoints.values.sm]: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    }
                },
                children: slides.map((slide)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StandartSliderItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            ...slide
                        })
                    }, slide.id);
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                direction: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 4,
                children: [
                    (isMobile && slides.length > 1 || !isMobile && slides.length > 2) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        direction: "row",
                        spacing: 1.5,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_buttons_VButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                onClick: handlePrev,
                                startIconName: "rightArrow",
                                variant: "outlined",
                                color: "black",
                                "aria-label": "Previous slide",
                                sx: {
                                    width: 45,
                                    height: 45,
                                    backgroundColor: "white.main",
                                    "&:hover": {
                                        backgroundColor: "white.main"
                                    },
                                    "& span": {
                                        margin: 0
                                    }
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_buttons_VButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                onClick: handleNext,
                                endIconName: "rightArrow",
                                variant: "outlined",
                                color: "black",
                                "aria-label": "Next slide",
                                sx: {
                                    width: 45,
                                    height: 45,
                                    backgroundColor: "white.main",
                                    "&:hover": {
                                        backgroundColor: "white.main"
                                    },
                                    "& span": {
                                        margin: 0
                                    }
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_buttons_VLinkButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        href: href,
                        endIconName: "rightArrow",
                        color: "black",
                        children: "T\xfcm\xfcn\xfc G\xf6r"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StandartSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4409);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8965);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_miscellaneous_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7694);






const StandartSliderItem = ({ image , title , description , url =""  })=>{
    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        display: "flex",
        flexDirection: "column",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                onMouseEnter: ()=>setIsHovered(true),
                onMouseLeave: ()=>setIsHovered(false),
                position: "relative",
                left: 10,
                right: 10,
                sx: {
                    bottom: -96,
                    width: "calc(100% - 20px)",
                    height: {
                        xs: 320,
                        sm: 300,
                        md: 278
                    },
                    marginTop: {
                        xs: -8,
                        sm: -6,
                        md: 0
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: image,
                    fill: true,
                    alt: title,
                    style: {
                        transform: isHovered ? "scale(1.07)" : "scale(1)",
                        transition: "transform 0.3s",
                        objectFit: "cover"
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                onMouseEnter: ()=>setIsHovered(true),
                onMouseLeave: ()=>setIsHovered(false),
                bgcolor: "black.main",
                paddingTop: "96px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        direction: "row",
                        justifyContent: "space-between",
                        paddingX: 2,
                        marginTop: 1.25
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        marginX: 2,
                        paddingTop: 3.5,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                variant: "title1",
                                color: "white.main",
                                marginBottom: 1,
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                variant: "body1",
                                color: "body.main",
                                sx: {
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 7,
                                    overflow: "hidden"
                                },
                                children: description
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: url,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    display: "flex",
                                    marginY: 4,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                            variant: "subtitle2",
                                            component: "span",
                                            color: "white.main",
                                            children: "Detaylı Bilgi"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_miscellaneous_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            iconName: "rightArrow",
                                            color: "white",
                                            sx: {
                                                marginLeft: 1,
                                                transition: "transform 0.3s",
                                                transform: isHovered ? "scaleX(1.2) translateX(2px)" : ""
                                            }
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StandartSliderItem);


/***/ }),

/***/ 2937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ heroSlider)
/* harmony export */ });
const heroSlider = [
    {
        id: 1,
        image: "/images/hero-slider/hero-slide-1.webp",
        title: "Hizmetlerimiz",
        description: "Geniş hizmet yelpazemizle her ihtiyacınıza yanıt veriyoruz. Seramik, \xe7ilingir, boya, sıva, su tesisatı ve daha fazlası! ",
        buttonHref: "/iletisim"
    },
    {
        id: 2,
        image: "/images/hero-slider/hero-slide-2.webp",
        title: "Kalite ve G\xfcvence",
        description: "Malzeme se\xe7iminden son teslimata kadar her aşamada kalite kontrol\xfc. İşlerimizi zamanında ve \xf6ng\xf6r\xfclen şekilde teslim ediyoruz.",
        buttonHref: "/iletisim"
    },
    {
        id: 3,
        image: "/images/hero-slider/hero-slide-3.webp",
        title: "M\xfcşteri Memnuniyeti",
        description: "M\xfcşterilerimizin memnuniyeti, en b\xfcy\xfck \xf6nceliğimizdir. Her adımda iletişimde olur, m\xfcşteri taleplerini dikkate alırız.",
        buttonHref: "/iletisim"
    },
    {
        id: 4,
        image: "/images/hero-slider/hero-slide-4.webp",
        title: "Rekabet\xe7i Fiyatlar",
        description: "Kaliteli hizmetler sunarken rekabet\xe7i fiyatlarla \xe7alışıyoruz. B\xfct\xe7enizi korurken hayalinizdeki projeyi ger\xe7ekleştirmenize yardımcı oluyoruz.",
        buttonHref: "/iletisim"
    }
];


/***/ }),

/***/ 8388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ exampleStory),
/* harmony export */   "Z": () => (/* binding */ sliderData)
/* harmony export */ });
const sliderData = {
    title: "Hizmetlerimiz",
    description: `Çeşitli hizmetlerimizle, seramikten çilingire, boya işlerinden su tesisatına kadar geniş bir yelpazede sizin yanınızdayız. Her projeye özel çözümler sunarak, evlerinizi ve işyerlerinizi istediğiniz şekilde dönüştürüyoruz. Kaliteli işçilik, uygun fiyatlar ve müşteri memnuniyeti, sunduğumuz hizmetlerin temelini oluşturuyor. İhtiyaçlarınıza en iyi şekilde yanıt vermek için buradayız.`,
    href: "/hizmetlerimiz"
};
const exampleStory = {
    images: [
        {
            src: "/images/home-page-img/cilingir-locksmith-1.webp",
            alt: `İstanbul cilingir locksmith ozdebirinsaat.com özdebir inşaat özdebirinsaat.com`
        },
        {
            src: "/images/home-page-img/cilingir-locksmith-2.webp",
            alt: `İstanbul cilingir locksmith ozdebirinsaat.com özdebir inşaat özdebirinsaat.com`
        },
        {
            src: "/images/home-page-img/cilingir-locksmith-3.webp",
            alt: `İstanbul cilingir locksmith ozdebirinsaat.com özdebir inşaat özdebirinsaat.com`
        },
        {
            src: "/images/home-page-img/cilingir-locksmith-4.webp",
            alt: `İstanbul cilingir locksmith ozdebirinsaat.com özdebir inşaat özdebirinsaat.com`
        },
        {
            src: "/images/home-page-img/cilingir-locksmith-5.webp",
            alt: `İstanbul cilingir locksmith ozdebirinsaat.com özdebir inşaat özdebirinsaat.com`
        }
    ],
    title: "\xc7ilingir Hizmetleri Sunuyoruz",
    description: `Çilingir hizmetlerimizle, kapılarınızı açıyor, kilitlerinizi değiştiriyor ve güvenliğinizi sağlıyoruz. İstanbul’un her yerine hızlı bir şekilde ulaşıyor ve sorunlarınızı çözüyoruz. Çilingir hizmetlerimizden yararlanmak için bizi arayabilirsiniz.`,
    buttonHref: "/iletisim"
};


/***/ }),

/***/ 5531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ paginationMainSlider)
/* harmony export */ });
const paginationMainSlider = (current, total)=>{
    return `<span class="swiper-pagination-current">${current}</span>
    <span class="divider"></span>
    <span class="swiper-pagination-total">${total}</span>`;
};


/***/ }),

/***/ 3503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useSwiperRef = ()=>{
    const [wrapper, setWrapper] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setWrapper(ref.current);
    }, []);
    return [
        wrapper,
        ref
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSwiperRef);


/***/ }),

/***/ 9117:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ __Next_Translate__getStaticProps__18b11ca8973__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849);
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7462);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_cards_InformationCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4851);
/* harmony import */ var _components_layouts_main_MainLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3260);
/* harmony import */ var _components_maps_GoogleMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7269);
/* harmony import */ var _components_sections_ContactSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8939);
/* harmony import */ var _components_sections_SliderSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3868);
/* harmony import */ var _components_sliders_home_main_HomeMainSlider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7643);
/* harmony import */ var _data_heroSlider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2937);
/* harmony import */ var _example_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8388);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_main_MainLayout__WEBPACK_IMPORTED_MODULE_5__, _components_sections_SliderSection__WEBPACK_IMPORTED_MODULE_8__, _components_sliders_home_main_HomeMainSlider__WEBPACK_IMPORTED_MODULE_9__]);
([_components_layouts_main_MainLayout__WEBPACK_IMPORTED_MODULE_5__, _components_sections_SliderSection__WEBPACK_IMPORTED_MODULE_8__, _components_sliders_home_main_HomeMainSlider__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Home = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts_main_MainLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        title: "Anasayfa",
        description: "İstanbul \xd6zdebir İnşaat & \xc7ilingir hizmetlerimizle, kapılarınızı a\xe7ıyor, kilitlerinizi değiştiriyor ve g\xfcvenliğinizi sağlıyoruz. İstanbul’un her yerine hızlı bir şekilde ulaşıyor ve sorunlarınızı \xe7\xf6z\xfcyoruz. \xc7ilingir hizmetlerimizden yararlanmak i\xe7in bizi arayabilirsiniz.",
        containerWidth: false,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sliders_home_main_HomeMainSlider__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                slides: _data_heroSlider__WEBPACK_IMPORTED_MODULE_10__/* .heroSlider */ .r
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
                maxWidth: false,
                sx: {
                    backgroundImage: "radial-gradient(#E7E7E7 10%, transparent 10%)",
                    backgroundPosition: " 8px 8px",
                    backgroundSize: "16px 16px",
                    backgroundColor: "rgb(255, 255, 255)"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
                    maxWidth: "lg",
                    sx: {
                        pb: {
                            xs: 0,
                            sm: 5,
                            md: 10
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_SliderSection__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
                maxWidth: "lg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cards_InformationCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    ..._example_data__WEBPACK_IMPORTED_MODULE_11__/* .exampleStory */ .W
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
                maxWidth: false,
                sx: {
                    padding: "0!important"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_maps_GoogleMap__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    overlay: true
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
                maxWidth: "md",
                sx: {
                    paddingY: 10
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_ContactSection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
async function __Next_Translate__getStaticProps__18b11ca8973__(ctx) {
    return {
        props: {
            ...await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default()({
                ...ctx,
                ..._next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__,
                pathname: "/index",
                loaderName: "getStaticProps",
                loadLocaleFrom: (l, n)=>__webpack_require__(7655)(`./${l}/${n}`).then((m)=>m.default)
            })
        }
    };
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2996:
/***/ (() => {



/***/ }),

/***/ 8722:
/***/ (() => {



/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 7462:
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/loadNamespaces");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [849,612,611,769,260,815,546,194], () => (__webpack_exec__(9117)));
module.exports = __webpack_exports__;

})();