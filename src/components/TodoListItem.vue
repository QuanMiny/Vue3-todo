<template>
  <div class="todo-item">
    <!-- label标签包裹 使checkbox和自定义复选框选中时关联 -->
    <label>
      <input type="checkbox" />
      Todo 1
      <!-- 自定义复选框组件 -->
      <span class="check-button"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "TodoListItem"
};
</script>

<style>
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