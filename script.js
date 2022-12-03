/**
 * Author: Nathan Wright
 * Class: lc_101
 * Section: Sept 2022
 * Instructor: Carrie Jones
 */

window.addEventListener("load", function () {

  let listedPlanets;
  let listedPlanetsResponse = myFetch();

  console.log(listedPlanetsResponse)

  listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    const planet = pickPlanet(listedPlanets);
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

    formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);
  });
});
