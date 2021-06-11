(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Portfolio\qrcodegenerator\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "yxfS");
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.css */ "sx49");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _aboutdialog_aboutdialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../aboutdialog/aboutdialog.component */ "HJkq");






let HeaderComponent = class HeaderComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    navigate(url) {
        window.open(url, '_blank');
    }
    openDialog() {
        const dialogRef = this.dialog.open(_aboutdialog_aboutdialog_component__WEBPACK_IMPORTED_MODULE_5__["AboutdialogComponent"]);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "6Omd":
/*!***************************************************************!*\
  !*** ./src/app/components/savedialog/savedialog.component.ts ***!
  \***************************************************************/
/*! exports provided: SavedialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedialogComponent", function() { return SavedialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_savedialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./savedialog.component.html */ "phZf");
/* harmony import */ var _savedialog_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./savedialog.component.css */ "Ak44");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SavedialogComponent = class SavedialogComponent {
    constructor() { }
    ngOnInit() {
    }
};
SavedialogComponent.ctorParameters = () => [];
SavedialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-savedialog',
        template: _raw_loader_savedialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_savedialog_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SavedialogComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n    background-color: #f5f5f5;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59Il19 */");

/***/ }),

/***/ "Ak44":
/*!****************************************************************!*\
  !*** ./src/app/components/savedialog/savedialog.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".m-t-2 {\r\n    margin-top: 1rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmVkaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzYXZlZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubS10LTIge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true
};


/***/ }),

/***/ "DiEx":
/*!********************************************!*\
  !*** ./src/app/qrcode/qrcode.component.ts ***!
  \********************************************/
/*! exports provided: QrcodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrcodeComponent", function() { return QrcodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_qrcode_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./qrcode.component.html */ "lTTE");
/* harmony import */ var _qrcode_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qrcode.component.css */ "v2Cu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_savedialog_savedialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/savedialog/savedialog.component */ "6Omd");







let QrcodeComponent = class QrcodeComponent {
    constructor(fb, dialog) {
        this.fb = fb;
        this.dialog = dialog;
        this.qrcodeSize = 300;
        this.qrcodeText = "Welcome to QRCode Generator enter your text here to convert the text to QRCode..";
        this.useImage = false;
        this.imageUrl = '';
        this.imageForm = this.fb.group({
            imageTextField: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]
        });
    }
    ngOnInit() { }
    ngAfterViewInit() { }
    checkboxChanged(event) {
        if (!event.checked) {
            this.imageUrl = "";
            this.urlOfImage.nativeElement.value = '';
        }
    }
    urlChange(event) {
        this.imageUrl = event.target.value;
    }
    saveQrcode() {
        const dialogRef = this.dialog.open(_components_savedialog_savedialog_component__WEBPACK_IMPORTED_MODULE_6__["SavedialogComponent"]);
    }
};
QrcodeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
QrcodeComponent.propDecorators = {
    urlOfImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['urlOfImage',] }],
    qrcodeCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['canvas', { static: false },] }]
};
QrcodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-qrcode',
        template: _raw_loader_qrcode_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_qrcode_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], QrcodeComponent);



/***/ }),

