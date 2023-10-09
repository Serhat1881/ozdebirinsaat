"use strict";
(() => {
var exports = {};
exports.id = 219;
exports.ids = [219];
exports.modules = {

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

/***/ 5140:
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
/* harmony import */ var _displays_DisplayImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9165);





const AwardsSection = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        position: "relative",
        height: 341,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: "/images/why-us/painter.webp",
                fill: true,
                alt: "Neden Biz?",
                sizes: "100vw",
                style: {
                    objectFit: "cover"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                position: "relative",
                display: {
                    xs: "none",
                    md: "flex"
                },
                justifyContent: "space-between",
                marginX: "165px",
                sx: {
                    transform: "translateY(85%)"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        position: "relative",
                        minWidth: 304 * 0.56,
                        height: 304,
                        marginRight: 1,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: "/images/awards/pipes.webp",
                            fill: true,
                            alt: "ozdebirinsaat pipes image",
                            sizes: "20vw",
                            style: {
                                objectFit: "cover"
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        position: "relative",
                        minWidth: 304 * 0.56,
                        height: 304,
                        marginRight: 1,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: "/images/awards/plumber.webp",
                            fill: true,
                            alt: "ozdebirinsaat plumber image",
                            sizes: "20vw",
                            style: {
                                objectFit: "cover"
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        position: "relative",
                        minWidth: 304 * 0.56,
                        height: 304,
                        marginRight: 1,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: "/images/awards/plumbing-pipe.webp",
                            fill: true,
                            alt: "ozdebirinsaat plumbing pipe image",
                            sizes: "20vw",
                            style: {
                                objectFit: "cover"
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        position: "relative",
                        minWidth: 304 * 0.56,
                        height: 304,
                        marginRight: 1,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: "/images/awards/plumbing.webp",
                            fill: true,
                            alt: "ozdebirinsaat plumbing image",
                            sizes: "20vw",
                            style: {
                                objectFit: "cover"
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                display: {
                    xs: "flex",
                    md: "none"
                },
                gap: 2,
                position: "relative",
                justifyContent: "space-between",
                top: "110%",
                sx: {
                    transform: "translateY(0)",
                    overflowX: "scroll"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_displays_DisplayImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        imagePath: "/images/awards/mobile/pipes.webp",
                        height: 123,
                        sizes: "25vw",
                        alt: "ozdebirinsaat pipes image",
                        sx: {
                            minWidth: 123 * 1.26
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_displays_DisplayImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        imagePath: "/images/awards/mobile/plumber.webp",
                        height: 123,
                        sizes: "25vw",
                        alt: "ozdebirinsaat plumber image",
                        sx: {
                            minWidth: 123 * 1.26
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_displays_DisplayImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        imagePath: "/images/awards/mobile/plumbing-pipe.webp",
                        height: 123,
                        sizes: "25vw",
                        alt: "ozdebirinsaat plumbing pipe image",
                        sx: {
                            minWidth: 123 * 1.26
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_displays_DisplayImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        imagePath: "/images/awards/mobile/plumbing.webp",
                        height: 123,
                        sizes: "25vw",
                        alt: "ozdebirinsaat plumbing image",
                        sx: {
                            minWidth: 123 * 1.26
                        }
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AwardsSection);


/***/ }),

/***/ 6181:
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
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2720);





const BigImageInformation = ({ image , priority =false , sizes , title , description  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        marginY: 10,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
            direction: "row",
            flexWrap: {
                xs: "wrap",
                md: "nowrap"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    position: "relative",
                    minWidth: {
                        xs: 1,
                        md: 514
                    },
                    height: {
                        xs: 350,
                        md: 683
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: image,
                        fill: true,
                        priority: priority,
                        sizes: sizes,
                        style: {
                            objectFit: "cover"
                        },
                        alt: "Taş Ev İzmir \xc7eşme Ala\xe7atı Hafriyat"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    bgcolor: "black.main",
                    marginY: {
                        xs: 0,
                        md: 8
                    },
                    display: "flex",
                    gap: 2,
                    flexDirection: "column",
                    padding: {
                        xs: 4,
                        md: 8
                    },
                    sx: {
                        paddingRight: {
                            xs: 4,
                            md: `calc(calc(100vw - ${_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"].breakpoints.values.lg */ .Z.breakpoints.values.lg}px) / 2)!important`
                        }
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            variant: "body3",
                            component: "h2",
                            color: "white.main",
                            lineHeight: 1.5,
                            marginBottom: {
                                xs: 4,
                                md: 0
                            },
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            variant: "title1",
                            color: "white.main",
                            lineHeight: 2,
                            children: description
                        })
                    ]
                })
            ]
        })
    });
};
const ColumnInformation = ({ image , priority =false , sizes , description , secondDescription  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                position: "relative",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    bgcolor: "white.main",
                    position: "absolute",
                    zIndex: 1,
                    marginX: {
                        xs: 3,
                        md: 6
                    },
                    padding: {
                        xs: 0,
                        sm: 3
                    },
                    sx: {
                        transform: "translateY(-70%)"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "body3",
                        textAlign: "center",
                        children: description || `İstanbul Özdebir İnşaat & Çilingir hizmetlerimizle, kapılarınızı açıyor, kilitlerinizi değiştiriyor ve güvenliğinizi sağlıyoruz. İstanbul’un her yerine hızlı bir şekilde ulaşıyor ve sorunlarınızı çözüyoruz. Çilingir hizmetlerimizden yararlanmak için bizi arayabilirsiniz.`
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                position: "relative",
                height: 266,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: image,
                    fill: true,
                    priority: priority,
                    alt: "Hikayemiz",
                    sizes: sizes,
                    style: {
                        objectFit: "cover"
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                bgcolor: "white.main",
                padding: 3,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    variant: "title1",
                    textAlign: "center",
                    children: secondDescription
                })
            })
        ]
    });
};
const InformationWithImageSection = ({ direction , title , description , image , priority =false , sizes ="100vw" , secondDescription  })=>{
    if (direction === "row") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BigImageInformation, {
            title: title,
            description: description,
            image: image,
            priority: priority,
            sizes: sizes
        });
    }
    if (direction === "column") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ColumnInformation, {
            secondDescription: secondDescription,
            description: description,
            image: image,
            priority: priority,
            sizes: sizes
        });
    }
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InformationWithImageSection);


