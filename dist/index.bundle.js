"use strict";
(self["webpackChunkgit_ready_todo_list"] = self["webpackChunkgit_ready_todo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Reset default browser styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter";
}

.no-transition * {
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -ms-transition: none !important;
    -o-transition: none !important;
    transition: none !important;
}

/* Make html and body take up the full height */
html,
body {
    height: 100%;
    width: 100%;
}

/* Use flexbox on the body to center content */
body {
    display: flex;
    flex-direction: column;
}

button,
input[type="submit"],
input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}


.main-header {
    display: flex;
    align-items: center;
    background: #00145B;
    height: 10%;
    width: 100%;

    padding: 20px 37px;
    font-size: 2.25rem;
}

header>.title {
    color: #FFFFFF;
    font-weight: 700;
}

nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 17.5%;
    height: 100%;
    min-width: 336px;
    border-right: 2px solid #EBEBEB;
}

.main-container {
    height: 100%;
    display: flex;
}

.task-buttons-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 37%;
    width: 100%;
    gap: 34px;
    padding: 0 43px;
}

.task-button {
    display: flex;
    flex-direction: row-reverse;
    justify-content: start;
    align-items: center;
    background: #F4F4F4;
    border-radius: 19px;
    padding: 11.5px 22.5px;
    width: 100%;
    gap: 13.5px;
    transition: 0.15s;
}

.task-button:hover {
    background: #1444EE;
    color: #FFFFFF;
}

.task-button-name {
    font-size: 1.5rem;
    font-weight: 600;
    color: #585858;
}

.task-button:hover .inbox {
    filter: invert(100%) sepia(1%) saturate(2%) hue-rotate(148deg) brightness(104%) contrast(100%);

}

.task-button:hover .today {
    filter: invert(100%) sepia(1%) saturate(2%) hue-rotate(148deg) brightness(104%) contrast(100%);

}

.task-button:hover .this-week {
    filter: invert(100%) sepia(1%) saturate(2%) hue-rotate(148deg) brightness(104%) contrast(100%);

}

.task-button:hover .add-project {
    filter: invert(100%) sepia(1%) saturate(2%) hue-rotate(148deg) brightness(104%) contrast(100%);

}

.task-button:hover .task-button-name {
    color: #ffffff;
}

.inbox {
    width: 40px;
    height: 40px;
    /* background: url('./inbox.png'); */
}

.today {
    width: 40px;
    height: 40px;
    /* background: url('./calendar-today.png'); */
}

.this-week {
    width: 40px;
    height: 40px;
    /* background: url('./calendar-today.png'); */
}

.project-container {
    display: flex;
    flex-direction: column;
    height: 63%;
    justify-content: start;
    gap: 31px;
}

.project-container-header {
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding: 0 26px;
}

.project-container-header>.title {
    display: flex;
    font-weight: 700;
    color: #00145B;
    font-size: 1.75rem;
}

.project-container-header>.divider {
    background: #000000;
    padding: 2px;
}

.projects {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.add-project,
.add-task-img {
    width: 40px;
    height: 40px;
    /* background: url('./plus-box.png'); */
}

.button-container {
    display: flex;
    justify-content: center;
    padding: 0 43px;
}

.project-tabs-container {
    display: flex;
    flex-direction: column;
    padding: 0 41px;
    gap: 12px;
}

#project_tab {
    display: flex;
    align-items: center;
    background: #00145B;
    padding: 10px 19.5px;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 1.25rem;
    transition: 0.15s;
}

#project_tab:hover {
    background: #0998FF;
    transition: 0.15s;
}

.project-task-container {
    display: flex;
    flex-direction: column;
    padding: 67px 340px;
    width: 100%;
    transition: 0.150s;
}

.add-task-button-container {
    justify-content: start;
}

.add-task {
    display: flex;
    width: auto;
    background: #00145B;
    color: #FFFFFF;
    padding: 10px 16.5px;
    gap: 18px;
    justify-content: start;
    margin-top: 21px;
    margin-bottom: 10px;
    transition: 0.15s;
}

.add-task:hover {
    background: #1444EE;
}

.add-task-text {
    color: #FFFFFF;
}

.project-task-header-container {
    display: flex;
    flex-direction: column;

}

.project-task-header-container>.title {
    font-size: 3rem;
    color: #00145B;
    font-weight: 600;
}

.project-task-header-container>.divider {
    padding: 2px;
    background: #000000;
}

.project-task-header-container>.description {
    font-size: 0.8125rem;
    color: #808080;
    font-weight: 600;
    padding: 8px 0 0 0;
}

.add-task-button-container>.divider {
    padding: 1px;
    background: #B7B7B7;
}

.project-tasks-area {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #F8F8F8;
    border: #D2D2D2 solid 1px;
    padding: 23px 17px;
    border-radius: 23px;
    transition: 0.15s;
}

.task>.left-side {
    display: flex;
    align-items: center;
    gap: 57px;
}

.task>.right-side {
    display: flex;
    align-items: center;
    gap: 20px;
}

.task>.right-side>.option-container {
    display: flex;
    align-items: center;
    gap: 8px;
}

.task>.right-side>.option-container>button {
    display: flex;
    align-items: center;
    height: 27.8px;
    width: 27.8px;
}

.task>.right-side>.option-container>button>img {
    display: flex;
    height: 27.8px;
    width: 27.8px;
}

.task>.left-side>.checkMark {
    display: flex;
    border-radius: 100px;
    width: 31px;
    height: 31px;
    justify-content: center;
    align-items: center;
    transition: 0.15s;
}

.task>.left-side>.checkMark>img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    transition: 0.15s;
}

.easy {
    border: #14FF00 solid 3px;
}

.medium {
    border: #FF6B00 solid 3px;
}

.hard {
    border: #FF0000 solid 3px;
}

.easy-complete {
    background: #6DFF60;
}

.medium-complete {
    background: #FF862E;
}

.hard-complete {
    background: #FE3030;
}

.task>.left-side>.name {
    display: flex;
    color: #232323;
    font-size: 1.5rem;
    font-weight: 600;
}

.task>.right-side>.due-date {
    display: flex;
    color: #232323;
    font-size: 1.25rem;
    font-weight: 600;
}

#task_option_1,
#task_option_2,
#task_option_3 {
    filter: none;
}

#task_option_1:hover,
#task_option_2:hover,
#task_option_3:hover {
    filter: invert(50%) sepia(98%) saturate(7000%) hue-rotate(180deg) brightness(150%);
}

#add_project_modal,
#add_task_modal,
#info_task_modal,
#edit_task_modal {
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
    transition: 0.15s;
}

#add_project_modal>.modal-container {
    display: flex;
    width: 521.66px;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
}

.invalid {
    border: #FF8E8E solid 2px;
}

.add-project-nav,
.add-task-nav,
.info-task-nav,
.edit-task-nav {
    display: flex;
    justify-content: space-between;
    background: #00145B;
    padding: 12px 18px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.heading-container {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 17.25px;
}

.heading-container>img {
    width: 61.21px;
    height: 61.21px;
}

.heading-container>header {
    color: #FFFFFF;
    font-size: 2rem;
    font-weight: 600;
}

#add_project_close_button,
#add_task_close_button,
#info_task_close_button,
#edit_task_close_button {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.15s;

}

#add_project_close_button:hover,
#add_task_close_button:hover,
#info_task_close_button:hover,
#edit_task_close_button:hover {
    filter: brightness(0) saturate(100%) invert(33%) sepia(90%) saturate(600%) hue-rotate(200deg);
    transition: 0.15s;
}



#add_project_close_button>img,
#add_task_close_button>img,
#info_task_close_button>img,
#edit_task_close_button>img {
    width: 42.17px;
    height: 42.17px;
}

fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    gap: 5px;
}

.modal-container>form {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 36px 54px;
    gap: 18px;
}

