(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+C0J":
/*!*******************************************************!*\
  !*** ./src/app/components/events/events.component.ts ***!
  \*******************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_events_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./events.component.html */ "jgC+");
/* harmony import */ var _events_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.component.css */ "QCE2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/events.service */ "riPR");






let EventsComponent = class EventsComponent {
    constructor(router, eventsService) {
        this.router = router;
        this.eventsService = eventsService;
        this.eventData = '';
        this.eventDate = '';
    }
    ngOnInit() {
        this.getEvents();
    }
    getEvents() {
        this.eventsService.getCurrentEvent().toPromise().then(data => {
            this.eventData = data;
            this.eventDate = new Date(this.eventData.datetime).toLocaleString();
        }, err => {
            console.log(err);
        });
    }
};
EventsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"] }
];
EventsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-events',
        template: _raw_loader_events_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_events_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EventsComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sdoddi/limitlesslives/src/main.ts */"zUnb");


/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n    width: 100%;\n    height: 150vh;\n    background: url(\"https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/sanmateoca/shutterstock_61104537504_8ef67d97-5056-a36a-0b9f5fc892eae781.jpg\")\n      no-repeat;\n    background-size: cover;\n  }\n  \n  .col-md-6 {\n    padding: 50px;\n  }\n  \n  .leftbox .content {\n    color: #fff;\n    background: rgba(0, 0, 0, 0.5);\n    padding: 50px;\n    transition: 0.5s;\n  }\n  \n  .leftbox .content:hover {\n    background: #8A2387;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to right, #F27121, #E94057, #8A2387); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n      }\n  \n  .leftbox .content h1 {\n    margin: 0;\n    padding: 0;\n    font-size: 50px;\n    text-transform: uppercase;\n  }\n  \n  .leftbox .content p {\n    margin: 10px 0 0;\n    padding: 0;\n  }\n  \n  .events {\n    position: relative;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    box-sizing: border-box;\n  }\n  \n  .events .cards {\n    padding: 50px;\n    box-sizing: border-box;\n  }\n  \n  .card {\n    margin: 15px 0px;\n    transition: 1.2s;\n  }\n  \n  .card:hover {\n    transform: scale(1.1);\n  }\n  \n  .card .primarypresentor {\n    height: 250px;\n    background: url(\"https://images.unsplash.com/photo-1560439513-74b037a25d84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80\")\n      no-repeat;\n    background-position: center;\n    background-size: cover;\n  }\n  \n  .card .secondarypresentor {\n    background: url(\"https://images.unsplash.com/photo-1561489413-985b06da5bee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80\")\n      no-repeat;\n    height: 250px;\n    background-position: center;\n    background-size: cover;\n  }\n  \n  .card .actionable {\n    background: url(\"https://images.unsplash.com/photo-1598386651573-9232cc0c2f7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80\")\n      no-repeat;\n    height: 250px;\n    background-position: center;\n    background-size: cover;\n  }\n  \n  .content {\n    font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\n    padding: 1rem;\n  }\n  \n  .title {\n    background: #8A2387;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to right, #F27121, #E94057, #8A2387); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    \n    font-weight: normal;\n    font-size: 1.5rem;\n  }\n  \n  @media (max-width: 991px) {\n    section .leftbox {\n      width: 100%;\n      height: auto;\n      /* float: none; */\n      padding: 20px;\n    }\n  \n    section .leftbox .content {\n      padding: 20px;\n    }\n  \n    section .leftbox .content h1 {\n      font-size: 30px;\n    }\n  \n    section .events {\n      width: 100%;\n      height: auto;\n      background: transparent;\n    }\n  }\n  \n  .historybtn {\n    padding: 10px;\n    background: #8A2387;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to right, #F27121, #E94057, #8A2387); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n        color: white;\n    font-size: 1.3rem;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYjtlQUNXO0lBQ1gsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztFQUNBO0lBQ0UsbUJBQW1CLEdBQUcsOEJBQThCLEdBQ3VCLCtCQUErQjtJQUMxRyxnRUFBZ0UsRUFBRSxxRUFBcUU7TUFDckk7O0VBRUo7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7SUFDZix5QkFBeUI7RUFDM0I7O0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsc0JBQXNCO0VBQ3hCOztFQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2I7ZUFDVztJQUNYLDJCQUEyQjtJQUMzQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRTtlQUNXO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRTtlQUNXO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxtREFBbUQ7SUFDbkQsYUFBYTtFQUNmOztFQUNBO0lBQ0UsbUJBQW1CLEdBQUcsOEJBQThCLEdBQ3VCLCtCQUErQjtJQUMxRyxnRUFBZ0UsRUFBRSxxRUFBcUU7O0lBRXZJLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGFBQWE7SUFDZjs7SUFFQTtNQUNFLGFBQWE7SUFDZjs7SUFFQTtNQUNFLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLHVCQUF1QjtJQUN6QjtFQUNGOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQixHQUFHLDhCQUE4QixHQUN1QiwrQkFBK0I7SUFDMUcsZ0VBQWdFLEVBQUUscUVBQXFFO1FBQ25JLFlBQVk7SUFDaEIsaUJBQWlCO0VBQ25CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUwdmg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9hc3NldHMuc2ltcGxldmlld2luYy5jb20vc2ltcGxldmlldy9pbWFnZS9mZXRjaC9jX2xpbWl0LHFfNzUsd18xMjAwL2h0dHBzOi8vYXNzZXRzLnNpbXBsZXZpZXdpbmMuY29tL3NpbXBsZXZpZXcvaW1hZ2UvdXBsb2FkL2NybS9zYW5tYXRlb2NhL3NodXR0ZXJzdG9ja182MTEwNDUzNzUwNF84ZWY2N2Q5Ny01MDU2LWEzNmEtMGI5ZjVmYzg5MmVhZTc4MS5qcGdcIilcbiAgICAgIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gIFxuICAuY29sLW1kLTYge1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gIH1cbiAgXG4gIC5sZWZ0Ym94IC5jb250ZW50IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG4gIC5sZWZ0Ym94IC5jb250ZW50OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjOEEyMzg3OyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRjI3MTIxLCAjRTk0MDU3LCAjOEEyMzg3KTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRjI3MTIxLCAjRTk0MDU3LCAjOEEyMzg3KTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuICAgICAgfVxuICBcbiAgLmxlZnRib3ggLmNvbnRlbnQgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5sZWZ0Ym94IC5jb250ZW50IHAge1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmV2ZW50cyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICAuZXZlbnRzIC5jYXJkcyB7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIC5jYXJkIHtcbiAgICBtYXJnaW46IDE1cHggMHB4O1xuICAgIHRyYW5zaXRpb246IDEuMnM7XG4gIH1cbiAgXG4gIC5jYXJkOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbiAgXG4gIC5jYXJkIC5wcmltYXJ5cHJlc2VudG9yIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTYwNDM5NTEzLTc0YjAzN2EyNWQ4ND9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTA1MCZxPTgwXCIpXG4gICAgICBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgXG4gIC5jYXJkIC5zZWNvbmRhcnlwcmVzZW50b3Ige1xuICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTYxNDg5NDEzLTk4NWIwNmRhNWJlZT9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTA1MCZxPTgwXCIpXG4gICAgICBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICBcbiAgLmNhcmQgLmFjdGlvbmFibGUge1xuICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTk4Mzg2NjUxNTczLTkyMzJjYzBjMmY3Yz9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTA1MCZxPTgwXCIpXG4gICAgICBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICBcbiAgLmNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb21pYyBTYW5zXCIsIGN1cnNpdmU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICAudGl0bGUge1xuICAgIGJhY2tncm91bmQ6ICM4QTIzODc7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGMjcxMjEsICNFOTQwNTcsICM4QTIzODcpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGMjcxMjEsICNFOTQwNTcsICM4QTIzODcpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gICAgXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgc2VjdGlvbiAubGVmdGJveCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIC8qIGZsb2F0OiBub25lOyAqL1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gIFxuICAgIHNlY3Rpb24gLmxlZnRib3ggLmNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gIFxuICAgIHNlY3Rpb24gLmxlZnRib3ggLmNvbnRlbnQgaDEge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgXG4gICAgc2VjdGlvbiAuZXZlbnRzIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG4gIFxuICAuaGlzdG9yeWJ0biB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjOEEyMzg3OyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRjI3MTIxLCAjRTk0MDU3LCAjOEEyMzg3KTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRjI3MTIxLCAjRTk0MDU3LCAjOEEyMzg3KTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgIl19 */");

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

