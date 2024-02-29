<template>
  <div class="task-manager-app--container">
    <div class="task-manager-app">
      <h3 style="color: rgb(0, 145, 255)">Task Manager Dashboard</h3>

      <button @click="addNewTask">Add New Task</button>

      <div class="task-manager-app--header">
        <p>ID</p>
        <p>Title</p>
        <p>Description</p>
        <p>Due date</p>
        <p>Status</p>
        <p>Action</p>
      </div>

      <div
        class="task-manager-app--body"
        v-for="(task, index) in taskList"
        :key="index"
      >
        <TaskList
          :id="task.id"
          :title="task.title"
          :description="task.description"
          :dueDate="task.dueDate"
          @edit-task="editTask"
        />
      </div>
    </div>

    <AddNewTaskModal
      v-if="isDisplayingAddNewTaskModal"
      @close-modal="closeAddNewTaskModal"
    />
    <EditTaskModal
      v-if="isDisplayingEditTaskModal"
      @close-modal="closeEditTaskModal"
      :task-detail="activeTaskList"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import AddNewTaskModal from "../components/modals/AddNewTaskModal.vue";
import EditTaskModal from "../components/modals/EditTaskModal.vue";
import { TaskDetails } from "../types/task";
import { useTaskStore } from "../store/task";
const taskStore = useTaskStore();

const isDisplayingAddNewTaskModal = ref(false);
const isDisplayingEditTaskModal = ref(false);
const taskList = ref<TaskDetails[]>([]);
let activeTaskList = ref();

const closeAddNewTaskModal = () => {
  isDisplayingAddNewTaskModal.value = false;
};

const closeEditTaskModal = () => {
  isDisplayingEditTaskModal.value = false;
};
const addNewTask = () => {
  isDisplayingAddNewTaskModal.value = true;
};
const editTask = (task: any) => {
  isDisplayingEditTaskModal.value = true;
  activeTaskList.value = task;
  console.log("show active task", activeTaskList);
};

onMounted(() => {
  taskList.value = taskStore.taskData;
});
</script>

<style scoped>
.task-manager-app--container {
  background: #fff;
  padding: 24px;
  height: 100vh;
}

.task-manager-app {
  background: rgb(225, 242, 253);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  padding-top: 24px;
}
.task-manager-app--header {
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  width: 70%;
  border: 1px solid rgb(0, 145, 255);
  border-radius: 4px;
  padding: 12px;
}
.task-manager-app--header p {
  width: 25%;
  text-align: center;
  font-weight: 700;
}
button {
  border: none;
  padding: 10px 12px;
  border-radius: 4px;
  background: rgba(0, 179, 255, 0.895);
  color: #fff;
  align-self: flex-end;
  margin-right: 48px;
  cursor: pointer;
}
button:hover {
  background: rgb(0, 149, 255);
  transition: 0.4s ease-in;
}
.task-manager-app--body {
  display: flex;
  margin-top: 24px;
  width: 70%;
}

@media only screen and (max-width: 1024px) {
  .task-manager-app--header {
    width: 100%;
  }
  .task-manager-app--header p {
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 12px;
  }
  .task-manager-app--body {
    width: 100%;
  }

  button {
    padding: 8px 10px;
    margin: 24px 12px 0px 0px;
    cursor: pointer;
    font-size: 12px;
  }
}
</style>
