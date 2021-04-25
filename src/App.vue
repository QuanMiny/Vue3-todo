<template>
  <!-- 占满整个屏幕的背景 -->
  <main>
    <!-- todo容器 -->
    <div class="container">
      <!-- 标题 -->
      <h1>欢迎使用TODO!</h1>
      <!-- 添加todo的输入框 -->
      <div class="input-add">
        <input type="text" name="todo" />
        <button>
          <i class="plus"></i>
        </button>
      </div>
      <!-- 过滤选项 -->
      <div class="filters">
        <span class="filter active">全部</span>
        <span class="filter">已完成</span>
        <span class="filter">未完成</span>
      </div>
      <!-- todo列表 -->
      <div class="todo-list">
        <div class="todo-item">
          <!-- label标签包裹 使checkbox和自定义复选框选中时关联 -->
          <label>
            <input type="checkbox" />
            Todo 1
            <!-- 自定义复选框组件 -->
            <span class="check-button"></span>
          </label>
        </div>
        <div class="todo-item">
          <label>
            <input type="checkbox" />
            Todo 3
            <span class="check-button"></span>
          </label>
        </div>
        <div class="todo-item">
          <label>
            <input type="checkbox" />
            Todo 3
            <span class="check-button"></span>
          </label>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "App"
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

/* 添加框 */
.input-add {
  /* 添加按钮定位 */
  position: relative;
  /* flex让元素占一行 */
  display: flex;
  align-items: center;
}

.input-add input {
  padding: 16px 52px 16px 18px;
  border-radius: 48px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
  width: 100%;
  font-size: 16px;
  color: #626262;
}

.input-add button {
  /* 修改为圆形 */
  width: 46px;
  height: 46px;
  border-radius: 50%;
  /* 渐变颜色 */
  background: linear-gradient(#c0a5f3, #7f95f7);
  border: none;
  outline: none;
  color: white;
  /* 定位在输入框右边 */
  position: absolute;
  right: 0px;
  cursor: pointer;
}

.input-add .plus {
  display: block;
  width: 100%;
  height: 100%;
  /* 生成白色交叉线 */
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
  background-size: 50% 2px, 2px 50%;
  background-position: center;
  background-repeat: no-repeat;
}

.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-size: 14px;
}

.filters .filter {
  margin-right: 14px;
  /* 动画过渡时间 */
  transition: 0.8s;
}

/* .filter.active交集 选中时放大*/
.filters .filter.active {
  color: #6b729c;
  transform: scale(1.2);
}

.todo-list {
  /* 设置每个item行距 */
  display: grid;
  row-gap: 14px;
}

.todo-item {
  background: white;
  padding: 16px;
  border-radius: 8px;
  color: #626262;
}

.todo-item label {
  /* 复选框定位 */
  position: relative;
  display: flex;
  align-items: center;
}

.todo-item label span.check-button {
  position: absolute;
  top: 0;
}

/* 自定义复选框样式 两个圆 */
.todo-item label span.check-button::before,
.todo-item label span.check-button::after {
  content: "";
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
}

.todo-item label span.check-button::before {
  /* 空心圆 */
  border: 1px solid #b382f9;
}

.todo-item label span.check-button::after {
  transition: 0.4s;
  /* 实心圆 */
  background: #b382f9;
  transform: translate(1px, 1px) scale(0.8);
  /* 未选中时不显示 */
  opacity: 0;
}

.todo-item input {
  margin-right: 16px;
  opacity: 0;
}

/* input复选框选中时相邻的span.check-button也选中 */
.todo-item input:checked + span.check-button::after {
  opacity: 1;
}
</style>