/***/ "QCE2":
/*!********************************************************!*\
  !*** ./src/app/components/events/events.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  width: 100%;\n  height: 150vh;\n  background: url(\"https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/sanmateoca/shutterstock_61104537504_8ef67d97-5056-a36a-0b9f5fc892eae781.jpg\")\n    no-repeat;\n  background-size: cover;\n}\n\n.col-md-6 {\n  padding: 50px;\n}\n\n.leftbox .content {\n  color: #fff;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 50px;\n  transition: 0.5s;\n}\n\n.leftbox .content:hover {\n  background: #8A2387;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #F27121, #E94057, #8A2387); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  }\n\n.leftbox .content h1 {\n  margin: 0;\n  padding: 0;\n  font-size: 50px;\n  text-transform: uppercase;\n}\n\n.leftbox .content p {\n  margin: 10px 0 0;\n  padding: 0;\n}\n\n.events {\n  position: relative;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  box-sizing: border-box;\n}\n\n.events .cards {\n  padding: 50px;\n  box-sizing: border-box;\n}\n\n.card {\n  margin: 15px 0px;\n  transition: 1.2s;\n}\n\n.card:hover {\n  transform: scale(1.1);\n}\n\n.card .ambica {\n  height: 600px;\n  background: url('ambi.f6d418c71a92d2909b4a.jpeg')\n    no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.card .chandana {\n  height: 400px;\n  background: url('chandana.e28f5e66f8ec07e98f6c.jpeg')\n    no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.card .hima {\n  height: 400px;\n  background: url('hima.e1c592fe93ea231734c1.jpg')\n    no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.card .vyshu {\n  height: 400px;\n  background: url('vyshu.5f12ec70c8727116cb68.jpg')\n    no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.card .sat {\n  height: 500px;\n  background: url('sat.fca8e035b04a0c3d99ce.jpeg')\n    no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.card .sai {\n  height: 400px;\n  background: url('sai.14f6222987368f1815ff.jpeg')\n    no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.card .secondarypresentor {\n  background: url(\"https://images.unsplash.com/photo-1561489413-985b06da5bee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80\")\n    no-repeat;\n  height: 250px;\n  background-position: center;\n  background-size: cover;\n}\n\n.card .secondarypresentor {\n  background: url(\"https://images.unsplash.com/photo-1561489413-985b06da5bee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80\")\n    no-repeat;\n  height: 250px;\n  background-position: center;\n  background-size: cover;\n}\n\n.card .actionable {\n  background: url(\"https://images.unsplash.com/photo-1598386651573-9232cc0c2f7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80\")\n    no-repeat;\n  height: 250px;\n  background-position: center;\n  background-size: cover;\n}\n\n.content {\n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\n  padding: 1rem;\n}\n\n.title {\n  background: #8A2387;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #F27121, #E94057, #8A2387); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    font-weight: normal;\n  font-size: 1.5rem;\n}\n\n@media (max-width: 991px) {\n  section .leftbox {\n    width: 100%;\n    height: auto;\n    /* float: none; */\n    padding: 20px;\n  }\n\n  section .leftbox .content {\n    padding: 20px;\n  }\n\n  section .leftbox .content h1 {\n    font-size: 30px;\n  }\n\n  section .events {\n    width: 100%;\n    height: auto;\n    background: transparent;\n  }\n}\n\n.historybtn {\n  padding: 10px;\n  background: #8A2387;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #F27121, #E94057, #8A2387); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    color: white;\n  font-size: 1.3rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYjthQUNXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsbUJBQW1CLEdBQUcsOEJBQThCLEdBQ3VCLCtCQUErQjtFQUMxRyxnRUFBZ0UsRUFBRSxxRUFBcUU7RUFDdkk7O0FBRUY7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2I7YUFDVztFQUNYLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2I7YUFDVztFQUNYLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2I7YUFDVztFQUNYLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2I7YUFDVztFQUNYLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2I7YUFDVztFQUNYLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2I7YUFDVztFQUNYLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTthQUNXO0VBQ1gsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRTthQUNXO0VBQ1gsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTthQUNXO0VBQ1gsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtREFBbUQ7RUFDbkQsYUFBYTtBQUNmOztBQUNBO0VBQ0UsbUJBQW1CLEdBQUcsOEJBQThCLEdBQ3VCLCtCQUErQjtFQUMxRyxnRUFBZ0UsRUFBRSxxRUFBcUU7SUFDckksbUJBQW1CO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CLEdBQUcsOEJBQThCLEdBQ3VCLCtCQUErQjtFQUMxRyxnRUFBZ0UsRUFBRSxxRUFBcUU7SUFDckksWUFBWTtFQUNkLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJldmVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwdmg7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vYXNzZXRzLnNpbXBsZXZpZXdpbmMuY29tL3NpbXBsZXZpZXcvaW1hZ2UvZmV0Y2gvY19saW1pdCxxXzc1LHdfMTIwMC9odHRwczovL2Fzc2V0cy5zaW1wbGV2aWV3aW5jLmNvbS9zaW1wbGV2aWV3L2ltYWdlL3VwbG9hZC9jcm0vc2FubWF0ZW9jYS9zaHV0dGVyc3RvY2tfNjExMDQ1Mzc1MDRfOGVmNjdkOTctNTA1Ni1hMzZhLTBiOWY1ZmM4OTJlYWU3ODEuanBnXCIpXG4gICAgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY29sLW1kLTYge1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG4ubGVmdGJveCAuY29udGVudCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4ubGVmdGJveCAuY29udGVudDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM4QTIzODc7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRjI3MTIxLCAjRTk0MDU3LCAjOEEyMzg3KTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0YyNzEyMSwgI0U5NDA1NywgIzhBMjM4Nyk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgfVxuXG4ubGVmdGJveCAuY29udGVudCBoMSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmxlZnRib3ggLmNvbnRlbnQgcCB7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5ldmVudHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmV2ZW50cyAuY2FyZHMge1xuICBwYWRkaW5nOiA1MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmNhcmQge1xuICBtYXJnaW46IDE1cHggMHB4O1xuICB0cmFuc2l0aW9uOiAxLjJzO1xufVxuXG4uY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmNhcmQgLmFtYmljYSB7XG4gIGhlaWdodDogNjAwcHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9hbWJpLmpwZWdcIilcbiAgICBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNhcmQgLmNoYW5kYW5hIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2NoYW5kYW5hLmpwZWdcIilcbiAgICBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5jYXJkIC5oaW1hIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2hpbWEuanBnXCIpXG4gICAgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY2FyZCAudnlzaHUge1xuICBoZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvdnlzaHUuanBnXCIpXG4gICAgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY2FyZCAuc2F0IHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3NhdC5qcGVnXCIpXG4gICAgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY2FyZCAuc2FpIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3NhaS5qcGVnXCIpXG4gICAgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jYXJkIC5zZWNvbmRhcnlwcmVzZW50b3Ige1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU2MTQ4OTQxMy05ODViMDZkYTViZWU/aXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEwNTAmcT04MFwiKVxuICAgIG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmNhcmQgLnNlY29uZGFyeXByZXNlbnRvciB7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTYxNDg5NDEzLTk4NWIwNmRhNWJlZT9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTA1MCZxPTgwXCIpXG4gICAgbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jYXJkIC5hY3Rpb25hYmxlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTgzODY2NTE1NzMtOTIzMmNjMGMyZjdjP2l4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDUwJnE9ODBcIilcbiAgICBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsIFwiQ29taWMgU2Fuc1wiLCBjdXJzaXZlO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLnRpdGxlIHtcbiAgYmFja2dyb3VuZDogIzhBMjM4NzsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGMjcxMjEsICNFOTQwNTcsICM4QTIzODcpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRjI3MTIxLCAjRTk0MDU3LCAjOEEyMzg3KTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgc2VjdGlvbiAubGVmdGJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIC8qIGZsb2F0OiBub25lOyAqL1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuICBzZWN0aW9uIC5sZWZ0Ym94IC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgc2VjdGlvbiAubGVmdGJveCAuY29udGVudCBoMSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG5cbiAgc2VjdGlvbiAuZXZlbnRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuLmhpc3RvcnlidG4ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjOEEyMzg3OyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0YyNzEyMSwgI0U5NDA1NywgIzhBMjM4Nyk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGMjcxMjEsICNFOTQwNTcsICM4QTIzODcpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gICAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbiJdfQ== */");

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
        this.title = 'events';
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
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

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
/* harmony import */ var _components_events_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/events/events.component */ "+C0J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_previous_events_previous_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/previous-events/previous-events.component */ "cq1a");









let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_events_events_component__WEBPACK_IMPORTED_MODULE_5__["EventsComponent"],
            _components_previous_events_previous_events_component__WEBPACK_IMPORTED_MODULE_8__["PreviousEventsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "cq1a":
/*!*************************************************************************!*\
  !*** ./src/app/components/previous-events/previous-events.component.ts ***!
  \*************************************************************************/
/*! exports provided: PreviousEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousEventsComponent", function() { return PreviousEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_previous_events_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./previous-events.component.html */ "zGRK");
/* harmony import */ var _previous_events_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./previous-events.component.css */ "uKHC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/events.service */ "riPR");





let PreviousEventsComponent = class PreviousEventsComponent {
    constructor(eventService) {
        this.eventService = eventService;
        this.eventsData = '';
    }
    ngOnInit() {
        this.getEvents();
    }
    getEvents() {
        this.eventService.getEvents().toPromise().then(data => {
            this.eventsData = data;
            console.log(data);
        }).catch(err => {
            console.log(err);
        });
    }
    returnTimestamp(timestamp) {
        return new Date(timestamp).toLocaleString();
    }
};
PreviousEventsComponent.ctorParameters = () => [
    { type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"] }
];
PreviousEventsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-previous-events',
        template: _raw_loader_previous_events_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_previous_events_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PreviousEventsComponent);



/***/ }),

