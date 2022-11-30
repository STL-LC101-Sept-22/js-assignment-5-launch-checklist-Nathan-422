// import {formSubmission} from "./scriptHelper"
// Write your JavaScript code here!

console.log("Scripts working");

window.addEventListener("load", function () {
  console.log("Page loaded");
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()

  
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


  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const pilotName = document.querySelector("input[name='pilotName']").value;
    const copilotName = document.querySelector("input[name='copilotName']").value;
    const fuelLevel = document.querySelector("input[name='fuelLevel']").value;
    const cargoMass = document.querySelector("input[name='cargoMass']").value;

    console.log(
      `
        Pilot: ${pilotName}
        Co-pilot: ${copilotName}
        Fuel: ${fuelLevel}
        Mass: ${cargoMass}
        `
    );

    // TODO: verify inputs are correct values

    // TODO: set html elements with status

    // TODO:
  });
});
