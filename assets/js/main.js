// When button is clicked, search NASA images
document.querySelector('#curiosity').addEventListener('click', getCuriosity);
document.querySelector('#spirit').addEventListener('click', getSpirit);
document.querySelector('#opportunity').addEventListener('click', getOpportunity);


// Get the images associated with each rover
function getCuriosity() {
    const userDate = document.querySelector('input').value;
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${userDate}&api_key=DEMO_KEY`;

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      if (data.photos.length === 0) {
        document.querySelector('#search-result-text').innerText = 'No results. Please try a different date.'
      }
      
      else if (data.photos.length > 0) {
        document.querySelector('#imageOne').src = data.photos[0].img_src;
        document.querySelector('#imageTwo').src = data.photos[1].img_src;
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function getSpirit() {
  const userDate = document.querySelector('input').value;
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=${userDate}&api_key=DEMO_KEY`;

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    if (data.photos.length === 0) {
      document.querySelector('#search-result-text').innerText = 'No results. Please try a different date.'
    }
    
    else if (data.photos.length > 0) {
      document.querySelector('#imageOne').src = data.photos[0].img_src;
      document.querySelector('#imageTwo').src = data.photos[1].img_src;
      }
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}

function getOpportunity() {
  const userDate = document.querySelector('input').value;
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=${userDate}&api_key=DEMO_KEY`;

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    if (data.photos.length === 0) {
      document.querySelector('#search-result-text').innerText = 'No results. Please try a different date.'
    }
    
    else if (data.photos.length > 0) {
      document.querySelector('#imageOne').src = data.photos[0].img_src;
      document.querySelector('#imageTwo').src = data.photos[1].img_src;
      }
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}
