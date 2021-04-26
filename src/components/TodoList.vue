<template>
  <div class="todo-list">
    <!-- :todo-item="todo"传递给TodoListItem子组件 -->
    <!-- @change-state="todo.completed = $event.target.checked" 
    接收子组件的事件参数修改todo.completed状态 -->
    <todo-list-item
      v-for="todo in todos"
      :key="todo.id"
      :todo-item="todo"
      @change-state="todo.completed = $event.target.checked"
    ></todo-list-item>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem";
export default {
  name: "TodoList",
  components: { TodoListItem },
  // 使用props接收父组件传递进来的todos列表
  props: ["todos"]
};
</script>

<style>
.todo-list {
  /* 设置每个item行距 */
  display: grid;
  row-gap: 14px;
}
</style>