/***/ }),

/***/ 1243:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ __Next_Translate__getStaticProps__18b11ca8984__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849);
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7462);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layouts_main_MainLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3260);
/* harmony import */ var _components_sections_AwardsSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5140);
/* harmony import */ var _components_sections_InformationWithImageSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6181);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_main_MainLayout__WEBPACK_IMPORTED_MODULE_5__]);
_components_layouts_main_MainLayout__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const WhyUs = ()=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts_main_MainLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        containerWidth: false,
        title: "Neden Biz?",
        description: "İstanbul \xd6zdebir İnşaat & \xc7ilingir hizmetlerimizle, kapılarınızı a\xe7ıyor, kilitlerinizi değiştiriyor ve g\xfcvenliğinizi sağlıyoruz. İstanbul’un her yerine hızlı bir şekilde ulaşıyor ve sorunlarınızı \xe7\xf6z\xfcyoruz. \xc7ilingir hizmetlerimizden yararlanmak i\xe7in bizi arayabilirsiniz.",
        image: "/images/",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
                maxWidth: "lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                    spacing: 3,
                    marginY: {
                        xs: 5,
                        sm: 5,
                        md: 5,
                        lg: 10
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                            variant: "title2",
                            component: "h1",
                            children: "Neden Biz?"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                            variant: "body3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    children: "Deneyim ve Uzmanlık "
                                }),
                                "Uzun yıllara dayanan deneyimimiz ve sekt\xf6rdeki uzmanlığımızla, her t\xfcrl\xfc inşaat projesini başarıyla y\xf6netiyoruz. İşlerimizi titizlikle planlayarak, y\xfcksek kaliteli malzemelerle ger\xe7ekleştiriyor ve projelerinizi istediğiniz şekilde hayata ge\xe7iriyoruz. M\xfcşteri memnuniyeti ve g\xfcvenilirlik bizim i\xe7in \xf6nceliklerdir. Sizlere profesyonel hizmet sunarak, inşaat ve tadilat ihtiya\xe7larınızı karşılamak i\xe7in buradayız."
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
                maxWidth: "lg",
                sx: {
                    marginRight: 0,
                    paddingRight: {
                        xs: 2,
                        md: "0!important"
                    },
                    maxWidth: `calc(100vw - calc(calc(100vw - ${theme.breakpoints.values.lg}px) / 2))!important`
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_InformationWithImageSection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    direction: "row",
                    image: "/images/why-us/why-us.webp",
                    priority: true,
                    sizes: `(max-width: ${theme.breakpoints.values.md}px) 100vw, 514px`,
                    title: "\xc7eşitli hizmetlerimizle, seramikten \xe7ilingire, boya işlerinden su tesisatına kadar geniş bir yelpazede sizin yanınızdayız. Her projeye \xf6zel \xe7\xf6z\xfcmler sunarak, evlerinizi ve işyerlerinizi istediğiniz şekilde d\xf6n\xfcşt\xfcr\xfcyoruz. Kaliteli iş\xe7ilik, uygun fiyatlar ve m\xfcşteri memnuniyeti, sunduğumuz hizmetlerin temelini oluşturuyor. İhtiya\xe7larınıza en iyi şekilde yanıt vermek i\xe7in buradayız.",
                    description: "Her ihtiyaca uygun \xe7\xf6z\xfcmler sunarak projenizi tek bir \xe7atı altında tamamlayabiliriz."
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
                maxWidth: "lg",
                sx: {
                    marginLeft: 0,
                    paddingLeft: {
                        xs: 2,
                        md: "0!important"
                    },
                    maxWidth: `calc(100vw - calc(calc(100vw - ${theme.breakpoints.values.lg}px) / 2))!important`
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    bgcolor: "black.main",
                    marginY: {
                        xs: 4,
                        md: 8
                    },
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                    padding: {
                        xs: 4,
                        md: 8
                    },
                    sx: {
                        paddingLeft: {
                            xs: 4,
                            md: `calc(calc(100vw - ${theme.breakpoints.values.lg}px) / 2)!important`
                        }
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                        variant: "body3",
                        color: "white.main",
                        lineHeight: 1.5,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                children: "Kalite ve g\xfcvence, "
                            }),
                            "işimizin temel taşlarıdır. Projelerimizde en y\xfcksek kalite malzemeleri kullanarak, işlerimizi titizlikle planlar ve uygularız. Her aşamada kalite kontrol\xfc yaparak sonu\xe7ların beklentilerinizi aşmasını sağlarız. S\xf6z verdiğimiz işi zamanında teslim eder ve m\xfcşterilerimize g\xfcvence sunarız."
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
                maxWidth: "lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            bgcolor: "white.main",
                            zIndex: 1,
                            paddingBottom: 8,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                variant: "title1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: "Maliyet-Etkinlik "
                                    }),
                                    "Rekabet\xe7i fiyatlarımızla kaliteli hizmet sunuyoruz. B\xfct\xe7enizi korurken, projelerinizi istediğiniz gibi hayata ge\xe7irmenize yardımcı oluyoruz. G\xfcvenilir ve ekonomik \xe7\xf6z\xfcmler sunuyoruz."
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_AwardsSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            bgcolor: "white.main",
                            textAlign: "center",
                            paddingTop: {
                                xs: 22,
                                md: 32
                            },
                            paddingBottom: {
                                xs: 6,
                                md: 12
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                variant: "title1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: "M\xfcşteri memnuniyeti, "
                                    }),
                                    "işimizin merkezindedir. Projelerinizi titizlikle y\xf6netir, isteklerinizi \xf6ncelik olarak kabul ederiz. Sizin memnuniyetiniz, en b\xfcy\xfck başarımızdır."
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhyUs);
async function __Next_Translate__getStaticProps__18b11ca8984__(ctx) {
    return {
        props: {
            ...await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default()({
                ...ctx,
                ..._next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__,
                pathname: "/neden-biz",
                loaderName: "getStaticProps",
                loadLocaleFrom: (l, n)=>__webpack_require__(7655)(`./${l}/${n}`).then((m)=>m.default)
            })
        }
    };
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 7462:
/***/ ((module) => {

module.exports = require("next-translate/loadNamespaces");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@vercel/analytics/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [849,612,611,769,260,720], () => (__webpack_exec__(1243)));
module.exports = __webpack_exports__;

})();