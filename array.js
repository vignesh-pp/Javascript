
    //HIGHER ORDER FUNCTIONS AND ORDERS IN ARRAY=>filter,reduce,map,sort,find,combine
    const age = [2,56,7,45,34,18,100,86];
    const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
    ];
        // console.log(age);
        // console.log(companies);
  //print all
  //forEach
        age.forEach(function(value){
            // console.log(value);
        });


//filter
        const ages = age.filter(function(value){
            if(value >=40){
                return true;
            }
        });
        // console.log(ages);
        const ages1 = age.filter(a=>a>=40);  //array
        // console.log(ages1);


//map
    //creates a new array from calling a function for every array element.
    //calls a function once for each element in an array.
    //print
    const companies1 = companies.map(function(value){
        return value;
    })
    // console.log(companies1);
    const companies2 = companies.map(function(value){
        return value.name + " - " + value.start;
    })
    // console.log(companies2);
    const companies3 = age.map(value=>value);
    // console.log(companies3);


//sort
    const s = age.sort(function(a,b){
        return a-b;
    });
    // console.log(s);
    const s1 = age.sort((a,b)=>b-a);        //array
    // console.log(s1);
    const cs = companies.sort(function(a,b){
        return a.start - b.start;
    });
    // console.log(cs);
    const cs1 = companies.sort((a,b)=>b.end-a.end); //array
    // console.log(cs1);

  
//reduce
    //method executes a reducer function for array element
    //method returns a single value: the function's accumulated result
    let sum = 0;
    for(let i=0;i<age.length;i++){
        sum += age[i];
    }
    // console.log(sum);
    const sums = age.reduce(function(total,value){
        return total+value;
    })    
    // console.log(sums);
    const sumss = age.reduce((total,value)=>total+value);
    // console.log(sumss);


//combine
const comb = age
.map(value =>value)
.filter(value => value>=21)
.sort((a,b)=>a-b)
.reduce((total,value)=>total+value);
    // console.log(comb + " "+typeof comb);

//==================================================================================
    //practice 8 array methods
const items = [
    {name:'bike',price:500},
    {name:'car',price:1000},
    {name:'chair',price:50},
    {name:'lap',price:100},
    {name:'spoon',price:5},
    {name:'pen',price:1},
    {name:'mobile',price:300}
];

//print all - forEach
    // items.forEach(value=>console.log(value));
//print specific
    // items.forEach(value=>console.log(value.name));
//filter
    let item = items.filter(value=>value.price>=300);
    // console.log(item);
//map
    let item1 = items.map(value=>value.price);
    // console.log(item1);
//find
    let item2 = items.find(value=>value.name==="lap");
    // console.log(item2);    
//some
    let item3 = items.some(value=>value.price>=300);
    // console.log(item3);
//every
    let item4 = items.every(value=>value.price>=300);
    // console.log(item4);
//reduce
    let item5 = items.reduce((total,value)=>total + value.price,0);
     //0 is starting point
    // console.log(item5);     
//sort
    let item6 = items.sort((a,b)=>a.price-b.price);
    // console.log(item6);    
//includes
    const arr = [1,2,3,4,5,6,7];
    let arrs = arr.includes(5);
    // console.log(arrs);    

//=======================================================================
//convert array[] to object{}    
    const myarray = ["vicky",21,"nacky","dicky"];
    const myobject = {};

//use forloop    
    // for(let i=0;i<myarray.length;i++){
    //     myobject[i] = myarray[i];
    // }
    // console.log(myarray);
    // console.log(myobject);

//use object.assign methods
    const myarray1 = ["vicky",21,"nacky","dicky"];
    const myobject1 = Object.assign({},myarray1);   //{}-target object,myarray1-source object
    // console.log(myobject1);

//use spread operator
    const myarray2 = ["vicky",21,"nacky","dicky"];
    const myobject2 = {...myarray2};
    // console.log(myobject2);