.modal-container>form>fieldset>.field {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.modal-container>form>fieldset>.field>label,
.modal-container>form>fieldset>.bottom-row>.field>label {
    display: flex;
    color: #5B5B5B;
    font-weight: 600;
    font-size: 1rem;
    gap: 10px;
}

.modal-container>form>fieldset>.field>label>span,
.modal-container>form>fieldset>.bottom-row>.field>label>span {
    display: flex;
    color: #FF0000;
    font-weight: 600;
    font-size: 1rem;
}

.modal-container>form>fieldset>.field>input,
.modal-container>form>fieldset>.field>textarea {
    display: flex;
    border: #DCDCDC solid 2px;
    padding: 15px 19px;
    background: #F8F8F8;
    font-weight: 600;
    color: #5B5B5B;
    font-size: 1rem;
    resize: none;
    border-radius: 10px;
}

#add_project_button_save,
#add_task_button_save,
#edit_task_button_save {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 113px;
    background: #00145B;
    border-radius: 13px;
    transition: 0.15s;
}

#add_project_button_save:hover,
#add_task_button_save:hover,
#edit_task_button_save:hover {
    background: #1444EE;
    transition: 0.15s;
}

#add_project_button_save>img,
#add_task_button_save>img,
#edit_task_button_save>img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45.96px;
    height: 45.96px;
}

.modal-container>form>fieldset>.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

#add_task_modal>.modal-container,
#info_task_modal>.modal-container,
#edit_task_modal>.modal-container {
    display: flex;
    width: 521.66px;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
}

#add_task_modal>.modal-container>fieldset>.bottom-row,
#info_task_modal>.modal-container>form>fieldset>.bottom-row,
#edit_task_modal>.modal-container>form>fieldset>.bottom-row {
    display: flex;
    justify-content: space-between;
}

.half {
    padding: 11px 17px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 10px;
    border: #DCDCDC solid 2px;
    width: 100%;
    color: #5B5B5B;
}

.bottom-row {
    display: flex;
    gap: 6px;
}

.bottom-row>.field {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
}

