"use strict";
(self["webpackChunkgit_ready_todo_list"] = self["webpackChunkgit_ready_todo_list"] || []).push([["todo"],{

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
    background: #1444EE;
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
    transition: 0.15s;
}

#task_option_1:hover,
#task_option_2:hover,
#task_option_3:hover {
    filter: hue-rotate(10deg) brightness(400%) saturate(200%) contrast(80%);
    transition: 0.15s;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* Reset default browser styles */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Inter\";\n}\n\n.no-transition * {\n    -webkit-transition: none !important;\n    -moz-transition: none !important;\n    -ms-transition: none !important;\n    -o-transition: none !important;\n    transition: none !important;\n}\n\n/* Make html and body take up the full height */\nhtml,\nbody {\n    height: 100%;\n    width: 100%;\n}\n\n/* Use flexbox on the body to center content */\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"] {\n    background: none;\n    color: inherit;\n    border: none;\n    padding: 0;\n    font: inherit;\n    cursor: pointer;\n    outline: inherit;\n}\n\n\n.main-header {\n    display: flex;\n    align-items: center;\n    background: #00145B;\n    height: 10%;\n    width: 100%;\n\n    padding: 20px 37px;\n    font-size: 2.25rem;\n}\n\nheader>.title {\n    color: #FFFFFF;\n    font-weight: 700;\n}\n\nnav {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 17.5%;\n    height: 100%;\n    min-width: 336px;\n    border-right: 2px solid #EBEBEB;\n}\n\n.main-container {\n    height: 100%;\n    display: flex;\n}\n\n.task-buttons-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 37%;\n    width: 100%;\n    gap: 34px;\n    padding: 0 43px;\n}\n\n.task-button {\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: start;\n    align-items: center;\n    background: #F4F4F4;\n    border-radius: 19px;\n    padding: 11.5px 22.5px;\n    width: 100%;\n    gap: 13.5px;\n    transition: 0.15s;\n}\n\n.task-button:hover {\n    background: #1444EE;\n    color: #FFFFFF;\n}\n\n.task-button-name {\n    font-size: 1.5rem;\n    font-weight: 600;\n    color: #585858;\n}\n\n.task-button:hover .inbox {\n    filter: invert(100%) sepia(1%) saturate(2%) hue-rotate(148deg) brightness(104%) contrast(100%);\n\n}\n\n.task-button:hover .today {\n    filter: invert(100%) sepia(1%) saturate(2%) hue-rotate(148deg) brightness(104%) contrast(100%);\n\n}\n\n.task-button:hover .this-week {\n    filter: invert(100%) sepia(1%) saturate(2%) hue-rotate(148deg) brightness(104%) contrast(100%);\n\n}\n\n.task-button:hover .add-project {\n    filter: invert(100%) sepia(1%) saturate(2%) hue-rotate(148deg) brightness(104%) contrast(100%);\n\n}\n\n.task-button:hover .task-button-name {\n    color: #ffffff;\n}\n\n.inbox {\n    width: 40px;\n    height: 40px;\n    /* background: url('./inbox.png'); */\n}\n\n.today {\n    width: 40px;\n    height: 40px;\n    /* background: url('./calendar-today.png'); */\n}\n\n.this-week {\n    width: 40px;\n    height: 40px;\n    /* background: url('./calendar-today.png'); */\n}\n\n.project-container {\n    display: flex;\n    flex-direction: column;\n    height: 63%;\n    justify-content: start;\n    gap: 31px;\n}\n\n.project-container-header {\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n    padding: 0 26px;\n}\n\n.project-container-header>.title {\n    display: flex;\n    font-weight: 700;\n    color: #00145B;\n    font-size: 1.75rem;\n}\n\n.project-container-header>.divider {\n    background: #000000;\n    padding: 2px;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.add-project,\n.add-task-img {\n    width: 40px;\n    height: 40px;\n    /* background: url('./plus-box.png'); */\n}\n\n.button-container {\n    display: flex;\n    justify-content: center;\n    padding: 0 43px;\n}\n\n.project-tabs-container {\n    display: flex;\n    flex-direction: column;\n    padding: 0 41px;\n    gap: 12px;\n}\n\n#project_tab {\n    display: flex;\n    align-items: center;\n    background: #00145B;\n    padding: 10px 19.5px;\n    color: #FFFFFF;\n    font-weight: 600;\n    font-size: 1.25rem;\n    transition: 0.15s;\n}\n\n#project_tab:hover {\n    background: #1444EE;\n    transition: 0.15s;\n}\n\n.project-task-container {\n    display: flex;\n    flex-direction: column;\n    padding: 67px 340px;\n    width: 100%;\n    transition: 0.150s;\n}\n\n.add-task-button-container {\n    justify-content: start;\n}\n\n.add-task {\n    display: flex;\n    width: auto;\n    background: #00145B;\n    color: #FFFFFF;\n    padding: 10px 16.5px;\n    gap: 18px;\n    justify-content: start;\n    margin-top: 21px;\n    margin-bottom: 10px;\n    transition: 0.15s;\n}\n\n.add-task:hover {\n    background: #1444EE;\n}\n\n.add-task-text {\n    color: #FFFFFF;\n}\n\n.project-task-header-container {\n    display: flex;\n    flex-direction: column;\n\n}\n\n.project-task-header-container>.title {\n    font-size: 3rem;\n    color: #00145B;\n    font-weight: 600;\n}\n\n.project-task-header-container>.divider {\n    padding: 2px;\n    background: #000000;\n}\n\n.project-task-header-container>.description {\n    font-size: 0.8125rem;\n    color: #808080;\n    font-weight: 600;\n    padding: 8px 0 0 0;\n}\n\n.add-task-button-container>.divider {\n    padding: 1px;\n    background: #B7B7B7;\n}\n\n.project-tasks-area {\n    margin-top: 12px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.task {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: #F8F8F8;\n    border: #D2D2D2 solid 1px;\n    padding: 23px 17px;\n    border-radius: 23px;\n    transition: 0.15s;\n}\n\n.task>.left-side {\n    display: flex;\n    align-items: center;\n    gap: 57px;\n}\n\n.task>.right-side {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.task>.right-side>.option-container {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.task>.right-side>.option-container>button {\n    display: flex;\n    align-items: center;\n    height: 27.8px;\n    width: 27.8px;\n}\n\n.task>.right-side>.option-container>button>img {\n    display: flex;\n    height: 27.8px;\n    width: 27.8px;\n}\n\n.task>.left-side>.checkMark {\n    display: flex;\n    border-radius: 100px;\n    width: 31px;\n    height: 31px;\n    justify-content: center;\n    align-items: center;\n    transition: 0.15s;\n}\n\n.task>.left-side>.checkMark>img {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 22px;\n    height: 22px;\n    transition: 0.15s;\n}\n\n.easy {\n    border: #14FF00 solid 3px;\n}\n\n.medium {\n    border: #FF6B00 solid 3px;\n}\n\n.hard {\n    border: #FF0000 solid 3px;\n}\n\n.easy-complete {\n    background: #6DFF60;\n}\n\n.medium-complete {\n    background: #FF862E;\n}\n\n.hard-complete {\n    background: #FE3030;\n}\n\n.task>.left-side>.name {\n    display: flex;\n    color: #232323;\n    font-size: 1.5rem;\n    font-weight: 600;\n}\n\n.task>.right-side>.due-date {\n    display: flex;\n    color: #232323;\n    font-size: 1.25rem;\n    font-weight: 600;\n}\n\n#task_option_1,\n#task_option_2,\n#task_option_3 {\n    filter: none;\n    transition: 0.15s;\n}\n\n#task_option_1:hover,\n#task_option_2:hover,\n#task_option_3:hover {\n    filter: hue-rotate(10deg) brightness(400%) saturate(200%) contrast(80%);\n    transition: 0.15s;\n}\n\n#add_project_modal,\n#add_task_modal,\n#info_task_modal,\n#edit_task_modal {\n    /* Hidden by default */\n    position: fixed;\n    /* Stay in place */\n    z-index: 1;\n    /* Sit on top */\n    width: 100%;\n    /* Full width */\n    height: 100%;\n    /* Full height */\n    overflow: auto;\n    /* Enable scroll if needed */\n    background-color: rgb(0, 0, 0);\n    /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.4);\n    /* Black w/ opacity */\n    transition: 0.15s;\n}\n\n#add_project_modal>.modal-container {\n    display: flex;\n    width: 521.66px;\n    flex-direction: column;\n    background: #FFFFFF;\n    border-radius: 10px;\n    top: 50%;\n    left: 50%;\n    position: fixed;\n    transform: translate(-50%, -50%);\n}\n\n.invalid {\n    border: #FF8E8E solid 2px;\n}\n\n.add-project-nav,\n.add-task-nav,\n.info-task-nav,\n.edit-task-nav {\n    display: flex;\n    justify-content: space-between;\n    background: #00145B;\n    padding: 12px 18px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.heading-container {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    gap: 17.25px;\n}\n\n.heading-container>img {\n    width: 61.21px;\n    height: 61.21px;\n}\n\n.heading-container>header {\n    color: #FFFFFF;\n    font-size: 2rem;\n    font-weight: 600;\n}\n\n#add_project_close_button,\n#add_task_close_button,\n#info_task_close_button,\n#edit_task_close_button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: 0.15s;\n\n}\n\n#add_project_close_button:hover,\n#add_task_close_button:hover,\n#info_task_close_button:hover,\n#edit_task_close_button:hover {\n    filter: brightness(0) saturate(100%) invert(33%) sepia(90%) saturate(600%) hue-rotate(200deg);\n    transition: 0.15s;\n}\n\n\n\n#add_project_close_button>img,\n#add_task_close_button>img,\n#info_task_close_button>img,\n#edit_task_close_button>img {\n    width: 42.17px;\n    height: 42.17px;\n}\n\nfieldset {\n    display: flex;\n    flex-direction: column;\n    border: none;\n    gap: 5px;\n}\n\n.modal-container>form {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    padding: 36px 54px;\n    gap: 18px;\n}\n\n.modal-container>form>fieldset>.field {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.modal-container>form>fieldset>.field>label,\n.modal-container>form>fieldset>.bottom-row>.field>label {\n    display: flex;\n    color: #5B5B5B;\n    font-weight: 600;\n    font-size: 1rem;\n    gap: 10px;\n}\n\n.modal-container>form>fieldset>.field>label>span,\n.modal-container>form>fieldset>.bottom-row>.field>label>span {\n    display: flex;\n    color: #FF0000;\n    font-weight: 600;\n    font-size: 1rem;\n}\n\n.modal-container>form>fieldset>.field>input,\n.modal-container>form>fieldset>.field>textarea {\n    display: flex;\n    border: #DCDCDC solid 2px;\n    padding: 15px 19px;\n    background: #F8F8F8;\n    font-weight: 600;\n    color: #5B5B5B;\n    font-size: 1rem;\n    resize: none;\n    border-radius: 10px;\n}\n\n#add_project_button_save,\n#add_task_button_save,\n#edit_task_button_save {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 5px 113px;\n    background: #00145B;\n    border-radius: 13px;\n    transition: 0.15s;\n}\n\n#add_project_button_save:hover,\n#add_task_button_save:hover,\n#edit_task_button_save:hover {\n    background: #1444EE;\n    transition: 0.15s;\n}\n\n#add_project_button_save>img,\n#add_task_button_save>img,\n#edit_task_button_save>img {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 45.96px;\n    height: 45.96px;\n}\n\n.modal-container>form>fieldset>.button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#add_task_modal>.modal-container,\n#info_task_modal>.modal-container,\n#edit_task_modal>.modal-container {\n    display: flex;\n    width: 521.66px;\n    flex-direction: column;\n    background: #FFFFFF;\n    border-radius: 10px;\n    top: 50%;\n    left: 50%;\n    position: fixed;\n    transform: translate(-50%, -50%);\n}\n\n#add_task_modal>.modal-container>fieldset>.bottom-row,\n#info_task_modal>.modal-container>form>fieldset>.bottom-row,\n#edit_task_modal>.modal-container>form>fieldset>.bottom-row {\n    display: flex;\n    justify-content: space-between;\n}\n\n.half {\n    padding: 11px 17px;\n    font-size: 1rem;\n    font-weight: 600;\n    border-radius: 10px;\n    border: #DCDCDC solid 2px;\n    width: 100%;\n    color: #5B5B5B;\n}\n\n.bottom-row {\n    display: flex;\n    gap: 6px;\n}\n\n.bottom-row>.field {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    width: 100%;\n}\n\n#add_task_button_save,\n#edit_task_button_save {\n    margin-top: 50px;\n}"],"sourceRoot":""}]);
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
                Form.resetFields(AddTaskForm.#nameField, AddTaskForm.#descriptionField, AddTaskForm.#dueDateField, AddTaskForm.#difficultyField);
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

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");


class Project {

  static projects = new Proxy([], {
    set(target, property, value) {
      target[property] = value;
      Project.saveProjects();
      return true;
    }
  });



  constructor(projectName, projectDescription) {
    this.name = projectName;
    this.description = projectDescription;
    this.tasks = new Proxy([], {
      set: (target, property, value) => {
        target[property] = value;
        Project.saveProjects();
        return true;
      }
    });

    Project.#sendProjectInformation(this);
  }

  static saveProjects() {
    console.log("Autosaved Projects");
    localStorage.setItem("projects", JSON.stringify(Project.projects));
  }


  static #sendProjectInformation(project) {
    this.projects.push(project);
    console.log(this.projects);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__.Navigation.createProjectButton(project);
  }

  addTask(title, description, dueDate, difficulty, complete) {
    if (!_dom_js__WEBPACK_IMPORTED_MODULE_0__.AddTaskForm.Validation() && _dom_js__WEBPACK_IMPORTED_MODULE_0__.Navigation.currentProject == this) return;
    const task = new Task(title, description, dueDate, difficulty, complete);
    this.tasks.push(task);
    console.log(`Added Task: ${task.title}`);
    if (_dom_js__WEBPACK_IMPORTED_MODULE_0__.Navigation.currentProject == this) _dom_js__WEBPACK_IMPORTED_MODULE_0__.Navigation.displayTask(task);
  }

  removeTask(task) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] == task) {
        console.log(`Removed Task: ${task.title}`);
        this.tasks.splice(i, 1);
        Project.saveProjects();
      }
    }
  }

}

