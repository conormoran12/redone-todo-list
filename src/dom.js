import addImage from "./index.js";
import WhitePlusBox from "./white-plus-box.png";
import DarkBlueNotebookEditOutline from "./dark-blue-notebook-edit-outline.png";
import DarkBlueInformationOutline from "./dark-blue-information-outline.png";
import DarkBlueTrashCanOutline from "./dark-blue-trash-can-outline.png";
import WhiteCheck from "./white-check.png";

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

        addImage(button, WhitePlusBox, "add-task-img");
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
            addImage(check_mark, WhiteCheck, "");
        } else {
            check_mark.classList.add(task.difficulty.toLowerCase());
        }

        addImage(edit, DarkBlueNotebookEditOutline, "");
        addImage(information, DarkBlueInformationOutline, "");
        addImage(del, DarkBlueTrashCanOutline, "");

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
            addImage(element, WhiteCheck, "");
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
        import('./todo.js') // Adjust the path to where your Project class is located
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

export { Navigation, AddProjectForm, AddTaskForm, EditTaskForm, InfoTaskForm };