#add_task_button_save,
#edit_task_button_save {
    margin-top: 50px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* Reset default browser styles */\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"Inter\";\r\n}\r\n\r\n.no-transition * {\r\n    -webkit-transition: none !important;\r\n    -moz-transition: none !important;\r\n    -ms-transition: none !important;\r\n    -o-transition: none !important;\r\n    transition: none !important;\r\n}\r\n\r\n/* Make html and body take up the full height */\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n/* Use flexbox on the body to center content */\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nbutton,\r\ninput[type=\"submit\"],\r\ninput[type=\"reset\"] {\r\n    background: none;\r\n    color: inherit;\r\n    border: none;\r\n    padding: 0;\r\n    font: inherit;\r\n    cursor: pointer;\r\n    outline: inherit;\r\n}\r\n\r\n\r\n.main-header {\r\n    display: flex;\r\n    align-items: center;\r\n    background: #00145B;\r\n    height: 10%;\r\n    width: 100%;\r\n\r\n    padding: 20px 37px;\r\n    font-size: 2.25rem;\r\n}\r\n\r\nheader>.title {\r\n    color: #FFFFFF;\r\n    font-weight: 700;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    width: 17.5%;\r\n    height: 100%;\r\n    min-width: 336px;\r\n    border-right: 2px solid #EBEBEB;\r\n}\r\n\r\n.main-container {\r\n    height: 100%;\r\n    display: flex;\r\n}\r\n\r\n.task-buttons-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 37%;\r\n    width: 100%;\r\n    gap: 34px;\r\n    padding: 0 43px;\r\n}\r\n\r\n.task-button {\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    justify-content: start;\r\n    align-items: center;\r\n    background: #F4F4F4;\r\n    border-radius: 19px;\r\n    padding: 11.5px 22.5px;\r\n    width: 100%;\r\n    gap: 13.5px;\r\n    transition: 0.15s;\r\n}\r\n\r\n.task-button:hover {\r\n    background: #1444EE;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.task-button-name {\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n    color: #585858;\r\n}\r\n\r\n.task-button:hover .inbox {\r\n    filter: invert(100%) sepia(1%) saturate(2%) hue-rotate(148deg) brightness(104%) contrast(100%);\r\n\r\n}\r\n\r\n.task-button:hover .today {\r\n    filter: invert(100%) sepia(1%) saturate(2%) hue-rotate(148deg) brightness(104%) contrast(100%);\r\n\r\n}\r\n\r\n.task-button:hover .this-week {\r\n    filter: invert(100%) sepia(1%) saturate(2%) hue-rotate(148deg) brightness(104%) contrast(100%);\r\n\r\n}\r\n\r\n.task-button:hover .add-project {\r\n    filter: invert(100%) sepia(1%) saturate(2%) hue-rotate(148deg) brightness(104%) contrast(100%);\r\n\r\n}\r\n\r\n.task-button:hover .task-button-name {\r\n    color: #ffffff;\r\n}\r\n\r\n.inbox {\r\n    width: 40px;\r\n    height: 40px;\r\n    /* background: url('./inbox.png'); */\r\n}\r\n\r\n.today {\r\n    width: 40px;\r\n    height: 40px;\r\n    /* background: url('./calendar-today.png'); */\r\n}\r\n\r\n.this-week {\r\n    width: 40px;\r\n    height: 40px;\r\n    /* background: url('./calendar-today.png'); */\r\n}\r\n\r\n.project-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 63%;\r\n    justify-content: start;\r\n    gap: 31px;\r\n}\r\n\r\n.project-container-header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 7px;\r\n    padding: 0 26px;\r\n}\r\n\r\n.project-container-header>.title {\r\n    display: flex;\r\n    font-weight: 700;\r\n    color: #00145B;\r\n    font-size: 1.75rem;\r\n}\r\n\r\n.project-container-header>.divider {\r\n    background: #000000;\r\n    padding: 2px;\r\n}\r\n\r\n.projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.add-project,\r\n.add-task-img {\r\n    width: 40px;\r\n    height: 40px;\r\n    /* background: url('./plus-box.png'); */\r\n}\r\n\r\n.button-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 0 43px;\r\n}\r\n\r\n.project-tabs-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0 41px;\r\n    gap: 12px;\r\n}\r\n\r\n#project_tab {\r\n    display: flex;\r\n    align-items: center;\r\n    background: #00145B;\r\n    padding: 10px 19.5px;\r\n    color: #FFFFFF;\r\n    font-weight: 600;\r\n    font-size: 1.25rem;\r\n    transition: 0.15s;\r\n}\r\n\r\n#project_tab:hover {\r\n    background: #0998FF;\r\n    transition: 0.15s;\r\n}\r\n\r\n.project-task-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 67px 340px;\r\n    width: 100%;\r\n    transition: 0.150s;\r\n}\r\n\r\n.add-task-button-container {\r\n    justify-content: start;\r\n}\r\n\r\n.add-task {\r\n    display: flex;\r\n    width: auto;\r\n    background: #00145B;\r\n    color: #FFFFFF;\r\n    padding: 10px 16.5px;\r\n    gap: 18px;\r\n    justify-content: start;\r\n    margin-top: 21px;\r\n    margin-bottom: 10px;\r\n    transition: 0.15s;\r\n}\r\n\r\n.add-task:hover {\r\n    background: #1444EE;\r\n}\r\n\r\n.add-task-text {\r\n    color: #FFFFFF;\r\n}\r\n\r\n.project-task-header-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n.project-task-header-container>.title {\r\n    font-size: 3rem;\r\n    color: #00145B;\r\n    font-weight: 600;\r\n}\r\n\r\n.project-task-header-container>.divider {\r\n    padding: 2px;\r\n    background: #000000;\r\n}\r\n\r\n.project-task-header-container>.description {\r\n    font-size: 0.8125rem;\r\n    color: #808080;\r\n    font-weight: 600;\r\n    padding: 8px 0 0 0;\r\n}\r\n\r\n.add-task-button-container>.divider {\r\n    padding: 1px;\r\n    background: #B7B7B7;\r\n}\r\n\r\n.project-tasks-area {\r\n    margin-top: 12px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n}\r\n\r\n.task {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background: #F8F8F8;\r\n    border: #D2D2D2 solid 1px;\r\n    padding: 23px 17px;\r\n    border-radius: 23px;\r\n    transition: 0.15s;\r\n}\r\n\r\n.task>.left-side {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 57px;\r\n}\r\n\r\n.task>.right-side {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n\r\n.task>.right-side>.option-container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\n.task>.right-side>.option-container>button {\r\n    display: flex;\r\n    align-items: center;\r\n    height: 27.8px;\r\n    width: 27.8px;\r\n}\r\n\r\n.task>.right-side>.option-container>button>img {\r\n    display: flex;\r\n    height: 27.8px;\r\n    width: 27.8px;\r\n}\r\n\r\n.task>.left-side>.checkMark {\r\n    display: flex;\r\n    border-radius: 100px;\r\n    width: 31px;\r\n    height: 31px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: 0.15s;\r\n}\r\n\r\n.task>.left-side>.checkMark>img {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 22px;\r\n    height: 22px;\r\n    transition: 0.15s;\r\n}\r\n\r\n.easy {\r\n    border: #14FF00 solid 3px;\r\n}\r\n\r\n.medium {\r\n    border: #FF6B00 solid 3px;\r\n}\r\n\r\n.hard {\r\n    border: #FF0000 solid 3px;\r\n}\r\n\r\n.easy-complete {\r\n    background: #6DFF60;\r\n}\r\n\r\n.medium-complete {\r\n    background: #FF862E;\r\n}\r\n\r\n.hard-complete {\r\n    background: #FE3030;\r\n}\r\n\r\n.task>.left-side>.name {\r\n    display: flex;\r\n    color: #232323;\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.task>.right-side>.due-date {\r\n    display: flex;\r\n    color: #232323;\r\n    font-size: 1.25rem;\r\n    font-weight: 600;\r\n}\r\n\r\n#task_option_1,\r\n#task_option_2,\r\n#task_option_3 {\r\n    filter: none;\r\n}\r\n\r\n#task_option_1:hover,\r\n#task_option_2:hover,\r\n#task_option_3:hover {\r\n    filter: invert(50%) sepia(98%) saturate(7000%) hue-rotate(180deg) brightness(150%);\r\n}\r\n\r\n#add_project_modal,\r\n#add_task_modal,\r\n#info_task_modal,\r\n#edit_task_modal {\r\n    /* Hidden by default */\r\n    position: fixed;\r\n    /* Stay in place */\r\n    z-index: 1;\r\n    /* Sit on top */\r\n    width: 100%;\r\n    /* Full width */\r\n    height: 100%;\r\n    /* Full height */\r\n    overflow: auto;\r\n    /* Enable scroll if needed */\r\n    background-color: rgb(0, 0, 0);\r\n    /* Fallback color */\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    /* Black w/ opacity */\r\n    transition: 0.15s;\r\n}\r\n\r\n#add_project_modal>.modal-container {\r\n    display: flex;\r\n    width: 521.66px;\r\n    flex-direction: column;\r\n    background: #FFFFFF;\r\n    border-radius: 10px;\r\n    top: 50%;\r\n    left: 50%;\r\n    position: fixed;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.invalid {\r\n    border: #FF8E8E solid 2px;\r\n}\r\n\r\n.add-project-nav,\r\n.add-task-nav,\r\n.info-task-nav,\r\n.edit-task-nav {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background: #00145B;\r\n    padding: 12px 18px;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.heading-container {\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    align-items: center;\r\n    gap: 17.25px;\r\n}\r\n\r\n.heading-container>img {\r\n    width: 61.21px;\r\n    height: 61.21px;\r\n}\r\n\r\n.heading-container>header {\r\n    color: #FFFFFF;\r\n    font-size: 2rem;\r\n    font-weight: 600;\r\n}\r\n\r\n#add_project_close_button,\r\n#add_task_close_button,\r\n#info_task_close_button,\r\n#edit_task_close_button {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: 0.15s;\r\n\r\n}\r\n\r\n#add_project_close_button:hover,\r\n#add_task_close_button:hover,\r\n#info_task_close_button:hover,\r\n#edit_task_close_button:hover {\r\n    filter: brightness(0) saturate(100%) invert(33%) sepia(90%) saturate(600%) hue-rotate(200deg);\r\n    transition: 0.15s;\r\n}\r\n\r\n\r\n\r\n#add_project_close_button>img,\r\n#add_task_close_button>img,\r\n#info_task_close_button>img,\r\n#edit_task_close_button>img {\r\n    width: 42.17px;\r\n    height: 42.17px;\r\n}\r\n\r\nfieldset {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: none;\r\n    gap: 5px;\r\n}\r\n\r\n.modal-container>form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    padding: 36px 54px;\r\n    gap: 18px;\r\n}\r\n\r\n.modal-container>form>fieldset>.field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.modal-container>form>fieldset>.field>label,\r\n.modal-container>form>fieldset>.bottom-row>.field>label {\r\n    display: flex;\r\n    color: #5B5B5B;\r\n    font-weight: 600;\r\n    font-size: 1rem;\r\n    gap: 10px;\r\n}\r\n\r\n.modal-container>form>fieldset>.field>label>span,\r\n.modal-container>form>fieldset>.bottom-row>.field>label>span {\r\n    display: flex;\r\n    color: #FF0000;\r\n    font-weight: 600;\r\n    font-size: 1rem;\r\n}\r\n\r\n.modal-container>form>fieldset>.field>input,\r\n.modal-container>form>fieldset>.field>textarea {\r\n    display: flex;\r\n    border: #DCDCDC solid 2px;\r\n    padding: 15px 19px;\r\n    background: #F8F8F8;\r\n    font-weight: 600;\r\n    color: #5B5B5B;\r\n    font-size: 1rem;\r\n    resize: none;\r\n    border-radius: 10px;\r\n}\r\n\r\n#add_project_button_save,\r\n#add_task_button_save,\r\n#edit_task_button_save {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 5px 113px;\r\n    background: #00145B;\r\n    border-radius: 13px;\r\n    transition: 0.15s;\r\n}\r\n\r\n#add_project_button_save:hover,\r\n#add_task_button_save:hover,\r\n#edit_task_button_save:hover {\r\n    background: #1444EE;\r\n    transition: 0.15s;\r\n}\r\n\r\n#add_project_button_save>img,\r\n#add_task_button_save>img,\r\n#edit_task_button_save>img {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 45.96px;\r\n    height: 45.96px;\r\n}\r\n\r\n.modal-container>form>fieldset>.button-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#add_task_modal>.modal-container,\r\n#info_task_modal>.modal-container,\r\n#edit_task_modal>.modal-container {\r\n    display: flex;\r\n    width: 521.66px;\r\n    flex-direction: column;\r\n    background: #FFFFFF;\r\n    border-radius: 10px;\r\n    top: 50%;\r\n    left: 50%;\r\n    position: fixed;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n#add_task_modal>.modal-container>fieldset>.bottom-row,\r\n#info_task_modal>.modal-container>form>fieldset>.bottom-row,\r\n#edit_task_modal>.modal-container>form>fieldset>.bottom-row {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.half {\r\n    padding: 11px 17px;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    border-radius: 10px;\r\n    border: #DCDCDC solid 2px;\r\n    width: 100%;\r\n    color: #5B5B5B;\r\n}\r\n\r\n.bottom-row {\r\n    display: flex;\r\n    gap: 6px;\r\n}\r\n\r\n.bottom-row>.field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    width: 100%;\r\n}\r\n\r\n#add_task_button_save,\r\n#edit_task_button_save {\r\n    margin-top: 50px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/calendar-today.png":
/*!********************************!*\
  !*** ./src/calendar-today.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "addd5614d2c215a36a9e.png";

/***/ }),

/***/ "./src/calendar-week.png":
/*!*******************************!*\
  !*** ./src/calendar-week.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a1c97fde36a626449a72.png";

/***/ }),

