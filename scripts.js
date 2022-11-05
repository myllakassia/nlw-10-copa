function createGame(player1, hour, player2) {
  return `
  
  <li>
    
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong> ${hour} </strong>
      <img src="assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
    `;
}

let delay = -0.3;

function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
  <h2>${date} <span>${day}</span>  </h2>
  <ul>
    ${games}
  </ul>
</div>
    
    `;
}

document.querySelector("#cards").innerHTML =
  createCard(
    "Fase de grupo - 20/11",
    "domingo",
    createGame("catar", "13:00", "ecuador")
  ) +
  createCard(
    "Fase de grupo - 21/11",
    "segunda-feira",
    createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "netherlands") +
      createGame("united-states", "16:00", "wales")
  ) +
  createCard(
    "Fase de grupo - 22/11",
    "terça-feira",
    createGame("argentina", "07:00", "saudi-arabia") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "australia")
  ) +
  createCard(
    "Fase de grupo - 23/11",
    "quarta-feira",
    createGame("marocco", "07:00", "croatia") +
      createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costa-rica") +
      createGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "Fase de grupo - 24/11",
    "quinta-feira",
    createGame("swaziland", "07:00", "cameron") +
      createGame("uruguai", "10:00", "south-korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "Fase de grupo - 25/11",
    "sexta-feira",
    createGame("wales", "07:00", "iran") +
      createGame("catar", "10:00", "senegal") +
      createGame("netherlands", "13:00", "ecuador") +
      createGame("england", "16:00", "united-states")
  ) +
  createCard(
    "Fase de grupo - 26/11",
    "sábado",
    createGame("tunisia", "07:00", "australia") +
      createGame("poland", "10:00", "saudi-arabia") +
      createGame("france", "13:00", "denmark") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "Fase de grupo - 27/11",
    "domingo",
    createGame("japan", "07:00", "costa-rica") +
      createGame("belgium", "10:00", "marocco") +
      createGame("croatia", "13:00", "canada") +
      createGame("spain", "16:00", "germany")
  ) +
  createCard(
    "Fase de grupo - 28/11",
    "segunda-feira",
    createGame("cameron", "07:00", "serbia") +
      createGame("south-korea", "10:00", "ghana") +
      createGame("brazil", "13:00", "swaziland") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "Fase de grupo - 29/11",
    "terça-feira",
    createGame("ecuador", "12:00", "senegal") +
      createGame("netherlands", "12:00", "catar") +
      createGame("iran", "16:00", "united-states") +
      createGame("wales", "16:00", "england")
  ) +
  createCard(
    "Fase de grupo - 30/11",
    "quarta-feira",
    createGame("tunisia", "12:00", "france") +
      createGame("australia", "12:00", "denmark") +
      createGame("poland", "16:00", "argentina") +
      createGame("saudi-arabia", "16:00", "mexico")
  ) +
  createCard(
    "Fase de grupo - 01/12",
    "quinta-feira",
    createGame("croatia", "12:00", "belgium") +
      createGame("canada", "12:00", "marocco") +
      createGame("japan", "16:00", "spain") +
      createGame("costa-rica", "16:00", "germany")
  ) +
  createCard(
    "Fase de grupo - 02/12",
    "sexta-feira",
    createGame("south-korea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguai") +
      createGame("serbia", "16:00", "switzerland") +
      createGame("cameron", "16:00", "brazil")
  );
