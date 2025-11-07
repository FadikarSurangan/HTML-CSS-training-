    function fetchApi1Data() {
        return fetch('https://dummyjson.com/users/1')
            .then(response => response.json());
    }

    function fetchApi2Data() {
        return fetch('https://dummyjson.com/users/1')
            .then(response => response.json());
    }
        const apiPromises = [
        fetchApi1Data(),
        fetchApi2Data()
    ];
        Promise.all(apiPromises)
        .then(results => {
            const dataFromApi1 = results[0];
            const dataFromApi2 = results[1];
            console.log('Data from API 1:', dataFromApi1);
            console.log('Data from API 2:', dataFromApi2);
        })
        .catch(error => {
            console.error('One of the API calls failed:', error);
        });
fetchApi1Data();
fetchApi2Data();
