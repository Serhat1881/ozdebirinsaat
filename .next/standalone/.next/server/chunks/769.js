exports.id = 769;
exports.ids = [769];
exports.modules = {

/***/ 7655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./tr/common": [
		2973,
		973
	],
	"./tr/common.json": [
		2973,
		973
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 7655;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 7917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ partials_AppHead)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(849);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/schemas/data.ts
const mainSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "\xd6zdebir İnşaat & \xc7ilingir",
    url: "http://www.example.com/",
    description: `İstanbul Özdebir İnşaat & Çilingir hizmetlerimizle, kapılarınızı açıyor, kilitlerinizi değiştiriyor ve güvenliğinizi sağlıyoruz. İstanbul’un her yerine hızlı bir şekilde ulaşıyor ve sorunlarınızı çözüyoruz. Çilingir hizmetlerimizden yararlanmak için bizi arayabilirsiniz.`,
    sameAs: [
        "https://www.instagram.com/ozdebirinsaat"
    ],
    location: {
        "@type": "Place",
        name: "istanbul",
        address: {
            "@type": "PostalAddress",
            streetAddress: "İstanbul \xd6zdebir İnşaat & \xc7ilingir",
            addressLocality: "istanbul pendik",
            postalCode: "34890",
            addressCountry: "T\xfcrkiye"
        }
    },
    logo: "http://www.example.com/logo.png",
    foundingDate: "2023",
    event: [
        {
            "@type": "Event",
            name: "İstanbul \xd6zdebir İnşaat & \xc7ilingir",
            startDate: "2023-06-18T13:00",
            endDate: "2023-06-18T18:00",
            eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
            location: {
                "@type": "Place",
                name: "İstanbul \xd6zdebir İnşaat & \xc7ilingir",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "İstanbul \xd6zdebir İnşaat & \xc7ilingir",
                    addressLocality: "istanbul pendik",
                    postalCode: "34890",
                    addressCountry: "T\xfcrkiye"
                }
            },
            description: `İstanbul Özdebir İnşaat & Çilingir hizmetlerimizle, kapılarınızı açıyor, kilitlerinizi değiştiriyor ve güvenliğinizi sağlıyoruz. İstanbul’un her yerine hızlı bir şekilde ulaşıyor ve sorunlarınızı çözüyoruz. Çilingir hizmetlerimizden yararlanmak için bizi arayabilirsiniz.`
        }
    ]
};
const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://example.com/blog/1"
    },
    headline: "İstanbul \xd6zdebir İnşaat & \xc7ilingir",
    image: "http://localhost:3000/_next/image/?url=%2Fimages%2Fbeautiful-roman-figure.webp&w=3840&q=75",
    author: {
        "@type": "Person",
        name: "İstanbul \xd6zdebir İnşaat & \xc7ilingir",
        url: "https://example.com"
    },
    publisher: {
        "@type": "Organization",
        name: "İstanbul \xd6zdebir İnşaat & \xc7ilingir",
        logo: {
            "@type": "ImageObject",
            url: ""
        }
    },
    datePublished: "2023-02-16",
    dateModified: "2023-02-16"
};
const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "İstanbul \xd6zdebir İnşaat & \xc7ilingir",
    description: `İstanbul Özdebir İnşaat & Çilingir hizmetlerimizle, kapılarınızı açıyor, kilitlerinizi değiştiriyor ve güvenliğinizi sağlıyoruz. İstanbul’un her yerine hızlı bir şekilde ulaşıyor ve sorunlarınızı çözüyoruz. Çilingir hizmetlerimizden yararlanmak için bizi arayabilirsiniz.`,
    image: "https://example.com/image/1",
    startDate: "2023-06-18T08:00",
    endDate: "2023-06-19T08:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
        "@type": "Place",
        name: "İstanbul \xd6zdebir İnşaat & \xc7ilingir",
        address: {
            "@type": "PostalAddress",
            streetAddress: "İstanbul Pendik \xd6zdebir İnşaat & \xc7ilingir",
            addressLocality: "İstanbul Pendik",
            postalCode: "34890",
            addressCountry: "TR"
        }
    },
    performer: {
        "@type": "PerformingGroup",
        name: "İstanbul \xd6zdebir İnşaat & \xc7ilingir"
    }
};

