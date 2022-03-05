<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { MathProblem } from '$lib/mathproblem';

	let problem: MathProblem = new MathProblem();
	let answer: string = '';
	let isCorrect: boolean = false;
	let correctCount: number = 0;
	let message: string = '';
	let addition = true;
	let subtraction = false;
	let multiplication = false;
	let digits: number = 3;
	$:modes = updateModesArr(addition,subtraction,multiplication);

	function getNewProblem(event) {
		console.log(modes);
		problem = new MathProblem(digits, modes);
		answer = '';
		isCorrect = false;
		message = '';
	}

	function checkAnswer() {
		isCorrect = problem.checkAnswer(answer);
		if (isCorrect) {
			message = "That's right!";
			correctCount++;
		} else {
			message = 'Please try again.';
		}
	}

	function onAnswerKeydown(event) {
		let regEx = new RegExp(/\d/);
		if (
			event.key != 'Backspace' &&
			event.key != 'Enter' &&
			event.key != 'Tab' &&
			event.key != 'ArrowLeft' &&
			event.key != 'ArrowRight' &&
			!regEx.test(event.key)
		) {
			event.preventDefault();
			event.stopPropagation();
		}
		if (event.key == 'Enter') {
			checkAnswer();
		}
	}

	function reverseString(str) {
		return str.split('').reverse().join('');
	}

	// function onCheckChange(event) {
	// 	console.log('before:', modes);
	// 	if (event.target.checked) {
	// 		if (!modes.includes(event.target.value)) {
	// 			modes.push(event.target.value);
	// 		}
	// 	} else {
	// 		if (modes.includes(event.target.value)) {
	// 			modes.splice(modes.indexOf(event.target.value), 1);
	// 		}
	// 	}
	// 	if (!modes.length) {
	// 		event.preventDefault();
	// 		event.stopPropagation();
	// 		modes.push('ADD');
	// 		addition = true;
	// 	}
	// 	console.log('after', modes);
	// }

	function updateModesArr(add: boolean, sub: boolean, mult: boolean): Array<'ADD' | 'SUB' | 'MULT'> {
		let output = [];
		if (add) {
			output = [...output, 'ADD'];
		}
		if (sub) {
			output = [...output, 'SUB'];
		}
		if (mult) {
			output = [...output, 'MULT']
		}

		return output;
	}
</script>

<svelte:head>
	<title>Math Practice</title>
</svelte:head>

<section>
	<div class="problem">
		<h1>{problem.operand1}</h1>
		<h1 class="operand-2">{problem.operator == '*' ? 'x' : problem.operator} {problem.operand2}</h1>
		<input
			class="border rounded-md mt-1"
			type="tel"
			pattern="[0-9]+"
			bind:value={answer}
			on:keydown={onAnswerKeydown}
		/>
		<button
			class="mt-5 w-full bg-green-600 border border-transparent rounded-md py-3 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
			on:click={checkAnswer}
			type="submit">Check Answer</button
		>
		<button
			class="mt-5 w-full bg-indigo-600 border border-transparent rounded-md py-3 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			on:click={getNewProblem}>New Problem</button
		>
		<p class="result {isCorrect ? 'correct' : 'incorrect'} mt-5">&nbsp;{message}&nbsp;</p>
		<p class="result correct">Correct Answers: {correctCount}</p>
	</div>
	<div class="settings">
		<p class="text-center">Choose what to practice.</p>
		<label class="text-center" for="digits">Digits for Addition & Subtraction:</label>
		<output class="text-center text-xl">{digits}</output>
		<input type="range" id="digits" name="digits" bind:value={digits} min="1" max="3" step="1" />
		<fieldset>
			<div>
				<input 
					type="checkbox"
					name="ADD" 
					value="ADD"
					bind:checked={addition} />
				<label for="ADD">Additon</label>
			</div>
			<div>
				<input
					type="checkbox"
					name="SUB"
					value="SUB"
					bind:checked={subtraction} />
				<label for="SUB">Subtraction</label>
			</div>
			<div>
				<input
					type="checkbox"
					name="MULT"
					value="MULT"
					bind:checked={multiplication} />
				<label for="MULT">Multiplication</label>
			</div>
		</fieldset>
		<p class="text-xs text-center mt-4">Multiplaction problems will only use numbers 0-12.</p>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1,
	input {
		font-size: 3rem;
		font-family: 'Roboto Mono', monospace;
	}

	.problem, .settings {
		flex: 0 0 auto;
		display: flex;
		flex-flow: column;
		width: 250px;
	}

	.problem {
		padding: 50px;
		text-align: right;
		border: 1px solid #cccccc;
		border-radius: 3px;
		box-shadow: 0px 0px 4px;
		background-color: #ffffff;
	}

	.settings {
		margin-top: 10px;
	}

	.problem h1 {
		margin: 0;
	}

	.problem input {
		text-align: right;
		width: 150px;
	}

	p.result {
		text-align: center;
	}

	.correct {
		color: green;
	}

	.incorrect {
		color: red;
	}

	.operand-2 {
		border-bottom: 4px solid #1b1b1b;
	}

	input#digits {
		width: 200px;
		margin: auto;
	}
	.settings fieldset {
		margin-left: 65px;
		padding-top: 10px;
	}
</style>
