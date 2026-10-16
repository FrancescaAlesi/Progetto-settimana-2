/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/

/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const prodotti = [
  {
    nome: "T-Shirt Basic cotone",
    categoria: "T-Shirt",
    prezzo: 19.9,
    rating: 3,
    immagine: "maglietta.png",
    disponibile: true,
  },

  {
    nome: "Zaino porta Pc",
    categoria: "Borsa",
    prezzo: 25.99,
    rating: 4,
    immagine: "zaino.png",
    disponibile: false,
  },

  {
    nome: "Occhiali da sole graduati",
    categoria: "Accessori",
    prezzo: 54.5,
    rating: 5,
    immagine: "occhiali.png",
    disponibile: true,
  },

  {
    nome: "Jeans slim scuri ",
    categoria: "Pantaloni",
    prezzo: 25.9,
    rating: 5,
    immagine: "pantalone.png",
    disponibile: true,
  },

  {
    nome: "Felpa con cappuccio Oversize",
    categoria: "felpe",
    prezzo: 45.0,
    rating: 4,
    immagine: "felpe.png",
    disponibile: false,
  },

  {
    nome: "New balance 9060",
    categoria: "Scarpe",
    prezzo: 190.0,
    rating: 5,
    immagine: "scarpe.png",
    disponibile: false,
  },

  {
    nome: "Cintura di pelle",
    categoria: "Accessori",
    prezzo: 19.9,
    rating: 4,
    immagine: "cintura.png",
    disponibile: false,
  },

  {
    nome: "Giacca impermeabile",
    categoria: "Giacche",
    prezzo: 89.9,
    rating: 3,
    immagine: "giacca.png",
    disponibile: true,
  },

  {
    nome: "Stivali di pelle",
    categoria: "Scarpe",
    prezzo: 45.5,
    rating: 3,
    immagine: "scarpe.png",
    disponibile: false,
  },

  {
    nome: "T-Shirt a collo alto",
    categoria: "T-Shirt",
    prezzo: 15.9,
    rating: 4,
    immagine: "maglietta.png",
    disponibile: true,
  },

  {
    nome: "Pantaloni felpati",
    categoria: "Pantaloni",
    prezzo: 19.9,
    rating: 3,
    immagine: "pantaloni.png",
    disponibile: true,
  },

  {
    nome: "Camicia di lino a manica lunga",
    categoria: "Camicia",
    prezzo: 14.99,
    rating: 3,
    immagine: "camicia.png",
    disponibile: false,
  },
];

/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-2----`);

function formattaPrezzo(prezzo) {
  return "€ " + prezzo.toFixed(2).replace(".", ",");
}

for (let i = 0; i < prodotti.length; i++) {
  console.log(prodotti[i].nome + ": " + formattaPrezzo(prodotti[i].prezzo));
}

/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-3----`);

function stelline(rating, max = 5) {
  let risultato = "";

  for (let i = 1; i <= max; i++) {
    if (i <= rating) {
      risultato += "★";
    } else {
      risultato += "☆";
    }
  }
  return risultato;
}

for (let i = 0; i < prodotti.length; i++) {
  const prodotto = prodotti[i];
  const stelle = stelline(prodotto.rating);

  console.log(prodotto.nome + ": rating " + prodotto.rating + " → " + stelle);
}

/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-4----`);

function perCategoria(categoriaScelta) {
  let risultati = [];

  for (let i = 0; i < prodotti.length; i++) {
    if (prodotti[i].categoria === categoriaScelta) {
      risultati.push(prodotti[i]);
    }
  }
  return risultati;
}

console.log(perCategoria("Accessori"));

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-5----`);

function prodottiDisponibili() {
  let risultati = [];

  for (let i = 0; i < prodotti.length; i++) {
    if (prodotti[i].disponibile === true && prodotti[i].rating >= 3) {
      risultati.push(prodotti[i]);
    }
  }
  return risultati;
}

console.log(prodottiDisponibili());

/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-6----`);

function generaTabellaProdotti(lista, tableId) {
  const tabella = document.getElementById(tableId);
  if (!tabella) return;

  tabella.innerHTML = "";

  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>NOME</th>
      <th>CATEGORIA</th>
      <th>PREZZO</th>
      <th>RATING</th>
    </tr>
  `;
  tabella.appendChild(thead);

  const tbody = document.createElement("tbody");

  for (let i = 0; i < lista.length; i++) {
    const item = lista[i];

    const tr = document.createElement("tr");

    const stellinePiene = "★".repeat(item.rating);
    const stellineVuote = "☆".repeat(5 - item.rating);
    const ratingStelle = `${stellinePiene}${stellineVuote}`;

    tr.innerHTML = `
      <td>${item.nome}</td>
      <td>${item.categoria}</td>
      <td>€ ${item.prezzo}</td>
      <td class="col-rating">${ratingStelle}</td>
    `;

    tbody.appendChild(tr);
  }

  tabella.appendChild(tbody);

  const tfoot = document.createElement("tfoot");
  tfoot.innerHTML = `
    <tr>
      <td colspan="4">Totale prodotti = ${lista.length}</td>
    </tr>
  `;
  tabella.appendChild(tfoot);
}

console.log(generaTabellaProdotti(prodotti, "tabella-prodotti"));

/* --------------------------------------------------------------

/* EXTRA - VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA - VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA - VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA - VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
