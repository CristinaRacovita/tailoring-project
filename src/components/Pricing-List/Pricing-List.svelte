<script>
	const rows = [
		{ serviceName: 'Modificat pantaloni', pret: '12 RON' },
		{ serviceName: 'Perdele', pret: '50 RON' },
		{ serviceName: 'Modificat rochite', pret: '20 RON' },
		{ serviceName: 'Modificat pantaloni', pret: '12 RON' },
		{ serviceName: 'Modificat pantaloni', pret: '12 RON' }
	];

	const columns = ['Serviciu', 'Pret'];
</script>

<template>
	<h1 class="title">Listă de prețuri</h1>
	<div class="table">
		{#each columns as column}
			<div class="table-item">
				{column}
			</div>
		{/each}
		{#each rows as row}
			<div class="table-item">
				{row.serviceName}
			</div>
			<div class="table-item">
				{row.pret}
			</div>
		{/each}
	</div>
</template>

<style src="./Pricing-List.css"></style>
