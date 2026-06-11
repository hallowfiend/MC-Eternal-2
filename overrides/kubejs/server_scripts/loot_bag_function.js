
const $LootDataType = Java.loadClass("net.minecraft.world.level.storage.loot.LootDataType")
const $LootDataId = Java.loadClass("net.minecraft.world.level.storage.loot.LootDataId")
const $LootContextParams = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParams")
const $LootContextParamSets = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParamSets")
const $LootParams = Java.loadClass("net.minecraft.world.level.storage.loot.LootParams")

ItemEvents.rightClicked("kubejs:loot_bag", event => {
    const {item, player, level, server} = event;

    //console.log(item, level, player, server)
    //console.log(item.nbt?.loottable)
    
    if(level.isClientSide() || item.nbt?.loottable == undefined) return;

    const tableName = item.nbt.loottable
    const lootId = new $LootDataId($LootDataType.TABLE, tableName)
    const lootTable = server.getLootData().getElementOptional(lootId)
    if(lootTable.isPresent()) {
        let drops = lootTable.get().getRandomItems(new $LootParams.Builder(level)
        .withParameter($LootContextParams.THIS_ENTITY, player)
        .withParameter($LootContextParams.ORIGIN, player.position())
        .create($LootContextParamSets.GIFT))
        drops.forEach(drop => {
            //console.log(drop)
            player.drop(drop, false, false) //["spawnAtLocation(net.minecraft.world.item.ItemStack)"]
        })
        if(!player.isCreative())
            item.shrink(1);
    } else {
        console.warn(`Player ${player} attemped to open Loot Bag with unknown LootTable ${tableName}`)
    }
})