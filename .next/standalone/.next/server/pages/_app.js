(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4316:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Sofia_Sans_8c28c1', '__Sofia_Sans_Fallback_8c28c1', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif","fontStyle":"normal"},
	"className": "__className_8c28c1"
};


/***/ }),

/***/ 3913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(849);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"arguments":[{"display":"swap","fallback":["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"],"subsets":["latin-ext"],"weight":["400","500","600","700"]}],"import":"Sofia_Sans","path":"src\\pages\\_app.tsx","variableName":"sofia"}
var target_arguments_display_swap_fallback_apple_system_BlinkMacSystemFont_Segoe_UI_Roboto_Oxygen_Ubuntu_Cantarell_Fira_Sans_Droid_Sans_Helvetica_Neue_sans_serif_subsets_latin_ext_weight_400_500_600_700_import_Sofia_Sans_path_src_pages_app_tsx_variableName_sofia_ = __webpack_require__(4316);
var target_arguments_display_swap_fallback_apple_system_BlinkMacSystemFont_Segoe_UI_Roboto_Oxygen_Ubuntu_Cantarell_Fira_Sans_Droid_Sans_Helvetica_Neue_sans_serif_subsets_latin_ext_weight_400_500_600_700_import_Sofia_Sans_path_src_pages_app_tsx_variableName_sofia_default = /*#__PURE__*/__webpack_require__.n(target_arguments_display_swap_fallback_apple_system_BlinkMacSystemFont_Segoe_UI_Roboto_Oxygen_Ubuntu_Cantarell_Fira_Sans_Droid_Sans_Helvetica_Neue_sans_serif_subsets_latin_ext_weight_400_500_600_700_import_Sofia_Sans_path_src_pages_app_tsx_variableName_sofia_);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: ./i18n.json
var i18n = __webpack_require__(608);
;// CONCATENATED MODULE: external "next-translate/appWithI18n"
const appWithI18n_namespaceObject = require("next-translate/appWithI18n");
var appWithI18n_default = /*#__PURE__*/__webpack_require__.n(appWithI18n_namespaceObject);
// EXTERNAL MODULE: ./src/styles/globals.scss
var globals = __webpack_require__(6961);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
// EXTERNAL MODULE: ./src/components/partials/AppHead.tsx + 1 modules
var AppHead = __webpack_require__(7917);
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./src/store/slices/general.ts

const initialState = {};
const generalSlice = (0,toolkit_namespaceObject.createSlice)({
    name: "general",
    initialState,
    reducers: {}
});
const { reducer  } = generalSlice;
/* harmony default export */ const general = (reducer);

;// CONCATENATED MODULE: ./src/store/index.ts
/* eslint-disable import/no-extraneous-dependencies */ 



const reducers = (0,external_redux_namespaceObject.combineReducers)({
    general: general
});
const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: reducers,
    devTools: "production" !== "production",
    middleware: [
        (external_redux_thunk_default())
    ]
});
/* harmony default export */ const src_store = (store);

// EXTERNAL MODULE: ./src/theme/index.ts + 3 modules
var theme = __webpack_require__(2720);
;// CONCATENATED MODULE: ./src/pages/_app.tsx












function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(external_react_redux_namespaceObject.Provider, {
                store: src_store,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.ThemeProvider, {
                    theme: theme/* default */.Z,
                    children: [
                        jsx_runtime.jsx((style_default()), {
                            id: "37e4c0036cf45280",
                            dynamic: [
                                (target_arguments_display_swap_fallback_apple_system_BlinkMacSystemFont_Segoe_UI_Roboto_Oxygen_Ubuntu_Cantarell_Fira_Sans_Droid_Sans_Helvetica_Neue_sans_serif_subsets_latin_ext_weight_400_500_600_700_import_Sofia_Sans_path_src_pages_app_tsx_variableName_sofia_default()).style.fontFamily
                            ],
                            children: `html{font-family:${(target_arguments_display_swap_fallback_apple_system_BlinkMacSystemFont_Segoe_UI_Roboto_Oxygen_Ubuntu_Cantarell_Fira_Sans_Droid_Sans_Helvetica_Neue_sans_serif_subsets_latin_ext_weight_400_500_600_700_import_Sofia_Sans_path_src_pages_app_tsx_variableName_sofia_default()).style.fontFamily}}`
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(AppHead/* default */.Z, {}),
                        /*#__PURE__*/ jsx_runtime.jsx(Component, {
                            ...pageProps,
                            className: style_default().dynamic([
                                [
                                    "37e4c0036cf45280",
                                    [
                                        (target_arguments_display_swap_fallback_apple_system_BlinkMacSystemFont_Segoe_UI_Roboto_Oxygen_Ubuntu_Cantarell_Fira_Sans_Droid_Sans_Helvetica_Neue_sans_serif_subsets_latin_ext_weight_400_500_600_700_import_Sofia_Sans_path_src_pages_app_tsx_variableName_sofia_default()).style.fontFamily
                                    ]
                                ]
                            ]) + " " + (pageProps && pageProps.className != null && pageProps.className || "")
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (appWithI18n_default()(App, {
    ...i18n,
    isLoader: true,
    skipInitialProps: true,
    loadLocaleFrom: (l, n)=>__webpack_require__(7655)(`./${l}/${n}`).then((m)=>m.default)
}));


/***/ }),

/***/ 6961:
/***/ (() => {



/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [849,769,720], () => (__webpack_exec__(3913)));
module.exports = __webpack_exports__;

})();