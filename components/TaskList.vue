<template>
  <div class="task-list--container">
    <p style="width: 25%">Cleaning</p>
    <p>This should be done every day</p>
    <p>10am</p>
    <p>Pending</p>
    <p style="cursor: pointer">Edit</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.task-list--container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.task-list--container p {
  width: 25%;
  text-align: center;
}

@media only screen and (max-width: 1024px) {
  .task-list--container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .task-list--container p {
    width: 25%;
    text-align: center;
    font-size: 12px;
  }
}
</style>
