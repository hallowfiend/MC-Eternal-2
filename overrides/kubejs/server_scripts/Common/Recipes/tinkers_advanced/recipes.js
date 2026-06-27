ServerEvents.recipes(event => {


  event.shaped(
    Item.of('tinkers_advanced:resonance_crystal', 1),
    [
      ' A ',
      'BCB',
      ' A '
    ],
    {
      A: 'mekanism:crystal_osmium',
      B: 'tconstruct:slimesteel_ingot',
      C: 'minecraft:echo_shard'
    }
  )


  event.shaped(
    Item.of('tinkers_advanced:disintegrate_crystal', 1),
    [
      'RA ',
      'BCB',
      ' AR'
    ],
    {
      A: 'tconstruct:queens_slime_ingot',
      R: 'ad_astra:calorite_ingot',
      B: 'tconstruct:cinderslime_ingot',
      C: 'tinkers_advanced:resonance_crystal'
    }
  )

  event.shaped(
    Item.of('tinkers_advanced:voltaic_crystal', 1),
    [
      ' A ',
      'BCB',
      ' A '
    ],
    {
      A: 'mekanism:alloy_atomic',
      B: 'tconstruct:ender_slime_crystal',
      C: 'tinkers_advanced:disintegrate_crystal'
    }
  )

})