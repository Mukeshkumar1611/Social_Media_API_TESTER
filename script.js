// start.js

async function makeApiRequest(event) {
    const apiEndpoint = document.getElementById('apiEndpoint').value;
    const apiMethod = document.getElementById('apiMethod').value;
    const apiDataTextarea = document.getElementById('apiData');

    try {
        let apiData = apiDataTextarea.value.trim(); // Trim to remove leading/trailing white spaces

        try {
            apiData = JSON.parse(apiData);
        } catch (parseError) {
            console.error('Error parsing input as JSON:', parseError.message);
            // Handle parsing error as needed
        }

        const requestOptions = {
            method: apiMethod,
            headers: {
                'Content-Type': 'application/json',
            },

        };

        // Include body only if apiData is not empty
        if (apiData !== '') {
            requestOptions.body = JSON.stringify(apiData);
        }

        const response = await fetch(apiEndpoint, requestOptions);

        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }

        const responseData = await response.json();
        document.getElementById('responseOutput').textContent = JSON.stringify(responseData, null, 2);
    } catch (error) {
        console.error('Error during API request:', error.message);
    }
}
