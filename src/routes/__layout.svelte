<script lang="ts">
	import '../app.css';
	import github from '../../static/GitHub-Mark-32px.png';
</script>

<header class="my-20 px-14">
	<h1>Welcome to Math Practice</h1>
	<p>Have fun practicing addition, subtraction and simple multiplication!</p>
	<p>Solve the problem on paper, then type in your answer and check it.</p>
</header>

<main>
	<slot />
</main>

<footer class="my-20">
	<p>Check out the code on <a href="https://github.com/thedevbc/math-practice-svelte-app">Github <img class="inline" src={github} alt="GitHub icon"></a></p>
</footer>

<style>
	header {
		display: flex;
		flex: 0 0 auto;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	p {
		font-size: 1rem;
		text-align: center;
	}

	h1 {
		font-size: 3rem;
		text-align: center;
	}

	main {
		flex: 0 0 auto;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex: 0 0 auto;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	a {
		color: blue;
	}

	a:visited {
		color: indigo;
	}

	a:hover {
		color: aqua;
	}

</style>
