"use strict";
exports.id = 617;
exports.ids = [617];
exports.modules = {

/***/ 6617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   db: () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2856);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8264);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9512);



const firebaseConfig = ()=>{
    const clientCredentials = {
        apiKey: "AIzaSyCRZn80rL3MyJfuLH3ub-1pJd8P5YjIrg0",
        authDomain: "odelia-s-website.firebaseapp.com",
        databaseURL: "https://odelia-s-website-default-rtdb.firebaseio.com",
        projectId: "odelia-s-website",
        storageBucket: "odelia-s-website.appspot.com",
        messagingSenderId: "479615404564",
        appId: "1:479615404564:web:90cb91cfefc9f490683501",
        measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
    };
    if ((0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .getApps */ .C6)().length <= 0) {
        const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .ZF)(clientCredentials);
        // Check that `window` is in scope for the analytics module!
        if (false) {}
        return app;
    }
};
if ((0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .getApps */ .C6)().length <= 0) {
    firebaseConfig();
}
const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__/* .getDatabase */ .N8)();


/***/ })

};
;