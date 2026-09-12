const generateData = () => {
    const createData = new Date();
    const elemento = document.querySelector("#box-date");

    const formatData = createData.toLocaleDateString('pt-BR');

    elemento.innerHTML = `<p id="date"> ${formatData}</p>`;
};

const generateHora = () => {
    const createData = new Date();
    const elemento = document.querySelector("#box-hours");

    const formatHoras = createData.toLocaleTimeString('pt-BR');

    elemento.innerHTML = `<p id="hours"> ${formatHoras}</p>`;
}

generateData();

setInterval(generateHora, 1);