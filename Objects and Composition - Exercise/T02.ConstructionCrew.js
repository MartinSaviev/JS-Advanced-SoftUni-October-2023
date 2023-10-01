function constructionCrew(input) {


    if (input.dizziness === true) {
        input.levelOfHydrated += input.weight * 0.1 * input.experience;
    }

    return input;
}
let result = constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
})
console.log(result);