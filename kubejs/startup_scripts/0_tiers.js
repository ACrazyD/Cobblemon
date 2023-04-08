console.log('Loading Tears... Sorry Tiers**')

ItemEvents.toolTierRegistry(event => {
	event.add('ruby', tier => {
		tier.uses = 768
		tier.speed = 8
		tier.attackDamageBonus = 2.5
		tier.level = 3
		tier.enchantmentValue = 12
		tier.repairIngredient = 'kubejs:ruby'
	})
})

ItemEvents.armorTierRegistry(event => {
	event.add('ruby', tier => {
		tier.durabilityMultiplier = 17
		tier.slotProtections = [2,5,6,2]
		tier.enchantmentValue = 12
		tier.equipSound = 'minecraft:item.armor.equip_diamond'
		tier.repairIngredient = 'kubejs:ruby'
		tier.toughness = 1.5
		tier.knockbackResistance = 0.0
	})
})
