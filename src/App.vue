<template>
  <!-- 占满整个屏幕的背景 -->
  <main>
    <!-- todo容器 -->
    <div class="container">
      <!-- 标题 -->
      <h1>欢迎使用TODO!</h1>
      <!-- 添加todo的输入框 -->
      <todo-add />
      <!-- 过滤选项 -->
      <todo-filter />
      <!-- todo列表 -->
      <todo-list />
    </div>
  </main>
</template>

<script>
import TodoAdd from "./components/TodoAdd";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: { TodoAdd, TodoFilter, TodoList }
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
