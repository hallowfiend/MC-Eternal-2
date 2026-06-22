
const mekEnriching = (event, output, input) => {
    let recipe = {
        type: "mekanism:enriching",
        input: {
            ingredient: input
        },
        output: output
    }

    return event.custom(recipe);
}