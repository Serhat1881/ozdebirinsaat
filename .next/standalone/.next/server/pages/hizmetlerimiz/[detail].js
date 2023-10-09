(() => {
var exports = {};
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 3961:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7383);
/* harmony import */ var swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9241);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4409);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_8__, swiper_react__WEBPACK_IMPORTED_MODULE_9__]);
([swiper__WEBPACK_IMPORTED_MODULE_8__, swiper_react__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const GalleryModal = ({ modalIndex , imageGallery , open , onClose  })=>{
    const { breakpoints  } = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    const [thumbsSwiper, setThumbsSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)();
    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(modalIndex);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Modal, {
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            sx: {
                outline: "none"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                    sx: {
                        width: {
                            xs: "100vw",
                            lg: "65vw"
                        },
                        height: {
                            xs: "56.25vh",
                            lg: "60vh"
                        },
                        ".swiper-button-next, .swiper-button-prev": {
                            color: "primary.main"
                        },
                        ".swiper-slide": {
                            WebkitBackfaceVisibility: "hidden",
                            WebkitTransform: "translate3d(0,0,0)"
                        },
                        ".swiper-wrapper": {
                            WebkitTransformStyle: "preserve-3d"
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_9__.Swiper, {
                        modules: [
                            swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation,
                            swiper__WEBPACK_IMPORTED_MODULE_8__.Keyboard,
                            swiper__WEBPACK_IMPORTED_MODULE_8__.Thumbs
                        ],
                        keyboard: true,
                        navigation: true,
                        thumbs: {
                            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                        },
                        initialSlide: modalIndex,
                        spaceBetween: 30,
                        style: {
                            height: "100%"
                        },
                        onTransitionStart: (swiper)=>{
                            setActiveIndex(swiper.activeIndex);
                        },
                        children: imageGallery.map(({ image , alt  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_9__.SwiperSlide, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    src: image,
                                    alt: alt,
                                    fill: true,
                                    style: {
                                        objectFit: "contain",
                                        border: "none"
                                    }
                                })
                            }, image))
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                    sx: {
                        position: "fixed",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        height: {
                            xs: 100,
                            md: 150
                        },
                        width: {
                            xs: "100vw",
                            lg: "65vw"
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_9__.Swiper, {
                        modules: [
                            swiper__WEBPACK_IMPORTED_MODULE_8__.FreeMode,
                            swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation,
                            swiper__WEBPACK_IMPORTED_MODULE_8__.Thumbs
                        ],
                        onSwiper: setThumbsSwiper,
                        freeMode: true,
                        watchSlidesProgress: true,
                        breakpoints: {
                            [breakpoints.values.xs]: {
                                slidesPerView: 3,
                                spaceBetween: 5
                            },
                            [breakpoints.values.md]: {
                                slidesPerView: 6,
                                spaceBetween: 10
                            }
                        },
                        style: {
                            height: "100%"
                        },
                        children: imageGallery.map(({ image , alt  }, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_9__.SwiperSlide, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    src: image,
                                    alt: alt,
                                    fill: true,
                                    style: {
                                        objectFit: "cover",
                                        filter: `brightness(${activeIndex === index ? 0.9 : 0.4})`
                                    }
                                })
                            }, image))
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GalleryModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6177:
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
/* harmony import */ var _displays_DisplayImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9165);
/* harmony import */ var _modals_GalleryModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3961);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modals_GalleryModal__WEBPACK_IMPORTED_MODULE_4__]);
_modals_GalleryModal__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const GallerySection = ({ imageGallery , photographer  })=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const [modalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [modalIndex, setModalIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const handleModalOpen = (e)=>{
        const { index  } = e.currentTarget.dataset;
        if (index) {
            setModalIndex(Number(index));
            setModalOpen(true);
        }
    };
    const handleModalClose = ()=>setModalOpen(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        gap: 3,
        paddingTop: 8,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                variant: "h6",
                component: "h2",
                children: "Yaptığımız İşlerden Kareler"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                container: true,
                spacing: 4,
                children: imageGallery.map(({ image , alt  }, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        xs: 12,
                        sm: 6,
                        md: 4,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_displays_DisplayImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            imagePath: image,
                            alt: alt,
                            sizes: `(max-width: ${theme.breakpoints.values.sm}px) 100vw,` + `(max-width: ${theme.breakpoints.values.md}px) 50vw,` + `(max-width: ${theme.breakpoints.values.lg}px) 33vw,` + `20vw`,
                            width: "100%",
                            height: 220,
                            imgStyle: {
                                objectPosition: "center 70%"
                            },
                            index: index,
                            onImageClick: handleModalOpen
                        })
                    }, image))
            }),
            photographer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                variant: "body1",
                children: [
                    "Fotoğraflar: ",
                    photographer
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modals_GalleryModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                modalIndex: modalIndex,
                imageGallery: imageGallery,
                open: modalOpen,
                onClose: handleModalClose
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GallerySection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3892:
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
/* harmony import */ var _cards_NewsletterCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4534);




