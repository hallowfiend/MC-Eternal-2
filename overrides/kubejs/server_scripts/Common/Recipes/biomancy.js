ServerEvents.recipes(event => {
  
  event.recipes.biomancy.decomposing('ars_nouveau:source_gem', [OutputItem.of('biomancy:gem_fragments',4), Item.of('biomancy:exotic_dust').withRolls(1, 2)]).processingTime(20 * 15).nutrientsCost(3)
  event.recipes.biomancy.decomposing('hexcasting:amethyst_dust', [OutputItem.of('biomancy:gem_fragments', 1)]).processingTime(20 * 4).nutrientsCost(2)
  event.recipes.biomancy.decomposing('hexcasting:charged_amethyst', [OutputItem.of('biomancy:gem_fragments', 6)]).processingTime(20 * 6).nutrientsCost(6)
  event.recipes.biomancy.decomposing('irons_spellbooks:arcane_essence', [OutputItem.of('biomancy:exotic_dust', 1)]).processingTime(20 * 2).nutrientsCost(2)
  event.recipes.biomancy.decomposing('goety:ectoplasm', [OutputItem.of('biomancy:exotic_dust', 3), Item.of('biomancy:bio_lumens', 3)]).processingTime(20 * 8).nutrientsCost(8)
  event.recipes.biomancy.decomposing('goety:spider_egg', [OutputItem.of('biomancy:bile', 3), Item.of('biomancy:organic_matter').withRolls(0, 2), Item.of('biomancy:hormone_secretion', 1)]).processingTime(20 * 3).nutrientsCost(3)
  event.recipes.biomancy.decomposing('goety:venomous_fang', [OutputItem.of('biomancy:toxin_gland', 1), Item.of('biomancy:toxin_extract', 1), Item.of('biomancy:sharp_fang', 1)]).processingTime(20 * 6).nutrientsCost(3)
  
	event.recipes.biomancy.bio_forging([Item.of('biomancy:bone_fragments', 8), 'biomancy:mob_claw', 'ars_nouveau:earth_essence'], 'ars_nouveau:wilden_horn', 'biomancy:components').nutrientsCost(20)
  event.recipes.biomancy.bio_forging([Item.of('biomancy:bone_fragments', 8), 'biomancy:mob_fang', 'ars_nouveau:water_essence'], 'ars_nouveau:wilden_spike', 'biomancy:components').nutrientsCost(20)
  event.recipes.biomancy.bio_forging([Item.of('biomancy:elastic_fibers', 8), 'minecraft:phantom_membrane', 'ars_nouveau:air_essence'], 'ars_nouveau:wilden_wing', 'biomancy:components').nutrientsCost(20)
  event.recipes.biomancy.bio_forging([Item.of('botania:mana_powder'), 'biomancy:nutrients', Item.of('biomancy:organic_matter', 2)], Item.of('botania:fertilizer', 4), 'biomancy:misc').nutrientsCost(4)

})
