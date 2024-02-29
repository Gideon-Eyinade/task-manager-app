<template>
  <div class="modal-overlay" @click.stop="">
    <div class="modal" @click.stop="">
      <div class="modal-header">
        <p style="font-size: 18px">Add New Task</p>
        <div class="close-icon" @click="$emit('close-modal')">X</div>
      </div>

      <div class="modal-body">
        <div class="form-input">
          <p>ID</p>
          <input v-model="id" />
        </div>

        <div class="form-input">
          <p>Title</p>
          <input v-model="title" />
        </div>

        <div class="form-input">
          <p>Description</p>
          <input v-model="description" />
        </div>

        <div class="form-input">
          <p>Due date</p>
          <input v-model="dueDate" />
        </div>

        <button @click="addTask">Add</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTaskStore } from "../../store/task";
const taskStore = useTaskStore();

const id = ref();
const title = ref("");
const description = ref("");
const dueDate = ref("");

const emits = defineEmits(["close-modal"]);

const addTask = () => {
  const newTask = {
    id: id.value,
    title: title.value,
    description: description.value,
    dueDate: dueDate.value,
    status: true
  };

  taskStore.addNewTask(newTask);

  emits("close-modal");
};
</script>

<style scoped>
.modal-overlay {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  transition: opacity 0.5s ease;
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
  width: 30%;
  position: relative;
  z-index: 10;
  background: #ffffff;
  border-radius: 10px;
  transition: all 0.3s ease;
  padding-top: 32px;
}
.close-icon {
  position: absolute;
  right: 10%;
  cursor: pointer;
}
.modal-header {
  display: flex;
  justify-content: center;
  padding-bottom: 32px;
  width: 80%;
}
.modal-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  width: 70%;
}
.form-input {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
}

button {
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  background: rgba(0, 179, 255, 0.895);
  color: #fff;
  align-self: center;
  cursor: pointer;
  font-size: 14px;
}
button:hover {
  background: rgb(0, 149, 255);
  transition: 0.4s ease-in;
}

@media only screen and (max-width: 1023px) {
  .modal-overlay {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 101;
    opacity: 1;
    width: 100%;
  }

  .modal {
    display: flex;
    /*flex-direction: column;*/
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 89%;
    position: relative;
    z-index: 10;
    background: #ffffff;
    border-radius: 10px;
  }
  .back-icon {
    position: absolute;
    top: 0.875rem;
    left: 2rem;
    font-weight: 700;
    font-size: 16px;
    /*background: #FFFFFF;*/
    color: #ffffff;
    cursor: pointer;
  }

  .close-icon {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    /*left: 2rem;*/
    /*font-weight: 700;*/
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>
