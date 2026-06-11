const oggi = new Date();

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
  "♈","♉","♊","♋","♌","♍",
  "♎","♏","♐","♑","♒","♓"
];

const corpo = document.getElementById("corpo-tabella");

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

  const indiceSegno = Math.floor(lon / 30);

  const gradoNelSegno = lon % 30;

  const gradi = Math.floor(gradoNelSegno);

  const minuti = Math.floor(
    (gradoNelSegno - gradi) * 60
  );

  corpo.innerHTML += `
    <tr>
      <td class="pianeta">${p[0]} ${p[1]}</td>
      <td class="grado">${gradi}°${minuti}'</td>
      <td class="segno">${segni[indiceSegno]}</td>
      <td class="velocita">--</td>
    </tr>
  `;
});