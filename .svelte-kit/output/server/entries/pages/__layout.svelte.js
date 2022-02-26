import { c as create_ssr_component } from "../../chunks/index-1e54ea6c.js";
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1ygg4nl{display:flex;flex:0 0 auto;flex-direction:column;justify-content:center;align-items:center}h1.svelte-1ygg4nl{font-size:3rem}main.svelte-1ygg4nl{flex:0 0 auto;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-1ygg4nl{display:flex;flex:0 0 auto;flex-direction:column;justify-content:center;align-items:center}@media(min-width: 480px){footer.svelte-1ygg4nl{padding:40px 0}}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-1ygg4nl"}"><h1 class="${"svelte-1ygg4nl"}">Welcome to Math Practice</h1></header>

<main class="${"svelte-1ygg4nl"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-1ygg4nl"}"><p>Have fun practicing 3-digit addition and subtraction!</p>
	<p>Solve the problem on paper, then type in your answer and check it.</p>
</footer>`;
});
export { _layout as default };
