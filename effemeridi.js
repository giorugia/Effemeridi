const pianetiReali = [
  ["☉", "Sole", "SUN"],
  ["☽", "Luna", "MOON"],
  ["☿", "Mercurio", Astronomy.Body.Mercury],
  ["♀", "Venere", Astronomy.Body.Venus],
  ["♂", "Marte", Astronomy.Body.Mars],
  ["♃", "Giove", Astronomy.Body.Jupiter],
  ["♄", "Saturno", Astronomy.Body.Saturn],
  ["♅", "Urano", Astronomy.Body.Uranus],
  ["♆", "Nettuno", Astronomy.Body.Neptune],
  ["♇", "Plutone", Astronomy.Body.Pluto]
];

const segni = [
  "♈︎", // Ariete
  "♉︎", // Toro
  "♊︎", // Gemelli
  "♋︎", // Cancro
  "♌︎", // Leone
  "♍︎", // Vergine
  "♎︎", // Bilancia
  "♏︎", // Scorpione
  "♐︎", // Sagittario
  "♑︎", // Capricorno
  "♒︎", // Acquario
  "♓︎"  // Pesci
];

const corpo = document.getElementById("corpo-tabella");

function aggiornaEffemeridi() {
console.log("Aggiornamento:", new Date().toLocaleTimeString());
  const oggi = new Date();

  corpo.innerHTML = "";

  pianetiReali.forEach(p => {

    let lon;

    if (p[2] === "SUN") {
      lon = Astronomy.SunPosition(oggi).elon;
    }
    else if (p[2] === "MOON") {
      lon = Astronomy.EclipticGeoMoon(oggi).lon;
    }
    else {
      lon = Astronomy.EclipticLongitude(p[2], oggi);
    }

    const unOraDopo = new Date(
      oggi.getTime() + 60 * 60 * 1000
    );

    let lonDopo;

    if (p[2] === "SUN") {
      lonDopo = Astronomy.SunPosition(unOraDopo).elon;
    }
    else if (p[2] === "MOON") {
      lonDopo = Astronomy.EclipticGeoMoon(unOraDopo).lon;
    }
    else {
      lonDopo = Astronomy.EclipticLongitude(
        p[2],
        unOraDopo
      );
    }

    let velocita = lonDopo - lon;

    if (velocita < -180) velocita += 360;
    if (velocita > 180) velocita -= 360;
    console.log(p[1], velocita);
    const retrogrado =
    velocita < 0 ? " ℞" : "";

    const indiceSegno =
      Math.floor(lon / 30);

    const gradoNelSegno =
      lon % 30;

    const gradi =
      Math.floor(gradoNelSegno);

    const minuti =
      Math.floor(
        (gradoNelSegno - gradi) * 60
      );

    corpo.innerHTML += `
      <tr>
<td class="pianeta">
  <span class="simbolo-pianeta pianeta-${p[1]}">
    ${p[0]}
  </span>
  ${p[1]}${retrogrado}
</td>        <td class="grado">${gradi}°${minuti}'</td>
       <td class="segno">
  <span class="simbolo-segno segno-${indiceSegno}">
    ${segni[indiceSegno]}
  </span>
</td>
        <td class="velocita">
        ${(velocita * 3600).toFixed(4)}"
        </td>
      </tr>
    `;
  });
}

aggiornaEffemeridi();

setInterval(
  aggiornaEffemeridi,
  10000
);