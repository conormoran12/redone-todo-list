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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd0ZBQXdGLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxPQUFPLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sUUFBUSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQVEsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxRQUFRLFlBQVksYUFBYSxTQUFTLFFBQVEsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZ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Q0E7QUFDNkM7QUFDSztBQUNUO0FBQ3dCO0FBQ0Y7QUFDUTtBQUNMOztBQUVuRDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDREQUE0RCx1Q0FBSztBQUNqRSw0REFBNEQsZ0RBQUs7QUFDakUsNERBQTRELCtDQUFRO0FBQ3BFLDREQUE0RCwwQ0FBTztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxpREFBYTtBQUMzRSw2REFBNkQsNENBQVM7QUFDdEUsa0VBQWtFLDhDQUFXO0FBQzdFLDBEQUEwRCw0Q0FBUztBQUNuRSwrREFBK0QsNkRBQWdCO0FBQy9FLDJEQUEyRCxpREFBYTs7QUFFeEUsNERBQTRELGlEQUFhO0FBQ3pFLGdFQUFnRSwyREFBZ0I7O0FBRWhGLDJEQUEyRCxpRUFBbUI7QUFDOUUsZ0VBQWdFLDhEQUFpQjtBQUNqRiw0REFBNEQsaURBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0N6RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0LXJlYWR5LXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9naXQtcmVhZHktdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ2l0LXJlYWR5LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9naXQtcmVhZHktdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ2l0LXJlYWR5LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2dpdC1yZWFkeS10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2l0LXJlYWR5LXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFJlc2V0IGRlZmF1bHQgYnJvd3NlciBzdHlsZXMgKi9cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcbn1cblxuLm5vLXRyYW5zaXRpb24gKiB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgLW1zLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAtby10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vKiBNYWtlIGh0bWwgYW5kIGJvZHkgdGFrZSB1cCB0aGUgZnVsbCBoZWlnaHQgKi9cbmh0bWwsXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIFVzZSBmbGV4Ym94IG9uIHRoZSBib2R5IHRvIGNlbnRlciBjb250ZW50ICovXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmJ1dHRvbixcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogaW5oZXJpdDtcbn1cblxuXG4ubWFpbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjMDAxNDVCO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgcGFkZGluZzogMjBweCAzN3B4O1xuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcbn1cblxuaGVhZGVyPi50aXRsZSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDE3LjUlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDMzNnB4O1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNFQkVCRUI7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50YXNrLWJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDM3JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBnYXA6IDM0cHg7XG4gICAgcGFkZGluZzogMCA0M3B4O1xufVxuXG4udGFzay1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xuICAgIGJvcmRlci1yYWRpdXM6IDE5cHg7XG4gICAgcGFkZGluZzogMTEuNXB4IDIyLjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBnYXA6IDEzLjVweDtcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcbn1cblxuLnRhc2stYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTQ0NEVFO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4udGFzay1idXR0b24tbmFtZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzU4NTg1ODtcbn1cblxuLnRhc2stYnV0dG9uOmhvdmVyIC5pbmJveCB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMSUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDE0OGRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCgxMDAlKTtcblxufVxuXG4udGFzay1idXR0b246aG92ZXIgLnRvZGF5IHtcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxJSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMTQ4ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDEwMCUpO1xuXG59XG5cbi50YXNrLWJ1dHRvbjpob3ZlciAudGhpcy13ZWVrIHtcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxJSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMTQ4ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDEwMCUpO1xuXG59XG5cbi50YXNrLWJ1dHRvbjpob3ZlciAuYWRkLXByb2plY3Qge1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDElKSBzYXR1cmF0ZSgyJSkgaHVlLXJvdGF0ZSgxNDhkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoMTAwJSk7XG5cbn1cblxuLnRhc2stYnV0dG9uOmhvdmVyIC50YXNrLWJ1dHRvbi1uYW1lIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmluYm94IHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL2luYm94LnBuZycpOyAqL1xufVxuXG4udG9kYXkge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy4vY2FsZW5kYXItdG9kYXkucG5nJyk7ICovXG59XG5cbi50aGlzLXdlZWsge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy4vY2FsZW5kYXItdG9kYXkucG5nJyk7ICovXG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogNjMlO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgZ2FwOiAzMXB4O1xufVxuXG4ucHJvamVjdC1jb250YWluZXItaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA3cHg7XG4gICAgcGFkZGluZzogMCAyNnB4O1xufVxuXG4ucHJvamVjdC1jb250YWluZXItaGVhZGVyPi50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDAxNDVCO1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLnByb2plY3QtY29udGFpbmVyLWhlYWRlcj4uZGl2aWRlciB7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICBwYWRkaW5nOiAycHg7XG59XG5cbi5wcm9qZWN0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbn1cblxuLmFkZC1wcm9qZWN0LFxuLmFkZC10YXNrLWltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnLi9wbHVzLWJveC5wbmcnKTsgKi9cbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCA0M3B4O1xufVxuXG4ucHJvamVjdC10YWJzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDAgNDFweDtcbiAgICBnYXA6IDEycHg7XG59XG5cbiNwcm9qZWN0X3RhYiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICMwMDE0NUI7XG4gICAgcGFkZGluZzogMTBweCAxOS41cHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XG59XG5cbiNwcm9qZWN0X3RhYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzE0NDRFRTtcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcbn1cblxuLnByb2plY3QtdGFzay1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiA2N3B4IDM0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IDAuMTUwcztcbn1cblxuLmFkZC10YXNrLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG59XG5cbi5hZGQtdGFzayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjMDAxNDVCO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHBhZGRpbmc6IDEwcHggMTYuNXB4O1xuICAgIGdhcDogMThweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcbn1cblxuLmFkZC10YXNrOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTQ0NEVFO1xufVxuXG4uYWRkLXRhc2stdGV4dCB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5wcm9qZWN0LXRhc2staGVhZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG59XG5cbi5wcm9qZWN0LXRhc2staGVhZGVyLWNvbnRhaW5lcj4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBjb2xvcjogIzAwMTQ1QjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucHJvamVjdC10YXNrLWhlYWRlci1jb250YWluZXI+LmRpdmlkZXIge1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuXG4ucHJvamVjdC10YXNrLWhlYWRlci1jb250YWluZXI+LmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDhweCAwIDAgMDtcbn1cblxuLmFkZC10YXNrLWJ1dHRvbi1jb250YWluZXI+LmRpdmlkZXIge1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjQjdCN0I3O1xufVxuXG4ucHJvamVjdC10YXNrcy1hcmVhIHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE1cHg7XG59XG5cbi50YXNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XG4gICAgYm9yZGVyOiAjRDJEMkQyIHNvbGlkIDFweDtcbiAgICBwYWRkaW5nOiAyM3B4IDE3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcbn1cblxuLnRhc2s+LmxlZnQtc2lkZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNTdweDtcbn1cblxuLnRhc2s+LnJpZ2h0LXNpZGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi50YXNrPi5yaWdodC1zaWRlPi5vcHRpb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG59XG5cbi50YXNrPi5yaWdodC1zaWRlPi5vcHRpb24tY29udGFpbmVyPmJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMjcuOHB4O1xuICAgIHdpZHRoOiAyNy44cHg7XG59XG5cbi50YXNrPi5yaWdodC1zaWRlPi5vcHRpb24tY29udGFpbmVyPmJ1dHRvbj5pbWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAyNy44cHg7XG4gICAgd2lkdGg6IDI3LjhweDtcbn1cblxuLnRhc2s+LmxlZnQtc2lkZT4uY2hlY2tNYXJrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHdpZHRoOiAzMXB4O1xuICAgIGhlaWdodDogMzFweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IDAuMTVzO1xufVxuXG4udGFzaz4ubGVmdC1zaWRlPi5jaGVja01hcms+aW1nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHRyYW5zaXRpb246IDAuMTVzO1xufVxuXG4uZWFzeSB7XG4gICAgYm9yZGVyOiAjMTRGRjAwIHNvbGlkIDNweDtcbn1cblxuLm1lZGl1bSB7XG4gICAgYm9yZGVyOiAjRkY2QjAwIHNvbGlkIDNweDtcbn1cblxuLmhhcmQge1xuICAgIGJvcmRlcjogI0ZGMDAwMCBzb2xpZCAzcHg7XG59XG5cbi5lYXN5LWNvbXBsZXRlIHtcbiAgICBiYWNrZ3JvdW5kOiAjNkRGRjYwO1xufVxuXG4ubWVkaXVtLWNvbXBsZXRlIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkY4NjJFO1xufVxuXG4uaGFyZC1jb21wbGV0ZSB7XG4gICAgYmFja2dyb3VuZDogI0ZFMzAzMDtcbn1cblxuLnRhc2s+LmxlZnQtc2lkZT4ubmFtZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogIzIzMjMyMztcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGFzaz4ucmlnaHQtc2lkZT4uZHVlLWRhdGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICMyMzIzMjM7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiN0YXNrX29wdGlvbl8xLFxuI3Rhc2tfb3B0aW9uXzIsXG4jdGFza19vcHRpb25fMyB7XG4gICAgZmlsdGVyOiBub25lO1xuICAgIHRyYW5zaXRpb246IDAuMTVzO1xufVxuXG4jdGFza19vcHRpb25fMTpob3ZlcixcbiN0YXNrX29wdGlvbl8yOmhvdmVyLFxuI3Rhc2tfb3B0aW9uXzM6aG92ZXIge1xuICAgIGZpbHRlcjogaHVlLXJvdGF0ZSgxMGRlZykgYnJpZ2h0bmVzcyg0MDAlKSBzYXR1cmF0ZSgyMDAlKSBjb250cmFzdCg4MCUpO1xuICAgIHRyYW5zaXRpb246IDAuMTVzO1xufVxuXG4jYWRkX3Byb2plY3RfbW9kYWwsXG4jYWRkX3Rhc2tfbW9kYWwsXG4jaW5mb190YXNrX21vZGFsLFxuI2VkaXRfdGFza19tb2RhbCB7XG4gICAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgIHotaW5kZXg6IDE7XG4gICAgLyogU2l0IG9uIHRvcCAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIEZ1bGwgd2lkdGggKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLyogRnVsbCBoZWlnaHQgKi9cbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAvKiBGYWxsYmFjayBjb2xvciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XG59XG5cbiNhZGRfcHJvamVjdF9tb2RhbD4ubW9kYWwtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA1MjEuNjZweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uaW52YWxpZCB7XG4gICAgYm9yZGVyOiAjRkY4RThFIHNvbGlkIDJweDtcbn1cblxuLmFkZC1wcm9qZWN0LW5hdixcbi5hZGQtdGFzay1uYXYsXG4uaW5mby10YXNrLW5hdixcbi5lZGl0LXRhc2stbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kOiAjMDAxNDVCO1xuICAgIHBhZGRpbmc6IDEycHggMThweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4uaGVhZGluZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNy4yNXB4O1xufVxuXG4uaGVhZGluZy1jb250YWluZXI+aW1nIHtcbiAgICB3aWR0aDogNjEuMjFweDtcbiAgICBoZWlnaHQ6IDYxLjIxcHg7XG59XG5cbi5oZWFkaW5nLWNvbnRhaW5lcj5oZWFkZXIge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4jYWRkX3Byb2plY3RfY2xvc2VfYnV0dG9uLFxuI2FkZF90YXNrX2Nsb3NlX2J1dHRvbixcbiNpbmZvX3Rhc2tfY2xvc2VfYnV0dG9uLFxuI2VkaXRfdGFza19jbG9zZV9idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcblxufVxuXG4jYWRkX3Byb2plY3RfY2xvc2VfYnV0dG9uOmhvdmVyLFxuI2FkZF90YXNrX2Nsb3NlX2J1dHRvbjpob3ZlcixcbiNpbmZvX3Rhc2tfY2xvc2VfYnV0dG9uOmhvdmVyLFxuI2VkaXRfdGFza19jbG9zZV9idXR0b246aG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoMzMlKSBzZXBpYSg5MCUpIHNhdHVyYXRlKDYwMCUpIGh1ZS1yb3RhdGUoMjAwZGVnKTtcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcbn1cblxuXG5cbiNhZGRfcHJvamVjdF9jbG9zZV9idXR0b24+aW1nLFxuI2FkZF90YXNrX2Nsb3NlX2J1dHRvbj5pbWcsXG4jaW5mb190YXNrX2Nsb3NlX2J1dHRvbj5pbWcsXG4jZWRpdF90YXNrX2Nsb3NlX2J1dHRvbj5pbWcge1xuICAgIHdpZHRoOiA0Mi4xN3B4O1xuICAgIGhlaWdodDogNDIuMTdweDtcbn1cblxuZmllbGRzZXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5tb2RhbC1jb250YWluZXI+Zm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAzNnB4IDU0cHg7XG4gICAgZ2FwOiAxOHB4O1xufVxuXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uZmllbGQ+bGFiZWwsXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmJvdHRvbS1yb3c+LmZpZWxkPmxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiAjNUI1QjVCO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGdhcDogMTBweDtcbn1cblxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5maWVsZD5sYWJlbD5zcGFuLFxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5ib3R0b20tcm93Pi5maWVsZD5sYWJlbD5zcGFuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiAjRkYwMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmZpZWxkPmlucHV0LFxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5maWVsZD50ZXh0YXJlYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6ICNEQ0RDREMgc29saWQgMnB4O1xuICAgIHBhZGRpbmc6IDE1cHggMTlweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM1QjVCNUI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jYWRkX3Byb2plY3RfYnV0dG9uX3NhdmUsXG4jYWRkX3Rhc2tfYnV0dG9uX3NhdmUsXG4jZWRpdF90YXNrX2J1dHRvbl9zYXZlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDExM3B4O1xuICAgIGJhY2tncm91bmQ6ICMwMDE0NUI7XG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcbn1cblxuI2FkZF9wcm9qZWN0X2J1dHRvbl9zYXZlOmhvdmVyLFxuI2FkZF90YXNrX2J1dHRvbl9zYXZlOmhvdmVyLFxuI2VkaXRfdGFza19idXR0b25fc2F2ZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzE0NDRFRTtcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcbn1cblxuI2FkZF9wcm9qZWN0X2J1dHRvbl9zYXZlPmltZyxcbiNhZGRfdGFza19idXR0b25fc2F2ZT5pbWcsXG4jZWRpdF90YXNrX2J1dHRvbl9zYXZlPmltZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA0NS45NnB4O1xuICAgIGhlaWdodDogNDUuOTZweDtcbn1cblxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNhZGRfdGFza19tb2RhbD4ubW9kYWwtY29udGFpbmVyLFxuI2luZm9fdGFza19tb2RhbD4ubW9kYWwtY29udGFpbmVyLFxuI2VkaXRfdGFza19tb2RhbD4ubW9kYWwtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA1MjEuNjZweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4jYWRkX3Rhc2tfbW9kYWw+Lm1vZGFsLWNvbnRhaW5lcj5maWVsZHNldD4uYm90dG9tLXJvdyxcbiNpbmZvX3Rhc2tfbW9kYWw+Lm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5ib3R0b20tcm93LFxuI2VkaXRfdGFza19tb2RhbD4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmJvdHRvbS1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGFsZiB7XG4gICAgcGFkZGluZzogMTFweCAxN3B4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAjRENEQ0RDIHNvbGlkIDJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzVCNUI1Qjtcbn1cblxuLmJvdHRvbS1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA2cHg7XG59XG5cbi5ib3R0b20tcm93Pi5maWVsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jYWRkX3Rhc2tfYnV0dG9uX3NhdmUsXG4jZWRpdF90YXNrX2J1dHRvbl9zYXZlIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsaUNBQWlDO0FBQ2pDO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGdDQUFnQztJQUNoQywrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLDJCQUEyQjtBQUMvQjs7QUFFQSwrQ0FBK0M7QUFDL0M7O0lBRUksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQSw4Q0FBOEM7QUFDOUM7SUFD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QUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBSZXNldCBkZWZhdWx0IGJyb3dzZXIgc3R5bGVzICovXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxufVxcblxcbi5uby10cmFuc2l0aW9uICoge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICAgIC1tcy10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICAgIC1vLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBNYWtlIGh0bWwgYW5kIGJvZHkgdGFrZSB1cCB0aGUgZnVsbCBoZWlnaHQgKi9cXG5odG1sLFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBVc2UgZmxleGJveCBvbiB0aGUgYm9keSB0byBjZW50ZXIgY29udGVudCAqL1xcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3V0bGluZTogaW5oZXJpdDtcXG59XFxuXFxuXFxuLm1haW4taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogIzAwMTQ1QjtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBwYWRkaW5nOiAyMHB4IDM3cHg7XFxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG59XFxuXFxuaGVhZGVyPi50aXRsZSB7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDE3LjUlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMzM2cHg7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNFQkVCRUI7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stYnV0dG9ucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzNyU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDM0cHg7XFxuICAgIHBhZGRpbmc6IDAgNDNweDtcXG59XFxuXFxuLnRhc2stYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxOXB4O1xcbiAgICBwYWRkaW5nOiAxMS41cHggMjIuNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxMy41cHg7XFxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xcbn1cXG5cXG4udGFzay1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMTQ0NEVFO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxuLnRhc2stYnV0dG9uLW5hbWUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICM1ODU4NTg7XFxufVxcblxcbi50YXNrLWJ1dHRvbjpob3ZlciAuaW5ib3gge1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxJSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMTQ4ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDEwMCUpO1xcblxcbn1cXG5cXG4udGFzay1idXR0b246aG92ZXIgLnRvZGF5IHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMSUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDE0OGRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCgxMDAlKTtcXG5cXG59XFxuXFxuLnRhc2stYnV0dG9uOmhvdmVyIC50aGlzLXdlZWsge1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxJSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMTQ4ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDEwMCUpO1xcblxcbn1cXG5cXG4udGFzay1idXR0b246aG92ZXIgLmFkZC1wcm9qZWN0IHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMSUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDE0OGRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCgxMDAlKTtcXG5cXG59XFxuXFxuLnRhc2stYnV0dG9uOmhvdmVyIC50YXNrLWJ1dHRvbi1uYW1lIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5pbmJveCB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnLi9pbmJveC5wbmcnKTsgKi9cXG59XFxuXFxuLnRvZGF5IHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL2NhbGVuZGFyLXRvZGF5LnBuZycpOyAqL1xcbn1cXG5cXG4udGhpcy13ZWVrIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL2NhbGVuZGFyLXRvZGF5LnBuZycpOyAqL1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDYzJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOiAzMXB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXItaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA3cHg7XFxuICAgIHBhZGRpbmc6IDAgMjZweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyLWhlYWRlcj4udGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogIzAwMTQ1QjtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXItaGVhZGVyPi5kaXZpZGVyIHtcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcXG4gICAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdCxcXG4uYWRkLXRhc2staW1nIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL3BsdXMtYm94LnBuZycpOyAqL1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDQzcHg7XFxufVxcblxcbi5wcm9qZWN0LXRhYnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMCA0MXB4O1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbiNwcm9qZWN0X3RhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICMwMDE0NUI7XFxuICAgIHBhZGRpbmc6IDEwcHggMTkuNXB4O1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcXG59XFxuXFxuI3Byb2plY3RfdGFiOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzE0NDRFRTtcXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XFxufVxcblxcbi5wcm9qZWN0LXRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogNjdweCAzNDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IDAuMTUwcztcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgYmFja2dyb3VuZDogIzAwMTQ1QjtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIHBhZGRpbmc6IDEwcHggMTYuNXB4O1xcbiAgICBnYXA6IDE4cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIG1hcmdpbi10b3A6IDIxcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMTQ0NEVFO1xcbn1cXG5cXG4uYWRkLXRhc2stdGV4dCB7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG4ucHJvamVjdC10YXNrLWhlYWRlci1jb250YWluZXI+LnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogIzAwMTQ1QjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnByb2plY3QtdGFzay1oZWFkZXItY29udGFpbmVyPi5kaXZpZGVyIHtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrLWhlYWRlci1jb250YWluZXI+LmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XFxuICAgIGNvbG9yOiAjODA4MDgwO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwYWRkaW5nOiA4cHggMCAwIDA7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b24tY29udGFpbmVyPi5kaXZpZGVyIHtcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjQjdCN0I3O1xcbn1cXG5cXG4ucHJvamVjdC10YXNrcy1hcmVhIHtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcXG4gICAgYm9yZGVyOiAjRDJEMkQyIHNvbGlkIDFweDtcXG4gICAgcGFkZGluZzogMjNweCAxN3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcXG59XFxuXFxuLnRhc2s+LmxlZnQtc2lkZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNTdweDtcXG59XFxuXFxuLnRhc2s+LnJpZ2h0LXNpZGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi50YXNrPi5yaWdodC1zaWRlPi5vcHRpb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi50YXNrPi5yaWdodC1zaWRlPi5vcHRpb24tY29udGFpbmVyPmJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjcuOHB4O1xcbiAgICB3aWR0aDogMjcuOHB4O1xcbn1cXG5cXG4udGFzaz4ucmlnaHQtc2lkZT4ub3B0aW9uLWNvbnRhaW5lcj5idXR0b24+aW1nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAyNy44cHg7XFxuICAgIHdpZHRoOiAyNy44cHg7XFxufVxcblxcbi50YXNrPi5sZWZ0LXNpZGU+LmNoZWNrTWFyayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICB3aWR0aDogMzFweDtcXG4gICAgaGVpZ2h0OiAzMXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XFxufVxcblxcbi50YXNrPi5sZWZ0LXNpZGU+LmNoZWNrTWFyaz5pbWcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDIycHg7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XFxufVxcblxcbi5lYXN5IHtcXG4gICAgYm9yZGVyOiAjMTRGRjAwIHNvbGlkIDNweDtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICAgIGJvcmRlcjogI0ZGNkIwMCBzb2xpZCAzcHg7XFxufVxcblxcbi5oYXJkIHtcXG4gICAgYm9yZGVyOiAjRkYwMDAwIHNvbGlkIDNweDtcXG59XFxuXFxuLmVhc3ktY29tcGxldGUge1xcbiAgICBiYWNrZ3JvdW5kOiAjNkRGRjYwO1xcbn1cXG5cXG4ubWVkaXVtLWNvbXBsZXRlIHtcXG4gICAgYmFja2dyb3VuZDogI0ZGODYyRTtcXG59XFxuXFxuLmhhcmQtY29tcGxldGUge1xcbiAgICBiYWNrZ3JvdW5kOiAjRkUzMDMwO1xcbn1cXG5cXG4udGFzaz4ubGVmdC1zaWRlPi5uYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6ICMyMzIzMjM7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udGFzaz4ucmlnaHQtc2lkZT4uZHVlLWRhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogIzIzMjMyMztcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jdGFza19vcHRpb25fMSxcXG4jdGFza19vcHRpb25fMixcXG4jdGFza19vcHRpb25fMyB7XFxuICAgIGZpbHRlcjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XFxufVxcblxcbiN0YXNrX29wdGlvbl8xOmhvdmVyLFxcbiN0YXNrX29wdGlvbl8yOmhvdmVyLFxcbiN0YXNrX29wdGlvbl8zOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBodWUtcm90YXRlKDEwZGVnKSBicmlnaHRuZXNzKDQwMCUpIHNhdHVyYXRlKDIwMCUpIGNvbnRyYXN0KDgwJSk7XFxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xcbn1cXG5cXG4jYWRkX3Byb2plY3RfbW9kYWwsXFxuI2FkZF90YXNrX21vZGFsLFxcbiNpbmZvX3Rhc2tfbW9kYWwsXFxuI2VkaXRfdGFza19tb2RhbCB7XFxuICAgIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICAvKiBTaXQgb24gdG9wICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLyogRnVsbCBoZWlnaHQgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xcbn1cXG5cXG4jYWRkX3Byb2plY3RfbW9kYWw+Lm1vZGFsLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA1MjEuNjZweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmludmFsaWQge1xcbiAgICBib3JkZXI6ICNGRjhFOEUgc29saWQgMnB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtbmF2LFxcbi5hZGQtdGFzay1uYXYsXFxuLmluZm8tdGFzay1uYXYsXFxuLmVkaXQtdGFzay1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQ6ICMwMDE0NUI7XFxuICAgIHBhZGRpbmc6IDEycHggMThweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5oZWFkaW5nLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNy4yNXB4O1xcbn1cXG5cXG4uaGVhZGluZy1jb250YWluZXI+aW1nIHtcXG4gICAgd2lkdGg6IDYxLjIxcHg7XFxuICAgIGhlaWdodDogNjEuMjFweDtcXG59XFxuXFxuLmhlYWRpbmctY29udGFpbmVyPmhlYWRlciB7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNhZGRfcHJvamVjdF9jbG9zZV9idXR0b24sXFxuI2FkZF90YXNrX2Nsb3NlX2J1dHRvbixcXG4jaW5mb190YXNrX2Nsb3NlX2J1dHRvbixcXG4jZWRpdF90YXNrX2Nsb3NlX2J1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcXG5cXG59XFxuXFxuI2FkZF9wcm9qZWN0X2Nsb3NlX2J1dHRvbjpob3ZlcixcXG4jYWRkX3Rhc2tfY2xvc2VfYnV0dG9uOmhvdmVyLFxcbiNpbmZvX3Rhc2tfY2xvc2VfYnV0dG9uOmhvdmVyLFxcbiNlZGl0X3Rhc2tfY2xvc2VfYnV0dG9uOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCgzMyUpIHNlcGlhKDkwJSkgc2F0dXJhdGUoNjAwJSkgaHVlLXJvdGF0ZSgyMDBkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcXG59XFxuXFxuXFxuXFxuI2FkZF9wcm9qZWN0X2Nsb3NlX2J1dHRvbj5pbWcsXFxuI2FkZF90YXNrX2Nsb3NlX2J1dHRvbj5pbWcsXFxuI2luZm9fdGFza19jbG9zZV9idXR0b24+aW1nLFxcbiNlZGl0X3Rhc2tfY2xvc2VfYnV0dG9uPmltZyB7XFxuICAgIHdpZHRoOiA0Mi4xN3B4O1xcbiAgICBoZWlnaHQ6IDQyLjE3cHg7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAzNnB4IDU0cHg7XFxuICAgIGdhcDogMThweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5maWVsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmZpZWxkPmxhYmVsLFxcbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uYm90dG9tLXJvdz4uZmllbGQ+bGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogIzVCNUI1QjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uZmllbGQ+bGFiZWw+c3BhbixcXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmJvdHRvbS1yb3c+LmZpZWxkPmxhYmVsPnNwYW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogI0ZGMDAwMDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyPmZvcm0+ZmllbGRzZXQ+LmZpZWxkPmlucHV0LFxcbi5tb2RhbC1jb250YWluZXI+Zm9ybT5maWVsZHNldD4uZmllbGQ+dGV4dGFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6ICNEQ0RDREMgc29saWQgMnB4O1xcbiAgICBwYWRkaW5nOiAxNXB4IDE5cHg7XFxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiAjNUI1QjVCO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2FkZF9wcm9qZWN0X2J1dHRvbl9zYXZlLFxcbiNhZGRfdGFza19idXR0b25fc2F2ZSxcXG4jZWRpdF90YXNrX2J1dHRvbl9zYXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweCAxMTNweDtcXG4gICAgYmFja2dyb3VuZDogIzAwMTQ1QjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XFxufVxcblxcbiNhZGRfcHJvamVjdF9idXR0b25fc2F2ZTpob3ZlcixcXG4jYWRkX3Rhc2tfYnV0dG9uX3NhdmU6aG92ZXIsXFxuI2VkaXRfdGFza19idXR0b25fc2F2ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMxNDQ0RUU7XFxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xcbn1cXG5cXG4jYWRkX3Byb2plY3RfYnV0dG9uX3NhdmU+aW1nLFxcbiNhZGRfdGFza19idXR0b25fc2F2ZT5pbWcsXFxuI2VkaXRfdGFza19idXR0b25fc2F2ZT5pbWcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQ1Ljk2cHg7XFxuICAgIGhlaWdodDogNDUuOTZweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhZGRfdGFza19tb2RhbD4ubW9kYWwtY29udGFpbmVyLFxcbiNpbmZvX3Rhc2tfbW9kYWw+Lm1vZGFsLWNvbnRhaW5lcixcXG4jZWRpdF90YXNrX21vZGFsPi5tb2RhbC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNTIxLjY2cHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbiNhZGRfdGFza19tb2RhbD4ubW9kYWwtY29udGFpbmVyPmZpZWxkc2V0Pi5ib3R0b20tcm93LFxcbiNpbmZvX3Rhc2tfbW9kYWw+Lm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5ib3R0b20tcm93LFxcbiNlZGl0X3Rhc2tfbW9kYWw+Lm1vZGFsLWNvbnRhaW5lcj5mb3JtPmZpZWxkc2V0Pi5ib3R0b20tcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaGFsZiB7XFxuICAgIHBhZGRpbmc6IDExcHggMTdweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6ICNEQ0RDREMgc29saWQgMnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6ICM1QjVCNUI7XFxufVxcblxcbi5ib3R0b20tcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA2cHg7XFxufVxcblxcbi5ib3R0b20tcm93Pi5maWVsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2FkZF90YXNrX2J1dHRvbl9zYXZlLFxcbiNlZGl0X3Rhc2tfYnV0dG9uX3NhdmUge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFkZEltYWdlIGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgV2hpdGVQbHVzQm94IGZyb20gXCIuL3doaXRlLXBsdXMtYm94LnBuZ1wiO1xuaW1wb3J0IERhcmtCbHVlTm90ZWJvb2tFZGl0T3V0bGluZSBmcm9tIFwiLi9kYXJrLWJsdWUtbm90ZWJvb2stZWRpdC1vdXRsaW5lLnBuZ1wiO1xuaW1wb3J0IERhcmtCbHVlSW5mb3JtYXRpb25PdXRsaW5lIGZyb20gXCIuL2RhcmstYmx1ZS1pbmZvcm1hdGlvbi1vdXRsaW5lLnBuZ1wiO1xuaW1wb3J0IERhcmtCbHVlVHJhc2hDYW5PdXRsaW5lIGZyb20gXCIuL2RhcmstYmx1ZS10cmFzaC1jYW4tb3V0bGluZS5wbmdcIjtcbmltcG9ydCBXaGl0ZUNoZWNrIGZyb20gXCIuL3doaXRlLWNoZWNrLnBuZ1wiO1xuXG4vL2ltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3RvZG8uanMnOyAvLyBJbXBvcnQgdGhlIFByb2plY3QgY2xhc3MgZnJvbSB0b2RvLmpzXG5cblxuRGF0ZS5wcm90b3R5cGUuZ2V0V2VlayA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGRheUluTWlsbGlzZWNvbmRzID0gODY0MDAwMDA7XG4gICAgY29uc3QgZmlyc3RPZkphbiA9IG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgMCwgMSwgMCwgMCwgMCk7XG4gICAgY29uc3QgZmlyc3RPZkphbkRheSA9IChmaXJzdE9mSmFuLmdldERheSgpID09IDApID8gNyA6IGZpcnN0T2ZKYW4uZ2V0RGF5KCk7XG4gICAgY29uc3QgZGF5c0Zvck5leHRNb25kYXkgPSAoOCAtIGZpcnN0T2ZKYW5EYXkpO1xuICAgIGNvbnN0IGZpcnN0T2ZKYW5OZXh0TW9uZGF5VGltZSA9IGZpcnN0T2ZKYW4uZ2V0VGltZSgpICsgKGRheXNGb3JOZXh0TW9uZGF5ICogZGF5SW5NaWxsaXNlY29uZHMpO1xuICAgIGNvbnN0IGZpcnN0TW9uZGF5T2ZZZWFyVGltZSA9IChmaXJzdE9mSmFuRGF5ID4gMSkgPyBmaXJzdE9mSmFuTmV4dE1vbmRheVRpbWUgOiBmaXJzdE9mSmFuLmdldFRpbWUoKTtcbiAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpLCAwLCAwLCAwKTtcbiAgICBjb25zdCB0aW1lID0gbmV3RGF0ZS5nZXRUaW1lKCk7XG4gICAgY29uc3QgZGF5c0Zyb21GaXJzdE1vbmRheSA9IE1hdGgucm91bmQoKCh0aW1lIC0gZmlyc3RNb25kYXlPZlllYXJUaW1lKSAvIGRheUluTWlsbGlzZWNvbmRzKSk7XG5cbiAgICByZXR1cm4gKGRheXNGcm9tRmlyc3RNb25kYXkgPj0gMCAmJiBkYXlzRnJvbUZpcnN0TW9uZGF5IDwgMzY0KSA/IE1hdGguY2VpbCgoZGF5c0Zyb21GaXJzdE1vbmRheSArIDEpIC8gNykgOiA1Mjtcbn07XG5cbmNsYXNzIFRlbXBsYXRlcyB7XG5cbiAgICBzdGF0aWMgZGlzcGxheVByb2plY3QocHJvamVjdCkge1xuICAgICAgICBpZiAoTmF2aWdhdGlvbi5jdXJyZW50UHJvamVjdCA9PSBwcm9qZWN0KSByZXR1cm47XG4gICAgICAgIHRoaXMuI3JlbW92ZVByb2plY3RJbmZvcm1hdGlvbigpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFByb2plY3RJbmZvcm1hdGlvbi5kaXNwbGF5UHJvamVjdEluZm8ocHJvamVjdCk7XG4gICAgICAgICAgICBUYXNrSW5mb3JtYXRpb24uZGlzcGxheUFsbFRhc2tzKHByb2plY3QudGFza3MpO1xuICAgICAgICB9LCAxNTApO1xuICAgIH1cblxuICAgIHN0YXRpYyAjc29ydFRhc2tzKGFycikge1xuICAgICAgICBhcnIuc29ydCgodGFzazEsIHRhc2syKSA9PiBuZXcgRGF0ZSh0YXNrMS5kdWVEYXRlKSAtIG5ldyBEYXRlKHRhc2syLmR1ZURhdGUpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheUluYm94VGFza3MocHJvamVjdHMpIHtcbiAgICAgICAgVGVtcGxhdGVzLiNyZW1vdmVQcm9qZWN0SW5mb3JtYXRpb24oKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFRhc2tJbmZvcm1hdGlvbi5kaXNwbGF5RmlsdGVySGVhZGVycyhcIkluYm94XCIpO1xuXG4gICAgICAgICAgICBOYXZpZ2F0aW9uLmN1cnJlbnRQcm9qZWN0ID0gbnVsbDtcblxuICAgICAgICAgICAgY29uc3QgaW5ib3hUYXNrcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW2ldO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaW5ib3hQcm9qZWN0VGFza3MgPSBwcm9qZWN0LnRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2suY29tcGxldGUgPT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgIGluYm94UHJvamVjdFRhc2tzLm1hcCgodGFzaykgPT4gaW5ib3hUYXNrcy5wdXNoKHRhc2spKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBUZW1wbGF0ZXMuI3NvcnRUYXNrcyhpbmJveFRhc2tzKTtcblxuICAgICAgICAgICAgaW5ib3hUYXNrcy5tYXAoKHRhc2spID0+IHRoaXMuZGlzcGxheVRhc2sodGFzaykpO1xuICAgICAgICB9LCAxNTApO1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5VG9kYXlUYXNrcyhwcm9qZWN0cykge1xuICAgICAgICBUZW1wbGF0ZXMuI3JlbW92ZVByb2plY3RJbmZvcm1hdGlvbigpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFRhc2tJbmZvcm1hdGlvbi5kaXNwbGF5RmlsdGVySGVhZGVycyhcIlRvZGF5XCIpO1xuXG4gICAgICAgICAgICBOYXZpZ2F0aW9uLmN1cnJlbnRQcm9qZWN0ID0gbnVsbDtcblxuICAgICAgICAgICAgY29uc3QgdG9kYXlUYXNrcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlT2JqID0gbmV3IERhdGUoKTtcblxuXG4gICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBkYXRlT2JqLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICBsZXQgbW9udGggPSBkYXRlT2JqLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlIDwgMTApIGRhdGUgPSBgMCR7ZGF0ZX1gO1xuICAgICAgICAgICAgICAgIGlmIChtb250aCA8IDEwKSBtb250aCA9IGAwJHttb250aH1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5UHJvamVjdFRhc2tzID0gcHJvamVjdC50YXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2suZHVlRGF0ZSA9PSBgJHtkYXRlT2JqLmdldEZ1bGxZZWFyKCl9LSR7bW9udGh9LSR7ZGF0ZX1gO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9kYXlQcm9qZWN0VGFza3MpO1xuXG4gICAgICAgICAgICAgICAgdG9kYXlQcm9qZWN0VGFza3MubWFwKCh0YXNrKSA9PiB0b2RheVRhc2tzLnB1c2godGFzaykpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRvZGF5VGFza3MubWFwKCh0YXNrKSA9PiB0aGlzLmRpc3BsYXlUYXNrKHRhc2spKTtcbiAgICAgICAgfSwgMTUwKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheVRoaXNXZWVrVGFza3MocHJvamVjdHMpIHtcbiAgICAgICAgVGVtcGxhdGVzLiNyZW1vdmVQcm9qZWN0SW5mb3JtYXRpb24oKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFRhc2tJbmZvcm1hdGlvbi5kaXNwbGF5RmlsdGVySGVhZGVycyhcIlRoaXMgV2Vla1wiKTtcblxuICAgICAgICAgICAgTmF2aWdhdGlvbi5jdXJyZW50UHJvamVjdCA9IG51bGw7XG5cbiAgICAgICAgICAgIGNvbnN0IHRoaXNXZWVrVGFza3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZU9iaiA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0aGlzV2Vla1Byb2plY3RUYXNrcyA9IHByb2plY3QudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpLmdldFdlZWsoKSA9PSBkYXRlT2JqLmdldFdlZWsoKSAmJiBuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpLmdldEZ1bGxZZWFyKCkgPT0gZGF0ZU9iai5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICB0aGlzV2Vla1Byb2plY3RUYXNrcy5tYXAoKHRhc2spID0+IHRoaXNXZWVrVGFza3MucHVzaCh0YXNrKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFRlbXBsYXRlcy4jc29ydFRhc2tzKHRoaXNXZWVrVGFza3MpO1xuICAgICAgICAgICAgdGhpc1dlZWtUYXNrcy5tYXAoKHRhc2spID0+IHRoaXMuZGlzcGxheVRhc2sodGFzaykpO1xuICAgICAgICB9LCAxNTApO1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5VGFzayh0YXNrKSB7XG4gICAgICAgIFRhc2tJbmZvcm1hdGlvbi5hZGRUYXNrRWxlbWVudCh0YXNrKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgRmFkZUVsZW1lbnQoZmFkZUluLCBlbGVtZW50KSB7XG4gICAgICAgIGlmIChmYWRlSW4pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljICNyZW1vdmVQcm9qZWN0SW5mb3JtYXRpb24oKSB7XG4gICAgICAgIHRoaXMuRmFkZUVsZW1lbnQoZmFsc2UsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10YXNrLWNvbnRhaW5lclwiKSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRhc2tzVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RfdGFza3NfYXJlYVwiKTtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90YXNrX2J1dHRvblwiKSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Rhc2tfYnV0dG9uXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdF90YXNrX2hlYWRlcl9jb250YWluZXJcIikpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RfdGFza19oZWFkZXJfY29udGFpbmVyXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvamVjdFRhc2tzVGFibGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgfSwgMTUwKTtcbiAgICB9XG5cbn1cblxuY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFRlbXBsYXRlcyB7XG4gICAgc3RhdGljICNzaWRlQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0X3RhYl9jb250YWluZXJcIik7XG5cbiAgICBzdGF0aWMgaW5ib3hUYXNrc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5ib3hcIik7XG4gICAgc3RhdGljIHRvZGF5c1Rhc2tzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheVwiKTtcbiAgICBzdGF0aWMgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Byb2plY3RfYnV0dG9uXCIpO1xuICAgIHN0YXRpYyB0aGlzV2Vla3NUYXNrc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhpc193ZWVrXCIpO1xuXG4gICAgc3RhdGljICNwcm9qZWN0QnV0dG9ucyA9IFtdO1xuXG4gICAgc3RhdGljICNwcm9qZWN0U2hvd247XG5cbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnRQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcHJvamVjdFNob3duO1xuICAgIH07XG4gICAgc3RhdGljIHNldCBjdXJyZW50UHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3RTaG93biA9IHByb2plY3Q7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVByb2plY3RCdXR0b24ocHJvamVjdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcHJvamVjdFRhYi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgcHJvamVjdFRhYi5pZCA9IFwicHJvamVjdF90YWJcIjtcblxuICAgICAgICBwcm9qZWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQcm9qZWN0ICE9IHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICBUZW1wbGF0ZXMuZGlzcGxheVByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI3NpZGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRhYik7XG4gICAgICAgIHRoaXMuI3Byb2plY3RCdXR0b25zLnB1c2goeyBwcm9qZWN0OiBwcm9qZWN0LCBlbGVtZW50OiBwcm9qZWN0VGFiIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGVQcm9qZWN0QnV0dG9uKHByb2plY3QpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNwcm9qZWN0QnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuI3Byb2plY3RCdXR0b25zW2ldLnByb2plY3QgPT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuI3Byb2plY3RCdXR0b25zW2ldLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jcHJvamVjdEJ1dHRvbnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmVkIFByb2plY3QgQnV0dG9uOiAke3Byb2plY3QubmFtZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5jbGFzcyBJbmZvcm1hdGlvbiBleHRlbmRzIFRlbXBsYXRlcyB7IH1cblxuY2xhc3MgUHJvamVjdEluZm9ybWF0aW9uIGV4dGVuZHMgSW5mb3JtYXRpb24ge1xuXG4gICAgc3RhdGljIGRpc3BsYXlQcm9qZWN0SW5mbyhwcm9qZWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcml2YXRlRGlzcGxheVByb2plY3RJbmZvKHByb2plY3QpO1xuICAgIH1cblxuXG4gICAgc3RhdGljICNwcml2YXRlRGlzcGxheVByb2plY3RJbmZvKHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5GYWRlRWxlbWVudCh0cnVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGFzay1jb250YWluZXJcIikpO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGFzay1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhlYWRlcl9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGFzay1oZWFkZXItY29udGFpbmVyXCIpO1xuICAgICAgICBoZWFkZXJfY29udGFpbmVyLmlkID0gXCJwcm9qZWN0X3Rhc2tfaGVhZGVyX2NvbnRhaW5lclwiO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgICAgIGRpdmlkZXIuY2xhc3NMaXN0LmFkZChcImRpdmlkZXJcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XG5cbiAgICAgICAgaGVhZGVyX2NvbnRhaW5lci5hcHBlbmQodGl0bGUsIGRpdmlkZXIsIGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGhlYWRlcl9jb250YWluZXIsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcblxuICAgICAgICB0aGlzLiNhZGRUYXNrQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgc3RhdGljICNhZGRUYXNrQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RfdGFza19oZWFkZXJfY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBidXR0b25fdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGJ1dHRvbl90ZXh0LnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuXG4gICAgICAgIGJ1dHRvbi5pZCA9IFwiYWRkX3Rhc2tfYnV0dG9uXCI7XG4gICAgICAgIGJ1dHRvbl9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1idXR0b25cIiwgXCJhZGQtdGFza1wiKTtcbiAgICAgICAgYnV0dG9uX3RleHQuY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLXRleHRcIiwgXCJ0YXNrLWJ1dHRvbi1uYW1lXCIpO1xuICAgICAgICBkaXZpZGVyLmNsYXNzTGlzdC5hZGQoXCJkaXZpZGVyXCIpO1xuXG5cblxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQWRkVGFza0Zvcm0udG9nZ2xlRm9ybSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBidXR0b25fY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIGJ1dHRvbl9jb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XG5cbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbl90ZXh0KTtcblxuICAgICAgICBhZGRJbWFnZShidXR0b24sIFdoaXRlUGx1c0JveCwgXCJhZGQtdGFzay1pbWdcIik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoYnV0dG9uX2NvbnRhaW5lcik7XG4gICAgfVxufVxuXG5jbGFzcyBUYXNrSW5mb3JtYXRpb24gZXh0ZW5kcyBJbmZvcm1hdGlvbiB7XG5cbiAgICBzdGF0aWMgI2NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdF90YXNrc19hcmVhXCIpO1xuXG5cbiAgICBzdGF0aWMgYWRkVGFza0VsZW1lbnQodGFzaykge1xuICAgICAgICBjb25zdCB0YXNrX2NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBsZWZ0X3NpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCByaWdodF9zaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgY2hlY2tfbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnN0IHRhc2tfbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGR1ZV9kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBpbmZvcm1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAgICAgdGFza19uYW1lLnRleHRDb250ZW50ID0gdGFzay50aXRsZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBkdWVfZGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcblxuICAgICAgICB0YXNrX2NvbnRlbnQuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgICAgICAgbGVmdF9zaWRlLmNsYXNzTGlzdC5hZGQoXCJsZWZ0LXNpZGVcIik7XG4gICAgICAgIHJpZ2h0X3NpZGUuY2xhc3NMaXN0LmFkZChcInJpZ2h0LXNpZGVcIik7XG5cbiAgICAgICAgY2hlY2tfbWFyay5jbGFzc0xpc3QuYWRkKFwiY2hlY2tNYXJrXCIsIHRhc2suZGlmZmljdWx0eSk7XG4gICAgICAgIHRhc2tfbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcbiAgICAgICAgZHVlX2RhdGUuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpO1xuXG4gICAgICAgIG9wdGlvbl9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9wdGlvbi1jb250YWluZXJcIik7XG5cbiAgICAgICAgZWRpdC5pZCA9IFwidGFza19vcHRpb25fMVwiO1xuICAgICAgICBpbmZvcm1hdGlvbi5pZCA9IFwidGFza19vcHRpb25fMlwiO1xuICAgICAgICBkZWwuaWQgPSBcInRhc2tfb3B0aW9uXzNcIjtcblxuICAgICAgICBpZiAodGFzay5jb21wbGV0ZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjaGVja19tYXJrLmNsYXNzTGlzdC5hZGQodGFzay5kaWZmaWN1bHR5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgY2hlY2tfbWFyay5jbGFzc0xpc3QuYWRkKGAke3Rhc2suZGlmZmljdWx0eS50b0xvd2VyQ2FzZSgpfS1jb21wbGV0ZWApO1xuICAgICAgICAgICAgYWRkSW1hZ2UoY2hlY2tfbWFyaywgV2hpdGVDaGVjaywgXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja19tYXJrLmNsYXNzTGlzdC5hZGQodGFzay5kaWZmaWN1bHR5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkSW1hZ2UoZWRpdCwgRGFya0JsdWVOb3RlYm9va0VkaXRPdXRsaW5lLCBcIlwiKTtcbiAgICAgICAgYWRkSW1hZ2UoaW5mb3JtYXRpb24sIERhcmtCbHVlSW5mb3JtYXRpb25PdXRsaW5lLCBcIlwiKTtcbiAgICAgICAgYWRkSW1hZ2UoZGVsLCBEYXJrQmx1ZVRyYXNoQ2FuT3V0bGluZSwgXCJcIik7XG5cbiAgICAgICAgdGhpcy4jY29udGFpbmVyLmFwcGVuZCh0YXNrX2NvbnRlbnQpO1xuICAgICAgICB0YXNrX2NvbnRlbnQuYXBwZW5kKGxlZnRfc2lkZSk7XG4gICAgICAgIHRhc2tfY29udGVudC5hcHBlbmQocmlnaHRfc2lkZSk7XG4gICAgICAgIGxlZnRfc2lkZS5hcHBlbmQoY2hlY2tfbWFyayk7XG4gICAgICAgIGxlZnRfc2lkZS5hcHBlbmQodGFza19uYW1lKTtcbiAgICAgICAgcmlnaHRfc2lkZS5hcHBlbmQoZHVlX2RhdGUpO1xuICAgICAgICByaWdodF9zaWRlLmFwcGVuZChvcHRpb25fY29udGFpbmVyKTtcbiAgICAgICAgb3B0aW9uX2NvbnRhaW5lci5hcHBlbmQoZWRpdCk7XG4gICAgICAgIG9wdGlvbl9jb250YWluZXIuYXBwZW5kKGluZm9ybWF0aW9uKTtcbiAgICAgICAgb3B0aW9uX2NvbnRhaW5lci5hcHBlbmQoZGVsKTtcblxuICAgICAgICBsZXQgZGVib3VuY2UgPSBmYWxzZTtcblxuICAgICAgICBjaGVja19tYXJrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghZGVib3VuY2UpIHtcbiAgICAgICAgICAgICAgICBkZWJvdW5jZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy4jY2hlY2tNYXJrTG9naWModGFzaywgY2hlY2tfbWFyayk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRlYm91bmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB0aGlzLiNkaXNwbGF5VGFza0VkaXQodGFzaywgdGFza19jb250ZW50KSk7XG4gICAgICAgIGluZm9ybWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHRoaXMuI2Rpc3BsYXlUYXNrSW5mbyh0YXNrKSk7XG4gICAgICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB0aGlzLiNkZWxldGVUYXNrRWxlbWVudCh0YXNrLCB0YXNrX2NvbnRlbnQpKTtcblxuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5RmlsdGVySGVhZGVycyhmaWx0ZXJOYW1lKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10YXNrLWNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy5GYWRlRWxlbWVudCh0cnVlLCBjb250YWluZXIpO1xuICAgICAgICBjb25zdCBoZWFkZXJfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaGVhZGVyX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YXNrLWhlYWRlci1jb250YWluZXJcIik7XG4gICAgICAgIGhlYWRlcl9jb250YWluZXIuaWQgPSBcInByb2plY3RfdGFza19oZWFkZXJfY29udGFpbmVyXCI7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgICAgIGRpdmlkZXIuY2xhc3NMaXN0LmFkZChcImRpdmlkZXJcIik7XG5cbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBmaWx0ZXJOYW1lLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgaGVhZGVyX2NvbnRhaW5lci5hcHBlbmQodGl0bGUsIGRpdmlkZXIpO1xuXG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoaGVhZGVyX2NvbnRhaW5lciwgY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0YXRpYyAjcHJpdmF0ZUVkaXRUYXNrRWxlbWVudCh0YXNrLCBlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LXNpZGUgLm5hbWUnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LXNpZGUgLmR1ZS1kYXRlJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrTWFyayA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtc2lkZSAuY2hlY2tNYXJrJyk7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cbiAgICAgICAgY2hlY2tNYXJrLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICBpZiAoY2hlY2tNYXJrLmNsYXNzTGlzdC5jb250YWlucyhgZWFzeWApKSB7XG4gICAgICAgICAgICBjaGVja01hcmsuY2xhc3NMaXN0LnJlbW92ZShcImVhc3lcIik7XG4gICAgICAgICAgICBpZiAoY2hlY2tNYXJrLmNsYXNzTGlzdC5jb250YWlucyhcImVhc3ktY29tcGxldGVcIikpIHtcbiAgICAgICAgICAgICAgICBjaGVja01hcmsuY2xhc3NMaXN0LnJlbW92ZShcImVhc3ktY29tcGxldGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2hlY2tNYXJrLmNsYXNzTGlzdC5jb250YWlucyhcIm1lZGl1bVwiKSkge1xuICAgICAgICAgICAgY2hlY2tNYXJrLmNsYXNzTGlzdC5yZW1vdmUoXCJtZWRpdW1cIik7XG4gICAgICAgICAgICBpZiAoY2hlY2tNYXJrLmNsYXNzTGlzdC5jb250YWlucyhcIm1lZGl1bS1jb21wbGV0ZVwiKSkge1xuICAgICAgICAgICAgICAgIGNoZWNrTWFyay5jbGFzc0xpc3QucmVtb3ZlKFwibWVkaXVtLWNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNoZWNrTWFyay5jbGFzc0xpc3QuY29udGFpbnMoXCJoYXJkXCIpKSB7XG4gICAgICAgICAgICBjaGVja01hcmsuY2xhc3NMaXN0LnJlbW92ZShcImhhcmRcIik7XG4gICAgICAgICAgICBpZiAoY2hlY2tNYXJrLmNsYXNzTGlzdC5jb250YWlucyhcImhhcmQtY29tcGxldGVcIikpIHtcbiAgICAgICAgICAgICAgICBjaGVja01hcmsuY2xhc3NMaXN0LnJlbW92ZShcImhhcmQtY29tcGxldGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFzay5jb21wbGV0ZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjaGVja01hcmsuY2xhc3NMaXN0LmFkZCh0YXNrLmRpZmZpY3VsdHkudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICBjaGVja01hcmsuY2xhc3NMaXN0LmFkZChgJHt0YXNrLmRpZmZpY3VsdHkudG9Mb3dlckNhc2UoKX0tY29tcGxldGVgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrTWFyay5jbGFzc0xpc3QuYWRkKHRhc2suZGlmZmljdWx0eS50b0xvd2VyQ2FzZSgpKTs7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHN0YXRpYyBlZGl0VGFza0VsZW1lbnQodGFzaywgZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcHJpdmF0ZUVkaXRUYXNrRWxlbWVudCh0YXNrLCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheUFsbFRhc2tzKHRhc2tzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcml2YXRlRGlzcGxheUFsbFRhc2tzKHRhc2tzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgI3ByaXZhdGVEaXNwbGF5QWxsVGFza3ModGFza3MpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hZGRUYXNrRWxlbWVudCh0YXNrc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgI2RlbGV0ZVRhc2tFbGVtZW50KHRhc2ssIGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IE5hdmlnYXRpb24uY3VycmVudFByb2plY3Q7XG4gICAgICAgIFRlbXBsYXRlcy5GYWRlRWxlbWVudChmYWxzZSwgZWxlbWVudCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5yZW1vdmVUYXNrKHRhc2spO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfSwgMTUwKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgI2Rpc3BsYXlUYXNrRWRpdCh0YXNrLCBlbGVtZW50KSB7XG4gICAgICAgIEVkaXRUYXNrRm9ybS5zZXRFZGl0KHRhc2ssIGVsZW1lbnQpO1xuICAgIH1cblxuXG5cbiAgICBzdGF0aWMgI2Rpc3BsYXlUYXNrSW5mbyh0YXNrKSB7XG4gICAgICAgIHRhc2suaW5mb1Rhc2soKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgI2NoZWNrTWFya0xvZ2ljKHRhc2ssIGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRhc2suY29tcGxldGUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGFzay5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy9OYXZpZ2F0aW9uLkZhZGVFbGVtZW50KGZhbHNlLCBlbGVtZW50KTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IGB0cmFuc3BhcmVudGA7XG4gICAgICAgICAgICBlbGVtZW50LmZpcnN0Q2hpbGQuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlIG5vdyBmYWxzZTpcIiwgdGFzayk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoYCR7dGFzay5kaWZmaWN1bHR5LnRvTG93ZXJDYXNlKCl9LWNvbXBsZXRlYCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke3Rhc2suZGlmZmljdWx0eS50b0xvd2VyQ2FzZSgpfS1jb21wbGV0ZWApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRhc2suZGlmZmljdWx0eS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRhc2suZGlmZmljdWx0eS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDE1MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGUgbm93IHRydWU6XCIsIHRhc2spO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke3Rhc2suZGlmZmljdWx0eS50b0xvd2VyQ2FzZSgpfS1jb21wbGV0ZWApO1xuICAgICAgICAgICAgYWRkSW1hZ2UoZWxlbWVudCwgV2hpdGVDaGVjaywgXCJcIik7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgICAgICAgZWxlbWVudC5maXJzdENoaWxkLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmNsYXNzIEZvcm0gZXh0ZW5kcyBUZW1wbGF0ZXMge1xuXG4gICAgc3RhdGljICNmb3JtVmFsaWRhdGlvbk1ldGhvZChmb3JtLCBuYW1lRmllbGQsIGRlc2NyaXB0aW9uRmllbGQsIGR1ZURhdGVGaWVsZCwgZGlmZmljdWx0eUZpZWxkKSB7XG5cbiAgICAgICAgaWYgKGZvcm0gJiYgZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChuYW1lRmllbGQgJiYgbmFtZUZpZWxkLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBuYW1lRmllbGQuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRpb25GaWVsZCAmJiBkZXNjcmlwdGlvbkZpZWxkLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkZpZWxkLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGR1ZURhdGVGaWVsZCAmJiBkdWVEYXRlRmllbGQudmFsdWUgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGR1ZURhdGVGaWVsZC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWZmaWN1bHR5RmllbGQgJiYgZGlmZmljdWx0eUZpZWxkLnNlbGVjdGVkSW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgIGRpZmZpY3VsdHlGaWVsZC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cbiAgICBzdGF0aWMgI3ByaXZhdGVTdWJtaXRGb3JtKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGb3JtIHN1Ym1pc3Npb24gcHJldmVudGVkIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBzdWJtaXRGb3JtKGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3VibWl0IGV2ZW50IHRyaWdnZXJlZCFcIik7XG4gICAgICAgIHRoaXMuI3ByaXZhdGVTdWJtaXRGb3JtKGV2ZW50KTtcbiAgICB9XG5cblxuXG4gICAgc3RhdGljIGZvcm1WYWxpZGF0aW9uKGZvcm0sIG5hbWVGaWVsZCwgZGVzY3JpcHRpb25GaWVsZCwgZHVlRGF0ZUZpZWxkLCBkaWZmaWN1bHR5RmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Zvcm1WYWxpZGF0aW9uTWV0aG9kKGZvcm0sIG5hbWVGaWVsZCwgZGVzY3JpcHRpb25GaWVsZCwgZHVlRGF0ZUZpZWxkLCBkaWZmaWN1bHR5RmllbGQpO1xuICAgIH1cblxuICAgIHN0YXRpYyAjZm9ybVJlc2V0RmllbGRzKG5hbWVGaWVsZCwgZGVzY3JpcHRpb25GaWVsZCwgZHVlRGF0ZUZpZWxkLCBkaWZmaWN1bHR5RmllbGQpIHtcbiAgICAgICAgaWYgKG5hbWVGaWVsZCkgbmFtZUZpZWxkLnZhbHVlID0gXCJcIjtcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uRmllbGQpIGRlc2NyaXB0aW9uRmllbGQudmFsdWUgPSBcIlwiO1xuICAgICAgICBpZiAoZHVlRGF0ZUZpZWxkKSBkdWVEYXRlRmllbGQudmFsdWUgPSBcIlwiO1xuICAgICAgICBpZiAoZGlmZmljdWx0eUZpZWxkKSBkaWZmaWN1bHR5RmllbGQuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlc2V0RmllbGRzKG5hbWVGaWVsZCwgZGVzY3JpcHRpb25GaWVsZCwgZHVlRGF0ZUZpZWxkLCBkaWZmaWN1bHR5RmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Zvcm1SZXNldEZpZWxkcyhuYW1lRmllbGQsIGRlc2NyaXB0aW9uRmllbGQsIGR1ZURhdGVGaWVsZCwgZGlmZmljdWx0eUZpZWxkKTtcbiAgICB9XG5cbn1cblxuY2xhc3MgQWRkUHJvamVjdEZvcm0ge1xuXG4gICAgc3RhdGljICNjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Byb2plY3RfY2xvc2VfYnV0dG9uXCIpO1xuXG4gICAgc3RhdGljICNtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Byb2plY3RfbW9kYWxcIik7XG4gICAgc3RhdGljICNmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfcHJvamVjdF9tb2RhbFwiKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtY29udGFpbmVyXCIpWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKVswXTtcblxuICAgIHN0YXRpYyAjbmFtZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfcHJvamVjdF9uYW1lXCIpO1xuICAgIHN0YXRpYyAjZGVzY3JpcHRpb25GaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Byb2plY3RfZGVzY3JpcHRpb25cIik7XG5cbiAgICBzdGF0aWMgb3BlbkZvcm0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0b2dnbGVGb3JtKCk7XG4gICAgfVxuXG4gICAgc3RhdGljICNhZGRQcm9qZWN0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpbXBvcnQoJy4vdG9kby5qcycpIC8vIEFkanVzdCB0aGUgcGF0aCB0byB3aGVyZSB5b3VyIFByb2plY3QgY2xhc3MgaXMgbG9jYXRlZFxuICAgICAgICAgICAgLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIE9uY2UgdGhlIG1vZHVsZSBpcyBsb2FkZWQsIHlvdSBjYW4gY3JlYXRlIGEgbmV3IFByb2plY3RcbiAgICAgICAgICAgICAgICBjb25zdCBQcm9qZWN0ID0gbW9kdWxlLlByb2plY3Q7ICAvLyBBY2Nlc3MgUHJvamVjdCBmcm9tIHRoZSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhBZGRQcm9qZWN0Rm9ybS4jbmFtZUZpZWxkLnZhbHVlLCBBZGRQcm9qZWN0Rm9ybS4jZGVzY3JpcHRpb25GaWVsZC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KEFkZFByb2plY3RGb3JtLiNuYW1lRmllbGQudmFsdWUsIEFkZFByb2plY3RGb3JtLiNkZXNjcmlwdGlvbkZpZWxkLnZhbHVlKTsgLy8gQ3JlYXRlIGEgbmV3IHByb2plY3QgaW5zdGFuY2VcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTmV3IHByb2plY3QgY3JlYXRlZDonLCBuZXdQcm9qZWN0Lm5hbWUpO1xuICAgICAgICAgICAgICAgIEFkZFByb2plY3RGb3JtLiN0b2dnbGVGb3JtKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIFByb2plY3QgY2xhc3M6JywgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljICN0b2dnbGVGb3JtKCkge1xuICAgICAgICBpZiAoIUFkZFByb2plY3RGb3JtLiNtb2RhbC5vcGVuKSB7XG4gICAgICAgICAgICBBZGRQcm9qZWN0Rm9ybS4jbW9kYWwub3BlbiA9IHRydWU7XG4gICAgICAgICAgICBBZGRQcm9qZWN0Rm9ybS4jbW9kYWwuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICAgIE5hdmlnYXRpb24uRmFkZUVsZW1lbnQodHJ1ZSwgQWRkUHJvamVjdEZvcm0uI21vZGFsKTtcbiAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIEFkZFByb2plY3RGb3JtLiNmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgQWRkUHJvamVjdEZvcm0uI2FkZFByb2plY3QpO1xuICAgICAgICAgICAgQWRkUHJvamVjdEZvcm0uI2Nsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIEFkZFByb2plY3RGb3JtLiN0b2dnbGVGb3JtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5hdmlnYXRpb24uRmFkZUVsZW1lbnQoZmFsc2UsIEFkZFByb2plY3RGb3JtLiNtb2RhbCk7XG4gICAgICAgICAgICBBZGRQcm9qZWN0Rm9ybS4jZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIEFkZFByb2plY3RGb3JtLiNhZGRQcm9qZWN0KTtcbiAgICAgICAgICAgIEFkZFByb2plY3RGb3JtLiNjbG9zZUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBBZGRQcm9qZWN0Rm9ybS4jdG9nZ2xlRm9ybSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBGb3JtLnJlc2V0RmllbGRzKEFkZFByb2plY3RGb3JtLiNuYW1lRmllbGQsIEFkZFByb2plY3RGb3JtLiNkZXNjcmlwdGlvbkZpZWxkKTtcbiAgICAgICAgICAgICAgICBBZGRQcm9qZWN0Rm9ybS4jbW9kYWwub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jbGFzcyBBZGRUYXNrRm9ybSBleHRlbmRzIEZvcm0ge1xuICAgIHN0YXRpYyAjbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90YXNrX21vZGFsXCIpO1xuXG4gICAgc3RhdGljICNmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfdGFza19tb2RhbFwiKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtY29udGFpbmVyXCIpWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKVswXTtcblxuICAgIHN0YXRpYyAjY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90YXNrX2Nsb3NlX2J1dHRvblwiKTtcblxuICAgIHN0YXRpYyAjbmFtZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfdGFza19uYW1lXCIpO1xuICAgIHN0YXRpYyAjZGVzY3JpcHRpb25GaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Rhc2tfZGVzY3JpcHRpb25cIik7XG4gICAgc3RhdGljICNkdWVEYXRlRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90YXNrX2R1ZV9kYXRlXCIpO1xuICAgIHN0YXRpYyAjZGlmZmljdWx0eUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfdGFza19kaWZmaWN1bHR5XCIpO1xuXG4gICAgLy9zdGF0aWMgI2FkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Rhc2tfYnV0dG9uX3NhdmVcIik7XG5cbiAgICBzdGF0aWMgVmFsaWRhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIEZvcm0uZm9ybVZhbGlkYXRpb24odGhpcy4jZm9ybSwgdGhpcy4jbmFtZUZpZWxkLCB0aGlzLiNkZXNjcmlwdGlvbkZpZWxkLCB0aGlzLiNkdWVEYXRlRmllbGQsIHRoaXMuI2RpZmZpY3VsdHlGaWVsZCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRvZ2dsZUZvcm0oKSB7XG4gICAgICAgIC8vcmV0dXJuIHRoaXMuI3ByaXZhdGVUb2dnbGVGb3JtKCk7XG4gICAgICAgIC8vRm9ybS5yZXNldEZpZWxkcyhBZGRUYXNrRm9ybS4jbmFtZUZpZWxkLCBBZGRUYXNrRm9ybS4jZGVzY3JpcHRpb25GaWVsZCwgQWRkVGFza0Zvcm0uI2R1ZURhdGVGaWVsZCwgQWRkVGFza0Zvcm0uI2RpZmZpY3VsdHlGaWVsZCk7XG4gICAgICAgIGlmICghQWRkVGFza0Zvcm0uI21vZGFsLm9wZW4pIHtcbiAgICAgICAgICAgIEFkZFRhc2tGb3JtLiNtb2RhbC5vcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIEFkZFRhc2tGb3JtLiNtb2RhbC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIE5hdmlnYXRpb24uRmFkZUVsZW1lbnQodHJ1ZSwgQWRkVGFza0Zvcm0uI21vZGFsKTtcbiAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIEFkZFRhc2tGb3JtLiNmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgQWRkVGFza0Zvcm0uI2FkZFRhc2spO1xuICAgICAgICAgICAgQWRkVGFza0Zvcm0uI2Nsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIEFkZFRhc2tGb3JtLnRvZ2dsZUZvcm0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTmF2aWdhdGlvbi5GYWRlRWxlbWVudChmYWxzZSwgQWRkVGFza0Zvcm0uI21vZGFsKTtcbiAgICAgICAgICAgIEFkZFRhc2tGb3JtLiNmb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgQWRkVGFza0Zvcm0uI2FkZFRhc2spO1xuICAgICAgICAgICAgQWRkVGFza0Zvcm0uI2Nsb3NlQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIEFkZFRhc2tGb3JtLnRvZ2dsZUZvcm0pO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgRm9ybS5yZXNldEZpZWxkcyhBZGRUYXNrRm9ybS4jbmFtZUZpZWxkLCBBZGRUYXNrRm9ybS4jZGVzY3JpcHRpb25GaWVsZCk7XG4gICAgICAgICAgICAgICAgQWRkVGFza0Zvcm0uI21vZGFsLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH0sIDE1MCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgI2FkZFRhc2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIE5hdmlnYXRpb24uY3VycmVudFByb2plY3QuYWRkVGFzayhBZGRUYXNrRm9ybS4jbmFtZUZpZWxkLnZhbHVlLCBBZGRUYXNrRm9ybS4jZGVzY3JpcHRpb25GaWVsZC52YWx1ZSwgQWRkVGFza0Zvcm0uI2R1ZURhdGVGaWVsZC52YWx1ZSwgQWRkVGFza0Zvcm0uI2RpZmZpY3VsdHlGaWVsZC5vcHRpb25zW0FkZFRhc2tGb3JtLiNkaWZmaWN1bHR5RmllbGQuc2VsZWN0ZWRJbmRleF0udGV4dCk7XG4gICAgICAgIEFkZFRhc2tGb3JtLnRvZ2dsZUZvcm0oKTtcbiAgICB9XG5cbiAgICAvLyBzdGF0aWMgI3ByaXZhdGVUb2dnbGVGb3JtKCkge1xuXG4gICAgLy8gfVxuXG59XG5cbmNsYXNzIEVkaXRUYXNrRm9ybSBleHRlbmRzIEZvcm0ge1xuICAgIHN0YXRpYyAjbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRfdGFza19tb2RhbFwiKTtcblxuICAgIHN0YXRpYyAjZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdF90YXNrX21vZGFsXCIpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbC1jb250YWluZXJcIilbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb3JtXCIpWzBdO1xuXG4gICAgc3RhdGljICNjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdF90YXNrX2Nsb3NlX2J1dHRvblwiKTtcblxuICAgIHN0YXRpYyAjbmFtZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0X3Rhc2tfbmFtZVwiKTtcbiAgICBzdGF0aWMgI2Rlc2NyaXB0aW9uRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRfdGFza19kZXNjcmlwdGlvblwiKTtcbiAgICBzdGF0aWMgI2R1ZURhdGVGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdF90YXNrX2R1ZV9kYXRlXCIpO1xuICAgIHN0YXRpYyAjZGlmZmljdWx0eUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0X3Rhc2tfZGlmZmljdWx0eVwiKTtcblxuICAgIC8vc3RhdGljICNzYXZlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0X3Rhc2tfYnV0dG9uX3NhdmVcIik7XG5cbiAgICBzdGF0aWMgI2VkaXRUYXNrSGFuZGxlciA9IG51bGw7XG5cbiAgICBzdGF0aWMgI2VkaXRUYXNrKHRhc2ssIGVsZW1lbnQsIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0YXNrLmVkaXRUYXNrKEVkaXRUYXNrRm9ybS4jbmFtZUZpZWxkLnZhbHVlLCBFZGl0VGFza0Zvcm0uI2Rlc2NyaXB0aW9uRmllbGQudmFsdWUsIEVkaXRUYXNrRm9ybS4jZHVlRGF0ZUZpZWxkLnZhbHVlLCBFZGl0VGFza0Zvcm0uI2RpZmZpY3VsdHlGaWVsZC5vcHRpb25zW0VkaXRUYXNrRm9ybS4jZGlmZmljdWx0eUZpZWxkLnNlbGVjdGVkSW5kZXhdLnRleHQpO1xuICAgICAgICBUYXNrSW5mb3JtYXRpb24uZWRpdFRhc2tFbGVtZW50KHRhc2ssIGVsZW1lbnQpO1xuICAgICAgICBFZGl0VGFza0Zvcm0uI3RvZ2dsZUZvcm0odGFzaywgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldEVkaXQodGFzaywgZWxlbWVudCkge1xuICAgICAgICB0aGlzLiN0b2dnbGVGb3JtKHRhc2ssIGVsZW1lbnQpO1xuICAgICAgICBFZGl0VGFza0Zvcm0uI25hbWVGaWVsZC52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgICAgIEVkaXRUYXNrRm9ybS4jZGVzY3JpcHRpb25GaWVsZC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgIEVkaXRUYXNrRm9ybS4jZHVlRGF0ZUZpZWxkLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICAgICAgICBFZGl0VGFza0Zvcm0uI2RpZmZpY3VsdHlGaWVsZC5zZWxlY3RlZEluZGV4ID0gdGhpcy4jY2hlY2tEaWZmaWN1bHR5SW5kZXgodGFzay5kaWZmaWN1bHR5KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgVmFsaWRhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIEZvcm0uZm9ybVZhbGlkYXRpb24odGhpcy4jZm9ybSwgdGhpcy4jbmFtZUZpZWxkLCB0aGlzLiNkZXNjcmlwdGlvbkZpZWxkLCB0aGlzLiNkdWVEYXRlRmllbGQsIHRoaXMuI2RpZmZpY3VsdHlGaWVsZCk7XG4gICAgfVxuXG4gICAgc3RhdGljICNjaGVja0RpZmZpY3VsdHlJbmRleChkaWZmaWN1bHR5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jZGlmZmljdWx0eUZpZWxkLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiNkaWZmaWN1bHR5RmllbGQub3B0aW9uc1tpXS50ZXh0ID09IGRpZmZpY3VsdHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyAjdG9nZ2xlRm9ybSh0YXNrLCBlbGVtZW50KSB7XG4gICAgICAgIC8vRm9ybS5yZXNldEZpZWxkcyhFZGl0VGFza0Zvcm0uI25hbWVGaWVsZCwgRWRpdFRhc2tGb3JtLiNkZXNjcmlwdGlvbkZpZWxkLCBFZGl0VGFza0Zvcm0uI2R1ZURhdGVGaWVsZCwgRWRpdFRhc2tGb3JtLiNkaWZmaWN1bHR5RmllbGQpO1xuICAgICAgICBpZiAoIUVkaXRUYXNrRm9ybS4jbW9kYWwub3Blbikge1xuICAgICAgICAgICAgRWRpdFRhc2tGb3JtLiNtb2RhbC5vcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIEVkaXRUYXNrRm9ybS4jbW9kYWwuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBOYXZpZ2F0aW9uLkZhZGVFbGVtZW50KHRydWUsIEVkaXRUYXNrRm9ybS4jbW9kYWwpO1xuICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgRWRpdFRhc2tGb3JtLiNlZGl0VGFza0hhbmRsZXIgPSBFZGl0VGFza0Zvcm0uI2VkaXRUYXNrLmJpbmQodGhpcywgdGFzaywgZWxlbWVudCk7XG4gICAgICAgICAgICBFZGl0VGFza0Zvcm0uI2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBFZGl0VGFza0Zvcm0uI2VkaXRUYXNrSGFuZGxlcik7XG4gICAgICAgICAgICBFZGl0VGFza0Zvcm0uI2Nsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIEVkaXRUYXNrRm9ybS4jdG9nZ2xlRm9ybSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOYXZpZ2F0aW9uLkZhZGVFbGVtZW50KGZhbHNlLCBFZGl0VGFza0Zvcm0uI21vZGFsKTtcbiAgICAgICAgICAgIEVkaXRUYXNrRm9ybS4jZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIEVkaXRUYXNrRm9ybS4jZWRpdFRhc2tIYW5kbGVyKTtcbiAgICAgICAgICAgIEVkaXRUYXNrRm9ybS4jY2xvc2VCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgRWRpdFRhc2tGb3JtLiN0b2dnbGVGb3JtKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIEZvcm0ucmVzZXRGaWVsZHMoRWRpdFRhc2tGb3JtLiNuYW1lRmllbGQsIEVkaXRUYXNrRm9ybS4jZGVzY3JpcHRpb25GaWVsZCwgRWRpdFRhc2tGb3JtLiNkdWVEYXRlRmllbGQsIEVkaXRUYXNrRm9ybS4jZGlmZmljdWx0eUZpZWxkKTtcbiAgICAgICAgICAgICAgICBFZGl0VGFza0Zvcm0uI21vZGFsLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH0sIDE1MCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY2xhc3MgSW5mb1Rhc2tGb3JtIGV4dGVuZHMgRm9ybSB7XG4gICAgc3RhdGljICNtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb190YXNrX21vZGFsXCIpO1xuXG4gICAgc3RhdGljICNjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb190YXNrX2Nsb3NlX2J1dHRvblwiKTtcblxuICAgIHN0YXRpYyAjbmFtZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvX3Rhc2tfbmFtZVwiKTtcbiAgICBzdGF0aWMgI2Rlc2NyaXB0aW9uRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9fdGFza19kZXNjcmlwdGlvblwiKTtcbiAgICBzdGF0aWMgI2R1ZURhdGVGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb190YXNrX2R1ZV9kYXRlXCIpO1xuICAgIHN0YXRpYyAjZGlmZmljdWx0eUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvX3Rhc2tfZGlmZmljdWx0eVwiKTtcblxuICAgIHN0YXRpYyBzZXRJbmZvKHRhc2spIHtcbiAgICAgICAgY29uc29sZS5sb2codGFzayk7XG4gICAgICAgIEluZm9UYXNrRm9ybS4jdG9nZ2xlRm9ybSgpO1xuICAgICAgICBJbmZvVGFza0Zvcm0uI25hbWVGaWVsZC52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgICAgIEluZm9UYXNrRm9ybS4jZGVzY3JpcHRpb25GaWVsZC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgIEluZm9UYXNrRm9ybS4jZHVlRGF0ZUZpZWxkLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICAgICAgICBJbmZvVGFza0Zvcm0uI2RpZmZpY3VsdHlGaWVsZC52YWx1ZSA9IHRhc2suZGlmZmljdWx0eTtcbiAgICB9XG5cbiAgICBzdGF0aWMgI3RvZ2dsZUZvcm0oKSB7XG4gICAgICAgIGlmICghdGhpcy4jbW9kYWwub3Blbikge1xuICAgICAgICAgICAgdGhpcy4jbW9kYWwub3BlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiNtb2RhbC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIE5hdmlnYXRpb24uRmFkZUVsZW1lbnQodHJ1ZSwgdGhpcy4jbW9kYWwpO1xuICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgdGhpcy4jY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4gdGhpcy4jdG9nZ2xlRm9ybSgpLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOYXZpZ2F0aW9uLkZhZGVFbGVtZW50KGZhbHNlLCB0aGlzLiNtb2RhbCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBGb3JtLnJlc2V0RmllbGRzKHRoaXMuI25hbWVGaWVsZCwgdGhpcy4jZGVzY3JpcHRpb25GaWVsZCwgdGhpcy4jZHVlRGF0ZUZpZWxkLCB0aGlzLiNkaWZmaWN1bHR5RmllbGQpO1xuICAgICAgICAgICAgICAgIHRoaXMuI21vZGFsLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH0sIDE1MCk7XG4gICAgICAgIH07XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IE5hdmlnYXRpb24sIEFkZFByb2plY3RGb3JtLCBBZGRUYXNrRm9ybSwgRWRpdFRhc2tGb3JtLCBJbmZvVGFza0Zvcm0gfTsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBJbmJveCBmcm9tIFwiLi9pbmJveC5wbmdcIjtcbmltcG9ydCBUb2RheSBmcm9tIFwiLi9jYWxlbmRhci10b2RheS5wbmdcIjtcbmltcG9ydCBUaGlzV2VlayBmcm9tIFwiLi9jYWxlbmRhci13ZWVrLnBuZ1wiO1xuaW1wb3J0IFBsdXNCb3ggZnJvbSBcIi4vcGx1cy1ib3gucG5nXCI7XG4vLyBpbXBvcnQgV2hpdGVQbHVzQm94IGZyb20gXCIuL3doaXRlLXBsdXMtYm94LnBuZ1wiO1xuLy8gaW1wb3J0IERhcmtCbHVlRWRpdCBmcm9tIFwiLi9kYXJrLWJsdWUtbm90ZWJvb2stZWRpdC1vdXRsaW5lLnBuZ1wiO1xuLy8gaW1wb3J0IERhcmtCbHVlSW5mb3JtYXRpb24gZnJvbSBcIi4vZGFyay1ibHVlLWluZm9ybWF0aW9uLW91dGxpbmUucG5nXCI7XG4vLyBpbXBvcnQgRGFya0JsdWVEZWxldGUgZnJvbSBcIi4vZGFyay1ibHVlLXRyYXNoLWNhbi1vdXRsaW5lLnBuZ1wiO1xuaW1wb3J0IFdoaXRlRm9sZGVyIGZyb20gXCIuL3doaXRlLWZvbGRlci5wbmdcIjtcbmltcG9ydCBXaGl0ZUNsb3NlQm94IGZyb20gXCIuL3doaXRlLWNsb3NlLWJveC5wbmdcIjtcbmltcG9ydCBXaGl0ZVBsdXMgZnJvbSBcIi4vd2hpdGUtcGx1cy5wbmdcIjtcbmltcG9ydCBXaGl0ZU5vdGVib29rQWRkIGZyb20gXCIuL3doaXRlLW5vdGVib29rLXBsdXMtb3V0bGluZS5wbmdcIjtcbmltcG9ydCBXaGl0ZUluZm9ybWF0aW9uIGZyb20gXCIuL3doaXRlLWluZm9ybWF0aW9uLW91dGxpbmUucG5nXCI7XG5pbXBvcnQgV2hpdGVDb250ZW50U2F2ZUFsbCBmcm9tIFwiLi93aGl0ZS1jb250ZW50LXNhdmUtYWxsLW91dGxpbmUucG5nXCI7XG5pbXBvcnQgV2hpdGVOb3RlYm9va0VkaXQgZnJvbSBcIi4vd2hpdGUtbm90ZWJvb2stZWRpdC1vdXRsaW5lLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRJbWFnZShlbGVtZW50LCBpbWFnZSwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBuZXdJbWFnZS5zcmMgPSBpbWFnZTtcbiAgICBpZiAoY2xhc3NOYW1lICE9IFwiXCIpIHtcbiAgICAgICAgbmV3SW1hZ2UuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5ld0ltYWdlKTtcbn1cblxuYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2stYnV0dG9uXCIpWzBdLCBJbmJveCwgXCJpbmJveFwiKTtcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrLWJ1dHRvblwiKVsxXSwgVG9kYXksIFwidG9kYXlcIik7XG5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFzay1idXR0b25cIilbMl0sIFRoaXNXZWVrLCBcInRoaXMtd2Vla1wiKTtcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrLWJ1dHRvblwiKVszXSwgUGx1c0JveCwgXCJhZGQtcHJvamVjdFwiKTtcbi8vYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2stYnV0dG9uXCIpWzRdLCBQbHVzQm94LCBcImFkZC1wcm9qZWN0XCIpO1xuLy9hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tfb3B0aW9uXzFcIiksIERhcmtCbHVlRWRpdCwgXCJcIik7XG4vL2FkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza19vcHRpb25fMlwiKSwgRGFya0JsdWVJbmZvcm1hdGlvbiwgXCJcIik7XG4vL2FkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza19vcHRpb25fM1wiKSwgRGFya0JsdWVEZWxldGUsIFwiXCIpO1xuYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfcHJvamVjdF9jbG9zZV9idXR0b25cIiksIFdoaXRlQ2xvc2VCb3gsIFwiXCIpO1xuYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfcHJvamVjdF9idXR0b25fc2F2ZVwiKSwgV2hpdGVQbHVzLCBcIlwiKTtcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJoZWFkaW5nLWNvbnRhaW5lclwiKVswXSwgV2hpdGVGb2xkZXIsIFwiXCIpO1xuYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfdGFza19idXR0b25fc2F2ZVwiKSwgV2hpdGVQbHVzLCBcIlwiKTtcbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3Rhc2tfaGVhZGVyX2NvbnRhaW5lclwiKSwgV2hpdGVOb3RlYm9va0FkZCwgXCJcIik7XG5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90YXNrX2Nsb3NlX2J1dHRvblwiKSwgV2hpdGVDbG9zZUJveCwgXCJcIik7XG5cbmFkZEltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb190YXNrX2Nsb3NlX2J1dHRvblwiKSwgV2hpdGVDbG9zZUJveCwgXCJcIik7XG5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9fdGFza19oZWFkZXJfY29udGFpbmVyXCIpLCBXaGl0ZUluZm9ybWF0aW9uLCBcIlwiKTtcblxuYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0X3Rhc2tfYnV0dG9uX3NhdmVcIiksIFdoaXRlQ29udGVudFNhdmVBbGwsIFwiXCIpO1xuYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0X3Rhc2tfaGVhZGVyX2NvbnRhaW5lclwiKSwgV2hpdGVOb3RlYm9va0VkaXQsIFwiXCIpO1xuYWRkSW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0X3Rhc2tfY2xvc2VfYnV0dG9uXCIpLCBXaGl0ZUNsb3NlQm94LCBcIlwiKTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=