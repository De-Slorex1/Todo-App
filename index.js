window.addEventListener('load', () => {
    let division = document.querySelector('#division')
    let form = document.querySelector('#form')
    let input = document.querySelector('#input')
    let taskListContainer = document.querySelector('.task-list')
    const btn = document.querySelector('#btn')

    btn.addEventListener('click', (e) => {
        e.preventDefault()
        let task = input.value
        let arrValue = task
        localStorage.setItem('value', JSON.stringify(arrValue))
        let values = localStorage.getItem('value')
        console.log(JSON.parse(values))
        console.log(task)

        let taskConatiner = document.createElement('div')
        taskConatiner.classList.add('taskConatiner')

        let taskInput = document.createElement('input')
        taskInput.classList.add('taskInput')
        taskInput.value = task
        taskInput.readOnly = true

        let delBtn = document.createElement('button')
        delBtn.classList.add('delBtn')
        delBtn.textContent = "DELETE"
        delBtn.addEventListener('click', () => {
            taskConatiner.remove()
        })

        let editBtn = document.createElement('button')
        editBtn.classList.add('editBtn')
        editBtn.textContent = "EDIT"
        editBtn.addEventListener('click', () => {
            if(editBtn.textContent === 'EDIT') {
                taskInput.readOnly = false
                editBtn.textContent = "SAVE"
            }
            else if (editBtn.textContent === 'SAVE') {
                taskInput.readOnly = true
                editBtn.textContent = "EDIT"
            }
        })

        taskConatiner.append(taskInput, editBtn, delBtn)
        taskListContainer.append(taskConatiner)

        input.value = ''
    })
})