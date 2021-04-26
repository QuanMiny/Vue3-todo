import { computed, ref } from "vue";

export default function useFilterTodos(todos) {
  // 保存默认过滤选项为全部
  const filter = ref("all");
  // 根据filter值过滤todos列表 利用计算属性
  const filteredTodos = computed(() => {
    switch (filter.value) {
      case "done":
        return todos.value.filter(todo => todo.completed);
      case "todo":
        return todos.value.filter(todo => !todo.completed);
      default:
        return todos.value;
    }
  });
  return {
    filter,
    filteredTodos
  };
}