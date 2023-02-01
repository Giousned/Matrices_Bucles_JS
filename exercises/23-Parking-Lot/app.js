let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here

function getParkingLotState (param){
  var state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots:0
  }  
    for (let i=0;i<param.length;i++){
     
      for (let j=0;j<param[i].length;j++){

        if (param[i][j]===2){state.availableSlots = state.availableSlots +1;}
        else if (param[i][j]===1){state.occupiedSlots = state.occupiedSlots +1;}
          state.totalSlots = state.availableSlots + state.occupiedSlots;
      }

    }
  return state;
}

console.log(getParkingLotState(parking_state))

/* SOLUCION DE ELLOS
function getParkingLotState(param) {
  let state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
  }
  for (let i = 0; i < param.length; i++) {
    for (let x = 0; x < param[i].length; x++) {
      if (param[i][x] === 2) {

        state.availableSlots += 1
        state.totalSlots += 1
      }
      else if (param[i][x] === 1) {
        state.occupiedSlots += 1
        state.totalSlots += 1
      }
    }
  }
  return state
}
*/