/***/ "jgC+":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/events/events.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"leftbox\">\n        <div class=\"content\">\n          <h1>Tech Club</h1>\n          <p>Next Batch Date : &nbsp;<span style=\"font-size: 1.3rem;\"><b>Stay Tuned..</b></span> </p>\n        </div>\n\n        <br>\n        <button [routerLink]=\"['/previous-events']\" class=\"btn btn-block historybtn\" disabled>Registrations Closed</button>\n\n\n      </div>\n    </div>\n\n    <div class=\"col-md-5\">\n      <div class=\"events\">\n\n        <div class=\"cards\" *ngIf=\"eventData\">\n          <div class=\"card\">\n            <div class=\"row\">\n              <div class=\"col-md-4 chandana\">\n              </div>\n              <div class=\"col-md-8 content\">\n                <h2 class=\"title\">Flutter</h2>\n                <div class=\"details\">\n                  <p>Mentor : <b>Chandana Neeerukonda</b> </p>\n                  <p>Mentees :</p>\n                  <p>1. Manaswi</p>\n                  <p>2. Vasantha</p>\n                  <p>3. Teja</p>\n                  <p>4. Sagarika</p>\n                  <p>5. Varshini</p>\n                  <p>6. Rahita</p>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- 2 1-->\n          <div class=\"card\">\n            <div class=\"row\">\n              <div class=\"col-md-4 vyshu\">\n              </div>\n              <div class=\"col-md-8 content\">\n                <h2 class=\"title\">Backend</h2>\n                <div class=\"details\">\n                  <p>Mentor : <b>Vyshnavi Jujjuru</b> </p>\n                  <p>Mentees :</p>\n                  <p>1. Sarika</p>\n                  <p>2. Jessica</p>\n                  <p>3. Chandana</p>\n                  <p>4. Manasa</p>\n                  <p>5. Lavanya</p>\n                  <p>6. Koushika</p>\n                  <p>7. Akhila</p>\n\n                </div>\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"card\">\n            <div class=\"row\">\n              <div class=\"col-md-4 sai\">\n              </div>\n              <div class=\"col-md-8 content\">\n                <h2 class=\"title\">AWS</h2>\n                <div class=\"details\">\n                  <p>Mentor : <b>Sai Sri Medepudi</b> </p>\n                  <p>Mentees :</p>\n                  <p>1.Pujitha</p>\n                  <p>2.Charitha</p>\n                  <p>3.Pavani</p>\n                  <p>4.Sai Sindhu</p>\n                  <p>5.Taruna</p>\n                  <p>6.Yasaswini</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"row\">\n              <div class=\"col-md-4 hima\">\n              </div>\n              <div class=\"col-md-8 content\">\n                <h2 class=\"title\">Angular</h2>\n                <div class=\"details\">\n                  <p>Mentor : <b>Hima</b> </p>\n                  <p>Mentees :</p>\n                  <p>1. Keerthi Sowjanya</p>\n                  <p>2. Ekantha</p>\n                  <p>3. K.vasavi</p>\n                  <p>4. Ashritha\n                  </p>\n                  <p>5. Veekshitha</p>\n                  <p>6. Geetika</p>\n\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"row\">\n              <div class=\"col-md-4 ambica\">\n              </div>\n              <div class=\"col-md-8 content\">\n                <h2 class=\"title\">Azure</h2>\n                <div class=\"details\">\n                  <p>Mentor : <b>Ambica Nandigam</b> </p>\n                  <p>Mentees :</p>\n                  <p>1. K.Sravya</p>\n                  <p>2.T.Swathi Ratnam</p>\n                  <p>3.K.Naga Devi </p>\n                  <p>4.M.Priyanka\n                  </p>\n                  <p>5.B.Chinmayee</p>\n                  <p>6.O.Jahnavi</p>\n                  <p>7.O.M.Aishwarya\n                  </p>\n                  <p>8.O.M.Vyshnavi</p>\n                  <p>9.Alekya</p>\n\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"row\">\n              <div class=\"col-md-4 sat\">\n              </div>\n              <div class=\"col-md-8 content\">\n                <h2 class=\"title\">React</h2>\n                <div class=\"details\">\n                  <p>Mentor : <b>Satwika</b> </p>\n                  <p>Mentees :</p>\n                  <p>1. Tanuja</p>\n                  <p>2. Ambica</p>\n                  <p>3. Monica</p>\n                  <p>4. Sahithi</p>\n                  <p>5. Radhika</p>\n                  <p>6. Harshitha</p>\n                  <p>7. Annapurna</p>\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>");

