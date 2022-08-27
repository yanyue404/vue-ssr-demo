<template>
  <div id="app">
    <button @click="count++">{{ count }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
};
</script>
<style>
html {
  font-size: 13.3333vw;
}
* {
  margin: 0;
  padding: 0;
}
button {
  font-size: 0.72rem;
  padding: 0.1rem 0.3rem;
}
</style>