class Task {

  constructor(title, description, dueDate, difficulty, complete = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.difficulty = difficulty;
    this.complete = complete ? true : false;

    const handler = {
      set(target, property, value) {
        target[property] = value;
        Project.saveProjects();
        return true;
      },
      get(target, property, receiver) {
        if (property === "__target") return target;
        return Reflect.get(target, property, receiver);
      }
    };

    const proxy = new Proxy(this, handler);

    return proxy;
  }

  editTask(title, description, dueDate, difficulty, complete) {
    if (!_dom_js__WEBPACK_IMPORTED_MODULE_0__.EditTaskForm.Validation()) return;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.difficulty = difficulty;
    this.complete = complete;
    console.log(`Edited Task: ${this.title}`);
  }

  infoTask() {
    _dom_js__WEBPACK_IMPORTED_MODULE_0__.InfoTaskForm.setInfo(this.__target);
  }

}

class LocalStorage {

  static getProjects() {
    //localStorage.removeItem("projects");
    if (localStorage.getItem("projects")) {
      console.log(localStorage.getItem("projects"));
      const savedProjects = JSON.parse(localStorage.projects);

      for (let i = 0; i < savedProjects.length; i++) {
        const savedProject = savedProjects[i];
        const savedProjectTasks = savedProject.tasks;

        const project = new Project(savedProject.name, savedProject.description);
        for (let j = 0; j < savedProjectTasks.length; j++) {
          const task = savedProjectTasks[j];
          console.log("Task about to be added");
          project.addTask(task.title, task.description, task.dueDate, task.difficulty, task.complete);
        }
      }
    }
  }
}


LocalStorage.getProjects();

_dom_js__WEBPACK_IMPORTED_MODULE_0__.Navigation.inboxTasksButton.addEventListener("mouseup", () => _dom_js__WEBPACK_IMPORTED_MODULE_0__.Navigation.displayInboxTasks(Project.projects));
_dom_js__WEBPACK_IMPORTED_MODULE_0__.Navigation.thisWeeksTasksButton.addEventListener("mouseup", () => _dom_js__WEBPACK_IMPORTED_MODULE_0__.Navigation.displayThisWeekTasks(Project.projects));
_dom_js__WEBPACK_IMPORTED_MODULE_0__.Navigation.todaysTasksButton.addEventListener("mouseup", () => _dom_js__WEBPACK_IMPORTED_MODULE_0__.Navigation.displayTodayTasks(Project.projects));