/***/ "./src/inbox.png":
/*!***********************!*\
  !*** ./src/inbox.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f2ec62af86601a6810a.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addImage)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _inbox_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox.png */ "./src/inbox.png");
/* harmony import */ var _calendar_today_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-today.png */ "./src/calendar-today.png");
/* harmony import */ var _calendar_week_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-week.png */ "./src/calendar-week.png");
/* harmony import */ var _plus_box_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plus-box.png */ "./src/plus-box.png");
/* harmony import */ var _white_folder_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./white-folder.png */ "./src/white-folder.png");
/* harmony import */ var _white_close_box_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./white-close-box.png */ "./src/white-close-box.png");
/* harmony import */ var _white_plus_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./white-plus.png */ "./src/white-plus.png");
/* harmony import */ var _white_notebook_plus_outline_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./white-notebook-plus-outline.png */ "./src/white-notebook-plus-outline.png");
/* harmony import */ var _white_information_outline_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./white-information-outline.png */ "./src/white-information-outline.png");
/* harmony import */ var _white_content_save_all_outline_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./white-content-save-all-outline.png */ "./src/white-content-save-all-outline.png");
/* harmony import */ var _white_notebook_edit_outline_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./white-notebook-edit-outline.png */ "./src/white-notebook-edit-outline.png");





// import WhitePlusBox from "./white-plus-box.png";
// import DarkBlueEdit from "./dark-blue-notebook-edit-outline.png";
// import DarkBlueInformation from "./dark-blue-information-outline.png";
// import DarkBlueDelete from "./dark-blue-trash-can-outline.png";








function addImage(element, image, className) {
    const newImage = new Image();
    newImage.src = image;
    if (className != "") {
        newImage.classList.add(className);
    }
    element.appendChild(newImage);
}

addImage(document.getElementsByClassName("task-button")[0], _inbox_png__WEBPACK_IMPORTED_MODULE_1__, "inbox");
addImage(document.getElementsByClassName("task-button")[1], _calendar_today_png__WEBPACK_IMPORTED_MODULE_2__, "today");
addImage(document.getElementsByClassName("task-button")[2], _calendar_week_png__WEBPACK_IMPORTED_MODULE_3__, "this-week");
addImage(document.getElementsByClassName("task-button")[3], _plus_box_png__WEBPACK_IMPORTED_MODULE_4__, "add-project");
//addImage(document.getElementsByClassName("task-button")[4], PlusBox, "add-project");
//addImage(document.getElementById("task_option_1"), DarkBlueEdit, "");
//addImage(document.getElementById("task_option_2"), DarkBlueInformation, "");
//addImage(document.getElementById("task_option_3"), DarkBlueDelete, "");
addImage(document.getElementById("add_project_close_button"), _white_close_box_png__WEBPACK_IMPORTED_MODULE_6__, "");
addImage(document.getElementById("add_project_button_save"), _white_plus_png__WEBPACK_IMPORTED_MODULE_7__, "");
addImage(document.getElementsByClassName("heading-container")[0], _white_folder_png__WEBPACK_IMPORTED_MODULE_5__, "");
addImage(document.getElementById("add_task_button_save"), _white_plus_png__WEBPACK_IMPORTED_MODULE_7__, "");
addImage(document.getElementById("add_task_header_container"), _white_notebook_plus_outline_png__WEBPACK_IMPORTED_MODULE_8__, "");
addImage(document.getElementById("add_task_close_button"), _white_close_box_png__WEBPACK_IMPORTED_MODULE_6__, "");

addImage(document.getElementById("info_task_close_button"), _white_close_box_png__WEBPACK_IMPORTED_MODULE_6__, "");
addImage(document.getElementById("info_task_header_container"), _white_information_outline_png__WEBPACK_IMPORTED_MODULE_9__, "");

addImage(document.getElementById("edit_task_button_save"), _white_content_save_all_outline_png__WEBPACK_IMPORTED_MODULE_10__, "");
addImage(document.getElementById("edit_task_header_container"), _white_notebook_edit_outline_png__WEBPACK_IMPORTED_MODULE_11__, "");
addImage(document.getElementById("edit_task_close_button"), _white_close_box_png__WEBPACK_IMPORTED_MODULE_6__, "");

/***/ }),

/***/ "./src/plus-box.png":
/*!**************************!*\
  !*** ./src/plus-box.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c6b1413b677fb61598f.png";

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/white-close-box.png":
/*!*********************************!*\
  !*** ./src/white-close-box.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c2a0c37bf59defd88fe.png";

/***/ }),

/***/ "./src/white-content-save-all-outline.png":
/*!************************************************!*\
  !*** ./src/white-content-save-all-outline.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d63f3c33c330b518209.png";

/***/ }),

/***/ "./src/white-folder.png":
/*!******************************!*\
  !*** ./src/white-folder.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73ed9e5b8d8c97cb4f5a.png";

/***/ }),

/***/ "./src/white-information-outline.png":
/*!*******************************************!*\
  !*** ./src/white-information-outline.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2af9cf4a31a17eedbb5d.png";

/***/ }),

/***/ "./src/white-notebook-edit-outline.png":
/*!*********************************************!*\
  !*** ./src/white-notebook-edit-outline.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fce0e599ac08be17b665.png";

/***/ }),

/***/ "./src/white-notebook-plus-outline.png":
/*!*********************************************!*\
  !*** ./src/white-notebook-plus-outline.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8056d536bfd3c059d65.png";

/***/ }),

