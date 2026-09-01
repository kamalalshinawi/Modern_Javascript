let toastBread = () => {
  return new Promise((resolve, reject) => {
    console.log("Toast the bread");
    let timeData = new Date().getFullYear();
    setTimeout(() => {
      //  in success case we will call resolve
      resolve(`Toast is ready at ${timeData} `);

      // in failure case we will call reject
      reject("Toast is burnt");
    }, 1000);
  });
};

toastBread()
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
