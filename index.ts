import inquirer from "inquirer"
let Todo:string[] = [];
let loop = true;
while(loop){
    const ans  = await inquirer.prompt([{
        name : "todo",
        type : "input",
        message : "what do you want to add in todo"
    },
    {
        type : "confirm",
        name : "addmore",
        message : "Do you want to add morer in todo",
        default : "false"
    },
  
])
  Todo.push(ans.todo)
  console.log(Todo);
  loop = ans.addmore;
    

}
