import { c as create_ssr_component, e as escape, a as add_attribute } from "../../chunks/index-1e54ea6c.js";
class MathProblem {
  constructor(digits, modeArr) {
    this.operand1 = 0;
    this.operand2 = 0;
    this.operator = "+";
    this.correctAnswer = 0;
    this.mode = ["ADD"];
    this.numOfDigits = 3;
    this.generateOperands = () => {
      let nonInclusiveUpperBound = 10;
      let inclusiveLowerBound = 0;
      if (this.operator == "*" && this.numOfDigits != 1) {
        nonInclusiveUpperBound = 13;
      } else if (this.numOfDigits == 3) {
        nonInclusiveUpperBound = 1e3;
        inclusiveLowerBound = 100;
      } else if (this.numOfDigits == 2) {
        nonInclusiveUpperBound = 100;
        inclusiveLowerBound = 10;
      }
      let nbr1 = Math.floor(Math.random() * (nonInclusiveUpperBound - inclusiveLowerBound) + inclusiveLowerBound);
      let nbr2 = Math.floor(Math.random() * (nonInclusiveUpperBound - inclusiveLowerBound) + inclusiveLowerBound);
      if (this.operator == "-")
        return [nbr1, nbr2].sort((a, b) => b - a);
      return [nbr1, nbr2];
    };
    this.generateOperator = () => {
      let opNum = Math.floor(Math.random() * this.mode.length);
      const o = this.mode[opNum];
      if (o === "ADD")
        return "+";
      if (o === "SUB")
        return "-";
      return "*";
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
      if (this.operator == "*") {
        return this.operand1 * this.operand2;
      }
    };
    if (!!digits)
      this.numOfDigits = digits;
    if (!!modeArr)
      this.mode = modeArr;
    this.operator = this.generateOperator();
    let operands = this.generateOperands();
    this.operand1 = operands[0];
    this.operand2 = operands[1];
    this.correctAnswer = this.calculateAnswer();
  }
}
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-pg04w3.svelte-pg04w3{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.svelte-pg04w3.svelte-pg04w3,input.svelte-pg04w3.svelte-pg04w3{font-size:3rem;font-family:'Roboto Mono', monospace}.problem.svelte-pg04w3.svelte-pg04w3,.settings.svelte-pg04w3.svelte-pg04w3{flex:0 0 auto;display:flex;flex-flow:column;width:250px}.problem.svelte-pg04w3.svelte-pg04w3{padding:50px;text-align:right;border:1px solid #cccccc;border-radius:3px;box-shadow:0px 0px 4px;background-color:#ffffff}.settings.svelte-pg04w3.svelte-pg04w3{margin-top:10px}.problem.svelte-pg04w3 h1.svelte-pg04w3{margin:0}.problem.svelte-pg04w3 input.svelte-pg04w3{text-align:right;width:150px}p.result.svelte-pg04w3.svelte-pg04w3{text-align:center}.correct.svelte-pg04w3.svelte-pg04w3{color:green}.incorrect.svelte-pg04w3.svelte-pg04w3{color:red}.operand-2.svelte-pg04w3.svelte-pg04w3{border-bottom:4px solid #1b1b1b}input#digits.svelte-pg04w3.svelte-pg04w3{width:200px;margin:auto}.settings.svelte-pg04w3 fieldset.svelte-pg04w3{margin-left:65px;padding-top:10px}",
  map: null
};
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let problem;
  let modes;
  let answer = "";
  let correctCount = 0;
  let message = "";
  let addition = true;
  let subtraction = false;
  let multiplication = false;
  let digits = 3;
  function updateModesArr(add, sub, mult) {
    if (!add && !sub && !mult) {
      add = true;
      addition = true;
    }
    let output = [];
    if (add) {
      output = [...output, "ADD"];
    }
    if (sub) {
      output = [...output, "SUB"];
    }
    if (mult) {
      output = [...output, "MULT"];
    }
    return output;
  }
  $$result.css.add(css);
  modes = updateModesArr(addition, subtraction, multiplication);
  problem = new MathProblem(digits, modes);
  return `${$$result.head += `${$$result.title = `<title>Math Practice</title>`, ""}`, ""}

<section class="${"svelte-pg04w3"}"><div class="${"problem svelte-pg04w3"}"><h1 class="${"svelte-pg04w3"}">${escape(problem.operand1)}</h1>
		<h1 class="${"operand-2 svelte-pg04w3"}">${escape(problem.operator == "*" ? "x" : problem.operator)} ${escape(problem.operand2)}</h1>
		<input class="${"border rounded-md mt-1 svelte-pg04w3"}" type="${"tel"}" pattern="${"[0-9]+"}"${add_attribute("value", answer, 0)}>
		<button class="${"mt-5 w-full bg-green-600 border border-transparent rounded-md py-3 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"}" type="${"submit"}">Check Answer</button>
		<button class="${"mt-5 w-full bg-indigo-600 border border-transparent rounded-md py-3 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}">New Problem</button>
		<p class="${"result " + escape("incorrect") + " mt-5 svelte-pg04w3"}">\xA0${escape(message)}\xA0</p>
		<p class="${"result correct svelte-pg04w3"}">Correct Answers: ${escape(correctCount)}</p></div>
	<div class="${"settings svelte-pg04w3"}"><p class="${"text-center"}">Choose what to practice.</p>
		<label class="${"text-center"}" for="${"digits"}">Digits for Addition &amp; Subtraction:</label>
		<output class="${"text-center text-xl"}">${escape(digits)}</output>
		<input type="${"range"}" id="${"digits"}" name="${"digits"}" min="${"1"}" max="${"3"}" step="${"1"}" class="${"svelte-pg04w3"}"${add_attribute("value", digits, 0)}>
		<fieldset class="${"svelte-pg04w3"}"><div><input type="${"checkbox"}" name="${"ADD"}" value="${"ADD"}" class="${"svelte-pg04w3"}"${add_attribute("checked", addition, 1)}>
				<label for="${"ADD"}">Additon</label></div>
			<div><input type="${"checkbox"}" name="${"SUB"}" value="${"SUB"}" class="${"svelte-pg04w3"}"${add_attribute("checked", subtraction, 1)}>
				<label for="${"SUB"}">Subtraction</label></div>
			<div><input type="${"checkbox"}" name="${"MULT"}" value="${"MULT"}" class="${"svelte-pg04w3"}"${add_attribute("checked", multiplication, 1)}>
				<label for="${"MULT"}">Multiplication</label></div></fieldset>
		<p class="${"text-xs text-center mt-4"}">Multiplaction problems will only use numbers 0-12.</p></div>
</section>`;
});
export { Routes as default, prerender };
