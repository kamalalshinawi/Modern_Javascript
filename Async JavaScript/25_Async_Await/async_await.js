let getUserData =  (id) => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching user from database with id ${id}...`);
    setTimeout(() => {
      if (id < 0) {
        reject(new Error(`InValid user id`, id));
      } else {
        resolve({
          id: id,
          name: "kamal",
        });
      }
    }, 1000);
  });
};

let fetchUserData = async (id) => {
    try{
        let user = await getUserData(id);
        console.log(`Got user data:`, user);
    }
    catch(error){
        console.log(error.message);
    }
}

fetchUserData(1); // Valid user id
fetchUserData(-1); // Invalid user id