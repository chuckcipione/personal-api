var user = {
    name: 'Chuck',
    location: 'Dallas',
    occupations: ['Student', 'Researcher', 'Rock Climber'],
    hobbies: [
      {
        name: 'Coding',
        type: 'Schoolwork'
      },
      {
        name: 'Fishing',
        type: 'Recreation'
      },
      {
        name: 'Video Games',
        type: 'Recreation'
      }
    ],
    family: [
      {
        name: 'Charles',
        relation: 'Father',
        gender: 'Male'
      },
      {
        name: 'Susan',
        relation: 'Mother',
        gender: 'Female'
      },{
        name: 'Anne',
        relation: 'Sister',
        gender: 'Female'
      }
    ],
    restaurants: [
      {
        name: 'Chipotle',
        type: 'Mexican',
        rating: 3.5
      },
      {
        name: 'Fogo de Chao',
        type: 'Brazilian',
        rating: 5
      },
      {
        name: 'Blue Fish',
        type: 'Sushi',
        rating: 5
      }
    ]
  }

  module.exports = user;