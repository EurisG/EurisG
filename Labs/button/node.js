const getPics = () => {
    URL = "https://jasonplaceholder.typicose.com/photos"
}

fetch("https://jasonplaceholder.typicose.com/photos")
 .then(res => res.json())
  .then(data => console.log(data))