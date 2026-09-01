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

let getUser = (id) => {
  console.log(`Fetching the user data ${id} from databases... 111`);

  return new Promise((resolve, reject) => {
    console.log(`Fetching the user data ${id} from databases...`);
    setTimeout(() => {
      if (Math.random() > 0.1) {
        const user = {
          id: id,
          username: `kamal`,
          pass: `kamal`,
        };
        resolve(user);
      }
      reject(`Error: User Not Found...`);
    }, 1000);
  });
};

getUser(1)
  .then((user) => console.log(`Got user,`, user))
  .catch((error) => console.log(error))
  .finally(() => console.log(`This is finally block`));
