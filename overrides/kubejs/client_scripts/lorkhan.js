//lorkan client
const Minecraft = Java.loadClass('net.minecraft.client.Minecraft')
const ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

NetworkEvents.dataReceived('lorkhan_heart_activate', event => {
    const mc = Minecraft.getInstance()
    const player = mc.player
    if (!player) return
    player.playSound(
        Java.loadClass('net.minecraft.sounds.SoundEvent')
            .createVariableRangeEvent(new ResourceLocation('cataclysm:ignis_death')),
        10.0,
        0.9
    )
    const item = BuiltInRegistries.ITEM.get(
        new ResourceLocation('kubejs:lorkhan_heart')
    )

    mc.gameRenderer.displayItemActivation(new ItemStack(item))

})