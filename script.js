function update(id, value) {
    document.getElementById(id).innerHTML=value;
}

function updateBoolean(id, value) {
    var element = document.getElementById(id);
    if (value === "true") {
	if (element.className === "left limitSwitchOff") {
	    element.className = "left limitSwitchOn";
	} else if (element.className === "right limitSwitchOff") {
	    element.classNAme = "right limitSwitchOn";
	} else if (element.className === "center limitSwitchOff") {
	    element.className = "center limitSwitchOn";
	}
    } else if (value === "false") {
	if (element.className === "left limitSwitchOn") {
	    element.className = "left limitSwitchOff";
	} else if (element.className === "right limitSwitchOn") {
	    element.className = "right limitSwitchOff";
	} else if (element.className === "center limitSwitchOn") {
	    element.className = "center limitSwitchOff";
	}
    }
}

function getSelectedAutonomous() {
    if (document.getElementById("NOTHING").checked) {
	return "NOTHING";
    } else if (document.getElementById("SPYBOT").checked) {
	return "SPYBOT";
    } else if (document.getElementById("ROUGH_TERRAIN").checked) {
	return "ROUGH_TERRAIN";
    } else if (document.getElementById("LOW_BAR").checked) {
	return "LOW_BAR";
    } else if (document.getElementById("ROCK_WALL").checked) {
	return "ROCK_WALL";
    } else {
	return "NOTHING";
    }
}

function refresh() {
    document.getElementById("forward").src = "http://roborio-1510-frc.local:1180";
    
    document.getElementById("shooter").src = "http://axis-camera.local/mjpeg";
}
