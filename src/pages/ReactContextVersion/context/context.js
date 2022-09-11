import { createContext, useState, useContext, useEffect } from "react";

import exampleTaskList from '../../../exampleTask'
export const AppContext = createContext();

const FilterTypes = ['all', 'active', 'completed']

const AppProvider = ({ children }) => {

    const [theme, setTheme] = useState("dark")

    const [tasks, setTasks] = useState(exampleTaskList)
    const [activeFilter, setActiveFilter] = useState('all')

    const AddNewTask = (taskValue) => {
        const newTask = { task: taskValue, isCompleted: false }
        setTasks([newTask, ...tasks])
    }
    const DeleteTask = (taskToDelete) => {
        setTasks(tasks.filter(item => item.task !== taskToDelete));
    }
    const ToggleCompleted = (task) => {
        const updateList = tasks.map((element, i) => {
            if (task === element.task) {
                element.isCompleted = !element.isCompleted;
            }
            return element
        })
        setTasks(updateList)
    }
    const ClearCompleted = () => {
        setTasks(tasks.filter(task => !task.isCompleted))
    }
    const ToggleFilter = (currentFilter) => {
        setActiveFilter(currentFilter)
    }
    const changeTheme = () => {

        theme === "dark"
            ? setTheme('light')
            : setTheme('dark')
    }
    return (
        <AppContext.Provider value={{
            theme,
            changeTheme,
            tasks,
            AddNewTask,
            DeleteTask,
            ClearCompleted,
            ToggleCompleted,
            FilterTypes,
            ToggleFilter,
            activeFilter

        }}>
            {children}
        </AppContext.Provider>
    )

}
export default AppProvider;

