'use strict';

{
  const img = document.getElementById('img');

  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      img.src = data.url;
    })
}