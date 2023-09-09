document.addEventListener('DOMContentLoaded', function() {
    const link = getParameterByName('link');
    const title = getParameterByName('title');
    const description = getParameterByName('description');

    if (title) {
        document.querySelector('.card-title').textContent = title;
    }

    if (description) {
        document.querySelector('.card-description').textContent = description;
    }
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function redirectTo() {
    const link = getParameterByName('link');
    if (link) {
        window.open(link, '_blank');
    }
}
