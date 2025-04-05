let servicioSeleccionado = '';
let seleccion = {
    uiTipo: false,
    uiEstilo: false,
    webTipo: false,
    webEstilo: false
};

function ocultarSecciones() {
    document.getElementById('ui-section').classList.add('hidden');
    document.getElementById('web-section').classList.add('hidden');
    document.getElementById('estilo-ui-section').classList.add('hidden');
    document.getElementById('estilo-web-section').classList.add('hidden');
    document.getElementById('contacto').classList.add('hidden');
}

function seleccionarServicio(tipo) {
    ocultarSecciones();
    servicioSeleccionado = tipo;
    seleccion = { uiTipo: false, uiEstilo: false, webTipo: false, webEstilo: false };

    if (tipo === 'ui') {
        document.getElementById('ui-section').classList.remove('hidden');
    } else if (tipo === 'web') {
        document.getElementById('web-section').classList.remove('hidden');
    } else if (tipo === 'both') {
        document.getElementById('ui-section').classList.remove('hidden');
        document.getElementById('web-section').classList.remove('hidden');
    }
}

function mostrarEstilo(tipo, opcion) {
    if (tipo === 'ui') {
        if (opcion === 'Otro') {
            document.getElementById('otro-ui-tipo').classList.remove('hidden');
        } else {
            seleccion.uiTipo = true;
            document.getElementById('otro-ui-tipo').classList.add('hidden');
            document.getElementById('estilo-ui-section').classList.remove('hidden');
            mostrarContacto();
        }
    }
}

function mostrarEstiloWeb(opcion) {
    if (opcion === 'Otro') {
        document.getElementById('otro-web-tipo').classList.remove('hidden');
    } else {
        seleccion.webTipo = true;
        document.getElementById('otro-web-tipo').classList.add('hidden');
        document.getElementById('estilo-web-section').classList.remove('hidden');
        mostrarContacto();
    }
}

function seleccionarTipo(tipo, opcion) {
    if (tipo === 'ui') {
        if (opcion === 'Otro') {
            document.getElementById('otro-ui-estilo').classList.remove('hidden');
        } else {
            seleccion.uiEstilo = true;
            document.getElementById('otro-ui-estilo').classList.add('hidden');
            mostrarContacto();
        }
    } else if (tipo === 'web') {
        if (opcion === 'Otro') {
            document.getElementById('otro-web-estilo').classList.remove('hidden');
        } else {
            seleccion.webEstilo = true;
            document.getElementById('otro-web-estilo').classList.add('hidden');
            mostrarContacto();
        }
    }
}

function verificarCampoOtro(campo) {
    const input = document.getElementById(`input-${campo}`);
    const boton = document.getElementById(`continuar-${campo}`);
    boton.classList.toggle('hidden', input.value.trim() === '');
}

function continuarDesdeOtro(campo) {
    const valor = document.getElementById(`input-${campo}`).value.trim();
    if (valor === '') return;

    console.log(`Otro ingresado (${campo}): ${valor}`);

    if (campo === 'uiTipo') {
        seleccion.uiTipo = true;
        document.getElementById('estilo-ui-section').classList.remove('hidden');
    } else if (campo === 'webTipo') {
        seleccion.webTipo = true;
        document.getElementById('estilo-web-section').classList.remove('hidden');
    } else if (campo === 'uiEstilo') {
        seleccion.uiEstilo = true;
    } else if (campo === 'webEstilo') {
        seleccion.webEstilo = true;
    }

    mostrarContacto();
}

function mostrarContacto() {
    if (servicioSeleccionado === 'ui' && seleccion.uiTipo && seleccion.uiEstilo) {
        document.getElementById('contacto').classList.remove('hidden');
    } else if (servicioSeleccionado === 'web' && seleccion.webTipo && seleccion.webEstilo) {
        document.getElementById('contacto').classList.remove('hidden');
    } else if (
        servicioSeleccionado === 'both' &&
        seleccion.uiTipo && seleccion.uiEstilo &&
        seleccion.webTipo && seleccion.webEstilo
    ) {
        document.getElementById('contacto').classList.remove('hidden');
    }
}


function verificarCampoOtro(tipo) {
    let inputId = '';
    let botonId = '';

    switch (tipo) {
        case 'uiTipo':
            inputId = 'input-ui-tipo';
            botonId = 'continuar-ui-tipo';
            break;
        case 'uiEstilo':
            inputId = 'input-ui-estilo';
            botonId = 'continuar-uiEstilo';
            break;
        case 'webTipo':
            inputId = 'input-web-tipo';
            botonId = 'continuar-webTipo';
            break;
        case 'webEstilo':
            inputId = 'input-web-estilo';
            botonId = 'continuar-webEstilo';
            break;
    }

    const input = document.getElementById(inputId);
    const boton = document.getElementById(botonId);

    if (input && boton) {
        if (input.value.trim() !== '') {
            boton.classList.remove('hidden');
        } else {
            boton.classList.add('hidden');
        }
    }
}


function continuarDesdeOtro(seccion) {
    switch (seccion) {
        case 'uiTipo':
            document.getElementById('otro-ui-tipo').classList.add('hidden');
            document.getElementById('estilo-ui-section').classList.remove('hidden');
            break;

        case 'uiEstilo':
            document.getElementById('otro-ui-estilo').classList.add('hidden');

            // Si se eligió solo UI, ir a contacto
            if (!document.getElementById('web-section').classList.contains('hidden')) {
                document.getElementById('web-section').classList.remove('hidden');
            } else {
                document.getElementById('contacto').classList.remove('hidden');
            }
            break;

        case 'webTipo':
            document.getElementById('otro-web-tipo').classList.add('hidden');
            document.getElementById('estilo-web-section').classList.remove('hidden');
            break;

        case 'webEstilo':
            document.getElementById('otro-web-estilo').classList.add('hidden');
            document.getElementById('contacto').classList.remove('hidden');
            break;
    }
}

