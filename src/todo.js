import { Navigation, AddProjectForm, AddTaskForm, EditTaskForm, InfoTaskForm } from "./dom.js";

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
    Navigation.createProjectButton(project);
  }

  addTask(title, description, dueDate, difficulty, complete) {
    if (!AddTaskForm.Validation() && Navigation.currentProject == this) return;
    const task = new Task(title, description, dueDate, difficulty, complete);
    this.tasks.push(task);
    console.log(`Added Task: ${task.title}`);
    if (Navigation.currentProject == this) Navigation.displayTask(task);
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
    if (!EditTaskForm.Validation()) return;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.difficulty = difficulty;
    this.complete = complete;
    console.log(`Edited Task: ${this.title}`);
  }

  infoTask() {
    InfoTaskForm.setInfo(this.__target);
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

Navigation.inboxTasksButton.addEventListener("mouseup", () => Navigation.displayInboxTasks(Project.projects));
Navigation.thisWeeksTasksButton.addEventListener("mouseup", () => Navigation.displayThisWeekTasks(Project.projects));
Navigation.todaysTasksButton.addEventListener("mouseup", () => Navigation.displayTodayTasks(Project.projects));

Navigation.addProjectButton.addEventListener("mouseup", () => AddProjectForm.openForm());

export { Project };