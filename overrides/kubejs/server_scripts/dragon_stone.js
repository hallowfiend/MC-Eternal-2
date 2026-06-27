ItemEvents.rightClicked(event => {
    const player = event.player

    if (event.item.id !== 'kubejs:artifact_runestone_dark_inscribed_large') return

    if (player.cooldowns.isOnCooldown(event.item)) {
        return
    }

    player.potionEffects.add(
        'ars_nouveau:flight',
        800, 
        0,  
        false,
        true
    )

    player.addItemCooldown(event.item, 2400) 
})
