//Arrays refers to a special variable which can hold more than one value
//example
const cars = ["Subaro","Ford","Toyota"]

//Array methods
//converting array to string

//toString()   //to convert array into a string

const fruits = ["apple","banana","mango"]
const x = fruits.toString();
console.log(x);

//join()   // to convert array into a string
const animals = ["sheep","goat","cow","hen"]
const y = animals.join(",");
console.log(y);

//pop()  //removes the last element from an array
const animal = ["sheep","goat","cow","hen"]
const z = animal.pop();
console.log(z);

//push()  //adds a new element into an array(at the end)
const v =["apple","banana","mango"]
const w = v.push("melon");
console.log(w);

//shift() //removes the first element from an array
const m =["apple","banana","mango","melon"]
const n = m.shift();
console.log(n);

//unshift()  adds an element into an array(at the beginning)
const r =["apple","banana","mango","melon"]
const s = r.unshift("lemon");
console.log(r);

//length  //returns the length of an array
const a =["apple","banana","mango","melon"]
const b =a.length
console.log(b);



//merging(concatenating)array  //creates a new array by merging the existing one
const e =["apple","banana","mango","melon"]
const f = ["sheep","goat","cow","hen"]
const h = e.concat(f);
console.log(h);

//splice()  //adds new items into an array
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
const j = fruitss.splice(2,2,"lemon","orange"); 
console.log(j); 

//slice() // removes elements from an array not including the last(takes two arguments)
const anim = ["sheep","goat","cow","hen"]
const ani = anim.slice(0,1);
console.log(ani);

//sorting an array
//sorts()  //sorts an array alphabetically
const fruit = ["Banana", "Orange", "Apple", "Mango"];
const g =fruits.sort();
console.log(g);

//reversing an array
//reverse()  //reverses elements in an array //or in an descending order
const fru = ["Banana", "Orange", "Apple", "Mango"];
const fr = fru.reverse();
console.log(fr);

// lasIndexOf()
// returns the last index of the specified value  //returns -1 if the element is found
let fruits1 = ["mango","banana","pears","apple"]
console.log(fruits1.lastIndexOf("melon"));

// indexOf ()
// methods return the first index of the specified value
let fruits2 = ["mango","banana","pears","apple","banana"]
console.log(fruits2.indexOf("banana"));

// delete()
// array element can be deleted using javascript method
let fruits3 = ["mango","banana","pears","apple"]
delete fruits3 [3]
console.log(fruits3);

//Today's course I worked to improve on product management
//My key takeaways are:
//1.I have learned that you can be able to remove,add,find length,join elements in an array
//2.I have learned the different array methods
//3.Arrays are used to store multiple values in a single variable.







