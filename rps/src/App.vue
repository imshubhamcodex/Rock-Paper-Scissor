<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./components/home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
:root {
  --light-text: #ffffff;
  --dark-text: hsl(229, 25%, 31%);
  --score-text: hsl(229, 64%, 46%);
  --outline: hsl(217, 16%, 45%);
  --bg-grad-1: hsl(214, 47%, 23%);
  --bg-grad-2: hsl(237, 49%, 15%);
  --scissors-1: hsl(39, 89%, 49%);
  --scissors-2: hsl(40, 84%, 53%);
  --paper-1: hsl(230, 89%, 62%);
  --paper-2: hsl(230, 89%, 65%);
  --rock-1: hsl(349, 71%, 52%);
  --rock-2: hsl(349, 70%, 56%);
  --shadow-light: #00000026;
  --shadow-med: #0000004d;
  --green-low: hsl(120, 78%, 49%);
  --green-high: hsl(120, 81%, 62%);
}
body {
  background: radial-gradient(at top, var(--bg-grad-1), var(--bg-grad-2));
  overflow: hidden;
}
body::-webkit-scrollbar {
  display: none;
}
</style>
