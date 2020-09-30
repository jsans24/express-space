// DEPENDENCIES
const express = require('express');
const app = express();

// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * MAIN GOAL:
// * User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page
//
// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created

// PORT
const port = 3000;

app.set('view engine', 'ejs')

const missions = require('./models/marsMission')

// Root Route
app.get('/', (req, res) => {res.render('index')})

// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"
app.get('/missions', (req, res) => {
  res.render('missions/index', {missions: missions});
});

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission
app.get('/missions/:id', (req, res) => {
  const missionsId = req.params.id;
  const mission = missions[missionsId];

  if (missions[missionsId]) res.render('missions/show', {mission: mission});
  else {
    console.log('This mission does not exist');
    res.redirect('/missions')
  }
})



// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
