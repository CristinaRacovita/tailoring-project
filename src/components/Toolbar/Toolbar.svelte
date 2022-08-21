<script lang="ts">
	function refreshPage(): void {
		window.scrollTo(0, 0);
		location.reload();
	}
</script>

<template>
	<div class="toolbar">
		<img
			class="logo-image"
			src="/images/logo.png"
			alt={'logo image'}
			on:click={(event) => refreshPage()}
		/>
		<h1 class="app-title">Croitoria Nicoleta</h1>
		<!-- - Restilizare și modificare haine -->
	</div>
</template>

<style src="./Toolbar.css"></style>
