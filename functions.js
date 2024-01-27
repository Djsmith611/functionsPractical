console.log('Functions Practical');


function actualMath(num0, num1){
    console.log('in actualMath', num0, num1);
    let answer = num0 * num1;
    return answer;
} // end actualMath

function logger (){
    console.log('in logger');
} // end logger

function mathExample(){
    console.log('in mathExample');
    let answer = 3*9;
    return answer;
} // end mathExample

function returner (){
    console.log('in returner');
    return true;
} // end returner

logger();
returner();
console.log('running returner:', returner());
console.log('running mathExample:', mathExample());
console.log('running actualMath with 4 & 6:', actualMath(4,6));
//
//
// Weeks 1-4
console.log('weeks 1-4');

const seatsInCar=5;
let passengers =[];
let tankFull=false;

function enoughSeats(){
    console.log('in enoughSeats');
    if (seatsInCar>=passengers.length){
        return true;
    } else {
        return false;
    }
}//end enoughSeats

function getInCar(nameOfPassenger){
    console.log('in getInCar', nameOfPassenger);
    passengers.push(nameOfPassenger);
    return passengers;
}//end getInCar


function readyForRoadTrip(){
    if(enoughSeats()&&tankFull ){
        return true;
    } else {
        return false;
    }
}//end readyForRoadTrip

getInCar('you');
getInCar('dEv');
getInCar('Commander Wisdom');
getInCar('Anjie');

console.log('enough seats?',enoughSeats());

console.log('are we ready for the trip?', readyForRoadTrip);