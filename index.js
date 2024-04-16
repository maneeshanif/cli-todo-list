#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright.bold.bgWhiteBright.overline('\t\t\t\t\t\t TODO-List'));
console.log(chalk.greenBright('\nDeveloped By:'));
console.log(chalk.redBright.underline.italic("\tAnees Hanif"));
console.log("\n");
let todos = [];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: chalk.yellowBright.italic.bold.underline("Select an operation you want to perform"),
            name: "select",
            choices: ["Add", "Update", "View", "Delete", "Exit"],
        });
        if (ans.select === "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: chalk.redBright.italic.bold.underline("\tAdd items in Todo"),
                name: "todo",
            });
            todos.push(addTodo.todo);
            console.log(todos);
        }
        if (ans.select === "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: chalk.blueBright.italic.bold.underline("\tSelect items for update"),
                name: "todo",
                choices: todos.map((item) => item),
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: chalk.cyanBright.italic.underline("\tAdd items in Todo"),
                name: "todo",
            });
            let newTodos = todos.filter((val) => val !== updateTodo.todo);
            todos = [...newTodos, addTodo.todo];
            console.log(todos);
        }
        if (ans.select === "View") {
            console.log(todos);
        }
        if (ans.select === "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: chalk.greenBright.italic.bold.underline("\tSelect items for delete"),
                name: "todo",
                choices: todos.map((item) => item),
            });
            let newTodos = todos.filter((val) => val !== deleteTodo.todo);
            todos = [...newTodos];
            console.log(todos);
        }
        if (ans.select === "Exit") {
            return;
        }
    } while (true);
}
createTodo(todos);
