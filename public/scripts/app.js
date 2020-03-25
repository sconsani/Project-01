// GET ALL DONUT STORES
fetch(`${API_BASE}/`)
  .then((stream) => stream.json())
  .then(res => render(res))
  .catch((err) => console.log(err));

// TEMP API CALL
// render(TEMP_CITIES);

function render(citiesArray) {
  console.log('Rendering Cities Array ', citiesArray)
  const cityTemplates = citiesArray.map((city) => getCityTemplate(city)).join('');
  cities.insertAdjacentHTML('beforeend', cityTemplates);
}

function getCityTemplate(city) {
  console.log('Getting City Template');
  return `
    <div class="col-md-4 mb-4">
      <div id="${city._id}" class="card">
        <img src="${city.image}" class="card-img-top" alt="${city.name}" />
        <div class="card-body">
          <h5 class="card-title">
            ${city.name}
            (${city.posts.length} ${city.posts.length === 1 ? ' post' : ' posts'})
          </h5>
          <p class="card-text">${city.description}</p>
          <a href="/cities/${city._id}" class="btn btn-primary float-right">View</a>
        </div>
      </div>
    </div>
  `;
}