let myPromise = new Promise((resolve, reject) => {
    const myAge = 18;

    if (myAge >= 18){
        resolve("User is adult");
    }else{
        reject("User npt adult");
    }
});
myPromise.then((res) => {
    console.log(res);
})