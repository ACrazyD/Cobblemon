ServerEvents.recipes(e =>  {
    //Econ
    e.remove({ output: 'lightmanscurrency:coinmint' })
    e.remove({ id: 'lightmanscurrency:coin_mint/mint_coin_netherite' })
    e.remove({ id: 'lightmanscurrency:coin_mint/mint_coin_diamond' })
    e.remove({ id: 'lightmanscurrency:coin_mint/mint_coin_emerald' })
    e.remove({ id: 'lightmanscurrency:coin_mint/mint_coin_iron' })
    e.remove({ id: 'lightmanscurrency:coin_mint/mint_coin_copper' })
    e.remove({ id: 'lightmanscurrency:coin_mint/mint_coin_gold' })
    
    //Cobblemon
    e.remove({ output: 'cobblemon:master_ball' })
})

