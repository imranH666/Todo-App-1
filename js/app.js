const inputBox = document.querySelector(".input-box")
const incompleteTask_UL = document.querySelector(".incomplete-task ul")
const completeTask_UL = document.querySelector(".complete-task ul")
const form = document.querySelector("form")


let createTask = (task) => {
    let listItem = document.createElement('li')
    let checkBox = document.createElement('input')
    let label = document.createElement('label')

    label.innerText = task
    checkBox.type = 'checkbox'
    checkBox.className = 'checkbox'

    listItem.appendChild(checkBox)
    listItem.appendChild(label)
    
    return listItem
}


let addTask = (event) => {
    event.preventDefault()
    let listItem = createTask(inputBox.value)
    incompleteTask_UL.appendChild(listItem)
    inputBox.value = ""

    bindIncompleteItems(listItem, completeTask)
}


let completeTask = function () {
    let listItem = this.parentNode
    console.log(listItem)
    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = "Delete"
    deleteBtn.className = 'delete'
    listItem.appendChild(deleteBtn)
   
    let checkBox = listItem.querySelector('input[type="checkbox"]')
    checkBox.remove()
    completeTask_UL.appendChild(listItem)

    bindCompleteItems(listItem, delteTask)
}


let delteTask = function () {
    let listItem = this.parentNode
    let ul = listItem.parentNode
    ul.removeChild(listItem)
}


let bindCompleteItems = (taskItem, deleteBottonClick) => {
    let deletButton = taskItem.querySelector(".delete")
    deletButton.onclick = deleteBottonClick
}


let bindIncompleteItems = (taskItem, checkBoxClick) => {
    let checkBox = taskItem.querySelector('input[type="checkbox"]')
    checkBox.onchange = checkBoxClick
}

form.addEventListener('submit', addTask)

