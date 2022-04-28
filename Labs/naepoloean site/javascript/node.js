// let variable = "SomethingLikeThis" 

// const thisIsAFunction = () => {
//     console.log("Function Excuted")
// }

const goGetData = () => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
     .then(json => console.log(json))
}


