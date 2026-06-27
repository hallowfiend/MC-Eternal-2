ItemEvents.modification(event => {
    event.modify('kubejs:pocket_watch', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => {
                    const player = slotContext.entity()

                    player.potionEffects.add(
                        'tombstone:unstable_intangibility',
                        160,
                        0,
                        true,
                        true
                    )
                })
        )
    })
})