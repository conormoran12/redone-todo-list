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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RvZG9fanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtDQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUyxnREFBVyxpQkFBaUIsK0NBQVU7QUFDL0M7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDLFFBQVEsK0NBQVUseUJBQXlCLCtDQUFVO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQSxxQ0FBcUMsV0FBVztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGlEQUFZO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsV0FBVztBQUMzQztBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwQkFBMEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOEJBQThCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUFVLG9EQUFvRCwrQ0FBVTtBQUN4RSwrQ0FBVSx3REFBd0QsK0NBQVU7QUFDNUUsK0NBQVUscURBQXFELCtDQUFVO0FBQ3pFO0FBQ0EsK0NBQVUsb0RBQW9ELG1EQUFjO0FBQzVFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0LXJlYWR5LXRvZG8tbGlzdC8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdmlnYXRpb24sIEFkZFByb2plY3RGb3JtLCBBZGRUYXNrRm9ybSwgRWRpdFRhc2tGb3JtLCBJbmZvVGFza0Zvcm0gfSBmcm9tIFwiLi9kb20uanNcIjtcclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG5cclxuICBzdGF0aWMgcHJvamVjdHMgPSBuZXcgUHJveHkoW10sIHtcclxuICAgIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICAgIFByb2plY3Quc2F2ZVByb2plY3RzKCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lLCBwcm9qZWN0RGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMubmFtZSA9IHByb2plY3ROYW1lO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbjtcclxuICAgIHRoaXMudGFza3MgPSBuZXcgUHJveHkoW10sIHtcclxuICAgICAgc2V0OiAodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpID0+IHtcclxuICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICAgICAgUHJvamVjdC5zYXZlUHJvamVjdHMoKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgUHJvamVjdC4jc2VuZFByb2plY3RJbmZvcm1hdGlvbih0aGlzKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzYXZlUHJvamVjdHMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkF1dG9zYXZlZCBQcm9qZWN0c1wiKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoUHJvamVjdC5wcm9qZWN0cykpO1xyXG4gIH1cclxuXHJcblxyXG4gIHN0YXRpYyAjc2VuZFByb2plY3RJbmZvcm1hdGlvbihwcm9qZWN0KSB7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb2plY3RzKTtcclxuICAgIE5hdmlnYXRpb24uY3JlYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KTtcclxuICB9XHJcblxyXG4gIGFkZFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBkaWZmaWN1bHR5LCBjb21wbGV0ZSkge1xyXG4gICAgaWYgKCFBZGRUYXNrRm9ybS5WYWxpZGF0aW9uKCkgJiYgTmF2aWdhdGlvbi5jdXJyZW50UHJvamVjdCA9PSB0aGlzKSByZXR1cm47XHJcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBkaWZmaWN1bHR5LCBjb21wbGV0ZSk7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgICBjb25zb2xlLmxvZyhgQWRkZWQgVGFzazogJHt0YXNrLnRpdGxlfWApO1xyXG4gICAgaWYgKE5hdmlnYXRpb24uY3VycmVudFByb2plY3QgPT0gdGhpcykgTmF2aWdhdGlvbi5kaXNwbGF5VGFzayh0YXNrKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVRhc2sodGFzaykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnRhc2tzW2ldID09IHRhc2spIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZlZCBUYXNrOiAke3Rhc2sudGl0bGV9YCk7XHJcbiAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgUHJvamVjdC5zYXZlUHJvamVjdHMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIFRhc2sge1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGRpZmZpY3VsdHksIGNvbXBsZXRlID0gZmFsc2UpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xyXG4gICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZXIgPSB7XHJcbiAgICAgIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgICAgICBQcm9qZWN0LnNhdmVQcm9qZWN0cygpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9LFxyXG4gICAgICBnZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcclxuICAgICAgICBpZiAocHJvcGVydHkgPT09IFwiX190YXJnZXRcIikgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KHRoaXMsIGhhbmRsZXIpO1xyXG5cclxuICAgIHJldHVybiBwcm94eTtcclxuICB9XHJcblxyXG4gIGVkaXRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgZGlmZmljdWx0eSwgY29tcGxldGUpIHtcclxuICAgIGlmICghRWRpdFRhc2tGb3JtLlZhbGlkYXRpb24oKSkgcmV0dXJuO1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XHJcbiAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XHJcbiAgICBjb25zb2xlLmxvZyhgRWRpdGVkIFRhc2s6ICR7dGhpcy50aXRsZX1gKTtcclxuICB9XHJcblxyXG4gIGluZm9UYXNrKCkge1xyXG4gICAgSW5mb1Rhc2tGb3JtLnNldEluZm8odGhpcy5fX3RhcmdldCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgTG9jYWxTdG9yYWdlIHtcclxuXHJcbiAgc3RhdGljIGdldFByb2plY3RzKCkge1xyXG4gICAgLy9sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInByb2plY3RzXCIpO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHtcclxuICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XHJcbiAgICAgIGNvbnN0IHNhdmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wcm9qZWN0cyk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhdmVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBzYXZlZFByb2plY3QgPSBzYXZlZFByb2plY3RzW2ldO1xyXG4gICAgICAgIGNvbnN0IHNhdmVkUHJvamVjdFRhc2tzID0gc2F2ZWRQcm9qZWN0LnRhc2tzO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3Qoc2F2ZWRQcm9qZWN0Lm5hbWUsIHNhdmVkUHJvamVjdC5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzYXZlZFByb2plY3RUYXNrcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3QgdGFzayA9IHNhdmVkUHJvamVjdFRhc2tzW2pdO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJUYXNrIGFib3V0IHRvIGJlIGFkZGVkXCIpO1xyXG4gICAgICAgICAgcHJvamVjdC5hZGRUYXNrKHRhc2sudGl0bGUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2suZHVlRGF0ZSwgdGFzay5kaWZmaWN1bHR5LCB0YXNrLmNvbXBsZXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5Mb2NhbFN0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcclxuXHJcbk5hdmlnYXRpb24uaW5ib3hUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiBOYXZpZ2F0aW9uLmRpc3BsYXlJbmJveFRhc2tzKFByb2plY3QucHJvamVjdHMpKTtcclxuTmF2aWdhdGlvbi50aGlzV2Vla3NUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiBOYXZpZ2F0aW9uLmRpc3BsYXlUaGlzV2Vla1Rhc2tzKFByb2plY3QucHJvamVjdHMpKTtcclxuTmF2aWdhdGlvbi50b2RheXNUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiBOYXZpZ2F0aW9uLmRpc3BsYXlUb2RheVRhc2tzKFByb2plY3QucHJvamVjdHMpKTtcclxuXHJcbk5hdmlnYXRpb24uYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiBBZGRQcm9qZWN0Rm9ybS5vcGVuRm9ybSgpKTtcclxuXHJcbmV4cG9ydCB7IFByb2plY3QgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=