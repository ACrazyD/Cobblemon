ServerEvents.recipes(event => {

	// script by arzadu for the Rust & Rime modpack
	// assistance provided by Lexxie Raven Black in the KubeJS discord

    // lists: [0] is filter criteria, [1] is mod conflict bool, [2] is output(s), [3] is conflicting mod ids (if relevant)
    const stoneTypes = [
        ["andesite", false, 'minecraft:andesite'],
        ["asurine", false, 'create:asurine'],
        ["black_sand", true, ['biomesoplenty:black_sandstone', 'byg:black_sandstone'], ['biomesoplenty', 'byg']],
        ["blackstone", false, 'minecraft:blackstone'],
        ["blue_nether", false, 'byg:blue_netherrack'],
        ["blue_sand", false, 'byg:blue_sandstone'],
        ["brimstone", true, ['biomesoplenty:brimstone', 'byg:brimstone'], ['biomesoplenty', 'byg']],
        ["calcite", false, 'minecraft:calcite'],
        ["crimsite", false, 'create:crimsite'],
        ["cryptic_stone", false, 'byg:cryptic_stone'],
        ["dacite", false, 'byg:dacite_cobblestone'],
        ["diorite", false, 'minecraft:diorite'],
        ["dripstone", false, 'minecraft:dripstone_block'],
        ["end_stone", false, 'minecraft:end_stone'],
        ["ether_stone", false, 'byg:cobbled_ether_stone'],
        ["granite", false, 'minecraft:granite'],
        ["jasper", false, 'quark:jasper'],
        ["limestone", false, 'create:limestone'],
        ["mossy_stone", false, 'byg:mossy_stone'],
        ["ochrum", false, 'create:ochrum'],
        ["orange_sand", false, 'biomesoplenty:orange_sandstone'],
        ["purple_sand", false, 'byg:purple_sandstone'],
        ["purpur", false, 'byg:purpur_stone'],
        ["red_rock", false, 'byg:red_rock'],
        ["red_sand", false, 'minecraft:red_sandstone'],
        ["rocky", false, 'byg:rocky_stone'],
        ["scorchia", false, 'create:scorchia'],
        ["scoria", true, ['byg:scoria_cobblestone', 'create:scoria'], ['byg', 'create']],
        ["shale", false, 'quark:shale'],
        ["smooth_basalt", false, 'minecraft:smooth_basalt'],
        ["soapstone", false, 'byg:soapstone'],
        ["travertine", false, 'byg:travertine'],
        ["tuff", false, 'minecraft:tuff'],
        ["veridium", false, 'create:veridium'],
        ["white_sand", true, ['biomesoplenty:white_sandstone', 'byg:white_sandstone'], ['biomesoplenty', 'byg']],
        ["windswept_sand", false, 'byg:windswept_sandstone'],

        ["sandstone", false, 'minecraft:sandstone'],
        ["basalt", false, 'minecraft:basalt']
        // these are at the bottom so that they don't overwrite alternate variants, ex: polished blackstone and colored sandstone
    ]

    // lists: [0] is filter criteria, [1] is output, [2] is number of guaranteed output, [3] is probability of secondary output
    const oreTypes = [
        ["coal", 'minecraft:coal', 1, 0.75],
        ["iron", 'create:crushed_iron_ore', 1, 0.75],
        ["copper", 'create:crushed_copper_ore', 5, 0.25],
        ["nether_gold", 'minecraft:gold_nugget', 18, 0], // nether gold MUST BE BEFORE regular gold, or it'll get the wrong output
        ["gold", 'create:crushed_gold_ore', 1, 0.75],
        ["redstone", 'minecraft:redstone', 6, 0.5],
        ["emerald", 'minecraft:emerald', 1, 0.75],
        ["lapis", 'minecraft:lapis_lazuli', 10, 0.5],
        ["diamond", 'minecraft:diamond', 1, 0.75],
        ["quartz", 'minecraft:quartz', 2, 0.25],
        ["zinc", 'create:crushed_zinc_ore', 1, 0.75]
    ]

    let completed = []

	function makeCrushingRecipe(input) {
        let output = []
        let oreCheck = false
        let stoneCheck = false
        let skip = false

        completed.forEach(block => { // has the ore already been given a recipe? avoids duplicate outputs when names are overlapping
            if (block == input) {
                skip = true
            }
        })


        if (skip == false) {
            oreCode: for(let oType in oreTypes) { // figures out what ore it is and assigns the correct output
                if (input.includes(oreTypes[oType][0])) {
                    output.push(Item.of(oreTypes[oType][2] + 'x ' + oreTypes[oType][1]))
                    if (oreTypes[oType][3] != 0) { // adds %chance extra outputs
                        output.push(Item.of(oreTypes[oType][1]).withChance(oreTypes[oType][3]))
                    }
                    output.push(Item.of('create:experience_nugget').withChance(0.75)) // the iconic experience nugget
                    oreCheck = true
                    break oreCode; // avoids duplicate gold/nether gold outputs
                }
            }

            stoneCode: for(let sType in stoneTypes) { // figures out what stone type it is and assigns the correct output
                if (input.includes(stoneTypes[sType][0])) {
                    if (stoneTypes[sType][1] == false) { // checks if there is not a mod conflict
                        output.push(Item.of(stoneTypes[sType][2]).withChance(0.12))
                    } else { // if there is a mod conflict, pick the right mod
                        let index = 0
                        stoneTypes[sType][3].forEach(mod => {
                            if (input.includes(mod)) {
                                output.push(Item.of(stoneTypes[sType][2][index]).withChance(0.12))
                            }
                            index++;
                        })
                    }
                    stoneCheck = true
                    break stoneCode; // avoids duplicate stone outputs
                }
            }

            if (oreCheck == true && stoneCheck == true) { // allows for ignoring vanilla ores without throwing errors
                event.recipes.createCrushing(output, input) // actually makes the recipe
                completed.push(input)
            }
        }
	}

	let ores = Ingredient.of('#forge:ores').itemIds // grab all of the ore IDs in the game

	ores.forEach(ore => {
	    makeCrushingRecipe(ore) // actually implement the recipes
	})
})