/***/ }),

/***/ "riPR":
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let EventsService = class EventsService {
    constructor(http) {
        this.http = http;
    }
    getEvents() {
        return this.http.get('./assets/json/events.json');
    }
    getCurrentEvent() {
        return this.http.get('./assets/json/currentevent.json');
    }
};
EventsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
EventsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], EventsService);



/***/ }),

/***/ "uKHC":
/*!**************************************************************************!*\
  !*** ./src/app/components/previous-events/previous-events.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  width: 100%;\n  height: 100%;\n  background: url(\"https://images.unsplash.com/photo-1486591978090-58e619d37fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80\")\n    no-repeat;\n  background-size: cover;\n}\n.content {\n  background: rgba(0, 0, 0, 0.3);\n  padding: 3rem;\n}\n.maincard {\n  background: rgba(255, 255, 255, 0.2);\n}\n.card-body {\n  transition: 0.3s;\n  background: rgba(0, 0, 0, 0.1);\n  font-size: 1rem;\n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\n}\n.card-footer {\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  text-align: center;\n  padding: 2rem;\n  font-size: 1.3rem;\n}\nbutton {\n  position: fixed;\n  right: 50px;\n  top: 30px;\n  background: #e91363;\n  color: white;\n  font-size: 1.3rem;\n  width: 25%;\n  z-index: 100;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXZpb3VzLWV2ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWjthQUNXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmO0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLG1EQUFtRDtBQUNyRDtBQUlBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7QUFDZCIsImZpbGUiOiJwcmV2aW91cy1ldmVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0ODY1OTE5NzgwOTAtNThlNjE5ZDM3ZmU3P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDUwJnE9ODBcIilcbiAgICBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogM3JlbTtcbn1cblxuLm1haW5jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb21pYyBTYW5zXCIsIGN1cnNpdmU7XG59XG5cblxuXG4uY2FyZC1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogNTBweDtcbiAgdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZTkxMzYzO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB3aWR0aDogMjUlO1xuICB6LWluZGV4OiAxMDA7XG59XG4iXX0= */");

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
/* harmony import */ var _components_events_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/events/events.component */ "+C0J");
/* harmony import */ var _components_previous_events_previous_events_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/previous-events/previous-events.component */ "cq1a");





