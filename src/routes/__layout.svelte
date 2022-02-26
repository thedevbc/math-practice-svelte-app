<script lang="ts">
	import '../app.css';
</script>

<header>
	<h1>Welcome to Math Practice</h1>
</header>

<main>
	<slot />
</main>

<footer>
	<p>Have fun practicing 3-digit addition and subtraction!</p>
	<p>Solve the problem on paper, then type in your answer and check it.</p>
</footer>

<style>
	header {
		display: flex;
		flex: 0 0 auto;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-size: 3rem;
	}

	main {
		flex: 0 0 auto;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
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

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
