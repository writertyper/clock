import App from "./App.svelte";

var app = new App({
  target: document.body,
  props: {
    name: "lo",
  },
});

export default app;
