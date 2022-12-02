// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  // Here is the HTML formatting for our mission target div.
  /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty"
  } else if (isNaN(testInput)) {
    return "Not a Number"
  } else {
    return "Is a Number"
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  // console.log(list.lastElementChild)

  const pilotCheck = validateInput(pilot) 
  const copilotCheck = validateInput(copilot) 
  const fuelCheck =  validateInput(fuelLevel) 
  const cargoCheck = validateInput(cargoLevel)

    if (
        pilotCheck === "Empty" ||
        copilotCheck === "Empty" ||
        fuelCheck === "Empty" ||
        cargoCheck === "Empty"
        ) {
            alert("All fields are required!")
        }
        else if (
            pilotCheck === "Is a Number" ||
            copilotCheck === "Is a Number" ||
            fuelCheck === "Not a Number" ||
            cargoCheck === "Not a Number"
        ) {
            alert("Make sure to enter valid information for each field!")
        }
        else {
            const olPilotElement = document.getElementById("pilotStatus")
            const olCopilotElement = document.getElementById("copilotStatus")
            const olFuelElement = document.getElementById("fuelStatus")
            const olCargoElement = document.getElementById("cargoStatus")


            olPilotElement.innerHTML = `Pilot ${pilot} is ready for launch`
            olCopilotElement.innerHTML = `Co-pilot ${copilot} is ready for launch`

            const fuelReady = fuelLevel >= 10000
            const fuelMessage = fuelReady ? 
            "Fuel level high enough for launch" : "Fuel level too low for launch"
            olFuelElement.innerHTML = fuelMessage
            
            
            const cargoReady = cargoLevel <= 10000
            const cargoMessage = cargoReady ? 
            "Cargo mass low enough for launch" : "Cargo mass too heavy for launch"
            olCargoElement.innerHTML = cargoMessage

            const launchMessage = document.getElementById("launchStatus")
            if (fuelReady && cargoReady) {
                launchMessage.innerHTML = "Shuttle is Ready for Launch"
                launchMessage.style.color = "green"
            } else {
                launchMessage.innerHTML = "Shuttle Not Ready for Launch"
                launchMessage.style.color = "red"
            }

            list.style.visibility = "visible"

        }

  
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