const routes = [
    { path: '', component: _components_events_events_component__WEBPACK_IMPORTED_MODULE_3__["EventsComponent"] },
    { path: 'previous-events', component: _components_previous_events_previous_events_component__WEBPACK_IMPORTED_MODULE_4__["PreviousEventsComponent"] }
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

/***/ "zGRK":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/previous-events/previous-events.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body\">\n  <button [routerLink]=\"['/']\" class=\"btn  historybtn\">Current Event</button>\n  <div class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\" *ngFor=\"let event of eventsData\">\n        <div class=\"card mt-5 maincard\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"card\">\n                <img class=\"card-img-top\"\n                  src=\"https://images.unsplash.com/photo-1560439513-74b037a25d84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80\"\n                  alt=\"Card image\" style=\"width:100%\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Primary Presenter</h4>\n                  <div class=\"details\">\n                    <p>Name : <b> {{event.primPres.name}} </b> </p>\n                    <p>Topic : <b> {{event.primPres.topic}} </b> </p>\n                    <p>Duration : <b>{{event.primPres.duration}}</b></p>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n            <div class=\"col-md-3\">\n              <!-- sec 1 -->\n              <div class=\"card\">\n                <img class=\"card-img-top\"\n                  src=\"https://images.unsplash.com/photo-1561489413-985b06da5bee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80\"\n                  alt=\"Card image\" style=\"width:100%\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">5 Min Presenter 1</h4>\n                  <div class=\"details\">\n                    <p>Name : <b> {{event.secondPres_1.name}} </b> </p>\n                    <p>Topic : <b> {{event.secondPres_1.topic}} </b> </p>\n                    <p>Duration : <b>{{event.secondPres_1.duration}}</b></p>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n\n              <!-- sec 2 -->\n              <div class=\"card\">\n                <img class=\"card-img-top\"\n                  src=\"https://images.unsplash.com/photo-1561489413-985b06da5bee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80\"\n                  alt=\"Card image\" style=\"width:100%\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">5 Min Presenter 2</h4>\n                  <div class=\"details\">\n                    <p>Name : <b> {{event.secondPres_2.name}} </b> </p>\n                    <p>Topic : <b> {{event.secondPres_2.topic}} </b> </p>\n                    <p>Duration : <b>{{event.secondPres_2.duration}}</b></p>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <!-- actobalie -->\n              <div class=\"card\">\n                <img class=\"card-img-top\"\n                  src=\"https://images.unsplash.com/photo-1598386651573-9232cc0c2f7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80\"\n                  alt=\"Card image\" style=\"width:100%\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Actionable</h4>\n                  <div class=\"details\">\n                    <p>Name : <b> {{event.actionable.name}} </b> </p>\n                    <p>Topic : <b> {{event.actionable.topic}} </b> </p>\n                    <p>Duration : <b>{{event.actionable.duration}}</b></p>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"card-footer\">\n            <p>Event Date : &nbsp;<span style=\"font-size: 1.3rem;\"><b>{{returnTimestamp(event.datetime)}}</b></span>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n");

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
//# sourceMappingURL=main-es2017.ce954b17777615ed18ba.js.map