"use strict";
exports.id = 409;
exports.ids = [409];
exports.modules = {

/***/ 2409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./app/components/NavBar.tsx



function NavBar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "nav",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "nav-header",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "nav-title",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: "Odelia Huang"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "nav-links",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/inspiration",
                        children: "Inspiration"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/portfolio",
                        children: "Portfolio"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/todolist",
                        children: "To Do"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/contact",
                        children: "Contact"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/components/Layout.tsx



const Layout = ({ children })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavBar, {}),
            children
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;