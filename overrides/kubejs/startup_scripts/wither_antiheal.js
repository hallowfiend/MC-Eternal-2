const MAX_HEAL = 5

const $LivingHealEvent = Java.loadClass(
    "net.minecraftforge.event.entity.living.LivingHealEvent"
)

ForgeEvents.onEvent($LivingHealEvent, (event) => {
	if (event.entity.getType().toString() === 'minecraft:wither') {
		event.amount = Math.min(event.amount, MAX_HEAL)
	}
})
