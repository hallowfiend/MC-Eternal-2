ItemEvents.modification(event => {
    event.modify('kubejs:crimson', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => {
                    const player = slotContext.entity()

                    player.potionEffects.add(
                        'alexsmobs:mosquito_repellent',
                        40,
                        0,
                        false,
                        false
                    )
                })
        )
    })
})