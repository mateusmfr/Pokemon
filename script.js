import types from './types.json';
const typeRadios = document.querySelectorAll('input[name="type"]');
const selectedType = document.querySelector('input[name="type"]:checked').value;
const selectedType2 = document.querySelector('input[name="type2"]:checked').value;
console.log(selectedType, selectedType2);
typeCalc(selectedType, selectedType2);

typeRadios.forEach(function(radio) {
    radio.addEventListener('change', function() {
        handleChangeTypes();
    });
});

const type2Radios = document.querySelectorAll('input[name="type2"]');

type2Radios.forEach(function(radio) {
    radio.addEventListener('change', function() {
        const selectedType = document.querySelector('input[name="type"]:checked').value;
        const selectedType2 = document.querySelector('input[name="type2"]:checked').value;
        typeCalc(selectedType, selectedType2);
    });
});

function typeCalc(selectedType, selectedType2) {
    const type = types[selectedType];
    const type2 = types[selectedType2];
    const result = {};
    for (const key in type) {
        if (selectedType2 === 'none') {
            const value = type[key];
            result[key] = value;
        } else {
            const value = type[key] * type2[key];
            result[key] = value;
        }
    }
    createResultTable(result);
}

function createResultTable(result) {
    const existingResult = document.querySelector('.resultado');
    if (existingResult) {
        existingResult.remove();
    }
    const divResultado = document.createElement('div');
    divResultado.classList.add('resultado');
    const h2Efetivudo = document.createElement('h2');
    h2Efetivudo.textContent = 'Efetivudo 4x';
    const h2EfetivudoDiv = document.createElement('div');
    h2EfetivudoDiv.classList.add('efetividade');
    const h2Efetivim = document.createElement('h2');
    h2Efetivim.textContent = 'Efetivim 2x';
    const h2EfetivimDiv = document.createElement('div');
    h2EfetivimDiv.classList.add('efetividade');
    const h2Normal = document.createElement('h2');
    h2Normal.textContent = 'Normal 1x';
    const h2NormalDiv = document.createElement('div');
    h2NormalDiv.classList.add('efetividade');
    const h2PoucaCoisa = document.createElement('h2');
    h2PoucaCoisa.textContent = 'Pouca coisa 0.5x';
    const h2PoucaCoisaDiv = document.createElement('div');
    h2PoucaCoisaDiv.classList.add('efetividade');
    const h2QuasNada = document.createElement('h2');
    h2QuasNada.textContent = 'Quas nada 0.25x';
    const h2QuasNadaDiv = document.createElement('div');
    h2QuasNadaDiv.classList.add('efetividade');
    const h2Imune = document.createElement('h2');
    h2Imune.textContent = 'Imune 0x';
    const h2ImuneDiv = document.createElement('div');
    h2ImuneDiv.classList.add('efetividade');
    divResultado.appendChild(h2Efetivudo);
    divResultado.appendChild(h2EfetivudoDiv);
    divResultado.appendChild(h2Efetivim);
    divResultado.appendChild(h2EfetivimDiv);
    divResultado.appendChild(h2Normal);
    divResultado.appendChild(h2NormalDiv);
    divResultado.appendChild(h2PoucaCoisa);
    divResultado.appendChild(h2PoucaCoisaDiv);
    divResultado.appendChild(h2QuasNada);
    divResultado.appendChild(h2QuasNadaDiv);
    divResultado.appendChild(h2Imune);
    divResultado.appendChild(h2ImuneDiv);
    for (const key in result) {
        if (result[key] === 0) {
            const h5 = document.createElement('h3');
            h5.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            h5.classList.add(key);
            h2ImuneDiv.appendChild(h5);
        }
        if (result[key] === 0.25) {
            const h5 = document.createElement('h3');
            h5.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            h5.classList.add(key);
            h2QuasNadaDiv.appendChild(h5);
        }
        if (result[key] === 0.5) {
            const h5 = document.createElement('h3');
            h5.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            h5.classList.add(key);
            h2PoucaCoisaDiv.appendChild(h5);
        }
        if (result[key] === 1) {
            const h5 = document.createElement('h3');
            h5.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            h5.classList.add(key);
            h2NormalDiv.appendChild(h5);
        }
        if (result[key] === 2) {
            const h5 = document.createElement('h3');
            h5.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            h5.classList.add(key);
            h2EfetivimDiv.appendChild(h5);
        }
        if (result[key] === 4) {
            const h5 = document.createElement('h3');
            h5.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            h5.classList.add(key);
            h2EfetivudoDiv.appendChild(h5);
        }
    }

    if (h2EfetivudoDiv.children.length === 0) {
        h2Efetivudo.remove();
        h2EfetivudoDiv.remove();
    }
    if (h2EfetivimDiv.children.length === 0) {
        h2Efetivim.remove();
        h2EfetivimDiv.remove();
    }
    if (h2NormalDiv.children.length === 0) {
        h2Normal.remove();
        h2NormalDiv.remove();
    }
    if (h2PoucaCoisaDiv.children.length === 0) {
        h2PoucaCoisa.remove();
        h2PoucaCoisaDiv.remove();
    }
    if (h2QuasNadaDiv.children.length === 0) {
        h2QuasNada.remove();
        h2QuasNadaDiv.remove();
    }
    if (h2ImuneDiv.children.length === 0) {
        h2Imune.remove();
        h2ImuneDiv.remove();
    }
    const direita = document.querySelector('.direita');
    direita.appendChild(divResultado);
}

// function handleChangeTypes() {
//     const selectedType = document.querySelector('input[name="type"]:checked');
//     const parentClass = selectedType.parentElement.className;
//     const allType2 = document.querySelectorAll('input[name="type2"]');
//     allType2.forEach(function(type2) {
//         type2.disabled = false;
//     });
//     const type2Corresponding = document.querySelectorAll(`.${parentClass}`)[1];
//     type2Corresponding.children[0].disabled = true;
//     const selectedType2 = document.querySelector('input[name="type2"]:checked');
//     const parentClass2 = selectedType2.parentElement.className;
//     if (parentClass === parentClass2) {
//         const none = document.querySelector('input[name="type2"][value="none"]');
//         none.checked = true;
//         const newSelectedType1 = document.querySelector('input[name="type"]:checked').value;
//         const newSelectedType2 = document.querySelector('input[name="type2"]:checked').value;
//         typeCalc(newSelectedType1, newSelectedType2);
//     }
// }

function handleChangeTypes() {
    const selectedType = document.querySelector('input[name="type"]:checked').value;
    let selectedType2 = document.querySelector('input[name="type2"]:checked').value;
    if (selectedType === selectedType2) {
        const none = document.querySelector('input[name="type2"][value="none"]');
        none.checked = true;
        selectedType2 = 'none';
        typeCalc(selectedType, selectedType2);
    }
    const selectedTypeRadio = document.querySelector('input[name="type"]:checked');
    const parentClass = selectedTypeRadio.parentElement.className;
    const allType2 = document.querySelectorAll('input[name="type2"]');
    allType2.forEach(function(type2) {
        type2.disabled = false;
    });
    const type2Corresponding = document.querySelectorAll(`.${parentClass}`)[1];
    type2Corresponding.children[0].disabled = true;
    typeCalc(selectedType, selectedType2);
}