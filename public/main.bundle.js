webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/MARY/Documents/GitHub/QuickQuote-Web/angular-src/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_quote_quote_component__ = __webpack_require__("./src/app/components/quote/quote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_quote_service__ = __webpack_require__("./src/app/services/quote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_view_quote_view_quote_component__ = __webpack_require__("./src/app/components/view-quote/view-quote.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'quote', component: __WEBPACK_IMPORTED_MODULE_10__components_quote_quote_component__["a" /* QuoteComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'view-quote', component: __WEBPACK_IMPORTED_MODULE_16__components_view_quote_view_quote_component__["a" /* ViewQuoteComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_quote_quote_component__["a" /* QuoteComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_view_quote_view_quote_component__["a" /* ViewQuoteComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__services_quote_service__["a" /* QuoteService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/MARY/Documents/GitHub/QuickQuote-Web/angular-src/src/app.module.js.map

/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".my-space{\r\n  margin-left: 25px;\r\n}\r\n\r\n.jumbotron {\r\n  background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODIK/9sAQwAGBAQFBAQGBQUFBgYGBwkOCQkICAkSDQ0KDhUSFhYVEhQUFxohHBcYHxkUFB0nHR8iIyUlJRYcKSwoJCshJCUk/9sAQwEGBgYJCAkRCQkRJBgUGCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQk/8AAEQgBpQLsAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+dqKWigBKKWigBKKWigBKKWigBKKWigApKWigBKKWigBKKWkoAKKWkoAKKKKACilpKADFFLSUAFFLRQAlLRRQAlLRRQAlFLRQAUlLRQAlFLRQAlFLRQAUlLRQAlFLRQAlLRRQAlLRRQAlLRRQAUlLRQAlFLRQAUUUUAJRS0UAJS0UUAFJS0UAJRS0UAFJS0UAFJS0UAJS0UUAJS0UUAFJS0UAJRS0UAFJS0UAJRS0UAJRS0UAJS0UUAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJS0UUAFFFJQAtFFFABRSUtABRRRQAUUUUAFFJS0AFFJS0AFFFJQAtFFFABRRRQAUUUUAFFFFABRSUtABRRRQAUUUUAFFFFABRSUtABRRRQAUUUUAFFFFABRRRQAUUUUAFFFJQAtFFFABSUtJQAtFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFJQAtFFFABRRRQAUUUUAFJS0lABS0UUAJRS0UAFJS0UAJS0UUAJS0UUAFFFFACUUtFABSUtFACUUtFACUUtFACUtFFACUtFFABRRRQAUUUUAJS0UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFJS0UAFFFFABSUtFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUlLRQAUUUUAJS0UUAFFFFABRRRQAUUUUAFFFFACUtFFABRRRQAUlLRQAUUUUAFFFFABRRRQAUUUUAFJ+NLRQAlLRSUAFLRRQAlLSUUALSUUtABRRRQAlLRRQAUUUUAJS0UUAJS0UUAJS0UUAFFFFABRRRQAUlLRQAUUUUAFFFFABRSUtABRRRQAUUUUAFFFFABSUtFABRRRQAUlLRQAUlLRQAUUUUAFJS0UAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACUUtJQAUtFFACUtFFABRRRQAUUUUAFFJS0AJRS0UAJS0UUAJRS0UAJS0UUAFJS0lAC0UUUAJS0lLQAUUlLQAUUUUAFFJS0AFFFFABRRRQAUUUUAFFFFABSUUtABRRRQAUlLRQAUUUUAFFFJQAtFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRSUALRRSUAFLSUtABRSUUALRRSUALRRRQAUUUlAC0lLSUAFLSUUALRRSUALRRSUALRRRQAlLRRQAUUUUAFFFFABRRSUALRRRQAUUUlAC0UUlAC0UUUAFFJRQAtFFFABRRSUALRRRQAUUUlAC0UlLQAUUUUAFFJS0AFFJS0AFFFJQAtFFJQAtFFJQAtFFJQAtFFFABRSUUALRRRQAUUUlAC0UUlAC0UUUAFFFFABRRRQAUUlLQAUUUUAFFFJQAtFFFABRRRQAUUlFAC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUmaAFopKKAClpKWgAoopKAFoozRQAUUUUAFFJS0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUlAC0UlFAC0UUlAC0UlFAC0UlLQAUlFGaAFopKWgAopKKAClzSUUALRSUUALRSUUALRRSUALRSUUAGaWkpaACkpaSgBaKSjNAC0UlFAC0lGaKAFozSUtABSUtJQAtFJS0AFFJRQAUuaSigBaKKKACiiigAopKWgAooooAKKKKACiiigAooooAKKKSgBaSlooAKKKKACiiigAooooASloooASlpKWgAooooASiiloAM0UUUAFFFFACUtFFABRRRQAlLRRQAUUUUAJRS0UAFFFFABSUtJQAtFJS0AJS0UlAC0UUUAFFFFACUUtFABRSUtABRRSUALRSUUALSUtFACUtFFABRRRQAUUUlABS0UUAJRS0lABS0UUAFFFFACUtJS0AFFFFABRRRQAlLRRQAUUUlAC0UlLQAUUUUAFFFFABRRRQAUUUUAJS0lLQAUUUUAFFFFABSUtFABRRRQAUUUUAFJS0lAC0UUUAFJS0UAJS0lLQAUUUUAJS0lLQAUUlLQAlFLSUAFLRRQAUUUUAJS0UUAFFFFABSUtFABRRRQAUlLSZoAWikpaACkpaKAEooooAKKWigBKKKKAClpKWgApKWkoAWkopaACiikoAKKKWgAooooAKSjNGaAClpKKAFpKWigBKWkpaACkpaSgBaSjNFABS0lFABRS0lABS0lFABRS0lABS0lLmgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKSgBaKKKACikpaAEpaKKACiikoAWikpaACiiigAopKWgAooooAKKKKACiiigApKWkoAWikooAWikpaAEooooAWikpaACikooAKWkpaACiikoAKWkooAWiiigBKWkooAWiiigBKWikoAWikpaACkpaSgApaSigApaKKAEooooAWiiigAopKKAFooooAKKKSgBaSiloAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKSigBaKKSgBaKKKACikooAWiiigApKWkoAWiiigAooooAKSlooAKKKKACkpaKACiiigApKWkoAKWkpaACiikoAKKKKAFooooAKSlooASlopKAFoopKACiiloAKSlpKAFpKKKAFopKWgBKWkooAKWkpaACikpaAEpaSigBaKKKAEpaSigApaSloAKKSigAoopaACiikoAWiko4oAWiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACikpaAEpaSloAKKKKACiiigBKWiigAooooAKKSloAKKKKAEpaSloAKKKKACiikoAWiiigApKWkoAWiiigBKWiigBKWiigAooooASilooASloooAKSlooASiiloASilooASloooASloooASilooAKKSloASilooASiiloAKKKKAEopaKACiiigBKWkpaAEpaKKAEopaKAEopaKACiiigAooooAKKSloAKKSloAKKSloAKKKKACiiigAopKWgAoopKAFooooAKSlooAKKKKAEpaKSgApaKKACiiigBKWiigAooooAKSlpKAClpKWgApKWkoAKKWigAooooAKSlooAKKKKACiikoAKWiigAooooASilooAKKKKAEpaKKAEpaKKAEpaKKAEpaKKACkpaKAEopaKAEpaKKAEopaKAEopaKACkpaKAEopaKACkpaKAEpaSloAKKKKAEopaSgAopaKACkpaKAEopaKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAopKWgAooooAKKKKACiiigAopKWgAooooAKKSloAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAEpaSloAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApKWigAooooAKKKKACiiigAooooAKKKSgBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkpaKACkpaKACkpaKAEpaKKACiiigBKWiigAooooASloooASloooAKSlpKACloooAKKKKAEpaKKACiiigBKKWigAooooAKSlooASloooAKKKKACiiigAooooASloooAKKKKACkpaKACiiigApKWigBKWiigAop0cbzOEjRnc9FUZJ/Ctuy8C+I78AxaVOinvLiP/0LFZVcRSpK9SSXq7FRhKXwq5hUldrD8JvEMoy72MPs8pP8gam/4U/rmP8Aj807P++//wATXC85wSdnVRqsNV/lOForspfhN4jjz5Ys5vZJcf8AoQFZd74E8S2ALTaPdMo6tEvmD/x3Na08zwlR2hUX3omVCpHeLMGkp8kbwuUkRkYdVYYIpldyd9jIKWiigAooooAKKKKACiiigApKWigAooooAKSlooASloooAKKKKACiikoAWiiigAoopKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAopKWgAooooAKKSigBaKSloAKKSigApaSigBaKSloAKKSloAKKKKACikooAWiiigAoopKAFopKWgAoopKAClpKKAFopKKAFoxRSUALRSUtABRRSUALRSUUALRSUUALRSUUAdt4D8c2+gMLK/tYRbuf+PmOMCRP97H3h+o969fgnjuYkmhkWSNwGV1OQw9RXzVXY+AfG8nh+5WxvXLadK3f/lix/iHt6j8fr8pnmRKsniMP8XVd/TzPQwmL5fcnse0UqruOKbGRKqshDKwyCOQRVuGGvz+T5dz2ErhDDV6GH2ohhq/DD7Vx1KprGJQvvDel61H5eo6fbXS4/5aRgkfQ9R+FcVr/wAANKv1aXRLuXT5uoikzJEfb+8PzP0r1KGGrsMNPD51i8G70KjXl0+7YJ4WnUXvo+SPFPw98ReD2J1Owf7PnC3UXzxN/wACHT6HBrm6+4JYY5omiljSSNxtZGAIYehFeTePPgJp+qrJfeGSmn3nLG1b/USH2/uH9PYV9vlHHFKq1Txy5X/Mtvmun4/I8rE5VKPvUtfI+eaKuavo+oaDfyWGp2ktrcxn5o5Bj8R6j3FU6+9hOM4qUXdM8hpp2YUUKrOwVQWZjgADJJrV1/wrrXhc2o1jT5bM3cXnQ+Zj51/DofY8iqEZVFJS0AFFJRQAtFJRQAtFFJQAUtJRQAtFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRSUtABRRRQAlLRSUALRRRQAUUUUAFFFFABRRSUALRRRQAUUUUAFFFFABRRRQAUUUlAC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAHrvwh8UG+gbQrt8zQLvtyTyyd1/D+R9q9Thh9q+XdD1abQtXtNSgJ328gfH94dx+IyPxr6r054r21huoGDRTIsiN6qRkV+Y8W4FYauq0F7s/wA+v+Z72XVeeHK90TQw+1XoYa5TVviJomkXH2C1M2r6keFs9PXzXz7kcD+ftVVdN8eeLRnUL2Lwtp7f8u9mfMumH+1J0X8Pyr5n6hUcfaVmqce8t36Ld/dbzO/20b2jq/L/ADOq1nxVoHhePfq+qW1qcZEbNmRvogyx/Kuf/wCFm6lrHHhbwhqWoIfu3N2Rawn3Bbkj8qv6D8OvDfh9/PgsFubwnLXd2fNlY+uT0P0xXTAVk6mBpfBB1H3k7L/wFa/+TfIdqst3b0/z/wCAcV5XxQ1M7n1HQNHU9Fghadx9d3FOHhTx+3zn4igP6DSIsfzrt1SpVWrhmE/s04Jf4Iv803+InRXVv72eR+M/h9458Q6cYL6fQteMYPlStCba5jP+yw+X8DxXhuueG9X8N3X2XV9PuLOU/dEi8N7qeh/A19qIlUvEPhnTPFelS6Xqtss9vKP+BI3ZlPYj1r6jJ+JamFtTqQXJ5K1vRbfgjgxOBjU95PU8Y8DeB9H+GOgr488dqDcHnT9O43u+MgAf3vU9FHvXl3jrxzqvxA12TVdUcKANlvbp/q7ePPCKP5nqTzVv4l6Zrfh/xANA1jULi+h02IRWLysSBbnldo7dwfcY7VydfpVKrGrBVIO6ep4UouLswooorQQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAJS0UUAFFFJQAtFFFABRRRQAlLRSUALRRRQAUUUUAFFFFABRRRQAUUlLQAlLRRQAUUlLQAlFLRQAlLRRQAUlLRQAlLRSUALRRSUAFLRRQAUUUUAJS0UUAFFFFABSUtJQAUtFFABRRRQAlLRRQAUUUUAFJRS0AFFJS0AFFFFACUUtFABRRRQAlLRRQAUUUUAFeqfDy+i8Y21t4f13xXNYW1uoih0+EeSblewMvf02/lXldHI6cVw4/BLFUuS/K+jsm0/K//D+ZrRq+zlfdH2HofhrSPDVt9n0nT4LRO5Rfmf8A3mPJ/E1p186eAfjVqfh0x2OtGTUdOGFDk5mhHsT94ex/A179outaf4hsI7/TLqO5t5OjIeh9COoPsa/Hc7yfGYGo5Yj3k/tb3/4PqfS4XE0qsbQ08i8BmpFShFqVVrx4QudTYKtTIlCJUypXdTpmMpAi1MiUKlTIld9OmYykeP8Ax18H2etal4Xu7kmJbi7/ALLkmXqvmg+W3uFYE49zXzz4k8O3/hTW7rR9Si8u5tn2n0cdmHqCORX1R8cF2eEbKUffi1W0dD/tb/8A65rM+Pnw6Hirw+dbsIc6ppiFiFHM0PVl9yOSPxHevuMozJ4eFKlUfuu69HfT87HlYmhzuUo7o+WKKSlr7M8wKSiloAKKSloAKSlooAKKKKACiiigAooooAKKKKAEopaKACiiigAooooAKSlooASilooAKKKKAEopaKACkpaKACiiigAooooASiiloASlpKWgBKWkpaAEpaKKAEopaKAEopaKACiiigBKKKWgAooooASilooAKKKKAEopaKAEopaKAEopaKAEpaKKACiiigApKWigBKWiigApKWigBKKWigAooooASilooASilooASilooASt7wj4z1fwXqIvNMnwrECWB+Y5h6MP69RWFRWVajCtB06iun0ZUZOLvF6n1z4D8faT470/z7J/KuowPPtHPzxH1919D/LpXWolfFGha1qWgarBqGk3EkF3G3yFOd3+yR3B9K+uvBnie41y0ht9X0+TStY8lZpLWUYDof8AlpGe654I6qeD2z+Z53w08E3Woa0/xX/A8z3cLjvarln8X5nRqtTKmaESpkSvFp0zplIESpkWhVqUDArvp07GUpHnPxk/0tPCejLy99rtsWH/AEzTJY/hkV3+M159qrf8JF8a9Ls1+aDw7p8l3J6CabCqD77cGvRFFdmLjaFKn2V/vf8AlYyp6uTPj340+Bh4J8ZzpbRbNOvwbm1wOFBPzJ/wE/oRXBV9bftAeEB4k8BT3kUe670km7QgcmMD94Ppt+b/AICK+Sa+7yfFvEYZOW60Z5OJp8k3bYSilor1TnCkpaKAEopaKAEopaKACiiigAooooAKKSloAKKKKAEpaKKACiiigAoopKACloooAKKKSgBaSlooAKKSloAKKKKAEpaKKAEpaKKACiiigAopKWgAopKWgAooooAKKSloAKKKKACikooAWiiigAoopKAFooooAKSlpKAClpKKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiikoAWiiigAoopKAFpVVnYKqlmJwABkk0KrOwVQWYnAAHJNe4+BvA2j/DHQV8eeO1/f/wDLhp3HmO+MgAH+L1PRR70AHgbwPo/wx0FfHfjtf9I/5cNO48x37AD+96noo96898Q/FTxLr/i+PxQbtrW5tji0hiP7u2j/AOeYHceueveqPjvx3q3xA1x9U1SQKoGy3tk/1dtH2VR/M9Sea5ylKKknGSumNOzuj7J+GPxDsfiHoguYtsN/Bhbu2zyjf3h6qex/DtXbKlfDng3xdqPgjXrfWNNfDxnEkRPyzRnqjex/Q4PavtDwl4n0/wAY6Da6zpkm6CdeVP3o3H3kb3Br8/zbJ/qlTnp/A/w8v8j2MPifaKz3NgDFMubiK0t5bieRY4YkLu7dFUDJJ/CpK89+MepXEuj2XhLTX26l4juBZqR1SHrK/wBAvB9ia4cPR9rUUP6t1NZy5Vch+DkEuqWmseMrpCs/iG9aaMN1W3QlI1/IH8MV6Oq1V0nTLfR9OtdOtE2W9rEsMa+iqMD+VXgKqrL21Vz6dPTp+AorlikRz20d1BJbzIHilUo6noykYIr4R8WaG/hrxNqmjSZzZ3MkQJ/iUH5T+Iwfxr72Va+Tf2mNGGm/Ef7Yi4TUbSKcn/aXKH9EH519DkE+SpKHdfkceMV4pnk1FFFfWHnBRSUtABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRSUtABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRSUUALRRRQAUUlFAC0UUUAFFFFABRRRQAUUUUAFFFJQAtFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFJS0AFFFFABSqrOwVQWYnAAGSTQkbyuEjRndjgKoyTXt3gDwZofw58ORfEHxqySvIA2m2KEM0rEZXb6t3z0Ue9AD/A3gbR/hjoK+O/Ha/6R/wAuGnf8tHfHAA/vep6KPevL/HfjvVviBrj6pqkgVQNlvbJ/q7aPsij+Z6k0eO/HerfEDXH1TVJAqgbLe2T/AFdtH2VR/M9Sea52gAopKWgAr0n4I/EtvAviEWd9MRo2oMEnBPEL9FlH06H2+grzakrHEUIV6bpz2ZUJuD5kfoIGDKGBBB5BBrzTwSP+E4+IWs+MpPn0/Tc6TpXo2D+9lH1JwD6HHavOfB3xhvbr4aS+FY3eXxIzx6bpxz80iS/KGz6oMjP+771774P8NW3hHw3p+iWoBS0hCMwH336s34sSfxr4ephZYNTjP4novTq/nt956saiqNNbGwFqRVoVaeBXPTpmjYAV88/tbWAH/CNX4HJ+0Qsf++CP/Zq+ilWvDP2tIx/wi2hv3F8wH4xn/CvayyPLXizlxDvBnzBRRRX1h5wUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUlLRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSUUtACUUUUALRRRQAlFFFABS0UUAFJS0UAJS0lFABS0UUAJRRRQAUtFJQAUUtJQAtJRS0AJRS0lABRS0UAFFFFACUUtFABRRRQAlFLRQAlLRRQAlFLRQAlFFLQAUlLRQAlakPhfWp9El12LTLl9MibY90E+QHp+WeM9Kz4IvPnji3Bd7Bcntk9a+hPjpqb+DPBGl+FtHhENndKYHcDpGgX5fqxOSfY+teZjcdOjWpUKavKb69Et/mb0qSlGU5PRHzvUtvbzXlxHb28TzTSsESNBlmY9AB3NJb2813PHb28TyzSsEREGWZj0AHevofwJ4I0b4QaC/i7xa8f8AaW35E4YwkjiNB3kPc9ue2SazDMIYSKVrzlslu3/kKjRdR9kt2WfAPgTRPg14dfxj4wkj/tUp8icMYMjiOMfxSHue3PbJPhHjHxRJ4r1qe8WD7HZ72NtZK5aO3VjkhQeBk5JxgZJ4q98Q/iHqnxD1g3l4xhtIiVtbRT8kK/1Y9z/TFcpSwGFqQbrV3ect+y8kOrUi/dhsgpaKK9IwEopaSgAopaKABSVIKkgjkEdq7Twt8YvGnhJ0FnrM1zbL1trw+dGR6DPK/wDASK4ukrOpShUVpq41Jx1R9Z/Dz9onw/4reKw1pV0XUXwqmR828p9nP3T7N+Zr19ACARyDX53V7D8Hvj5f+DpYdG8Qyy3uhkhEkOWlsx7d2T/Z7dvQ+Nicpiveo/cdVPEvaR9agV4H+1xcBNC8PW2fmkupZAP91AP/AGavd7G9ttRs4byznjuLadBJHLG2VdT0INfMv7WuqifxNomlq2fsto87D0Mj4/lHWeAp/vkVWfunhFJS0lfQnEFFFLQAlFLSUAFFFLQAUUUUAFFFFABSUtFACUtFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFJS0UAFJS0UAFJS0UAJRS0UAJS0UUAFJS0UAJS0UlAC0lLRQAlFLSUAFLRRQAlLRSUALSUtFABSUtFABRRRQAUUUUAFJS0lABS0UUAJS0UUAFFJS0AFFFFACUtFFABSUtJQAtfQHhrx14T+J3hWHw540nitb+EKolmk8sSMBgSI54DY6g9cnqK+fqWvPx+XwxcVduMou6a3TNqNZ027ap9D6R0nw98NfhH52uvrCX12FPkiSeOWUe0aKByemf1AzXi3xA+IGp/EDVzd3hMVrFlba1U5WFf6se5/pXLUtY4LKo0Kjr1Zuc+76Ly7FVcQ5x5IqyCiiivWOcSloooAKKKSgBaKKKACiiigBKKKKAPZ/wBn74vv4S1OPwzrNwTot5Jthkc8WkrHrnsjHr6Hn1rjvjN4kXxT8Sdavon3wRzfZoSDkFIxsyPYkE/jXFUViqEVUdRbspzbjyhRRRWxIlLRRQAUUUUAJRS0UAFFJS0AFFJS0AFFFFABRSUtACUtFFABRRRQAUUUUAJS0UUAFFFFABRRRQAUUlLQAUUUUAFFFFABRSUtABRRRQAUUlLQAUUUUAFFFJQAtFJS0AFFFFACUtJRQAtFFFABSUtJQAtFFJQAtJS0lABS0lLQAUUUUAFFFJQAtFFFABRRSUALRRRQAUUlLQAUUUUAFFFJQAUtFFABRRRQAUUUUAFFFFABRRRQAUUlLQAUUUUAFFFFABRRRQAUUUUAFFFFABRRSUALRRSUALRRRQAUUUUAFFFFACUtFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACUtFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFJS0UAFFFFABRRRQAUUUUAFFFFACUtFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFJQAUtFFABRRSUALRRSUALRRRQAUUUUAFFJS0AFFJRQAtJRRQAtFJRQAtFFJQAtJRS0AJS0lLQAUUlLQAlLSUtABRSUUALSUUUAFLSUtABSUtFACUUUUALRRRQAlLSUUALRSUUALRSUUALRRRQAUUUUAJS0lFAC0UUUAJS0UUAFFJS0AJS0UlABS0lLQAUUUlAC0UlFAC0UUUAFJS0UAFFFFACUUtFABRSUtABRRRQAUUUlAC0lLRQAUlLSUALRRRQAUlLRQAUUlLQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAJS0UUAFFFFABRRRQAUUUUAFJRRQAtFFFABRRRQAlLRRQAUUUUAFJRRQAtFFFABRRRQAUUUUAFFFFABRRRQAUUUUAJS0UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAlLRRQAUUUUAFFFFABRRRQAUlFFAC0UUUAf//Z') !important;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.color-gray{\r\n  color: #585858;\r\n}\r\n\r\n.btn{\r\n  color: white;\r\n  background-color: #ffc815;\r\n}\r\n\r\n.color-yellow{\r\n  color: #ffc815;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\r\n  <br />\r\n\r\n<div class=\"container\">\r\n  <div class=\"jumbotron p-3 p-md-5 rounded\">\r\n          <div class=\"col-md-6 px-0\" style=\"color: white;\">\r\n            <h1 class=\"display-4 font-italic\">Get lightning fast comparison quotes.</h1>\r\n            <p class=\"lead my-3\">Compare rates from BC's top home insurance companies without having to go through the hassle of TBW and RCT.</p>\r\n            <p class=\"lead mb-0\"><a href=\"https://github.com/Novacer/QuickQuote-Web/blob/master/README.md\" target=\"_blank\" class=\"color-gray font-weight-bold\">Learn more...</a>   <a class=\"btn my-space\" role=\"button\" (click)=\"redirReg()\">Get Started Now! &raquo;</a></p>\r\n          </div>\r\n  </div>\r\n</div>\r\n\r\n  <div class=\"container marketing\">\r\n    <h2 class=\"lead font-weight-bold\">Currently Supports</h2>\r\n    <hr class=\"featurette-divider\" />\r\n\r\n  <!-- Thumbnails -->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3\">\r\n      <img class=\"img-thumbnail\" src=\"https://www.intact.ca/content/intact/bc/en/boilerplate-content/footer/_jcr_content/par/footer/logo.img.png/1513798940417.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n    </div><!-- /.col-lg-3 -->\r\n    <div class=\"col-lg-3\">\r\n      <img class=\"img-thumbnail\" src=\"https://www.wawanesa.com/resources/img/Wawanesa_Insurance_blue.svg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n    </div><!-- /.col-lg-3 -->\r\n    <div class=\"col-lg-3\">\r\n      <img class=\"img-thumbnail\" src=\"https://www.goremutual.ca/images/gore_logo.svg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n    </div><!-- /.col-lg-3 -->\r\n    <div class=\"col-lg-3\">\r\n      <img class=\"img-thumbnail\" src=\"https://www.familyins.com/pub/wp/wp-content/uploads/2016/01/fis-logo__lr.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n    </div><!-- /.col-lg-3 -->\r\n  </div><!-- /.row -->\r\n\r\n    <!-- Information -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <h2>Intact</h2>\r\n        <p>Intact Insurance is Canada’s leading provider of home, auto and business insurance, ranked “Highest in Customer Satisfaction with the Auto insurance claims experience.”</p>\r\n      </div><!-- /.col-lg-3 -->\r\n      <div class=\"col-lg-3\">\r\n        <h2>Wawanesa</h2>\r\n        <p>\"Earning your trust since 1896\"... As a policyholder-owned mutual insurance company, Wawanesa will continue to earn trust by providing quality products and services at the lowest price which supports long-term growth and financial stability.</p>\r\n      </div><!-- /.col-lg-3 -->\r\n      <div class=\"col-lg-3\">\r\n        <h2>Gore Mutual</h2>\r\n        <p>Since 1839, Gore Mutual has been known for their financial strength, genuine relationships and innovative pioneering spirit. They’re future-focused to help their network of insurance brokers and customers go forward with confidence.</p>\r\n      </div><!-- /.col-lg-3 -->\r\n      <div class=\"col-lg-3\">\r\n        <h2>Family</h2>\r\n        <p>Family Insurance is part of Economical Insurance and provides personal property and auto insurance protection for customers in British Columbia through a dedicated network of independent insurance brokers.</p>\r\n      </div><!-- /.col-lg-3 -->\r\n    </div><!-- /.row -->\r\n\r\n    <!-- Buttons -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <p><a class=\"btn\" href=\"https://www.intact.ca/bc/en/personal-insurance/home/house.html\" target=\"_blank\" role=\"button\">View details &raquo;</a></p>\r\n      </div><!-- /.col-lg-3 -->\r\n      <div class=\"col-lg-3\">\r\n        <p><a class=\"btn\" href=\"https://www.wawanesa.com/canada/products/homeowners/home-insurance.html\" target=\"_blank\" role=\"button\">View details &raquo;</a></p>\r\n      </div><!-- /.col-lg-3 -->\r\n      <div class=\"col-lg-3\">\r\n        <p><a class=\"btn\" href=\"https://www.goremutual.ca/personal/\" target=\"_blank\" role=\"button\">View details &raquo;</a></p>\r\n      </div><!-- /.col-lg-3 -->\r\n      <div class=\"col-lg-3\">\r\n        <p><a class=\"btn\" href=\"https://www.familyins.com/pub/\" target=\"_blank\" role=\"button\">View details &raquo;</a></p>\r\n      </div><!-- /.col-lg-3 -->\r\n    </div><!-- /.row -->\r\n\r\n    <br />\r\n    <br />\r\n    <!-- START THE FEATURETTES -->\r\n\r\n    <hr class=\"featurette-divider\">\r\n\r\n    <div class=\"row featurette\">\r\n      <div class=\"col-md-7\">\r\n        <h2 class=\"featurette-heading\">Made for Insurance Brokers. <span class=\"color-yellow\">By Insurance Brokers.</span></h2>\r\n        <p class=\"lead\">Our website is the fastest way to decide which insurance company is the right choice to go to for homeowner's insurance policies in British Columbia. Get ready for a quoting system that truly matches your workflow.</p>\r\n      </div>\r\n      <div class=\"col-md-5\">\r\n        <img class=\"featurette-image img-fluid mx-auto\" src=\"http://www.hartwickinsurance.com/images/background/bg01.jpg\" alt=\"Generic placeholder image\">\r\n      </div>\r\n    </div>\r\n\r\n    <hr class=\"featurette-divider\">\r\n\r\n    <div class=\"row featurette\">\r\n      <div class=\"col-md-7 order-md-2\">\r\n        <h2 class=\"featurette-heading\">Tired of long forms? <span class=\"color-yellow\">No more worries.</span></h2>\r\n        <p class=\"lead\">We've condensed almost 10+ pages of documents and excel spreadsheets into a single form for you to fill out. Only the most relevent information is needed from you, and everything else we will take care of. Get the crucial information you need in just under two minutes.</p>\r\n      </div>\r\n      <div class=\"col-md-5 order-md-1\">\r\n        <img class=\"featurette-image img-fluid mx-auto\" src=\"https://cdn.freshconsulting.com/wp-content/uploads/2016/11/optimization_slide.jpg\" alt=\"Generic placeholder image\">\r\n      </div>\r\n    </div>\r\n\r\n    <hr class=\"featurette-divider\">\r\n\r\n    <div class=\"row featurette\">\r\n      <div class=\"col-md-7\">\r\n        <h2 class=\"featurette-heading\">Security and Privacy. <span class=\"color-yellow\">We got you covered.</span></h2>\r\n        <p class=\"lead\">Your important data is securely protected by our reliable JWT login strategy. All passwords and confidential information are immediately encrypted before being sent to our database. We've made sure that you and only you can access your quoting information.</p>\r\n      </div>\r\n      <div class=\"col-md-5\">\r\n        <img class=\"featurette-image img-fluid mx-auto\" src=\"http://www.iritech.com/blog/wp-content/uploads/2017/10/iris-recognition-cryptography.jpg\" alt=\"Generic placeholder image\">\r\n      </div>\r\n    </div>\r\n\r\n    <hr class=\"featurette-divider\">\r\n\r\n    <!-- /END THE FEATURETTES -->\r\n\r\n  </div><!-- /.container -->\r\n\r\n\r\n  <!-- FOOTER -->\r\n  <footer class=\"container\">\r\n    <p class=\"float-right\"><a href=\"#\">Back to top</a></p>\r\n    <p>&copy; 2018 Jack Zhang &middot; <a href=\"#\">Privacy</a> &middot; <a href=\"#\">Terms</a></p>\r\n  </footer>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.redirReg = function () {
        this.router.navigateByUrl('/register');
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/MARY/Documents/GitHub/QuickQuote-Web/angular-src/src/home.component.js.map

/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: -ms-flexbox;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n  -ms-flex-pack: center;\r\n  -webkit-box-align: center;\r\n  align-items: center;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.my-btn{\r\n  color: white;\r\n  background-color: #ffc815;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"text-center\">\r\n    <form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\r\n      <img class=\"mb-4\" src=\"http://www.clker.com/cliparts/k/D/s/Z/R/D/yellow-umbrella.svg\" alt=\"\" width=\"120\" height=\"120\">\r\n\r\n      <div class=\"alert alert-danger\" *ngIf=\"loginFail\">\r\n        <strong>Login Failed!</strong>\r\n      </div>\r\n\r\n      <h1 class=\"h3 mb-3 font-weight-normal\">Please login</h1>\r\n\r\n      <label for=\"inputName\" class=\"sr-only\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" id=\"inputName\" placeholder=\"Username\" required>\r\n\r\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\r\n\r\n      <button class=\"btn btn-lg my-btn btn-block\" type=\"submit\">Login</button>\r\n      <p class=\"mt-5 mb-3 text-muted\">&copy; 2018</p>\r\n    </form>\r\n  </body>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginFail = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.loginFail = false;
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigateByUrl('profile');
            }
            else {
                _this.loginFail = true;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/MARY/Documents/GitHub/QuickQuote-Web/angular-src/src/login.component.js.map

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "nav {\r\n  display:block;\r\n}\r\n\r\n.my-color{\r\n  background-color: #292929;\r\n}\r\n\r\n.my-yellow{\r\n  background-color: #ffc815;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.nav {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n}\r\n\r\n.nav-link {\r\n  display: block;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.nav-link:hover, .nav-link:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n.navbar {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  -webkit-box-pack: justify;\r\n  -ms-flex-pack: justify;\r\n  justify-content: space-between;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.navbar-brand {\r\n  display: inline-block;\r\n  padding-top: 0.3125rem;\r\n  padding-bottom: 0.3125rem;\r\n  margin-right: 1rem;\r\n  font-size: 1.25rem;\r\n  line-height: inherit;\r\n  white-space: nowrap;\r\n  padding-left : 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.nav-tabs .nav-link.active,\r\n.nav-tabs .nav-item.show .nav-link {\r\n  color: #495057;\r\n  background-color: #fff;\r\n  border-color: #dee2e6 #dee2e6 #fff;\r\n}\r\n\r\n.nav-fill .nav-item {\r\n  -webkit-box-flex: 1;\r\n  -ms-flex: 1 1 auto;\r\n  flex: 1 1 auto;\r\n  text-align: center;\r\n}\r\n\r\n.nav-justified .nav-item {\r\n  -ms-flex-preferred-size: 0;\r\n  flex-basis: 0;\r\n  -webkit-box-flex: 1;\r\n  -ms-flex-positive: 1;\r\n  flex-grow: 1;\r\n  text-align: center;\r\n}\r\n\r\n.mr-auto,\r\n.mx-auto {\r\n  margin-right: auto !important;\r\n}\r\n\r\n.ml-auto,\r\n.mx-auto {\r\n  margin-left: auto !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n      <nav class=\"navbar navbar-expand-md navbar-dark fixed-top my-color\">\r\n        <a class=\"navbar-brand\" [routerLink]=\"['/']\"> ⚡ QuickQuote</a>\r\n          <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item active\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/quote']\" *ngIf=\"authService.loggedIn()\">Get a Quote!</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\" *ngIf=\"authService.loggedIn()\">Dashboard</a>\r\n            </li>\r\n          </ul>\r\n          <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item active\">\r\n              <a class=\"nav-link my-yellow\" [routerLink]=\"['/register']\" *ngIf=\"!authService.loggedIn()\">Register</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/login']\" *ngIf=\"!authService.loggedIn()\">Login</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" (click)=\"onLogoutClick()\" *ngIf=\"authService.loggedIn()\">Logout</a>\r\n            </li>\r\n          </ul>\r\n      </nav>\r\n    </header>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigateByUrl('');
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/MARY/Documents/GitHub/QuickQuote-Web/angular-src/src/navbar.component.js.map

/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "/* The sidebar menu */\r\n.sidenav {\r\n    height: 100%; /* Full-height: remove this if you want \"auto\" height */\r\n    width: 100px; /* Set the width of the sidebar */\r\n    position: fixed; /* Fixed Sidebar (stay in place on scroll) */\r\n    z-index: 1; /* Stay on top */\r\n    top: 0; /* Stay at the top */\r\n    right: 0;\r\n    background-color: #292929;\r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n    padding-top: 40px;\r\n}\r\n/* The navigation menu links */\r\n.sidenav a {\r\n    padding: 6px 8px 6px 16px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: #818181;\r\n    display: block;\r\n}\r\n/* When you mouse over the navigation links, change their color */\r\n.sidenav a:hover {\r\n    color: #f1f1f1;\r\n}\r\n/* Style page content */\r\n.main {\r\n    margin-right: 90px; /* Same as the width of the sidebar */\r\n    padding: 0px 10px;\r\n}\r\n/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n}\r\n.jumbotron {\r\n  background-color: white;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n.container {\r\n  max-width: 1200px;\r\n}\r\n.pricing-header {\r\n  max-width: 700px;\r\n}\r\n.border-top { border-top: 1px solid #e5e5e5; }\r\n.border-bottom { border-bottom: 1px solid #e5e5e5; }\r\n.box-shadow { -webkit-box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\r\n.btn-spec{\r\n  background-color: #ffc815;\r\n  float: left;\r\n  color: white;\r\n}\r\n.btn-spec2 {\r\n  background-color: #585858;\r\n  float: left;\r\n  color: white;\r\n  margin-left: 10px;\r\n}\r\n.btn-zero{\r\n  background-color: #ffc815;\r\n  margin-left: 20px;\r\n  color: white;\r\n}\r\n.color-gray{\r\n  color: #585858;\r\n}\r\n.padding-top{\r\n  padding-top: 50px;\r\n}\r\n.title {\r\n    display: inline-block;\r\n    font-size: 1.7em;\r\n    font-weight: bold;\r\n    padding: 5px 15px;\r\n}\r\n.name {\r\n    font-size: 1.7em;\r\n    font-weight: 700;\r\n}\r\n.c-info {\r\n    padding: 5px 10px;\r\n    font-size: 1.25em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Side navigation -->\r\n<div class=\"sidenav\">\r\n  <a href=\"#\"></a>\r\n  <br />\r\n  <a (click)='onProfileView()'>Profile</a>\r\n  <hr />\r\n  <a (click)=\"onQuoteView()\">My Quotes</a>\r\n  <hr />\r\n  <a (click)='onClientsView()'>Clients</a>\r\n  <hr />\r\n  <a (click)='onContactView()'>Get Help!</a>\r\n</div>\r\n\r\n<div class=\"main\" *ngIf=\"user && view_profile\">\r\n  <div class=\"container padding-top\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <h2>Welcome back!</h2>\r\n      </div>\r\n    </div>\r\n  <div class=\"row\">\r\n      <div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n              \t\t<div class=\"row\">\r\n                        <div class=\"col-xs-12 col-sm-8\">\r\n                            <h2>{{user.name}}</h2>\r\n                            <p><strong>Username: </strong> {{user.username}} </p>\r\n                            <p><strong>Email: </strong> {{user.email}} </p>\r\n                        </div><!--/col-->\r\n                        <div class=\"col-xs-12 col-sm-4 text-center\">\r\n                          <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzW9XVx-J_KB5_uQjPwMZxnzxdJNrmDve_U6iuojoW5HX7Pknq\" alt=\"\" class=\"center-block img-circle img-responsive\" height=\"120\">\r\n                        </div><!--/col-->\r\n\r\n                        <div class=\"col-xs-12 col-sm-4\">\r\n                            <h2> You have: </h2>\r\n                        </div><!--/col-->\r\n                        <div class=\"col-xs-12 col-sm-4\">\r\n                            <h2><strong>{{user.quotes.length}}</strong></h2>\r\n                            <p><small>Quotes</small></p>\r\n                        </div><!--/col-->\r\n                        <div class=\"col-xs-12 col-sm-4\">\r\n                            <h2><strong>{{uniqueClients()}}</strong></h2>\r\n                            <p><small>Clients</small></p>\r\n                        </div><!--/col-->\r\n              \t\t</div><!--/row-->\r\n              </div><!--/panel-body-->\r\n          </div><!--/panel-->\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"main container\" *ngIf=\"user && view_clients\">\r\n  <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-offset-3 col-sm-9\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading c-list\">\r\n                    <span class=\"title\">My Clients</span>\r\n                </div>\r\n                <hr />\r\n                <br/> <br/>\r\n\r\n                <div class=\"jumbotron p-3 p-md-5 rounded\" *ngIf=\"user.quotes.length == 0\">\r\n                        <div class=\"col-md-8 px-0\">\r\n                          <h1 class=\"display-4 font-italic\">There seems to be nothing here...</h1>\r\n                          <p class=\"lead my-3\">You don't have any clients at this moment.</p>\r\n                          <p class=\"lead mb-0\"><a href=\"https://github.com/Novacer/QuickQuote-Web/blob/master/README.md\" target=\"_blank\" class=\"color-gray font-weight-bold\">Get Help!</a>   <a class=\"btn btn-zero\" role=\"button\" (click)=\"redirQuote()\">Make a quote now! &raquo;</a></p>\r\n                        </div>\r\n                    </div>\r\n                <ul class=\"list-group\" id=\"contact-list\">\r\n                    <li class=\"list-group-item\" *ngFor=\"let name of uniqueNames; let i = index\">\r\n                        <div class=\"col-xs-12 col-sm-3\">\r\n                            <img src=\"{{randomPortraits[i % 5]}}\" alt=\"\" class=\"img-responsive img-circle\" height=\"50\" width=\"50\"/>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-sm-9\">\r\n                            <span class=\"name\">{{name}}</span><br/>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Quote content -->\r\n<div class=\"main container\" *ngIf=\"user && view_quotes\">\r\n  <div class=\"container\" *ngIf=\"user.quotes.length == 0\">\r\n    <div class=\"jumbotron p-3 p-md-5 rounded\">\r\n            <div class=\"col-md-6 px-0\">\r\n              <h1 class=\"display-4 font-italic\">There seems to be nothing here...</h1>\r\n              <p class=\"lead my-3\">You don't have any quotes at this moment.</p>\r\n              <p class=\"lead mb-0\"><a href=\"https://github.com/Novacer/QuickQuote-Web/blob/master/README.md\" target=\"_blank\" class=\"color-gray font-weight-bold\">Get Help!</a>   <a class=\"btn btn-zero\" role=\"button\" (click)=\"redirQuote()\">Make a quote now! &raquo;</a></p>\r\n            </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container card box-shadow mb-2\" *ngFor=\"let quote of user.quotes; let r = index\">\r\n  <div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\r\n        <h1 class=\"display-4\">Quote for {{quote.client_name}}</h1>\r\n        <p class=\"lead\">These are the comparisons for this client's property. Click on \"Get Started\" to go to the company's portal to get an official quote. Click on \"Save Quote\" to save this quote to your dashboard.</p>\r\n      </div>\r\n\r\n  <div class=\"container\">\r\n        <div class=\"card-group mb-4 text-center\">\r\n          <div class=\"card mb-2 box-shadow\" *ngFor=\"let company of quote.companies; let c = index\">\r\n            <div class=\"card-header\">\r\n              <h4 class=\"my-0 font-weight-normal\">{{reccomendations[c]}}</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <h1 class=\"card-title pricing-card-title\">{{company.company_name}}</h1>\r\n              <ul class=\"list-unstyled mt-3 mb-4\">\r\n                <li *ngFor=\"let discount of company.discountList\">{{discount}}</li>\r\n              </ul>\r\n              <button type=\"button\" class=\"btn btn-lg btn-block btn-spec\" (click)='onStartClick(company.company_name)'>Get started</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <hr class=\"mb-4\" />\r\n      <div class=\"container ml-auto\">\r\n        <button type=\"button\" class=\"btn btn-lg btn-spec\" [routerLink]=\"['/quote']\">Get Another Quote</button>\r\n        <button type=\"button\" class=\"btn btn-lg btn-spec2\" (click)=\"deleteQuote(r)\">Delete This Quote</button>\r\n        <br/> <br/> <br/>\r\n      </div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quote_service__ = __webpack_require__("./src/app/services/quote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(authService, router, quoteService) {
        this.authService = authService;
        this.router = router;
        this.quoteService = quoteService;
        this.reccomendations = ['Most Suitable', 'Suitable', 'Less Suitable', 'Not Suitable'];
        this.randomPortraits = ['http://sites.ieee.org/ias-icps/files/2016/05/male-generic-profile.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-354gNrs5QoI2JUuykVpPHiKCtYgcsdtbulzOErWOFf_5fk03g',
            'https://www.cambrex.com/wp-content/themes/cambrex/images/placeholder-profile.jpg',
            'http://www.newdesignfile.com/postpic/2014/07/generic-profile_352873.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gwCOEfnHbmKstVrm5bkO9tTszTI4BI1boJOVROmIB94CuJEY'];
        this.view_profile = true;
        this.view_clients = false;
        this.view_quotes = false;
        this.uniqueNames = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (data) {
            _this.user = data.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.onQuoteView = function () {
        this.view_profile = false;
        this.view_clients = false;
        this.view_quotes = true;
    };
    ProfileComponent.prototype.onProfileView = function () {
        this.view_profile = true;
        this.view_clients = false;
        this.view_quotes = false;
    };
    ProfileComponent.prototype.onClientsView = function () {
        this.view_profile = false;
        this.view_clients = true;
        this.view_quotes = false;
    };
    ProfileComponent.prototype.onContactView = function () {
        window.open("https://github.com/Novacer/QuickQuote-Web/blob/master/README.md", "_blank");
    };
    ProfileComponent.prototype.deleteQuote = function (index) {
        var _this = this;
        this.user.quotes.splice(index, 1);
        this.quoteService.removeQuote(this.user.quotes, function () {
            _this.user = JSON.parse(localStorage.getItem('user'));
            _this.uniqueClients();
        });
    };
    ProfileComponent.prototype.uniqueClients = function () {
        var count = 0;
        var quotesList = this.user.quotes;
        // reset the unique names
        this.uniqueNames = [];
        for (var i = 0; i < quotesList.length; i++) {
            if (this.uniqueNames.indexOf(quotesList[i].client_name) == -1) {
                this.uniqueNames.push(quotesList[i].client_name);
                count++;
            }
        }
        return count;
    };
    ProfileComponent.prototype.redirQuote = function () {
        this.router.navigateByUrl('quote');
    };
    ProfileComponent.prototype.onStartClick = function (company_name) {
        if (company_name == 'Wawanesa') {
            window.open("https://brokerportal-signin.wawanesa.com/portal/sso/login", "_blank");
        }
        else if (company_name == 'Gore') {
            window.open("https://www.gobroker.ca/Account/LogOn?ReturnUrl=%2f", "_blank");
        }
        else if (company_name == 'Intact') {
            window.open("https://brokers.intactinsurance.com/", "_blank");
        }
        else if (company_name == 'Family') {
            window.open("https://familynet.familyins.com/Portal/Account/SignIn?returnUrl=https%3A%2F%2Ffamilynet.familyins.com%2FPOS%2F", "_blank");
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_quote_service__["a" /* QuoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_quote_service__["a" /* QuoteService */]) === 'function' && _c) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/MARY/Documents/GitHub/QuickQuote-Web/angular-src/src/profile.component.js.map

/***/ }),

/***/ "./src/app/components/quote/quote.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n  position: relative;\r\n}\r\n\r\n.child{\r\n  position: absolute;\r\n  top: 50%;\r\n}\r\n\r\n.black-bg{\r\n  background-color: #585858;\r\n}\r\n\r\n.gray-bg {\r\n  background-color: #ffffff;\r\n}\r\n\r\n.mgn-top{\r\n  margin-top: 20px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.top {\r\n  padding-top: 10px;\r\n}\r\n\r\n.bottom {\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.my-btn{\r\n  padding-top: 15px;\r\n  background-color: #ffc815;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/quote/quote.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"alert alert-danger mgn-top\" *ngIf=\"!validForm\">\r\n    <strong>Invalid Form! Please make sure you fill everything out properly.</strong>\r\n  </div>\r\n<div class=\"child form-row mt-4\">\r\n                      <div class=\"col-sm-12 pb-3\">\r\n                        <h3>Client Information</h3>\r\n                        <hr />\r\n                      </div>\r\n                      <div class=\"col-sm-5 pb-3\">\r\n                          <label for=\"exampleFirst\">Full Name</label>\r\n                          <input type=\"text\" class=\"form-control\" id=\"exampleFirst\" name=\"client_name\" [(ngModel)]=\"client_name\">\r\n                      </div>\r\n                       <div class=\"col-sm-2 pb-3\">\r\n                           <label for=\"exampleAccount\">Account #</label>\r\n                           <input type=\"text\" class=\"form-control\" id=\"exampleAccount\" placeholder=\"XXXXXX\" name=\"client_account_num\" [(ngModel)]=\"client_account_num\">\r\n                       </div>\r\n                       <div class=\"col-sm-3 pb-3\">\r\n                           <label for=\"exampleCtrl\">Year of Birth</label>\r\n                           <input type=\"number\" min=\"1900\" max=\"2018\" class=\"form-control\" id=\"exampleCtrl\" placeholder=\"YYYY\" name=\"client_dob\" [(ngModel)]=\"client_dob\">\r\n                       </div>\r\n                       <div class=\"col-sm-2 pb-3\">\r\n                           <label for=\"exampleCtrl\">Years Claims Free</label>\r\n                           <input type=\"number\" min=\"0\" max=\"10\" class=\"form-control\" id=\"exampleCtrl\" value=\"0\" name=\"client_claims_free\" [(ngModel)]=\"client_claims_free\">\r\n                       </div>\r\n                       <div class=\"col-sm-12 pb-3\">\r\n                         <h3>Address Information</h3>\r\n                         <hr />\r\n                       </div>\r\n                       <div class=\"col-sm-6 pb-3\">\r\n                           <label for=\"exampleCity\">Insured Property Street Address</label>\r\n                           <input type=\"text\" class=\"form-control\" id=\"exampleCity\" name=\"client_street\" [(ngModel)]=\"client_street\">\r\n                       </div>\r\n                       <div class=\"col-sm-3 pb-3\">\r\n                           <label for=\"exampleZip\">Insured Property Postal Code</label>\r\n                           <input type=\"text\" class=\"form-control\" id=\"exampleZip\" placeholder=\"XXX XXX\" name=\"client_postal_code\" [(ngModel)]=\"client_postal_code\">\r\n                       </div>\r\n                       <div class=\"col-md-3 pb-3\">\r\n                         <label for=\"exampleAccount\"></label>\r\n                           <div class=\"form-group large\">\r\n                               <div class=\"form-check form-check-inline top\">\r\n                                   <label class=\"form-check-label\">\r\n                                       <input class=\"form-check-input\" type=\"checkbox\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\" [checked]=\"same_mailing\" (change)=\"same_mailing = !same_mailing\" checked> Mail policy to this address\r\n                                   </label>\r\n                               </div>\r\n                           </div>\r\n                       </div>\r\n                       <div class=\"col-sm-6 pb-3\" *ngIf=\"!same_mailing\">\r\n                           <label for=\"exampleCity\">Mailing Street Address</label>\r\n                           <input type=\"text\" class=\"form-control\" id=\"exampleCity\" name=\"house_street\" [(ngModel)]=\"house_street\">\r\n                       </div>\r\n                       <div class=\"col-sm-3 pb-3\" *ngIf=\"!same_mailing\">\r\n                           <label for=\"exampleSt\">Mailing Province</label>\r\n                           <select class=\"form-control\" id=\"exampleSt\" #mail_province (change)=\"house_province = mail_province.value\">\r\n                               <option>Pick a province</option>\r\n                               <option>AB</option>\r\n                               <option>BC</option>\r\n                               <option>MB</option>\r\n                               <option>NB</option>\r\n                               <option>NL</option>\r\n                               <option>NS</option>\r\n                               <option>ON</option>\r\n                               <option>PE</option>\r\n                               <option>QC</option>\r\n                               <option>SK</option>\r\n                           </select>\r\n                       </div>\r\n                       <div class=\"col-sm-3 pb-3\" *ngIf=\"!same_mailing\">\r\n                           <label for=\"exampleZip\">Mailing Postal Code</label>\r\n                           <input type=\"text\" class=\"form-control\" id=\"exampleZip\" placeholder=\"XXX-XXX\" name=\"house_postal_code\" [(ngModel)]=\"house_postal_code\">\r\n                       </div>\r\n                       <div class=\"col-sm-12 pb-3\">\r\n                         <h3>Insured Property Information</h3>\r\n                         <hr />\r\n                       </div>\r\n                       <div class=\"col-md-4 pb-3\">\r\n                           <label for=\"exampleAccount\">Build Quality</label>\r\n                           <div class=\"form-group small top\">\r\n                               <div class=\"form-check form-check-inline\">\r\n                                   <label class=\"form-check-label\">\r\n                                       <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions1\" id=\"inlineRadio11\" (click)=\"house_build = 'Standard'\" checked> Standard\r\n                                   </label>\r\n                               </div>\r\n                               <div class=\"form-check form-check-inline\">\r\n                                   <label class=\"form-check-label\">\r\n                                       <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions1\" id=\"inlineRadio12\" (click)=\"house_build = 'Semi-custom'\"> Semi-custom\r\n                                   </label>\r\n                               </div>\r\n                               <div class=\"form-check form-check-inline\">\r\n                                   <label class=\"form-check-label\">\r\n                                       <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions1\" id=\"inlineRadio13\" (click)=\"house_build = 'Custom'\"> Custom\r\n                                   </label>\r\n                               </div>\r\n                           </div>\r\n                       </div>\r\n                       <div class=\"col-sm-2 pb-3\">\r\n                           <label for=\"exampleCtrl\">Year Built</label>\r\n                           <input type=\"number\" min=\"1800\" max=\"2018\" class=\"form-control\" id=\"exampleCtrl\" placeholder=\"YYYY\" name=\"house_year_built\" [(ngModel)]=\"house_year_built\">\r\n                       </div>\r\n                       <div class=\"col-sm-3 pb-3\">\r\n                           <label for=\"exampleAmount\">Total Sqft (excluding basement)</label>\r\n                           <div class=\"input-group\">\r\n                               <input type=\"number\" min=\"0\" class=\"form-control\" id=\"exampleAmount\" placeholder=\"Amount\" name=\"house_sqft\" [(ngModel)]=\"house_sqft\">\r\n                               <div class=\"input-group-append\"><span class=\"input-group-text\">sqft</span></div>\r\n                           </div>\r\n                       </div>\r\n                       <div class=\"col-sm-3 pb-3\">\r\n                           <label for=\"exampleAmount\">Basement Sqft (zero if none)</label>\r\n                           <div class=\"input-group\">\r\n                               <input type=\"number\" min=\"0\" class=\"form-control\" id=\"exampleAmount\" placeholder=\"Amount\" name=\"house_basement_sqft\" [(ngModel)]=\"house_basement_sqft\">\r\n                               <div class=\"input-group-append\"><span class=\"input-group-text\">sqft</span></div>\r\n                           </div>\r\n                       </div>\r\n                       <div class=\"col-sm-3 pb-3\">\r\n                           <label for=\"floors\">Number of Floors (exclude basement)</label>\r\n                           <select class=\"form-control\" id=\"floors\" #select_floors (change)=\"house_num_floors = select_floors.value\">\r\n                               <option>1</option>\r\n                               <option>2</option>\r\n                               <option>3+</option>\r\n                           </select>\r\n                       </div>\r\n                       <div class=\"col-sm-3 pb-3\">\r\n                           <label for=\"roof\">The roof of this property is...</label>\r\n                           <select class=\"form-control\" id=\"roof\" #roof_update (change)=\"changeUpdate(roof_update.value)\">\r\n                               <option>Less than 25 years old</option>\r\n                               <option>25+ years old</option>\r\n                           </select>\r\n                       </div>\r\n                       <div class=\"col-md-6 pb-3\">\r\n                           <label for=\"exampleAccount\">Burglar Alarm Type</label>\r\n                           <div class=\"form-group small top\">\r\n                               <div class=\"form-check form-check-inline\">\r\n                                   <label class=\"form-check-label\">\r\n                                       <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions2\" id=\"inlineRadio21\" (click)=\"house_alarm_type = 'None'\" checked> None\r\n                                   </label>\r\n                               </div>\r\n                               <div class=\"form-check form-check-inline\">\r\n                                   <label class=\"form-check-label\">\r\n                                       <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions2\" id=\"inlineRadio22\" (click)=\"house_alarm_type = 'Local'\"> Local\r\n                                   </label>\r\n                               </div>\r\n                               <div class=\"form-check form-check-inline\">\r\n                                   <label class=\"form-check-label\">\r\n                                       <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions2\" id=\"inlineRadio23\" (click)=\"house_alarm_type = 'Monitored'\"> Monitored\r\n                                   </label>\r\n                               </div>\r\n                           </div>\r\n                       </div>\r\n                       <div class=\"col-md-6 pb-3\">\r\n                           <label for=\"exampleMessage\">Comments</label>\r\n                           <textarea class=\"form-control\" id=\"exampleMessage\" name=\"client_comments\" [(ngModel)]=\"client_comments\"></textarea>\r\n                           <small class=\"text-info\">\r\n                             Add any comments or reminders here.\r\n                           </small>\r\n                       </div>\r\n                       <div class=\"col-md-6 pb-3\">\r\n                         <label class=\"bottom\" for=\"final\"></label>\r\n                         <button class=\"btn btn-lg my-btn btn-block\" type=\"submit\" id=\"final\" (click)=\"onQuoteClick()\">Quote it!</button>\r\n                       </div>\r\n\r\n                       <div class=\"col-md-12\">\r\n                         <hr />\r\n                         <footer>\r\n                           <p class=\"float-right\"><a href=\"/quote/#\">Reset form</a></p>\r\n                           <p>&copy; 2018 Jack Zhang &middot; <a href=\"#\">Privacy</a> &middot; <a href=\"#\">Terms</a></p>\r\n                         </footer>\r\n                       </div>\r\n                   </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/quote/quote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_quote_service__ = __webpack_require__("./src/app/services/quote.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuoteComponent = (function () {
    function QuoteComponent(authService, router, validateService, quoteService) {
        this.authService = authService;
        this.router = router;
        this.validateService = validateService;
        this.quoteService = quoteService;
        this.same_mailing = true;
        this.validForm = true;
        this.client_province = "BC";
        this.house_province = "BC";
        this.house_build = "Standard";
        this.house_num_floors = "1";
        this.house_updated = true;
        this.house_alarm_type = "None";
        this.client_comments = "";
        this.client_claims_free = 0;
    }
    QuoteComponent.prototype.ngOnInit = function () {
    };
    QuoteComponent.prototype.onQuoteClick = function () {
        var _this = this;
        this.client_mailing = {
            street: this.client_street,
            province: this.client_province,
            postal_code: this.client_postal_code
        };
        if (this.same_mailing) {
            this.house_address = this.client_mailing;
        }
        else {
            this.house_address = {
                street: this.house_street,
                province: this.house_province,
                postal_code: this.house_postal_code
            };
        }
        this.client = {
            name: this.client_name,
            account_num: this.client_account_num,
            dob: this.client_dob,
            claims_free: this.client_claims_free,
            mailing: this.client_mailing,
            comments: this.client_comments
        };
        this.house = {
            address: this.house_address,
            build_quality: this.house_build,
            year_built: this.house_year_built,
            sqft: this.house_sqft,
            basement_sqft: this.house_basement_sqft,
            num_floors: this.house_num_floors,
            updated: this.house_updated,
            alarm_type: this.house_alarm_type,
            price: -1
        };
        if (this.validateService.validateQuote(this.client, this.house)) {
            //console.log('success!');
            if (2018 - this.house.year_built <= 25) {
                this.house.updated = true;
            }
            // approximate building limits
            var numFloors = this.house.num_floors;
            var base_sqft = this.house.basement_sqft;
            if ((numFloors == "3+" || numFloors == "2") && base_sqft > 0) {
                this.house.price = this.quoteService.approxRCTWithBasement(this.house.sqft, this.house.build_quality);
            }
            else if ((numFloors == "3+" || numFloors == "2")) {
                this.house.price = this.quoteService.approxRCTNoBasement(this.house.sqft, this.house.build_quality);
            }
            else if (base_sqft > 0) {
                this.house.price = this.quoteService.approxRCT1StoreyBase(this.house.sqft, this.house.build_quality);
            }
            else {
                this.house.price = this.quoteService.approxRCT1Storey(this.house.sqft, this.house.build_quality);
            }
            this.validForm = true;
            this.quoteService.createAndSaveQuote(this.client, this.house, function () {
                _this.router.navigateByUrl('view-quote');
            });
        }
        else {
            this.validForm = false;
        }
    };
    QuoteComponent.prototype.changeUpdate = function (status) {
        if (status == 'Less than 25 years old') {
            this.house_updated = true;
        }
        else {
            this.house_updated = false;
        }
    };
    QuoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quote',
            template: __webpack_require__("./src/app/components/quote/quote.component.html"),
            styles: [__webpack_require__("./src/app/components/quote/quote.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_quote_service__["a" /* QuoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_quote_service__["a" /* QuoteService */]) === 'function' && _d) || Object])
    ], QuoteComponent);
    return QuoteComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/MARY/Documents/GitHub/QuickQuote-Web/angular-src/src/quote.component.js.map

/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: -ms-flexbox;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n  -ms-flex-pack: center;\r\n  -webkit-box-align: center;\r\n  align-items: center;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.my-btn{\r\n  color: white;\r\n  background-color: #ffc815;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"text-center\">\r\n    <form class=\"form-signin\" (submit)=\"onRegSubmit()\">\r\n      <img class=\"mb-4\" src=\"http://www.clker.com/cliparts/k/D/s/Z/R/D/yellow-umbrella.svg\" alt=\"\" width=\"120\" height=\"120\">\r\n\r\n      <div class=\"alert alert-danger\" *ngIf=\"regFailed\">\r\n        <strong>Registration Failed!</strong>\r\n      </div>\r\n      <div class=\"alert alert-danger\" *ngIf=\"userExists\">\r\n        <strong>Username Already Exists!</strong>\r\n      </div>\r\n\r\n      <h1 class=\"h3 mb-3 font-weight-normal\">Please register</h1>\r\n\r\n      <label for=\"inputName\" class=\"sr-only\">Name</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" id=\"inputName\" placeholder=\"Name\" required>\r\n\r\n      <label for=\"inputUserName\" class=\"sr-only\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" id=\"inputUserName\" placeholder=\"Username\" required>\r\n\r\n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\r\n\r\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\r\n\r\n      <button class=\"btn btn-lg my-btn btn-block\" type=\"submit\">Register</button>\r\n      <p class=\"mt-5 mb-3 text-muted\">&copy; 2018</p>\r\n    </form>\r\n  </body>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.regFailed = false;
        this.userExists = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // check if all fields are filled out
        if (this.validateService.validateRegister(user)) {
            this.authService.checkUserAvail(this.username).subscribe(function (data) {
                if (data.success) {
                    _this.userExists = false;
                    // register user
                    _this.authService.registerUser(user).subscribe(function (data) {
                        if (data.success) {
                            _this.regFailed = false;
                            _this.router.navigateByUrl('login');
                        }
                        else {
                            _this.regFailed = true;
                        }
                    });
                }
                else {
                    _this.userExists = true;
                }
            });
        }
        else {
            this.regFailed = true;
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/MARY/Documents/GitHub/QuickQuote-Web/angular-src/src/register.component.js.map

/***/ }),

/***/ "./src/app/components/view-quote/view-quote.component.css":
/***/ (function(module, exports) {

module.exports = "html {\r\n  font-size: 14px;\r\n}\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n.container {\r\n  max-width: 960px;\r\n}\r\n.pricing-header {\r\n  max-width: 700px;\r\n}\r\n.card-deck .card {\r\n  min-width: 220px;\r\n}\r\n.border-top { border-top: 1px solid #e5e5e5; }\r\n.border-bottom { border-bottom: 1px solid #e5e5e5; }\r\n.box-shadow { -webkit-box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\r\n.btn-spec{\r\n  background-color: #ffc815;\r\n  float: right;\r\n  color: white;\r\n}\r\n.btn-spec2 {\r\n  background-color: #585858;\r\n  float: right;\r\n  color: white;\r\n  margin-right: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/view-quote/view-quote.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\" *ngIf=\"existsSavedQuote\">\n      <h1 class=\"display-4\">Quote for {{savedQuote.client_name}}</h1>\n      <p class=\"lead\">These are the comparisons for this client's property. Click on \"Get Started\" to go to the company's portal to get an official quote. Click on \"Save Quote\" to save this quote to your dashboard.</p>\n    </div>\n\n<div class=\"container-fluid\" *ngIf=\"existsSavedQuote\">\n      <div class=\"card-deck mb-4 text-center\">\n        <div class=\"card mb-2 box-shadow\" *ngFor=\"let company of companies; let i = index\">\n          <div class=\"card-header\">\n            <h4 class=\"my-0 font-weight-normal\">{{reccomendations[i]}}</h4>\n          </div>\n          <div class=\"card-body\">\n            <h1 class=\"card-title pricing-card-title\">{{company.company_name}}</h1>\n            <ul class=\"list-unstyled mt-3 mb-4\">\n              <li *ngFor=\"let discount of company.discountList\">{{discount}}</li>\n            </ul>\n            <button type=\"button\" class=\"btn btn-lg btn-block btn-spec\" (click)='onStartClick(company.company_name)'>Get started</button>\n          </div>\n        </div>\n      </div>\n\n      <hr class=\"mb-4\" />\n    <div class=\"container ml-auto\">\n      <button type=\"button\" class=\"btn btn-lg btn-spec\" (click)='onSaveClick()'>Save Quote</button>\n      <button type=\"button\" class=\"btn btn-lg btn-spec2\" (click)='onAnotherClick()'>Get Another Quote</button>\n    </div>\n</div>\n\n<footer class=\"my-5 pt-5 text-muted text-center text-small\">\n        <p class=\"mb-1\">&copy; 2017-2018 Company Name</p>\n        <ul class=\"list-inline\">\n          <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\n          <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\n          <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\n        </ul>\n      </footer>\n"

/***/ }),

/***/ "./src/app/components/view-quote/view-quote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewQuoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quote_service__ = __webpack_require__("./src/app/services/quote.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewQuoteComponent = (function () {
    function ViewQuoteComponent(router, quoteService) {
        this.router = router;
        this.quoteService = quoteService;
        var quote = this.quoteService.getSavedQuote();
        if (!quote) {
            this.savedQuote = null;
            this.existsSavedQuote = false;
            this.router.navigateByUrl('quote');
        }
        else {
            this.savedQuote = quote;
            this.existsSavedQuote = true;
            this.companies = quote.companies;
        }
        this.reccomendations = ['Most Suitable', 'Suitable', 'Less Suitable', 'Not Suitable'];
    }
    ViewQuoteComponent.prototype.ngOnInit = function () {
    };
    ViewQuoteComponent.prototype.onStartClick = function (company_name) {
        if (company_name == 'Wawanesa') {
            window.open("https://brokerportal-signin.wawanesa.com/portal/sso/login", "_blank");
        }
        else if (company_name == 'Gore') {
            window.open("https://www.gobroker.ca/Account/LogOn?ReturnUrl=%2f", "_blank");
        }
        else if (company_name == 'Intact') {
            window.open("https://brokers.intactinsurance.com/", "_blank");
        }
        else if (company_name == 'Family') {
            window.open("https://familynet.familyins.com/Portal/Account/SignIn?returnUrl=https%3A%2F%2Ffamilynet.familyins.com%2FPOS%2F", "_blank");
        }
    };
    ViewQuoteComponent.prototype.onSaveClick = function () {
        var _this = this;
        this.quoteService.pushSavedQuote(function () {
            _this.router.navigateByUrl('profile');
        });
    };
    ViewQuoteComponent.prototype.onAnotherClick = function () {
        this.router.navigateByUrl('quote');
    };
    ViewQuoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-quote',
            template: __webpack_require__("./src/app/components/view-quote/view-quote.component.html"),
            styles: [__webpack_require__("./src/app/components/view-quote/view-quote.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_quote_service__["a" /* QuoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_quote_service__["a" /* QuoteService */]) === 'function' && _b) || Object])
    ], ViewQuoteComponent);
    return ViewQuoteComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/MARY/Documents/GitHub/QuickQuote-Web/angular-src/src/view-quote.component.js.map

/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigateByUrl('login');
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/MARY/Documents/GitHub/QuickQuote-Web/angular-src/src/auth.guard.js.map

/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    // checkUserAvail(string) checks if the username is not taken in the database
    AuthService.prototype.checkUserAvail = function (username) {
        var body = {
            username: username
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/check', body, { headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    // registerUser(Object) registers user in the database
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    // authenticateUser(Object) checks if the user has the valid credentials
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    // storeUserData(string, Object) saves the token and user in the localStorage
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    // updateUserData(Object) saves the user to localStorage
    AuthService.prototype.updateUserData = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.user = user;
    };
    // loadToken() reads the current token from localStorage
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    // loadUser() reads the current token from localStorage
    AuthService.prototype.loadUser = function () {
        var string_user = localStorage.getItem('user');
        this.user = JSON.parse(string_user);
    };
    // getProfile() returns the user's profile by making a HTTP GET request with
    //   the token in the header
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('users/profile', { headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    // addQuotes(Object) adds the newQuote to the user's quotes in MongoDB
    AuthService.prototype.addQuotes = function (newQuote) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        this.loadUser();
        var quotes = this.user.quotes;
        quotes.push(newQuote);
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        var update = {
            username: this.user.username,
            quotes: quotes
        };
        return this.http.post('users/quote', update, { headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    // removeQuotes(Array) overwrites the user's quotes in MongoDB with the newQuotes
    AuthService.prototype.removeQuotes = function (newQuotes) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        this.loadUser();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        var update = {
            username: this.user.username,
            quotes: newQuotes
        };
        return this.http.post('users/quote', update, { headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    // logout() clears the localStorage
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    // loggedIn() returns true if the token is valid, false otherwise
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/MARY/Documents/GitHub/QuickQuote-Web/angular-src/src/auth.service.js.map

/***/ }),

/***/ "./src/app/services/quote.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteService = (function () {
    function QuoteService(authService) {
        this.authService = authService;
    }
    // approxRCTWithBasement(number, string) returns the approximate building limit
    //   for a two storey house with sqft size, build quality specified by custom, and a basement
    QuoteService.prototype.approxRCTWithBasement = function (sqft, custom) {
        if (custom == "Standard") {
            return sqft * 200;
        }
        else if (custom == "Semi-custom") {
            return sqft * 275;
        }
        else if (custom == "Custom") {
            return sqft * 310;
        }
        else {
            return -1;
        }
    };
    // approxRCTNoBasement(number, string) returns an approximate building limit
    //   for a two storey house with sqft size, build quality specified by custom, and no basement
    QuoteService.prototype.approxRCTNoBasement = function (sqft, custom) {
        if (custom == "Standard") {
            return sqft * 200;
        }
        else if (custom == "Semi-custom") {
            return sqft * 250;
        }
        else if (custom == "Custom") {
            return sqft * 300;
        }
        else {
            return -1;
        }
    };
    // approxRCT1StoreyBase(number, string) returns an approximate building limit
    //   for a one storey house with sqft size, build quality specified by custom, and basement
    QuoteService.prototype.approxRCT1StoreyBase = function (sqft, custom) {
        if (custom == "Standard") {
            return sqft * 200;
        }
        else if (custom == "Semi-custom") {
            return sqft * 225;
        }
        else if (custom == "Custom") {
            return sqft * 275;
        }
        else {
            return -1;
        }
    };
    // approxRCT1Storey(number, string) returns an approximate building limit
    //   for a one storey house with sqft size, build quality specified by custom, and no basement
    QuoteService.prototype.approxRCT1Storey = function (sqft, custom) {
        if (custom == "Standard") {
            return sqft * 180;
        }
        else if (custom == "Semi-custom") {
            return sqft * 210;
        }
        else if (custom == "Custom") {
            return sqft * 250;
        }
        else {
            return -1;
        }
    };
    // createAndSaveQuote(Object, Object, func) creates a quote using client and house,
    //   and saves it to the localStorage, calling next upon finishing
    QuoteService.prototype.createAndSaveQuote = function (client, house, next) {
        this.m_client = client;
        this.m_house = house;
        //Gore
        var gore_score = 100;
        var gore_discounts = [];
        //Intact
        var intact_score = 100;
        var intact_discounts = [];
        //Wawanesa
        var wawanesa_score = 100;
        var wawanesa_discounts = [];
        //Family
        var family_score = 100;
        var family_discounts = [];
        //check Target Market
        if (house.price / house.sqft < 275) {
            gore_score -= 15;
            intact_score -= 25;
        }
        if (house.price / house.sqft <= 225) {
            family_score -= 5;
        }
        if (!house.updated) {
            gore_score -= 10;
            intact_score -= 10;
            family_score -= 23;
        }
        else if (house.year_built < (2018 - 40)) {
            gore_score -= 20;
            family_score -= 20;
        }
        if (house.year_built > 2008) {
            gore_score += 15;
            gore_discounts.push("New Home Discount 15%");
            wawanesa_score += 15;
            wawanesa_discounts.push("New Home Discount 15%");
            family_score += 15;
            family_discounts.push("New Home Discount 15%");
        }
        else if (house.year_built > 2003) {
            var new_home_disc = (house.year_built - 2003) * 3;
            gore_score += new_home_disc;
            gore_discounts.push("New Home Discount " + new_home_disc + "%");
            wawanesa_score += new_home_disc;
            wawanesa_discounts.push("New Home Discount " + new_home_disc + "%");
            family_score += new_home_disc;
            family_discounts.push("New Home Discount " + new_home_disc + "%");
        }
        if (house.price >= 1000000) {
            family_score = -1;
            family_discounts = ["No price for this company"];
        }
        // check claims free discount
        if (client.claims_free >= 5) {
            gore_score += 14;
            gore_discounts.push("Claims Free Discount 14%");
        }
        if (client.claims_free >= 4) {
            wawanesa_score += 15;
            wawanesa_discounts.push("Claims Free Discount 15%");
            family_score += 14;
            family_discounts.push("Claims Free Discount 14%");
        }
        else if (client.claims_free >= 3) {
            gore_score += 9;
            gore_discounts.push("Claims Free Discount 9%");
        }
        // Intact claims free calculation
        var cfd = (client.claims_free <= 10) ? (client.claims_free * 2.7) : 27;
        var int_cfd = Math.round(cfd);
        intact_score += int_cfd;
        intact_discounts.push("Claims Free Discount " + int_cfd + "%");
        // check age discount
        if (2018 - client.dob >= 50) {
            gore_score += 19;
            gore_discounts.push("Senior Discount 19%");
            wawanesa_score += 15;
            wawanesa_discounts.push("Senior Discount 15%");
        }
        if (2018 - client.dob >= 60) {
            intact_score += 30;
            intact_discounts.push("Senior Discount 30%");
            family_score += 15;
            family_discounts.push("Senior Discount 15%");
        }
        else if (2018 - client.dob >= 50) {
            intact_score += 22;
            intact_discounts.push("Senior Discount 22%");
        }
        // check alarm discount
        if (house.alarm_type == 'Local') {
            gore_score += 3;
            gore_discounts.push("Local Alarm Discount 3%");
            intact_score += 18;
            intact_discounts.push("Local Alarm Discount 18%");
            wawanesa_score += 10;
            wawanesa_discounts.push("Local Alarm Discount 10%");
            family_score += 4;
            family_discounts.push("Local Alarm Discount 4%");
        }
        else if (house.alarm_type == 'Monitored') {
            gore_score += 8;
            gore_discounts.push("Monitored Alarm Discount 8%");
            intact_score += 18;
            intact_discounts.push("Monitored Alarm Discount 18%");
            wawanesa_score += 10;
            wawanesa_discounts.push("Monitored Alarm Discount 10%");
            family_score += 9;
            family_discounts.push("Monitored Alarm Discount 9%");
        }
        // create company objects
        this.gore = {
            company_name: "Gore",
            discountList: gore_discounts,
            score: gore_score
        };
        this.intact = {
            company_name: "Intact",
            discountList: intact_discounts,
            score: intact_score
        };
        this.wawanesa = {
            company_name: "Wawanesa",
            discountList: wawanesa_discounts,
            score: wawanesa_score
        };
        this.family = {
            company_name: "Family",
            discountList: family_discounts,
            score: family_score
        };
        var companies_list = [this.gore, this.intact, this.wawanesa, this.family];
        // define comparison function
        var comparison = function (a, b) {
            if (a.score < b.score) {
                return 1;
            }
            else if (a.score > b.score) {
                return -1;
            }
            else {
                return 0;
            }
        };
        // sort the array by score (descending)
        companies_list.sort(comparison);
        this.quote = {
            client_name: client.name,
            companies: companies_list
        };
        localStorage.setItem('quote', JSON.stringify(this.quote));
        next();
    };
    // getSaveQuote() reads and returns the saved quote in localStorage
    QuoteService.prototype.getSavedQuote = function () {
        var savedString = localStorage.getItem('quote');
        if (savedString == null) {
            return false;
        }
        else {
            return JSON.parse(savedString);
        }
    };
    // pushSavedQuote(func) pushes the quote that is saved in localStorage into the
    //   users list of quotes saved in MongoDB, calling next upon finishing
    // requires: 'quote' exists in localStorage
    QuoteService.prototype.pushSavedQuote = function (next) {
        var _this = this;
        this.loadQuote();
        this.authService.addQuotes(this.quote).subscribe(function (data) {
            if (data.success) {
                _this.authService.updateUserData(data.user);
                next();
            }
            else {
                return false;
            }
        });
    };
    // loadQuote() reads the quote from localStorage
    QuoteService.prototype.loadQuote = function () {
        this.quote = JSON.parse(localStorage.getItem('quote'));
    };
    // removeQuote(array, func) overwrites the user's list of quotes saved in
    //   MongoDB with newQuotes, calling next upon finishing
    QuoteService.prototype.removeQuote = function (newQuotes, next) {
        var _this = this;
        this.authService.removeQuotes(newQuotes).subscribe(function (data) {
            if (data.success) {
                _this.authService.updateUserData(data.user);
                next();
            }
            else {
                return false;
            }
        });
    };
    QuoteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], QuoteService);
    return QuoteService;
    var _a;
}());
//# sourceMappingURL=C:/Users/MARY/Documents/GitHub/QuickQuote-Web/angular-src/src/quote.service.js.map

/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    // validateRegister(Object) returns false if any of user's fields are undefined, true otherwise
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    // validateEmail(string) returns true if email is a vaild email, false otherwise
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    // validateQuote(Object, Object) returns true if client and house are valid, otherwise false
    ValidateService.prototype.validateQuote = function (client, house) {
        // check client basic fields
        if (client.name == undefined || client.account_num == undefined || client.dob == undefined || client.claims_free == undefined) {
            return false;
        }
        // check mailing
        if (client.mailing.street == undefined || client.mailing.province == undefined || client.mailing.postal_code == undefined) {
            return false;
        }
        // check house basic fields
        if (house.build_quality == undefined || house.year_built == undefined || house.sqft == undefined ||
            house.basement_sqft == undefined || house.num_floors == undefined || house.updated == undefined ||
            house.alarm_type == undefined) {
            return false;
        }
        // check house address
        if (house.address.street == undefined || house.address.province == undefined || house.address.province == 'Pick a province' ||
            house.address.postal_code == undefined) {
            return false;
        }
        //misc checks
        if (client.claims_free < 0 || house.sqft < 0 || house.basement_sqft < 0) {
            return false;
        }
        if (client.dob > 2018 || house.year_built > 2018) {
            return false;
        }
        else if (client.dob < 1800 || house.year_built < 1800) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/Users/MARY/Documents/GitHub/QuickQuote-Web/angular-src/src/validate.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/MARY/Documents/GitHub/QuickQuote-Web/angular-src/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/MARY/Documents/GitHub/QuickQuote-Web/angular-src/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map