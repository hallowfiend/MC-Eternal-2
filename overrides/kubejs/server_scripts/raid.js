// credit to Ac3w0lf who had the idea to gate raids behind expert mode

PlayerEvents.tick(event => {
  const player = event.player
  if (player.age % 20 !== 0) return
  if (player.stages.has("expert")) return
  if (player.hasEffect("minecraft:bad_omen")) {
  
    player.removeEffect("minecraft:bad_omen")
    player.tell(
      "§7Raids can only occur in Expert Mode, consider yourself lucky! §oFor now..."
    )
  }
})