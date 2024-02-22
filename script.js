const input = document.querySelector("#todo-input");
const inputContainer = document.querySelector(".todo-input-container");
const todoList = document.querySelector(".todo-list-container");
const todoBg = document.querySelector(".todo-list-and-functions");
const itemsLeft = document.querySelector("#items-left");
const themeToggle = document.querySelector(".theme-toggle");
const body = document.querySelector("body");
const todoContainer = document.querySelector(".todo-container");
const title = document.querySelector(".title");


let themeDark = "images/icon-moon.svg"
let themeLight = "images/icon-sun.svg"

function changeBtn() {
    document.querySelector("#theme-btn").src = themeLight;
    let aux = themeDark;
    themeDark = themeLight;
    themeLight = aux;
}

function saveTodo(text) {
    const template = `<div class="todo">
        <div class="check-circle"></div>
        <p id="todo-text">${text}</p>
        <i class="bi bi-x-lg"></i>
    </div>`;

    const parser = new DOMParser();
    const htmlTemplate = parser.parseFromString(template, "text/html");
    const todo = htmlTemplate.querySelector(".todo");

    todoList.appendChild(todo);
    todo.classList.add("incomplete")

    input.value = ""
}

input.addEventListener("keyup", (e) => {
    const todoValue = e.target.value
    
    if(e.key === "Enter") {
        saveTodo(todoValue)

        const todoItem = document.querySelectorAll(".incomplete");
        itemsLeft.innerHTML = todoItem.length

        const todos = document.querySelectorAll(".todo");
        const checkCircle = document.querySelectorAll(".check-circle");

        // checkCircle.forEach((circle) => {
        //     circle.addEventListener("click", () => {
        //         circle.classList.add("complete")

        //         todos.forEach((element) => {
        //             element.addEventListener("click", () => {
        //                 element.classList.remove("incomplete")

                
        //                 const 
        //             })
        //         })
        //     })
        // })

        

        document.addEventListener("click", (e) => {
            const targetEl = e.target
            const parentEl = targetEl.closest(".todo")

            if(targetEl.classList.contains("check-circle")) {
                targetEl.classList.add("complete")
                parentEl.classList.remove("incomplete")
                parentEl.classList.add("completed")

                
                const incomplete = document.querySelectorAll(".incomplete")

                console.log(incomplete.length)
                itemsLeft.innerHTML = incomplete.length
            }

            if(targetEl.classList.contains("bi")) {
                
                parentEl.remove()

                const incomplete = document.querySelectorAll(".incomplete")

                itemsLeft.innerHTML = incomplete.length
            }

            if(targetEl.innerText === "Completed") {

                const completed = document.querySelectorAll(".completed")

                completed.forEach((element) => {
                    element.classList.remove("hide")
                } )

                const incomplete = document.querySelectorAll(".incomplete")

                incomplete.forEach((element) => {
                    element.classList.add("hide")
                } )
            }

            if(targetEl.innerText === "Active") {

                const incomplete = document.querySelectorAll(".incomplete")

                incomplete.forEach((element) => {
                    element.classList.remove("hide")
                } )

                const completed = document.querySelectorAll(".completed")

                completed.forEach((element) => {
                    element.classList.add("hide")
                } )
            }

            if(targetEl.innerText === "All") {

                const incomplete = document.querySelectorAll(".incomplete")

                incomplete.forEach((element) => {
                    element.classList.remove("hide")
                } )

                const completed = document.querySelectorAll(".completed")

                completed.forEach((element) => {
                    element.classList.remove("hide")
                } )
            }

            if(targetEl.innerText === "Clear Completed") {

                const completed = document.querySelectorAll(".completed")

                completed.forEach((element) => {
                    element.remove()
                } )
            }
            

            
        })

        if(themeLight === "images/icon-moon.svg") {
           
            todos.forEach((element) => {
                element.classList.add("dark-todo")
            })
            
            checkCircle.forEach((circle) => {
                circle.classList.add("dark-circle")
            })
            
        }
    }
    
    
})

themeToggle.addEventListener("click", () => {
    
    changeBtn()

    const todos = document.querySelectorAll(".todo");
    const checkCircle = document.querySelectorAll(".check-circle");

    todoBg.classList.toggle("active")
    body.classList.toggle("dark-bg")
    todoContainer.classList.toggle("dark")
    inputContainer.classList.toggle("active")
    input.classList.toggle("dark-input")
    title.classList.toggle("dark-title")

    todos.forEach((element) => {
        element.classList.toggle("dark-todo")

        
    })

    checkCircle.forEach((circle) => {
        circle.classList.toggle("dark-circle")
    })
})


