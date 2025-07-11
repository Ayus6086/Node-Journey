fetch("https://fakestoreapi.com/products")
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("running this line always");
});