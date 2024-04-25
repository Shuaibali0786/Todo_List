#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
// Print welcome message
console.log(chalk.bold.rgb(204, 204, 204)(`\n  \t \t \t \t \t \t <<<=======================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`\n  \t\t\t <<<===========>>> \t\t ${chalk.bold.hex(`#9999ff`)(`Welcome to  \`Shuaib\` - Todo-List App `)} \t\t<<<===========>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`\n  \t\t \t \t \t \t <<<=======================================>>>`));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to  do:",
                choices: ["Add Task", "Delete Task", "update Task", "View Todo-List", "Exit"]
            }
        ]);
        // Else if 
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
// 1: fucntion to add new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-List\n`);
};
// 2: function to view all Todo-List Task
let viewTask = () => {
    console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index}: ${task}`);
    });
    console.log("\n");
};
// 3: Function to delete a task from the list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete:",
        }
    ]);
    let deleteTask = todoList.splice(taskIndex.index, 1);
    console.log(`\n ${deleteTask} this task been deleted successfully from your Todo-List`);
};
// 4: Function to update a task from list
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to  update :"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name :",
        }
    ]);
    todoList[update_task_index.index] = update_task_index.new_task;
    console.log(`\n Task at index no.${update_task_index.index} updated successfully [For updated list check option: "view Todo_List"] `);
};
main();
