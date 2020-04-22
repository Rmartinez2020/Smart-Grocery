// Dependencies
// ==========================================
const router = require("express").Router();
const db = require("../models");

// Routes
// ==========================================
router.post("/newRecipe", (req, res) => {
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
// Route to create new Grocery List
router.post("/newList", (req, res) => {
    // Get the req data
    const newList = req.body;
    // Create new row in Grocery table
    db.Grocery.create({ name: newList.name, items: newList.items, UserId: newList.UserId }).then(dbNewList => {
        res.send(dbNewList);
    });
});
// Update Grocery list
router.post("/groceries/:id", function (req, res) {
    const newGrocery = req.body;
    db.Grocery.update({
     name: newGrocery.name, items: newGrocery.items, UserId: newGrocery.UserId ,
    }, {
        where: {
            id: req.params.id,   
        }
    });
})
// Route to delete a grocery list
router.delete("/grocery-list/:id", function(req, res) {
    db.Grocery.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbGrocery) {
        res.json(dbGrocery);
      });
    });   

// Route to search Db for specific recipes
router.get("/recipe/search", (req,res) => {
    
})
module.exports = router;