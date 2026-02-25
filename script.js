console.log("Sitio cargado correctamente");
// script.js - Implementación del Protocolo E-λ (Inge-Niería de la Finitud)

const contenido = document.getElementById('contenido');
let integridad = 1.0; // I(0) = 1.0
const lambda = 0.01; // Coeficiente de mortalidad (ajusta para más/menos velocidad)

/**
 * Función que ejecuta el decaimiento entrópico.
 * Representa la Fase 1 (Degradación Perceptual) y Fase 2 (Difuminado Semántico).
 */
function aplicarEntropia() {
    // I(t) disminuye con el tiempo
    integridad -= lambda;
    
    if (integridad < 0.15) {
        integridad = 0.15; // Mantiene una "traza estética" mínima para no desaparecer del todo
    }

    // Aplicamos los cambios visuales al contenedor
    contenido.style.opacity = integridad;
    contenido.style.filter = `blur(${(1 - integridad) * 4}px)`; 
    contenido.style.transform = `scale(${0.98 + (integridad * 0.02)})`;
}

// El sistema "envejece" cada 2 segundos
let relojEntropico = setInterval(aplicarEntropia, 2000);

/**
 * La interacción humana (U+V) restaura la integridad.
 * El "vínculo social" con el dato lo mantiene vivo.
 */
contenido.addEventListener('mouseenter', () => {
    integridad = 1.0;
    contenido.style.opacity = 1;
    contenido.style.filter = 'blur(0px)';
    contenido.style.transform = 'scale(1)';
    console.log("Interacción detectada: Significado restaurado.");
});
