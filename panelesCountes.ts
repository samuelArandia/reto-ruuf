/*
El problema a resolver consiste en encontrar la máxima cantidad de rectángulos de dimensiones “a” y “b” (paneles solares) que caben dentro de un rectángulo de dimensiones “x” e “y” (techo), según se muestra en la siguiente figura:
Por ejemplo, podríamos decir que en el siguiente ejemplo caben 5 rectángulos de dimensiones 1 y 2, en un rectángulo de dimensiones 3 y 5.

*/
const panelSize = { ancho: 1, largo: 2 };
const roofSize = { ancho: 2, largo: 4 };

function panelsCounterInsideRoof( panelSize: { ancho: number, largo: number }, roofSize: { ancho: number, largo: number } ): number {

    if (panelSize.ancho <= 0 || panelSize.largo <= 0 || roofSize.ancho <= 0 || roofSize.largo <= 0) {
        throw new Error("Los valores ingresados no pueden ser negativos o cero");
    }

    const panelsPerRow = Math.floor(roofSize.ancho / panelSize.ancho);
    const panelsPerColumn = Math.floor(roofSize.largo / panelSize.largo);
    const totalPanels = panelsPerRow * panelsPerColumn;
    return totalPanels;
}

console.log("El total de paneles que entran en un area de (2x4) es de: ", panelsCounterInsideRoof(panelSize, roofSize));
console.log("El total de paneles que entran en un area de (3x5) es de: ", panelsCounterInsideRoof({ ancho: 1, largo: 2 }, { ancho: 3, largo: 5 }));
console.log("El total de paneles que entran en un area de (1x10) es de: ", panelsCounterInsideRoof({ ancho: 2, largo: 2 }, { ancho: 1, largo: 10 }));


/* **Opción 1**
Repetir el ejercicio base, considerando un techo triangular, isóceles.
*/

const panelsSize = { ancho: 1, largo: 2 };
const triangleIsocelesSize = { base: 2, altura: 6 };

function panelsCounterInsideTriangle(panelSize: { ancho: number, largo: number }, triangleSize: { base: number, altura: number }): number {
    
    if (panelSize.ancho <= 0 || panelSize.largo <= 0 || triangleSize.base <= 0 || triangleSize.altura <= 0) {
        throw new Error("Los valores ingresados no pueden ser negativos o cero");
    }

    let totalPanels = 0;
    const panelHeight = panelSize.ancho;
    const panelWidth = panelSize.largo;

    for (let currentHeight = 0; currentHeight + panelHeight <= triangleSize.altura; currentHeight += panelHeight) {
        const currentBase = (triangleSize.base * (triangleSize.altura - currentHeight)) / triangleSize.altura;
        const panelsInRow = Math.floor(currentBase / panelWidth);   
        totalPanels += panelsInRow;
    }
    return totalPanels;
}

console.log("El total de paneles que entran en el área de un triángulo isósceles de base 2 y altura 6 es de: ", panelsCounterInsideTriangle(panelsSize, triangleIsocelesSize));


/***Opción 2**
Repetir el ejercicio base considerando dos rectángulos iguales superpuestos. Puedes parametrizar la superposición entre ambos rectángulos.
*/


const panelesSize = { ancho: 2, largo: 1 };
const rectangleSize = { ancho: 4, largo: 2 };
const superposition = 1;


function panelsCounterInsideRectangle( panelSize: { ancho: number, largo: number }, rectangleSize: { ancho: number, largo: number }, superposition: number ): number {

    if (panelSize.ancho <= 0 || panelSize.largo <= 0 || rectangleSize.ancho <= 0 || rectangleSize.largo <= 0 || superposition < 0) {
        throw new Error("Los valores ingresados no pueden ser negativos o cero");
    }

    const largoTotal = rectangleSize.largo * 2 - superposition;
    const panelesPerRow = Math.floor(rectangleSize.ancho / panelSize.ancho);
    const panelesPerColumn = Math.floor(largoTotal / panelSize.largo);
    const totalPanels = panelesPerRow * panelesPerColumn ;
    return totalPanels;
}

console.log("El total de paneles que entran en un area de (4x2) con superposición de 1 es de: ", panelsCounterInsideRectangle(panelesSize, rectangleSize, superposition));

