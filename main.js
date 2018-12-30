(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div class=\"header\" [style.height.px]=\"headerHeight\">\n    <img src=\"../assets/testy_white.svg\" />\n    <div id=\"tagline\" *ngIf=\"headerHeight > 200\">\n      The modern TypeScript testing framework.\n    </div>\n\n    <div class=buttons *ngIf=\"headerHeight > 225\">\n      <ul>\n        <li>\n          <a href=\"https://github.com/Testy/TestyTs\">View on GitHub</a>\n        </li>\n        <li>-</li>\n        <li>\n          <a href=\"https://marketplace.visualstudio.com/items?itemName=Testy.vscode-testyts-test-adapter\">Vs Code Tests Explorer</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div id=\"content\" [style.padding-top.px]=\"contentPaddingTop + 48\">\n    <div class=\"panel\">\n      <h1> What is Testy.Ts? </h1>\n\n      Testy.Ts is a modern TypeScript testing framework.\n    </div>\n\n    <div class=\"panel\">\n\n      <h1>Installation</h1>\n      <div class=\"grid\">\n        <div class=\"left\">\n          To install Testy.Ts, run one of the following lines.\n        </div>\n\n        <div class=\"right\">\n          <pre class=console>\n$ npm i --save-dev testyts <span class=comment>// To install locally</span>\n$ npm i -g testyts <span class=comment>// To install globally</span></pre>\n        </div>\n      </div>\n\n      <h1>Setup</h1>\n      <div class=\"grid\">\n        <div class=\"left\">\n          To generate a testy.json configuration file, use the following command.\n        </div>\n\n        <div class=\"right\">\n          <pre class=console>\n$ testyts init</pre>\n        </div>\n      </div>\n\n      <h1>Writing your first test</h1>\n      <div class=\"grid\">\n        <div class=\"left\">\n          Writing tests with Testy is simple. Don't forget to export your test suites though. Otherwise, they won't be discovered by\n          the test runner.\n        </div>\n        <div class=\"right\">\n          <pre code>\n@testSuite()\nexport class MyTestSuite {{'{'}} \n\n    @test()\n    quickMaths() {{'{'}}\n        expect.toBeEqual(1 + 1, 2);\n    }\n}</pre>\n        </div>\n      </div>\n\n      <h1>Run those tests</h1>\n      <div class=\"grid\">\n        <div class=\"left\">\n          To run your Testy.Ts tests, simply run the following command. Testy.Ts uses is the \"testy.json\" file contained in the current\n          directory by default. Testy will fail if there is no such file.\n        </div>\n\n        <div class=\"right\">\n          <pre class=console>\n$ testyts\n$ testyts --config ./config.json <span class=comment>// Custom config file</span></pre>\n        </div>\n      </div>\n\n      <h1>Setup and teardown methods</h1>\n      <div class=\"grid\">\n        <div class=\"left\">\n          Testy.Ts provides setup and teardown hooks.\n        </div>\n        <div class=\"right\">\n          <pre code>\n@testSuite()\nexport class MyTestSuite {{'{'}}\n  \n    @beforeAll()\n    beforeAll() {{'{'}}\n        // This is executed before all the tests\n    }\n  \n    @beforeEach()\n    beforeEach() {{'{'}}\n        // This is executed before each test\n    }\n  \n    @afterEach()\n    afterEach() {{'{'}}\n        // This is executed after each test\n    }\n    \n    @afterAll()\n    afterAll() {{'{'}}\n        // This is executed after all the tests\n    }\n}</pre>\n        </div>\n      </div>\n\n      <h1>Base test suites</h1>\n      <div class=\"grid\">\n        <div class=\"left\">\n          Okay, this is where stuff gets interesting. Testy.Ts lets you use inheritance. This means you don't have to duplicate complex\n          setup, teardown and helper functions. You also don't have to put fifty tests in the same class.\n        </div>\n        <div class=\"right\">\n          <pre code>\nclass MyBaseTestSuite {{'{'}}\n    // Setup, teardown and helpers extravaganza\n}\n  \n@testSuite()\nclass MyTestSuite extends MyBaseTestSuite {{'{'}}\n    // My tests\n}</pre>\n        </div>\n      </div>\n\n      <h1>Testcases</h1>\n      <div class=\"grid\">\n        <div class=\"left\">\n          Testy.Ts allows you to run the same test multiple times with different inputs and expectations. Just pass an array of TestCases\n          to the test decorator.\n\n          <br>\n          <br> A TestCase consists of a name and one or more arguments. The arguments are passed to your test method.\n        </div>\n        <div class=\"right\">\n          <pre code>\n@testSuite()\nexport class MyTestSuite {{'{'}}\n\n    @test('My test', [\n          new TestCase('Two plus two is four', 2, 2, 4),\n          new TestCase(`Minus one that's three`, 4, -1, 3)\n    ])\n    onePlusOne(a: number, b: number, result: number) {{'{'}}\n        expect.toBeEqual(a + b, result);\n    }\n}</pre>\n        </div>\n      </div>\n\n      <h1>Asserting</h1>\n      <div class=\"grid\">\n        <div class=\"left\">\n          Testy.Ts comes with a whole bunch of assertion methods and also a dash of syntactic sugar sexyness.\n        </div>\n        <div class=\"right\">\n          <pre code>\nexpect.toBeTrue(2 > 1);\nexpect.toBeEqual('a', 'a');\nexpect.not.toBeEqual('p', 'np');\nexpect.toThrow(() => someNastyMethod());\nexpect.toBeSorted.inAscendingOrder([0, 1, 1, 2, 3, 5, 8]);\n// More!</pre>\n        </div>\n      </div>\n\n      <h1>Focusing and ignoring tests</h1>\n      <div class=\"grid\">\n        <div class=\"left\">\n          You can ignore tests by adding an x before a test suite or a specific test decorator. Ignored tests will still show up in\n          the test report, but they will be marked as ignored.\n        </div>\n        <div class=\"right\">\n          <pre code>\n@xtestSuite() // This test suite will be ignored\nexport class MyTestSuite {{'{'}} \n  // My tests\n}\n  \n@testSuite()\nexport class MyTestSuite {{'{'}}\n\n    @xtest() // This test will be ignored\n    onePlusOne() {{'{'}}\n        // Some test\n    }\n}</pre>\n        </div>\n\n        <div class=\"left\">\n          You can also focus tests by adding an f before a test suite or a specific test decorator. If one or more test or test suites\n          are focused, only those will be ran. The others will be reported as ignored.\n        </div>\n        <div class=\"right\">\n          <pre code>\n  @ftestSuite() // This test suite will be focused\n  export class MyTestSuite {{'{'}} \n    // My tests\n  }\n    \n  @testSuite()\n  export class MyTestSuite {{'{'}}\n  \n      @ftest() // This test will be focused\n      onePlusOne() {{'{'}}\n          // Some test\n      }\n  }</pre>\n        </div>\n      </div>\n\n      <h1>Custom test names</h1>\n      <div class=\"grid\">\n        <div class=\"left\">\n          The tests and test suites names are inferred from the method or class name by default. You can specify a custom name if you're\n          into that.\n        </div>\n        <div class=\"right\">\n          <pre code>\n@testSuite('My glorious test suite')\nexport class MyTestSuite {{'{'}}\n  \n    @test('Adding one plus one, should equal two')\n    onePlusOne() {{'{'}}\n        // Assert\n        expect.toBeEqual(1 + 1, 2);\n    }\n}</pre>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  font-family: 'Montserrat';\n  font-size: 100%; }\n  @media screen and (max-width: 700px) {\n    * {\n      font-size: 24px; } }\n  #container {\n  width: 100%; }\n  #content {\n  max-width: 1000px;\n  min-width: 700px;\n  margin: 0 auto; }\n  #content .panel {\n    overflow: visible;\n    margin-bottom: 2em;\n    line-height: 2em;\n    margin: 0 25px 20px 25px; }\n  .grid {\n  margin-bottom: 30px; }\n  @media screen and (min-width: 700px) {\n  .panel .grid {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 45% auto;\n    grid-template-columns: 45% auto;\n    gap: 30px;\n    text-align: justify; } }\n  .header {\n  position: fixed;\n  width: 100%;\n  color: white;\n  background: linear-gradient(45deg, #009b55 0%, #0e753f 100%);\n  padding: 4px 20%;\n  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.75);\n  text-align: center; }\n  .header #tagline {\n    margin-bottom: 15px;\n    margin-bottom: 15px;\n    font-size: 1.15em;\n    color: rgba(255, 255, 255, 0.8); }\n  @media screen and (max-width: 700px) {\n      .header #tagline {\n        margin-left: 10px;\n        font-size: 1em; } }\n  .header img {\n    text-align: left;\n    height: 100%;\n    min-width: 100px;\n    min-height: 20px;\n    max-width: 100%;\n    max-height: 175px; }\n  .header ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0; }\n  .header ul li {\n      display: inline; }\n  .header ul li a {\n        color: white;\n        font-size: 1.15em;\n        padding: 8px;\n        text-decoration: none; }\n  .header ul li a:hover {\n          color: #e6f5e6; }\n  h1 {\n  font-size: 1.5em;\n  line-height: 2.25rem;\n  font-weight: 600;\n  margin-bottom: 0.33rem; }\n  pre {\n  background-color: #232323;\n  color: white;\n  font-family: UbuntuMono;\n  line-height: 1.25em;\n  border-radius: 6px;\n  padding: 0.66rem;\n  width: 100%;\n  overflow-x: auto; }\n  pre .comment {\n    font-family: UbuntuMono;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    color: #b4b4b4;\n    background-color: transparent; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AppComponent = /** @class */ (function () {
    function AppComponent(document) {
        this.document = document;
        this.minHeaderHeight = 48;
        this.minPaddingTop = 100;
        this.maxHeaderHeight = 250;
        this.scrollOffset = 0;
        this.scrollometer = 0;
        this.shouldHide = false;
        this.headerHeight = this.maxHeaderHeight;
        this.contentPaddingTop = this.maxHeaderHeight;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(10).subscribe(function () { return _this.adjustHeader(); });
    };
    AppComponent.prototype.adjustHeader = function () {
        var headerHeightTarget = this.scrollometer < -100 || this.scrollOffset < 4 ? this.maxHeaderHeight : this.minHeaderHeight;
        this.headerHeight = this.lerp(this.headerHeight, headerHeightTarget, 0.04);
        var paddingTopTarget = this.scrollOffset < 4 ? this.maxHeaderHeight : this.minPaddingTop;
        this.contentPaddingTop = this.lerp(this.contentPaddingTop, paddingTopTarget, 0.04);
    };
    AppComponent.prototype.lerp = function (a, b, t) {
        return a + t * (b - a);
    };
    AppComponent.prototype.onWindowScroll = function () {
        var scrollOffset = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        var difference = scrollOffset - this.scrollOffset;
        if (Math.sign(difference) === Math.sign(this.scrollometer)) {
            this.scrollometer += difference;
        }
        else {
            this.scrollometer = difference;
        }
        this.scrollOffset = scrollOffset;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _code_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code.directive */ "./src/app/code.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _code_directive__WEBPACK_IMPORTED_MODULE_3__["CodeDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/code.directive.ts":
/*!***********************************!*\
  !*** ./src/app/code.directive.ts ***!
  \***********************************/
/*! exports provided: CodeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeDirective", function() { return CodeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodeDirective = /** @class */ (function () {
    function CodeDirective(element) {
        this.element = element;
        this.el = element.nativeElement;
    }
    CodeDirective.prototype.ngAfterViewInit = function () {
        this.toMarkdown();
    };
    CodeDirective.prototype.toMarkdown = function () {
        this.el.innerHTML = highlight_js__WEBPACK_IMPORTED_MODULE_1__["highlight"]('typescript', this.el.innerText).value;
    };
    CodeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[code]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], CodeDirective);
    return CodeDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\testyts\testyts-website\website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map