ServerEvents.recipes(e => {
    //Healer
    e.remove({ output: 'cobblemon:healing_machine' })
    e.shaped(
        Item.of('cobblemon:healing_machine', 1),
        [
            'PSP',
            'PDP',
            'PPP'
        ],
        {
            P: '#forge:plates/aluminum',
            D: APO('gem_dust'),
            S: '#handcrafted:shelves'
        }
    )

    //PC
    e.remove({ output: 'cobblemon:pc' })
    e.shaped(Item.of('cobblemon:pc', 1),
        [
            'PGP',
            'PCP',
            'PRP'
        ],
        {
            P: '#forge:plates/aluminum',
            G: '#forge:glass_panes',
            C: CC('computer_normal'),
            R: '#forge:storage_blocks/redstone'
        }
    )








    //END OF EVENT RECIPES
    console.log('Cobblemon Desimplified')
})