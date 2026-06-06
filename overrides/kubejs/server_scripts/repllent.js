let timer = 0

ServerEvents.tick(event => {
    timer++
    if (timer < 300) return
    timer = 0

    event.server.players.forEach(player => {
        if (player.inventory.count('kubejs:pocket_watch') > 0) {
            player.potionEffects.add('tombstone:unstable_intangibility', 320, 0, false, false)
        } else {
            player.removeEffect('tombstone:unstable_intangibility')
        }
    })
})