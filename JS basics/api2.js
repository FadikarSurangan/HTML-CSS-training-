function callApisSequentially() {
  console.log("Calling API 1...");

  fetch("https://dummyjson.com/users/1")
    .then((response1) => response1.json())
    .then((data1) => {
      console.log("Data from API 1:", data1);

      console.log("Calling API 2...");
      return fetch("https://dummyjson.com/users/2");
    })
    .then((response2) => response2.json())
    .then((data2) => {
      console.log("Data from API 2:", data2);

      console.log("Calling API 3...");
      return fetch("https://dummyjson.com/users/3");
    })
    .then((response3) => response3.json())
    .then((data3) => {
      console.log("Data from API 3:", data3);

      console.log("Calling API 4...");
      return fetch("https://dummyjson.com/users/4");
    })
    .then((response4) => response4.json())
    .then((data4) => {
      console.log("Data from API 4:", data4);

      console.log("Calling API 5...");
      return fetch("https://dummyjson.com/users/5");
    })
    .then((response5) => response5.json())
    .then((data5) => {
      console.log("Data from API 5:", data5);
      console.log("All APIs called sequentially.");
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

callApisSequentially();
