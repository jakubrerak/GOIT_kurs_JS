function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "New Heading";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

function mojaFunkcja() {
  const clients = ["Mango", "Poly", "Ajax"];

  for (let i = 0; i < clients.length; i += 1) {
    console.log(clients[i]);
  }
}
