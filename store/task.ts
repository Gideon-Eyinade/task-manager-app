
import { defineStore, skipHydrate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { TaskDetails } from "../types/task";
import { onMounted, ref } from "vue";


export const useTaskStore = defineStore('task', () => {
    //states
    const taskData = ref<TaskDetails[]>([])
    const taskDataInStore = useLocalStorage('task_data', '')


    // actions
    const addNewTask = (taskDetails: any) => {
        localStorage.setItem("task_data", JSON.stringify(taskData.value.push(taskDetails)) || "")
    }
    
    const updateTask = (taskDetails: any) => {        
        let updatedTaskData = taskData.value.map(task => (task.id == taskDetails.id ? {...task, taskDetails} : task))

        localStorage.setItem("task_data", JSON.stringify(updatedTaskData))
    }




    return {
        taskData: skipHydrate(taskData),
        addNewTask,
        updateTask
    }

})