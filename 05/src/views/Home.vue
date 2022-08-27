<template>
  <div>
    <div v-if="todoList" v-for="item in todoList" :key="item.id">
      <li>{{ item.name }}</li>
    </div>
    <div v-if="todoItem">
      <div>id: {{ todoItem.id }}</div>
      <div>name: {{ todoItem.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ store, route }) {
    // 触发 action 后，会返回 Promise
    console.log("route.query.id", route.query.id);
    if (route.query.id) {
      return store.dispatch("fetchItem", route.query.id);
    } else {
      return store.dispatch("fetchAll");
    }
  },
  computed: {
    // 从 store 的 state 对象中的获取。
    todoList() {
      return this.$store.state.todoList;
    },
    todoItem() {
      console.log("数据在此", this.$store.state.todoItem);
      return this.$store.state.todoItem;
    },
  },
};
</script>
