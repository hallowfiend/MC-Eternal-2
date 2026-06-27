let crushMaterialToDust; // shortcut helper assigned later with event as a lambda param. not recommended for use.

let reviseMiner;

const minerOres = "occultism:miners/ores"

const minerOreWeights = {
    "occultism:miners/ores": {
        iron: 750,
        gold: 311,
        copper: 584,
        tin: 602,
        silver: 381,
        lead: 500,
        nickel: 232,
        uranium: 140,
        zinc: 186,
        cobalt: 163,

        lapis: 343,
        diamond: 218,
        emerald: 156,
        fluorite: 150,
        ruby: 200,
        sapphire: 200,
        apatite: 233,
        cinnabar: 190,
        sulfur: 222,
        niter: 233,

        coal: 1000,
        redstone: 515
    },
    "occultism:miners/deeps": {
        iron: 750,
        gold: 311,
        copper: 584,
        tin: 602,
        silver: 381,
        lead: 500,
        nickel: 232,
        uranium: 140,
        zinc: 186,

        lapis: 343,
        diamond: 218,
        emerald: 156,
        fluorite: 150,
        ruby: 200,
        sapphire: 200,
        apatite: 233,
        cinnabar: 190,
        sulfur: 222,
        niter: 232,

        coal: 1000,
        redstone: 515
    },
    "occultism:miners/master": {
        iesnium: 100
    }
}



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

        reviseMiner = (minerTag, resultFetcher, remover) => {
            console.log(`Handling Miner recipe reconstruction for ${minerTag}`)
            for (let [oreName, weight] of Object.entries(minerOreWeights[minerTag])) {
                try {
                    let result = resultFetcher(global.preferredOreProducts[oreName])
                    let name = result.split(":")[1]
                    remover(name)

                    occultismMinerResult(event, Item.of(result), {tag: minerTag}, weight)
                        .id(`mce2:unification/occultism/miner/${name}`)
                } catch (error) {
                    console.log(`Errored while handling Miner recipe reconstruction for ${oreName}`)
                    console.log(error)
                }
            }
        }

        reviseMiner(minerOres, (material) => material.ore, name => event.remove({id: `occultism:miner/ores/${name}`}))
        reviseMiner("occultism:miners/deeps", (material) => material.deep_ore, name => event.remove({id: `occultism:miner/deeps/${name}`}))
        reviseMiner("occultism:miners/master", (material) => material.ore, name => event.remove({id: `occultism:miner/master/${name}`}))

        
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