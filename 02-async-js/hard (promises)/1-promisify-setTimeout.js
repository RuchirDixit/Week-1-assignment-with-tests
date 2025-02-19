/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        },5000);
      });
}

wait(5).then(()=>{
    console.log("5 seconds have passed");
}).catch((error)=>{
    console.error(error)
})