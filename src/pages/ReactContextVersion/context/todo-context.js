import { createContext } from "react";


import exampleTaskList from '../../../exampleTask'

export const TodoContext = createContext();


const initialTodos = [
    { task: "Get a ReactJS job", isCompleted: true },
    { task: "Jog around the park 3x", isCompleted: false },
    { task: "10 minutes meditation", isCompleted: false },
    { task: "Read for 1 hour", isCompleted: false },
    { task: "Pick up groceries", isCompleted: false },
    { task: "Complete Todo App", isCompleted: false }
]

const tasksList = exampleTaskList
const addTask = () => {

}
const removeTask = () => {

}

const todoList = { tasksList, addTask, removeTask }