/***/ "ELPI":
/*!******************************************************************!*\
  !*** ./src/app/components/aboutdialog/aboutdialog.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.inline-text {\r\n    margin: auto;\r\n}\r\n\r\n.icon-inline {\r\n    margin: 0 5px 0 5px;\r\n}\r\n\r\n.text-muted {\r\n    color: gray;\r\n}\r\n\r\n.text-sm {\r\n    font-size: 0.75rem;\r\n}\r\n\r\n.m-t-0 {\r\n    margin-top: 0;\r\n}\r\n\r\n.m-b-0 {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.m-t-4 {\r\n    margin-top: 3rem;\r\n}\r\n\r\n.m-t-3 {\r\n    margin-top: 2rem;\r\n}\r\n\r\n.m-t-2 {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.m-l-1 {\r\n    margin-left: 0.5rem;\r\n}\r\n\r\n.p-1 {\r\n    padding: 0.5rem;\r\n}\r\n\r\n.p-4 {\r\n    padding: 3rem;\r\n}\r\n\r\n.p-4-sm {\r\n    padding: 3rem;\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n    .p-4-sm {\r\n        padding:3rem 0 3rem 0;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0ZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7SUFDekI7QUFDSiIsImZpbGUiOiJhYm91dGRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5pbmxpbmUtdGV4dCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5pY29uLWlubGluZSB7XHJcbiAgICBtYXJnaW46IDAgNXB4IDAgNXB4O1xyXG59XHJcblxyXG4udGV4dC1tdXRlZCB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLnRleHQtc20ge1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG59XHJcblxyXG4ubS10LTAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLm0tYi0wIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5tLXQtNCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG59XHJcblxyXG4ubS10LTMge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLm0tdC0yIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5tLWwtMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG59XHJcblxyXG4ucC0xIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuLnAtNCB7XHJcbiAgICBwYWRkaW5nOiAzcmVtO1xyXG59XHJcblxyXG4ucC00LXNtIHtcclxuICAgIHBhZGRpbmc6IDNyZW07XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICAucC00LXNtIHtcclxuICAgICAgICBwYWRkaW5nOjNyZW0gMCAzcmVtIDA7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "HJkq":
/*!*****************************************************************!*\
  !*** ./src/app/components/aboutdialog/aboutdialog.component.ts ***!
  \*****************************************************************/
/*! exports provided: AboutdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutdialogComponent", function() { return AboutdialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_aboutdialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./aboutdialog.component.html */ "R76H");
/* harmony import */ var _aboutdialog_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutdialog.component.css */ "ELPI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AboutdialogComponent = class AboutdialogComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutdialogComponent.ctorParameters = () => [];
AboutdialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-aboutdialog',
        template: _raw_loader_aboutdialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_aboutdialog_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AboutdialogComponent);



/***/ }),

/***/ "R76H":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/aboutdialog/aboutdialog.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>About</h2>\n<mat-divider></mat-divider>\n<mat-dialog-content class=\"mat-typography\">\n  <div class=\"flex-container m-t-2\">\n    <img src=\"favicon.ico\" alt=\"\" width=\"200\">\n    <div class=\"p-4-sm\">\n        <h2 class=\"mat-title\" class=\"m-b-0 m-t-2\">QRCode Generator</h2>\n        <p class=\"text-muted text-sm m-t-0\">v1.0 Web based</p>\n    </div>\n  </div>\n  <div style=\"display: inline-flex;\" class=\"m-t-3\">\n    <span class=\"inline-text\">Made with</span>\n    <mat-icon class=\"icon-inline\">favorite</mat-icon>\n    <span class=\"inline-text\">By Muhammad Arfan</span>\n  </div>\n  <p class=\"m-t-4 text-muted text-sm\">Copyright © 2021 ArphaInteractive</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>OK</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'qrcodegenerator';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var ng_qrcode__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-qrcode */ "H7zf");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./qrcode/qrcode.component */ "DiEx");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_aboutdialog_aboutdialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/aboutdialog/aboutdialog.component */ "HJkq");
/* harmony import */ var _components_savedialog_savedialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/savedialog/savedialog.component */ "6Omd");
























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_20__["QrcodeComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
            _components_aboutdialog_aboutdialog_component__WEBPACK_IMPORTED_MODULE_22__["AboutdialogComponent"],
            _components_savedialog_savedialog_component__WEBPACK_IMPORTED_MODULE_23__["SavedialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
            ng_qrcode__WEBPACK_IMPORTED_MODULE_18__["QrCodeModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "lTTE":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/qrcode/qrcode.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <mat-card>\n    <div class=\"side-1\">\n      <p class=\"mat-body text-muted\">Preview</p>\n      <qr-code [value]=\"qrcodeText\" errorCorrectionLevel=\"M\" [centerImageSrc]=\"useImage ? imageUrl : ''\"\n        [size]=\"qrcodeSize\" #canvas></qr-code>\n    </div>\n    <div class=\"side-2\">\n      <p class=\"mat-body-strong\">QR Settings</p>\n      <mat-checkbox [(ngModel)]=\"useImage\" color=\"primary\" class=\"m-t-1\" (change)=\"checkboxChanged($event)\">Use Image\n      </mat-checkbox>\n      <form [formGroup]=\"imageForm\">\n        <p class=\"mat-body text-muted m-t-1 m-b-0\">Add an image or logo</p>\n        <mat-form-field appearance=\"standard\" class=\"img-text-field\">\n          <mat-label>Image URL</mat-label>\n          <input matInput formControlName=\"imageTextField\" [readonly]=\"!useImage\" (keyup)=\"urlChange($event)\"\n            #urlOfImage>\n          <mat-error\n            *ngIf=\"imageForm.get('imageTextField').touched && imageForm.get('imageTextField').hasError('required') && useImage\">\n            Url required\n          </mat-error>\n        </mat-form-field>\n      </form>\n      <p>QRCode image size</p>\n      <mat-form-field appearance=\"standard\" class=\"size-box\">\n        <mat-label>Size</mat-label>\n        <input matInput [(ngModel)]=\"qrcodeSize\">\n      </mat-form-field>\n    </div>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Data text</mat-label>\n      <textarea matInput [(ngModel)]=\"qrcodeText\"></textarea>\n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" class=\"w-100\" style=\"height:2.5rem;\" (click)=\"saveQrcode()\">Save</button>\n  </mat-card>\n \n</div>");

/***/ }),

