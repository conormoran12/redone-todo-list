"use strict";
(self["webpackChunkgit_ready_todo_list"] = self["webpackChunkgit_ready_todo_list"] || []).push([["src_todo_js"],{

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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RvZG9fanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGOztBQUUvRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7O0FBSUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtDQUFVO0FBQ2Q7O0FBRUE7QUFDQSxTQUFTLGdEQUFXLGlCQUFpQiwrQ0FBVTtBQUMvQztBQUNBO0FBQ0EsK0JBQStCLFdBQVc7QUFDMUMsUUFBUSwrQ0FBVSx5QkFBeUIsK0NBQVU7QUFDckQ7O0FBRUE7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0EscUNBQXFDLFdBQVc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLGlEQUFZO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsV0FBVztBQUMzQzs7QUFFQTtBQUNBLElBQUksaURBQVk7QUFDaEI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsMEJBQTBCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsOEJBQThCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLCtDQUFVLG9EQUFvRCwrQ0FBVTtBQUN4RSwrQ0FBVSx3REFBd0QsK0NBQVU7QUFDNUUsK0NBQVUscURBQXFELCtDQUFVOztBQUV6RSwrQ0FBVSxvREFBb0QsbURBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXQtcmVhZHktdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2aWdhdGlvbiwgQWRkUHJvamVjdEZvcm0sIEFkZFRhc2tGb3JtLCBFZGl0VGFza0Zvcm0sIEluZm9UYXNrRm9ybSB9IGZyb20gXCIuL2RvbS5qc1wiO1xuXG5jbGFzcyBQcm9qZWN0IHtcblxuICBzdGF0aWMgcHJvamVjdHMgPSBuZXcgUHJveHkoW10sIHtcbiAgICBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgIFByb2plY3Quc2F2ZVByb2plY3RzKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cblxuICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5uYW1lID0gcHJvamVjdE5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbjtcbiAgICB0aGlzLnRhc2tzID0gbmV3IFByb3h5KFtdLCB7XG4gICAgICBzZXQ6ICh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgIFByb2plY3Quc2F2ZVByb2plY3RzKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgUHJvamVjdC4jc2VuZFByb2plY3RJbmZvcm1hdGlvbih0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBzYXZlUHJvamVjdHMoKSB7XG4gICAgY29uc29sZS5sb2coXCJBdXRvc2F2ZWQgUHJvamVjdHNcIik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShQcm9qZWN0LnByb2plY3RzKSk7XG4gIH1cblxuXG4gIHN0YXRpYyAjc2VuZFByb2plY3RJbmZvcm1hdGlvbihwcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvamVjdHMpO1xuICAgIE5hdmlnYXRpb24uY3JlYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KTtcbiAgfVxuXG4gIGFkZFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBkaWZmaWN1bHR5LCBjb21wbGV0ZSkge1xuICAgIGlmICghQWRkVGFza0Zvcm0uVmFsaWRhdGlvbigpICYmIE5hdmlnYXRpb24uY3VycmVudFByb2plY3QgPT0gdGhpcykgcmV0dXJuO1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGRpZmZpY3VsdHksIGNvbXBsZXRlKTtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgY29uc29sZS5sb2coYEFkZGVkIFRhc2s6ICR7dGFzay50aXRsZX1gKTtcbiAgICBpZiAoTmF2aWdhdGlvbi5jdXJyZW50UHJvamVjdCA9PSB0aGlzKSBOYXZpZ2F0aW9uLmRpc3BsYXlUYXNrKHRhc2spO1xuICB9XG5cbiAgcmVtb3ZlVGFzayh0YXNrKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50YXNrc1tpXSA9PSB0YXNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmVkIFRhc2s6ICR7dGFzay50aXRsZX1gKTtcbiAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIFByb2plY3Quc2F2ZVByb2plY3RzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuY2xhc3MgVGFzayB7XG5cbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBkaWZmaWN1bHR5LCBjb21wbGV0ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgY29uc3QgaGFuZGxlciA9IHtcbiAgICAgIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgIFByb2plY3Quc2F2ZVByb2plY3RzKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGdldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgICBpZiAocHJvcGVydHkgPT09IFwiX190YXJnZXRcIikgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkodGhpcywgaGFuZGxlcik7XG5cbiAgICByZXR1cm4gcHJveHk7XG4gIH1cblxuICBlZGl0VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGRpZmZpY3VsdHksIGNvbXBsZXRlKSB7XG4gICAgaWYgKCFFZGl0VGFza0Zvcm0uVmFsaWRhdGlvbigpKSByZXR1cm47XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgIGNvbnNvbGUubG9nKGBFZGl0ZWQgVGFzazogJHt0aGlzLnRpdGxlfWApO1xuICB9XG5cbiAgaW5mb1Rhc2soKSB7XG4gICAgSW5mb1Rhc2tGb3JtLnNldEluZm8odGhpcy5fX3RhcmdldCk7XG4gIH1cblxufVxuXG5jbGFzcyBMb2NhbFN0b3JhZ2Uge1xuXG4gIHN0YXRpYyBnZXRQcm9qZWN0cygpIHtcbiAgICAvL2xvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwicHJvamVjdHNcIik7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHtcbiAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgICAgY29uc3Qgc2F2ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2plY3RzKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYXZlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNhdmVkUHJvamVjdCA9IHNhdmVkUHJvamVjdHNbaV07XG4gICAgICAgIGNvbnN0IHNhdmVkUHJvamVjdFRhc2tzID0gc2F2ZWRQcm9qZWN0LnRhc2tzO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChzYXZlZFByb2plY3QubmFtZSwgc2F2ZWRQcm9qZWN0LmRlc2NyaXB0aW9uKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzYXZlZFByb2plY3RUYXNrcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNvbnN0IHRhc2sgPSBzYXZlZFByb2plY3RUYXNrc1tqXTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlRhc2sgYWJvdXQgdG8gYmUgYWRkZWRcIik7XG4gICAgICAgICAgcHJvamVjdC5hZGRUYXNrKHRhc2sudGl0bGUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2suZHVlRGF0ZSwgdGFzay5kaWZmaWN1bHR5LCB0YXNrLmNvbXBsZXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbkxvY2FsU3RvcmFnZS5nZXRQcm9qZWN0cygpO1xuXG5OYXZpZ2F0aW9uLmluYm94VGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4gTmF2aWdhdGlvbi5kaXNwbGF5SW5ib3hUYXNrcyhQcm9qZWN0LnByb2plY3RzKSk7XG5OYXZpZ2F0aW9uLnRoaXNXZWVrc1Rhc2tzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IE5hdmlnYXRpb24uZGlzcGxheVRoaXNXZWVrVGFza3MoUHJvamVjdC5wcm9qZWN0cykpO1xuTmF2aWdhdGlvbi50b2RheXNUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiBOYXZpZ2F0aW9uLmRpc3BsYXlUb2RheVRhc2tzKFByb2plY3QucHJvamVjdHMpKTtcblxuTmF2aWdhdGlvbi5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IEFkZFByb2plY3RGb3JtLm9wZW5Gb3JtKCkpO1xuXG5leHBvcnQgeyBQcm9qZWN0IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9