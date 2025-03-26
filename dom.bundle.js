"use strict";
(self["webpackChunkgit_ready_todo_list"] = self["webpackChunkgit_ready_todo_list"] || []).push([["dom"],{

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

/***/ "./src/dark-blue-information-outline.png":
/*!***********************************************!*\
  !*** ./src/dark-blue-information-outline.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4066b67bb9a1dd086cf.png";

/***/ }),

/***/ "./src/dark-blue-notebook-edit-outline.png":
/*!*************************************************!*\
  !*** ./src/dark-blue-notebook-edit-outline.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "303ed99b68c595bb2b75.png";

/***/ }),

/***/ "./src/dark-blue-trash-can-outline.png":
/*!*********************************************!*\
  !*** ./src/dark-blue-trash-can-outline.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7298ee4c98a175db2ca.png";

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddProjectForm: () => (/* binding */ AddProjectForm),
/* harmony export */   AddTaskForm: () => (/* binding */ AddTaskForm),
/* harmony export */   EditTaskForm: () => (/* binding */ EditTaskForm),
/* harmony export */   InfoTaskForm: () => (/* binding */ InfoTaskForm),
/* harmony export */   Navigation: () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _white_plus_box_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./white-plus-box.png */ "./src/white-plus-box.png");
/* harmony import */ var _dark_blue_notebook_edit_outline_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dark-blue-notebook-edit-outline.png */ "./src/dark-blue-notebook-edit-outline.png");
/* harmony import */ var _dark_blue_information_outline_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dark-blue-information-outline.png */ "./src/dark-blue-information-outline.png");
/* harmony import */ var _dark_blue_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dark-blue-trash-can-outline.png */ "./src/dark-blue-trash-can-outline.png");
/* harmony import */ var _white_check_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./white-check.png */ "./src/white-check.png");







//import { Project } from './todo.js'; // Import the Project class from todo.js


Date.prototype.getWeek = function () {

    const dayInMilliseconds = 86400000;
    const firstOfJan = new Date(this.getFullYear(), 0, 1, 0, 0, 0);
    const firstOfJanDay = (firstOfJan.getDay() == 0) ? 7 : firstOfJan.getDay();
    const daysForNextMonday = (8 - firstOfJanDay);
    const firstOfJanNextMondayTime = firstOfJan.getTime() + (daysForNextMonday * dayInMilliseconds);
    const firstMondayOfYearTime = (firstOfJanDay > 1) ? firstOfJanNextMondayTime : firstOfJan.getTime();
    const newDate = new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0);
    const time = newDate.getTime();
    const daysFromFirstMonday = Math.round(((time - firstMondayOfYearTime) / dayInMilliseconds));

    return (daysFromFirstMonday >= 0 && daysFromFirstMonday < 364) ? Math.ceil((daysFromFirstMonday + 1) / 7) : 52;
};

class Templates {

    static displayProject(project) {
        if (Navigation.currentProject == project) return;
        this.#removeProjectInformation();
        setTimeout(() => {
            ProjectInformation.displayProjectInfo(project);
            TaskInformation.displayAllTasks(project.tasks);
        }, 150);
    }

    static #sortTasks(arr) {
        arr.sort((task1, task2) => new Date(task1.dueDate) - new Date(task2.dueDate));
    }

    static displayInboxTasks(projects) {
        Templates.#removeProjectInformation();

        setTimeout(() => {
            TaskInformation.displayFilterHeaders("Inbox");

            Navigation.currentProject = null;

            const inboxTasks = [];

            for (let i = 0; i < projects.length; i++) {
                const project = projects[i];

                const inboxProjectTasks = project.tasks.filter((task) => {
                    console.log(task);
                    return task.complete == false;
                });


                inboxProjectTasks.map((task) => inboxTasks.push(task));
            }


            Templates.#sortTasks(inboxTasks);

            inboxTasks.map((task) => this.displayTask(task));
        }, 150);
    }

    static displayTodayTasks(projects) {
        Templates.#removeProjectInformation();
        setTimeout(() => {
            TaskInformation.displayFilterHeaders("Today");

            Navigation.currentProject = null;

            const todayTasks = [];
            for (let i = 0; i < projects.length; i++) {
                const project = projects[i];
                const dateObj = new Date();


                let date = dateObj.getDate();
                let month = dateObj.getMonth() + 1;
                if (date < 10) date = `0${date}`;
                if (month < 10) month = `0${month}`;
                const todayProjectTasks = project.tasks.filter((task) => {
                    return task.dueDate == `${dateObj.getFullYear()}-${month}-${date}`;
                });

                console.log(todayProjectTasks);

                todayProjectTasks.map((task) => todayTasks.push(task));

            }

            todayTasks.map((task) => this.displayTask(task));
        }, 150);
    }

    static displayThisWeekTasks(projects) {
        Templates.#removeProjectInformation();

        setTimeout(() => {
            TaskInformation.displayFilterHeaders("This Week");

            Navigation.currentProject = null;

            const thisWeekTasks = [];
            for (let i = 0; i < projects.length; i++) {
                const project = projects[i];
                const dateObj = new Date();

                const thisWeekProjectTasks = project.tasks.filter((task) => {
                    return new Date(task.dueDate).getWeek() == dateObj.getWeek() && new Date(task.dueDate).getFullYear() == dateObj.getFullYear();
                });


                thisWeekProjectTasks.map((task) => thisWeekTasks.push(task));
            }

            Templates.#sortTasks(thisWeekTasks);
            thisWeekTasks.map((task) => this.displayTask(task));
        }, 150);
    }

    static displayTask(task) {
        TaskInformation.addTaskElement(task);
    }

    static FadeElement(fadeIn, element) {
        if (fadeIn) {
            element.style.opacity = 1;
        } else {
            element.style.opacity = 0;
        }
    }

    static #removeProjectInformation() {
        this.FadeElement(false, document.querySelector(".project-task-container"));
        setTimeout(() => {
            const projectTasksTable = document.getElementById("project_tasks_area");
            if (document.getElementById("add_task_button")) {
                document.getElementById("add_task_button").remove();
            }
            if (document.getElementById("project_task_header_container")) {
                document.getElementById("project_task_header_container").remove();
            }
            projectTasksTable.innerHTML = "";
        }, 150);
    }

}

class Navigation extends Templates {
    static #sideBar = document.getElementById("project_tab_container");

    static inboxTasksButton = document.getElementById("inbox");
    static todaysTasksButton = document.getElementById("today");
    static addProjectButton = document.getElementById("add_project_button");
    static thisWeeksTasksButton = document.getElementById("this_week");

    static #projectButtons = [];

    static #projectShown;

    static get currentProject() {
        return this.#projectShown;
    };
    static set currentProject(project) {
        this.#projectShown = project;
    }

    static createProjectButton(project) {
        const projectTab = document.createElement("button");
        projectTab.textContent = project.name;
        projectTab.id = "project_tab";

        projectTab.addEventListener("mouseup", () => {
            if (this.currentProject != project) {
                Templates.displayProject(project);
                this.currentProject = project;
            }
        });

        this.#sideBar.appendChild(projectTab);
        this.#projectButtons.push({ project: project, element: projectTab });
    }

    static deleteProjectButton(project) {
        for (let i = 0; i < this.#projectButtons.length; i++) {
            if (this.#projectButtons[i].project == project) {
                this.#projectButtons[i].element.remove();
                this.#projectButtons.splice(i, 1);
                console.log(`Removed Project Button: ${project.name}`);
            }
        }
    }

}

class Information extends Templates { }

class ProjectInformation extends Information {

    static displayProjectInfo(project) {
        return this.#privateDisplayProjectInfo(project);
    }


    static #privateDisplayProjectInfo(project) {
        this.FadeElement(true, document.querySelector(".project-task-container"));
        const container = document.querySelector(".project-task-container");

        const header_container = document.createElement("div");
        header_container.classList.add("project-task-header-container");
        header_container.id = "project_task_header_container";

        const title = document.createElement("div");
        const divider = document.createElement("div");
        const description = document.createElement("div");

        title.classList.add("title");
        divider.classList.add("divider");
        description.classList.add("description");

        title.textContent = project.name.toUpperCase();
        description.textContent = project.description;

        header_container.append(title, divider, description);

        container.insertBefore(header_container, container.firstChild);

        this.#addTaskButton();
    }

    static #addTaskButton() {
        const container = document.getElementById("project_task_header_container");

        const button_container = document.createElement("div");
        const button = document.createElement("button");
        const button_text = document.createElement("div");
        const divider = document.createElement("div");

        button_text.textContent = "Add Task";

        button.id = "add_task_button";
        button_container.classList.add("add-task-button-container");
        button.classList.add("task-button", "add-task");
        button_text.classList.add("add-task-text", "task-button-name");
        divider.classList.add("divider");



        button.addEventListener("mouseup", () => {
            AddTaskForm.toggleForm();
        });

        button_container.appendChild(button);
        button_container.appendChild(divider);

        button.appendChild(button_text);

        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(button, _white_plus_box_png__WEBPACK_IMPORTED_MODULE_1__, "add-task-img");
        container.append(button_container);
    }
}

class TaskInformation extends Information {

    static #container = document.getElementById("project_tasks_area");


    static addTaskElement(task) {
        const task_content = document.createElement("div");
        const left_side = document.createElement("div");
        const right_side = document.createElement("div");
        const check_mark = document.createElement("button");
        const task_name = document.createElement("div");
        const due_date = document.createElement("div");
        const option_container = document.createElement("div");
        const edit = document.createElement("button");
        const information = document.createElement("button");
        const del = document.createElement("button");

        task_name.textContent = task.title.toUpperCase();
        due_date.textContent = task.dueDate;

        task_content.classList.add("task");

        left_side.classList.add("left-side");
        right_side.classList.add("right-side");

        check_mark.classList.add("checkMark", task.difficulty);
        task_name.classList.add("name");
        due_date.classList.add("due-date");

        option_container.classList.add("option-container");

        edit.id = "task_option_1";
        information.id = "task_option_2";
        del.id = "task_option_3";

        if (task.complete == true) {
            check_mark.classList.add(task.difficulty.toLowerCase());
            check_mark.classList.add(`${task.difficulty.toLowerCase()}-complete`);
            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(check_mark, _white_check_png__WEBPACK_IMPORTED_MODULE_5__, "");
        } else {
            check_mark.classList.add(task.difficulty.toLowerCase());
        }

        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(edit, _dark_blue_notebook_edit_outline_png__WEBPACK_IMPORTED_MODULE_2__, "");
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(information, _dark_blue_information_outline_png__WEBPACK_IMPORTED_MODULE_3__, "");
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(del, _dark_blue_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_4__, "");

        this.#container.append(task_content);
        task_content.append(left_side);
        task_content.append(right_side);
        left_side.append(check_mark);
        left_side.append(task_name);
        right_side.append(due_date);
        right_side.append(option_container);
        option_container.append(edit);
        option_container.append(information);
        option_container.append(del);

        let debounce = false;

        check_mark.addEventListener("mouseup", () => {
            if (!debounce) {
                debounce = true;
                this.#checkMarkLogic(task, check_mark);
                setTimeout(() => {
                    debounce = false;
                }, 150);
            }
        });

        edit.addEventListener("mouseup", () => this.#displayTaskEdit(task, task_content));
        information.addEventListener("mouseup", () => this.#displayTaskInfo(task));
        del.addEventListener("mouseup", () => this.#deleteTaskElement(task, task_content));

    }

    static displayFilterHeaders(filterName) {
        const container = document.querySelector(".project-task-container");
        this.FadeElement(true, container);
        const header_container = document.createElement("div");
        header_container.classList.add("project-task-header-container");
        header_container.id = "project_task_header_container";

        const title = document.createElement("div");
        const divider = document.createElement("div");

        title.classList.add("title");
        divider.classList.add("divider");

        title.textContent = filterName.toUpperCase();

        header_container.append(title, divider);

        container.insertBefore(header_container, container.firstChild);
    }

    static #privateEditTaskElement(task, element) {
        const name = element.querySelector('.left-side .name');
        const dueDate = element.querySelector('.right-side .due-date');
        const checkMark = element.querySelector('.left-side .checkMark');
        name.textContent = task.title.toUpperCase();
        dueDate.textContent = task.dueDate;

        checkMark.replaceChildren();
        if (checkMark.classList.contains(`easy`)) {
            checkMark.classList.remove("easy");
            if (checkMark.classList.contains("easy-complete")) {
                checkMark.classList.remove("easy-complete");
            }
        } else if (checkMark.classList.contains("medium")) {
            checkMark.classList.remove("medium");
            if (checkMark.classList.contains("medium-complete")) {
                checkMark.classList.remove("medium-complete");
            }
        } else if (checkMark.classList.contains("hard")) {
            checkMark.classList.remove("hard");
            if (checkMark.classList.contains("hard-complete")) {
                checkMark.classList.remove("hard-complete");
            }
        }

        if (task.complete == true) {
            checkMark.classList.add(task.difficulty.toLowerCase());
            checkMark.classList.add(`${task.difficulty.toLowerCase()}-complete`);
        } else {
            checkMark.classList.add(task.difficulty.toLowerCase());;
        }

    }

    static editTaskElement(task, element) {
        return this.#privateEditTaskElement(task, element);
    }

    static displayAllTasks(tasks) {
        return this.#privateDisplayAllTasks(tasks);
    }

    static #privateDisplayAllTasks(tasks) {
        for (let i = 0; i < tasks.length; i++) {
            this.addTaskElement(tasks[i]);
        }
    }

    static #deleteTaskElement(task, element) {
        const project = Navigation.currentProject;
        Templates.FadeElement(false, element);
        setTimeout(() => {
            project.removeTask(task);
            element.remove();
        }, 150);
    }

