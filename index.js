import inquirer from "inquirer";
//todo array = 
//function = 
//operations = 
let todos = ["Asjad", "Mahad"];
async function createTodo(todo) {
    do {
        let ans = await inquirer.prompt([{
                message: "Please Select an Operation",
                type: "list",
                name: "select",
                choices: ["add", "update", "view", "delete"]
            }]);
        if (ans.select == "add") {
            let addTodo = await inquirer.prompt([{
                    message: "Add todo...",
                    type: "input",
                    name: "todo",
                }]);
            todos.push(addTodo.todo);
            console.log(todos);
        }
        if (ans.select == "update") {
            let updateTodo = await inquirer.prompt([{
                    message: "Please Select item for update",
                    type: "list",
                    name: "todo",
                    choices: todos.map(item => item)
                }]);
            let addTodo = await inquirer.prompt([{
                    message: "Add todo...",
                    type: "input",
                    name: "todo",
                }]);
            let newtodos = todos.filter(val => val !== updateTodo.todo);
            todos = [...newtodos, addTodo.todo];
            console.log(todos);
        }
        if (ans.select == "view") {
            console.log(todos);
        }
        if (ans.select == "delete") {
            let deleteTodo = await inquirer.prompt([{
                    message: "Please Select item for update",
                    type: "list",
                    name: "todo",
                    choices: todos.map(item => item)
                }]);
            let newtodos = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newtodos];
            console.log(todos);
        }
    } while (true);
}
createTodo(todos);
