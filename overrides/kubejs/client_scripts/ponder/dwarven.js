Ponder.registry(event => {

    event.create([
        "kubejs:ancient_portal_stone",
        "quark:diamond_heart"
    ])
    .scene(
        "dwarven_depths",
        "Portal to The Dwarven Depths",
        "mce2:dwarven_depths",
        (scene, util) => {

            scene.showBasePlate()
            scene.idle(20)

            scene.text(
                60,
                "Looking for Mithril, Dragons and Large Ore Veins? They are found in the custom Dwarven Depths dimension."
            )
            scene.idle(80)

            scene.text(40, "Here's how to reach it.")
            scene.idle(50)

            scene.text(
                50,
                "First, build a portal frame using Ancient Dwarven Portal Blocks."
            ).attachKeyFrame()

            scene.idle(20)

            scene.world.showSection([1, 1, 1, 5, 1, 5], Facing.DOWN)

            scene.idle(50)

            scene.text(
                50,
                "Then, use a Heart of Diamond anywhere inside the frame."
            ).attachKeyFrame()

            scene.idle(40)

            scene.showControls(
                40,
                [2, 3, 2],
                "down"
            )
            .withItem("quark:diamond_heart")
            .rightClick()

            scene.idle(30)

            for (let x = 2; x <= 3; x++) {
                for (let z = 2; z <= 3; z++) {
                    scene.world.setBlock(
                        [x, 1, z],
                        Block.id("cpapireforged:custom_portal_block").with("axis", "y"),
                        false
                    )
                }
            }

            scene.idle(20)

            scene.text(
                60,
                "The portal is now active and ready to enter. Come prepared! Something nefarious must have made thes ancient dwarves disappear.."
            ).attachKeyFrame()

            scene.idle(80)
        }
    )
})
