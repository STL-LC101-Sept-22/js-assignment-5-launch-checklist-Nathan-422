/**
 * Author: Nathan Wright
 * Class: lc_101
 * Section: Sept 2022
 * Instructor: Carrie Jones
 */

window.addEventListener("load", function () {

  let listedPlanets;
  let listedPlanetsResponse = myFetch();
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()

  listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    const planet = pickPlanet(listedPlanets);
    // console.log(planet);
    addDestinationInfo(
      document,
      planet.name,
      planet.diameter,
      planet.star,
      planet.distance,
      planet.moons,
      planet.image
    );
  });

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
