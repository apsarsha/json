const API = `https://api.thecatapi.com/v1/breeds`;
const onApiSuccess = (apiResponse) => {
  return apiResponse.json();
};


const createCatCard = (item) => {
    
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    
    card.innerHTML = `
        <img src="${item.image?.url}" class="card-img-top" />
        <div class="card-body">
          <h5>${item.name}</h5>
        </div>
    `
    
    document.querySelector(".ui-container").appendChild(card);
    
  }

const onDataReceived = (data = []) => {
  console.log("::onDataReceived::", data);
  data.forEach(createCatCard)
}

fetch(API)
  .then( onApiSuccess )
  .then( onDataReceived )