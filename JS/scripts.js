let currentTraining = 1;
let numberTraining = 3;

let nextTraining = () => {
    current (training < numbertraining)
    document.getElementById("training"+currentTraining).style.display = "none";
    document.getElementById("training"+(currentTraining+1)).style.display = "block";
    currentTraining++;
}
let prevTraining = () => {
    current (training > numbertraining)
    document.getElementById("training"+currentTraining).style.display = "none";
    document.getElementById("training"+(currentTraining-1)).style.display = "block";
    currentTraining--;
}

if (training>numberTraining) { 
    style.display("next")
  } else {
    style.display("block")
  }

