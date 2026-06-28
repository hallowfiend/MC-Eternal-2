ItemEvents.modification(event => {
    event.modify('kubejs:dwarven_ring', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => {
                    const player = slotContext.entity()

                    player.potionEffects.add(
                        'lavafishing:lava_walker',
                        40,
                        0,
                        false,
                        false
                    )
                     player.potionEffects.add(
                        'goety:gold_touched',
                        40,
                        1,
                        false,
                        false
                    )
                })
        )
    })
})