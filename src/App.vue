<template>
  <!-- 占满整个屏幕的背景 -->
  <main>
    <!-- todo容器 -->
    <div class="container">
      <!-- 标题 -->
      <h1>欢迎使用TODO!</h1>
      <!-- 添加todo的输入框 绑定addTodo函数处理事件-->
      <todo-add :tid="todos.length" @add-todo="addTodo" />
      <!-- 过滤选项 将selected值传递给子组件 @change-filter="filter=$event"接收子组件的传值-->
      <todo-filter :selected="filter" @change-filter="filter=$event" />
      <!-- todo列表 绑定todos数据-->
      <todo-list :todos="filteredTodos" />
    </div>
  </main>
</template>

<script>

import TodoAdd from "./components/TodoAdd";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import useTodos from "@/composables/useTodos.js"
import useFilterTodos from "@/composables/useFilterTodos.js"

export default {
  name: "App",
  components: { TodoAdd, TodoFilter, TodoList },
  setup() {
    // todos 作为默认todo列表的数据 绑定到todo-list上
    // 添加todo函数 todo参数由子组件TodoAdd.vue传过来 追加到列表中
    const { todos, addTodo } = useTodos();
    // 保存默认过滤选项为全部
    // 根据filter值过滤todos列表 利用计算属性
    const { filter, filteredTodos } = useFilterTodos(todos);
    // 为了在template里使用数据和函数，返回对象
    return {
      todos,
      addTodo,
      filter,
      filteredTodos
    };
  }
};
</script>

<style>
* {
  /* 宽高值包含边框以内的宽高 */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}

/* 整个页面 */
main {
  width: 100vw;
  /* todo-list有很多item的时候会把容器撑开, 设置min-height为100vh可以滚动条滚动时背景也有修改,而设置height会只有一屏有背景, */
  min-height: 100vh;
  /* 居中 也可以采用flex */
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: rgb(203, 210, 240);
}

/* 容器 */
.container {
  width: 60%;
  max-width: 400px;
  /* 阴影 */
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}

/* 标题 */
h1 {
  text-align: center;
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
</style>
