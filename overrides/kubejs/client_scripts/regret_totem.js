const Minecraft = Java.loadClass('net.minecraft.client.Minecraft')
const ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
const SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents')

NetworkEvents.dataReceived('regret_scroll_activate', event => {
    const mc = Minecraft.getInstance()
    const itemId = event.data.item
    const item = BuiltInRegistries.ITEM.get(new ResourceLocation(itemId))

    if (item == null) return
    const stack = new ItemStack(item)

    mc.gameRenderer.displayItemActivation(stack)
    if (mc.player) {
        mc.player.playSound(
            SoundEvents.TOTEM_USE,
            0.6,
            0.6
        )
    }
})