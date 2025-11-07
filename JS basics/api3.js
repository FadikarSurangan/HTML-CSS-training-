async function callApisInParallel() {
  const apiCall1 = fetch('https://dummyjson.com/users/1');
  const apiCall2 = fetch('https://dummyjson.com/users/2'); 
  const apicall3 = fetch('https://dummyjson.com/users/3');

  try {
    const [response1, response2,response3] = await Promise.all([apiCall1, apiCall2,apicall3]);

    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();

    console.log('Data from API 1:', data1);
    console.log('Data from API 2:', data2);
    console.log('Data from API 3:', data3);
  } catch (error) {
    console.error('One or more API calls failed:', error);
  }
}

callApisInParallel();