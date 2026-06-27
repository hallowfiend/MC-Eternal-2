ServerEvents.recipes(event => {

    event.remove({id: "mekanism:processing/lategame/antimatter_pellet/from_gas"})
    event.remove({id: "mekanism:processing/lategame/antimatter/from_pellet"})

    event.custom({
        "type": "mekanism:crystallizing",
        "chemicalType": "gas",
        "input": {
            "amount": 100,
            "gas": "mekanism:antimatter"
        },
        "output": {
            "item": "mekanism:pellet_antimatter"
        }
    }).id("mce2:mekanism/antimatter_pellet_with_reduced_grind")

    event.custom({
        "type": "mekanism:oxidizing",
        "input": {
            "ingredient": {
            "tag": "forge:pellets/antimatter"
            }
        },
        "output": {
            "amount": 100,
            "gas": "mekanism:antimatter"
        }
    }).id("mce2:mekanism/antimatter_with_reduced_grind")
})