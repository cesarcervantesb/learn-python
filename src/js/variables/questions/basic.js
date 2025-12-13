const basicQuestions = [
    {
        id: 1000,
        question: `¿Cuál es el comando que sirve para mostrar un mensaje o "imprimirlo" en la pantalla de usuario?`,
        answers: [
            {
                questionID: 1000,
                answer: "str()"
            },
            {
                questionID: 1000,
                answer: "float()"
            },
            {
                questionID: 1000,
                answer: "print()"
            },
            {
                questionID: 1000,
                answer: "int()"
            },
        ],
        correctAnswer: 2,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1001,
        question: `¿Cuál es el comando que se utiliza para leer información del usuario?`,
        answers: [
            {
                questionID: 1001,
                answer: "input()"
            },
            {
                questionID: 1001,
                answer: "boolean()"
            },
            {
                questionID: 1001,
                answer: "str()"
            },
            {
                questionID: 1001,
                answer: "output()"
            },
        ],
        correctAnswer: 0,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1002,
        question: `¿Qué símbolo se utiliza para comentar una línea de código en Python?`,
        answers: [
            {
                questionID: 1002,
                answer: "%"
            },
            {
                questionID: 1002,
                answer: "//"
            },
            {
                questionID: 1002,
                answer: "'"
            },
            {
                questionID: 1002,
                answer: "#"
            },
        ],
        correctAnswer: 3,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1003,
        question: `¿Qué resultado tiene el siguiente comando?  '5 // 2'`,
        answers: [
            {
                questionID: 1003,
                answer: "2.5"
            },
            {
                questionID: 1003,
                answer: "2"
            },
            {
                questionID: 1003,
                answer: "1"
            },
            {
                questionID: 1003,
                answer: "Ninguna de las opciones es correcta"
            },
        ],
        correctAnswer: 1,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1004,
        question: `¿Qué resultado tiene el siguiente comando?  '5 % 2'`,
        answers: [
            {
                questionID: 1004,
                answer: "2"
            },
            {
                questionID: 1004,
                answer: "2.5"
            },
            {
                questionID: 1004,
                answer: "1"
            },
            {
                questionID: 1004,
                answer: "Ninguna de las opciones es correcta"
            },
        ],
        correctAnswer: 2,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1005,
        question: `¿Qué palabra clave se utiliza para crear clases en Python?`,
        answers: [
            {
                questionID: 1005,
                answer: "class"
            },
            {
                questionID: 1005,
                answer: "def"
            },
            {
                questionID: 1005,
                answer: "function"
            },
            {
                questionID: 1005,
                answer: "object"
            },
        ],
        correctAnswer: 1,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1006,
        question: `¿Qué operador se usa para la igualdad?`,
        answers: [
            {
                questionID: 1006,
                answer: "="
            },
            {
                questionID: 1006,
                answer: "=="
            },
            {
                questionID: 1006,
                answer: ">="
            },
            {
                questionID: 1006,
                answer: "<="
            },
        ],
        correctAnswer: 1,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1007,
        question: `¿Cuál es la forma correcta de abrir un archivo para lectura?`,
        answers: [
            {
                questionID: 1007,
                answer: `open("archivo.txt", "w")`
            },
            {
                questionID: 1007,
                answer: `file("archivo.txt", "r")`
            },
            {
                questionID: 1007,
                answer: `open("archivo.txt", "r")`
            },
            {
                questionID: 1007,
                answer: `read("archivo.txt", "w")`
            },
        ],
        correctAnswer: 2,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1008,
        question: `¿Qué devuelve type(True)?`,
        answers: [
            {
                questionID: 1008,
                answer: "TypeError"
            },
            {
                questionID: 1008,
                answer: "int"
            },
            {
                questionID: 1008,
                answer: "str"
            },
            {
                questionID: 1008,
                answer: "bool"
            },
        ],
        correctAnswer: 3,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1009,
        question: `¿Qué devuelve type("1")?`,
        answers: [
            {
                questionID: 1009,
                answer: "TypeError"
            },
            {
                questionID: 1009,
                answer: "int"
            },
            {
                questionID: 1009,
                answer: "str"
            },
            {
                questionID: 1009,
                answer: "bool"
            },
        ],
        correctAnswer: 2,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1010,
        question: `¿Cuál es la forma correcta de abrir un archivo y asegurarse de cerrarlo automáticamente?`,
        answers: [
            {
                questionID: 1010,
                answer: `with open("archivo.txt", "r") as file:`
            },
            {
                questionID: 1010,
                answer: `file = open("archivo", "r") luego file.close()`
            },
            {
                questionID: 1010,
                answer: `file.open("archivo.txt", "r")`
            },
            {
                questionID: 1010,
                answer: `open("archivo.txt", "r") as file:`
            },
        ],
        correctAnswer: 0,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1011,
        question: `¿Qué hace la función strip() en una cadena de texto?`,
        answers: [
            {
                questionID: 1011,
                answer: "Elimina todos los espacios"
            },
            {
                questionID: 1011,
                answer: "Elimina espacios al inicio y final"
            },
            {
                questionID: 1011,
                answer: "Elimina espacios a la izquierda"
            },
            {
                questionID: 1011,
                answer: "Elimina espacios a la derecha"
            },
        ],
        correctAnswer: 1,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1012,
        question: `¿Qué hace la función upper() en una cadena de texto?`,
        answers: [
            {
                questionID: 1012,
                answer: "Elimina todos los espacios"
            },
            {
                questionID: 1012,
                answer: "Cambia todos los caracteres de la cadena de texto a mayúsculas"
            },
            {
                questionID: 1012,
                answer: "Cambia el inicio de la cadena de texto a mayúsculas"
            },
            {
                questionID: 1012,
                answer: "Cambia todos los caracteres de la cadena de texto a minúsculas"
            },
        ],
        correctAnswer: 1,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1013,
        question: `¿Cuál es la forma correcta de formatear una cadena de texto?`,
        answers: [
            {
                questionID: 1013,
                answer: `""" Este es un texto formateado """`
            },
            {
                questionID: 1013,
                answer: `print(f"Hola Mundo!")`
            },
            {
                questionID: 1013,
                answer: `format({sueldo:.2f})`
            },
            {
                questionID: 1013,
                answer: `input("Ingrese un texto")`
            },
        ],
        correctAnswer: 1,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1014,
        question: `¿Cuál es el resultado de la expresión '5 ** 2' ?`,
        answers: [
            {
                questionID: 1014,
                answer: `False`
            },
            {
                questionID: 1014,
                answer: `True`
            },
            {
                questionID: 1014,
                answer: `10`
            },
            {
                questionID: 1014,
                answer: `25`
            },
        ],
        correctAnswer: 3,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1015,
        question: `¿Cuál es el resultado de la expresión '(2 + 1) ** 3 // 9' ?`,
        answers: [
            {
                questionID: 1015,
                answer: `1.999999`
            },
            {
                questionID: 1015,
                answer: `3`
            },
            {
                questionID: 1015,
                answer: `9`
            },
            {
                questionID: 1015,
                answer: `3.0`
            },
        ],
        correctAnswer: 1,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1016,
        question: `¿Cuál de los siguientes NO es un operador relacional?`,
        answers: [
            {
                questionID: 1016,
                answer: `==`
            },
            {
                questionID: 1016,
                answer: `and`
            },
            {
                questionID: 1016,
                answer: `>`
            },
            {
                questionID: 1016,
                answer: `!=`
            },
        ],
        correctAnswer: 1,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1017,
        question: `En Python. ¿Cuál es la sintaxis correcta de los operadores lógicos?`,
        answers: [
            {
                questionID: 1017,
                answer: `&, |, !`
            },
            {
                questionID: 1017,
                answer: `&&, ||, !`
            },
            {
                questionID: 1017,
                answer: `and, not, or`
            },
            {
                questionID: 1017,
                answer: `<, >, <=, >=, !=, ==`
            },
        ],
        correctAnswer: 2,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1018,
        question: `¿Cuál es la prioridad de los operadores?`,
        answers: [
            {
                questionID: 1018,
                answer: `1. (), 2. * / //, 3. ** %, 4. + -`
            },
            {
                questionID: 1018,
                answer: `1. / // *, 2. (), 3. ** %, 4. + -`
            },
            {
                questionID: 1018,
                answer: `1. **, 2. () * / //, 3. ** %, 4. + -`
            },
            {
                questionID: 1018,
                answer: `1. (), 2. **, 3. * / // %, 4. + -`
            },
        ],
        correctAnswer: 3,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1019,
        question: `En Python. ¿Cuáles son los tipos de datos especiales (estructuras de datos)?`,
        answers: [
            {
                questionID: 1019,
                answer: `Listas, Diccionarios, Tuplas, Conjuntos`
            },
            {
                questionID: 1019,
                answer: `Listas, Objetos, Diccionarios, Tuplas`
            },
            {
                questionID: 1019,
                answer: `Diccionarios, String, Float, Int`
            },
            {
                questionID: 1019,
                answer: `Int, Float, Bool, String`
            },
        ],
        correctAnswer: 0,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1020,
        question: `¿Cuál es el resultado de la siguiente expresión? 'True and False'`,
        answers: [
            {
                questionID: 1020,
                answer: `True`
            },
            {
                questionID: 1020,
                answer: `False`
            },
            {
                questionID: 1020,
                answer: `!=`
            },
            {
                questionID: 1020,
                answer: `==`
            },
        ],
        correctAnswer: 1,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1021,
        question: `¿Cuál es el resultado de la siguiente expresión? 'True or False'`,
        answers: [
            {
                questionID: 1021,
                answer: `True`
            },
            {
                questionID: 1021,
                answer: `False`
            },
            {
                questionID: 1021,
                answer: `!=`
            },
            {
                questionID: 1021,
                answer: `==`
            },
        ],
        correctAnswer: 0,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1022,
        question: `¿Cuál es el resultado de la siguiente expresión? 'print(5 / 2)'`,
        answers: [
            {
                questionID: 1022,
                answer: `2`
            },
            {
                questionID: 1022,
                answer: `2.5`
            },
            {
                questionID: 1022,
                answer: `Float`
            },
            {
                questionID: 1022,
                answer: `Int`
            },
        ],
        correctAnswer: 1,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1023,
        question: `¿Cuál es el resultado de la siguiente expresión? 'type(5 / 2)'`,
        answers: [
            {
                questionID: 1023,
                answer: `2`
            },
            {
                questionID: 1023,
                answer: `2.5`
            },
            {
                questionID: 1023,
                answer: `Float`
            },
            {
                questionID: 1023,
                answer: `Int`
            },
        ],
        correctAnswer: 2,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
    {
        id: 1024,
        question: `En Python. ¿Cuál de las siguientes sintaxis es la correcta para convertir o castear una variable?`,
        answers: [
            {
                questionID: 1024,
                answer: `input()`
            },
            {
                questionID: 1024,
                answer: `type()`
            },
            {
                questionID: 1024,
                answer: `print()`
            },
            {
                questionID: 1024,
                answer: `Int()`
            },
        ],
        correctAnswer: 3,   // Indice correspondiente del array 'answers' donde se encuentra la respuesta correcta
    },
];

export default basicQuestions;