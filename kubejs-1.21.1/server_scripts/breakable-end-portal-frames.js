BlockEvents.broken('minecraft:end_portal_frame', event => {
	const x = event.block.getX();
	const y = event.block.getY();
	const z = event.block.getZ();

	const command = `fill ${x + 3} ${y} ${z + 3} ${x - 3} ${y} ${z - 3} minecraft:air replace minecraft:end_portal`

	event.getServer().runCommandSilent(command);

	if(!event.getPlayer().gameMode.isCreative()) {
		event.block.popItem('minecraft:end_portal_frame');
	}
});
