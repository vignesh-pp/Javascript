
        //object create 
        //  Object.keys(obj)
        //  Object.values(obj)
        //  Object.entries(obj)     
         const person = {
             name:"Vicky",
             age:21,
             isalive:true,
             sibling:{
                 brother:"no",
                 sister:"Suba"
             },
             mydetails: function (){
                // console.log("Hii " + this["name"] + " your age is "+ this.age +", " +"your sister name is "+ this.sibling.sister);
             }
         };
        person.mydetails();   //it is method

        // console.log(person.sibling.sister);
        // console.log(Object.keys(person));
        // console.log( Object.values(person));
        // console.log( Object.entries(person));
        let entri = Object.entries(person);
        // console.log(entri);

//=====================================================================
//convert object{} to array[]
//use for loop
        let myobject = {a:1,b:2,c:3};
        let myarray = [];
        for(let key in myobject){
            myarray.push([key,myobject[key]]);//key-key in object,next value of object
        }
        // console.log(myobject);
        // console.log(myarray);

//use object.keys and map method
    let myobject1 = {a:1,b:2,c:3,d:4};
    // console.log(Object.keys(myobject1));
    let myarray1 = Object.keys(myobject1).map(key=>{
        return [key,myobject1[key]];
    });
    // console.log(myarray1);

//use object.entries
    let myobject2 = {a:1,b:2,c:3,d:4};
    // console.log(Object.entries(myobject2));