    static #displayTaskEdit(task, element) {
        EditTaskForm.setEdit(task, element);
    }



    static #displayTaskInfo(task) {
        task.infoTask();
    }

    static #checkMarkLogic(task, element) {
        if (task.complete == true) {
            task.complete = false;
            //Navigation.FadeElement(false, element);
            element.style.background = `transparent`;
            element.firstChild.style.opacity = 0;
            setTimeout(() => {
                console.log("Complete now false:", task);
                element.replaceChildren();
                if (element.classList.contains(`${task.difficulty.toLowerCase()}-complete`)) {
                    element.classList.remove(`${task.difficulty.toLowerCase()}-complete`);
                    if (!element.classList.contains(task.difficulty.toLowerCase())) {
                        element.classList.add(task.difficulty.toLowerCase());
                    }
                }
            }, 150);
        } else {
            task.complete = true;
            console.log("Complete now true:", task);
            element.classList.add(`${task.difficulty.toLowerCase()}-complete`);
            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element, _white_check_png__WEBPACK_IMPORTED_MODULE_5__, "");
            element.removeAttribute("style");
            element.firstChild.style.opacity = 1;
        }
    }

}

class Form extends Templates {

    static #formValidationMethod(form, nameField, descriptionField, dueDateField, difficultyField) {

        if (form && form.checkValidity() == false) {
            if (nameField && nameField.value == "") {
                nameField.classList.add("invalid");
            }
            if (descriptionField && descriptionField.value == "") {
                descriptionField.classList.add("invalid");
            }
            if (dueDateField && dueDateField.value == "") {
                dueDateField.classList.add("invalid");
            }
            if (difficultyField && difficultyField.selectedIndex == 0) {
                difficultyField.classList.add("invalid");
            }
            return false;
        }

        else {
            return true;
        }
    }




    static #privateSubmitForm(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
            console.log("Form submission prevented!");
        }
    }

    static submitForm(event) {
        console.log("Submit event triggered!");
        this.#privateSubmitForm(event);
    }



    static formValidation(form, nameField, descriptionField, dueDateField, difficultyField) {
        return this.#formValidationMethod(form, nameField, descriptionField, dueDateField, difficultyField);
    }

    static #formResetFields(nameField, descriptionField, dueDateField, difficultyField) {
        if (nameField) nameField.value = "";
        if (descriptionField) descriptionField.value = "";
        if (dueDateField) dueDateField.value = "";
        if (difficultyField) difficultyField.selectedIndex = 0;
    }

    static resetFields(nameField, descriptionField, dueDateField, difficultyField) {
        return this.#formResetFields(nameField, descriptionField, dueDateField, difficultyField);
    }

}

class AddProjectForm {

    static #closeButton = document.getElementById("add_project_close_button");

    static #modal = document.getElementById("add_project_modal");
    static #form = document.getElementById("add_project_modal").getElementsByClassName("modal-container")[0].getElementsByTagName("form")[0];

    static #nameField = document.getElementById("add_project_name");
    static #descriptionField = document.getElementById("add_project_description");

    static openForm() {
        return this.#toggleForm();
    }

