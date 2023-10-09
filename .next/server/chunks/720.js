"use strict";
exports.id = 720;
exports.ids = [720];
exports.modules = {

/***/ 2720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ src_theme)
});

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/theme/components.ts
const components = {
    MuiTypography: {
        defaultProps: {
            variantMapping: {
                body3: "p"
            }
        },
        variants: [
            {
                props: {
                    color: "navlink"
                },
                style: (props)=>({
                        color: props.theme.palette.black.main,
                        fontSize: "1.125rem",
                        fontWeight: "400"
                    })
            },
            {
                props: {
                    variant: "dropwdownLink"
                },
                style: (props)=>({
                        color: props.theme.palette.white.main,
                        fontSize: "1.125rem",
                        fontWeight: "400"
                    })
            }
        ]
    },
    MuiPaper: {
        defaultProps: {
            variant: "outlined"
        },
        styleOverrides: {
            root: {
                borderRadius: 8
            }
        }
    },
    MuiButton: {
        variants: [
            {
                props: {
                    variant: "outlined"
                },
                style: (props)=>({
                        backgroundColor: props.theme.palette.transparent.main,
                        color: props.theme.palette.white.main,
                        borderRadius: 0,
                        borderColor: props.theme.palette.tertiary.main,
                        padding: "16px 24px"
                    })
            },
            {
                props: {
                    variant: "tertiary"
                },
                style: (props)=>({
                        backgroundColor: props.theme.palette.transparent.main,
                        color: props.theme.palette.white.main
                    })
            }
        ],
        defaultProps: {
            disableElevation: true
        },
        styleOverrides: {
            root: {
                minWidth: 40,
                textTransform: "none",
                "&.MuiButton-outlinedBlack": {
                    color: "#000"
                }
            }
        }
    },
    MuiDrawer: {
        styleOverrides: {
            root: {
                "& .MuiDrawer-paper": {
                    borderRadius: 0
                }
            }
        }
    },
    MuiAccordion: {
        styleOverrides: {
            root: {
                border: 0,
                "& .MuiAccordionSummary-root": {
                    paddingInline: "1.5rem"
                },
                "&.Mui-expanded:before": {
                    opacity: 1
                }
            }
        }
    },
    MuiModal: {
        styleOverrides: {
            root: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiModal-backdrop": {
                    backgroundColor: "rgba(0, 0, 0, 0.9)"
                }
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/theme/palette.ts
const palette = {
    primary: {
        main: "#FFFFFF",
        second: "#000000"
    },
    secondary: {
        main: "#2E4152"
    },
    tertiary: {
        main: "#ADADAD"
    },
    quaternary: {
        main: "#5832A9"
    },
    body: {
        main: "#C6C6C6"
    },
    black: {
        main: "#6499E9"
    },
    white: {
        main: "#FFFFFF"
    },
    border: {
        main: "#E7E7E7",
        second: "#434343",
        dark: "#D0D0D0"
    },
    shareIconColor: {
        main: "#BABABA"
    },
    imgHoverBg: {
        main: "#F3F6F8"
    },
    submenu: {
        main: "#6499E9",
        dark: "#9EDDFF"
    },
    dropdown: {
        light: "#E7E7E7",
        main: "#3D3D3D"
    },
    transparent: {
        main: "#FFFFFF00"
    }
};

;// CONCATENATED MODULE: ./src/theme/typography.ts
const typography = {
    fontFamily: "inherit",
    h1: {
        fontSize: "5rem",
        fontWeight: 700
    },
    h2: {
        fontSize: "4rem",
        fontWeight: 700
    },
    h3: {
        fontSize: "3.5rem",
        fontWeight: 700
    },
    h4: {
        fontSize: "3rem",
        fontWeight: 700
    },
    h5: {
        fontSize: "2rem",
        fontWeight: 700
    },
    h6: {
        fontSize: "1.5rem",
        fontWeight: 700
    },
    title1: {
        fontSize: "1.25rem",
        fontWeight: 400
    },
    title2: {
        fontSize: "2.5rem",
        fontWeight: 900
    },
    body1: {
        fontSize: "0.875rem",
        fontWeight: 400
    },
    body2: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: "1.675rem"
    },
    body3: {
        fontSize: "1.5rem",
        fontWeight: 400,
        lineHeight: "2.125rem"
    }
};

;// CONCATENATED MODULE: ./src/theme/index.ts




const theme = (0,material_.createTheme)({
    // @ts-ignore
    components: components,
    palette: palette,
    typography: typography
});
theme.typography.title1 = {
    ...theme.typography.title1,
    [theme.breakpoints.down("md")]: {
        fontSize: "1rem"
    }
};
theme.typography.title2 = {
    ...theme.typography.title2,
    [theme.breakpoints.down("md")]: {
        fontSize: "2rem"
    }
};
theme.typography.body2 = {
    ...theme.typography.body2,
    [theme.breakpoints.down("md")]: {
        fontSize: "0.875rem"
    }
};
theme.typography.body3 = {
    ...theme.typography.body3,
    [theme.breakpoints.down("md")]: {
        fontSize: "1.25rem"
    }
};
/* harmony default export */ const src_theme = ((0,material_.responsiveFontSizes)(theme));


/***/ })

};
;