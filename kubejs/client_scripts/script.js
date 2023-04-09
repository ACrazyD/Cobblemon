// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')



REIEvents.groupEntries(event => {
	
	event.groupItemsByTag("kubejs:rei_groups/chipped_amethyst", "Amethyst", "chipped:amethyst_block");

})

REIEvents.removeCategories(event => {
    event.yeet("minecraft:plugins/tag");
})