const HighlightedProgramsSection = ({ title , programs  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                variant: "h6",
                component: "h2",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                container: true,
                justifyContent: "center",
                columnSpacing: 2,
                children: programs.map((program)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        xs: 12,
                        md: 4,
                        display: "flex",
                        justifyContent: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cards_NewsletterCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            title: program.title,
                            date: program.date,
                            image: program.image,
                            cardHref: program.url
                        })
                    }, program.id);
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HighlightedProgramsSection);


/***/ }),

/***/ 8199:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ __Next_Translate__getServerSideProps__18b11ca89a3__)
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
/* harmony import */ var _components_sections_GallerySection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6177);
/* harmony import */ var _components_sections_HighlightedWorkshopsSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3892);
/* harmony import */ var _components_sections_WorkshopSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7014);
/* harmony import */ var _data_hizmetler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9815);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_main_MainLayout__WEBPACK_IMPORTED_MODULE_5__, _components_sections_GallerySection__WEBPACK_IMPORTED_MODULE_6__, _components_sections_WorkshopSection__WEBPACK_IMPORTED_MODULE_8__]);
([_components_layouts_main_MainLayout__WEBPACK_IMPORTED_MODULE_5__, _components_sections_GallerySection__WEBPACK_IMPORTED_MODULE_6__, _components_sections_WorkshopSection__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const WorkshopDetail = ({ title , description , image , details , imageGallery , photographer , highlightedWorkshops  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_main_MainLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        title: title,
        description: description,
        image: image,
        containerWidth: "lg",
        paddingY: {
            xs: 8,
            md: 12
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
            maxWidth: false,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    paddingBottom: 8,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_WorkshopSection__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            createdAt: "",
                            title: title,
                            description: description,
                            ...details
                        }),
                        imageGallery.length !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_GallerySection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            imageGallery: imageGallery,
                            photographer: photographer
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_HighlightedWorkshopsSection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    title: "Diğer Hizmetlerimiz",
                    programs: highlightedWorkshops
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkshopDetail);
const getServerSideProps = async (context)=>{
    const { query: { detail: slug  }  } = context;
    const workshop = _data_hizmetler__WEBPACK_IMPORTED_MODULE_9__/* .workshops.find */ .yP.find((_workshop)=>_workshop.url.split("/").at(-1) === slug);
    const highlightedWorkshops = _data_hizmetler__WEBPACK_IMPORTED_MODULE_9__/* .workshops.slice */ .yP.slice(0, 4).filter((_workshop)=>_workshop.url.split("/").at(-1) !== slug).slice(0, 3);
    return {
        props: {
            ...workshop,
            highlightedWorkshops
        }
    };
};
async function __Next_Translate__getServerSideProps__18b11ca89a3__(ctx) {
    const res = await getServerSideProps(ctx);
    return {
        ...res,
        props: {
            ...res.props || {},
            ...await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default()({
                ...ctx,
                ..._next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__,
                pathname: "/hizmetlerimiz/[detail]",
                loaderName: "getServerSideProps",
                loadLocaleFrom: (l, n)=>__webpack_require__(7655)(`./${l}/${n}`).then((m)=>m.default)
            })
        }
    };
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9241:
/***/ (() => {



/***/ }),

/***/ 9176:
/***/ (() => {



/***/ }),

/***/ 7383:
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

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ 3489:
/***/ ((module) => {

"use strict";
module.exports = require("react-imgix");

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ }),

/***/ 2905:
/***/ ((module) => {

"use strict";
module.exports = import("html-react-parser");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [849,612,611,424,769,260,815,534,14], () => (__webpack_exec__(8199)));
module.exports = __webpack_exports__;

})();