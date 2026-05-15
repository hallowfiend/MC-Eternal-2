ServerEvents.recipes(event => {
  event.remove({ output: 'tinkers_advanced:voltaic_crystal' })
  event.remove({ output: 'tinkers_advanced:resonance_crystal' })
  event.remove({ output: 'tinkers_advanced:disintegrate_crystal' })
})