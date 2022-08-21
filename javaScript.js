document.querySelector('#buttonCompletedTasks').addEventListener('click' , (e) => {
    getCompletedTasks();
})

document.querySelector('#buttonCheckAll').addEventListener('click' , (e) => {
    let checkboxes = document.querySelectorAll('input[type=checkbox]')
    checkboxes.forEach(
        function(checkbox){
        checkbox.checked=true;
        }
    )
})

document.querySelector('#buttonUnCheckAll').addEventListener('click',(e) => {
    let checkboxes= document.querySelectorAll('input[type=checkbox]')
    checkboxes.forEach(
        function(checkbox){
        checkbox.checked=false;
        }
    )
})

function getCompletedTasks()
{
    let values=[];
    checked= document.querySelectorAll('input[type="checkbox"]:checked');
    checked.forEach(chkbox =>values.push(chkbox.value));
    console.log(values);
}

window.addEventListener('DOMContentLoaded', event => {
    divTasks = document.querySelector('#tasks');
    
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
            todos.forEach(todo => {
                divTasks.innerHTML += 
                `<input type="checkbox" value="${todo.id}" id="${todo.id}" ${todo.completed ? "checked":"unchecked"}>
                <label for="${todo.id}"> ${todo.title} </label><br />`    
            }
        );
            getCompletedTasks();
    });
    });
