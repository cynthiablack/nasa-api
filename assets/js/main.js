// When button is clicked, search NASA images
document.querySelector('#curiosity').addEventListener('click', getCuriosity);
document.querySelector('#spirit').addEventListener('click', getSpirit);
document.querySelector('#opportunity').addEventListener('click', getOpportunity);


// Get the images associated with each rover
function getCuriosity() {
    const userDate = document.querySelector('input').value;
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${userDate}&api_key=DBwjcbbJSpj4f7gY88ljgf2HJKeD0nC8wGLqBGdF`;

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function getSpirit() {
  // Grab user input
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=${userDate}&api_key=DEMO_KEY`;
  console.log(`Spirit ${url}`)
}

function getOpportunity() {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=${userDate}&api_key=DEMO_KEY`;
  console.log(`Opportunity ${url}`)
}
/*

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=DBwjcbbJSpj4f7gY88ljgf2HJKeD0nC8wGLqBGdF&date=${choice}`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type == 'image') {
          document.querySelector('img').src = data.hdurl
        }
        else if (data.media_type == 'video') {
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('#explanation').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
*/