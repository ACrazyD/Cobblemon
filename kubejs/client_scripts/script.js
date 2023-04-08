// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

function groupModTags(modName, event, exclude) {
    const modIngredient = Ingredient.of(`@${modName}`)

    modIngredient.stacks.toList().stream()
        .flatMap(stack => stack.tags)
        .distinct() // Exclude duplicate tag entries
        .filter(tag => tag.toString().indexOf(modName) !== -1)
        .forEach(tag => {
            const path = new String(tag.toString().split(`${modName}:`)[1].split(']')[0])
            // Human-readable title case, e.g white_wool -> White Wool
            const name = path.replace(/^(\w)/, c => c.toUpperCase())
                            .replace(/_(\w)/g, (_, c) => " " + c.toUpperCase()).toString()

            if (!exclude) 
                event.groupItemsByTag(`kubejs:rei_groups/${modName}/${path}`, name, `${modName}:${path}`)
            else {
                let items = global.functions.getItemsInTag(`#${modName}:${path}`)
                                .filter(item => Item.of(item).getMod() == `${modName}`)
                event.groupItems(`kubejs:rei_groups/${modName}/${path}`, name, items)
            }
        })      
}

REIEvents.groupEntries(event => {
	groupModTags('chipped', event, true)
})

REIEvents.removeCategories(event => {
    event.yeet("minecraft:plugins/tag");
})