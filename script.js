document.getElementById('getDataButton').addEventListener('click', fetchData);

function fetchData() {
    const responseContainer = document.getElementById('response');
    responseContainer.innerHTML = 'Loading...'; // Show loading text while fetching data

    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            responseContainer.innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.body}</p>
            `;
        })
        .catch(error => {
            responseContainer.innerHTML = `Error: ${error.message}`;
        });
}
