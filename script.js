// import {formSubmission} from "./scriptHelper"

console.log("Scripts working");

window.addEventListener("load", function () {
  console.log("Page loaded");
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()

  /*
  let listedPlanetsResponse;
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
*/

  const form = document.querySelector("form[data-testid='testForm']");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const faultyItems = document.getElementById("faultyItems");
    const pilotName = document.querySelector("input[name='pilotName']").value;
    const copilotName = document.querySelector("input[name='copilotName']").value;
    const fuelLevel = document.querySelector("input[name='fuelLevel']").value;
    const cargoMass = document.querySelector("input[name='cargoMass']").value;
    
    // check for all forms to have a value
    formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);
    
    // TODO: verify inputs are correct values
    
    // TODO: set html elements with status

    console.log(
`Pilot: ${pilotName}
Co-pilot: ${copilotName}
Fuel: ${fuelLevel}
Mass: ${cargoMass}`
    );


    // TODO:
  });
});
