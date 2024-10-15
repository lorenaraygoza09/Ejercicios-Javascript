console.log("USERS 1 Y 2");

/* CARTAS PLACEHOLDER */
const cards = [];
for(let i = 0; i < 6; i++) {
    cards.push(`
    <div class="card m-5 col-4">
        <div class="card" aria-hidden="true">
            <img src="..." class="card-img-top">
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                    <p class="placeholder col-6" id="cartas">
                        <span>jn</span>
                    </p>
                </h5>
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-7"></span>
                </p>
            </div>
        </div>
    </div>
    `);
}

/* placeholder cards cargando */
const cardsPlaceholder = document.getElementById("cartas");
cardsPlaceholder.innerHTML = cards.join("");

/* cards con usuarios */
const rellenarCards = (usuarios) => {
    const cartasSpan = document.getElementById('cartas');
    cartasSpan.innerHTML = "";
    usuarios.forEach((usuario) => {
        const newCard = `
        <div class="card m-5 col-4">
          <img src="${usuario.avatar}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${usuario.first_name}</h5> 
            <h6  class="card-subtitle">${usuario.last_name}</h6>
            <p class="card-text">ID: ${usuario.id}</p>
            <p class="card-text">Correo: ${usuario.email}</p>
          </div>
        </div>
      `;
        cartasSpan.innerHTML += newCard;
    });
};

/* imprimir cards con tiempo */
const imprimirCards = (usuarios) => {
    //se asigna el tiempo, 2 seg ya que las paginas tienen 3 seg de retraso
    setTimeout(() => rellenarCards(usuarios), 2000);
};
// variable para la obtencion de los datos con async y await
const datos = async (url) => {
    const resolve = await fetch(url);
    const users = await resolve.json();
    imprimirCards(users.data);
}
//url con los datos de los usuarios
datos("https://reqres.in/api/users?page=2");