const Practice = {
    basic: [
        {
            id: 0,
            message: "Realiza un script en Python que permita al usuario capturar desde la consola o terminal un número e imprima si el valor ingresado por el usuario es par o impar.",
        },
        {
            id: 1,
            message: "Realiza un script en Python que permita al usuario calcular el área de un triángulo. Debes solicitar los valores correspondientes desde la consola e imprimir el resultado.",
        },
        {
            id: 2,
            message: `Realiza un script en Python que permita escribir en un archivo la cadena de texto "Hola Mundo!"`
        },
    ],
    intermediate: [
        {
            id: 20,
            message: "",
        }
    ],
    advance: [
        {
            id: 40,
            message: "",
        }
    ],
    master: [
        {
            id: 60,
            message: "",
        }
    ],
    all: () => {
        return [].concat(Practice.basic, Practice.intermediate, Practice.advance, Practice.master);
    },
};

export default Practice;