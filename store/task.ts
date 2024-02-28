
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


    return {
        taskData: skipHydrate(taskData),
        addNewTask
    }

})