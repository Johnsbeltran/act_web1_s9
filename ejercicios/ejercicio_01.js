const infoContainer = document.getElementById('info-container');


const pageTitle = document.title;
const pageURL = document.URL;


let htmlContent = `
    <p><strong>Título de la página: ${pageTitle}</p>
    <p><strong>URL actual: ${pageURL}</p>
`;

infoContainer.innerHTML = htmlContent;
