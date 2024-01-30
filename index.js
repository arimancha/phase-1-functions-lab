// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation < 42){
        return 42 - pickupLocation
    } else if (pickupLocation > 42){
        return pickupLocation - 42
    }
    //returns the number of blocks given a value
  }

  function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264 ;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
   if (start < destination){
    return (destination - start) * 264
   } else{
    return (start - destination) * 264
    //returns the number of feet traveled
  }
  }

  function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    
    if (distance <= 400){
        return 0//returns the fare for the customer
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}