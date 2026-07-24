[
  {
    "_id": 1,
    "name": "John Doe",
    "age": 28,
    "hobbies": ["Reading", "Swimming", "Cycling"],
    "about": "I am a software engineer who loves coding."
  },
  {
    "_id": 2,
    "name": "Emily Smith",
    "age": 32,
    "hobbies": ["Dancing", "Traveling", "Cooking"],
    "about": "Travel blogger and food enthusiast."
  },
  {
    "_id": 3,
    "name": "Michael Johnson",
    "age": 40,
    "hobbies": ["Photography", "Gardening", "Reading"],
    "about": "Passionate about nature and photography."
  },
  {
    "_id": 4,
    "name": "Sophia Brown",
    "age": 25,
    "hobbies": ["Music", "Drawing", "Gaming"],
    "about": "Aspiring artist who enjoys music and sketching."
  },
  {
    "_id": 5,
    "name": "David Wilson",
    "age": 36,
    "hobbies": ["Boxing", "Swimming", "Hiking"],
    "about": "Fitness trainer and outdoor explorer."
  }
]


db.employees.find({about:"Fitness trainer and outdoor explorer."})
db.employees.find({about:/trainer/})
// output return if it containes Traner //
db.employees.find({about:/and/})

// case in-sensitive comparision//
db.employees.find({about:/And/i})

db.employees.find({about:/M/i})

//start with
db.employees.find({about:/^M/i})

//end with
db.employees.find({about:/M$/i})


db.employees.find({name:/.{3}a/})

db.employees.find({name:/^.{3}a/})

db.employees.find({name:/^.{3}h/})


db.employees.find({name:/o.{1}$/})


db.employees.find().count()
db.employees.find().limit(3)

db.employees.find().sort({age:1})

db.employees.find().sort({name:1,age:-1})


Date() -String
new Date() - date Object

new isodate() -date Object


db.employees.insertMany([
  {
    aboutDate:"Date using 'Date()'",
    insertedAt:Date()
  },
  {
    aboutDate:"Date using 'new Date()'",
    insertedAt:new Date()
  },
  {
    aboutDate:"Date using 'new Date()'",
    insertedAt:new ISODate()
  }

])


db.datecollections.find({},{
  RegistrationDate:{
    $dateToString:{
      date:"$insertAt",
      format:"%d-%B-%Y"
    }
    
  }
}
)




db.datecollections.aggregate([
  {
    $match: {
      insertedAt: { $type: "date" }
    }
  },
  {
    $project: {
      RegistrationDate: {
        $dateToString: {
          date: "$insertedAt",
          format: "%d-%m-%Y %H:%M:%S",
          timezone: "+05:30"
        }
      }
    }
  }
])




