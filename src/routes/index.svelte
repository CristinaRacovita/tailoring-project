<script lang="ts">
	import Toolbar from '../components/Toolbar/Toolbar.svelte';
	import Hero from '../components/Hero/Hero.svelte';
	import Contact from '../components/Contact/Contact.svelte';
    import Footer from '../components/Footer/Footer.svelte';

</script>

<template>
	<Toolbar />
	<div class="hero-contact-page">
		<Contact />
		<Hero />
	</div>

    <Footer />
</template>

<style src="./index.css"></style>
