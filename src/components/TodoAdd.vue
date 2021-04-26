<template>
  <div class="input-add">
    <!-- 绑定todoContent用户输入内容 绑定enter触发emitAddTodo函数 -->
    <input
      type="text"
      name="todo"
      v-model="todoContent"
      @keyup.enter="emitAddTodo"
    />
    <button @click="emitAddTodo">
      <i class="plus"></i>
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "TodoAdd",
  // 接收父组件传进来的参数和事件
  // 使用props访问传递进来的属性
  // context上下文信息中emit可以触发事件
  setup(props, context) {
    return useEmitAddTodo(props.tid, context.emit);
  }
};

// 抽离触发addtodo的业务逻辑
function useEmitAddTodo(tid, emit) {
  // 用户输入内容
  const todoContent = ref("");
  // 触发函数
  const emitAddTodo = () => {
    // todo对象接收父组件的传值
    const todo = {
      // props.tid为todos列表的length
      id: tid,
      // 获取ref中的值需要使用value属性 赋给content作为新的内容
      content: todoContent.value,
      // 完成状态 默认未完成
      completed: false
    };
    // todo对象当作对象传递给 父组件app.vue中的add-todo函数
    emit("add-todo", todo);
    // 清空输入框
    todoContent.value = "";
  };

  return {
    todoContent,
    emitAddTodo
  };
}
</script>

<style>
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
</style>