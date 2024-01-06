app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const json = require('../../wtc-files/problemSet.json');
console.log(json);

fn = eval(json.probability.task_1.function);
a = json.probability.task_1.variables.a;

var randomIndexA = Math.floor(Math.random() * a.length);
var randomIndexB = Math.floor(Math.random() * b.length);

// Get the random variable
var randomA = a[randomIndex];


console.log(fn(randomA));