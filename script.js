// script.js
document.getElementById('search-btn').addEventListener('click', function() {
    let query = document.getElementById('search-bar').value;
    if (query) {
        window.open(`https://www.google.com/search?q=${query}`, '_blank');
    }
});

document.getElementById('search-bar').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let query = document.getElementById('search-bar').value;
        if (query) {
            window.open(`https://www.google.com/search?q=${query}`, '_blank');
        }
    }
});
