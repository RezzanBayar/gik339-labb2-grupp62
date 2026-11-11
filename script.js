// Variabel 1: Chekbox
const divStyle = document.getElementById("divStyle");

// Variabel 2: Alla textfält
const textFields = document.getElementsByClassName("textfield");

// Variabel 3: Knapp för att ta bort
const removeButton = document.getElementById("removeButton");

// Variabel 4: Div-elementet
const targetDiv = document.getElementById("targetDiv");

// Uppgift 5: Skapa en funktion
function handleInput(e) {
  console.log(e.target);
  if (e.target.id === "content") {
    targetDiv.innerHTML = e.target.value;
  }
}

// Uppgift 6: Eventlyssnare till chekboxen
divStyle.addEventListener("change", function () {
  const color = document.getElementById("color").value.toLowerCase();

  const colors = {
    rosa: "pink",
    röd: "red",
    brun: "brown",
    grå: "gray",
    blå: "blue",
    grön: "green",
    gul: "yellow",
    orange: "orange",
    lila: "purple",
    svart: "black",
    vit: "white",
  };
  targetDiv.style.backgroundColor = colors[color] || color;
});

// Uppgift 6:Eventlyssnare till textfälten
for (const field of textFields) {
  field.addEventListener("input", handleInput);
}

// Uppgift 7: Eventlyssnare till knappen
removeButton.addEventListener("click", function () {
  targetDiv.remove();
});
