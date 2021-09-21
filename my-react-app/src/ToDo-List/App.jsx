import React, { useState } from "react"
import "./App.css"
import ListItem from "./ListItem"
function App() {
    const [input, updateInput] = useState({
        task: ""
    })

    const onChange = event => updateInput(previousValue => ({ ...previousValue, [event.target.name]: event.target.value }))

    const [todoList, updateTodoList] = useState(localStorage.todoList ? JSON.parse(localStorage.todoList) : [])

    const onSubmit = event => {
        event.preventDefault()
        if (input.task.length > 0) {
            updateTodoList(previousValue => {

                let todoList = [
                    input.task,
                    ...previousValue,
                ]
                localStorage.todoList = JSON.stringify(todoList)

                return todoList
            })

            updateInput(previousValue => ({ ...previousValue, task: "" }))
        }
        document.getElementById("input").focus()
    }

    const deleteTask = id => {
        updateTodoList(previousValue => {
            let todoList = previousValue.filter((value, index) => {
                return index !== id;
            })

            localStorage.todoList = JSON.stringify(todoList)

            return todoList
        })
    }

    return (<>
        <form onSubmit={onSubmit}>
            <div className="main-container">
                <div className="container">
                    <center>
                        <h1>To-Do List</h1>
                    </center>
                    <center className="header">
                        <input placeholder="Enter Task Here" ariaAutocomplete="false" autoComplete="false" id="input" type="text" name="task" value={input.task} onChange={onChange} /><button type="submit" className="add-btn"></button>
                    </center>
                    <hr />
                    <div className="body">
                        <ul>
                            {
                                todoList.map((value, index) => {
                                    return (<ListItem key={index} index={index} task={value} delete={deleteTask} />)
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </form>
    </>)
}

export default App