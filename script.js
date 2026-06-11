const pianeti = [
["☉","Sole","20°01'","♊"],
["☽","Luna","27°50'","♈"],
["☿","Mercurio","14°26'","♋"],
["♀","Venere","27°38'","♋"],
["♂","Marte","17°26'","♉"],
["♃","Giove","26°05'","♋"],
["♄","Saturno","13°03'","♈"],
["♅","Urano","2°39'","♊"],
["♆","Nettuno","4°14'","♈"],
["♇","Plutone","5°13'","♒ ℞"]
];

const corpo = document.getElementById("corpo-tabella");

corpo.innerHTML = "";

pianeti.forEach(p => {

corpo.innerHTML += `
<tr>
<td class="pianeta">${p[0]} ${p[1]}</td>
<td class="grado">${p[2]}</td>
<td class="segno">${p[3]}</td>
</tr>
`;

});