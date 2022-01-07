//En este Script lo que vamos ha hacer es llamar a la API
//Pera ello lo primero es crear la query con los datos que nos va a ofrecer, en este caso sera el nuero de resouestas que queresmos
//y el titulo de los animes que hemos buscado

var query = `
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      perPage
    }
    media (id: $id, search: $search) {
      id
      title {
        romaji
      }
    }
  }
}
`;

//En esta función llamaremos a la API con su URL y pediremos los datos necesarios,
//ademas creamos los handlers necerarios para el funcionamiento del mismo, lo que nos dara
//el control sobre cosascomo la respuesta o los errores de la promesa.
function llamarApi() {
  var variables = {
    search: document.getElementById("busqueda").value,
    page: 1,
    perPage: document.getElementById("numero").value
  };
  var url = 'https://graphql.anilist.co',
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: variables
      })
    };
  fetch(url, options).then(handleResponse)
    .then(handleData)
    .catch(handleError);
}



function handleResponse(response) {
  return response.json().then(function (json) {
    return response.ok ? json : Promise.reject(json);
  });
}

function handleData(data) {
  console.log(data.data.Page.media);
  let lista=document.getElementById("lista")
  document.getElementById("lista").innerHTML="";
  console.log(lista)
  data.data.Page.media.forEach(element => {
    let anime=document.createElement("li")
    anime.append(element.title.romaji)
    lista.append(anime)
  });
  document.getElementById("listaA").append(lista)
}

function handleError(error) {
  alert('Error, check console');
  console.error(error);
}



