use("sakshamDatabase");
db.getCollection("development").insertMany([
  {
    "name": "smith",
    "topic": "MEAN",
    "college": "Stanford University"
  },
  {
    "name": "chen",
    "topic": "MEVN",
    "college": "Tsinghua University"
  },
  {
    "name": "kumar",
    "topic": "MEVN",
    "college": "IIT Bombay"
  },
  {
    "name": "garcia",
    "topic": "LAMP",
    "college": "University of California, Berkeley"
  },
  {
    "name": "lee",
    "topic": "LAMP",
    "college": "KAIST"
  },
  {
    "name": "gonzalez",
    "topic": "LAMP",
    "college": "Universidad de Buenos Aires"
  },
  {
    "name": "kim",
    "topic": "MEAN",
    "college": "Seoul National University"
  },
  {
    "name": "patel",
    "topic": "MERN",
    "college": "IIT Delhi"
  },
  {
    "name": "sato",
    "topic": "MERN",
    "college": "University of Tokyo"
  },
  {
    "name": "singh",
    "topic": "MEAN",
    "college": "University of Sydney"
  }
]);

console.log('done data inserting')
