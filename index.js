const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;


const app = express();
app.use(bodyParser.json());
app.use(cors());

var main_ctrl = require('./controllers/main_ctrl.js');

app.get('/name', main_ctrl.getName);
app.get('/location', main_ctrl.getLocation);
app.get('/occupations', main_ctrl.getOccupations);
app.get('/occupations/latest', main_ctrl.getLatestOccupation);
app.get('/hobbies', main_ctrl.getHobbies);
app.get('/hobbies/:type', main_ctrl.getHobbiesType);
app.get('/family', main_ctrl.getFamily);
app.get('/family/:gender', main_ctrl.getFamilyGender);
app.get('/restaurants', main_ctrl.getRestaurants);
app.get('/restaurants/:name', main_ctrl.getRestaurantName);
app.put('/name', main_ctrl.changeName);
app.put('/location', main_ctrl.changeLocation);
app.post('/hobbies', main_ctrl.addHobbies);
app.post('/occupations', main_ctrl.addOccupation);
app.post('/family', main_ctrl.addFamily);
app.post('/restaurant', main_ctrl.addRestaurant);
app.get('/skills', main_ctrl.getSkills);
app.post('/skills', main_ctrl.addSkills);








app.listen(port, () => {
    console.log(`Listening to Port: ${port}`);
})
