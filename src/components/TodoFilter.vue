<template>
  <div class="filters">
    <!-- @click="$emit('change-filter', filter.value)"
    触发传递filter.value值给父组件 -->
    <!-- :class="{ active: selected === filter.value }"
    props接收父组件选中selected的状态 修改acitve -->
    <span
      v-for="filter in filters"
      :key="filter.value"
      @click="$emit('change-filter', filter.value)"
      class="filter"
      :class="{ active: selected === filter.value }"
      >{{ filter.label }}</span
    >
  </div>
</template>

<script>
export default {
  name: "TodoFilter",
  props: ["selected"],
  setup() {
    const filters = [
      { label: "全部", value: "all" },
      { label: "已完成", value: "done" },
      { label: "未完成", value: "todo" }
    ];
    return {
      filters
    };
  }
};
</script>

<style>
.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-size: 14px;
}

.filters .filter {
  margin-right: 14px;
  /* 动画过渡时间 */
  transition: 0.5s;
  cursor: pointer;
}

/* .filter.active交集 选中时放大*/
.filters .filter.active {
  color: #6b729c;
  transform: scale(1.2);
}
</style>