_dom_js__WEBPACK_IMPORTED_MODULE_0__.Navigation.addProjectButton.addEventListener("mouseup", () => _dom_js__WEBPACK_IMPORTED_MODULE_0__.AddProjectForm.openForm());



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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todo.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdGQUF3RixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksT0FBTyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLFFBQVEsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sUUFBUSxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sUUFBUSxZQUFZLGFBQWEsU0FBUyxRQUFRLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUs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QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwQ0FBMEM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixzRkFBc0YsWUFBWTtBQUNsRyxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxdEJzQjtBQUNVO0FBQ1M7QUFDRTtBQUNOO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQzZDO0FBQ0s7QUFDVDtBQUN3QjtBQUNGO0FBQ1E7QUFDTDs7QUFFbkQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0REFBNEQsdUNBQUs7QUFDakUsNERBQTRELGdEQUFLO0FBQ2pFLDREQUE0RCwrQ0FBUTtBQUNwRSw0REFBNEQsMENBQU87QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsaURBQWE7QUFDM0UsNkRBQTZELDRDQUFTO0FBQ3RFLGtFQUFrRSw4Q0FBVztBQUM3RSwwREFBMEQsNENBQVM7QUFDbkUsK0RBQStELDZEQUFnQjtBQUMvRSwyREFBMkQsaURBQWE7O0FBRXhFLDREQUE0RCxpREFBYTtBQUN6RSxnRUFBZ0UsMkRBQWdCOztBQUVoRiwyREFBMkQsaUVBQW1CO0FBQzlFLGdFQUFnRSw4REFBaUI7QUFDakYsNERBQTRELGlEQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDekUsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCa0I7O0FBRS9GOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7Ozs7QUFJSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQVU7QUFDZDs7QUFFQTtBQUNBLFNBQVMsZ0RBQVcsaUJBQWlCLCtDQUFVO0FBQy9DO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQyxRQUFRLCtDQUFVLHlCQUF5QiwrQ0FBVTtBQUNyRDs7QUFFQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQSxxQ0FBcUMsV0FBVztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVMsaURBQVk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxXQUFXO0FBQzNDOztBQUVBO0FBQ0EsSUFBSSxpREFBWTtBQUNoQjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQiwwQkFBMEI7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qiw4QkFBOEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsK0NBQVUsb0RBQW9ELCtDQUFVO0FBQ3hFLCtDQUFVLHdEQUF3RCwrQ0FBVTtBQUM1RSwrQ0FBVSxxREFBcUQsK0NBQVU7O0FBRXpFLCtDQUFVLG9EQUFvRCxtREFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9naXQtcmVhZHktdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9naXQtcmVhZHktdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ2l0LXJlYWR5LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9naXQtcmVhZHktdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9naXQtcmVhZHktdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ2l0LXJlYWR5LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9naXQtcmVhZHktdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9naXQtcmVhZHktdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9zcmMvdG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogUmVzZXQgZGVmYXVsdCBicm93c2VyIHN0eWxlcyAqL1xuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogXCJJbnRlclwiO1xufVxuXG4ubm8tdHJhbnNpdGlvbiAqIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAtbW96LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAtbXMtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIC1vLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qIE1ha2UgaHRtbCBhbmQgYm9keSB0YWtlIHVwIHRoZSBmdWxsIGhlaWdodCAqL1xuaHRtbCxcbmJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLyogVXNlIGZsZXhib3ggb24gdGhlIGJvZHkgdG8gY2VudGVyIGNvbnRlbnQgKi9cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuYnV0dG9uLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbmlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBpbmhlcml0O1xufVxuXG5cbi5tYWluLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICMwMDE0NUI7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBwYWRkaW5nOiAyMHB4IDM3cHg7XG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xufVxuXG5oZWFkZXI+LnRpdGxlIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTcuNSU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi13aWR0aDogMzM2cHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI0VCRUJFQjtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnRhc2stYnV0dG9ucy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMzclO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDogMzRweDtcbiAgICBwYWRkaW5nOiAwIDQzcHg7XG59XG5cbi50YXNrLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNGNEY0RjQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTlweDtcbiAgICBwYWRkaW5nOiAxMS41cHggMjIuNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDogMTMuNXB4O1xuICAgIHRyYW5zaXRpb246IDAuMTVzO1xufVxuXG4udGFzay1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMxNDQ0RUU7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi50YXNrLWJ1dHRvbi1uYW1lIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjNTg1ODU4O1xufVxuXG4udGFzay1idXR0b246aG92ZXIgLmluYm94IHtcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxJSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMTQ4ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDEwMCUpO1xuXG59XG5cbi50YXNrLWJ1dHRvbjpob3ZlciAudG9kYXkge1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDElKSBzYXR1cmF0ZSgyJSkgaHVlLXJvdGF0ZSgxNDhkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoMTAwJSk7XG5cbn1cblxuLnRhc2stYnV0dG9uOmhvdmVyIC50aGlzLXdlZWsge1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDElKSBzYXR1cmF0ZSgyJSkgaHVlLXJvdGF0ZSgxNDhkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoMTAwJSk7XG5cbn1cblxuLnRhc2stYnV0dG9uOmhvdmVyIC5hZGQtcHJvamVjdCB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMSUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDE0OGRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCgxMDAlKTtcblxufVxuXG4udGFzay1idXR0b246aG92ZXIgLnRhc2stYnV0dG9uLW5hbWUge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaW5ib3gge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy4vaW5ib3gucG5nJyk7ICovXG59XG5cbi50b2RheSB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnLi9jYWxlbmRhci10b2RheS5wbmcnKTsgKi9cbn1cblxuLnRoaXMtd2VlayB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnLi9jYWxlbmRhci10b2RheS5wbmcnKTsgKi9cbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiA2MyU7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBnYXA6IDMxcHg7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lci1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDdweDtcbiAgICBwYWRkaW5nOiAwIDI2cHg7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lci1oZWFkZXI+LnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwMDE0NUI7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG4ucHJvamVjdC1jb250YWluZXItaGVhZGVyPi5kaXZpZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIHBhZGRpbmc6IDJweDtcbn1cblxuLnByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uYWRkLXByb2plY3QsXG4uYWRkLXRhc2staW1nIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL3BsdXMtYm94LnBuZycpOyAqL1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDQzcHg7XG59XG5cbi5wcm9qZWN0LXRhYnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMCA0MXB4O1xuICAgIGdhcDogMTJweDtcbn1cblxuI3Byb2plY3RfdGFiIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzAwMTQ1QjtcbiAgICBwYWRkaW5nOiAxMHB4IDE5LjVweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcbn1cblxuI3Byb2plY3RfdGFiOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTQ0NEVFO1xuICAgIHRyYW5zaXRpb246IDAuMTVzO1xufVxuXG4ucHJvamVjdC10YXNrLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDY3cHggMzQwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogMC4xNTBzO1xufVxuXG4uYWRkLXRhc2stYnV0dG9uLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cblxuLmFkZC10YXNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICMwMDE0NUI7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgcGFkZGluZzogMTBweCAxNi41cHg7XG4gICAgZ2FwOiAxOHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgbWFyZ2luLXRvcDogMjFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHRyYW5zaXRpb246IDAuMTVzO1xufVxuXG4uYWRkLXRhc2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMxNDQ0RUU7XG59XG5cbi5hZGQtdGFzay10ZXh0IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnByb2plY3QtdGFzay1oZWFkZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbn1cblxuLnByb2plY3QtdGFzay1oZWFkZXItY29udGFpbmVyPi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGNvbG9yOiAjMDAxNDVCO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5wcm9qZWN0LXRhc2staGVhZGVyLWNvbnRhaW5lcj4uZGl2aWRlciB7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG5cbi5wcm9qZWN0LXRhc2staGVhZGVyLWNvbnRhaW5lcj4uZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogOHB4IDAgMCAwO1xufVxuXG4uYWRkLXRhc2stYnV0dG9uLWNvbnRhaW5lcj4uZGl2aWRlciB7XG4gICAgcGFkZGluZzogMXB4O1xuICAgIGJhY2tncm91bmQ6ICNCN0I3Qjc7XG59XG5cbi5wcm9qZWN0LXRhc2tzLWFyZWEge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTVweDtcbn1cblxuLnRhc2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcbiAgICBib3JkZXI6ICNEMkQyRDIgc29saWQgMXB4O1xuICAgIHBhZGRpbmc6IDIzcHggMTdweDtcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICAgIHRyYW5zaXRpb246IDAuMTVzO1xufVxuXG4udGFzaz4ubGVmdC1zaWRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1N3B4O1xufVxuXG4udGFzaz4ucmlnaHQtc2lkZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbn1cblxuLnRhc2s+LnJpZ2h0LXNpZGU+Lm9wdGlvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbn1cblxuLnRhc2s+LnJpZ2h0LXNpZGU+Lm9wdGlvbi1jb250YWluZXI+YnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyNy44cHg7XG4gICAgd2lkdGg6IDI3LjhweDtcbn1cblxuLnRhc2s+LnJpZ2h0LXNpZGU+Lm9wdGlvbi1jb250YWluZXI+YnV0dG9uPmltZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDI3LjhweDtcbiAgICB3aWR0aDogMjcuOHB4O1xufVxuXG4udGFzaz4ubGVmdC1zaWRlPi5jaGVja01hcmsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgd2lkdGg6IDMxcHg7XG4gICAgaGVpZ2h0OiAzMXB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XG59XG5cbi50YXNrPi5sZWZ0LXNpZGU+LmNoZWNrTWFyaz5pbWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XG59XG5cbi5lYXN5IHtcbiAgICBib3JkZXI6ICMxNEZGMDAgc29saWQgM3B4O1xufVxuXG4ubWVkaXVtIHtcbiAgICBib3JkZXI6ICNGRjZCMDAgc29saWQgM3B4O1xufVxuXG4uaGFyZCB7XG4gICAgYm9yZGVyOiAjRkYwMDAwIHNvbGlkIDNweDtcbn1cblxuLmVhc3ktY29tcGxldGUge1xuICAgIGJhY2tncm91bmQ6ICM2REZGNjA7XG59XG5cbi5tZWRpdW0tY29tcGxldGUge1xuICAgIGJhY2tncm91bmQ6ICNGRjg2MkU7XG59XG5cbi5oYXJkLWNvbXBsZXRlIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkUzMDMwO1xufVxuXG4udGFzaz4ubGVmdC1zaWRlPi5uYW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiAjMjMyMzIzO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50YXNrPi5yaWdodC1zaWRlPi5kdWUtZGF0ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogIzIzMjMyMztcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuI3Rhc2tfb3B0aW9uXzEsXG4jdGFza19vcHRpb25fMixcbiN0YXNrX29wdGlvbl8zIHtcbiAgICBmaWx0ZXI6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XG59XG5cbiN0YXNrX29wdGlvbl8xOmhvdmVyLFxuI3Rhc2tfb3B0aW9uXzI6aG92ZXIsXG4jdGFza19vcHRpb25fMzpob3ZlciB7XG4gICAgZmlsdGVyOiBodWUtcm90YXRlKDEwZGVnKSBicmlnaHRuZXNzKDQwMCUpIHNhdHVyYXRlKDIwMCUpIGNvbnRyYXN0KDgwJSk7XG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XG59XG5cbiNhZGRfcHJvamVjdF9tb2RhbCxcbiNhZGRfdGFza19tb2RhbCxcbiNpbmZvX3Rhc2tfbW9kYWwsXG4jZWRpdF90YXNrX21vZGFsIHtcbiAgICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgei1pbmRleDogMTtcbiAgICAvKiBTaXQgb24gdG9wICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogRnVsbCB3aWR0aCAqL1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvKiBGdWxsIGhlaWdodCAqL1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcbn1cblxuI2FkZF9wcm9qZWN0X21vZGFsPi5tb2RhbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDUyMS42NnB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5pbnZhbGlkIHtcbiAgICBib3JkZXI6ICNGRjhFOEUgc29saWQgMnB4O1xufVxuXG4uYWRkLXByb2plY3QtbmF2LFxuLmFkZC10YXNrLW5hdixcbi5pbmZvLXRhc2stbmF2LFxuLmVkaXQtdGFzay1uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQ6ICMwMDE0NUI7XG4gICAgcGFkZGluZzogMTJweCAxOHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE3LjI1cHg7XG59XG5cbi5oZWFkaW5nLWNvbnRhaW5lcj5pbWcge1xuICAgIHdpZHRoOiA2MS4yMXB4O1xuICAgIGhlaWdodDogNjEuMjFweDtcbn1cblxuLmhlYWRpbmctY29udGFpbmVyPmhlYWRlciB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNhZGRfcHJvamVjdF9jbG9zZV9idXR0b24sXG4jYWRkX3Rhc2tfY2xvc2VfYnV0dG9uLFxuI2luZm9fdGFza19jbG9zZV9idXR0b24sXG4jZWRpdF90YXNrX2Nsb3NlX2J1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IDAuMTVzO1xuXG59XG5cbiNhZGRfcHJvamVjdF9jbG9zZV9idXR0b246aG92ZXIsXG4jYWRkX3Rhc2tfY2xvc2VfYnV0dG9uOmhvdmVyLFxuI2luZm9fdGFza19jbG9zZV9idXR0b246aG92ZXIsXG4jZWRpdF90YXNrX2Nsb3NlX2J1dHRvbjpob3ZlciB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCgzMyUpIHNlcGlhKDkwJSkgc2F0dXJhdGUoNjAwJSkgaHVlLXJvdGF0ZSgyMDBkZWcpO1xuICAgIHRyYW5zaXRpb246IDAuMTVzO1xufVxuXG5cblxuI2FkZF9wcm9qZWN0X2Nsb3NlX2J1dHRvbj5pbWcsXG4jYWRkX3Rhc2tfY2xvc2VfYnV0dG9uPmltZyxcbiNpbmZvX3Rhc2tfY2xvc2VfYnV0dG9uPmltZyxcbiNlZGl0X3Rhc2tfY2xvc2VfYnV0dG9uPmltZyB7XG4gICAgd2lkdGg6IDQyLjE3cHg7XG4gICAgaGVpZ2h0OiA0Mi4xN3B4O1xufVxuXG5maWVsZHNldCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBnYXA6IDVweDtcbn1cblxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDM2cHggNTRweDtcbiAgICBnYXA6IDE4cHg7XG59XG5cbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbn1cblxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5maWVsZD5sYWJlbCxcbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uYm90dG9tLXJvdz4uZmllbGQ+bGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICM1QjVCNUI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmZpZWxkPmxhYmVsPnNwYW4sXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmJvdHRvbS1yb3c+LmZpZWxkPmxhYmVsPnNwYW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICNGRjAwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uZmllbGQ+aW5wdXQsXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmZpZWxkPnRleHRhcmVhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogI0RDRENEQyBzb2xpZCAycHg7XG4gICAgcGFkZGluZzogMTVweCAxOXB4O1xuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzVCNUI1QjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcmVzaXplOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNhZGRfcHJvamVjdF9idXR0b25fc2F2ZSxcbiNhZGRfdGFza19idXR0b25fc2F2ZSxcbiNlZGl0X3Rhc2tfYnV0dG9uX3NhdmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHggMTEzcHg7XG4gICAgYmFja2dyb3VuZDogIzAwMTQ1QjtcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICAgIHRyYW5zaXRpb246IDAuMTVzO1xufVxuXG4jYWRkX3Byb2plY3RfYnV0dG9uX3NhdmU6aG92ZXIsXG4jYWRkX3Rhc2tfYnV0dG9uX3NhdmU6aG92ZXIsXG4jZWRpdF90YXNrX2J1dHRvbl9zYXZlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTQ0NEVFO1xuICAgIHRyYW5zaXRpb246IDAuMTVzO1xufVxuXG4jYWRkX3Byb2plY3RfYnV0dG9uX3NhdmU+aW1nLFxuI2FkZF90YXNrX2J1dHRvbl9zYXZlPmltZyxcbiNlZGl0X3Rhc2tfYnV0dG9uX3NhdmU+aW1nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDQ1Ljk2cHg7XG4gICAgaGVpZ2h0OiA0NS45NnB4O1xufVxuXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2FkZF90YXNrX21vZGFsPi5tb2RhbC1jb250YWluZXIsXG4jaW5mb190YXNrX21vZGFsPi5tb2RhbC1jb250YWluZXIsXG4jZWRpdF90YXNrX21vZGFsPi5tb2RhbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDUyMS42NnB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbiNhZGRfdGFza19tb2RhbD4ubW9kYWwtY29udGFpbmVyPmZpZWxkc2V0Pi5ib3R0b20tcm93LFxuI2luZm9fdGFza19tb2RhbD4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmJvdHRvbS1yb3csXG4jZWRpdF90YXNrX21vZGFsPi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uYm90dG9tLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5oYWxmIHtcbiAgICBwYWRkaW5nOiAxMXB4IDE3cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6ICNEQ0RDREMgc29saWQgMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjNUI1QjVCO1xufVxuXG4uYm90dG9tLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDZweDtcbn1cblxuLmJvdHRvbS1yb3c+LmZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNhZGRfdGFza19idXR0b25fc2F2ZSxcbiNlZGl0X3Rhc2tfYnV0dG9uX3NhdmUge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpQ0FBaUM7QUFDakM7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsMkJBQTJCO0FBQy9COztBQUVBLCtDQUErQztBQUMvQzs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBLDhDQUE4QztBQUM5QztJQUNJLGFBQWE7SUFDYixzQkFBc0I7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O0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFJlc2V0IGRlZmF1bHQgYnJvd3NlciBzdHlsZXMgKi9cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIjtcXG59XFxuXFxuLm5vLXRyYW5zaXRpb24gKiB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAtbW96LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gICAgLW1zLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gICAgLW8tdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIE1ha2UgaHRtbCBhbmQgYm9keSB0YWtlIHVwIHRoZSBmdWxsIGhlaWdodCAqL1xcbmh0bWwsXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIFVzZSBmbGV4Ym94IG9uIHRoZSBib2R5IHRvIGNlbnRlciBjb250ZW50ICovXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAxNDVCO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIHBhZGRpbmc6IDIwcHggMzdweDtcXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xcbn1cXG5cXG5oZWFkZXI+LnRpdGxlIHtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTcuNSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWluLXdpZHRoOiAzMzZweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI0VCRUJFQjtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGFzay1idXR0b25zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDM3JTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMzRweDtcXG4gICAgcGFkZGluZzogMCA0M3B4O1xcbn1cXG5cXG4udGFzay1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICNGNEY0RjQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE5cHg7XFxuICAgIHBhZGRpbmc6IDExLjVweCAyMi41cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDEzLjVweDtcXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XFxufVxcblxcbi50YXNrLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMxNDQ0RUU7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG4udGFzay1idXR0b24tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogIzU4NTg1ODtcXG59XFxuXFxuLnRhc2stYnV0dG9uOmhvdmVyIC5pbmJveCB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDElKSBzYXR1cmF0ZSgyJSkgaHVlLXJvdGF0ZSgxNDhkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoMTAwJSk7XFxuXFxufVxcblxcbi50YXNrLWJ1dHRvbjpob3ZlciAudG9kYXkge1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxJSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMTQ4ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDEwMCUpO1xcblxcbn1cXG5cXG4udGFzay1idXR0b246aG92ZXIgLnRoaXMtd2VlayB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDElKSBzYXR1cmF0ZSgyJSkgaHVlLXJvdGF0ZSgxNDhkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoMTAwJSk7XFxuXFxufVxcblxcbi50YXNrLWJ1dHRvbjpob3ZlciAuYWRkLXByb2plY3Qge1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxJSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMTQ4ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDEwMCUpO1xcblxcbn1cXG5cXG4udGFzay1idXR0b246aG92ZXIgLnRhc2stYnV0dG9uLW5hbWUge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmluYm94IHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL2luYm94LnBuZycpOyAqL1xcbn1cXG5cXG4udG9kYXkge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy4vY2FsZW5kYXItdG9kYXkucG5nJyk7ICovXFxufVxcblxcbi50aGlzLXdlZWsge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy4vY2FsZW5kYXItdG9kYXkucG5nJyk7ICovXFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogNjMlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDMxcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lci1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDdweDtcXG4gICAgcGFkZGluZzogMCAyNnB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXItaGVhZGVyPi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiAjMDAxNDVCO1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lci1oZWFkZXI+LmRpdmlkZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LFxcbi5hZGQtdGFzay1pbWcge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy4vcGx1cy1ib3gucG5nJyk7ICovXFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgNDNweDtcXG59XFxuXFxuLnByb2plY3QtdGFicy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAwIDQxcHg7XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuI3Byb2plY3RfdGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogIzAwMTQ1QjtcXG4gICAgcGFkZGluZzogMTBweCAxOS41cHg7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xcbn1cXG5cXG4jcHJvamVjdF90YWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMTQ0NEVFO1xcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcXG59XFxuXFxuLnByb2plY3QtdGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA2N3B4IDM0MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogMC4xNTBzO1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAxNDVCO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgcGFkZGluZzogMTBweCAxNi41cHg7XFxuICAgIGdhcDogMThweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgbWFyZ2luLXRvcDogMjFweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XFxufVxcblxcbi5hZGQtdGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMxNDQ0RUU7XFxufVxcblxcbi5hZGQtdGFzay10ZXh0IHtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxufVxcblxcbi5wcm9qZWN0LXRhc2staGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVxcblxcbi5wcm9qZWN0LXRhc2staGVhZGVyLWNvbnRhaW5lcj4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGNvbG9yOiAjMDAxNDVCO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrLWhlYWRlci1jb250YWluZXI+LmRpdmlkZXIge1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxufVxcblxcbi5wcm9qZWN0LXRhc2staGVhZGVyLWNvbnRhaW5lcj4uZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcXG4gICAgY29sb3I6ICM4MDgwODA7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBhZGRpbmc6IDhweCAwIDAgMDtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbi1jb250YWluZXI+LmRpdmlkZXIge1xcbiAgICBwYWRkaW5nOiAxcHg7XFxuICAgIGJhY2tncm91bmQ6ICNCN0I3Qjc7XFxufVxcblxcbi5wcm9qZWN0LXRhc2tzLWFyZWEge1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xcbiAgICBib3JkZXI6ICNEMkQyRDIgc29saWQgMXB4O1xcbiAgICBwYWRkaW5nOiAyM3B4IDE3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XFxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xcbn1cXG5cXG4udGFzaz4ubGVmdC1zaWRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1N3B4O1xcbn1cXG5cXG4udGFzaz4ucmlnaHQtc2lkZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnRhc2s+LnJpZ2h0LXNpZGU+Lm9wdGlvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnRhc2s+LnJpZ2h0LXNpZGU+Lm9wdGlvbi1jb250YWluZXI+YnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNy44cHg7XFxuICAgIHdpZHRoOiAyNy44cHg7XFxufVxcblxcbi50YXNrPi5yaWdodC1zaWRlPi5vcHRpb24tY29udGFpbmVyPmJ1dHRvbj5pbWcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDI3LjhweDtcXG4gICAgd2lkdGg6IDI3LjhweDtcXG59XFxuXFxuLnRhc2s+LmxlZnQtc2lkZT4uY2hlY2tNYXJrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIHdpZHRoOiAzMXB4O1xcbiAgICBoZWlnaHQ6IDMxcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcXG59XFxuXFxuLnRhc2s+LmxlZnQtc2lkZT4uY2hlY2tNYXJrPmltZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMjJweDtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcXG59XFxuXFxuLmVhc3kge1xcbiAgICBib3JkZXI6ICMxNEZGMDAgc29saWQgM3B4O1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gICAgYm9yZGVyOiAjRkY2QjAwIHNvbGlkIDNweDtcXG59XFxuXFxuLmhhcmQge1xcbiAgICBib3JkZXI6ICNGRjAwMDAgc29saWQgM3B4O1xcbn1cXG5cXG4uZWFzeS1jb21wbGV0ZSB7XFxuICAgIGJhY2tncm91bmQ6ICM2REZGNjA7XFxufVxcblxcbi5tZWRpdW0tY29tcGxldGUge1xcbiAgICBiYWNrZ3JvdW5kOiAjRkY4NjJFO1xcbn1cXG5cXG4uaGFyZC1jb21wbGV0ZSB7XFxuICAgIGJhY2tncm91bmQ6ICNGRTMwMzA7XFxufVxcblxcbi50YXNrPi5sZWZ0LXNpZGU+Lm5hbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogIzIzMjMyMztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi50YXNrPi5yaWdodC1zaWRlPi5kdWUtZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiAjMjMyMzIzO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiN0YXNrX29wdGlvbl8xLFxcbiN0YXNrX29wdGlvbl8yLFxcbiN0YXNrX29wdGlvbl8zIHtcXG4gICAgZmlsdGVyOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcXG59XFxuXFxuI3Rhc2tfb3B0aW9uXzE6aG92ZXIsXFxuI3Rhc2tfb3B0aW9uXzI6aG92ZXIsXFxuI3Rhc2tfb3B0aW9uXzM6aG92ZXIge1xcbiAgICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMTBkZWcpIGJyaWdodG5lc3MoNDAwJSkgc2F0dXJhdGUoMjAwJSkgY29udHJhc3QoODAlKTtcXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XFxufVxcblxcbiNhZGRfcHJvamVjdF9tb2RhbCxcXG4jYWRkX3Rhc2tfbW9kYWwsXFxuI2luZm9fdGFza19tb2RhbCxcXG4jZWRpdF90YXNrX21vZGFsIHtcXG4gICAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7XFxuICAgIC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XFxufVxcblxcbiNhZGRfcHJvamVjdF9tb2RhbD4ubW9kYWwtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDUyMS42NnB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uaW52YWxpZCB7XFxuICAgIGJvcmRlcjogI0ZGOEU4RSBzb2xpZCAycHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1uYXYsXFxuLmFkZC10YXNrLW5hdixcXG4uaW5mby10YXNrLW5hdixcXG4uZWRpdC10YXNrLW5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZDogIzAwMTQ1QjtcXG4gICAgcGFkZGluZzogMTJweCAxOHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLmhlYWRpbmctY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE3LjI1cHg7XFxufVxcblxcbi5oZWFkaW5nLWNvbnRhaW5lcj5pbWcge1xcbiAgICB3aWR0aDogNjEuMjFweDtcXG4gICAgaGVpZ2h0OiA2MS4yMXB4O1xcbn1cXG5cXG4uaGVhZGluZy1jb250YWluZXI+aGVhZGVyIHtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI2FkZF9wcm9qZWN0X2Nsb3NlX2J1dHRvbixcXG4jYWRkX3Rhc2tfY2xvc2VfYnV0dG9uLFxcbiNpbmZvX3Rhc2tfY2xvc2VfYnV0dG9uLFxcbiNlZGl0X3Rhc2tfY2xvc2VfYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xcblxcbn1cXG5cXG4jYWRkX3Byb2plY3RfY2xvc2VfYnV0dG9uOmhvdmVyLFxcbiNhZGRfdGFza19jbG9zZV9idXR0b246aG92ZXIsXFxuI2luZm9fdGFza19jbG9zZV9idXR0b246aG92ZXIsXFxuI2VkaXRfdGFza19jbG9zZV9idXR0b246aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDMzJSkgc2VwaWEoOTAlKSBzYXR1cmF0ZSg2MDAlKSBodWUtcm90YXRlKDIwMGRlZyk7XFxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xcbn1cXG5cXG5cXG5cXG4jYWRkX3Byb2plY3RfY2xvc2VfYnV0dG9uPmltZyxcXG4jYWRkX3Rhc2tfY2xvc2VfYnV0dG9uPmltZyxcXG4jaW5mb190YXNrX2Nsb3NlX2J1dHRvbj5pbWcsXFxuI2VkaXRfdGFza19jbG9zZV9idXR0b24+aW1nIHtcXG4gICAgd2lkdGg6IDQyLjE3cHg7XFxuICAgIGhlaWdodDogNDIuMTdweDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyPmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDM2cHggNTRweDtcXG4gICAgZ2FwOiAxOHB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmZpZWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uZmllbGQ+bGFiZWwsXFxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5ib3R0b20tcm93Pi5maWVsZD5sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiAjNUI1QjVCO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5maWVsZD5sYWJlbD5zcGFuLFxcbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uYm90dG9tLXJvdz4uZmllbGQ+bGFiZWw+c3BhbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiAjRkYwMDAwO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uZmllbGQ+aW5wdXQsXFxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5maWVsZD50ZXh0YXJlYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlcjogI0RDRENEQyBzb2xpZCAycHg7XFxuICAgIHBhZGRpbmc6IDE1cHggMTlweDtcXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICM1QjVCNUI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jYWRkX3Byb2plY3RfYnV0dG9uX3NhdmUsXFxuI2FkZF90YXNrX2J1dHRvbl9zYXZlLFxcbiNlZGl0X3Rhc2tfYnV0dG9uX3NhdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDExM3B4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAxNDVCO1xcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcXG59XFxuXFxuI2FkZF9wcm9qZWN0X2J1dHRvbl9zYXZlOmhvdmVyLFxcbiNhZGRfdGFza19idXR0b25fc2F2ZTpob3ZlcixcXG4jZWRpdF90YXNrX2J1dHRvbl9zYXZlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzE0NDRFRTtcXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XFxufVxcblxcbiNhZGRfcHJvamVjdF9idXR0b25fc2F2ZT5pbWcsXFxuI2FkZF90YXNrX2J1dHRvbl9zYXZlPmltZyxcXG4jZWRpdF90YXNrX2J1dHRvbl9zYXZlPmltZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNDUuOTZweDtcXG4gICAgaGVpZ2h0OiA0NS45NnB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FkZF90YXNrX21vZGFsPi5tb2RhbC1jb250YWluZXIsXFxuI2luZm9fdGFza19tb2RhbD4ubW9kYWwtY29udGFpbmVyLFxcbiNlZGl0X3Rhc2tfbW9kYWw+Lm1vZGFsLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA1MjEuNjZweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuI2FkZF90YXNrX21vZGFsPi5tb2RhbC1jb250YWluZXI+ZmllbGRzZXQ+LmJvdHRvbS1yb3csXFxuI2luZm9fdGFza19tb2RhbD4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmJvdHRvbS1yb3csXFxuI2VkaXRfdGFza19tb2RhbD4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmJvdHRvbS1yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5oYWxmIHtcXG4gICAgcGFkZGluZzogMTFweCAxN3B4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogI0RDRENEQyBzb2xpZCAycHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogIzVCNUI1QjtcXG59XFxuXFxuLmJvdHRvbS1yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDZweDtcXG59XFxuXFxuLmJvdHRvbS1yb3c+LmZpZWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYWRkX3Rhc2tfYnV0dG9uX3NhdmUsXFxuI2VkaXRfdGFza19idXR0b25fc2F2ZSB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYWRkSW1hZ2UgZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBXaGl0ZVBsdXNCb3ggZnJvbSBcIi4vd2hpdGUtcGx1cy1ib3gucG5nXCI7XG5pbXBvcnQgRGFya0JsdWVOb3RlYm9va0VkaXRPdXRsaW5lIGZyb20gXCIuL2RhcmstYmx1ZS1ub3RlYm9vay1lZGl0LW91dGxpbmUucG5nXCI7XG5pbXBvcnQgRGFya0JsdWVJbmZvcm1hdGlvbk91dGxpbmUgZnJvbSBcIi4vZGFyay1ibHVlLWluZm9ybWF0aW9uLW91dGxpbmUucG5nXCI7XG5pbXBvcnQgRGFya0JsdWVUcmFzaENhbk91dGxpbmUgZnJvbSBcIi4vZGFyay1ibHVlLXRyYXNoLWNhbi1vdXRsaW5lLnBuZ1wiO1xuaW1wb3J0IFdoaXRlQ2hlY2sgZnJvbSBcIi4vd2hpdGUtY2hlY2sucG5nXCI7XG5cbi8vaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vdG9kby5qcyc7IC8vIEltcG9ydCB0aGUgUHJvamVjdCBjbGFzcyBmcm9tIHRvZG8uanNcblxuXG5EYXRlLnByb3RvdHlwZS5nZXRXZWVrID0gZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgZGF5SW5NaWxsaXNlY29uZHMgPSA4NjQwMDAwMDtcbiAgICBjb25zdCBmaXJzdE9mSmFuID0gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCAwLCAxLCAwLCAwLCAwKTtcbiAgICBjb25zdCBmaXJzdE9mSmFuRGF5ID0gKGZpcnN0T2ZKYW4uZ2V0RGF5KCkgPT0gMCkgPyA3IDogZmlyc3RPZkphbi5nZXREYXkoKTtcbiAgICBjb25zdCBkYXlzRm9yTmV4dE1vbmRheSA9ICg4IC0gZmlyc3RPZkphbkRheSk7XG4gICAgY29uc3QgZmlyc3RPZkphbk5leHRNb25kYXlUaW1lID0gZmlyc3RPZkphbi5nZXRUaW1lKCkgKyAoZGF5c0Zvck5leHRNb25kYXkgKiBkYXlJbk1pbGxpc2Vjb25kcyk7XG4gICAgY29uc3QgZmlyc3RNb25kYXlPZlllYXJUaW1lID0gKGZpcnN0T2ZKYW5EYXkgPiAxKSA/IGZpcnN0T2ZKYW5OZXh0TW9uZGF5VGltZSA6IGZpcnN0T2ZKYW4uZ2V0VGltZSgpO1xuICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgdGhpcy5nZXREYXRlKCksIDAsIDAsIDApO1xuICAgIGNvbnN0IHRpbWUgPSBuZXdEYXRlLmdldFRpbWUoKTtcbiAgICBjb25zdCBkYXlzRnJvbUZpcnN0TW9uZGF5ID0gTWF0aC5yb3VuZCgoKHRpbWUgLSBmaXJzdE1vbmRheU9mWWVhclRpbWUpIC8gZGF5SW5NaWxsaXNlY29uZHMpKTtcblxuICAgIHJldHVybiAoZGF5c0Zyb21GaXJzdE1vbmRheSA+PSAwICYmIGRheXNGcm9tRmlyc3RNb25kYXkgPCAzNjQpID8gTWF0aC5jZWlsKChkYXlzRnJvbUZpcnN0TW9uZGF5ICsgMSkgLyA3KSA6IDUyO1xufTtcblxuY2xhc3MgVGVtcGxhdGVzIHtcblxuICAgIHN0YXRpYyBkaXNwbGF5UHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGlmIChOYXZpZ2F0aW9uLmN1cnJlbnRQcm9qZWN0ID09IHByb2plY3QpIHJldHVybjtcbiAgICAgICAgdGhpcy4jcmVtb3ZlUHJvamVjdEluZm9ybWF0aW9uKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgUHJvamVjdEluZm9ybWF0aW9uLmRpc3BsYXlQcm9qZWN0SW5mbyhwcm9qZWN0KTtcbiAgICAgICAgICAgIFRhc2tJbmZvcm1hdGlvbi5kaXNwbGF5QWxsVGFza3MocHJvamVjdC50YXNrcyk7XG4gICAgICAgIH0sIDE1MCk7XG4gICAgfVxuXG4gICAgc3RhdGljICNzb3J0VGFza3MoYXJyKSB7XG4gICAgICAgIGFyci5zb3J0KCh0YXNrMSwgdGFzazIpID0+IG5ldyBEYXRlKHRhc2sxLmR1ZURhdGUpIC0gbmV3IERhdGUodGFzazIuZHVlRGF0ZSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5SW5ib3hUYXNrcyhwcm9qZWN0cykge1xuICAgICAgICBUZW1wbGF0ZXMuI3JlbW92ZVByb2plY3RJbmZvcm1hdGlvbigpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgVGFza0luZm9ybWF0aW9uLmRpc3BsYXlGaWx0ZXJIZWFkZXJzKFwiSW5ib3hcIik7XG5cbiAgICAgICAgICAgIE5hdmlnYXRpb24uY3VycmVudFByb2plY3QgPSBudWxsO1xuXG4gICAgICAgICAgICBjb25zdCBpbmJveFRhc2tzID0gW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbaV07XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpbmJveFByb2plY3RUYXNrcyA9IHByb2plY3QudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5jb21wbGV0ZSA9PSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgaW5ib3hQcm9qZWN0VGFza3MubWFwKCh0YXNrKSA9PiBpbmJveFRhc2tzLnB1c2godGFzaykpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIFRlbXBsYXRlcy4jc29ydFRhc2tzKGluYm94VGFza3MpO1xuXG4gICAgICAgICAgICBpbmJveFRhc2tzLm1hcCgodGFzaykgPT4gdGhpcy5kaXNwbGF5VGFzayh0YXNrKSk7XG4gICAgICAgIH0sIDE1MCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3BsYXlUb2RheVRhc2tzKHByb2plY3RzKSB7XG4gICAgICAgIFRlbXBsYXRlcy4jcmVtb3ZlUHJvamVjdEluZm9ybWF0aW9uKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgVGFza0luZm9ybWF0aW9uLmRpc3BsYXlGaWx0ZXJIZWFkZXJzKFwiVG9kYXlcIik7XG5cbiAgICAgICAgICAgIE5hdmlnYXRpb24uY3VycmVudFByb2plY3QgPSBudWxsO1xuXG4gICAgICAgICAgICBjb25zdCB0b2RheVRhc2tzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVPYmogPSBuZXcgRGF0ZSgpO1xuXG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IGRhdGVPYmouZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgIGxldCBtb250aCA9IGRhdGVPYmouZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUgPCAxMCkgZGF0ZSA9IGAwJHtkYXRlfWA7XG4gICAgICAgICAgICAgICAgaWYgKG1vbnRoIDwgMTApIG1vbnRoID0gYDAke21vbnRofWA7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kYXlQcm9qZWN0VGFza3MgPSBwcm9qZWN0LnRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5kdWVEYXRlID09IGAke2RhdGVPYmouZ2V0RnVsbFllYXIoKX0tJHttb250aH0tJHtkYXRlfWA7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RheVByb2plY3RUYXNrcyk7XG5cbiAgICAgICAgICAgICAgICB0b2RheVByb2plY3RUYXNrcy5tYXAoKHRhc2spID0+IHRvZGF5VGFza3MucHVzaCh0YXNrKSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG9kYXlUYXNrcy5tYXAoKHRhc2spID0+IHRoaXMuZGlzcGxheVRhc2sodGFzaykpO1xuICAgICAgICB9LCAxNTApO1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5VGhpc1dlZWtUYXNrcyhwcm9qZWN0cykge1xuICAgICAgICBUZW1wbGF0ZXMuI3JlbW92ZVByb2plY3RJbmZvcm1hdGlvbigpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgVGFza0luZm9ybWF0aW9uLmRpc3BsYXlGaWx0ZXJIZWFkZXJzKFwiVGhpcyBXZWVrXCIpO1xuXG4gICAgICAgICAgICBOYXZpZ2F0aW9uLmN1cnJlbnRQcm9qZWN0ID0gbnVsbDtcblxuICAgICAgICAgICAgY29uc3QgdGhpc1dlZWtUYXNrcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlT2JqID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRoaXNXZWVrUHJvamVjdFRhc2tzID0gcHJvamVjdC50YXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRhc2suZHVlRGF0ZSkuZ2V0V2VlaygpID09IGRhdGVPYmouZ2V0V2VlaygpICYmIG5ldyBEYXRlKHRhc2suZHVlRGF0ZSkuZ2V0RnVsbFllYXIoKSA9PSBkYXRlT2JqLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgIHRoaXNXZWVrUHJvamVjdFRhc2tzLm1hcCgodGFzaykgPT4gdGhpc1dlZWtUYXNrcy5wdXNoKHRhc2spKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgVGVtcGxhdGVzLiNzb3J0VGFza3ModGhpc1dlZWtUYXNrcyk7XG4gICAgICAgICAgICB0aGlzV2Vla1Rhc2tzLm1hcCgodGFzaykgPT4gdGhpcy5kaXNwbGF5VGFzayh0YXNrKSk7XG4gICAgICAgIH0sIDE1MCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3BsYXlUYXNrKHRhc2spIHtcbiAgICAgICAgVGFza0luZm9ybWF0aW9uLmFkZFRhc2tFbGVtZW50KHRhc2spO1xuICAgIH1cblxuICAgIHN0YXRpYyBGYWRlRWxlbWVudChmYWRlSW4sIGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGZhZGVJbikge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgI3JlbW92ZVByb2plY3RJbmZvcm1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5GYWRlRWxlbWVudChmYWxzZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRhc2stY29udGFpbmVyXCIpKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VGFza3NUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdF90YXNrc19hcmVhXCIpO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Rhc2tfYnV0dG9uXCIpKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfdGFza19idXR0b25cIikucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0X3Rhc2tfaGVhZGVyX2NvbnRhaW5lclwiKSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdF90YXNrX2hlYWRlcl9jb250YWluZXJcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0VGFza3NUYWJsZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB9LCAxNTApO1xuICAgIH1cblxufVxuXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgVGVtcGxhdGVzIHtcbiAgICBzdGF0aWMgI3NpZGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RfdGFiX2NvbnRhaW5lclwiKTtcblxuICAgIHN0YXRpYyBpbmJveFRhc2tzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmJveFwiKTtcbiAgICBzdGF0aWMgdG9kYXlzVGFza3NCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5XCIpO1xuICAgIHN0YXRpYyBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfcHJvamVjdF9idXR0b25cIik7XG4gICAgc3RhdGljIHRoaXNXZWVrc1Rhc2tzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGlzX3dlZWtcIik7XG5cbiAgICBzdGF0aWMgI3Byb2plY3RCdXR0b25zID0gW107XG5cbiAgICBzdGF0aWMgI3Byb2plY3RTaG93bjtcblxuICAgIHN0YXRpYyBnZXQgY3VycmVudFByb2plY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcm9qZWN0U2hvd247XG4gICAgfTtcbiAgICBzdGF0aWMgc2V0IGN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdFNob3duID0gcHJvamVjdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBwcm9qZWN0VGFiLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBwcm9qZWN0VGFiLmlkID0gXCJwcm9qZWN0X3RhYlwiO1xuXG4gICAgICAgIHByb2plY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFByb2plY3QgIT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIFRlbXBsYXRlcy5kaXNwbGF5UHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jc2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0VGFiKTtcbiAgICAgICAgdGhpcy4jcHJvamVjdEJ1dHRvbnMucHVzaCh7IHByb2plY3Q6IHByb2plY3QsIGVsZW1lbnQ6IHByb2plY3RUYWIgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZVByb2plY3RCdXR0b24ocHJvamVjdCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI3Byb2plY3RCdXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4jcHJvamVjdEJ1dHRvbnNbaV0ucHJvamVjdCA9PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jcHJvamVjdEJ1dHRvbnNbaV0uZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNwcm9qZWN0QnV0dG9ucy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbW92ZWQgUHJvamVjdCBCdXR0b246ICR7cHJvamVjdC5uYW1lfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmNsYXNzIEluZm9ybWF0aW9uIGV4dGVuZHMgVGVtcGxhdGVzIHsgfVxuXG5jbGFzcyBQcm9qZWN0SW5mb3JtYXRpb24gZXh0ZW5kcyBJbmZvcm1hdGlvbiB7XG5cbiAgICBzdGF0aWMgZGlzcGxheVByb2plY3RJbmZvKHByb2plY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3ByaXZhdGVEaXNwbGF5UHJvamVjdEluZm8ocHJvamVjdCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgI3ByaXZhdGVEaXNwbGF5UHJvamVjdEluZm8ocHJvamVjdCkge1xuICAgICAgICB0aGlzLkZhZGVFbGVtZW50KHRydWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10YXNrLWNvbnRhaW5lclwiKSk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10YXNrLWNvbnRhaW5lclwiKTtcblxuICAgICAgICBjb25zdCBoZWFkZXJfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaGVhZGVyX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YXNrLWhlYWRlci1jb250YWluZXJcIik7XG4gICAgICAgIGhlYWRlcl9jb250YWluZXIuaWQgPSBcInByb2plY3RfdGFza19oZWFkZXJfY29udGFpbmVyXCI7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICAgICAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKFwiZGl2aWRlclwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcblxuICAgICAgICBoZWFkZXJfY29udGFpbmVyLmFwcGVuZCh0aXRsZSwgZGl2aWRlciwgZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoaGVhZGVyX2NvbnRhaW5lciwgY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgIHRoaXMuI2FkZFRhc2tCdXR0b24oKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgI2FkZFRhc2tCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdF90YXNrX2hlYWRlcl9jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbl90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgYnV0dG9uX3RleHQudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG5cbiAgICAgICAgYnV0dG9uLmlkID0gXCJhZGRfdGFza19idXR0b25cIjtcbiAgICAgICAgYnV0dG9uX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ1dHRvblwiLCBcImFkZC10YXNrXCIpO1xuICAgICAgICBidXR0b25fdGV4dC5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stdGV4dFwiLCBcInRhc2stYnV0dG9uLW5hbWVcIik7XG4gICAgICAgIGRpdmlkZXIuY2xhc3NMaXN0LmFkZChcImRpdmlkZXJcIik7XG5cblxuXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBBZGRUYXNrRm9ybS50b2dnbGVGb3JtKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJ1dHRvbl9jb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgYnV0dG9uX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZpZGVyKTtcblxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uX3RleHQpO1xuXG4gICAgICAgIGFkZEltYWdlKGJ1dHRvbiwgV2hpdGVQbHVzQm94LCBcImFkZC10YXNrLWltZ1wiKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChidXR0b25fY29udGFpbmVyKTtcbiAgICB9XG59XG5cbmNsYXNzIFRhc2tJbmZvcm1hdGlvbiBleHRlbmRzIEluZm9ybWF0aW9uIHtcblxuICAgIHN0YXRpYyAjY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0X3Rhc2tzX2FyZWFcIik7XG5cblxuICAgIHN0YXRpYyBhZGRUYXNrRWxlbWVudCh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tfY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGxlZnRfc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHJpZ2h0X3NpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBjaGVja19tYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgdGFza19uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgZHVlX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBvcHRpb25fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnN0IGluZm9ybWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgICAgICB0YXNrX25hbWUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGR1ZV9kYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXG4gICAgICAgIHRhc2tfY29udGVudC5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICAgICAgICBsZWZ0X3NpZGUuY2xhc3NMaXN0LmFkZChcImxlZnQtc2lkZVwiKTtcbiAgICAgICAgcmlnaHRfc2lkZS5jbGFzc0xpc3QuYWRkKFwicmlnaHQtc2lkZVwiKTtcblxuICAgICAgICBjaGVja19tYXJrLmNsYXNzTGlzdC5hZGQoXCJjaGVja01hcmtcIiwgdGFzay5kaWZmaWN1bHR5KTtcbiAgICAgICAgdGFza19uYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuICAgICAgICBkdWVfZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XG5cbiAgICAgICAgb3B0aW9uX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLWNvbnRhaW5lclwiKTtcblxuICAgICAgICBlZGl0LmlkID0gXCJ0YXNrX29wdGlvbl8xXCI7XG4gICAgICAgIGluZm9ybWF0aW9uLmlkID0gXCJ0YXNrX29wdGlvbl8yXCI7XG4gICAgICAgIGRlbC5pZCA9IFwidGFza19vcHRpb25fM1wiO1xuXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09IHRydWUpIHtcbiAgICAgICAgICAgIGNoZWNrX21hcmsuY2xhc3NMaXN0LmFkZCh0YXNrLmRpZmZpY3VsdHkudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICBjaGVja19tYXJrLmNsYXNzTGlzdC5hZGQoYCR7dGFzay5kaWZmaWN1bHR5LnRvTG93ZXJDYXNlKCl9LWNvbXBsZXRlYCk7XG4gICAgICAgICAgICBhZGRJbWFnZShjaGVja19tYXJrLCBXaGl0ZUNoZWNrLCBcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrX21hcmsuY2xhc3NMaXN0LmFkZCh0YXNrLmRpZmZpY3VsdHkudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRJbWFnZShlZGl0LCBEYXJrQmx1ZU5vdGVib29rRWRpdE91dGxpbmUsIFwiXCIpO1xuICAgICAgICBhZGRJbWFnZShpbmZvcm1hdGlvbiwgRGFya0JsdWVJbmZvcm1hdGlvbk91dGxpbmUsIFwiXCIpO1xuICAgICAgICBhZGRJbWFnZShkZWwsIERhcmtCbHVlVHJhc2hDYW5PdXRsaW5lLCBcIlwiKTtcblxuICAgICAgICB0aGlzLiNjb250YWluZXIuYXBwZW5kKHRhc2tfY29udGVudCk7XG4gICAgICAgIHRhc2tfY29udGVudC5hcHBlbmQobGVmdF9zaWRlKTtcbiAgICAgICAgdGFza19jb250ZW50LmFwcGVuZChyaWdodF9zaWRlKTtcbiAgICAgICAgbGVmdF9zaWRlLmFwcGVuZChjaGVja19tYXJrKTtcbiAgICAgICAgbGVmdF9zaWRlLmFwcGVuZCh0YXNrX25hbWUpO1xuICAgICAgICByaWdodF9zaWRlLmFwcGVuZChkdWVfZGF0ZSk7XG4gICAgICAgIHJpZ2h0X3NpZGUuYXBwZW5kKG9wdGlvbl9jb250YWluZXIpO1xuICAgICAgICBvcHRpb25fY29udGFpbmVyLmFwcGVuZChlZGl0KTtcbiAgICAgICAgb3B0aW9uX2NvbnRhaW5lci5hcHBlbmQoaW5mb3JtYXRpb24pO1xuICAgICAgICBvcHRpb25fY29udGFpbmVyLmFwcGVuZChkZWwpO1xuXG4gICAgICAgIGxldCBkZWJvdW5jZSA9IGZhbHNlO1xuXG4gICAgICAgIGNoZWNrX21hcmsuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFkZWJvdW5jZSkge1xuICAgICAgICAgICAgICAgIGRlYm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiNjaGVja01hcmtMb2dpYyh0YXNrLCBjaGVja19tYXJrKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGVib3VuY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LCAxNTApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHRoaXMuI2Rpc3BsYXlUYXNrRWRpdCh0YXNrLCB0YXNrX2NvbnRlbnQpKTtcbiAgICAgICAgaW5mb3JtYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4gdGhpcy4jZGlzcGxheVRhc2tJbmZvKHRhc2spKTtcbiAgICAgICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHRoaXMuI2RlbGV0ZVRhc2tFbGVtZW50KHRhc2ssIHRhc2tfY29udGVudCkpO1xuXG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3BsYXlGaWx0ZXJIZWFkZXJzKGZpbHRlck5hbWUpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRhc2stY29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLkZhZGVFbGVtZW50KHRydWUsIGNvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IGhlYWRlcl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBoZWFkZXJfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRhc2staGVhZGVyLWNvbnRhaW5lclwiKTtcbiAgICAgICAgaGVhZGVyX2NvbnRhaW5lci5pZCA9IFwicHJvamVjdF90YXNrX2hlYWRlcl9jb250YWluZXJcIjtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICAgICAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKFwiZGl2aWRlclwiKTtcblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGZpbHRlck5hbWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICBoZWFkZXJfY29udGFpbmVyLmFwcGVuZCh0aXRsZSwgZGl2aWRlcik7XG5cbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShoZWFkZXJfY29udGFpbmVyLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3RhdGljICNwcml2YXRlRWRpdFRhc2tFbGVtZW50KHRhc2ssIGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtc2lkZSAubmFtZScpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtc2lkZSAuZHVlLWRhdGUnKTtcbiAgICAgICAgY29uc3QgY2hlY2tNYXJrID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1zaWRlIC5jaGVja01hcmsnKTtcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcblxuICAgICAgICBjaGVja01hcmsucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgIGlmIChjaGVja01hcmsuY2xhc3NMaXN0LmNvbnRhaW5zKGBlYXN5YCkpIHtcbiAgICAgICAgICAgIGNoZWNrTWFyay5jbGFzc0xpc3QucmVtb3ZlKFwiZWFzeVwiKTtcbiAgICAgICAgICAgIGlmIChjaGVja01hcmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWFzeS1jb21wbGV0ZVwiKSkge1xuICAgICAgICAgICAgICAgIGNoZWNrTWFyay5jbGFzc0xpc3QucmVtb3ZlKFwiZWFzeS1jb21wbGV0ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjaGVja01hcmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVkaXVtXCIpKSB7XG4gICAgICAgICAgICBjaGVja01hcmsuY2xhc3NMaXN0LnJlbW92ZShcIm1lZGl1bVwiKTtcbiAgICAgICAgICAgIGlmIChjaGVja01hcmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVkaXVtLWNvbXBsZXRlXCIpKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tNYXJrLmNsYXNzTGlzdC5yZW1vdmUoXCJtZWRpdW0tY29tcGxldGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2hlY2tNYXJrLmNsYXNzTGlzdC5jb250YWlucyhcImhhcmRcIikpIHtcbiAgICAgICAgICAgIGNoZWNrTWFyay5jbGFzc0xpc3QucmVtb3ZlKFwiaGFyZFwiKTtcbiAgICAgICAgICAgIGlmIChjaGVja01hcmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFyZC1jb21wbGV0ZVwiKSkge1xuICAgICAgICAgICAgICAgIGNoZWNrTWFyay5jbGFzc0xpc3QucmVtb3ZlKFwiaGFyZC1jb21wbGV0ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09IHRydWUpIHtcbiAgICAgICAgICAgIGNoZWNrTWFyay5jbGFzc0xpc3QuYWRkKHRhc2suZGlmZmljdWx0eS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIGNoZWNrTWFyay5jbGFzc0xpc3QuYWRkKGAke3Rhc2suZGlmZmljdWx0eS50b0xvd2VyQ2FzZSgpfS1jb21wbGV0ZWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tNYXJrLmNsYXNzTGlzdC5hZGQodGFzay5kaWZmaWN1bHR5LnRvTG93ZXJDYXNlKCkpOztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc3RhdGljIGVkaXRUYXNrRWxlbWVudCh0YXNrLCBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcml2YXRlRWRpdFRhc2tFbGVtZW50KHRhc2ssIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5QWxsVGFza3ModGFza3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3ByaXZhdGVEaXNwbGF5QWxsVGFza3ModGFza3MpO1xuICAgIH1cblxuICAgIHN0YXRpYyAjcHJpdmF0ZURpc3BsYXlBbGxUYXNrcyh0YXNrcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFRhc2tFbGVtZW50KHRhc2tzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyAjZGVsZXRlVGFza0VsZW1lbnQodGFzaywgZWxlbWVudCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gTmF2aWdhdGlvbi5jdXJyZW50UHJvamVjdDtcbiAgICAgICAgVGVtcGxhdGVzLkZhZGVFbGVtZW50KGZhbHNlLCBlbGVtZW50KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0LnJlbW92ZVRhc2sodGFzayk7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9LCAxNTApO1xuICAgIH1cblxuICAgIHN0YXRpYyAjZGlzcGxheVRhc2tFZGl0KHRhc2ssIGVsZW1lbnQpIHtcbiAgICAgICAgRWRpdFRhc2tGb3JtLnNldEVkaXQodGFzaywgZWxlbWVudCk7XG4gICAgfVxuXG5cblxuICAgIHN0YXRpYyAjZGlzcGxheVRhc2tJbmZvKHRhc2spIHtcbiAgICAgICAgdGFzay5pbmZvVGFzaygpO1xuICAgIH1cblxuICAgIHN0YXRpYyAjY2hlY2tNYXJrTG9naWModGFzaywgZWxlbWVudCkge1xuICAgICAgICBpZiAodGFzay5jb21wbGV0ZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXNrLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvL05hdmlnYXRpb24uRmFkZUVsZW1lbnQoZmFsc2UsIGVsZW1lbnQpO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gYHRyYW5zcGFyZW50YDtcbiAgICAgICAgICAgIGVsZW1lbnQuZmlyc3RDaGlsZC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGUgbm93IGZhbHNlOlwiLCB0YXNrKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhgJHt0YXNrLmRpZmZpY3VsdHkudG9Mb3dlckNhc2UoKX0tY29tcGxldGVgKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYCR7dGFzay5kaWZmaWN1bHR5LnRvTG93ZXJDYXNlKCl9LWNvbXBsZXRlYCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGFzay5kaWZmaWN1bHR5LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGFzay5kaWZmaWN1bHR5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2suY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb21wbGV0ZSBub3cgdHJ1ZTpcIiwgdGFzayk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7dGFzay5kaWZmaWN1bHR5LnRvTG93ZXJDYXNlKCl9LWNvbXBsZXRlYCk7XG4gICAgICAgICAgICBhZGRJbWFnZShlbGVtZW50LCBXaGl0ZUNoZWNrLCBcIlwiKTtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgICAgICAgICBlbGVtZW50LmZpcnN0Q2hpbGQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY2xhc3MgRm9ybSBleHRlbmRzIFRlbXBsYXRlcyB7XG5cbiAgICBzdGF0aWMgI2Zvcm1WYWxpZGF0aW9uTWV0aG9kKGZvcm0sIG5hbWVGaWVsZCwgZGVzY3JpcHRpb25GaWVsZCwgZHVlRGF0ZUZpZWxkLCBkaWZmaWN1bHR5RmllbGQpIHtcblxuICAgICAgICBpZiAoZm9ybSAmJiBmb3JtLmNoZWNrVmFsaWRpdHkoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKG5hbWVGaWVsZCAmJiBuYW1lRmllbGQudmFsdWUgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZXNjcmlwdGlvbkZpZWxkICYmIGRlc2NyaXB0aW9uRmllbGQudmFsdWUgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uRmllbGQuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZHVlRGF0ZUZpZWxkICYmIGR1ZURhdGVGaWVsZC52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZUZpZWxkLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZmZpY3VsdHlGaWVsZCAmJiBkaWZmaWN1bHR5RmllbGQuc2VsZWN0ZWRJbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZGlmZmljdWx0eUZpZWxkLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuICAgIHN0YXRpYyAjcHJpdmF0ZVN1Ym1pdEZvcm0oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZvcm0gc3VibWlzc2lvbiBwcmV2ZW50ZWQhXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHN1Ym1pdEZvcm0oZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdWJtaXQgZXZlbnQgdHJpZ2dlcmVkIVwiKTtcbiAgICAgICAgdGhpcy4jcHJpdmF0ZVN1Ym1pdEZvcm0oZXZlbnQpO1xuICAgIH1cblxuXG5cbiAgICBzdGF0aWMgZm9ybVZhbGlkYXRpb24oZm9ybSwgbmFtZUZpZWxkLCBkZXNjcmlwdGlvbkZpZWxkLCBkdWVEYXRlRmllbGQsIGRpZmZpY3VsdHlGaWVsZCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZm9ybVZhbGlkYXRpb25NZXRob2QoZm9ybSwgbmFtZUZpZWxkLCBkZXNjcmlwdGlvbkZpZWxkLCBkdWVEYXRlRmllbGQsIGRpZmZpY3VsdHlGaWVsZCk7XG4gICAgfVxuXG4gICAgc3RhdGljICNmb3JtUmVzZXRGaWVsZHMobmFtZUZpZWxkLCBkZXNjcmlwdGlvbkZpZWxkLCBkdWVEYXRlRmllbGQsIGRpZmZpY3VsdHlGaWVsZCkge1xuICAgICAgICBpZiAobmFtZUZpZWxkKSBuYW1lRmllbGQudmFsdWUgPSBcIlwiO1xuICAgICAgICBpZiAoZGVzY3JpcHRpb25GaWVsZCkgZGVzY3JpcHRpb25GaWVsZC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGlmIChkdWVEYXRlRmllbGQpIGR1ZURhdGVGaWVsZC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGlmIChkaWZmaWN1bHR5RmllbGQpIGRpZmZpY3VsdHlGaWVsZC5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVzZXRGaWVsZHMobmFtZUZpZWxkLCBkZXNjcmlwdGlvbkZpZWxkLCBkdWVEYXRlRmllbGQsIGRpZmZpY3VsdHlGaWVsZCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZm9ybVJlc2V0RmllbGRzKG5hbWVGaWVsZCwgZGVzY3JpcHRpb25GaWVsZCwgZHVlRGF0ZUZpZWxkLCBkaWZmaWN1bHR5RmllbGQpO1xuICAgIH1cblxufVxuXG5jbGFzcyBBZGRQcm9qZWN0Rm9ybSB7XG5cbiAgICBzdGF0aWMgI2Nsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfcHJvamVjdF9jbG9zZV9idXR0b25cIik7XG5cbiAgICBzdGF0aWMgI21vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfcHJvamVjdF9tb2RhbFwiKTtcbiAgICBzdGF0aWMgI2Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF9wcm9qZWN0X21vZGFsXCIpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbC1jb250YWluZXJcIilbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb3JtXCIpWzBdO1xuXG4gICAgc3RhdGljICNuYW1lRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF9wcm9qZWN0X25hbWVcIik7XG4gICAgc3RhdGljICNkZXNjcmlwdGlvbkZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfcHJvamVjdF9kZXNjcmlwdGlvblwiKTtcblxuICAgIHN0YXRpYyBvcGVuRm9ybSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RvZ2dsZUZvcm0oKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgI2FkZFByb2plY3QoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGltcG9ydCgnLi90b2RvLmpzJykgLy8gQWRqdXN0IHRoZSBwYXRoIHRvIHdoZXJlIHlvdXIgUHJvamVjdCBjbGFzcyBpcyBsb2NhdGVkXG4gICAgICAgICAgICAudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gT25jZSB0aGUgbW9kdWxlIGlzIGxvYWRlZCwgeW91IGNhbiBjcmVhdGUgYSBuZXcgUHJvamVjdFxuICAgICAgICAgICAgICAgIGNvbnN0IFByb2plY3QgPSBtb2R1bGUuUHJvamVjdDsgIC8vIEFjY2VzcyBQcm9qZWN0IGZyb20gdGhlIGltcG9ydGVkIG1vZHVsZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEFkZFByb2plY3RGb3JtLiNuYW1lRmllbGQudmFsdWUsIEFkZFByb2plY3RGb3JtLiNkZXNjcmlwdGlvbkZpZWxkLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoQWRkUHJvamVjdEZvcm0uI25hbWVGaWVsZC52YWx1ZSwgQWRkUHJvamVjdEZvcm0uI2Rlc2NyaXB0aW9uRmllbGQudmFsdWUpOyAvLyBDcmVhdGUgYSBuZXcgcHJvamVjdCBpbnN0YW5jZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOZXcgcHJvamVjdCBjcmVhdGVkOicsIG5ld1Byb2plY3QubmFtZSk7XG4gICAgICAgICAgICAgICAgQWRkUHJvamVjdEZvcm0uI3RvZ2dsZUZvcm0oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgUHJvamVjdCBjbGFzczonLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgI3RvZ2dsZUZvcm0oKSB7XG4gICAgICAgIGlmICghQWRkUHJvamVjdEZvcm0uI21vZGFsLm9wZW4pIHtcbiAgICAgICAgICAgIEFkZFByb2plY3RGb3JtLiNtb2RhbC5vcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIEFkZFByb2plY3RGb3JtLiNtb2RhbC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgTmF2aWdhdGlvbi5GYWRlRWxlbWVudCh0cnVlLCBBZGRQcm9qZWN0Rm9ybS4jbW9kYWwpO1xuICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgQWRkUHJvamVjdEZvcm0uI2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBBZGRQcm9qZWN0Rm9ybS4jYWRkUHJvamVjdCk7XG4gICAgICAgICAgICBBZGRQcm9qZWN0Rm9ybS4jY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgQWRkUHJvamVjdEZvcm0uI3RvZ2dsZUZvcm0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTmF2aWdhdGlvbi5GYWRlRWxlbWVudChmYWxzZSwgQWRkUHJvamVjdEZvcm0uI21vZGFsKTtcbiAgICAgICAgICAgIEFkZFByb2plY3RGb3JtLiNmb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgQWRkUHJvamVjdEZvcm0uI2FkZFByb2plY3QpO1xuICAgICAgICAgICAgQWRkUHJvamVjdEZvcm0uI2Nsb3NlQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIEFkZFByb2plY3RGb3JtLiN0b2dnbGVGb3JtKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIEZvcm0ucmVzZXRGaWVsZHMoQWRkUHJvamVjdEZvcm0uI25hbWVGaWVsZCwgQWRkUHJvamVjdEZvcm0uI2Rlc2NyaXB0aW9uRmllbGQpO1xuICAgICAgICAgICAgICAgIEFkZFByb2plY3RGb3JtLiNtb2RhbC5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9LCAxNTApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmNsYXNzIEFkZFRhc2tGb3JtIGV4dGVuZHMgRm9ybSB7XG4gICAgc3RhdGljICNtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Rhc2tfbW9kYWxcIik7XG5cbiAgICBzdGF0aWMgI2Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90YXNrX21vZGFsXCIpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbC1jb250YWluZXJcIilbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb3JtXCIpWzBdO1xuXG4gICAgc3RhdGljICNjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Rhc2tfY2xvc2VfYnV0dG9uXCIpO1xuXG4gICAgc3RhdGljICNuYW1lRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90YXNrX25hbWVcIik7XG4gICAgc3RhdGljICNkZXNjcmlwdGlvbkZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfdGFza19kZXNjcmlwdGlvblwiKTtcbiAgICBzdGF0aWMgI2R1ZURhdGVGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Rhc2tfZHVlX2RhdGVcIik7XG4gICAgc3RhdGljICNkaWZmaWN1bHR5RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90YXNrX2RpZmZpY3VsdHlcIik7XG5cbiAgICAvL3N0YXRpYyAjYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfdGFza19idXR0b25fc2F2ZVwiKTtcblxuICAgIHN0YXRpYyBWYWxpZGF0aW9uKCkge1xuICAgICAgICByZXR1cm4gRm9ybS5mb3JtVmFsaWRhdGlvbih0aGlzLiNmb3JtLCB0aGlzLiNuYW1lRmllbGQsIHRoaXMuI2Rlc2NyaXB0aW9uRmllbGQsIHRoaXMuI2R1ZURhdGVGaWVsZCwgdGhpcy4jZGlmZmljdWx0eUZpZWxkKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdG9nZ2xlRm9ybSgpIHtcbiAgICAgICAgLy9yZXR1cm4gdGhpcy4jcHJpdmF0ZVRvZ2dsZUZvcm0oKTtcbiAgICAgICAgLy9Gb3JtLnJlc2V0RmllbGRzKEFkZFRhc2tGb3JtLiNuYW1lRmllbGQsIEFkZFRhc2tGb3JtLiNkZXNjcmlwdGlvbkZpZWxkLCBBZGRUYXNrRm9ybS4jZHVlRGF0ZUZpZWxkLCBBZGRUYXNrRm9ybS4jZGlmZmljdWx0eUZpZWxkKTtcbiAgICAgICAgaWYgKCFBZGRUYXNrRm9ybS4jbW9kYWwub3Blbikge1xuICAgICAgICAgICAgQWRkVGFza0Zvcm0uI21vZGFsLm9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgQWRkVGFza0Zvcm0uI21vZGFsLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgTmF2aWdhdGlvbi5GYWRlRWxlbWVudCh0cnVlLCBBZGRUYXNrRm9ybS4jbW9kYWwpO1xuICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgQWRkVGFza0Zvcm0uI2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBBZGRUYXNrRm9ybS4jYWRkVGFzayk7XG4gICAgICAgICAgICBBZGRUYXNrRm9ybS4jY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgQWRkVGFza0Zvcm0udG9nZ2xlRm9ybSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOYXZpZ2F0aW9uLkZhZGVFbGVtZW50KGZhbHNlLCBBZGRUYXNrRm9ybS4jbW9kYWwpO1xuICAgICAgICAgICAgQWRkVGFza0Zvcm0uI2Zvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBBZGRUYXNrRm9ybS4jYWRkVGFzayk7XG4gICAgICAgICAgICBBZGRUYXNrRm9ybS4jY2xvc2VCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgQWRkVGFza0Zvcm0udG9nZ2xlRm9ybSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBGb3JtLnJlc2V0RmllbGRzKEFkZFRhc2tGb3JtLiNuYW1lRmllbGQsIEFkZFRhc2tGb3JtLiNkZXNjcmlwdGlvbkZpZWxkLCBBZGRUYXNrRm9ybS4jZHVlRGF0ZUZpZWxkLCBBZGRUYXNrRm9ybS4jZGlmZmljdWx0eUZpZWxkKTtcbiAgICAgICAgICAgICAgICBBZGRUYXNrRm9ybS4jbW9kYWwub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyAjYWRkVGFzayhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgTmF2aWdhdGlvbi5jdXJyZW50UHJvamVjdC5hZGRUYXNrKEFkZFRhc2tGb3JtLiNuYW1lRmllbGQudmFsdWUsIEFkZFRhc2tGb3JtLiNkZXNjcmlwdGlvbkZpZWxkLnZhbHVlLCBBZGRUYXNrRm9ybS4jZHVlRGF0ZUZpZWxkLnZhbHVlLCBBZGRUYXNrRm9ybS4jZGlmZmljdWx0eUZpZWxkLm9wdGlvbnNbQWRkVGFza0Zvcm0uI2RpZmZpY3VsdHlGaWVsZC5zZWxlY3RlZEluZGV4XS50ZXh0KTtcbiAgICAgICAgQWRkVGFza0Zvcm0udG9nZ2xlRm9ybSgpO1xuICAgIH1cblxuICAgIC8vIHN0YXRpYyAjcHJpdmF0ZVRvZ2dsZUZvcm0oKSB7XG5cbiAgICAvLyB9XG5cbn1cblxuY2xhc3MgRWRpdFRhc2tGb3JtIGV4dGVuZHMgRm9ybSB7XG4gICAgc3RhdGljICNtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdF90YXNrX21vZGFsXCIpO1xuXG4gICAgc3RhdGljICNmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0X3Rhc2tfbW9kYWxcIikuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLWNvbnRhaW5lclwiKVswXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvcm1cIilbMF07XG5cbiAgICBzdGF0aWMgI2Nsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0X3Rhc2tfY2xvc2VfYnV0dG9uXCIpO1xuXG4gICAgc3RhdGljICNuYW1lRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRfdGFza19uYW1lXCIpO1xuICAgIHN0YXRpYyAjZGVzY3JpcHRpb25GaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdF90YXNrX2Rlc2NyaXB0aW9uXCIpO1xuICAgIHN0YXRpYyAjZHVlRGF0ZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0X3Rhc2tfZHVlX2RhdGVcIik7XG4gICAgc3RhdGljICNkaWZmaWN1bHR5RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRfdGFza19kaWZmaWN1bHR5XCIpO1xuXG4gICAgLy9zdGF0aWMgI3NhdmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRfdGFza19idXR0b25fc2F2ZVwiKTtcblxuICAgIHN0YXRpYyAjZWRpdFRhc2tIYW5kbGVyID0gbnVsbDtcblxuICAgIHN0YXRpYyAjZWRpdFRhc2sodGFzaywgZWxlbWVudCwgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRhc2suZWRpdFRhc2soRWRpdFRhc2tGb3JtLiNuYW1lRmllbGQudmFsdWUsIEVkaXRUYXNrRm9ybS4jZGVzY3JpcHRpb25GaWVsZC52YWx1ZSwgRWRpdFRhc2tGb3JtLiNkdWVEYXRlRmllbGQudmFsdWUsIEVkaXRUYXNrRm9ybS4jZGlmZmljdWx0eUZpZWxkLm9wdGlvbnNbRWRpdFRhc2tGb3JtLiNkaWZmaWN1bHR5RmllbGQuc2VsZWN0ZWRJbmRleF0udGV4dCk7XG4gICAgICAgIFRhc2tJbmZvcm1hdGlvbi5lZGl0VGFza0VsZW1lbnQodGFzaywgZWxlbWVudCk7XG4gICAgICAgIEVkaXRUYXNrRm9ybS4jdG9nZ2xlRm9ybSh0YXNrLCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0RWRpdCh0YXNrLCBlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuI3RvZ2dsZUZvcm0odGFzaywgZWxlbWVudCk7XG4gICAgICAgIEVkaXRUYXNrRm9ybS4jbmFtZUZpZWxkLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICAgICAgRWRpdFRhc2tGb3JtLiNkZXNjcmlwdGlvbkZpZWxkLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgRWRpdFRhc2tGb3JtLiNkdWVEYXRlRmllbGQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgIEVkaXRUYXNrRm9ybS4jZGlmZmljdWx0eUZpZWxkLnNlbGVjdGVkSW5kZXggPSB0aGlzLiNjaGVja0RpZmZpY3VsdHlJbmRleCh0YXNrLmRpZmZpY3VsdHkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBWYWxpZGF0aW9uKCkge1xuICAgICAgICByZXR1cm4gRm9ybS5mb3JtVmFsaWRhdGlvbih0aGlzLiNmb3JtLCB0aGlzLiNuYW1lRmllbGQsIHRoaXMuI2Rlc2NyaXB0aW9uRmllbGQsIHRoaXMuI2R1ZURhdGVGaWVsZCwgdGhpcy4jZGlmZmljdWx0eUZpZWxkKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgI2NoZWNrRGlmZmljdWx0eUluZGV4KGRpZmZpY3VsdHkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNkaWZmaWN1bHR5RmllbGQub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuI2RpZmZpY3VsdHlGaWVsZC5vcHRpb25zW2ldLnRleHQgPT0gZGlmZmljdWx0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljICN0b2dnbGVGb3JtKHRhc2ssIGVsZW1lbnQpIHtcbiAgICAgICAgLy9Gb3JtLnJlc2V0RmllbGRzKEVkaXRUYXNrRm9ybS4jbmFtZUZpZWxkLCBFZGl0VGFza0Zvcm0uI2Rlc2NyaXB0aW9uRmllbGQsIEVkaXRUYXNrRm9ybS4jZHVlRGF0ZUZpZWxkLCBFZGl0VGFza0Zvcm0uI2RpZmZpY3VsdHlGaWVsZCk7XG4gICAgICAgIGlmICghRWRpdFRhc2tGb3JtLiNtb2RhbC5vcGVuKSB7XG4gICAgICAgICAgICBFZGl0VGFza0Zvcm0uI21vZGFsLm9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgRWRpdFRhc2tGb3JtLiNtb2RhbC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIE5hdmlnYXRpb24uRmFkZUVsZW1lbnQodHJ1ZSwgRWRpdFRhc2tGb3JtLiNtb2RhbCk7XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICBFZGl0VGFza0Zvcm0uI2VkaXRUYXNrSGFuZGxlciA9IEVkaXRUYXNrRm9ybS4jZWRpdFRhc2suYmluZCh0aGlzLCB0YXNrLCBlbGVtZW50KTtcbiAgICAgICAgICAgIEVkaXRUYXNrRm9ybS4jZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIEVkaXRUYXNrRm9ybS4jZWRpdFRhc2tIYW5kbGVyKTtcbiAgICAgICAgICAgIEVkaXRUYXNrRm9ybS4jY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgRWRpdFRhc2tGb3JtLiN0b2dnbGVGb3JtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5hdmlnYXRpb24uRmFkZUVsZW1lbnQoZmFsc2UsIEVkaXRUYXNrRm9ybS4jbW9kYWwpO1xuICAgICAgICAgICAgRWRpdFRhc2tGb3JtLiNmb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgRWRpdFRhc2tGb3JtLiNlZGl0VGFza0hhbmRsZXIpO1xuICAgICAgICAgICAgRWRpdFRhc2tGb3JtLiNjbG9zZUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBFZGl0VGFza0Zvcm0uI3RvZ2dsZUZvcm0pO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgRm9ybS5yZXNldEZpZWxkcyhFZGl0VGFza0Zvcm0uI25hbWVGaWVsZCwgRWRpdFRhc2tGb3JtLiNkZXNjcmlwdGlvbkZpZWxkLCBFZGl0VGFza0Zvcm0uI2R1ZURhdGVGaWVsZCwgRWRpdFRhc2tGb3JtLiNkaWZmaWN1bHR5RmllbGQpO1xuICAgICAgICAgICAgICAgIEVkaXRUYXNrRm9ybS4jbW9kYWwub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5jbGFzcyBJbmZvVGFza0Zvcm0gZXh0ZW5kcyBGb3JtIHtcbiAgICBzdGF0aWMgI21vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvX3Rhc2tfbW9kYWxcIik7XG5cbiAgICBzdGF0aWMgI2Nsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvX3Rhc2tfY2xvc2VfYnV0dG9uXCIpO1xuXG4gICAgc3RhdGljICNuYW1lRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9fdGFza19uYW1lXCIpO1xuICAgIHN0YXRpYyAjZGVzY3JpcHRpb25GaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb190YXNrX2Rlc2NyaXB0aW9uXCIpO1xuICAgIHN0YXRpYyAjZHVlRGF0ZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvX3Rhc2tfZHVlX2RhdGVcIik7XG4gICAgc3RhdGljICNkaWZmaWN1bHR5RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9fdGFza19kaWZmaWN1bHR5XCIpO1xuXG4gICAgc3RhdGljIHNldEluZm8odGFzaykge1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICAgICAgSW5mb1Rhc2tGb3JtLiN0b2dnbGVGb3JtKCk7XG4gICAgICAgIEluZm9UYXNrRm9ybS4jbmFtZUZpZWxkLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICAgICAgSW5mb1Rhc2tGb3JtLiNkZXNjcmlwdGlvbkZpZWxkLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgSW5mb1Rhc2tGb3JtLiNkdWVEYXRlRmllbGQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgIEluZm9UYXNrRm9ybS4jZGlmZmljdWx0eUZpZWxkLnZhbHVlID0gdGFzay5kaWZmaWN1bHR5O1xuICAgIH1cblxuICAgIHN0YXRpYyAjdG9nZ2xlRm9ybSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLiNtb2RhbC5vcGVuKSB7XG4gICAgICAgICAgICB0aGlzLiNtb2RhbC5vcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuI21vZGFsLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgTmF2aWdhdGlvbi5GYWRlRWxlbWVudCh0cnVlLCB0aGlzLiNtb2RhbCk7XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICB0aGlzLiNjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB0aGlzLiN0b2dnbGVGb3JtKCksIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5hdmlnYXRpb24uRmFkZUVsZW1lbnQoZmFsc2UsIHRoaXMuI21vZGFsKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIEZvcm0ucmVzZXRGaWVsZHModGhpcy4jbmFtZUZpZWxkLCB0aGlzLiNkZXNjcmlwdGlvbkZpZWxkLCB0aGlzLiNkdWVEYXRlRmllbGQsIHRoaXMuI2RpZmZpY3VsdHlGaWVsZCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jbW9kYWwub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgTmF2aWdhdGlvbiwgQWRkUHJvamVjdEZvcm0sIEFkZFRhc2tGb3JtLCBFZGl0VGFza0Zvcm0sIEluZm9UYXNrRm9ybSB9OyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IEluYm94IGZyb20gXCIuL2luYm94LnBuZ1wiO1xuaW1wb3J0IFRvZGF5IGZyb20gXCIuL2NhbGVuZGFyLXRvZGF5LnBuZ1wiO1xuaW1wb3J0IFRoaXNXZWVrIGZyb20gXCIuL2NhbGVuZGFyLXdlZWsucG5nXCI7XG5pbXBvcnQgUGx1c0JveCBmcm9tIFwiLi9wbHVzLWJveC5wbmdcIjtcbi8vIGltcG9ydCBXaGl0ZVBsdXNCb3ggZnJvbSBcIi4vd2hpdGUtcGx1cy1ib3gucG5nXCI7XG4vLyBpbXBvcnQgRGFya0JsdWVFZGl0IGZyb20gXCIuL2RhcmstYmx1ZS1ub3RlYm9vay1lZGl0LW91dGxpbmUucG5nXCI7XG4vLyBpbXBvcnQgRGFya0JsdWVJbmZvcm1hdGlvbiBmcm9tIFwiLi9kYXJrLWJsdWUtaW5mb3JtYXRpb24tb3V0bGluZS5wbmdcIjtcbi8vIGltcG9ydCBEYXJrQmx1ZURlbGV0ZSBmcm9tIFwiLi9kYXJrLWJsdWUtdHJhc2gtY2FuLW91dGxpbmUucG5nXCI7XG5pbXBvcnQgV2hpdGVGb2xkZXIgZnJvbSBcIi4vd2hpdGUtZm9sZGVyLnBuZ1wiO1xuaW1wb3J0IFdoaXRlQ2xvc2VCb3ggZnJvbSBcIi4vd2hpdGUtY2xvc2UtYm94LnBuZ1wiO1xuaW1wb3J0IFdoaXRlUGx1cyBmcm9tIFwiLi93aGl0ZS1wbHVzLnBuZ1wiO1xuaW1wb3J0IFdoaXRlTm90ZWJvb2tBZGQgZnJvbSBcIi4vd2hpdGUtbm90ZWJvb2stcGx1cy1vdXRsaW5lLnBuZ1wiO1xuaW1wb3J0IFdoaXRlSW5mb3JtYXRpb24gZnJvbSBcIi4vd2hpdGUtaW5mb3JtYXRpb24tb3V0bGluZS5wbmdcIjtcbmltcG9ydCBXaGl0ZUNvbnRlbnRTYXZlQWxsIGZyb20gXCIuL3doaXRlLWNvbnRlbnQtc2F2ZS1hbGwtb3V0bGluZS5wbmdcIjtcbmltcG9ydCBXaGl0ZU5vdGVib29rRWRpdCBmcm9tIFwiLi93aGl0ZS1ub3RlYm9vay1lZGl0LW91dGxpbmUucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEltYWdlKGVsZW1lbnQsIGltYWdlLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIG5ld0ltYWdlLnNyYyA9IGltYWdlO1xuICAgIGlmIChjbGFzc05hbWUgIT0gXCJcIikge1xuICAgICAgICBuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3SW1hZ2UpO1xufVxuXG5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFzay1idXR0b25cIilbMF0sIEluYm94LCBcImluYm94XCIpO1xuYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2stYnV0dG9uXCIpWzFdLCBUb2RheSwgXCJ0b2RheVwiKTtcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrLWJ1dHRvblwiKVsyXSwgVGhpc1dlZWssIFwidGhpcy13ZWVrXCIpO1xuYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2stYnV0dG9uXCIpWzNdLCBQbHVzQm94LCBcImFkZC1wcm9qZWN0XCIpO1xuLy9hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFzay1idXR0b25cIilbNF0sIFBsdXNCb3gsIFwiYWRkLXByb2plY3RcIik7XG4vL2FkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza19vcHRpb25fMVwiKSwgRGFya0JsdWVFZGl0LCBcIlwiKTtcbi8vYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrX29wdGlvbl8yXCIpLCBEYXJrQmx1ZUluZm9ybWF0aW9uLCBcIlwiKTtcbi8vYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrX29wdGlvbl8zXCIpLCBEYXJrQmx1ZURlbGV0ZSwgXCJcIik7XG5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF9wcm9qZWN0X2Nsb3NlX2J1dHRvblwiKSwgV2hpdGVDbG9zZUJveCwgXCJcIik7XG5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF9wcm9qZWN0X2J1dHRvbl9zYXZlXCIpLCBXaGl0ZVBsdXMsIFwiXCIpO1xuYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImhlYWRpbmctY29udGFpbmVyXCIpWzBdLCBXaGl0ZUZvbGRlciwgXCJcIik7XG5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90YXNrX2J1dHRvbl9zYXZlXCIpLCBXaGl0ZVBsdXMsIFwiXCIpO1xuYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfdGFza19oZWFkZXJfY29udGFpbmVyXCIpLCBXaGl0ZU5vdGVib29rQWRkLCBcIlwiKTtcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Rhc2tfY2xvc2VfYnV0dG9uXCIpLCBXaGl0ZUNsb3NlQm94LCBcIlwiKTtcblxuYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvX3Rhc2tfY2xvc2VfYnV0dG9uXCIpLCBXaGl0ZUNsb3NlQm94LCBcIlwiKTtcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb190YXNrX2hlYWRlcl9jb250YWluZXJcIiksIFdoaXRlSW5mb3JtYXRpb24sIFwiXCIpO1xuXG5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRfdGFza19idXR0b25fc2F2ZVwiKSwgV2hpdGVDb250ZW50U2F2ZUFsbCwgXCJcIik7XG5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRfdGFza19oZWFkZXJfY29udGFpbmVyXCIpLCBXaGl0ZU5vdGVib29rRWRpdCwgXCJcIik7XG5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRfdGFza19jbG9zZV9idXR0b25cIiksIFdoaXRlQ2xvc2VCb3gsIFwiXCIpOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IE5hdmlnYXRpb24sIEFkZFByb2plY3RGb3JtLCBBZGRUYXNrRm9ybSwgRWRpdFRhc2tGb3JtLCBJbmZvVGFza0Zvcm0gfSBmcm9tIFwiLi9kb20uanNcIjtcblxuY2xhc3MgUHJvamVjdCB7XG5cbiAgc3RhdGljIHByb2plY3RzID0gbmV3IFByb3h5KFtdLCB7XG4gICAgc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgICB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICBQcm9qZWN0LnNhdmVQcm9qZWN0cygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG5cbiAgY29uc3RydWN0b3IocHJvamVjdE5hbWUsIHByb2plY3REZXNjcmlwdGlvbikge1xuICAgIHRoaXMubmFtZSA9IHByb2plY3ROYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9qZWN0RGVzY3JpcHRpb247XG4gICAgdGhpcy50YXNrcyA9IG5ldyBQcm94eShbXSwge1xuICAgICAgc2V0OiAodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICBQcm9qZWN0LnNhdmVQcm9qZWN0cygpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIFByb2plY3QuI3NlbmRQcm9qZWN0SW5mb3JtYXRpb24odGhpcyk7XG4gIH1cblxuICBzdGF0aWMgc2F2ZVByb2plY3RzKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQXV0b3NhdmVkIFByb2plY3RzXCIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoUHJvamVjdC5wcm9qZWN0cykpO1xuICB9XG5cblxuICBzdGF0aWMgI3NlbmRQcm9qZWN0SW5mb3JtYXRpb24ocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb2plY3RzKTtcbiAgICBOYXZpZ2F0aW9uLmNyZWF0ZVByb2plY3RCdXR0b24ocHJvamVjdCk7XG4gIH1cblxuICBhZGRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgZGlmZmljdWx0eSwgY29tcGxldGUpIHtcbiAgICBpZiAoIUFkZFRhc2tGb3JtLlZhbGlkYXRpb24oKSAmJiBOYXZpZ2F0aW9uLmN1cnJlbnRQcm9qZWN0ID09IHRoaXMpIHJldHVybjtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBkaWZmaWN1bHR5LCBjb21wbGV0ZSk7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgIGNvbnNvbGUubG9nKGBBZGRlZCBUYXNrOiAke3Rhc2sudGl0bGV9YCk7XG4gICAgaWYgKE5hdmlnYXRpb24uY3VycmVudFByb2plY3QgPT0gdGhpcykgTmF2aWdhdGlvbi5kaXNwbGF5VGFzayh0YXNrKTtcbiAgfVxuXG4gIHJlbW92ZVRhc2sodGFzaykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMudGFza3NbaV0gPT0gdGFzaykge1xuICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZlZCBUYXNrOiAke3Rhc2sudGl0bGV9YCk7XG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBQcm9qZWN0LnNhdmVQcm9qZWN0cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbmNsYXNzIFRhc2sge1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgZGlmZmljdWx0eSwgY29tcGxldGUgPSBmYWxzZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xuICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZSA/IHRydWUgOiBmYWxzZTtcblxuICAgIGNvbnN0IGhhbmRsZXIgPSB7XG4gICAgICBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICBQcm9qZWN0LnNhdmVQcm9qZWN0cygpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBnZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYgKHByb3BlcnR5ID09PSBcIl9fdGFyZ2V0XCIpIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KHRoaXMsIGhhbmRsZXIpO1xuXG4gICAgcmV0dXJuIHByb3h5O1xuICB9XG5cbiAgZWRpdFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBkaWZmaWN1bHR5LCBjb21wbGV0ZSkge1xuICAgIGlmICghRWRpdFRhc2tGb3JtLlZhbGlkYXRpb24oKSkgcmV0dXJuO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xuICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICBjb25zb2xlLmxvZyhgRWRpdGVkIFRhc2s6ICR7dGhpcy50aXRsZX1gKTtcbiAgfVxuXG4gIGluZm9UYXNrKCkge1xuICAgIEluZm9UYXNrRm9ybS5zZXRJbmZvKHRoaXMuX190YXJnZXQpO1xuICB9XG5cbn1cblxuY2xhc3MgTG9jYWxTdG9yYWdlIHtcblxuICBzdGF0aWMgZ2V0UHJvamVjdHMoKSB7XG4gICAgLy9sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInByb2plY3RzXCIpO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB7XG4gICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICAgIGNvbnN0IHNhdmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wcm9qZWN0cyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2F2ZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzYXZlZFByb2plY3QgPSBzYXZlZFByb2plY3RzW2ldO1xuICAgICAgICBjb25zdCBzYXZlZFByb2plY3RUYXNrcyA9IHNhdmVkUHJvamVjdC50YXNrcztcblxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3Qoc2F2ZWRQcm9qZWN0Lm5hbWUsIHNhdmVkUHJvamVjdC5kZXNjcmlwdGlvbik7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2F2ZWRQcm9qZWN0VGFza3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCB0YXNrID0gc2F2ZWRQcm9qZWN0VGFza3Nbal07XG4gICAgICAgICAgY29uc29sZS5sb2coXCJUYXNrIGFib3V0IHRvIGJlIGFkZGVkXCIpO1xuICAgICAgICAgIHByb2plY3QuYWRkVGFzayh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmR1ZURhdGUsIHRhc2suZGlmZmljdWx0eSwgdGFzay5jb21wbGV0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5Mb2NhbFN0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcblxuTmF2aWdhdGlvbi5pbmJveFRhc2tzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IE5hdmlnYXRpb24uZGlzcGxheUluYm94VGFza3MoUHJvamVjdC5wcm9qZWN0cykpO1xuTmF2aWdhdGlvbi50aGlzV2Vla3NUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiBOYXZpZ2F0aW9uLmRpc3BsYXlUaGlzV2Vla1Rhc2tzKFByb2plY3QucHJvamVjdHMpKTtcbk5hdmlnYXRpb24udG9kYXlzVGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4gTmF2aWdhdGlvbi5kaXNwbGF5VG9kYXlUYXNrcyhQcm9qZWN0LnByb2plY3RzKSk7XG5cbk5hdmlnYXRpb24uYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiBBZGRQcm9qZWN0Rm9ybS5vcGVuRm9ybSgpKTtcblxuZXhwb3J0IHsgUHJvamVjdCB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==