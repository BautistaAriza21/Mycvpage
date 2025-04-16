let servicioSeleccionado = '';
let seleccion = {
    uiTipo: false,
    uiEstilo: false,
    webTipo: false,
    webEstilo: false
};

let opcionesSeleccionadas = {
    servicio: null,
    uiTipo: null,
    uiEstilo: null,
    webTipo: null,
    webEstilo: null
};

function deshabilitarOpciones(seccion, elementoSeleccionado) {
    const opciones = document.querySelectorAll(`#${seccion} .opcion`);
    opciones.forEach(opcion => {
        if (opcion !== elementoSeleccionado) {
            opcion.classList.add('disabled');
            opcion.setAttribute('disabled', 'true');
        }
    });
}

function habilitarOpciones(seccion) {
    const opciones = document.querySelectorAll(`#${seccion} .opcion`);
    opciones.forEach(opcion => {
        opcion.classList.remove('disabled');
        opcion.removeAttribute('disabled');
    });
}

function ocultarSecciones() {
    document.getElementById('ui-section').classList.add('hidden');
    document.getElementById('web-section').classList.add('hidden');
    document.getElementById('estilo-ui-section').classList.add('hidden');
    document.getElementById('estilo-web-section').classList.add('hidden');
    document.getElementById('contacto').classList.add('hidden');
}

function seleccionarServicio(tipo, elemento) {
    if (opcionesSeleccionadas.servicio === tipo) {
        // Deseleccionar
        opcionesSeleccionadas.servicio = null;
        habilitarOpciones('servicios-section');
        ocultarSecciones();
    } else {
        // Seleccionar nuevo
        ocultarSecciones();
        servicioSeleccionado = tipo;
        opcionesSeleccionadas.servicio = tipo;
        seleccion = { uiTipo: false, uiEstilo: false, webTipo: false, webEstilo: false };
        deshabilitarOpciones('servicios-section', elemento);

        if (tipo === 'ui') {
            document.getElementById('ui-section').classList.remove('hidden');
        } else if (tipo === 'web') {
            document.getElementById('web-section').classList.remove('hidden');
        } else if (tipo === 'both') {
            document.getElementById('ui-section').classList.remove('hidden');
            document.getElementById('web-section').classList.remove('hidden');
        }
    }
}

function mostrarEstilo(tipo, opcion, elemento) {
    if (tipo === 'ui') {
        if (opcionesSeleccionadas.uiTipo === opcion) {
            // Deseleccionar
            opcionesSeleccionadas.uiTipo = null;
            habilitarOpciones('ui-section');
            document.getElementById('estilo-ui-section').classList.add('hidden');
        } else {
            if (opcion === 'Otro') {
                document.getElementById('otro-ui-tipo').classList.remove('hidden');
            } else {
                seleccion.uiTipo = true;
                opcionesSeleccionadas.uiTipo = opcion;
                document.getElementById('otro-ui-tipo').classList.add('hidden');
                document.getElementById('estilo-ui-section').classList.remove('hidden');
                deshabilitarOpciones('ui-section', elemento);
                mostrarContacto();
            }
        }
    }
}

function mostrarEstiloWeb(opcion, elemento) {
    if (opcionesSeleccionadas.webTipo === opcion) {
        // Deseleccionar
        opcionesSeleccionadas.webTipo = null;
        habilitarOpciones('web-section');
        document.getElementById('estilo-web-section').classList.add('hidden');
    } else {
        if (opcion === 'Otro') {
            document.getElementById('otro-web-tipo').classList.remove('hidden');
        } else {
            seleccion.webTipo = true;
            opcionesSeleccionadas.webTipo = opcion;
            document.getElementById('otro-web-tipo').classList.add('hidden');
            document.getElementById('estilo-web-section').classList.remove('hidden');
            deshabilitarOpciones('web-section', elemento);
            mostrarContacto();
        }
    }
}

