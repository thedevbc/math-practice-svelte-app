import { c as create_ssr_component, e as escape, a as add_attribute } from "../../chunks/index-1e54ea6c.js";
class MathProblem {
  constructor() {
    this.operand1 = 0;
    this.operand2 = 0;
    this.operator = "+";
    this.correctAnswer = 0;
    this.generateOperands = () => {
      let nbr1 = Math.floor(Math.random() * 899 + 100);
      let nbr2 = Math.floor(Math.random() * 899 + 100);
      return [nbr1, nbr2].sort((a, b) => b - a);
    };
    this.generateOperator = () => {
      let operatorNbr = Math.round(Math.random());
      let operator = "";
      if (operatorNbr == 0) {
        operator = "+";
      }
      if (operatorNbr == 1) {
        operator = "-";
      }
      return operator;
    };
    this.checkAnswer = (userProvidedAnswer) => {
      return +userProvidedAnswer == this.correctAnswer;
    };
    this.calculateAnswer = () => {
      if (this.operator == "+") {
        return this.operand1 + this.operand2;
      }
      if (this.operator == "-") {
        return this.operand1 - this.operand2;
      }
    };
    let operands = this.generateOperands();
    this.operand1 = operands[0];
    this.operand2 = operands[1];
    this.operator = this.generateOperator();
    this.correctAnswer = this.calculateAnswer();
  }
}
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-5wg606.svelte-5wg606{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.svelte-5wg606.svelte-5wg606,input.svelte-5wg606.svelte-5wg606{font-size:3rem;font-family:'Roboto Mono', monospace}.problem.svelte-5wg606.svelte-5wg606{flex:0 0 auto;display:flex;flex-flow:column;width:250px;padding:50px;text-align:right;border:1px solid #cccccc;border-radius:3px;box-shadow:0px 0px 4px;background-color:#ffffff}.problem.svelte-5wg606 h1.svelte-5wg606{margin:0}.problem.svelte-5wg606 input.svelte-5wg606{text-align:right;width:150px}p.result.svelte-5wg606.svelte-5wg606{text-align:center}.correct.svelte-5wg606.svelte-5wg606{color:green}.incorrect.svelte-5wg606.svelte-5wg606{color:red}.operand-2.svelte-5wg606.svelte-5wg606{border-bottom:4px solid #1b1b1b}",
  map: null
};
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let problem = new MathProblem();
  let answer = "";
  let correctCount = 0;
  let message = "";
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Math Practice</title>`, ""}`, ""}

<section class="${"svelte-5wg606"}"><div class="${"problem svelte-5wg606"}"><h1 class="${"svelte-5wg606"}">${escape(problem.operand1)}</h1>
		<h1 class="${"operand-2 svelte-5wg606"}">${escape(problem.operator)} ${escape(problem.operand2)}</h1>
		<input class="${"border rounded-md mt-1 svelte-5wg606"}" type="${"tel"}" pattern="${"[0-9]+"}"${add_attribute("value", answer, 0)}>
		<button class="${"mt-5 w-full bg-green-600 border border-transparent rounded-md py-3 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"}" type="${"submit"}">Check Answer</button>
		<button class="${"mt-5 w-full bg-indigo-600 border border-transparent rounded-md py-3 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}">New Problem</button>
		<p class="${"result " + escape("incorrect") + " mt-5 svelte-5wg606"}">\xA0${escape(message)}\xA0</p>
		<p class="${"result correct svelte-5wg606"}">Correct Answers: ${escape(correctCount)}</p></div>
</section>`;
});
export { Routes as default, prerender };
