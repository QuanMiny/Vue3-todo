import { onMounted, ref } from 'vue';

export default function useTodos() {
  // todos 作为默认todo列表的数据 绑定到todo-list上
  const todos = ref([]);
  // 添加todo函数 todo参数由子组件TodoAdd.vue传过来 追加到列表中
  const addTodo = todo => todos.value.push(todo);

  // 演示生命周期函数使用
  const fetchTodos = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const rawTodos = await response.json();
    todos.value = rawTodos.map((todo) => ({
      id: todo.id,
      content: todo.title,
      completed: todo.completed
    }));
  }

  onMounted(() => {
    fetchTodos();
  })

  return {
    todos,
    addTodo,
  };
}