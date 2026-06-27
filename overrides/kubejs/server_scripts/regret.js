ItemEvents.rightClicked('kubejs:regret_scroll', event => {
    const player = event.player
    player.sendData('regret_scroll_activate', {
        item: 'kubejs:regret_scroll'
    })

    player.runCommandSilent('gamestage remove @s expert')
    player.runCommandSilent('gamestage add @s regret_scroll_active')

    player.tell(
        Text.of(
            'You have returned to Normal Mode, you may enter Expert Mode by visiting the Nether again whenever you feel prepared!'
        )
            .gold()
            .italic(true)
    )

    event.item.count--
})

ServerEvents.tick(event => {
    if (event.server.tickCount % 60 !== 0) return
    event.server.players.forEach(player => {
        if (!player.stages.has('regret_scroll_active')) return

        if (player.level.dimension == 'minecraft:the_nether') {
            player.runCommandSilent('gamestage add @s expert')
            player.runCommandSilent('gamestage remove @s regret_scroll_active')
            player.tell(
                Text.of('Welcome back to Expert Mode! Good luck!')
                    .gold()
                    .italic(true)
            )
        }
    })
})
