document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.button');
    const form = document.querySelector('.search-box');
    const input = form.querySelector('input[type="search');
    const resultContainer = document.querySelector('.result');
    const resultCounter = document.querySelector('header p');

    let data = [];
    form.addEventListener('.button', function(event) {
        event.preventDefault();
        const searchTerm =  input.ariaValueMax;
        if (searchTerm) {
            searchCSV(searchTerm);
        }
    });

    async function loadData() {
        const url = 'chuyen_khoan.csv'
        try {
            const response = await fetch(url);
            const text = await response.text();
            parseCSV(text);
        }
        catch(error) {
            console.error("Loi tai du lieu ");
        }
    }

    function parseCSV(csv) {
        const lines = csv.split("\n");
        const headers = lines[0].split(",");

        data = lines.slice(1).map(line => {
            const value = line.split(",");
            let obj = {};
            headers.forEach((header, index) => {
                object[header.trim()]
            })
        })
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