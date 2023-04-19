console.info('Making things cookable...')

ServerEvents.recipes(event => {
    //Smelting
	event.smoking('cobblemon:cooked_red_apricorn', 'cobblemon:red_apricorn')
    event.smoking('cobblemon:cooked_yellow_apricorn', 'cobblemon:yellow_apricorn')
    event.smoking('cobblemon:cooked_green_apricorn', 'cobblemon:green_apricorn')
    event.smoking('cobblemon:cooked_blue_apricorn', 'cobblemon:blue_apricorn')
    event.smoking('cobblemon:cooked_pink_apricorn', 'cobblemon:pink_apricorn')
    event.smoking('cobblemon:cooked_black_apricorn', 'cobblemon:black_apricorn')
    event.smoking('cobblemon:cooked_white_apricorn', 'cobblemon:white_apricorn')
    
})