/***/ "./src/white-plus.png":
/*!****************************!*\
  !*** ./src/white-plus.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b2705e1a1796dbc0e85.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd0ZBQXdGLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxPQUFPLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFlBQVksT0FBTyxRQUFRLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sUUFBUSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFFBQVEsVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLFFBQVEsWUFBWSxhQUFhLFNBQVMsUUFBUSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFN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Q3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9naXQtcmVhZHktdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9naXQtcmVhZHktdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ2l0LXJlYWR5LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9naXQtcmVhZHktdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9naXQtcmVhZHktdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ2l0LXJlYWR5LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9naXQtcmVhZHktdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBSZXNldCBkZWZhdWx0IGJyb3dzZXIgc3R5bGVzICovXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogXCJJbnRlclwiO1xyXG59XHJcblxyXG4ubm8tdHJhbnNpdGlvbiAqIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBNYWtlIGh0bWwgYW5kIGJvZHkgdGFrZSB1cCB0aGUgZnVsbCBoZWlnaHQgKi9cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogVXNlIGZsZXhib3ggb24gdGhlIGJvZHkgdG8gY2VudGVyIGNvbnRlbnQgKi9cclxuYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuYnV0dG9uLFxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLFxyXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0ge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuLm1haW4taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMTQ1QjtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgcGFkZGluZzogMjBweCAzN3B4O1xyXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG59XHJcblxyXG5oZWFkZXI+LnRpdGxlIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxubmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTcuNSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDMzNnB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI0VCRUJFQjtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi50YXNrLWJ1dHRvbnMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzNyU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGdhcDogMzRweDtcclxuICAgIHBhZGRpbmc6IDAgNDNweDtcclxufVxyXG5cclxuLnRhc2stYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNGNEY0RjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOXB4O1xyXG4gICAgcGFkZGluZzogMTEuNXB4IDIyLjVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZ2FwOiAxMy41cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcclxufVxyXG5cclxuLnRhc2stYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMxNDQ0RUU7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLnRhc2stYnV0dG9uLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICM1ODU4NTg7XHJcbn1cclxuXHJcbi50YXNrLWJ1dHRvbjpob3ZlciAuaW5ib3gge1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMSUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDE0OGRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCgxMDAlKTtcclxuXHJcbn1cclxuXHJcbi50YXNrLWJ1dHRvbjpob3ZlciAudG9kYXkge1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMSUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDE0OGRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCgxMDAlKTtcclxuXHJcbn1cclxuXHJcbi50YXNrLWJ1dHRvbjpob3ZlciAudGhpcy13ZWVrIHtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDElKSBzYXR1cmF0ZSgyJSkgaHVlLXJvdGF0ZSgxNDhkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoMTAwJSk7XHJcblxyXG59XHJcblxyXG4udGFzay1idXR0b246aG92ZXIgLmFkZC1wcm9qZWN0IHtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDElKSBzYXR1cmF0ZSgyJSkgaHVlLXJvdGF0ZSgxNDhkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoMTAwJSk7XHJcblxyXG59XHJcblxyXG4udGFzay1idXR0b246aG92ZXIgLnRhc2stYnV0dG9uLW5hbWUge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5pbmJveCB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnLi9pbmJveC5wbmcnKTsgKi9cclxufVxyXG5cclxuLnRvZGF5IHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL2NhbGVuZGFyLXRvZGF5LnBuZycpOyAqL1xyXG59XHJcblxyXG4udGhpcy13ZWVrIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL2NhbGVuZGFyLXRvZGF5LnBuZycpOyAqL1xyXG59XHJcblxyXG4ucHJvamVjdC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDYzJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBnYXA6IDMxcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNvbnRhaW5lci1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDdweDtcclxuICAgIHBhZGRpbmc6IDAgMjZweDtcclxufVxyXG5cclxuLnByb2plY3QtY29udGFpbmVyLWhlYWRlcj4udGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzAwMTQ1QjtcclxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtY29udGFpbmVyLWhlYWRlcj4uZGl2aWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4ucHJvamVjdHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5hZGQtcHJvamVjdCxcclxuLmFkZC10YXNrLWltZyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnLi9wbHVzLWJveC5wbmcnKTsgKi9cclxufVxyXG5cclxuLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCA0M3B4O1xyXG59XHJcblxyXG4ucHJvamVjdC10YWJzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDAgNDFweDtcclxuICAgIGdhcDogMTJweDtcclxufVxyXG5cclxuI3Byb2plY3RfdGFiIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMTQ1QjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTkuNXB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XHJcbn1cclxuXHJcbiNwcm9qZWN0X3RhYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDk5OEZGO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRhc2stY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogNjdweCAzNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xNTBzO1xyXG59XHJcblxyXG4uYWRkLXRhc2stYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG59XHJcblxyXG4uYWRkLXRhc2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMTQ1QjtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgcGFkZGluZzogMTBweCAxNi41cHg7XHJcbiAgICBnYXA6IDE4cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcclxufVxyXG5cclxuLmFkZC10YXNrOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMxNDQ0RUU7XHJcbn1cclxuXHJcbi5hZGQtdGFzay10ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4ucHJvamVjdC10YXNrLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG59XHJcblxyXG4ucHJvamVjdC10YXNrLWhlYWRlci1jb250YWluZXI+LnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGNvbG9yOiAjMDAxNDVCO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnByb2plY3QtdGFzay1oZWFkZXItY29udGFpbmVyPi5kaXZpZGVyIHtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRhc2staGVhZGVyLWNvbnRhaW5lcj4uZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiA4cHggMCAwIDA7XHJcbn1cclxuXHJcbi5hZGQtdGFzay1idXR0b24tY29udGFpbmVyPi5kaXZpZGVyIHtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIGJhY2tncm91bmQ6ICNCN0I3Qjc7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRhc2tzLWFyZWEge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG59XHJcblxyXG4udGFzayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICBib3JkZXI6ICNEMkQyRDIgc29saWQgMXB4O1xyXG4gICAgcGFkZGluZzogMjNweCAxN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xyXG59XHJcblxyXG4udGFzaz4ubGVmdC1zaWRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA1N3B4O1xyXG59XHJcblxyXG4udGFzaz4ucmlnaHQtc2lkZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMjBweDtcclxufVxyXG5cclxuLnRhc2s+LnJpZ2h0LXNpZGU+Lm9wdGlvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxufVxyXG5cclxuLnRhc2s+LnJpZ2h0LXNpZGU+Lm9wdGlvbi1jb250YWluZXI+YnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyNy44cHg7XHJcbiAgICB3aWR0aDogMjcuOHB4O1xyXG59XHJcblxyXG4udGFzaz4ucmlnaHQtc2lkZT4ub3B0aW9uLWNvbnRhaW5lcj5idXR0b24+aW1nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDI3LjhweDtcclxuICAgIHdpZHRoOiAyNy44cHg7XHJcbn1cclxuXHJcbi50YXNrPi5sZWZ0LXNpZGU+LmNoZWNrTWFyayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICB3aWR0aDogMzFweDtcclxuICAgIGhlaWdodDogMzFweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xyXG59XHJcblxyXG4udGFzaz4ubGVmdC1zaWRlPi5jaGVja01hcms+aW1nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xyXG59XHJcblxyXG4uZWFzeSB7XHJcbiAgICBib3JkZXI6ICMxNEZGMDAgc29saWQgM3B4O1xyXG59XHJcblxyXG4ubWVkaXVtIHtcclxuICAgIGJvcmRlcjogI0ZGNkIwMCBzb2xpZCAzcHg7XHJcbn1cclxuXHJcbi5oYXJkIHtcclxuICAgIGJvcmRlcjogI0ZGMDAwMCBzb2xpZCAzcHg7XHJcbn1cclxuXHJcbi5lYXN5LWNvbXBsZXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICM2REZGNjA7XHJcbn1cclxuXHJcbi5tZWRpdW0tY29tcGxldGUge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGODYyRTtcclxufVxyXG5cclxuLmhhcmQtY29tcGxldGUge1xyXG4gICAgYmFja2dyb3VuZDogI0ZFMzAzMDtcclxufVxyXG5cclxuLnRhc2s+LmxlZnQtc2lkZT4ubmFtZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sb3I6ICMyMzIzMjM7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50YXNrPi5yaWdodC1zaWRlPi5kdWUtZGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sb3I6ICMyMzIzMjM7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4jdGFza19vcHRpb25fMSxcclxuI3Rhc2tfb3B0aW9uXzIsXHJcbiN0YXNrX29wdGlvbl8zIHtcclxuICAgIGZpbHRlcjogbm9uZTtcclxufVxyXG5cclxuI3Rhc2tfb3B0aW9uXzE6aG92ZXIsXHJcbiN0YXNrX29wdGlvbl8yOmhvdmVyLFxyXG4jdGFza19vcHRpb25fMzpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGludmVydCg1MCUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoNzAwMCUpIGh1ZS1yb3RhdGUoMTgwZGVnKSBicmlnaHRuZXNzKDE1MCUpO1xyXG59XHJcblxyXG4jYWRkX3Byb2plY3RfbW9kYWwsXHJcbiNhZGRfdGFza19tb2RhbCxcclxuI2luZm9fdGFza19tb2RhbCxcclxuI2VkaXRfdGFza19tb2RhbCB7XHJcbiAgICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIC8qIFNpdCBvbiB0b3AgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogRnVsbCB3aWR0aCAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcclxufVxyXG5cclxuI2FkZF9wcm9qZWN0X21vZGFsPi5tb2RhbC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA1MjEuNjZweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5pbnZhbGlkIHtcclxuICAgIGJvcmRlcjogI0ZGOEU4RSBzb2xpZCAycHg7XHJcbn1cclxuXHJcbi5hZGQtcHJvamVjdC1uYXYsXHJcbi5hZGQtdGFzay1uYXYsXHJcbi5pbmZvLXRhc2stbmF2LFxyXG4uZWRpdC10YXNrLW5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMTQ1QjtcclxuICAgIHBhZGRpbmc6IDEycHggMThweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmhlYWRpbmctY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxNy4yNXB4O1xyXG59XHJcblxyXG4uaGVhZGluZy1jb250YWluZXI+aW1nIHtcclxuICAgIHdpZHRoOiA2MS4yMXB4O1xyXG4gICAgaGVpZ2h0OiA2MS4yMXB4O1xyXG59XHJcblxyXG4uaGVhZGluZy1jb250YWluZXI+aGVhZGVyIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuI2FkZF9wcm9qZWN0X2Nsb3NlX2J1dHRvbixcclxuI2FkZF90YXNrX2Nsb3NlX2J1dHRvbixcclxuI2luZm9fdGFza19jbG9zZV9idXR0b24sXHJcbiNlZGl0X3Rhc2tfY2xvc2VfYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcclxuXHJcbn1cclxuXHJcbiNhZGRfcHJvamVjdF9jbG9zZV9idXR0b246aG92ZXIsXHJcbiNhZGRfdGFza19jbG9zZV9idXR0b246aG92ZXIsXHJcbiNpbmZvX3Rhc2tfY2xvc2VfYnV0dG9uOmhvdmVyLFxyXG4jZWRpdF90YXNrX2Nsb3NlX2J1dHRvbjpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDMzJSkgc2VwaWEoOTAlKSBzYXR1cmF0ZSg2MDAlKSBodWUtcm90YXRlKDIwMGRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcclxufVxyXG5cclxuXHJcblxyXG4jYWRkX3Byb2plY3RfY2xvc2VfYnV0dG9uPmltZyxcclxuI2FkZF90YXNrX2Nsb3NlX2J1dHRvbj5pbWcsXHJcbiNpbmZvX3Rhc2tfY2xvc2VfYnV0dG9uPmltZyxcclxuI2VkaXRfdGFza19jbG9zZV9idXR0b24+aW1nIHtcclxuICAgIHdpZHRoOiA0Mi4xN3B4O1xyXG4gICAgaGVpZ2h0OiA0Mi4xN3B4O1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGdhcDogNXB4O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGFpbmVyPmZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzNnB4IDU0cHg7XHJcbiAgICBnYXA6IDE4cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uZmllbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDVweDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5maWVsZD5sYWJlbCxcclxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5ib3R0b20tcm93Pi5maWVsZD5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sb3I6ICM1QjVCNUI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmZpZWxkPmxhYmVsPnNwYW4sXHJcbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uYm90dG9tLXJvdz4uZmllbGQ+bGFiZWw+c3BhbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmZpZWxkPmlucHV0LFxyXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmZpZWxkPnRleHRhcmVhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXI6ICNEQ0RDREMgc29saWQgMnB4O1xyXG4gICAgcGFkZGluZzogMTVweCAxOXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzVCNUI1QjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiNhZGRfcHJvamVjdF9idXR0b25fc2F2ZSxcclxuI2FkZF90YXNrX2J1dHRvbl9zYXZlLFxyXG4jZWRpdF90YXNrX2J1dHRvbl9zYXZlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHggMTEzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAxNDVCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xyXG59XHJcblxyXG4jYWRkX3Byb2plY3RfYnV0dG9uX3NhdmU6aG92ZXIsXHJcbiNhZGRfdGFza19idXR0b25fc2F2ZTpob3ZlcixcclxuI2VkaXRfdGFza19idXR0b25fc2F2ZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTQ0NEVFO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XHJcbn1cclxuXHJcbiNhZGRfcHJvamVjdF9idXR0b25fc2F2ZT5pbWcsXHJcbiNhZGRfdGFza19idXR0b25fc2F2ZT5pbWcsXHJcbiNlZGl0X3Rhc2tfYnV0dG9uX3NhdmU+aW1nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDUuOTZweDtcclxuICAgIGhlaWdodDogNDUuOTZweDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNhZGRfdGFza19tb2RhbD4ubW9kYWwtY29udGFpbmVyLFxyXG4jaW5mb190YXNrX21vZGFsPi5tb2RhbC1jb250YWluZXIsXHJcbiNlZGl0X3Rhc2tfbW9kYWw+Lm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDUyMS42NnB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuI2FkZF90YXNrX21vZGFsPi5tb2RhbC1jb250YWluZXI+ZmllbGRzZXQ+LmJvdHRvbS1yb3csXHJcbiNpbmZvX3Rhc2tfbW9kYWw+Lm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5ib3R0b20tcm93LFxyXG4jZWRpdF90YXNrX21vZGFsPi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uYm90dG9tLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaGFsZiB7XHJcbiAgICBwYWRkaW5nOiAxMXB4IDE3cHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogI0RDRENEQyBzb2xpZCAycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjNUI1QjVCO1xyXG59XHJcblxyXG4uYm90dG9tLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiA2cHg7XHJcbn1cclxuXHJcbi5ib3R0b20tcm93Pi5maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNhZGRfdGFza19idXR0b25fc2F2ZSxcclxuI2VkaXRfdGFza19idXR0b25fc2F2ZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpQ0FBaUM7QUFDakM7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsMkJBQTJCO0FBQy9COztBQUVBLCtDQUErQztBQUMvQzs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBLDhDQUE4QztBQUM5QztJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7OztJQUdJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVzs7SUFFWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLCtCQUErQjtBQUNuQzs7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bUI7QUFDdkI7O0FBRUE7OztJQUdJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTs7O0lBR0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsU0FBUztJQUNULGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7O0FBRUE7OztJQUdJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogUmVzZXQgZGVmYXVsdCBicm93c2VyIHN0eWxlcyAqL1xcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubm8tdHJhbnNpdGlvbiAqIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIC1tb3otdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICAtbXMtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICAtby10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFrZSBodG1sIGFuZCBib2R5IHRha2UgdXAgdGhlIGZ1bGwgaGVpZ2h0ICovXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVXNlIGZsZXhib3ggb24gdGhlIGJvZHkgdG8gY2VudGVyIGNvbnRlbnQgKi9cXHJcXG5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcclxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG91dGxpbmU6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tYWluLWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMDE0NUI7XFxyXFxuICAgIGhlaWdodDogMTAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMjBweCAzN3B4O1xcclxcbiAgICBmb250LXNpemU6IDIuMjVyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlcj4udGl0bGUge1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxNy41JTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtaW4td2lkdGg6IDMzNnB4O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjRUJFQkVCO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWJ1dHRvbnMtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMzclO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZ2FwOiAzNHB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDQzcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogI0Y0RjRGNDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTlweDtcXHJcXG4gICAgcGFkZGluZzogMTEuNXB4IDIyLjVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGdhcDogMTMuNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzE0NDRFRTtcXHJcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWJ1dHRvbi1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiAjNTg1ODU4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1idXR0b246aG92ZXIgLmluYm94IHtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMSUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDE0OGRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCgxMDAlKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYnV0dG9uOmhvdmVyIC50b2RheSB7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDElKSBzYXR1cmF0ZSgyJSkgaHVlLXJvdGF0ZSgxNDhkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoMTAwJSk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50YXNrLWJ1dHRvbjpob3ZlciAudGhpcy13ZWVrIHtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMSUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDE0OGRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCgxMDAlKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYnV0dG9uOmhvdmVyIC5hZGQtcHJvamVjdCB7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDElKSBzYXR1cmF0ZSgyJSkgaHVlLXJvdGF0ZSgxNDhkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoMTAwJSk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50YXNrLWJ1dHRvbjpob3ZlciAudGFzay1idXR0b24tbmFtZSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ib3gge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy4vaW5ib3gucG5nJyk7ICovXFxyXFxufVxcclxcblxcclxcbi50b2RheSB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnLi9jYWxlbmRhci10b2RheS5wbmcnKTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRoaXMtd2VlayB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnLi9jYWxlbmRhci10b2RheS5wbmcnKTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgaGVpZ2h0OiA2MyU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIGdhcDogMzFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyLWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogN3B4O1xcclxcbiAgICBwYWRkaW5nOiAwIDI2cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRhaW5lci1oZWFkZXI+LnRpdGxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgY29sb3I6ICMwMDE0NUI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyLWhlYWRlcj4uZGl2aWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxyXFxuICAgIHBhZGRpbmc6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QsXFxyXFxuLmFkZC10YXNrLWltZyB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnLi9wbHVzLWJveC5wbmcnKTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMCA0M3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10YWJzLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDAgNDFweDtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdF90YWIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDAxNDVCO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDE5LjVweDtcXHJcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0X3RhYjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwOTk4RkY7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10YXNrLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDY3cHggMzQwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjE1MHM7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzay1idXR0b24tY29udGFpbmVyIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMDE0NUI7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDE2LjVweDtcXHJcXG4gICAgZ2FwOiAxOHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzE0NDRFRTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrLXRleHQge1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGFzay1oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGFzay1oZWFkZXItY29udGFpbmVyPi50aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgY29sb3I6ICMwMDE0NUI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRhc2staGVhZGVyLWNvbnRhaW5lcj4uZGl2aWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGFzay1oZWFkZXItY29udGFpbmVyPi5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xcclxcbiAgICBjb2xvcjogIzgwODA4MDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgcGFkZGluZzogOHB4IDAgMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2stYnV0dG9uLWNvbnRhaW5lcj4uZGl2aWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDFweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI0I3QjdCNztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGFza3MtYXJlYSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XFxyXFxuICAgIGJvcmRlcjogI0QyRDJEMiBzb2xpZCAxcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIzcHggMTdweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XFxyXFxufVxcclxcblxcclxcbi50YXNrPi5sZWZ0LXNpZGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDU3cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrPi5yaWdodC1zaWRlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzaz4ucmlnaHQtc2lkZT4ub3B0aW9uLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzaz4ucmlnaHQtc2lkZT4ub3B0aW9uLWNvbnRhaW5lcj5idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDI3LjhweDtcXHJcXG4gICAgd2lkdGg6IDI3LjhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s+LnJpZ2h0LXNpZGU+Lm9wdGlvbi1jb250YWluZXI+YnV0dG9uPmltZyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGhlaWdodDogMjcuOHB4O1xcclxcbiAgICB3aWR0aDogMjcuOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzaz4ubGVmdC1zaWRlPi5jaGVja01hcmsge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXHJcXG4gICAgd2lkdGg6IDMxcHg7XFxyXFxuICAgIGhlaWdodDogMzFweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzaz4ubGVmdC1zaWRlPi5jaGVja01hcms+aW1nIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAyMnB4O1xcclxcbiAgICBoZWlnaHQ6IDIycHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xcclxcbn1cXHJcXG5cXHJcXG4uZWFzeSB7XFxyXFxuICAgIGJvcmRlcjogIzE0RkYwMCBzb2xpZCAzcHg7XFxyXFxufVxcclxcblxcclxcbi5tZWRpdW0ge1xcclxcbiAgICBib3JkZXI6ICNGRjZCMDAgc29saWQgM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGFyZCB7XFxyXFxuICAgIGJvcmRlcjogI0ZGMDAwMCBzb2xpZCAzcHg7XFxyXFxufVxcclxcblxcclxcbi5lYXN5LWNvbXBsZXRlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzZERkY2MDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZGl1bS1jb21wbGV0ZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRjg2MkU7XFxyXFxufVxcclxcblxcclxcbi5oYXJkLWNvbXBsZXRlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZFMzAzMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s+LmxlZnQtc2lkZT4ubmFtZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGNvbG9yOiAjMjMyMzIzO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s+LnJpZ2h0LXNpZGU+LmR1ZS1kYXRlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sb3I6ICMyMzIzMjM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tfb3B0aW9uXzEsXFxyXFxuI3Rhc2tfb3B0aW9uXzIsXFxyXFxuI3Rhc2tfb3B0aW9uXzMge1xcclxcbiAgICBmaWx0ZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0YXNrX29wdGlvbl8xOmhvdmVyLFxcclxcbiN0YXNrX29wdGlvbl8yOmhvdmVyLFxcclxcbiN0YXNrX29wdGlvbl8zOmhvdmVyIHtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoNTAlKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDcwMDAlKSBodWUtcm90YXRlKDE4MGRlZykgYnJpZ2h0bmVzcygxNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZF9wcm9qZWN0X21vZGFsLFxcclxcbiNhZGRfdGFza19tb2RhbCxcXHJcXG4jaW5mb190YXNrX21vZGFsLFxcclxcbiNlZGl0X3Rhc2tfbW9kYWwge1xcclxcbiAgICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIC8qIFN0YXkgaW4gcGxhY2UgKi9cXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgLyogU2l0IG9uIHRvcCAqL1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLyogRnVsbCB3aWR0aCAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICAgIC8qIEZhbGxiYWNrIGNvbG9yICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gICAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcXHJcXG59XFxyXFxuXFxyXFxuI2FkZF9wcm9qZWN0X21vZGFsPi5tb2RhbC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogNTIxLjY2cHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5pbnZhbGlkIHtcXHJcXG4gICAgYm9yZGVyOiAjRkY4RThFIHNvbGlkIDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LW5hdixcXHJcXG4uYWRkLXRhc2stbmF2LFxcclxcbi5pbmZvLXRhc2stbmF2LFxcclxcbi5lZGl0LXRhc2stbmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDAxNDVCO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTcuMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmctY29udGFpbmVyPmltZyB7XFxyXFxuICAgIHdpZHRoOiA2MS4yMXB4O1xcclxcbiAgICBoZWlnaHQ6IDYxLjIxcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nLWNvbnRhaW5lcj5oZWFkZXIge1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkX3Byb2plY3RfY2xvc2VfYnV0dG9uLFxcclxcbiNhZGRfdGFza19jbG9zZV9idXR0b24sXFxyXFxuI2luZm9fdGFza19jbG9zZV9idXR0b24sXFxyXFxuI2VkaXRfdGFza19jbG9zZV9idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNhZGRfcHJvamVjdF9jbG9zZV9idXR0b246aG92ZXIsXFxyXFxuI2FkZF90YXNrX2Nsb3NlX2J1dHRvbjpob3ZlcixcXHJcXG4jaW5mb190YXNrX2Nsb3NlX2J1dHRvbjpob3ZlcixcXHJcXG4jZWRpdF90YXNrX2Nsb3NlX2J1dHRvbjpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoMzMlKSBzZXBpYSg5MCUpIHNhdHVyYXRlKDYwMCUpIGh1ZS1yb3RhdGUoMjAwZGVnKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNhZGRfcHJvamVjdF9jbG9zZV9idXR0b24+aW1nLFxcclxcbiNhZGRfdGFza19jbG9zZV9idXR0b24+aW1nLFxcclxcbiNpbmZvX3Rhc2tfY2xvc2VfYnV0dG9uPmltZyxcXHJcXG4jZWRpdF90YXNrX2Nsb3NlX2J1dHRvbj5pbWcge1xcclxcbiAgICB3aWR0aDogNDIuMTdweDtcXHJcXG4gICAgaGVpZ2h0OiA0Mi4xN3B4O1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250YWluZXI+Zm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMzZweCA1NHB4O1xcclxcbiAgICBnYXA6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uZmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5maWVsZD5sYWJlbCxcXHJcXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmJvdHRvbS1yb3c+LmZpZWxkPmxhYmVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sb3I6ICM1QjVCNUI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmZpZWxkPmxhYmVsPnNwYW4sXFxyXFxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5ib3R0b20tcm93Pi5maWVsZD5sYWJlbD5zcGFuIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sb3I6ICNGRjAwMDA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5maWVsZD5pbnB1dCxcXHJcXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmZpZWxkPnRleHRhcmVhIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYm9yZGVyOiAjRENEQ0RDIHNvbGlkIDJweDtcXHJcXG4gICAgcGFkZGluZzogMTVweCAxOXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogIzVCNUI1QjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNhZGRfcHJvamVjdF9idXR0b25fc2F2ZSxcXHJcXG4jYWRkX3Rhc2tfYnV0dG9uX3NhdmUsXFxyXFxuI2VkaXRfdGFza19idXR0b25fc2F2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTEzcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMDE0NUI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkX3Byb2plY3RfYnV0dG9uX3NhdmU6aG92ZXIsXFxyXFxuI2FkZF90YXNrX2J1dHRvbl9zYXZlOmhvdmVyLFxcclxcbiNlZGl0X3Rhc2tfYnV0dG9uX3NhdmU6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMTQ0NEVFO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcXHJcXG59XFxyXFxuXFxyXFxuI2FkZF9wcm9qZWN0X2J1dHRvbl9zYXZlPmltZyxcXHJcXG4jYWRkX3Rhc2tfYnV0dG9uX3NhdmU+aW1nLFxcclxcbiNlZGl0X3Rhc2tfYnV0dG9uX3NhdmU+aW1nIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA0NS45NnB4O1xcclxcbiAgICBoZWlnaHQ6IDQ1Ljk2cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkX3Rhc2tfbW9kYWw+Lm1vZGFsLWNvbnRhaW5lcixcXHJcXG4jaW5mb190YXNrX21vZGFsPi5tb2RhbC1jb250YWluZXIsXFxyXFxuI2VkaXRfdGFza19tb2RhbD4ubW9kYWwtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDUyMS42NnB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkX3Rhc2tfbW9kYWw+Lm1vZGFsLWNvbnRhaW5lcj5maWVsZHNldD4uYm90dG9tLXJvdyxcXHJcXG4jaW5mb190YXNrX21vZGFsPi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uYm90dG9tLXJvdyxcXHJcXG4jZWRpdF90YXNrX21vZGFsPi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uYm90dG9tLXJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbGYge1xcclxcbiAgICBwYWRkaW5nOiAxMXB4IDE3cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAjRENEQ0RDIHNvbGlkIDJweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGNvbG9yOiAjNUI1QjVCO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLXJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLXJvdz4uZmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNhZGRfdGFza19idXR0b25fc2F2ZSxcXHJcXG4jZWRpdF90YXNrX2J1dHRvbl9zYXZlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgSW5ib3ggZnJvbSBcIi4vaW5ib3gucG5nXCI7XHJcbmltcG9ydCBUb2RheSBmcm9tIFwiLi9jYWxlbmRhci10b2RheS5wbmdcIjtcclxuaW1wb3J0IFRoaXNXZWVrIGZyb20gXCIuL2NhbGVuZGFyLXdlZWsucG5nXCI7XHJcbmltcG9ydCBQbHVzQm94IGZyb20gXCIuL3BsdXMtYm94LnBuZ1wiO1xyXG4vLyBpbXBvcnQgV2hpdGVQbHVzQm94IGZyb20gXCIuL3doaXRlLXBsdXMtYm94LnBuZ1wiO1xyXG4vLyBpbXBvcnQgRGFya0JsdWVFZGl0IGZyb20gXCIuL2RhcmstYmx1ZS1ub3RlYm9vay1lZGl0LW91dGxpbmUucG5nXCI7XHJcbi8vIGltcG9ydCBEYXJrQmx1ZUluZm9ybWF0aW9uIGZyb20gXCIuL2RhcmstYmx1ZS1pbmZvcm1hdGlvbi1vdXRsaW5lLnBuZ1wiO1xyXG4vLyBpbXBvcnQgRGFya0JsdWVEZWxldGUgZnJvbSBcIi4vZGFyay1ibHVlLXRyYXNoLWNhbi1vdXRsaW5lLnBuZ1wiO1xyXG5pbXBvcnQgV2hpdGVGb2xkZXIgZnJvbSBcIi4vd2hpdGUtZm9sZGVyLnBuZ1wiO1xyXG5pbXBvcnQgV2hpdGVDbG9zZUJveCBmcm9tIFwiLi93aGl0ZS1jbG9zZS1ib3gucG5nXCI7XHJcbmltcG9ydCBXaGl0ZVBsdXMgZnJvbSBcIi4vd2hpdGUtcGx1cy5wbmdcIjtcclxuaW1wb3J0IFdoaXRlTm90ZWJvb2tBZGQgZnJvbSBcIi4vd2hpdGUtbm90ZWJvb2stcGx1cy1vdXRsaW5lLnBuZ1wiO1xyXG5pbXBvcnQgV2hpdGVJbmZvcm1hdGlvbiBmcm9tIFwiLi93aGl0ZS1pbmZvcm1hdGlvbi1vdXRsaW5lLnBuZ1wiO1xyXG5pbXBvcnQgV2hpdGVDb250ZW50U2F2ZUFsbCBmcm9tIFwiLi93aGl0ZS1jb250ZW50LXNhdmUtYWxsLW91dGxpbmUucG5nXCI7XHJcbmltcG9ydCBXaGl0ZU5vdGVib29rRWRpdCBmcm9tIFwiLi93aGl0ZS1ub3RlYm9vay1lZGl0LW91dGxpbmUucG5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRJbWFnZShlbGVtZW50LCBpbWFnZSwgY2xhc3NOYW1lKSB7XHJcbiAgICBjb25zdCBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbmV3SW1hZ2Uuc3JjID0gaW1hZ2U7XHJcbiAgICBpZiAoY2xhc3NOYW1lICE9IFwiXCIpIHtcclxuICAgICAgICBuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5ld0ltYWdlKTtcclxufVxyXG5cclxuYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2stYnV0dG9uXCIpWzBdLCBJbmJveCwgXCJpbmJveFwiKTtcclxuYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2stYnV0dG9uXCIpWzFdLCBUb2RheSwgXCJ0b2RheVwiKTtcclxuYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2stYnV0dG9uXCIpWzJdLCBUaGlzV2VlaywgXCJ0aGlzLXdlZWtcIik7XHJcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrLWJ1dHRvblwiKVszXSwgUGx1c0JveCwgXCJhZGQtcHJvamVjdFwiKTtcclxuLy9hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFzay1idXR0b25cIilbNF0sIFBsdXNCb3gsIFwiYWRkLXByb2plY3RcIik7XHJcbi8vYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrX29wdGlvbl8xXCIpLCBEYXJrQmx1ZUVkaXQsIFwiXCIpO1xyXG4vL2FkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza19vcHRpb25fMlwiKSwgRGFya0JsdWVJbmZvcm1hdGlvbiwgXCJcIik7XHJcbi8vYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrX29wdGlvbl8zXCIpLCBEYXJrQmx1ZURlbGV0ZSwgXCJcIik7XHJcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Byb2plY3RfY2xvc2VfYnV0dG9uXCIpLCBXaGl0ZUNsb3NlQm94LCBcIlwiKTtcclxuYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfcHJvamVjdF9idXR0b25fc2F2ZVwiKSwgV2hpdGVQbHVzLCBcIlwiKTtcclxuYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImhlYWRpbmctY29udGFpbmVyXCIpWzBdLCBXaGl0ZUZvbGRlciwgXCJcIik7XHJcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Rhc2tfYnV0dG9uX3NhdmVcIiksIFdoaXRlUGx1cywgXCJcIik7XHJcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Rhc2tfaGVhZGVyX2NvbnRhaW5lclwiKSwgV2hpdGVOb3RlYm9va0FkZCwgXCJcIik7XHJcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Rhc2tfY2xvc2VfYnV0dG9uXCIpLCBXaGl0ZUNsb3NlQm94LCBcIlwiKTtcclxuXHJcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb190YXNrX2Nsb3NlX2J1dHRvblwiKSwgV2hpdGVDbG9zZUJveCwgXCJcIik7XHJcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb190YXNrX2hlYWRlcl9jb250YWluZXJcIiksIFdoaXRlSW5mb3JtYXRpb24sIFwiXCIpO1xyXG5cclxuYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0X3Rhc2tfYnV0dG9uX3NhdmVcIiksIFdoaXRlQ29udGVudFNhdmVBbGwsIFwiXCIpO1xyXG5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRfdGFza19oZWFkZXJfY29udGFpbmVyXCIpLCBXaGl0ZU5vdGVib29rRWRpdCwgXCJcIik7XHJcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdF90YXNrX2Nsb3NlX2J1dHRvblwiKSwgV2hpdGVDbG9zZUJveCwgXCJcIik7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9