function seleccionarTipo(tipo, opcion, elemento) {
    if (tipo === 'ui') {
        if (opcionesSeleccionadas.uiEstilo === opcion) {
            // Deseleccionar
            opcionesSeleccionadas.uiEstilo = null;
            habilitarOpciones('estilo-ui-section');
            seleccion.uiEstilo = false;
        } else {
            if (opcion === 'Otro') {
                document.getElementById('otro-ui-estilo').classList.remove('hidden');
            } else {
                seleccion.uiEstilo = true;
                opcionesSeleccionadas.uiEstilo = opcion;
                document.getElementById('otro-ui-estilo').classList.add('hidden');
                deshabilitarOpciones('estilo-ui-section', elemento);
                mostrarContacto();
            }
        }
    } else if (tipo === 'web') {
        if (opcionesSeleccionadas.webEstilo === opcion) {
            // Deseleccionar
            opcionesSeleccionadas.webEstilo = null;
            habilitarOpciones('estilo-web-section');
            seleccion.webEstilo = false;
        } else {
            if (opcion === 'Otro') {
                document.getElementById('otro-web-estilo').classList.remove('hidden');
            } else {
                seleccion.webEstilo = true;
                opcionesSeleccionadas.webEstilo = opcion;
                document.getElementById('otro-web-estilo').classList.add('hidden');
                deshabilitarOpciones('estilo-web-section', elemento);
                mostrarContacto();
            }
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

function deshabilitarFormulario() {
    const secciones = document.querySelectorAll('.container-selection > div');
    secciones.forEach(seccion => {
        // Excluir la sección inicial y la de resumen
        if (seccion.id !== 'inicio' && seccion.id !== 'resumen-seleccion' && !seccion.classList.contains('hidden')) {
            const botones = seccion.querySelectorAll('button');
            botones.forEach(boton => {
                boton.disabled = true;
                boton.classList.add('disabled');
            });
        }
    });
}

function habilitarFormulario() {
    const secciones = document.querySelectorAll('.container-selection > div');
    secciones.forEach(seccion => {
        const botones = seccion.querySelectorAll('button');
        botones.forEach(boton => {
            boton.disabled = false;
            boton.classList.remove('disabled');
        });
    });
}

function mostrarContacto() {
    if (servicioSeleccionado === 'ui' && seleccion.uiTipo && seleccion.uiEstilo) {
        document.getElementById('resumen-seleccion').classList.remove('hidden');
        generarResumen();
        deshabilitarFormulario();
    } else if (servicioSeleccionado === 'web' && seleccion.webTipo && seleccion.webEstilo) {
        document.getElementById('resumen-seleccion').classList.remove('hidden');
        generarResumen();
        deshabilitarFormulario();
    } else if (
        servicioSeleccionado === 'both' &&
        seleccion.uiTipo && seleccion.uiEstilo &&
        seleccion.webTipo && seleccion.webEstilo
    ) {
        document.getElementById('resumen-seleccion').classList.remove('hidden');
        generarResumen();
        deshabilitarFormulario();
    }
}

function revisarSelecciones() {
    // Limpiar las opciones seleccionadas
    opcionesSeleccionadas = {
        servicio: null,
        uiTipo: null,
        uiEstilo: null,
        webTipo: null,
        webEstilo: null
    };

    // Limpiar el resumen
    document.getElementById('resumen-contenido').innerHTML = '';
    
    // Ocultar el resumen y habilitar el formulario
    document.getElementById('resumen-seleccion').classList.add('hidden');
    habilitarFormulario();
}

function continuarAContacto() {
    document.getElementById('resumen-seleccion').classList.add('hidden');
    document.getElementById('contacto').classList.remove('hidden');
}

function generarResumen() {
    const resumen = document.getElementById('resumen-contenido');
    resumen.innerHTML = '';

    if (opcionesSeleccionadas.servicio) {
        let servicioTexto = opcionesSeleccionadas.servicio === 'ui' ? 'Diseño de Interfaz' :
                          opcionesSeleccionadas.servicio === 'web' ? 'Sitio Web' : 'Ambos';
        resumen.innerHTML += `<p><strong>Servicio:</strong> ${servicioTexto}</p>`;
    }
    if (opcionesSeleccionadas.uiTipo) {
        resumen.innerHTML += `<p><strong>Tipo de UI:</strong> ${opcionesSeleccionadas.uiTipo}</p>`;
    }
    if (opcionesSeleccionadas.uiEstilo) {
        resumen.innerHTML += `<p><strong>Estilo de UI:</strong> ${opcionesSeleccionadas.uiEstilo}</p>`;
    }
    if (opcionesSeleccionadas.webTipo) {
        resumen.innerHTML += `<p><strong>Tipo de Web:</strong> ${opcionesSeleccionadas.webTipo}</p>`;
    }
    if (opcionesSeleccionadas.webEstilo) {
        resumen.innerHTML += `<p><strong>Estilo de Web:</strong> ${opcionesSeleccionadas.webEstilo}</p>`;
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

// Accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const content = item.querySelector('.accordion-content');
        
        // Toggle active class
        header.classList.toggle('active');
        
        // Toggle content visibility
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});