document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.search-box');
    const input = form.querySelector('input[type="search');
    const resultContainer = document.querySelector('.results');
    const resultCounter = document.querySelector('header p');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm =  input.ariaValueMax;
        if (searchTerm) {
            searchCSV(searchTerm);
        }
    });

    function searchCSV(searchTerm) {
        const url = '';
        fetch(url).then(respone => respone.json()).then (data => {
            displayResults(data.query.search);
        }).catch(error => alert('Error : ' + error));
    }

    function displayResults(results) {
        resultContainer.innerHTML = '';
        resultCounter.textContent = `Results Count : ${results.length}`;
        results.forEach(results => {
            const resultsElement =document.createElement('div');
            resultsElement.className = 'result';
            resultsElement.innerHTML = `
                <h3>${result.title}</h3>
                <p>${result.snippet}</p>
                <a href = "link=${result.pageid}" target = "_blank">Read More</a>
            `;
            resultContainer.appendChild(resultsElement);
        });
    }
});