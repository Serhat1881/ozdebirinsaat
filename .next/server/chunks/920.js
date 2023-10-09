"use strict";
exports.id = 920;
exports.ids = [920];
exports.modules = {

/***/ 1920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sections_NewsletterSection)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(849);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/cards/NewsletterCard.tsx
var NewsletterCard = __webpack_require__(4534);
// EXTERNAL MODULE: ./src/components/miscellaneous/Icon.tsx + 34 modules
var Icon = __webpack_require__(7694);
;// CONCATENATED MODULE: ./src/components/miscellaneous/VPagination.tsx




const CustomPagination = (0,material_.styled)(material_.Pagination)(({ theme  })=>({
        "& .MuiPagination-ul": {
            justifyContent: "center",
            borderLeft: "1px solid",
            borderColor: theme.palette.tertiary.main,
            "& .MuiPaginationItem-root": {
                width: 50,
                height: 50,
                borderRadius: 0,
                color: "#000",
                borderTop: "1px solid",
                borderBottom: "1px solid",
                borderRight: "1px solid",
                borderColor: theme.palette.tertiary.main,
                margin: 0,
                "&.Mui-disabled": {
                    borderTop: "1px solid",
                    borderBottom: "1px solid"
                },
                [theme.breakpoints.down("sm")]: {
                    width: 32,
                    height: 34
                }
            },
            "& .Mui-selected": {
                backgroundColor: "black",
                color: theme.palette.white.main
            }
        },
        "& .MuiPaginationItem-root": {
            color: "#ff0000"
        }
    }));
const RightArrowIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(Icon/* default */.Z, {
        iconName: "rightArrow",
        color: "tertiary"
    });
};
const LeftArrowIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(Icon/* default */.Z, {
        iconName: "rightArrow",
        color: "tertiary",
        sx: {
            transform: "rotate(180deg)"
        }
    });
};
const VPagination = ({ count =10 , page =0 , setPage , setLoading  })=>{
    const handleChange = (value)=>{
        setPage(value);
        if (setLoading) {
            setLoading(true);
            setTimeout(()=>{
                setLoading(false);
            }, 500);
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
        children: /*#__PURE__*/ jsx_runtime.jsx(CustomPagination, {
            count: count,
            page: page,
            onChange: (_, pageNumber)=>handleChange(pageNumber),
            renderItem: (item)=>/*#__PURE__*/ jsx_runtime.jsx(material_.PaginationItem, {
                    slots: {
                        previous: LeftArrowIcon,
                        next: RightArrowIcon
                    },
                    ...item
                })
        })
    });
};
/* harmony default export */ const miscellaneous_VPagination = (VPagination);

;// CONCATENATED MODULE: ./src/components/sections/NewsletterSection.tsx





const NewsletterSection = ({ data , filter , loading =false  })=>{
    const itemsPerPage = 9;
    const [page, setPage] = (0,external_react_.useState)(1);
    const [pageChangeLoading, setPageChangeLoading] = (0,external_react_.useState)(false);
    const componentRef = (0,external_react_.useRef)(null);
    const filterNewsletters = (0,external_react_.useCallback)((newsletter, _filter)=>{
        const newsDate = new Date(newsletter.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        switch(_filter){
            case "all":
                return true;
            case "current":
                return newsDate >= today;
            case "past":
                return newsDate < today;
            default:
                return true;
        }
    }, []);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const filteredNewsletters = data.filter((news)=>filterNewsletters(news, filter));
    const displayedNewsletters = filteredNewsletters.slice(startIndex, endIndex);
    const handlePageChange = (newPage)=>{
        setPage(newPage);
        if (componentRef.current) {
            window.scrollTo({
                top: componentRef.current.offsetTop,
                behavior: "smooth"
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        setPage(1);
    }, [
        filter
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
        ref: componentRef,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                flex: 1,
                children: /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                    container: true,
                    columnSpacing: 3,
                    rowSpacing: 2,
                    children: displayedNewsletters.map((newsletter)=>{
                        return /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                            item: true,
                            xs: 12,
                            sm: 6,
                            lg: 4,
                            justifyContent: "center",
                            display: "flex",
                            children: /*#__PURE__*/ jsx_runtime.jsx(NewsletterCard/* default */.Z, {
                                title: newsletter.title,
                                image: newsletter.image,
                                cardHref: newsletter.url,
                                priority: true,
                                loading: loading || pageChangeLoading,
                                date: undefined
                            })
                        }, newsletter.id);
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                marginY: 10,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                children: /*#__PURE__*/ jsx_runtime.jsx(miscellaneous_VPagination, {
                    count: Math.ceil(filteredNewsletters.length / itemsPerPage),
                    page: page,
                    setPage: handlePageChange,
                    setLoading: setPageChangeLoading
                })
            })
        ]
    });
};
/* harmony default export */ const sections_NewsletterSection = (NewsletterSection);


/***/ })

};
;