;// CONCATENATED MODULE: ./src/components/partials/AppHead.tsx
/* eslint-disable react/no-danger */ 



const AppHead = ({ title , description , metaKeywords , metaAuthor , metaOgImage , schemaMarkup  })=>{
    const pageTitle = title || "\xd6zdebir İnşaat";
    const pageDescription = description || `İstanbul Özdebir İnşaat & Çilingir olarak, İstanbul'da hizmet vermekteyiz. İstanbul'un her yerine 7/24 hizmet vermekteyiz. Çeşitli hizmetlerimizle, seramikten çilingire, boya işlerinden su tesisatına kadar geniş bir yelpazede sizin yanınızdayız. Her projeye özel çözümler sunarak, evlerinizi ve işyerlerinizi istediğiniz şekilde dönüştürüyoruz. Kaliteli işçilik, uygun fiyatlar ve müşteri memnuniyeti, sunduğumuz hizmetlerin temelini oluşturuyor. İhtiyaçlarınıza en iyi şekilde yanıt vermek için buradayız.
    `;
    const pageKeywords = metaKeywords || "\xd6zdebir İnşaat & \xc7ilingir, seramik, \xe7ilingir, boya, sıva, duşakabin, su tesisatı, darire tadilatı, \xe7atı izalasyonu, parke, laminant, elektirk tesisatı, kamera sistemleri, sineklik sistemleri, ozdebirinsaat.com \xf6zdebirinşaat.com";
    const pageAuthor = metaAuthor || "\xd6zdebir İnşaat & \xc7ilingir";
    const pageOgImage = metaOgImage || "/images/logo.png";
    const structuredDataSchema = schemaMarkup || mainSchema || "";
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("title", {
                children: pageTitle
            }, "title"),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "theme-color",
                content: "#ffffff"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "description",
                content: pageDescription
            }, "description"),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "keywords",
                content: pageKeywords
            }, "keywords"),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "author",
                content: pageAuthor
            }, "author"),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "robots",
                content: "index, follow"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:title",
                content: pageTitle
            }, "og-title"),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:description",
                content: pageDescription
            }, "og-description"),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:image",
                content: pageOgImage
            }, "og-image"),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:type",
                content: "website"
            }, "og-type"),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:locale",
                content: "tr_TR"
            }, "og-locale"),
            /*#__PURE__*/ jsx_runtime.jsx("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(structuredDataSchema)
                }
            }, "structured-data"),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "icon",
                href: "/favicon/favicon.ico"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "57x57",
                href: "/favicon/apple-icon-57x57.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "60x60",
                href: "/favicon/apple-icon-60x60.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "72x72",
                href: "/favicon/apple-icon-72x72.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "76x76",
                href: "/favicon/apple-icon-76x76.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "114x114",
                href: "/favicon/apple-icon-114x114.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "/favicon/apple-icon-120x120.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "144x144",
                href: "/favicon/apple-icon-144x144.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "152x152",
                href: "/favicon/apple-icon-152x152.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicon/apple-icon-180x180.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "192x192",
                href: "/favicon/android-icon-192x192.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon/favicon-32x32.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "96x96",
                href: "/favicon/favicon-96x96.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon/favicon-16x16.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "manifest",
                href: "/favicon/manifest.json"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#ffffff"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "msapplication-TileImage",
                content: "/favicon/ms-icon-144x144.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "theme-color",
                content: "#ffffff"
            })
        ]
    });
};
/* harmony default export */ const partials_AppHead = (AppHead);


/***/ }),

/***/ 608:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"locales":["tr"],"defaultLocale":"tr","pages":{"*":["common"]}}');

/***/ })

};
;