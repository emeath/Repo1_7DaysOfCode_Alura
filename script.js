'use strict';

(_ => {
  const searchLabel = document.querySelector('#movie-name');
  const searchButton = document.querySelector('#movie-search-icon');
  const myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  let apiKey = null;
  searchButton.addEventListener('click', _ => {
    if (!apiKey) {
      apiKey = prompt('Insira sua chave de API IMDb', 'Chave aqui');
      if (!apiKey) {
        return;
      }
    }
    if (!searchLabel.value) return;

    const uri = `https://imdb-api.com/pt-BR/API/SearchMovie/${apiKey}/${searchLabel.value}`;
    fetch(uri, requestOptions)
      .then(response => response.json())
      .then(refreshList)
      .catch(error => alert(`Erro na requisição amigão ${error}`));
  });

  function refreshList(json) {
    const { results } = json;
    const movieContainer = document.querySelector('#movie-container');
    const movies = movieContainer.children;
    Array.from(movies).forEach(item => item.remove());
    results.forEach(item => {
      const movieComponent = `
        <div class="movie">
          <div class="movie-informations">
            <div class="movie-image">
              <img src="${item['image']}" alt="|||Desc alternativa imagem aqui|||"/>
            </div>
            <div class="movie-text">
              <h4>${item['title']} ${item['description']}</h4>
              <div class="rating-favorites">
                <div class="rating">
                  <img src="images/star.png" alt="Star Icon"/>
                  <span>&#x1F449;&#127996 <i>8.0 Nota aqui (Tem que buscar de outro EndPoint)<i/></span>
                </div>
                <div class="favorite">
                  <img src="images/heart.svg" alt="Star Icon"/>
                  <span>Favoritar</span>
                </div>
              </div>
            </div>
          </div>
          <div class="movie-description">
            <span>&#x1F449;&#127996; <i>Sinopse  Aqui (Tem que buscar de outro EndPoint)<i/></span>
          </div>
        </div>
      `;
      movieContainer.insertAdjacentHTML('beforeend', movieComponent);
    });
  }
})();
