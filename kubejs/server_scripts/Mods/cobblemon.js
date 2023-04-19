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
            P: '#forge:plates/zinc',
            D: '#forge:gems',
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
            P: '#forge:plates/zinc',
            G: '#forge:glass_panes',
            C: '#chipped:redstone_lamp',
            R: '#forge:storage_blocks/redstone'
        }
    )
    

    //BeastBall
    e.remove({ output: 'cobblemon:beast_ball' })
    e.shaped(Item.of('cobblemon:beast_ball', 4),
        [
            'isi',
            'scs',
            'isi'
        ],
        {
            i: '#forge:ingots/gold',
            s: '#deeperdarker:reinforced_echo_shard',
            c: '#forge:gems/diamond'
        }
    )

    //Apricorn Replacer
    e.replaceInput(
        { input: 'cobblemon:red_apricorn' }, 
        'cobblemon:red_apricorn',            
        'cobblemon:cooked_red_apricorn'         
    )
    e.replaceInput(
        { input: 'cobblemon:yellow_apricorn' }, 
        'cobblemon:yellow_apricorn',            
        'cobblemon:cooked_yellow_apricorn'         
    )
    e.replaceInput(
        { input: 'cobblemon:green_apricorn' }, 
        'cobblemon:green_apricorn',            
        'cobblemon:cooked_green_apricorn'         
    )
    e.replaceInput(
        { input: 'cobblemon:blue_apricorn' }, 
        'cobblemon:blue_apricorn',            
        'cobblemon:cooked_blue_apricorn'         
    )
    e.replaceInput(
        { input: 'cobblemon:pink_apricorn' }, 
        'cobblemon:pink_apricorn',            
        'cobblemon:cooked_pink_apricorn'         
    )
    e.replaceInput(
        { input: 'cobblemon:black_apricorn' }, 
        'cobblemon:black_apricorn',            
        'cobblemon:cooked_black_apricorn'         
    )
    e.replaceInput(
        { input: 'cobblemon:white_apricorn' }, 
        'cobblemon:white_apricorn',            
        'cobblemon:cooked_white_apricorn'         
    )









    //END OF EVENT RECIPES
    console.log('Cobblemon Desimplified')
})