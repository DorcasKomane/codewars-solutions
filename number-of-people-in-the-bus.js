// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent 
//the number of people that get on the bus (the first item) and the number of people that get 
//off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus 
//stop (after the last array). Even though it is the last bus stop, the bus might not be 
//empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is 
//always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first 
//bus stop.

//my solution:

//PREP

//PARAMETERS: a list of integer pairs - an array of arrays(integer pairs)
//            first element in the array -> number of people who got on the bus
//            second element in the array -> number of peple who got off the bus
//            number of people in the bus will always be >= 0
//            second element in the first array is always 0 -> bus arrives empty at first stop, 
//            so there is nobody to get off

//RETURN: number of people still on the bus after the final stop -> after the last array
//        this number cannot be negative, i.e., should be >= 0

//EXAMPLE:
//number([[10,0],[3,5],[5,8]]) -> 5
//number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) -> 17

//PSEUDO CODE:
    //add up total number that got on the bus - totalGotOn
        //loop through each array pair and add up first elements
        //save result in totalGotOn
    //add up total number that got off the bus - totalGotOff
        //loop through each array pair and add up second elements
        //save result in totalGotOff
    //subtract totalGotOff from totalGotOn
    //return result

var number = function(busStops){
    let totalGotOn = 0;
    let totalGotOff = 0;

    for(let i = 0; i < busStops.length; i++){
        totalGotOn += busStops[i][0]; 
    }
    
    for(let i = 0; i < busStops.length; i++){
        totalGotOff += busStops[i][1]; 
    }
    
    return totalGotOn - totalGotOff;
}

console.log(number([[10,0],[3,5],[5,8]]));
