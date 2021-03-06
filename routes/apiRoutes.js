// Dependencies
// ==========================================
const router = require("express").Router();
const db = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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
router.get("/Recipes", (req, res) => {
    // Take the request...
    db.Recipe.findAll({
        limit:50
    }).then(function (dbAllRecipe) {
        res.send(dbAllRecipe)
    });
});
// Route to get one grocery list
router.get("/groceries/:id", (req,res) => {
    db.Grocery.findOne({
        where:{
            id: req.params.id
        }
    }).then(list => {
        res.send(list);
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
        name: newGrocery.name, items: newGrocery.items, UserId: newGrocery.UserId,
    }, {
        where: {
            id: req.params.id,
        }
    });
})
// Route to delete a grocery list
router.delete("/grocery-list/:id", function (req, res) {
    db.Grocery.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbGrocery) {
        res.json(dbGrocery);
    });
});

// Route to search Db for specific recipes
router.get("/recipe/:search", (req, res) => {
    // querey the recipe table
    db.Recipe.findAll({
        // Find all recipes that contain the search param
        where: {
            name: {
                [Op.substring]: req.params.search
            }
        },
        // Only return 10
        limit: 10
    }).then(data => {
        res.send(data);
    })
})
// Route to get recipe by id
router.get("/one-recipe/:id", (req, res) => {
    db.Recipe.findAll({
        where:{
            id: req.params.id
        }
    }).then(data => {
        res.send(data);
    })
})
// Route to get all grocery list for user
router.get("/user-groceries/:id", (req, res) => {
    db.Grocery.findAll({
        // only for current user
        where:{
            UserId: req.session.passport.user
        }
    }).then(data => {
        res.send(data);
    })
})
module.exports = router;