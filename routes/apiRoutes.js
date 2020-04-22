// Dependencies
// ==========================================
const router = require("express").Router();
const db = require("../models")


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
    db.Grocery.create({name: newList.name, items: newList.items, UserId: newList.UserId}).then(dbNewList => {
        res.send(dbNewList);
    });
});
// Route to delete a grocery list
router.delete("api/grocery-list/:id", function(req, res) {
    db.Grocery.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbGrocery) {
        res.json(dbGrocery);
      });
  
    });   

// groceries route

router.post("/api/groceries", function(req, res){
    

})


module.exports = router;


