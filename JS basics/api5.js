const urls = [
  'https://dummyjson.com/users/1',
  'https://dummyjson.com/users/2',
  'https://dummyjson.com/users/3'
];

const promises = urls.map(url =>
  fetch(url).then(response => response.json())
);

Promise.all(promises)
  .then(results => {
    console.log('All API calls completed successfully:', results);
    const [data1, data2, data3] = results;
    console.log('Data from API 1:', data1);
    console.log('Data from API 2:', data2);
    console.log('Data from API 3:', data3);
  })
  .catch(error => {
    console.error('Error during parallel API calls:', error);
  });