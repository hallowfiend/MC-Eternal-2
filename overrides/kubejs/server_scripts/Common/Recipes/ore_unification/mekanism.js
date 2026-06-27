
createModule("mekanism")
    .init = (event) => {

        //Remove enriching recipes for dirty dust purification
        event.remove({id: /.*:processing\/.*\/dust\/from_dirty_dust/, type: "mekanism:enriching"})
    }


modules.mekanism.main = (event, matId, material) => {
    
    let dirtyDust = Ingredient.of(`#mekanism:dirty_dusts/${matId}`);

    if(material.dust && dirtyDust.itemIds.length > 0) {

        mekEnriching(event, Item.of(material.dust), dirtyDust)
            .id(`mce2:unification/enriching/${matId}_dust_from_dirty`)
    }
}