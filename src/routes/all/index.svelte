<script>
	import Nav from '$lib/Nav';
	import Image from 'svimg';

	const animals = [
		{
			name: 'Big Dogs',
			path: 'dogs/big-dogs.jpg'
		},
		{
			name: 'Small Dogs',
			path: 'dogs/small-dogs.jpg'
		},
		{
			name: 'Sea lions',
			path: 'sea/sea-lions.jpg'
		},
		{
			name: 'Turtle',
			path: 'sea/turtle.jpg'
		},
		{
			name: 'Orange bird',
			path: 'birds/orange-bird.jpg'
		}
	];

	const imagePath = (path) => {
		return `/images/${path}.jpg`;
	};
</script>

<main>
	<Nav />

	{#each animals as animal (animal.name)}
		<div class="border border-dashed border-gray-300 py-2 px-3 mb-4">
			<h1>{animal.name}</h1>
			<div>
				<Image src={imagePath(animal.path)} />
			</div>
		</div>
	{/each}
</main>
