<script lang="ts">
	import Toolbar from '../components/Toolbar/Toolbar.svelte';
	import Hero from '../components/Hero/Hero.svelte';
	import Contact from '../components/Contact/Contact.svelte';
	import Footer from '../components/Footer/Footer.svelte';
	import PricingList from '../components/Pricing-List/Pricing-List.svelte';
	import Map from '../components/Map/Map.svelte';
</script>

<template>
	<div>
		<Toolbar />

		<div class="container-with-image">
			<Hero />
			<img class="image" src="/images/tailor2.jpg" alt={'logo image'} />
		</div>

		<PricingList />

		<div class="container-with-image">
			<Contact />
			<Map />
		</div>

		<Footer />
	</div>
</template>

<style src="./index.css"></style>
