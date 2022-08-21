<script lang="ts">
	function goToGoogleMaps(): void {
		var url = 'https://www.google.ro/maps/search/croitoria+nicoleta/@45.4494569,28.0382335,15.29z';
		location.href = url;
	}
</script>

<template>
	<div class="map-container">
		<h1 class="title">Cum ajungi la noi?</h1>
		<img class="map" src="/images/locatie.png" alt={'logo image'} on:click="{event => goToGoogleMaps()}"/>
	</div>
</template>

<style src="./Map.css"></style>
