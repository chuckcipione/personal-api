var user = require('../user.js');
var skills = require('../skills.js');

const getName = (req, res, next) => {
    res.status(200).json({name: user.name});
}

const getLocation = (req, res, next) => {
    res.status(200).json({location: user.location});
}

const getOccupations = (req, res, next) => {
    if(req.query.order === "asc"){
        var order = user.occupations.sort();
        res.status(200).json(order);
    } if(req.query.order === "desc") {
        var order = user.occupations.reverse();
        res.status(200).json(order);
    } else {
    res.status(200).json({occupation: user.occupations});
}
}

const getLatestOccupation = (req, res, next) => {
    var last = user.occupations.length -1;
    res.status(200).json({occupation: user.occupations[last]});
}

const getHobbies = (req, res, next) => {
    res.status(200).json({hobbies: user.hobbies});
}

const getHobbiesType = (req, res, next) => {
    if(req.params.type) {
        res.json(user.hobbies.filter(hobby => hobby.type === req.params.type));
    } else {
        res.json(user.hobbies);
    }
}

const getFamily = (req, res, next) => {
    res.status(200).json({family: user.family});
}

const getFamilyGender = (req, res, next) => {
    if(req.params.gender) {
        res.json(user.family.filter(member => member.gender === req.params.gender));
    } else {
        res.json(user.family);
    }
}

const getRestaurants = (req, res, next) => {
    res.status(200).json({restaurants: user.restaurants});
}

const getRestaurantName = (req, res, next) => {
    if(req.params.name) {
        res.json(user.restaurants.filter(restaurant => restaurant.name === req.params.name));
    } else {
        res.json(user.restaurants);
    }
}

 const changeName = (req, res, next) => {
     var newName = req.body.name;
     user.name = newName;
     res.status(200).json({name: newName});
 }

 const changeLocation = (req, res, next) => {
     var newLocation = req.body.location;
     user.location = newLocation;
     res.status(200).json({location: newLocation});
 }

 const addHobbies = (req, res, next) => {
     user.hobbies.push(req.body);
     res.status(200).json({hobbies: user.hobbies})
 }

 const addOccupation = (req, res, next) => {
     user.occupations.push(req.body);
     res.status(200).json({occupations: user.occupations})
 }

 const addFamily = (req, res, next) => {
     user.family.push(req.body);
     res.status(200).json({family: user.family})
 }

 const addRestaurant = (req, res, next) => {
     user.restaurants.push(req.body);
     res.status(200).json({restaurants: user.restaurants})
 }

 const getSkills = (req, res, next) => {
    if (!req.query.experience) {
        res.json({
            "skills": skills
        });
    } else {
        var result = skills.filter(function(skill) {
            return skill.experience === req.query.experience;
        });
        res.json(result);
    }
 }

 const addSkills = (req, res, next) => {
    var result = {
        id: req.body.id,
        name: req.body.name,
        experience: req.body.experience
    };
    skills.push(result);
    res.json(skills);
 }



module.exports = {
    getName,
    getLocation,
    getOccupations,
    getLatestOccupation,
    getHobbies,
    getHobbiesType,
    getFamily,
    getFamilyGender,
    getRestaurants,
    getRestaurantName,
    changeName, 
    changeLocation,
    addHobbies,
    addOccupation,
    addFamily,
    addRestaurant,
    getSkills,
    addSkills
}