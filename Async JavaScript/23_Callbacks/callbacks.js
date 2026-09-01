// // Regular function that does something
// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// // Function that takes another function as an argument
// function executeGreeting(callbackFn) {
//     callbackFn('John');
// }

// // Pass greet as a callback
// executeGreeting(greet);  // Outputs: Hello, John!

// function makeBreakfast() {
//     console.log('Starting breakfast preparation...');

//     setTimeout(() => {
//         console.log('1. Toasting bread...');

//         setTimeout(() => {
//             console.log('2. Bread is toasted! Adding butter...');

//             setTimeout(() => {
//                 console.log('3. Butter added! Making eggs...');

//                 setTimeout(() => {
//                     console.log('4. Eggs are ready! Breakfast is served!');
//                 }, 2000);  // Cooking eggs
//             }, 1000);  // Adding butter
//         }, 2000);  // Toasting
//     }, 1000);  // Initial preparation
// }

// makeBreakfast();

// function getUser(id, callback) {
//     console.log(`Fetching user ${id} from database...`);

//     // Simulate database delay
//     setTimeout(() => {
//         // Simulate a user object
//         const user = {
//             id: id,
//             name: 'John Doe',
//             email: 'john@example.com'
//         };

//         // Pass user data to callback
//         callback(user);
//     }, 1500);
// }

// function getUserPosts(userId, callback) {
//     console.log(`Fetching posts for user ${userId}...`);

//     setTimeout(() => {
//         // Simulate posts
//         const posts = [
//             { id: 1, title: 'Post 1' },
//             { id: 2, title: 'Post 2' }
//         ];

//         callback(posts);
//     }, 1500);
// }

// // Using our functions
// getUser(1, function(user) {
//     console.log('Got user:', user);

//     // Now get their posts
//     getUserPosts(user.id, function(posts) {
//         console.log('Got post:', posts[user.id]);

//         // What if we needed more data?
//         // We'd have to nest another callback...
//     });
// });

// Error handling with callbacks
let getUser = (id, successCallback, errorCallback) => {
  console.log(`Fetching user ${id} from database...`);

  setTimeout(() => {
    if (Math.random() > 0.5) {
      const user = {
        id: id,
        name: "kamal",
        email: "kamal@gmail",
      };
      successCallback(user);
    } else {
      errorCallback("Error: User not found");
    }
  },1000);
};

getUser(
  1,
  (user) => {
    console.log("Got user:", user);
  },
  (error) => {
    console.error(error);
  },
);
