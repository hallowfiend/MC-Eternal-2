let crushMaterialToDust; // shortcut helper assigned later with event as a lambda param. not recommended for use.


createModule("occultism")
    .init = (event) => {
        event.remove({id: /occultism:crushing\/.*_dust_from_raw/})
        event.remove({id: /occultism:crushing\/.*_dust_from_raw_block/})

        //Gem/Ingot crushing fixing
        // their datagen looks inconsistent :V some of it has mult disabled and some doesn't
        event.remove({id: /occultism:crushing\/.*_dust_from_ingot/})
        event.remove({id: /occultism:crushing\/.*_dust_from_gem/})

        crushMaterialToDust = (output, input, oreName, sourceType) => {
            sourceType = sourceType || oreName
            occultismCrushing(event, output, input, 200, true)
                .id(`mce2:unification/occultism/crushing/${oreName}_dust_from_${sourceType}`)
        }

        crushMaterialToDust(Item.of(global.preferredOreProducts.coal.dust), Item.of("minecraft:coal"), "coal")
        
        occultismCrushing(event, Item.of(global.preferredOreProducts.obsidian.dust), Ingredient.of("#forge:obsidian"), 200)
            .id("mce2:unification/occultism/crushing/obsidian_dust")

        event.remove({id: "occultism:crushing/blaze_powder_from_rod"})
        event.remove({id: "occultism:crushing/end_stone_dust"})
        event.remove({id: "occultism:crushing/datura"})

        //fixing broken stuff
        // something is making occultism's query of the output tags fire too early and break everything. it would probably have been more severe if the unification stuff was not already in place.
        occultismCrushing(event, Item.of("occultism:crushed_end_stone"), Ingredient.of("#forge:end_stones"), 200)
            .id("mce2:unification/occultism/crushing/end_stone_dust_static")
        occultismCrushing(event, Item.of("minecraft:blaze_powder"), Ingredient.of("#forge:rods/blaze"), 200)
            .id("mce2:unification/occultism/crushing/blaze_powder_static")
        occultismCrushing(event, Item.of("occultism:datura_seeds", 2), Item.of("occultism:datura"), 200)
            .id("mce2:unification/occultism/crushing/demons_dream_seeds_static")
    }

modules.occultism.main = (event, matId, material) => {
    //console.log(crushed, part)
    event.remove({id: `occultism:crushing/${matId}_dust`})

    if(material.crushed_raw) {
        let crushedPart = `kubejs:${matId}_crushed_part`

        occultismCrushing(event, Item.of(crushedPart, 5), 
            {tag: `forge:raw_materials/${matId}`}, 200, false)
            .id(`mce2:unification/occultism/crushing/raw_${matId}_to_crushed_part`)

        occultismCrushing(event, Item.of(crushedPart, 10),
            {tag: `forge:ores/${matId}`}, 200, false)
            .id(`mce2:unification/occultism/crushing/${matId}_dust`)

        /*
        occultismCrushing(event, Item.of(crushedPart, 36),
            {tag: `forge:storage_blocks/raw_${ore}`}, 200 * 9, false)
            .id(`mce2:occultism/crushing/raw_${ore}_block_to_crushed_part`)
        */

        event.shapeless(material.crushed_raw, [
            crushedPart, crushedPart, crushedPart, crushedPart
        ]).id(`mce2:unification/crafting/crushed_raw_${matId}_assembling`)
    }

    if(material.dust) {

        if(material.type == global.types.ORE_METAL && material.ingot)
            crushMaterialToDust(Item.of(material.dust), {tag: `forge:ingots/${matId}`}, matId, "ingot")

        if(material.type == global.types.ORE_GEM && material.gem) {
            crushMaterialToDust(Item.of(material.dust), {tag: `forge:gems/${matId}`}, matId, "gem")

            event.remove({id: `occultism:crushing/${matId}_dust`})
            occultismCrushing(event, Item.of(material.dust, 3), {tag: `forge:ores/${matId}`}, 100, false)
                .id(`mce2:unification/occultism/crushing/${matId}_dust_from_ore`)
            //crushMaterialToDust(Item.of(product, 3), {tag: `forge:ores/${material}`}, material, "ore")
        }
    }
}