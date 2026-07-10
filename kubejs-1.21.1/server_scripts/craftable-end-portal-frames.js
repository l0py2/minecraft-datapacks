ServerEvents.recipes(event => {
	event.shaped(
		Item.of('minecraft:end_portal_frame', 3),
		[
			'AAA',
			'BCB',
			'DDD',
		],
		{
			A: '#c:glass_blocks',
			B: '#c:ender_pearls',
			C: '#c:nether_stars',
			D: 'minecraft:smooth_stone'
		}
	);
});
