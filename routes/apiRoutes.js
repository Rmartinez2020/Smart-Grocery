// Dependencies
// ==========================================
const router = require("express").Router();
const db = require("../models")


// Routes
// ==========================================
router.post("/api/newRecipe", (req, res) => {
    // Take the request...
    const newRecipe = req.body;
    db.Recipe.create({
        name: Recipe.name,
        minutes: Recipe.minutes,
        submitted: Recipe.submitted,
        tags: Recipe.tags,
        nutrition: Recipe.nutrition,
        n_steps: Recipe.n_steps,
        steps: Recipe.steps,
        description: Recipe.description,
        ingredients: Recipe.ingredients,
        n_ingredients: Recipe.description
    }).then(dbNewRecipe => {
        res.send(dbNewRecipe);
    });

});

router.post("/api/newList", (req, res) => {
    const newList = req.body;
    db.Groceries.create({newList}).then(dbNewList => {
        res.send(dbNewList);
    });
});
module.exports = router;
