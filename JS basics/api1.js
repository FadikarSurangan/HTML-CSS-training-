async function callApisSequentially() {
  try {
    console.log("Calling API 1...");
    const response1 = await fetch("https://dummyjson.com/users/2");
    const data1 = await response1.json();
    console.log("Data from API 1:", data1);
  } catch (error) {
    console.error("API 1 failed:", error);
  }
 try {
    console.log("Calling API 2...");
    const response2 = await fetch("https://dummyjson.com/users/3");
    const data2 = await response2.json();
    console.log("Data from API 2:", data2);
  } catch (error) {
    console.error("API 2 failed :", error )
 }
 try {
    console.log("Calling API 3...");
    const response3 = await fetch("https://dummyjson.com/users/4");
    const data3 = await response3.json();
    console.log("Data from API 3:", data3);
  } catch (error) {
    console.error("API 3 failed :", error )
 }
 try {
    console.log("calling api4...");
    const response4 = await fetch("https://dummyjson.com/users/5");
    const data4 = await response4.json();
    console.log("Data from API 4:", data4);
  } catch (error) {
    console.error("API 4 failed :", error )
 }
  try {
    console.log("calling api5...");
    const response5 = await fetch("https://dummyjson.com/users/6");
    const data5 = await response5.json();
    console.log("Data from API 5:", data5);
  } catch (error) {
    console.error("API 5 failed :", error )
 }
}
callApisSequentially();


