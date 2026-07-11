//priority: 2

(() => {
const dyeColours = [
	'white',
	'light_gray',
	'gray',
	'black',
	'brown',
	'red',
	'orange',
	'yellow',
	'lime',
	'green',
	'cyan',
	'light_blue',
	'blue',
	'purple',
	'magenta',
	'pink'
];

BlockCutting.types.add('glass');

BlockCutting.tags.push(['kubejs:blocks/glass', 'minecraft:glass']);
BlockCutting.tags.push(['kubejs:panes/glass', 'minecraft:glass_pane']);

for(const colour of dyeColours) {
	BlockCutting.types.add(`${colour}_stained_glass`);

	BlockCutting.tags.push([`kubejs:blocks/${colour}_stained_glass`, `minecraft:${colour}_stained_glass`]);
	BlockCutting.tags.push([`kubejs:panes/${colour}_stained_glass`, `minecraft:${colour}_stained_glass_pane`]);
}
})();