/***/ "phZf":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/savedialog/savedialog.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>How to save?</h2>\n<mat-divider></mat-divider>\n<mat-dialog-content class=\"mat-typography\">\n    <p class=\"m-t-2\">\n        To save QRCode as an image, you just need to right click on the qrcode preview and choose Save image as.\n    </p>\n    <p>\n        You can copy the image too by choosing Copy image on right click\n    </p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>OK</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "sx49":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spacer {\r\n    flex: 1 1 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn0iXX0= */");

/***/ }),

/***/ "v2Cu":
/*!*********************************************!*\
  !*** ./src/app/qrcode/qrcode.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: row;\r\n    height: 100%;\r\n    max-width: 100%;\r\n    padding: 15px;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\nmat-card {\r\n    display:flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    width: 100%;\r\n}\r\n\r\n.img-text-field {\r\n    width: 40rem;\r\n}\r\n\r\n.w-100 {\r\n    width: 100%;\r\n}\r\n\r\n.text-muted {\r\n    color: #95a5a6;\r\n}\r\n\r\n.m-t-1 {\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n.m-t-2 { \r\n    margin-top: 1rem;\r\n}\r\n\r\n.m-b-0 {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.side-1 {\r\n    flex-basis: 30%;\r\n}\r\n\r\n.side-2 {\r\n    flex-basis: 70%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyY29kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJxcmNvZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW1nLXRleHQtZmllbGQge1xyXG4gICAgd2lkdGg6IDQwcmVtO1xyXG59XHJcblxyXG4udy0xMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50ZXh0LW11dGVkIHtcclxuICAgIGNvbG9yOiAjOTVhNWE2O1xyXG59XHJcblxyXG4ubS10LTEge1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG4ubS10LTIgeyBcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5tLWItMCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uc2lkZS0xIHtcclxuICAgIGZsZXgtYmFzaXM6IDMwJTtcclxufVxyXG5cclxuLnNpZGUtMiB7XHJcbiAgICBmbGV4LWJhc2lzOiA3MCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qrcode/qrcode.component */ "DiEx");




const routes = [
    {
        path: '',
        component: _qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_3__["QrcodeComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "yxfS":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <span>QRCode Generator</span>\n  <span class=\"spacer\"></span>\n  <button mat-icon-button matTooltip=\"Visit github repository\">\n    <mat-icon>code</mat-icon>\n  </button>\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n    <mat-icon>more_vert</mat-icon>\n  </button>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item (click)=\"openDialog()\">\n      <mat-icon>info</mat-icon>\n      <span>About</span>\n    </button>\n    <button mat-menu-item (click)=\"navigate('https://arpha01.github.io/donation')\">\n      <mat-icon>local_cafe</mat-icon>\n      <span>Donate</span>\n    </button>\n    <mat-divider></mat-divider>\n    <button mat-menu-item (click)=\"navigate('https://arpha01.github.io/projects/qrcode')\">\n      <mat-icon>file_download</mat-icon>\n      <span>Get desktop version</span>\n    </button>\n  </mat-menu>\n</mat-toolbar>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.ea386f2aa66513021535.js.map