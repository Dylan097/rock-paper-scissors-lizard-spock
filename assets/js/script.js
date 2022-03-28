document.getElementById('rules-button').addEventListener('click', function () {
    let rules = document.getElementById('rules');
    rules.style.display = 'block';
})

document.getElementById('close').addEventListener('click', function () {
    let rules = document.getElementById('rules')
    rules.style.display = 'none';
})