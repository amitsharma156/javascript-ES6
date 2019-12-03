// let and const

// ES-5
var name5 = 'Jane smith';
var age5 = 23;
name5 = 'Jane miller';
console.log(name5);

// ES-6

const name6 = "Jane Smith";
let age6 = 23;
//name6 = "jane Miller";
console.log(name6);


// ES-5

function driverLicensce5(passedTest){
    if(passedTest){
      //  console.log(firstName);
        var firstName ='John';
        var yearOfBirth = 1990;
       
    }
    console.log(firstName + ', born in '+ yearOfBirth + ', officially allowed to drive car')

}
driverLicensce5(true);

// ES-6

function driverLicensce6(passedTest){
    //console.log(firstName);
    let firstName;const yearOfBirth =  1990;
    if(passedTest){
        let firstName ='John';
        const yearOfBirth = 1990;
        console.log(firstName + ', born in '+ yearOfBirth + ', officially allowed to drive car')
    }
  
        

}
driverLicensce6(true);