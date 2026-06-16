LootJS.modifiers((event) => {

[
    "supplementaries:blocks/urn_loot/uncommon"
].forEach(table => {
    event
        .addLootTableModifier(table)
        .randomChance(0.75)
        .addWeightedLoot([
            Item.of('eternalcurrencies:currency_item', '{currencies:[{amount:25L,currency:"eternalcurrencies:coins"}]}').withChance(1),
            Item.of('eternalcurrencies:currency_item', '{currencies:[{amount:30L,currency:"eternalcurrencies:coins"}]}').withChance(1)
        ]);
});

[
    "supplementaries:blocks/urn_loot/uncommon"
].forEach(table => {
    event
        .addLootTableModifier(table)
        .randomChance(0.75)
        .addWeightedLoot([
            Item.of('eternalcurrencies:currency_item', '{currencies:[{amount:25L,currency:"eternalcurrencies:coins"}]}').withChance(1),
            Item.of('eternalcurrencies:currency_item', '{currencies:[{amount:30L,currency:"eternalcurrencies:coins"}]}').withChance(1)
        ]);
});

[
    "supplementaries:blocks/urn_loot/rare"
].forEach(table => {
    event
        .addLootTableModifier(table)
        .randomChance(0.20)
        .addWeightedLoot([
            Item.of('eternalcurrencies:currency_item', '{currencies:[{amount:50L,currency:"eternalcurrencies:coins"}]}').withChance(1)
        ]);
});

[
    "supplementaries:blocks/urn_loot/epic"
].forEach(table => {
    event
        .addLootTableModifier(table)
        .randomChance(0.10)
        .addWeightedLoot([
            Item.of('eternalcurrencies:currency_item', '{currencies:[{amount:100L,currency:"eternalcurrencies:coins"}]}').withChance(1)
        ]);
});


    [
        "minecraft:chests/simple_dungeon",
        "minecraft:chests/abandoned_mineshaft",
    "dungeoncrawl:chests/stage_1",
    "dungeoncrawl:chests/stage_2",
    "dungeoncrawl:chests/stage_3",
    "dungeoncrawl:chests/stage_4",
    "dungeoncrawl:chests/stage_5",
    "dungeoncrawl:chests/treasure",
    "dungeoncrawl:chests/secret_room",
        "minecraft:chests/stronghold_corridor"
    ].forEach(table => {
        event
            .addLootTableModifier(table)
            .randomChance(0.90)
            .addLoot(
                Item.of(
                    'eternalcurrencies:currency_item',
                    '{currencies:[{amount:25L,currency:"eternalcurrencies:coins"}]}'
                )
            );

        event
            .addLootTableModifier(table)
            .randomChance(0.40)
            .addLoot(
                Item.of(
                    'ftbquests:lootcrate',
                    '{HideFlags:33,display:{Name:\'{"translate":"item.mce2.quest_loot","color":"yellow","italic":false}\'},type:"quest_loot"}'
                )
            );

        event
            .addLootTableModifier(table)
            .randomChance(0.20)
            .addWeightedLoot(
                [
                    Item.of('iceandfire:dragonscales_green').withChance(1),
                    Item.of('iceandfire:dragonscales_red').withChance(1),
                    Item.of('iceandfire:dragonscales_blue').withChance(1),
                    Item.of('iceandfire:dragonscales_white').withChance(1),
                    Item.of('iceandfire:dragonscales_electric').withChance(1),
                    Item.of('iceandfire:dragonscales_amythest').withChance(1)
                ]
            );
    });
[
    "iceandfire:chest/fire_dragon_female_cave",
    "iceandfire:chest/fire_dragon_male_cave",
    "iceandfire:chest/ice_dragon_female_cave",
    "iceandfire:chest/ice_dragon_male_cave",
    "iceandfire:chest/lightning_dragon_female_cave",
    "iceandfire:chest/lightning_dragon_male_cave"
].forEach(table => {
    event
        .addLootTableModifier(table)
        .randomChance(0.1) 
        .addWeightedLoot([
            Item.of('iceandfire:fire_dragon_heart').withChance(1),
            Item.of('iceandfire:ice_dragon_heart').withChance(1),
            Item.of('iceandfire:lightning_dragon_heart').withChance(1),
            Item.of('tcompat:fire_dragonsteel_nugget').withChance(1),
            Item.of('tcompat:lightning_dragonsteel_nugget').withChance(1),
            Item.of('tcompat:ice_dragonsteel_nugget').withChance(1)
        ]);
});
    [
        "minecraft:chests/nether_bridge",
        "minecraft:chests/bastion_treasure",
        "minecraft:chests/bastion_other",
        "minecraft:chests/bastion_hoglin_stable",
        "minecraft:chests/bastion_bridge"
    ].forEach(table => {
        event
            .addLootTableModifier(table)
            .randomChance(0.40)
            .addLoot(
                Item.of(
                    'eternalcurrencies:currency_item',
                    '{currencies:[{amount:50L,currency:"eternalcurrencies:coins"}]}'
                )
            );

        event
            .addLootTableModifier(table)
            .randomChance(0.60)
            .addLoot(
                Item.of(
                    'ftbquests:lootcrate',
                    '{HideFlags:33,display:{Name:\'{"translate":"item.mce2.quest_loot","color":"yellow","italic":false}\'},type:"quest_loot"}'
                )
            );

        event
            .addLootTableModifier(table)
            .randomChance(0.30)
            .addWeightedLoot(
                [
                    Item.of('iceandfire:dragonscales_green').withChance(1),
                    Item.of('iceandfire:dragonscales_red').withChance(1),
                    Item.of('iceandfire:dragonscales_blue').withChance(1),
                    Item.of('iceandfire:dragonscales_white').withChance(1),
                    Item.of('iceandfire:dragonscales_electric').withChance(1),
                    Item.of('iceandfire:dragonscales_amythest').withChance(1)
                ]
            );
    });

    [
        "iceandfire:chest/fire_dragon_female_cave",
        "iceandfire:chest/fire_dragon_male_cave",
    "dungeoncrawl:chests/stage_5",
        "iceandfire:chest/fire_dragon_roost",
        "iceandfire:chest/ice_dragon_female_cave",
        "iceandfire:chest/ice_dragon_male_cave",
        "iceandfire:chest/ice_dragon_roost",
        "iceandfire:chest/lightning_dragon_female_cave",
        "iceandfire:chest/lightning_dragon_male_cave",
        "iceandfire:chest/lightning_dragon_roost"
    ].forEach(table => {
        event
            .addLootTableModifier(table)
            .randomChance(0.90)
            .addWeightedLoot(
                [
                     Item.of(
                    'eternalcurrencies:currency_item',
                    '{currencies:[{amount:50L,currency:"eternalcurrencies:coins"}]}'
                ),
                    Item.of('iceandfire:dragonscales_green').withChance(1),
                    Item.of('iceandfire:dragonscales_red').withChance(1),
                    Item.of('iceandfire:dragonscales_blue').withChance(1),
                    Item.of('iceandfire:dragonscales_white').withChance(1),
                    Item.of('iceandfire:dragonscales_electric').withChance(1),
                    Item.of('iceandfire:dragonscales_amythest').withChance(1)
                ]
            );
    });
});
