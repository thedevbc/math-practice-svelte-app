<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { MathProblem } from '$lib/mathproblem';

	let problem = new MathProblem();
	let answer = '';
	let isCorrect = false;
	let correctCount = 0;
	let message: string = '';

	function getNewProblem(event) {
		console.log(event);
		problem = new MathProblem();
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
		console.log(problem);
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
</script>

<svelte:head>
	<title>Math Practice</title>
</svelte:head>

<section>
	<div class="problem">
		<h1>{problem.operand1}</h1>
		<h1>{problem.operator} {problem.operand2}</h1>
		<input class="border rounded-md" type="tel" dir="rtl" pattern="[0-9]+" bind:value={answer} on:keydown="{onAnswerKeydown}"/>
		<button class="mt-5 w-full bg-green-600 border border-transparent rounded-md py-3 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" on:click={checkAnswer} type="submit">Check Answer</button>
		<button class="mt-5 w-full bg-indigo-600 border border-transparent rounded-md py-3 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" on:click={getNewProblem}>Get New Problem</button>
		<p class="result {isCorrect ? 'correct' : 'incorrect'} mt-5">&nbsp;{message}&nbsp;</p>
		<p class="result correct">Correct Answers: {correctCount}</p>
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
	}

	.problem {
		flex: 0 0 auto;
		display: flex;
		flex-flow: column;
		width: 250px;
		padding: 50px;
		text-align: right;
		border: 1px solid #cccccc;
		border-radius: 3px;
		box-shadow: 2px 2px 12px;
		background-color: #ffffff;
	}

	.problem h1 {
		margin: 0;
	}

	.problem input {
		direction: rtl;
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
</style>