    static #addProject(event) {
        event.preventDefault();
        event.stopPropagation();
        __webpack_require__.e(/*! import() */ "src_todo_js").then(__webpack_require__.bind(__webpack_require__, /*! ./todo.js */ "./src/todo.js")) // Adjust the path to where your Project class is located
            .then((module) => {
                // Once the module is loaded, you can create a new Project
                const Project = module.Project;  // Access Project from the imported module
                console.log(AddProjectForm.#nameField.value, AddProjectForm.#descriptionField.value);
                const newProject = new Project(AddProjectForm.#nameField.value, AddProjectForm.#descriptionField.value); // Create a new project instance
                console.log('New project created:', newProject.name);
                AddProjectForm.#toggleForm();
            })
            .catch((error) => {
                console.error('Failed to load Project class:', error);
            });
    }

    static #toggleForm() {
        if (!AddProjectForm.#modal.open) {
            AddProjectForm.#modal.open = true;
            AddProjectForm.#modal.style.opacity = 0;
            setTimeout(() => {

                Navigation.FadeElement(true, AddProjectForm.#modal);
            }, 10);
            AddProjectForm.#form.addEventListener("submit", AddProjectForm.#addProject);
            AddProjectForm.#closeButton.addEventListener("mouseup", AddProjectForm.#toggleForm);
        } else {
            Navigation.FadeElement(false, AddProjectForm.#modal);
            AddProjectForm.#form.removeEventListener("submit", AddProjectForm.#addProject);
            AddProjectForm.#closeButton.removeEventListener("mouseup", AddProjectForm.#toggleForm);
            setTimeout(() => {
                Form.resetFields(AddProjectForm.#nameField, AddProjectForm.#descriptionField);
                AddProjectForm.#modal.open = false;
            }, 150);
        }
    }
}


class AddTaskForm extends Form {
    static #modal = document.getElementById("add_task_modal");

    static #form = document.getElementById("add_task_modal").getElementsByClassName("modal-container")[0].getElementsByTagName("form")[0];

    static #closeButton = document.getElementById("add_task_close_button");

    static #nameField = document.getElementById("add_task_name");
    static #descriptionField = document.getElementById("add_task_description");
    static #dueDateField = document.getElementById("add_task_due_date");
    static #difficultyField = document.getElementById("add_task_difficulty");

    //static #addButton = document.getElementById("add_task_button_save");

    static Validation() {
        return Form.formValidation(this.#form, this.#nameField, this.#descriptionField, this.#dueDateField, this.#difficultyField);
    }

    static toggleForm() {
        //return this.#privateToggleForm();
        //Form.resetFields(AddTaskForm.#nameField, AddTaskForm.#descriptionField, AddTaskForm.#dueDateField, AddTaskForm.#difficultyField);
        if (!AddTaskForm.#modal.open) {
            AddTaskForm.#modal.open = true;
            AddTaskForm.#modal.style.opacity = 0;
            setTimeout(() => {
                Navigation.FadeElement(true, AddTaskForm.#modal);
            }, 10);
            AddTaskForm.#form.addEventListener("submit", AddTaskForm.#addTask);
            AddTaskForm.#closeButton.addEventListener("mouseup", AddTaskForm.toggleForm);
        } else {
            Navigation.FadeElement(false, AddTaskForm.#modal);
            AddTaskForm.#form.removeEventListener("submit", AddTaskForm.#addTask);
            AddTaskForm.#closeButton.removeEventListener("mouseup", AddTaskForm.toggleForm);
            setTimeout(() => {
                Form.resetFields(AddTaskForm.#nameField, AddTaskForm.#descriptionField);
                AddTaskForm.#modal.open = false;
            }, 150);
        }
    }

    static #addTask(event) {
        event.preventDefault();
        event.stopPropagation();
        Navigation.currentProject.addTask(AddTaskForm.#nameField.value, AddTaskForm.#descriptionField.value, AddTaskForm.#dueDateField.value, AddTaskForm.#difficultyField.options[AddTaskForm.#difficultyField.selectedIndex].text);
        AddTaskForm.toggleForm();
    }

    // static #privateToggleForm() {

    // }

}

class EditTaskForm extends Form {
    static #modal = document.getElementById("edit_task_modal");

    static #form = document.getElementById("edit_task_modal").getElementsByClassName("modal-container")[0].getElementsByTagName("form")[0];

    static #closeButton = document.getElementById("edit_task_close_button");

    static #nameField = document.getElementById("edit_task_name");
    static #descriptionField = document.getElementById("edit_task_description");
    static #dueDateField = document.getElementById("edit_task_due_date");
    static #difficultyField = document.getElementById("edit_task_difficulty");

    //static #saveButton = document.getElementById("edit_task_button_save");

    static #editTaskHandler = null;

    static #editTask(task, element, event) {
        event.preventDefault();
        event.stopPropagation();
        task.editTask(EditTaskForm.#nameField.value, EditTaskForm.#descriptionField.value, EditTaskForm.#dueDateField.value, EditTaskForm.#difficultyField.options[EditTaskForm.#difficultyField.selectedIndex].text);
        TaskInformation.editTaskElement(task, element);
        EditTaskForm.#toggleForm(task, element);
    }

    static setEdit(task, element) {
        this.#toggleForm(task, element);
        EditTaskForm.#nameField.value = task.title;
        EditTaskForm.#descriptionField.value = task.description;
        EditTaskForm.#dueDateField.value = task.dueDate;
        EditTaskForm.#difficultyField.selectedIndex = this.#checkDifficultyIndex(task.difficulty);
    }

    static Validation() {
        return Form.formValidation(this.#form, this.#nameField, this.#descriptionField, this.#dueDateField, this.#difficultyField);
    }

    static #checkDifficultyIndex(difficulty) {
        for (let i = 0; i < this.#difficultyField.options.length; i++) {
            if (this.#difficultyField.options[i].text == difficulty) {
                return i;
            }
        }
    }

    static #toggleForm(task, element) {
        //Form.resetFields(EditTaskForm.#nameField, EditTaskForm.#descriptionField, EditTaskForm.#dueDateField, EditTaskForm.#difficultyField);
        if (!EditTaskForm.#modal.open) {
            EditTaskForm.#modal.open = true;
            EditTaskForm.#modal.style.opacity = 0;
            setTimeout(() => {
                Navigation.FadeElement(true, EditTaskForm.#modal);
            }, 10);
            EditTaskForm.#editTaskHandler = EditTaskForm.#editTask.bind(this, task, element);
            EditTaskForm.#form.addEventListener("submit", EditTaskForm.#editTaskHandler);
            EditTaskForm.#closeButton.addEventListener("mouseup", EditTaskForm.#toggleForm);
        } else {
            Navigation.FadeElement(false, EditTaskForm.#modal);
            EditTaskForm.#form.removeEventListener("submit", EditTaskForm.#editTaskHandler);
            EditTaskForm.#closeButton.removeEventListener("mouseup", EditTaskForm.#toggleForm);
            setTimeout(() => {
                Form.resetFields(EditTaskForm.#nameField, EditTaskForm.#descriptionField, EditTaskForm.#dueDateField, EditTaskForm.#difficultyField);
                EditTaskForm.#modal.open = false;
            }, 150);
        }
    }

}

class InfoTaskForm extends Form {
    static #modal = document.getElementById("info_task_modal");

    static #closeButton = document.getElementById("info_task_close_button");

    static #nameField = document.getElementById("info_task_name");
    static #descriptionField = document.getElementById("info_task_description");
    static #dueDateField = document.getElementById("info_task_due_date");
    static #difficultyField = document.getElementById("info_task_difficulty");

    static setInfo(task) {
        console.log(task);
        InfoTaskForm.#toggleForm();
        InfoTaskForm.#nameField.value = task.title;
        InfoTaskForm.#descriptionField.value = task.description;
        InfoTaskForm.#dueDateField.value = task.dueDate;
        InfoTaskForm.#difficultyField.value = task.difficulty;
    }

    static #toggleForm() {
        if (!this.#modal.open) {
            this.#modal.open = true;
            this.#modal.style.opacity = 0;
            setTimeout(() => {
                Navigation.FadeElement(true, this.#modal);
            }, 10);
            this.#closeButton.addEventListener("mouseup", () => this.#toggleForm(), { once: true });
        } else {
            Navigation.FadeElement(false, this.#modal);
            setTimeout(() => {
                Form.resetFields(this.#nameField, this.#descriptionField, this.#dueDateField, this.#difficultyField);
                this.#modal.open = false;
            }, 150);
        };
    }

}



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

/***/ "./src/white-check.png":
/*!*****************************!*\
  !*** ./src/white-check.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c587fc2aa4ea1f89852.png";

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

/***/ "./src/white-plus-box.png":
/*!********************************!*\
  !*** ./src/white-plus-box.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32b0e1a57e50476572d2.png";

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dom.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdGQUF3RixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksT0FBTyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxZQUFZLE9BQU8sUUFBUSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQVEsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxRQUFRLFlBQVksYUFBYSxTQUFTLFFBQVEsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxN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Q0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMENBQTBDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLHNGQUFzRixZQUFZO0FBQ2xHLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM3RCc0I7QUFDVTtBQUNTO0FBQ0U7QUFDTjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUM2QztBQUNLO0FBQ1Q7QUFDd0I7QUFDRjtBQUNRO0FBQ0w7QUFDbEU7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsdUNBQUs7QUFDakUsNERBQTRELGdEQUFLO0FBQ2pFLDREQUE0RCwrQ0FBUTtBQUNwRSw0REFBNEQsMENBQU87QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsaURBQWE7QUFDM0UsNkRBQTZELDRDQUFTO0FBQ3RFLGtFQUFrRSw4Q0FBVztBQUM3RSwwREFBMEQsNENBQVM7QUFDbkUsK0RBQStELDZEQUFnQjtBQUMvRSwyREFBMkQsaURBQWE7QUFDeEU7QUFDQSw0REFBNEQsaURBQWE7QUFDekUsZ0VBQWdFLDJEQUFnQjtBQUNoRjtBQUNBLDJEQUEyRCxpRUFBbUI7QUFDOUUsZ0VBQWdFLDhEQUFpQjtBQUNqRiw0REFBNEQsaURBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0N6RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0LXJlYWR5LXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9naXQtcmVhZHktdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ2l0LXJlYWR5LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9naXQtcmVhZHktdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ2l0LXJlYWR5LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2l0LXJlYWR5LXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFJlc2V0IGRlZmF1bHQgYnJvd3NlciBzdHlsZXMgKi9cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XHJcbn1cclxuXHJcbi5uby10cmFuc2l0aW9uICoge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIE1ha2UgaHRtbCBhbmQgYm9keSB0YWtlIHVwIHRoZSBmdWxsIGhlaWdodCAqL1xyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiBVc2UgZmxleGJveCBvbiB0aGUgYm9keSB0byBjZW50ZXIgY29udGVudCAqL1xyXG5ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5idXR0b24sXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXHJcbmlucHV0W3R5cGU9XCJyZXNldFwiXSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IGluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4ubWFpbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAxNDVCO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBwYWRkaW5nOiAyMHB4IDM3cHg7XHJcbiAgICBmb250LXNpemU6IDIuMjVyZW07XHJcbn1cclxuXHJcbmhlYWRlcj4udGl0bGUge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5uYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxNy41JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMzM2cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjRUJFQkVCO1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnRhc2stYnV0dG9ucy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDM3JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZ2FwOiAzNHB4O1xyXG4gICAgcGFkZGluZzogMCA0M3B4O1xyXG59XHJcblxyXG4udGFzay1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE5cHg7XHJcbiAgICBwYWRkaW5nOiAxMS41cHggMjIuNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBnYXA6IDEzLjVweDtcclxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xyXG59XHJcblxyXG4udGFzay1idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzE0NDRFRTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4udGFzay1idXR0b24tbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzU4NTg1ODtcclxufVxyXG5cclxuLnRhc2stYnV0dG9uOmhvdmVyIC5pbmJveCB7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxJSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMTQ4ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDEwMCUpO1xyXG5cclxufVxyXG5cclxuLnRhc2stYnV0dG9uOmhvdmVyIC50b2RheSB7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxJSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMTQ4ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDEwMCUpO1xyXG5cclxufVxyXG5cclxuLnRhc2stYnV0dG9uOmhvdmVyIC50aGlzLXdlZWsge1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMSUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDE0OGRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCgxMDAlKTtcclxuXHJcbn1cclxuXHJcbi50YXNrLWJ1dHRvbjpob3ZlciAuYWRkLXByb2plY3Qge1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMSUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDE0OGRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCgxMDAlKTtcclxuXHJcbn1cclxuXHJcbi50YXNrLWJ1dHRvbjpob3ZlciAudGFzay1idXR0b24tbmFtZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmluYm94IHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL2luYm94LnBuZycpOyAqL1xyXG59XHJcblxyXG4udG9kYXkge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy4vY2FsZW5kYXItdG9kYXkucG5nJyk7ICovXHJcbn1cclxuXHJcbi50aGlzLXdlZWsge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy4vY2FsZW5kYXItdG9kYXkucG5nJyk7ICovXHJcbn1cclxuXHJcbi5wcm9qZWN0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogNjMlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIGdhcDogMzFweDtcclxufVxyXG5cclxuLnByb2plY3QtY29udGFpbmVyLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogN3B4O1xyXG4gICAgcGFkZGluZzogMCAyNnB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1jb250YWluZXItaGVhZGVyPi50aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMDAxNDVCO1xyXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1jb250YWluZXItaGVhZGVyPi5kaXZpZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMjBweDtcclxufVxyXG5cclxuLmFkZC1wcm9qZWN0LFxyXG4uYWRkLXRhc2staW1nIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL3BsdXMtYm94LnBuZycpOyAqL1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDQzcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRhYnMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMCA0MXB4O1xyXG4gICAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4jcHJvamVjdF90YWIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAxNDVCO1xyXG4gICAgcGFkZGluZzogMTBweCAxOS41cHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcclxufVxyXG5cclxuI3Byb2plY3RfdGFiOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwOTk4RkY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcclxufVxyXG5cclxuLnByb2plY3QtdGFzay1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiA2N3B4IDM0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjE1MHM7XHJcbn1cclxuXHJcbi5hZGQtdGFzay1idXR0b24tY29udGFpbmVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbn1cclxuXHJcbi5hZGQtdGFzayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAxNDVCO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2LjVweDtcclxuICAgIGdhcDogMThweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xyXG59XHJcblxyXG4uYWRkLXRhc2s6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzE0NDRFRTtcclxufVxyXG5cclxuLmFkZC10YXNrLXRleHQge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRhc2staGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbn1cclxuXHJcbi5wcm9qZWN0LXRhc2staGVhZGVyLWNvbnRhaW5lcj4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgY29sb3I6ICMwMDE0NUI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ucHJvamVjdC10YXNrLWhlYWRlci1jb250YWluZXI+LmRpdmlkZXIge1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG5cclxuLnByb2plY3QtdGFzay1oZWFkZXItY29udGFpbmVyPi5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDhweCAwIDAgMDtcclxufVxyXG5cclxuLmFkZC10YXNrLWJ1dHRvbi1jb250YWluZXI+LmRpdmlkZXIge1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0I3QjdCNztcclxufVxyXG5cclxuLnByb2plY3QtdGFza3MtYXJlYSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE1cHg7XHJcbn1cclxuXHJcbi50YXNrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxuICAgIGJvcmRlcjogI0QyRDJEMiBzb2xpZCAxcHg7XHJcbiAgICBwYWRkaW5nOiAyM3B4IDE3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XHJcbn1cclxuXHJcbi50YXNrPi5sZWZ0LXNpZGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDU3cHg7XHJcbn1cclxuXHJcbi50YXNrPi5yaWdodC1zaWRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4udGFzaz4ucmlnaHQtc2lkZT4ub3B0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG59XHJcblxyXG4udGFzaz4ucmlnaHQtc2lkZT4ub3B0aW9uLWNvbnRhaW5lcj5idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDI3LjhweDtcclxuICAgIHdpZHRoOiAyNy44cHg7XHJcbn1cclxuXHJcbi50YXNrPi5yaWdodC1zaWRlPi5vcHRpb24tY29udGFpbmVyPmJ1dHRvbj5pbWcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMjcuOHB4O1xyXG4gICAgd2lkdGg6IDI3LjhweDtcclxufVxyXG5cclxuLnRhc2s+LmxlZnQtc2lkZT4uY2hlY2tNYXJrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIHdpZHRoOiAzMXB4O1xyXG4gICAgaGVpZ2h0OiAzMXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XHJcbn1cclxuXHJcbi50YXNrPi5sZWZ0LXNpZGU+LmNoZWNrTWFyaz5pbWcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XHJcbn1cclxuXHJcbi5lYXN5IHtcclxuICAgIGJvcmRlcjogIzE0RkYwMCBzb2xpZCAzcHg7XHJcbn1cclxuXHJcbi5tZWRpdW0ge1xyXG4gICAgYm9yZGVyOiAjRkY2QjAwIHNvbGlkIDNweDtcclxufVxyXG5cclxuLmhhcmQge1xyXG4gICAgYm9yZGVyOiAjRkYwMDAwIHNvbGlkIDNweDtcclxufVxyXG5cclxuLmVhc3ktY29tcGxldGUge1xyXG4gICAgYmFja2dyb3VuZDogIzZERkY2MDtcclxufVxyXG5cclxuLm1lZGl1bS1jb21wbGV0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY4NjJFO1xyXG59XHJcblxyXG4uaGFyZC1jb21wbGV0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkUzMDMwO1xyXG59XHJcblxyXG4udGFzaz4ubGVmdC1zaWRlPi5uYW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRhc2s+LnJpZ2h0LXNpZGU+LmR1ZS1kYXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbiN0YXNrX29wdGlvbl8xLFxyXG4jdGFza19vcHRpb25fMixcclxuI3Rhc2tfb3B0aW9uXzMge1xyXG4gICAgZmlsdGVyOiBub25lO1xyXG59XHJcblxyXG4jdGFza19vcHRpb25fMTpob3ZlcixcclxuI3Rhc2tfb3B0aW9uXzI6aG92ZXIsXHJcbiN0YXNrX29wdGlvbl8zOmhvdmVyIHtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDUwJSkgc2VwaWEoOTglKSBzYXR1cmF0ZSg3MDAwJSkgaHVlLXJvdGF0ZSgxODBkZWcpIGJyaWdodG5lc3MoMTUwJSk7XHJcbn1cclxuXHJcbiNhZGRfcHJvamVjdF9tb2RhbCxcclxuI2FkZF90YXNrX21vZGFsLFxyXG4jaW5mb190YXNrX21vZGFsLFxyXG4jZWRpdF90YXNrX21vZGFsIHtcclxuICAgIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgLyogU2l0IG9uIHRvcCAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xyXG59XHJcblxyXG4jYWRkX3Byb2plY3RfbW9kYWw+Lm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDUyMS42NnB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmludmFsaWQge1xyXG4gICAgYm9yZGVyOiAjRkY4RThFIHNvbGlkIDJweDtcclxufVxyXG5cclxuLmFkZC1wcm9qZWN0LW5hdixcclxuLmFkZC10YXNrLW5hdixcclxuLmluZm8tdGFzay1uYXYsXHJcbi5lZGl0LXRhc2stbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAxNDVCO1xyXG4gICAgcGFkZGluZzogMTJweCAxOHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uaGVhZGluZy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDE3LjI1cHg7XHJcbn1cclxuXHJcbi5oZWFkaW5nLWNvbnRhaW5lcj5pbWcge1xyXG4gICAgd2lkdGg6IDYxLjIxcHg7XHJcbiAgICBoZWlnaHQ6IDYxLjIxcHg7XHJcbn1cclxuXHJcbi5oZWFkaW5nLWNvbnRhaW5lcj5oZWFkZXIge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4jYWRkX3Byb2plY3RfY2xvc2VfYnV0dG9uLFxyXG4jYWRkX3Rhc2tfY2xvc2VfYnV0dG9uLFxyXG4jaW5mb190YXNrX2Nsb3NlX2J1dHRvbixcclxuI2VkaXRfdGFza19jbG9zZV9idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xyXG5cclxufVxyXG5cclxuI2FkZF9wcm9qZWN0X2Nsb3NlX2J1dHRvbjpob3ZlcixcclxuI2FkZF90YXNrX2Nsb3NlX2J1dHRvbjpob3ZlcixcclxuI2luZm9fdGFza19jbG9zZV9idXR0b246aG92ZXIsXHJcbiNlZGl0X3Rhc2tfY2xvc2VfYnV0dG9uOmhvdmVyIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoMzMlKSBzZXBpYSg5MCUpIHNhdHVyYXRlKDYwMCUpIGh1ZS1yb3RhdGUoMjAwZGVnKTtcclxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xyXG59XHJcblxyXG5cclxuXHJcbiNhZGRfcHJvamVjdF9jbG9zZV9idXR0b24+aW1nLFxyXG4jYWRkX3Rhc2tfY2xvc2VfYnV0dG9uPmltZyxcclxuI2luZm9fdGFza19jbG9zZV9idXR0b24+aW1nLFxyXG4jZWRpdF90YXNrX2Nsb3NlX2J1dHRvbj5pbWcge1xyXG4gICAgd2lkdGg6IDQyLjE3cHg7XHJcbiAgICBoZWlnaHQ6IDQyLjE3cHg7XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZ2FwOiA1cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250YWluZXI+Zm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDM2cHggNTRweDtcclxuICAgIGdhcDogMThweDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogNXB4O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmZpZWxkPmxhYmVsLFxyXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmJvdHRvbS1yb3c+LmZpZWxkPmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2xvcjogIzVCNUI1QjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uZmllbGQ+bGFiZWw+c3BhbixcclxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5ib3R0b20tcm93Pi5maWVsZD5sYWJlbD5zcGFuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uZmllbGQ+aW5wdXQsXHJcbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uZmllbGQ+dGV4dGFyZWEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlcjogI0RDRENEQyBzb2xpZCAycHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNUI1QjVCO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI2FkZF9wcm9qZWN0X2J1dHRvbl9zYXZlLFxyXG4jYWRkX3Rhc2tfYnV0dG9uX3NhdmUsXHJcbiNlZGl0X3Rhc2tfYnV0dG9uX3NhdmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCAxMTNweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDE0NUI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XHJcbn1cclxuXHJcbiNhZGRfcHJvamVjdF9idXR0b25fc2F2ZTpob3ZlcixcclxuI2FkZF90YXNrX2J1dHRvbl9zYXZlOmhvdmVyLFxyXG4jZWRpdF90YXNrX2J1dHRvbl9zYXZlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMxNDQ0RUU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcclxufVxyXG5cclxuI2FkZF9wcm9qZWN0X2J1dHRvbl9zYXZlPmltZyxcclxuI2FkZF90YXNrX2J1dHRvbl9zYXZlPmltZyxcclxuI2VkaXRfdGFza19idXR0b25fc2F2ZT5pbWcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0NS45NnB4O1xyXG4gICAgaGVpZ2h0OiA0NS45NnB4O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2FkZF90YXNrX21vZGFsPi5tb2RhbC1jb250YWluZXIsXHJcbiNpbmZvX3Rhc2tfbW9kYWw+Lm1vZGFsLWNvbnRhaW5lcixcclxuI2VkaXRfdGFza19tb2RhbD4ubW9kYWwtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogNTIxLjY2cHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4jYWRkX3Rhc2tfbW9kYWw+Lm1vZGFsLWNvbnRhaW5lcj5maWVsZHNldD4uYm90dG9tLXJvdyxcclxuI2luZm9fdGFza19tb2RhbD4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmJvdHRvbS1yb3csXHJcbiNlZGl0X3Rhc2tfbW9kYWw+Lm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5ib3R0b20tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5oYWxmIHtcclxuICAgIHBhZGRpbmc6IDExcHggMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAjRENEQ0RDIHNvbGlkIDJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICM1QjVCNUI7XHJcbn1cclxuXHJcbi5ib3R0b20tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDZweDtcclxufVxyXG5cclxuLmJvdHRvbS1yb3c+LmZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2FkZF90YXNrX2J1dHRvbl9zYXZlLFxyXG4jZWRpdF90YXNrX2J1dHRvbl9zYXZlIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlDQUFpQztBQUNqQztJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QiwyQkFBMkI7QUFDL0I7O0FBRUEsK0NBQStDO0FBQy9DOztJQUVJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUEsOENBQThDO0FBQzlDO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7O0lBR0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXOztJQUVYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNY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QWlCO0FBQ3JCOztBQUVBOzs7SUFHSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixTQUFTO0lBQ1QsZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBSZXNldCBkZWZhdWx0IGJyb3dzZXIgc3R5bGVzICovXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxyXFxufVxcclxcblxcclxcbi5uby10cmFuc2l0aW9uICoge1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgLW1vei10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIC1tcy10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIC1vLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWtlIGh0bWwgYW5kIGJvZHkgdGFrZSB1cCB0aGUgZnVsbCBoZWlnaHQgKi9cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBVc2UgZmxleGJveCBvbiB0aGUgYm9keSB0byBjZW50ZXIgY29udGVudCAqL1xcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgb3V0bGluZTogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1haW4taGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAwMTQ1QjtcXHJcXG4gICAgaGVpZ2h0OiAxMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAyMHB4IDM3cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyPi50aXRsZSB7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDE3LjUlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1pbi13aWR0aDogMzM2cHg7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNFQkVCRUI7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYnV0dG9ucy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAzNyU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBnYXA6IDM0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgNDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxOXB4O1xcclxcbiAgICBwYWRkaW5nOiAxMS41cHggMjIuNXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZ2FwOiAxMy41cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMTQ0NEVFO1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYnV0dG9uLW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6ICM1ODU4NTg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWJ1dHRvbjpob3ZlciAuaW5ib3gge1xcclxcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxJSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMTQ4ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDEwMCUpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udGFzay1idXR0b246aG92ZXIgLnRvZGF5IHtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMSUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDE0OGRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCgxMDAlKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYnV0dG9uOmhvdmVyIC50aGlzLXdlZWsge1xcclxcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxJSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMTQ4ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDEwMCUpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udGFzay1idXR0b246aG92ZXIgLmFkZC1wcm9qZWN0IHtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMSUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDE0OGRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCgxMDAlKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYnV0dG9uOmhvdmVyIC50YXNrLWJ1dHRvbi1uYW1lIHtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5pbmJveCB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnLi9pbmJveC5wbmcnKTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5IHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL2NhbGVuZGFyLXRvZGF5LnBuZycpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4udGhpcy13ZWVrIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL2NhbGVuZGFyLXRvZGF5LnBuZycpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IDYzJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgZ2FwOiAzMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250YWluZXItaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA3cHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyLWhlYWRlcj4udGl0bGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBjb2xvcjogIzAwMTQ1QjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250YWluZXItaGVhZGVyPi5kaXZpZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcXHJcXG4gICAgcGFkZGluZzogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdCxcXHJcXG4uYWRkLXRhc2staW1nIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL3BsdXMtYm94LnBuZycpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwIDQzcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRhYnMtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMCA0MXB4O1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0X3RhYiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMDE0NUI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTkuNXB4O1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RfdGFiOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzA5OThGRjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRhc2stY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogNjdweCAzNDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMTUwcztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrLWJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZDogIzAwMTQ1QjtcXHJcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTYuNXB4O1xcclxcbiAgICBnYXA6IDE4cHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIxcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMTQ0NEVFO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2stdGV4dCB7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10YXNrLWhlYWRlci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10YXNrLWhlYWRlci1jb250YWluZXI+LnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICBjb2xvcjogIzAwMTQ1QjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGFzay1oZWFkZXItY29udGFpbmVyPi5kaXZpZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10YXNrLWhlYWRlci1jb250YWluZXI+LmRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XFxyXFxuICAgIGNvbG9yOiAjODA4MDgwO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBwYWRkaW5nOiA4cHggMCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzay1idXR0b24tY29udGFpbmVyPi5kaXZpZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjQjdCN0I3O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10YXNrcy1hcmVhIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcXHJcXG4gICAgYm9yZGVyOiAjRDJEMkQyIHNvbGlkIDFweDtcXHJcXG4gICAgcGFkZGluZzogMjNweCAxN3B4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s+LmxlZnQtc2lkZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s+LnJpZ2h0LXNpZGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrPi5yaWdodC1zaWRlPi5vcHRpb24tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrPi5yaWdodC1zaWRlPi5vcHRpb24tY29udGFpbmVyPmJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMjcuOHB4O1xcclxcbiAgICB3aWR0aDogMjcuOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzaz4ucmlnaHQtc2lkZT4ub3B0aW9uLWNvbnRhaW5lcj5idXR0b24+aW1nIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiAyNy44cHg7XFxyXFxuICAgIHdpZHRoOiAyNy44cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrPi5sZWZ0LXNpZGU+LmNoZWNrTWFyayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcclxcbiAgICB3aWR0aDogMzFweDtcXHJcXG4gICAgaGVpZ2h0OiAzMXB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XFxyXFxufVxcclxcblxcclxcbi50YXNrPi5sZWZ0LXNpZGU+LmNoZWNrTWFyaz5pbWcge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDIycHg7XFxyXFxuICAgIGhlaWdodDogMjJweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XFxyXFxufVxcclxcblxcclxcbi5lYXN5IHtcXHJcXG4gICAgYm9yZGVyOiAjMTRGRjAwIHNvbGlkIDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZGl1bSB7XFxyXFxuICAgIGJvcmRlcjogI0ZGNkIwMCBzb2xpZCAzcHg7XFxyXFxufVxcclxcblxcclxcbi5oYXJkIHtcXHJcXG4gICAgYm9yZGVyOiAjRkYwMDAwIHNvbGlkIDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVhc3ktY29tcGxldGUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNkRGRjYwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVkaXVtLWNvbXBsZXRlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGODYyRTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhcmQtY29tcGxldGUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkUzMDMwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzaz4ubGVmdC1zaWRlPi5uYW1lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sb3I6ICMyMzIzMjM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzaz4ucmlnaHQtc2lkZT4uZHVlLWRhdGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogIzIzMjMyMztcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza19vcHRpb25fMSxcXHJcXG4jdGFza19vcHRpb25fMixcXHJcXG4jdGFza19vcHRpb25fMyB7XFxyXFxuICAgIGZpbHRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tfb3B0aW9uXzE6aG92ZXIsXFxyXFxuI3Rhc2tfb3B0aW9uXzI6aG92ZXIsXFxyXFxuI3Rhc2tfb3B0aW9uXzM6aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGludmVydCg1MCUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoNzAwMCUpIGh1ZS1yb3RhdGUoMTgwZGVnKSBicmlnaHRuZXNzKDE1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkX3Byb2plY3RfbW9kYWwsXFxyXFxuI2FkZF90YXNrX21vZGFsLFxcclxcbiNpbmZvX3Rhc2tfbW9kYWwsXFxyXFxuI2VkaXRfdGFza19tb2RhbCB7XFxyXFxuICAgIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgLyogU3RheSBpbiBwbGFjZSAqL1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICAvKiBTaXQgb24gdG9wICovXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAvKiBGdWxsIHdpZHRoICovXFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgLyogRnVsbCBoZWlnaHQgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gICAgLyogRmFsbGJhY2sgY29sb3IgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxyXFxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkX3Byb2plY3RfbW9kYWw+Lm1vZGFsLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiA1MjEuNjZweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmludmFsaWQge1xcclxcbiAgICBib3JkZXI6ICNGRjhFOEUgc29saWQgMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtbmF2LFxcclxcbi5hZGQtdGFzay1uYXYsXFxyXFxuLmluZm8tdGFzay1uYXYsXFxyXFxuLmVkaXQtdGFzay1uYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMDE0NUI7XFxyXFxuICAgIHBhZGRpbmc6IDEycHggMThweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxNy4yNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZy1jb250YWluZXI+aW1nIHtcXHJcXG4gICAgd2lkdGg6IDYxLjIxcHg7XFxyXFxuICAgIGhlaWdodDogNjEuMjFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmctY29udGFpbmVyPmhlYWRlciB7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbiNhZGRfcHJvamVjdF9jbG9zZV9idXR0b24sXFxyXFxuI2FkZF90YXNrX2Nsb3NlX2J1dHRvbixcXHJcXG4jaW5mb190YXNrX2Nsb3NlX2J1dHRvbixcXHJcXG4jZWRpdF90YXNrX2Nsb3NlX2J1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI2FkZF9wcm9qZWN0X2Nsb3NlX2J1dHRvbjpob3ZlcixcXHJcXG4jYWRkX3Rhc2tfY2xvc2VfYnV0dG9uOmhvdmVyLFxcclxcbiNpbmZvX3Rhc2tfY2xvc2VfYnV0dG9uOmhvdmVyLFxcclxcbiNlZGl0X3Rhc2tfY2xvc2VfYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCgzMyUpIHNlcGlhKDkwJSkgc2F0dXJhdGUoNjAwJSkgaHVlLXJvdGF0ZSgyMDBkZWcpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI2FkZF9wcm9qZWN0X2Nsb3NlX2J1dHRvbj5pbWcsXFxyXFxuI2FkZF90YXNrX2Nsb3NlX2J1dHRvbj5pbWcsXFxyXFxuI2luZm9fdGFza19jbG9zZV9idXR0b24+aW1nLFxcclxcbiNlZGl0X3Rhc2tfY2xvc2VfYnV0dG9uPmltZyB7XFxyXFxuICAgIHdpZHRoOiA0Mi4xN3B4O1xcclxcbiAgICBoZWlnaHQ6IDQyLjE3cHg7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAzNnB4IDU0cHg7XFxyXFxuICAgIGdhcDogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5maWVsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmZpZWxkPmxhYmVsLFxcclxcbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uYm90dG9tLXJvdz4uZmllbGQ+bGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogIzVCNUI1QjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uZmllbGQ+bGFiZWw+c3BhbixcXHJcXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmJvdHRvbS1yb3c+LmZpZWxkPmxhYmVsPnNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogI0ZGMDAwMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmZpZWxkPmlucHV0LFxcclxcbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uZmllbGQ+dGV4dGFyZWEge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBib3JkZXI6ICNEQ0RDREMgc29saWQgMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDE5cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiAjNUI1QjVCO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZF9wcm9qZWN0X2J1dHRvbl9zYXZlLFxcclxcbiNhZGRfdGFza19idXR0b25fc2F2ZSxcXHJcXG4jZWRpdF90YXNrX2J1dHRvbl9zYXZlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMTNweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAwMTQ1QjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XFxyXFxufVxcclxcblxcclxcbiNhZGRfcHJvamVjdF9idXR0b25fc2F2ZTpob3ZlcixcXHJcXG4jYWRkX3Rhc2tfYnV0dG9uX3NhdmU6aG92ZXIsXFxyXFxuI2VkaXRfdGFza19idXR0b25fc2F2ZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMxNDQ0RUU7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkX3Byb2plY3RfYnV0dG9uX3NhdmU+aW1nLFxcclxcbiNhZGRfdGFza19idXR0b25fc2F2ZT5pbWcsXFxyXFxuI2VkaXRfdGFza19idXR0b25fc2F2ZT5pbWcge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQ1Ljk2cHg7XFxyXFxuICAgIGhlaWdodDogNDUuOTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5idXR0b24tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNhZGRfdGFza19tb2RhbD4ubW9kYWwtY29udGFpbmVyLFxcclxcbiNpbmZvX3Rhc2tfbW9kYWw+Lm1vZGFsLWNvbnRhaW5lcixcXHJcXG4jZWRpdF90YXNrX21vZGFsPi5tb2RhbC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogNTIxLjY2cHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcblxcclxcbiNhZGRfdGFza19tb2RhbD4ubW9kYWwtY29udGFpbmVyPmZpZWxkc2V0Pi5ib3R0b20tcm93LFxcclxcbiNpbmZvX3Rhc2tfbW9kYWw+Lm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5ib3R0b20tcm93LFxcclxcbiNlZGl0X3Rhc2tfbW9kYWw+Lm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5ib3R0b20tcm93IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFsZiB7XFxyXFxuICAgIHBhZGRpbmc6IDExcHggMTdweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6ICNEQ0RDREMgc29saWQgMnB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgY29sb3I6ICM1QjVCNUI7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tcm93IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tcm93Pi5maWVsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZF90YXNrX2J1dHRvbl9zYXZlLFxcclxcbiNlZGl0X3Rhc2tfYnV0dG9uX3NhdmUge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFkZEltYWdlIGZyb20gXCIuL2luZGV4LmpzXCI7XHJcbmltcG9ydCBXaGl0ZVBsdXNCb3ggZnJvbSBcIi4vd2hpdGUtcGx1cy1ib3gucG5nXCI7XHJcbmltcG9ydCBEYXJrQmx1ZU5vdGVib29rRWRpdE91dGxpbmUgZnJvbSBcIi4vZGFyay1ibHVlLW5vdGVib29rLWVkaXQtb3V0bGluZS5wbmdcIjtcclxuaW1wb3J0IERhcmtCbHVlSW5mb3JtYXRpb25PdXRsaW5lIGZyb20gXCIuL2RhcmstYmx1ZS1pbmZvcm1hdGlvbi1vdXRsaW5lLnBuZ1wiO1xyXG5pbXBvcnQgRGFya0JsdWVUcmFzaENhbk91dGxpbmUgZnJvbSBcIi4vZGFyay1ibHVlLXRyYXNoLWNhbi1vdXRsaW5lLnBuZ1wiO1xyXG5pbXBvcnQgV2hpdGVDaGVjayBmcm9tIFwiLi93aGl0ZS1jaGVjay5wbmdcIjtcclxuXHJcbi8vaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vdG9kby5qcyc7IC8vIEltcG9ydCB0aGUgUHJvamVjdCBjbGFzcyBmcm9tIHRvZG8uanNcclxuXHJcblxyXG5EYXRlLnByb3RvdHlwZS5nZXRXZWVrID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnN0IGRheUluTWlsbGlzZWNvbmRzID0gODY0MDAwMDA7XHJcbiAgICBjb25zdCBmaXJzdE9mSmFuID0gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCAwLCAxLCAwLCAwLCAwKTtcclxuICAgIGNvbnN0IGZpcnN0T2ZKYW5EYXkgPSAoZmlyc3RPZkphbi5nZXREYXkoKSA9PSAwKSA/IDcgOiBmaXJzdE9mSmFuLmdldERheSgpO1xyXG4gICAgY29uc3QgZGF5c0Zvck5leHRNb25kYXkgPSAoOCAtIGZpcnN0T2ZKYW5EYXkpO1xyXG4gICAgY29uc3QgZmlyc3RPZkphbk5leHRNb25kYXlUaW1lID0gZmlyc3RPZkphbi5nZXRUaW1lKCkgKyAoZGF5c0Zvck5leHRNb25kYXkgKiBkYXlJbk1pbGxpc2Vjb25kcyk7XHJcbiAgICBjb25zdCBmaXJzdE1vbmRheU9mWWVhclRpbWUgPSAoZmlyc3RPZkphbkRheSA+IDEpID8gZmlyc3RPZkphbk5leHRNb25kYXlUaW1lIDogZmlyc3RPZkphbi5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpLCAwLCAwLCAwKTtcclxuICAgIGNvbnN0IHRpbWUgPSBuZXdEYXRlLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IGRheXNGcm9tRmlyc3RNb25kYXkgPSBNYXRoLnJvdW5kKCgodGltZSAtIGZpcnN0TW9uZGF5T2ZZZWFyVGltZSkgLyBkYXlJbk1pbGxpc2Vjb25kcykpO1xyXG5cclxuICAgIHJldHVybiAoZGF5c0Zyb21GaXJzdE1vbmRheSA+PSAwICYmIGRheXNGcm9tRmlyc3RNb25kYXkgPCAzNjQpID8gTWF0aC5jZWlsKChkYXlzRnJvbUZpcnN0TW9uZGF5ICsgMSkgLyA3KSA6IDUyO1xyXG59O1xyXG5cclxuY2xhc3MgVGVtcGxhdGVzIHtcclxuXHJcbiAgICBzdGF0aWMgZGlzcGxheVByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIGlmIChOYXZpZ2F0aW9uLmN1cnJlbnRQcm9qZWN0ID09IHByb2plY3QpIHJldHVybjtcclxuICAgICAgICB0aGlzLiNyZW1vdmVQcm9qZWN0SW5mb3JtYXRpb24oKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgUHJvamVjdEluZm9ybWF0aW9uLmRpc3BsYXlQcm9qZWN0SW5mbyhwcm9qZWN0KTtcclxuICAgICAgICAgICAgVGFza0luZm9ybWF0aW9uLmRpc3BsYXlBbGxUYXNrcyhwcm9qZWN0LnRhc2tzKTtcclxuICAgICAgICB9LCAxNTApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjc29ydFRhc2tzKGFycikge1xyXG4gICAgICAgIGFyci5zb3J0KCh0YXNrMSwgdGFzazIpID0+IG5ldyBEYXRlKHRhc2sxLmR1ZURhdGUpIC0gbmV3IERhdGUodGFzazIuZHVlRGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkaXNwbGF5SW5ib3hUYXNrcyhwcm9qZWN0cykge1xyXG4gICAgICAgIFRlbXBsYXRlcy4jcmVtb3ZlUHJvamVjdEluZm9ybWF0aW9uKCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBUYXNrSW5mb3JtYXRpb24uZGlzcGxheUZpbHRlckhlYWRlcnMoXCJJbmJveFwiKTtcclxuXHJcbiAgICAgICAgICAgIE5hdmlnYXRpb24uY3VycmVudFByb2plY3QgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5ib3hUYXNrcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGluYm94UHJvamVjdFRhc2tzID0gcHJvamVjdC50YXNrcy5maWx0ZXIoKHRhc2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5jb21wbGV0ZSA9PSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpbmJveFByb2plY3RUYXNrcy5tYXAoKHRhc2spID0+IGluYm94VGFza3MucHVzaCh0YXNrKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBUZW1wbGF0ZXMuI3NvcnRUYXNrcyhpbmJveFRhc2tzKTtcclxuXHJcbiAgICAgICAgICAgIGluYm94VGFza3MubWFwKCh0YXNrKSA9PiB0aGlzLmRpc3BsYXlUYXNrKHRhc2spKTtcclxuICAgICAgICB9LCAxNTApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkaXNwbGF5VG9kYXlUYXNrcyhwcm9qZWN0cykge1xyXG4gICAgICAgIFRlbXBsYXRlcy4jcmVtb3ZlUHJvamVjdEluZm9ybWF0aW9uKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIFRhc2tJbmZvcm1hdGlvbi5kaXNwbGF5RmlsdGVySGVhZGVycyhcIlRvZGF5XCIpO1xyXG5cclxuICAgICAgICAgICAgTmF2aWdhdGlvbi5jdXJyZW50UHJvamVjdCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b2RheVRhc2tzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVPYmogPSBuZXcgRGF0ZSgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IGRhdGVPYmouZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vbnRoID0gZGF0ZU9iai5nZXRNb250aCgpICsgMTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRlIDwgMTApIGRhdGUgPSBgMCR7ZGF0ZX1gO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vbnRoIDwgMTApIG1vbnRoID0gYDAke21vbnRofWA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheVByb2plY3RUYXNrcyA9IHByb2plY3QudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2suZHVlRGF0ZSA9PSBgJHtkYXRlT2JqLmdldEZ1bGxZZWFyKCl9LSR7bW9udGh9LSR7ZGF0ZX1gO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9kYXlQcm9qZWN0VGFza3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvZGF5UHJvamVjdFRhc2tzLm1hcCgodGFzaykgPT4gdG9kYXlUYXNrcy5wdXNoKHRhc2spKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRvZGF5VGFza3MubWFwKCh0YXNrKSA9PiB0aGlzLmRpc3BsYXlUYXNrKHRhc2spKTtcclxuICAgICAgICB9LCAxNTApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkaXNwbGF5VGhpc1dlZWtUYXNrcyhwcm9qZWN0cykge1xyXG4gICAgICAgIFRlbXBsYXRlcy4jcmVtb3ZlUHJvamVjdEluZm9ybWF0aW9uKCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBUYXNrSW5mb3JtYXRpb24uZGlzcGxheUZpbHRlckhlYWRlcnMoXCJUaGlzIFdlZWtcIik7XHJcblxyXG4gICAgICAgICAgICBOYXZpZ2F0aW9uLmN1cnJlbnRQcm9qZWN0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRoaXNXZWVrVGFza3MgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZU9iaiA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGhpc1dlZWtQcm9qZWN0VGFza3MgPSBwcm9qZWN0LnRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpLmdldFdlZWsoKSA9PSBkYXRlT2JqLmdldFdlZWsoKSAmJiBuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpLmdldEZ1bGxZZWFyKCkgPT0gZGF0ZU9iai5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXNXZWVrUHJvamVjdFRhc2tzLm1hcCgodGFzaykgPT4gdGhpc1dlZWtUYXNrcy5wdXNoKHRhc2spKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgVGVtcGxhdGVzLiNzb3J0VGFza3ModGhpc1dlZWtUYXNrcyk7XHJcbiAgICAgICAgICAgIHRoaXNXZWVrVGFza3MubWFwKCh0YXNrKSA9PiB0aGlzLmRpc3BsYXlUYXNrKHRhc2spKTtcclxuICAgICAgICB9LCAxNTApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkaXNwbGF5VGFzayh0YXNrKSB7XHJcbiAgICAgICAgVGFza0luZm9ybWF0aW9uLmFkZFRhc2tFbGVtZW50KHRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBGYWRlRWxlbWVudChmYWRlSW4sIGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZmFkZUluKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNyZW1vdmVQcm9qZWN0SW5mb3JtYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5GYWRlRWxlbWVudChmYWxzZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRhc2stY29udGFpbmVyXCIpKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRhc2tzVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RfdGFza3NfYXJlYVwiKTtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Rhc2tfYnV0dG9uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90YXNrX2J1dHRvblwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0X3Rhc2tfaGVhZGVyX2NvbnRhaW5lclwiKSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0X3Rhc2tfaGVhZGVyX2NvbnRhaW5lclwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9qZWN0VGFza3NUYWJsZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIH0sIDE1MCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgVGVtcGxhdGVzIHtcclxuICAgIHN0YXRpYyAjc2lkZUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdF90YWJfY29udGFpbmVyXCIpO1xyXG5cclxuICAgIHN0YXRpYyBpbmJveFRhc2tzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmJveFwiKTtcclxuICAgIHN0YXRpYyB0b2RheXNUYXNrc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXlcIik7XHJcbiAgICBzdGF0aWMgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Byb2plY3RfYnV0dG9uXCIpO1xyXG4gICAgc3RhdGljIHRoaXNXZWVrc1Rhc2tzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGlzX3dlZWtcIik7XHJcblxyXG4gICAgc3RhdGljICNwcm9qZWN0QnV0dG9ucyA9IFtdO1xyXG5cclxuICAgIHN0YXRpYyAjcHJvamVjdFNob3duO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgY3VycmVudFByb2plY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Byb2plY3RTaG93bjtcclxuICAgIH07XHJcbiAgICBzdGF0aWMgc2V0IGN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLiNwcm9qZWN0U2hvd24gPSBwcm9qZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVQcm9qZWN0QnV0dG9uKHByb2plY3QpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBwcm9qZWN0VGFiLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICAgIHByb2plY3RUYWIuaWQgPSBcInByb2plY3RfdGFiXCI7XHJcblxyXG4gICAgICAgIHByb2plY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UHJvamVjdCAhPSBwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBUZW1wbGF0ZXMuZGlzcGxheVByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiNzaWRlQmFyLmFwcGVuZENoaWxkKHByb2plY3RUYWIpO1xyXG4gICAgICAgIHRoaXMuI3Byb2plY3RCdXR0b25zLnB1c2goeyBwcm9qZWN0OiBwcm9qZWN0LCBlbGVtZW50OiBwcm9qZWN0VGFiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWxldGVQcm9qZWN0QnV0dG9uKHByb2plY3QpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI3Byb2plY3RCdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiNwcm9qZWN0QnV0dG9uc1tpXS5wcm9qZWN0ID09IHByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuI3Byb2plY3RCdXR0b25zW2ldLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiNwcm9qZWN0QnV0dG9ucy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZlZCBQcm9qZWN0IEJ1dHRvbjogJHtwcm9qZWN0Lm5hbWV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBJbmZvcm1hdGlvbiBleHRlbmRzIFRlbXBsYXRlcyB7IH1cclxuXHJcbmNsYXNzIFByb2plY3RJbmZvcm1hdGlvbiBleHRlbmRzIEluZm9ybWF0aW9uIHtcclxuXHJcbiAgICBzdGF0aWMgZGlzcGxheVByb2plY3RJbmZvKHByb2plY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jcHJpdmF0ZURpc3BsYXlQcm9qZWN0SW5mbyhwcm9qZWN0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljICNwcml2YXRlRGlzcGxheVByb2plY3RJbmZvKHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLkZhZGVFbGVtZW50KHRydWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10YXNrLWNvbnRhaW5lclwiKSk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRhc2stY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBoZWFkZXJfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBoZWFkZXJfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRhc2staGVhZGVyLWNvbnRhaW5lclwiKTtcclxuICAgICAgICBoZWFkZXJfY29udGFpbmVyLmlkID0gXCJwcm9qZWN0X3Rhc2tfaGVhZGVyX2NvbnRhaW5lclwiO1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICAgICAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKFwiZGl2aWRlclwiKTtcclxuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XHJcblxyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICBoZWFkZXJfY29udGFpbmVyLmFwcGVuZCh0aXRsZSwgZGl2aWRlciwgZGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGhlYWRlcl9jb250YWluZXIsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcclxuXHJcbiAgICAgICAgdGhpcy4jYWRkVGFza0J1dHRvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjYWRkVGFza0J1dHRvbigpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RfdGFza19oZWFkZXJfY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBidXR0b25fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbl90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgICAgYnV0dG9uX3RleHQudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XHJcblxyXG4gICAgICAgIGJ1dHRvbi5pZCA9IFwiYWRkX3Rhc2tfYnV0dG9uXCI7XHJcbiAgICAgICAgYnV0dG9uX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnV0dG9uLWNvbnRhaW5lclwiKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2stYnV0dG9uXCIsIFwiYWRkLXRhc2tcIik7XHJcbiAgICAgICAgYnV0dG9uX3RleHQuY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLXRleHRcIiwgXCJ0YXNrLWJ1dHRvbi1uYW1lXCIpO1xyXG4gICAgICAgIGRpdmlkZXIuY2xhc3NMaXN0LmFkZChcImRpdmlkZXJcIik7XHJcblxyXG5cclxuXHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHtcclxuICAgICAgICAgICAgQWRkVGFza0Zvcm0udG9nZ2xlRm9ybSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBidXR0b25fY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9uX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZpZGVyKTtcclxuXHJcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbl90ZXh0KTtcclxuXHJcbiAgICAgICAgYWRkSW1hZ2UoYnV0dG9uLCBXaGl0ZVBsdXNCb3gsIFwiYWRkLXRhc2staW1nXCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoYnV0dG9uX2NvbnRhaW5lcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFRhc2tJbmZvcm1hdGlvbiBleHRlbmRzIEluZm9ybWF0aW9uIHtcclxuXHJcbiAgICBzdGF0aWMgI2NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdF90YXNrc19hcmVhXCIpO1xyXG5cclxuXHJcbiAgICBzdGF0aWMgYWRkVGFza0VsZW1lbnQodGFzaykge1xyXG4gICAgICAgIGNvbnN0IHRhc2tfY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgbGVmdF9zaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCByaWdodF9zaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCBjaGVja19tYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBjb25zdCB0YXNrX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IGR1ZV9kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCBvcHRpb25fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBjb25zdCBpbmZvcm1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHJcbiAgICAgICAgdGFza19uYW1lLnRleHRDb250ZW50ID0gdGFzay50aXRsZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGR1ZV9kYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xyXG5cclxuICAgICAgICB0YXNrX2NvbnRlbnQuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XHJcblxyXG4gICAgICAgIGxlZnRfc2lkZS5jbGFzc0xpc3QuYWRkKFwibGVmdC1zaWRlXCIpO1xyXG4gICAgICAgIHJpZ2h0X3NpZGUuY2xhc3NMaXN0LmFkZChcInJpZ2h0LXNpZGVcIik7XHJcblxyXG4gICAgICAgIGNoZWNrX21hcmsuY2xhc3NMaXN0LmFkZChcImNoZWNrTWFya1wiLCB0YXNrLmRpZmZpY3VsdHkpO1xyXG4gICAgICAgIHRhc2tfbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICAgICAgICBkdWVfZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XHJcblxyXG4gICAgICAgIG9wdGlvbl9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9wdGlvbi1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIGVkaXQuaWQgPSBcInRhc2tfb3B0aW9uXzFcIjtcclxuICAgICAgICBpbmZvcm1hdGlvbi5pZCA9IFwidGFza19vcHRpb25fMlwiO1xyXG4gICAgICAgIGRlbC5pZCA9IFwidGFza19vcHRpb25fM1wiO1xyXG5cclxuICAgICAgICBpZiAodGFzay5jb21wbGV0ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNoZWNrX21hcmsuY2xhc3NMaXN0LmFkZCh0YXNrLmRpZmZpY3VsdHkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIGNoZWNrX21hcmsuY2xhc3NMaXN0LmFkZChgJHt0YXNrLmRpZmZpY3VsdHkudG9Mb3dlckNhc2UoKX0tY29tcGxldGVgKTtcclxuICAgICAgICAgICAgYWRkSW1hZ2UoY2hlY2tfbWFyaywgV2hpdGVDaGVjaywgXCJcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2hlY2tfbWFyay5jbGFzc0xpc3QuYWRkKHRhc2suZGlmZmljdWx0eS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFkZEltYWdlKGVkaXQsIERhcmtCbHVlTm90ZWJvb2tFZGl0T3V0bGluZSwgXCJcIik7XHJcbiAgICAgICAgYWRkSW1hZ2UoaW5mb3JtYXRpb24sIERhcmtCbHVlSW5mb3JtYXRpb25PdXRsaW5lLCBcIlwiKTtcclxuICAgICAgICBhZGRJbWFnZShkZWwsIERhcmtCbHVlVHJhc2hDYW5PdXRsaW5lLCBcIlwiKTtcclxuXHJcbiAgICAgICAgdGhpcy4jY29udGFpbmVyLmFwcGVuZCh0YXNrX2NvbnRlbnQpO1xyXG4gICAgICAgIHRhc2tfY29udGVudC5hcHBlbmQobGVmdF9zaWRlKTtcclxuICAgICAgICB0YXNrX2NvbnRlbnQuYXBwZW5kKHJpZ2h0X3NpZGUpO1xyXG4gICAgICAgIGxlZnRfc2lkZS5hcHBlbmQoY2hlY2tfbWFyayk7XHJcbiAgICAgICAgbGVmdF9zaWRlLmFwcGVuZCh0YXNrX25hbWUpO1xyXG4gICAgICAgIHJpZ2h0X3NpZGUuYXBwZW5kKGR1ZV9kYXRlKTtcclxuICAgICAgICByaWdodF9zaWRlLmFwcGVuZChvcHRpb25fY29udGFpbmVyKTtcclxuICAgICAgICBvcHRpb25fY29udGFpbmVyLmFwcGVuZChlZGl0KTtcclxuICAgICAgICBvcHRpb25fY29udGFpbmVyLmFwcGVuZChpbmZvcm1hdGlvbik7XHJcbiAgICAgICAgb3B0aW9uX2NvbnRhaW5lci5hcHBlbmQoZGVsKTtcclxuXHJcbiAgICAgICAgbGV0IGRlYm91bmNlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNoZWNrX21hcmsuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWRlYm91bmNlKSB7XHJcbiAgICAgICAgICAgICAgICBkZWJvdW5jZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiNjaGVja01hcmtMb2dpYyh0YXNrLCBjaGVja19tYXJrKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlYm91bmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9LCAxNTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4gdGhpcy4jZGlzcGxheVRhc2tFZGl0KHRhc2ssIHRhc2tfY29udGVudCkpO1xyXG4gICAgICAgIGluZm9ybWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHRoaXMuI2Rpc3BsYXlUYXNrSW5mbyh0YXNrKSk7XHJcbiAgICAgICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHRoaXMuI2RlbGV0ZVRhc2tFbGVtZW50KHRhc2ssIHRhc2tfY29udGVudCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGlzcGxheUZpbHRlckhlYWRlcnMoZmlsdGVyTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10YXNrLWNvbnRhaW5lclwiKTtcclxuICAgICAgICB0aGlzLkZhZGVFbGVtZW50KHRydWUsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaGVhZGVyX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YXNrLWhlYWRlci1jb250YWluZXJcIik7XHJcbiAgICAgICAgaGVhZGVyX2NvbnRhaW5lci5pZCA9IFwicHJvamVjdF90YXNrX2hlYWRlcl9jb250YWluZXJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICAgICAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKFwiZGl2aWRlclwiKTtcclxuXHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBmaWx0ZXJOYW1lLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGhlYWRlcl9jb250YWluZXIuYXBwZW5kKHRpdGxlLCBkaXZpZGVyKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShoZWFkZXJfY29udGFpbmVyLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNwcml2YXRlRWRpdFRhc2tFbGVtZW50KHRhc2ssIGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1zaWRlIC5uYW1lJyk7XHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LXNpZGUgLmR1ZS1kYXRlJyk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tNYXJrID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1zaWRlIC5jaGVja01hcmsnKTtcclxuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gdGFzay50aXRsZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XHJcblxyXG4gICAgICAgIGNoZWNrTWFyay5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICAgICAgICBpZiAoY2hlY2tNYXJrLmNsYXNzTGlzdC5jb250YWlucyhgZWFzeWApKSB7XHJcbiAgICAgICAgICAgIGNoZWNrTWFyay5jbGFzc0xpc3QucmVtb3ZlKFwiZWFzeVwiKTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrTWFyay5jbGFzc0xpc3QuY29udGFpbnMoXCJlYXN5LWNvbXBsZXRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja01hcmsuY2xhc3NMaXN0LnJlbW92ZShcImVhc3ktY29tcGxldGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGNoZWNrTWFyay5jbGFzc0xpc3QuY29udGFpbnMoXCJtZWRpdW1cIikpIHtcclxuICAgICAgICAgICAgY2hlY2tNYXJrLmNsYXNzTGlzdC5yZW1vdmUoXCJtZWRpdW1cIik7XHJcbiAgICAgICAgICAgIGlmIChjaGVja01hcmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVkaXVtLWNvbXBsZXRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja01hcmsuY2xhc3NMaXN0LnJlbW92ZShcIm1lZGl1bS1jb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY2hlY2tNYXJrLmNsYXNzTGlzdC5jb250YWlucyhcImhhcmRcIikpIHtcclxuICAgICAgICAgICAgY2hlY2tNYXJrLmNsYXNzTGlzdC5yZW1vdmUoXCJoYXJkXCIpO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tNYXJrLmNsYXNzTGlzdC5jb250YWlucyhcImhhcmQtY29tcGxldGVcIikpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrTWFyay5jbGFzc0xpc3QucmVtb3ZlKFwiaGFyZC1jb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhc2suY29tcGxldGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjaGVja01hcmsuY2xhc3NMaXN0LmFkZCh0YXNrLmRpZmZpY3VsdHkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIGNoZWNrTWFyay5jbGFzc0xpc3QuYWRkKGAke3Rhc2suZGlmZmljdWx0eS50b0xvd2VyQ2FzZSgpfS1jb21wbGV0ZWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNoZWNrTWFyay5jbGFzc0xpc3QuYWRkKHRhc2suZGlmZmljdWx0eS50b0xvd2VyQ2FzZSgpKTs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWRpdFRhc2tFbGVtZW50KHRhc2ssIGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jcHJpdmF0ZUVkaXRUYXNrRWxlbWVudCh0YXNrLCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGlzcGxheUFsbFRhc2tzKHRhc2tzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3ByaXZhdGVEaXNwbGF5QWxsVGFza3ModGFza3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjcHJpdmF0ZURpc3BsYXlBbGxUYXNrcyh0YXNrcykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUYXNrRWxlbWVudCh0YXNrc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjZGVsZXRlVGFza0VsZW1lbnQodGFzaywgZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBOYXZpZ2F0aW9uLmN1cnJlbnRQcm9qZWN0O1xyXG4gICAgICAgIFRlbXBsYXRlcy5GYWRlRWxlbWVudChmYWxzZSwgZWxlbWVudCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3QucmVtb3ZlVGFzayh0YXNrKTtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICB9LCAxNTApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjZGlzcGxheVRhc2tFZGl0KHRhc2ssIGVsZW1lbnQpIHtcclxuICAgICAgICBFZGl0VGFza0Zvcm0uc2V0RWRpdCh0YXNrLCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyAjZGlzcGxheVRhc2tJbmZvKHRhc2spIHtcclxuICAgICAgICB0YXNrLmluZm9UYXNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNjaGVja01hcmtMb2dpYyh0YXNrLCBlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKHRhc2suY29tcGxldGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0YXNrLmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vTmF2aWdhdGlvbi5GYWRlRWxlbWVudChmYWxzZSwgZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IGB0cmFuc3BhcmVudGA7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuZmlyc3RDaGlsZC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlIG5vdyBmYWxzZTpcIiwgdGFzayk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGAke3Rhc2suZGlmZmljdWx0eS50b0xvd2VyQ2FzZSgpfS1jb21wbGV0ZWApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke3Rhc2suZGlmZmljdWx0eS50b0xvd2VyQ2FzZSgpfS1jb21wbGV0ZWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGFzay5kaWZmaWN1bHR5LnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0YXNrLmRpZmZpY3VsdHkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxNTApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhc2suY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlIG5vdyB0cnVlOlwiLCB0YXNrKTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke3Rhc2suZGlmZmljdWx0eS50b0xvd2VyQ2FzZSgpfS1jb21wbGV0ZWApO1xyXG4gICAgICAgICAgICBhZGRJbWFnZShlbGVtZW50LCBXaGl0ZUNoZWNrLCBcIlwiKTtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcclxuICAgICAgICAgICAgZWxlbWVudC5maXJzdENoaWxkLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIEZvcm0gZXh0ZW5kcyBUZW1wbGF0ZXMge1xyXG5cclxuICAgIHN0YXRpYyAjZm9ybVZhbGlkYXRpb25NZXRob2QoZm9ybSwgbmFtZUZpZWxkLCBkZXNjcmlwdGlvbkZpZWxkLCBkdWVEYXRlRmllbGQsIGRpZmZpY3VsdHlGaWVsZCkge1xyXG5cclxuICAgICAgICBpZiAoZm9ybSAmJiBmb3JtLmNoZWNrVmFsaWRpdHkoKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpZiAobmFtZUZpZWxkICYmIG5hbWVGaWVsZC52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lRmllbGQuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRlc2NyaXB0aW9uRmllbGQgJiYgZGVzY3JpcHRpb25GaWVsZC52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkZpZWxkLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkdWVEYXRlRmllbGQgJiYgZHVlRGF0ZUZpZWxkLnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGR1ZURhdGVGaWVsZC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGlmZmljdWx0eUZpZWxkICYmIGRpZmZpY3VsdHlGaWVsZC5zZWxlY3RlZEluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgICAgIGRpZmZpY3VsdHlGaWVsZC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyAjcHJpdmF0ZVN1Ym1pdEZvcm0oZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRm9ybSBzdWJtaXNzaW9uIHByZXZlbnRlZCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzdWJtaXRGb3JtKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdWJtaXQgZXZlbnQgdHJpZ2dlcmVkIVwiKTtcclxuICAgICAgICB0aGlzLiNwcml2YXRlU3VibWl0Rm9ybShldmVudCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzdGF0aWMgZm9ybVZhbGlkYXRpb24oZm9ybSwgbmFtZUZpZWxkLCBkZXNjcmlwdGlvbkZpZWxkLCBkdWVEYXRlRmllbGQsIGRpZmZpY3VsdHlGaWVsZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNmb3JtVmFsaWRhdGlvbk1ldGhvZChmb3JtLCBuYW1lRmllbGQsIGRlc2NyaXB0aW9uRmllbGQsIGR1ZURhdGVGaWVsZCwgZGlmZmljdWx0eUZpZWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgI2Zvcm1SZXNldEZpZWxkcyhuYW1lRmllbGQsIGRlc2NyaXB0aW9uRmllbGQsIGR1ZURhdGVGaWVsZCwgZGlmZmljdWx0eUZpZWxkKSB7XHJcbiAgICAgICAgaWYgKG5hbWVGaWVsZCkgbmFtZUZpZWxkLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBpZiAoZGVzY3JpcHRpb25GaWVsZCkgZGVzY3JpcHRpb25GaWVsZC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGR1ZURhdGVGaWVsZCkgZHVlRGF0ZUZpZWxkLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBpZiAoZGlmZmljdWx0eUZpZWxkKSBkaWZmaWN1bHR5RmllbGQuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlc2V0RmllbGRzKG5hbWVGaWVsZCwgZGVzY3JpcHRpb25GaWVsZCwgZHVlRGF0ZUZpZWxkLCBkaWZmaWN1bHR5RmllbGQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jZm9ybVJlc2V0RmllbGRzKG5hbWVGaWVsZCwgZGVzY3JpcHRpb25GaWVsZCwgZHVlRGF0ZUZpZWxkLCBkaWZmaWN1bHR5RmllbGQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgQWRkUHJvamVjdEZvcm0ge1xyXG5cclxuICAgIHN0YXRpYyAjY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF9wcm9qZWN0X2Nsb3NlX2J1dHRvblwiKTtcclxuXHJcbiAgICBzdGF0aWMgI21vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfcHJvamVjdF9tb2RhbFwiKTtcclxuICAgIHN0YXRpYyAjZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Byb2plY3RfbW9kYWxcIikuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLWNvbnRhaW5lclwiKVswXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvcm1cIilbMF07XHJcblxyXG4gICAgc3RhdGljICNuYW1lRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF9wcm9qZWN0X25hbWVcIik7XHJcbiAgICBzdGF0aWMgI2Rlc2NyaXB0aW9uRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF9wcm9qZWN0X2Rlc2NyaXB0aW9uXCIpO1xyXG5cclxuICAgIHN0YXRpYyBvcGVuRm9ybSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jdG9nZ2xlRm9ybSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjYWRkUHJvamVjdChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgaW1wb3J0KCcuL3RvZG8uanMnKSAvLyBBZGp1c3QgdGhlIHBhdGggdG8gd2hlcmUgeW91ciBQcm9qZWN0IGNsYXNzIGlzIGxvY2F0ZWRcclxuICAgICAgICAgICAgLnRoZW4oKG1vZHVsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gT25jZSB0aGUgbW9kdWxlIGlzIGxvYWRlZCwgeW91IGNhbiBjcmVhdGUgYSBuZXcgUHJvamVjdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgUHJvamVjdCA9IG1vZHVsZS5Qcm9qZWN0OyAgLy8gQWNjZXNzIFByb2plY3QgZnJvbSB0aGUgaW1wb3J0ZWQgbW9kdWxlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhBZGRQcm9qZWN0Rm9ybS4jbmFtZUZpZWxkLnZhbHVlLCBBZGRQcm9qZWN0Rm9ybS4jZGVzY3JpcHRpb25GaWVsZC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoQWRkUHJvamVjdEZvcm0uI25hbWVGaWVsZC52YWx1ZSwgQWRkUHJvamVjdEZvcm0uI2Rlc2NyaXB0aW9uRmllbGQudmFsdWUpOyAvLyBDcmVhdGUgYSBuZXcgcHJvamVjdCBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05ldyBwcm9qZWN0IGNyZWF0ZWQ6JywgbmV3UHJvamVjdC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIEFkZFByb2plY3RGb3JtLiN0b2dnbGVGb3JtKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIFByb2plY3QgY2xhc3M6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgI3RvZ2dsZUZvcm0oKSB7XHJcbiAgICAgICAgaWYgKCFBZGRQcm9qZWN0Rm9ybS4jbW9kYWwub3Blbikge1xyXG4gICAgICAgICAgICBBZGRQcm9qZWN0Rm9ybS4jbW9kYWwub3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIEFkZFByb2plY3RGb3JtLiNtb2RhbC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgTmF2aWdhdGlvbi5GYWRlRWxlbWVudCh0cnVlLCBBZGRQcm9qZWN0Rm9ybS4jbW9kYWwpO1xyXG4gICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgICAgIEFkZFByb2plY3RGb3JtLiNmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgQWRkUHJvamVjdEZvcm0uI2FkZFByb2plY3QpO1xyXG4gICAgICAgICAgICBBZGRQcm9qZWN0Rm9ybS4jY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgQWRkUHJvamVjdEZvcm0uI3RvZ2dsZUZvcm0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIE5hdmlnYXRpb24uRmFkZUVsZW1lbnQoZmFsc2UsIEFkZFByb2plY3RGb3JtLiNtb2RhbCk7XHJcbiAgICAgICAgICAgIEFkZFByb2plY3RGb3JtLiNmb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgQWRkUHJvamVjdEZvcm0uI2FkZFByb2plY3QpO1xyXG4gICAgICAgICAgICBBZGRQcm9qZWN0Rm9ybS4jY2xvc2VCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgQWRkUHJvamVjdEZvcm0uI3RvZ2dsZUZvcm0pO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIEZvcm0ucmVzZXRGaWVsZHMoQWRkUHJvamVjdEZvcm0uI25hbWVGaWVsZCwgQWRkUHJvamVjdEZvcm0uI2Rlc2NyaXB0aW9uRmllbGQpO1xyXG4gICAgICAgICAgICAgICAgQWRkUHJvamVjdEZvcm0uI21vZGFsLm9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgMTUwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBBZGRUYXNrRm9ybSBleHRlbmRzIEZvcm0ge1xyXG4gICAgc3RhdGljICNtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Rhc2tfbW9kYWxcIik7XHJcblxyXG4gICAgc3RhdGljICNmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfdGFza19tb2RhbFwiKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtY29udGFpbmVyXCIpWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKVswXTtcclxuXHJcbiAgICBzdGF0aWMgI2Nsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfdGFza19jbG9zZV9idXR0b25cIik7XHJcblxyXG4gICAgc3RhdGljICNuYW1lRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90YXNrX25hbWVcIik7XHJcbiAgICBzdGF0aWMgI2Rlc2NyaXB0aW9uRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90YXNrX2Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgc3RhdGljICNkdWVEYXRlRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90YXNrX2R1ZV9kYXRlXCIpO1xyXG4gICAgc3RhdGljICNkaWZmaWN1bHR5RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90YXNrX2RpZmZpY3VsdHlcIik7XHJcblxyXG4gICAgLy9zdGF0aWMgI2FkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Rhc2tfYnV0dG9uX3NhdmVcIik7XHJcblxyXG4gICAgc3RhdGljIFZhbGlkYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIEZvcm0uZm9ybVZhbGlkYXRpb24odGhpcy4jZm9ybSwgdGhpcy4jbmFtZUZpZWxkLCB0aGlzLiNkZXNjcmlwdGlvbkZpZWxkLCB0aGlzLiNkdWVEYXRlRmllbGQsIHRoaXMuI2RpZmZpY3VsdHlGaWVsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRvZ2dsZUZvcm0oKSB7XHJcbiAgICAgICAgLy9yZXR1cm4gdGhpcy4jcHJpdmF0ZVRvZ2dsZUZvcm0oKTtcclxuICAgICAgICAvL0Zvcm0ucmVzZXRGaWVsZHMoQWRkVGFza0Zvcm0uI25hbWVGaWVsZCwgQWRkVGFza0Zvcm0uI2Rlc2NyaXB0aW9uRmllbGQsIEFkZFRhc2tGb3JtLiNkdWVEYXRlRmllbGQsIEFkZFRhc2tGb3JtLiNkaWZmaWN1bHR5RmllbGQpO1xyXG4gICAgICAgIGlmICghQWRkVGFza0Zvcm0uI21vZGFsLm9wZW4pIHtcclxuICAgICAgICAgICAgQWRkVGFza0Zvcm0uI21vZGFsLm9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICBBZGRUYXNrRm9ybS4jbW9kYWwuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgTmF2aWdhdGlvbi5GYWRlRWxlbWVudCh0cnVlLCBBZGRUYXNrRm9ybS4jbW9kYWwpO1xyXG4gICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgICAgIEFkZFRhc2tGb3JtLiNmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgQWRkVGFza0Zvcm0uI2FkZFRhc2spO1xyXG4gICAgICAgICAgICBBZGRUYXNrRm9ybS4jY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgQWRkVGFza0Zvcm0udG9nZ2xlRm9ybSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgTmF2aWdhdGlvbi5GYWRlRWxlbWVudChmYWxzZSwgQWRkVGFza0Zvcm0uI21vZGFsKTtcclxuICAgICAgICAgICAgQWRkVGFza0Zvcm0uI2Zvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBBZGRUYXNrRm9ybS4jYWRkVGFzayk7XHJcbiAgICAgICAgICAgIEFkZFRhc2tGb3JtLiNjbG9zZUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBBZGRUYXNrRm9ybS50b2dnbGVGb3JtKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBGb3JtLnJlc2V0RmllbGRzKEFkZFRhc2tGb3JtLiNuYW1lRmllbGQsIEFkZFRhc2tGb3JtLiNkZXNjcmlwdGlvbkZpZWxkKTtcclxuICAgICAgICAgICAgICAgIEFkZFRhc2tGb3JtLiNtb2RhbC5vcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIDE1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjYWRkVGFzayhldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgTmF2aWdhdGlvbi5jdXJyZW50UHJvamVjdC5hZGRUYXNrKEFkZFRhc2tGb3JtLiNuYW1lRmllbGQudmFsdWUsIEFkZFRhc2tGb3JtLiNkZXNjcmlwdGlvbkZpZWxkLnZhbHVlLCBBZGRUYXNrRm9ybS4jZHVlRGF0ZUZpZWxkLnZhbHVlLCBBZGRUYXNrRm9ybS4jZGlmZmljdWx0eUZpZWxkLm9wdGlvbnNbQWRkVGFza0Zvcm0uI2RpZmZpY3VsdHlGaWVsZC5zZWxlY3RlZEluZGV4XS50ZXh0KTtcclxuICAgICAgICBBZGRUYXNrRm9ybS50b2dnbGVGb3JtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3RhdGljICNwcml2YXRlVG9nZ2xlRm9ybSgpIHtcclxuXHJcbiAgICAvLyB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBFZGl0VGFza0Zvcm0gZXh0ZW5kcyBGb3JtIHtcclxuICAgIHN0YXRpYyAjbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRfdGFza19tb2RhbFwiKTtcclxuXHJcbiAgICBzdGF0aWMgI2Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRfdGFza19tb2RhbFwiKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtY29udGFpbmVyXCIpWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKVswXTtcclxuXHJcbiAgICBzdGF0aWMgI2Nsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0X3Rhc2tfY2xvc2VfYnV0dG9uXCIpO1xyXG5cclxuICAgIHN0YXRpYyAjbmFtZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0X3Rhc2tfbmFtZVwiKTtcclxuICAgIHN0YXRpYyAjZGVzY3JpcHRpb25GaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdF90YXNrX2Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgc3RhdGljICNkdWVEYXRlRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRfdGFza19kdWVfZGF0ZVwiKTtcclxuICAgIHN0YXRpYyAjZGlmZmljdWx0eUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0X3Rhc2tfZGlmZmljdWx0eVwiKTtcclxuXHJcbiAgICAvL3N0YXRpYyAjc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdF90YXNrX2J1dHRvbl9zYXZlXCIpO1xyXG5cclxuICAgIHN0YXRpYyAjZWRpdFRhc2tIYW5kbGVyID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgI2VkaXRUYXNrKHRhc2ssIGVsZW1lbnQsIGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0YXNrLmVkaXRUYXNrKEVkaXRUYXNrRm9ybS4jbmFtZUZpZWxkLnZhbHVlLCBFZGl0VGFza0Zvcm0uI2Rlc2NyaXB0aW9uRmllbGQudmFsdWUsIEVkaXRUYXNrRm9ybS4jZHVlRGF0ZUZpZWxkLnZhbHVlLCBFZGl0VGFza0Zvcm0uI2RpZmZpY3VsdHlGaWVsZC5vcHRpb25zW0VkaXRUYXNrRm9ybS4jZGlmZmljdWx0eUZpZWxkLnNlbGVjdGVkSW5kZXhdLnRleHQpO1xyXG4gICAgICAgIFRhc2tJbmZvcm1hdGlvbi5lZGl0VGFza0VsZW1lbnQodGFzaywgZWxlbWVudCk7XHJcbiAgICAgICAgRWRpdFRhc2tGb3JtLiN0b2dnbGVGb3JtKHRhc2ssIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRFZGl0KHRhc2ssIGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLiN0b2dnbGVGb3JtKHRhc2ssIGVsZW1lbnQpO1xyXG4gICAgICAgIEVkaXRUYXNrRm9ybS4jbmFtZUZpZWxkLnZhbHVlID0gdGFzay50aXRsZTtcclxuICAgICAgICBFZGl0VGFza0Zvcm0uI2Rlc2NyaXB0aW9uRmllbGQudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIEVkaXRUYXNrRm9ybS4jZHVlRGF0ZUZpZWxkLnZhbHVlID0gdGFzay5kdWVEYXRlO1xyXG4gICAgICAgIEVkaXRUYXNrRm9ybS4jZGlmZmljdWx0eUZpZWxkLnNlbGVjdGVkSW5kZXggPSB0aGlzLiNjaGVja0RpZmZpY3VsdHlJbmRleCh0YXNrLmRpZmZpY3VsdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBWYWxpZGF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBGb3JtLmZvcm1WYWxpZGF0aW9uKHRoaXMuI2Zvcm0sIHRoaXMuI25hbWVGaWVsZCwgdGhpcy4jZGVzY3JpcHRpb25GaWVsZCwgdGhpcy4jZHVlRGF0ZUZpZWxkLCB0aGlzLiNkaWZmaWN1bHR5RmllbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjY2hlY2tEaWZmaWN1bHR5SW5kZXgoZGlmZmljdWx0eSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jZGlmZmljdWx0eUZpZWxkLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuI2RpZmZpY3VsdHlGaWVsZC5vcHRpb25zW2ldLnRleHQgPT0gZGlmZmljdWx0eSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICN0b2dnbGVGb3JtKHRhc2ssIGVsZW1lbnQpIHtcclxuICAgICAgICAvL0Zvcm0ucmVzZXRGaWVsZHMoRWRpdFRhc2tGb3JtLiNuYW1lRmllbGQsIEVkaXRUYXNrRm9ybS4jZGVzY3JpcHRpb25GaWVsZCwgRWRpdFRhc2tGb3JtLiNkdWVEYXRlRmllbGQsIEVkaXRUYXNrRm9ybS4jZGlmZmljdWx0eUZpZWxkKTtcclxuICAgICAgICBpZiAoIUVkaXRUYXNrRm9ybS4jbW9kYWwub3Blbikge1xyXG4gICAgICAgICAgICBFZGl0VGFza0Zvcm0uI21vZGFsLm9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICBFZGl0VGFza0Zvcm0uI21vZGFsLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIE5hdmlnYXRpb24uRmFkZUVsZW1lbnQodHJ1ZSwgRWRpdFRhc2tGb3JtLiNtb2RhbCk7XHJcbiAgICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICAgICAgRWRpdFRhc2tGb3JtLiNlZGl0VGFza0hhbmRsZXIgPSBFZGl0VGFza0Zvcm0uI2VkaXRUYXNrLmJpbmQodGhpcywgdGFzaywgZWxlbWVudCk7XHJcbiAgICAgICAgICAgIEVkaXRUYXNrRm9ybS4jZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIEVkaXRUYXNrRm9ybS4jZWRpdFRhc2tIYW5kbGVyKTtcclxuICAgICAgICAgICAgRWRpdFRhc2tGb3JtLiNjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBFZGl0VGFza0Zvcm0uI3RvZ2dsZUZvcm0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIE5hdmlnYXRpb24uRmFkZUVsZW1lbnQoZmFsc2UsIEVkaXRUYXNrRm9ybS4jbW9kYWwpO1xyXG4gICAgICAgICAgICBFZGl0VGFza0Zvcm0uI2Zvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBFZGl0VGFza0Zvcm0uI2VkaXRUYXNrSGFuZGxlcik7XHJcbiAgICAgICAgICAgIEVkaXRUYXNrRm9ybS4jY2xvc2VCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgRWRpdFRhc2tGb3JtLiN0b2dnbGVGb3JtKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBGb3JtLnJlc2V0RmllbGRzKEVkaXRUYXNrRm9ybS4jbmFtZUZpZWxkLCBFZGl0VGFza0Zvcm0uI2Rlc2NyaXB0aW9uRmllbGQsIEVkaXRUYXNrRm9ybS4jZHVlRGF0ZUZpZWxkLCBFZGl0VGFza0Zvcm0uI2RpZmZpY3VsdHlGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICBFZGl0VGFza0Zvcm0uI21vZGFsLm9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgMTUwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBJbmZvVGFza0Zvcm0gZXh0ZW5kcyBGb3JtIHtcclxuICAgIHN0YXRpYyAjbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9fdGFza19tb2RhbFwiKTtcclxuXHJcbiAgICBzdGF0aWMgI2Nsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvX3Rhc2tfY2xvc2VfYnV0dG9uXCIpO1xyXG5cclxuICAgIHN0YXRpYyAjbmFtZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvX3Rhc2tfbmFtZVwiKTtcclxuICAgIHN0YXRpYyAjZGVzY3JpcHRpb25GaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb190YXNrX2Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgc3RhdGljICNkdWVEYXRlRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9fdGFza19kdWVfZGF0ZVwiKTtcclxuICAgIHN0YXRpYyAjZGlmZmljdWx0eUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvX3Rhc2tfZGlmZmljdWx0eVwiKTtcclxuXHJcbiAgICBzdGF0aWMgc2V0SW5mbyh0YXNrKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFzayk7XHJcbiAgICAgICAgSW5mb1Rhc2tGb3JtLiN0b2dnbGVGb3JtKCk7XHJcbiAgICAgICAgSW5mb1Rhc2tGb3JtLiNuYW1lRmllbGQudmFsdWUgPSB0YXNrLnRpdGxlO1xyXG4gICAgICAgIEluZm9UYXNrRm9ybS4jZGVzY3JpcHRpb25GaWVsZC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICAgICAgSW5mb1Rhc2tGb3JtLiNkdWVEYXRlRmllbGQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XHJcbiAgICAgICAgSW5mb1Rhc2tGb3JtLiNkaWZmaWN1bHR5RmllbGQudmFsdWUgPSB0YXNrLmRpZmZpY3VsdHk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICN0b2dnbGVGb3JtKCkge1xyXG4gICAgICAgIGlmICghdGhpcy4jbW9kYWwub3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLiNtb2RhbC5vcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy4jbW9kYWwuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgTmF2aWdhdGlvbi5GYWRlRWxlbWVudCh0cnVlLCB0aGlzLiNtb2RhbCk7XHJcbiAgICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICAgICAgdGhpcy4jY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4gdGhpcy4jdG9nZ2xlRm9ybSgpLCB7IG9uY2U6IHRydWUgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgTmF2aWdhdGlvbi5GYWRlRWxlbWVudChmYWxzZSwgdGhpcy4jbW9kYWwpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIEZvcm0ucmVzZXRGaWVsZHModGhpcy4jbmFtZUZpZWxkLCB0aGlzLiNkZXNjcmlwdGlvbkZpZWxkLCB0aGlzLiNkdWVEYXRlRmllbGQsIHRoaXMuI2RpZmZpY3VsdHlGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiNtb2RhbC5vcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIDE1MCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IE5hdmlnYXRpb24sIEFkZFByb2plY3RGb3JtLCBBZGRUYXNrRm9ybSwgRWRpdFRhc2tGb3JtLCBJbmZvVGFza0Zvcm0gfTsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IEluYm94IGZyb20gXCIuL2luYm94LnBuZ1wiO1xyXG5pbXBvcnQgVG9kYXkgZnJvbSBcIi4vY2FsZW5kYXItdG9kYXkucG5nXCI7XHJcbmltcG9ydCBUaGlzV2VlayBmcm9tIFwiLi9jYWxlbmRhci13ZWVrLnBuZ1wiO1xyXG5pbXBvcnQgUGx1c0JveCBmcm9tIFwiLi9wbHVzLWJveC5wbmdcIjtcclxuLy8gaW1wb3J0IFdoaXRlUGx1c0JveCBmcm9tIFwiLi93aGl0ZS1wbHVzLWJveC5wbmdcIjtcclxuLy8gaW1wb3J0IERhcmtCbHVlRWRpdCBmcm9tIFwiLi9kYXJrLWJsdWUtbm90ZWJvb2stZWRpdC1vdXRsaW5lLnBuZ1wiO1xyXG4vLyBpbXBvcnQgRGFya0JsdWVJbmZvcm1hdGlvbiBmcm9tIFwiLi9kYXJrLWJsdWUtaW5mb3JtYXRpb24tb3V0bGluZS5wbmdcIjtcclxuLy8gaW1wb3J0IERhcmtCbHVlRGVsZXRlIGZyb20gXCIuL2RhcmstYmx1ZS10cmFzaC1jYW4tb3V0bGluZS5wbmdcIjtcclxuaW1wb3J0IFdoaXRlRm9sZGVyIGZyb20gXCIuL3doaXRlLWZvbGRlci5wbmdcIjtcclxuaW1wb3J0IFdoaXRlQ2xvc2VCb3ggZnJvbSBcIi4vd2hpdGUtY2xvc2UtYm94LnBuZ1wiO1xyXG5pbXBvcnQgV2hpdGVQbHVzIGZyb20gXCIuL3doaXRlLXBsdXMucG5nXCI7XHJcbmltcG9ydCBXaGl0ZU5vdGVib29rQWRkIGZyb20gXCIuL3doaXRlLW5vdGVib29rLXBsdXMtb3V0bGluZS5wbmdcIjtcclxuaW1wb3J0IFdoaXRlSW5mb3JtYXRpb24gZnJvbSBcIi4vd2hpdGUtaW5mb3JtYXRpb24tb3V0bGluZS5wbmdcIjtcclxuaW1wb3J0IFdoaXRlQ29udGVudFNhdmVBbGwgZnJvbSBcIi4vd2hpdGUtY29udGVudC1zYXZlLWFsbC1vdXRsaW5lLnBuZ1wiO1xyXG5pbXBvcnQgV2hpdGVOb3RlYm9va0VkaXQgZnJvbSBcIi4vd2hpdGUtbm90ZWJvb2stZWRpdC1vdXRsaW5lLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkSW1hZ2UoZWxlbWVudCwgaW1hZ2UsIGNsYXNzTmFtZSkge1xyXG4gICAgY29uc3QgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIG5ld0ltYWdlLnNyYyA9IGltYWdlO1xyXG4gICAgaWYgKGNsYXNzTmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgbmV3SW1hZ2UuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XHJcbn1cclxuXHJcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrLWJ1dHRvblwiKVswXSwgSW5ib3gsIFwiaW5ib3hcIik7XHJcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrLWJ1dHRvblwiKVsxXSwgVG9kYXksIFwidG9kYXlcIik7XHJcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrLWJ1dHRvblwiKVsyXSwgVGhpc1dlZWssIFwidGhpcy13ZWVrXCIpO1xyXG5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFzay1idXR0b25cIilbM10sIFBsdXNCb3gsIFwiYWRkLXByb2plY3RcIik7XHJcbi8vYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2stYnV0dG9uXCIpWzRdLCBQbHVzQm94LCBcImFkZC1wcm9qZWN0XCIpO1xyXG4vL2FkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza19vcHRpb25fMVwiKSwgRGFya0JsdWVFZGl0LCBcIlwiKTtcclxuLy9hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tfb3B0aW9uXzJcIiksIERhcmtCbHVlSW5mb3JtYXRpb24sIFwiXCIpO1xyXG4vL2FkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza19vcHRpb25fM1wiKSwgRGFya0JsdWVEZWxldGUsIFwiXCIpO1xyXG5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF9wcm9qZWN0X2Nsb3NlX2J1dHRvblwiKSwgV2hpdGVDbG9zZUJveCwgXCJcIik7XHJcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Byb2plY3RfYnV0dG9uX3NhdmVcIiksIFdoaXRlUGx1cywgXCJcIik7XHJcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJoZWFkaW5nLWNvbnRhaW5lclwiKVswXSwgV2hpdGVGb2xkZXIsIFwiXCIpO1xyXG5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90YXNrX2J1dHRvbl9zYXZlXCIpLCBXaGl0ZVBsdXMsIFwiXCIpO1xyXG5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90YXNrX2hlYWRlcl9jb250YWluZXJcIiksIFdoaXRlTm90ZWJvb2tBZGQsIFwiXCIpO1xyXG5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90YXNrX2Nsb3NlX2J1dHRvblwiKSwgV2hpdGVDbG9zZUJveCwgXCJcIik7XHJcblxyXG5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9fdGFza19jbG9zZV9idXR0b25cIiksIFdoaXRlQ2xvc2VCb3gsIFwiXCIpO1xyXG5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9fdGFza19oZWFkZXJfY29udGFpbmVyXCIpLCBXaGl0ZUluZm9ybWF0aW9uLCBcIlwiKTtcclxuXHJcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdF90YXNrX2J1dHRvbl9zYXZlXCIpLCBXaGl0ZUNvbnRlbnRTYXZlQWxsLCBcIlwiKTtcclxuYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0X3Rhc2tfaGVhZGVyX2NvbnRhaW5lclwiKSwgV2hpdGVOb3RlYm9va0VkaXQsIFwiXCIpO1xyXG5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRfdGFza19jbG9zZV9idXR0b25cIiksIFdoaXRlQ2xvc2VCb3gsIFwiXCIpOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==