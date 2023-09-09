function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

document.addEventListener('DOMContentLoaded', function() {
    // Set the title, description, and link based on URL parameters
    const title = getParameterByName('title');
    const description = getParameterByName('description');
    const link = getParameterByName('link');

    if (title) {
        document.querySelector('h2').innerText = title;
    }

    if (description) {
        document.querySelector('p').innerText = description;
    }

    if (link) {
        document.querySelector('button').addEventListener('click', function() {
            window.open(link, '_blank');
        });
    }
});
