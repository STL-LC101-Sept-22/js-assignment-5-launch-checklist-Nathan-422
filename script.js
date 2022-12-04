/**
 * Author: Nathan Wright
 * Class: lc_101
 * Section: Sept 2022
 * Instructor: Carrie Jones
 */

import helpers from 'scriptHelper.js';

 window.addEventListener("load", function () {

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = helpers.myFetch();

  listedPlanetsResponse.then(function (result) {
      listedPlanets = result;
      // console.log(listedPlanets);
  }).then(function () {
      // console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      const planet = helpers.pickPlanet(listedPlanets);
      helpers.addDestinationInfo(
        document,
        planet.name,
        planet.diameter,
        planet.star,
        planet.distance,
        planet.moons,
        planet.image
        );
  })

  // problem solving code
  document.getElementById("faultyItems").style.visibility = "hidden";

  const form = document.querySelector("form[data-testid='testForm']");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const faultyItems = document.getElementById("faultyItems");
    const pilotName = document.querySelector("input[name='pilotName']").value;
    const copilotName = document.querySelector("input[name='copilotName']").value;
    const fuelLevel = document.querySelector("input[name='fuelLevel']").value;
    const cargoMass = document.querySelector("input[name='cargoMass']").value;

    helpers.formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);
  });
});
