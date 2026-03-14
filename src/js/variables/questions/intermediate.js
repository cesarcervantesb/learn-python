const intermediateQuestions = [{
        id: 2000,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `for i in range(0, 5):
    print(i * 2)`,
        answers: [
            "0 2 4 6 8",
            "0 1 2 3 4",
            "2 4 6 8 10",
            "Error de sintaxis"
        ],
        correctAnswer: 0
    },
    {
        id: 2001,
        question: "¿Qué tipo de dato devuelve la función input() en Python?",
        script: "",
        answers: [
            "int",
            "str",
            "float",
            "bool"
        ],
        correctAnswer: 1
    },
    {
        id: 2002,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `x = [1, 2, 3]
print(x[::-1])`,
        answers: [
            "[3, 2, 1]",
            "[1, 2, 3]",
            "[2, 3, 1]",
            "Error de índice"
        ],
        correctAnswer: 0
    },
    {
        id: 2003,
        question: "¿Qué palabra reservada se utiliza para manejar excepciones en Python?",
        script: "",
        answers: [
            "catch",
            "except",
            "error",
            "handle"
        ],
        correctAnswer: 1
    },
    {
        id: 2004,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola" * 3)`,
        answers: [
            "Hola Hola Hola",
            "HolaHolaHola",
            "Error",
            "['Hola','Hola','Hola']"
        ],
        correctAnswer: 1
    },
    {
        id: 2005,
        question: "¿Qué estructura se utiliza para definir una función en Python?",
        script: "",
        answers: [
            "func",
            "def",
            "function",
            "lambda"
        ],
        correctAnswer: 1
    },
    {
        id: 2006,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(type(3.14))`,
        answers: [
            "<class 'int'>",
            "<class 'float'>",
            "<class 'str'>",
            "<class 'complex'>"
        ],
        correctAnswer: 1
    },
    {
        id: 2007,
        question: "¿Qué método se usa para agregar un elemento al final de una lista?",
        script: "",
        answers: [
            "append()",
            "add()",
            "insert()",
            "push()"
        ],
        correctAnswer: 0
    },
    {
        id: 2008,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(len("Python"))`,
        answers: [
            "5",
            "6",
            "7",
            "Error"
        ],
        correctAnswer: 1
    },
    {
        id: 2009,
        question: "¿Qué palabra reservada se usa para crear una clase en Python?",
        script: "",
        answers: [
            "class",
            "object",
            "struct",
            "define"
        ],
        correctAnswer: 0
    },
    {
        id: 2010,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(bool(""))`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 1
    },
    {
        id: 2011,
        question: "¿Qué operador se usa para comprobar igualdad en Python?",
        script: "",
        answers: [
            "=",
            "==",
            "===",
            "equals"
        ],
        correctAnswer: 1
    },
    {
        id: 2012,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print([i for i in range(3)])`,
        answers: [
            "[0, 1, 2]",
            "[1, 2, 3]",
            "[0, 1, 2, 3]",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2013,
        question: "¿Qué función convierte un string en entero?",
        script: "",
        answers: [
            "str()",
            "int()",
            "float()",
            "eval()"
        ],
        correctAnswer: 1
    },
    {
        id: 2014,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Python"[2])`,
        answers: [
            "t",
            "y",
            "h",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2015,
        question: "¿Qué palabra reservada se usa para definir un bucle en Python?",
        script: "",
        answers: [
            "loop",
            "for",
            "repeat",
            "iterate"
        ],
        correctAnswer: 1
    },
    {
        id: 2016,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(sum([1,2,3]))`,
        answers: [
            "6",
            "5",
            "Error",
            "123"
        ],
        correctAnswer: 0
    },
    {
        id: 2017,
        question: "¿Qué palabra reservada se usa para importar módulos en Python?",
        script: "",
        answers: [
            "include",
            "import",
            "require",
            "module"
        ],
        correctAnswer: 1
    },
    {
        id: 2018,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("a" in "python")`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 1
    },
    {
        id: 2019,
        question: "¿Qué método elimina el último elemento de una lista?",
        script: "",
        answers: [
            "remove()",
            "pop()",
            "delete()",
            "discard()"
        ],
        correctAnswer: 1
    },
    {
        id: 2020,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(2 ** 3)`,
        answers: [
            "6",
            "8",
            "9",
            "Error"
        ],
        correctAnswer: 1
    },
    {
        id: 2021,
        question: "¿Qué palabra reservada se usa para definir una condición?",
        script: "",
        answers: [
            "if",
            "when",
            "case",
            "cond"
        ],
        correctAnswer: 0
    },
    {
        id: 2022,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(list(range(2, 6)))`,
        answers: [
            "[2, 3, 4, 5]",
            "[2, 3, 4, 5, 6]",
            "[1, 2, 3, 4, 5]",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2023,
        question: "¿Qué función devuelve el valor absoluto?",
        script: "",
        answers: [
            "abs()",
            "absolute()",
            "fabs()",
            "math.abs()"
        ],
        correctAnswer: 0
    },
    {
        id: 2024,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(",".join(["a","b","c"]))`,
        answers: [
            "a,b,c",
            "abc",
            "['a','b','c']",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2025,
        question: "¿Qué palabra reservada se usa para crear un generador?",
        script: "",
        answers: [
            "yield",
            "return",
            "gen",
            "generator"
        ],
        correctAnswer: 0
    },
    {
        id: 2026,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(min([3,1,4]))`,
        answers: [
            "1",
            "3",
            "4",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2027,
        question: "¿Qué método convierte una lista en conjunto?",
        script: "",
        answers: [
            "set()",
            "list()",
            "dict()",
            "tuple()"
        ],
        correctAnswer: 0
    },
    {
        id: 2028,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Python".upper())`,
        answers: [
            "PYTHON",
            "python",
            "Python",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2029,
        question: "¿Qué palabra reservada se usa para definir una función anónima?",
        script: "",
        answers: [
            "def",
            "lambda",
            "func",
            "anon"
        ],
        correctAnswer: 1
    },
    {
        id: 2030,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(round(3.14159, 2))`,
        answers: [
            "3.14",
            "3.1416",
            "3.15",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2031,
        question: "¿Qué método se usa para dividir un string en lista?",
        script: "",
        answers: [
            "split()",
            "divide()",
            "partition()",
            "cut()"
        ],
        correctAnswer: 0
    },
    {
        id: 2032,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(bool([]))`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 1
    },
    {
        id: 2033,
        question: "¿Qué palabra reservada se usa para salir de un bucle?",
        script: "",
        answers: [
            "exit",
            "break",
            "stop",
            "end"
        ],
        correctAnswer: 1
    },
    {
        id: 2034,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(max([10,20,5]))`,
        answers: [
            "5",
            "10",
            "20",
            "Error"
        ],
        correctAnswer: 2
    },
    {
        id: 2035,
        question: "¿Qué método convierte un número en string?",
        script: "",
        answers: [
            "str()",
            "string()",
            "toString()",
            "repr()"
        ],
        correctAnswer: 0
    },
    {
        id: 2036,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Python".startswith("Py"))`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2037,
        question: "¿Qué palabra reservada se usa para definir herencia en clases?",
        script: "",
        answers: [
            "inherits",
            "extends",
            "super",
            "class(BaseClass)"
        ],
        correctAnswer: 3
    },
    {
        id: 2038,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("123".isdigit())`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2039,
        question: "¿Qué método se usa para eliminar espacios en un string?",
        script: "",
        answers: [
            "trim()",
            "strip()",
            "remove()",
            "cut()"
        ],
        correctAnswer: 1
    },
    {
        id: 2040,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Python".lower())`,
        answers: [
            "PYTHON",
            "python",
            "Python",
            "Error"
        ],
        correctAnswer: 1
    },
    {
        id: 2041,
        question: "¿Qué palabra reservada se usa para definir un bloque alternativo en una condición?",
        script: "",
        answers: [
            "else",
            "elif",
            "otherwise",
            "alt"
        ],
        correctAnswer: 0
    },
    {
        id: 2042,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola Mundo".replace("Mundo","Python"))`,
        answers: [
            "Hola Python",
            "Hola Mundo",
            "Python Mundo",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2043,
        question: "¿Qué método se usa para ordenar una lista?",
        script: "",
        answers: [
            "sort()",
            "order()",
            "arrange()",
            "sorted()"
        ],
        correctAnswer: 0
    },
    {
        id: 2044,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(10 // 3)`,
        answers: [
            "3.33",
            "3",
            "4",
            "Error"
        ],
        correctAnswer: 1
    },
    {
        id: 2045,
        question: "¿Qué palabra reservada se usa para definir un módulo?",
        script: "",
        answers: [
            "module",
            "package",
            "import",
            "No existe palabra reservada específica"
        ],
        correctAnswer: 3
    },
    {
        id: 2046,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(bool("Python"))`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2047,
        question: "¿Qué método se usa para contar ocurrencias de un elemento en una lista?",
        script: "",
        answers: [
            "count()",
            "find()",
            "index()",
            "search()"
        ],
        correctAnswer: 0
    },
    {
        id: 2048,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Python"[::-1])`,
        answers: [
            "nohtyP",
            "Python",
            "Error",
            "['P','y','t','h','o','n']"
        ],
        correctAnswer: 0
    },
    {
        id: 2049,
        question: "¿Qué palabra reservada se usa para definir un bloque en caso de excepción?",
        script: "",
        answers: [
            "catch",
            "except",
            "error",
            "handle"
        ],
        correctAnswer: 1
    },
    {
        id: 2050,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(type([1,2,3]))`,
        answers: [
            "<class 'list'>",
            "<class 'tuple'>",
            "<class 'dict'>",
            "<class 'set'>"
        ],
        correctAnswer: 0
    },
    {
        id: 2051,
        question: "¿Qué método se usa para obtener el índice de un elemento en una lista?",
        script: "",
        answers: [
            "find()",
            "index()",
            "locate()",
            "position()"
        ],
        correctAnswer: 1
    },
    {
        id: 2052,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Python".capitalize())`,
        answers: [
            "Python",
            "PYTHON",
            "python",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2053,
        question: "¿Qué palabra reservada se usa para definir un bucle mientras?",
        script: "",
        answers: [
            "loop",
            "while",
            "repeat",
            "until"
        ],
        correctAnswer: 1
    },
    {
        id: 2054,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(5 % 2)`,
        answers: [
            "2",
            "1",
            "0",
            "Error"
        ],
        correctAnswer: 1
    },
    {
        id: 2055,
        question: "¿Qué método se usa para verificar si una cadena empieza con un prefijo?",
        script: "",
        answers: [
            "startswith()",
            "begins()",
            "prefix()",
            "init()"
        ],
        correctAnswer: 0
    },
    {
        id: 2056,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(list("abc"))`,
        answers: [
            "['a','b','c']",
            "abc",
            "['abc']",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2057,
        question: "¿Qué palabra reservada se usa para definir un bloque alternativo en condiciones múltiples?",
        script: "",
        answers: [
            "elif",
            "elseif",
            "else if",
            "alt"
        ],
        correctAnswer: 0
    },
    {
        id: 2058,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Python".find("t"))`,
        answers: [
            "2",
            "1",
            "3",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2059,
        question: "¿Qué método se usa para convertir un iterable en lista?",
        script: "",
        answers: [
            "list()",
            "toList()",
            "array()",
            "convert()"
        ],
        correctAnswer: 0
    },
    {
        id: 2060,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Python".endswith("on"))`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2061,
        question: "¿Qué palabra reservada se usa para definir un bloque de código que siempre se ejecuta?",
        script: "",
        answers: [
            "finally",
            "always",
            "end",
            "default"
        ],
        correctAnswer: 0
    },
    {
        id: 2062,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(len([1,2,[3,4]]))`,
        answers: [
            "2",
            "3",
            "4",
            "Error"
        ],
        correctAnswer: 1
    },
    {
        id: 2063,
        question: "¿Qué método se usa para convertir un string en lista de caracteres?",
        script: "",
        answers: [
            "list()",
            "split()",
            "chars()",
            "array()"
        ],
        correctAnswer: 0
    },
    {
        id: 2064,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".find("z"))`,
        answers: [
            "-1",
            "None",
            "Error",
            "0"
        ],
        correctAnswer: 0
    },
    {
        id: 2065,
        question: "¿Qué palabra reservada se usa para definir un decorador?",
        script: "",
        answers: [
            "@",
            "decorator",
            "define",
            "wrap"
        ],
        correctAnswer: 0
    },
    {
        id: 2066,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(type((1,2,3)))`,
        answers: [
            "<class 'list'>",
            "<class 'tuple'>",
            "<class 'dict'>",
            "<class 'set'>"
        ],
        correctAnswer: 1
    },
    {
        id: 2067,
        question: "¿Qué método se usa para verificar si todos los elementos de un iterable son verdaderos?",
        script: "",
        answers: [
            "all()",
            "any()",
            "every()",
            "check()"
        ],
        correctAnswer: 0
    },
    {
        id: 2068,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(any([0, False, 5]))`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2069,
        question: "¿Qué palabra reservada se usa para definir un contexto administrado?",
        script: "",
        answers: [
            "with",
            "context",
            "manage",
            "using"
        ],
        correctAnswer: 0
    },
    {
        id: 2070,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print(dict(a=1,b=2))`,
        answers: [
            "{'a':1,'b':2}",
            "{1:'a',2:'b'}",
            "['a','b']",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2071,
        question: "¿Qué método se usa para obtener las claves de un diccionario?",
        script: "",
        answers: [
            "keys()",
            "values()",
            "items()",
            "getKeys()"
        ],
        correctAnswer: 0
    },
    {
        id: 2072,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".islower())`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 1
    },
    {
        id: 2073,
        question: "¿Qué palabra reservada se usa para definir una clase abstracta?",
        script: "",
        answers: [
            "abstract",
            "class",
            "ABC",
            "No existe palabra reservada específica"
        ],
        correctAnswer: 3
    },
    {
        id: 2074,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".isalpha())`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2075,
        question: "¿Qué método se usa para obtener el valor de una clave en un diccionario?",
        script: "",
        answers: [
            "get()",
            "find()",
            "value()",
            "search()"
        ],
        correctAnswer: 0
    },
    {
        id: 2076,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("123abc".isalnum())`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2077,
        question: "¿Qué palabra reservada se usa para definir un bloque de código asincrónico?",
        script: "",
        answers: [
            "async",
            "await",
            "future",
            "parallel"
        ],
        correctAnswer: 0
    },
    {
        id: 2078,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Python".title())`,
        answers: [
            "Python",
            "PYTHON",
            "python",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2079,
        question: "¿Qué método se usa para verificar si un string contiene solo dígitos?",
        script: "",
        answers: [
            "isdigit()",
            "isnumber()",
            "isnumeric()",
            "isint()"
        ],
        correctAnswer: 0
    },
    {
        id: 2080,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Python".isupper())`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 1
    },
    {
        id: 2081,
        question: "¿Qué palabra reservada se usa para definir una función asincrónica?",
        script: "",
        answers: [
            "async",
            "await",
            "future",
            "parallel"
        ],
        correctAnswer: 0
    },
    {
        id: 2082,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola Mundo".split())`,
        answers: [
            "['Hola','Mundo']",
            "Hola Mundo",
            "['Hola Mundo']",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2083,
        question: "¿Qué método se usa para verificar si al menos un elemento de un iterable es verdadero?",
        script: "",
        answers: [
            "any()",
            "all()",
            "some()",
            "check()"
        ],
        correctAnswer: 0
    },
    {
        id: 2084,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Python".swapcase())`,
        answers: [
            "PYTHON",
            "python",
            "pYTHON",
            "Error"
        ],
        correctAnswer: 2
    },
    {
        id: 2085,
        question: "¿Qué palabra reservada se usa para definir una función generadora?",
        script: "",
        answers: [
            "yield",
            "return",
            "generator",
            "func"
        ],
        correctAnswer: 0
    },
    {
        id: 2086,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("123".isnumeric())`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2087,
        question: "¿Qué método se usa para obtener los valores de un diccionario?",
        script: "",
        answers: [
            "values()",
            "keys()",
            "items()",
            "getValues()"
        ],
        correctAnswer: 0
    },
    {
        id: 2088,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".startswith("Ho"))`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2089,
        question: "¿Qué palabra reservada se usa para definir una función que devuelve múltiples valores?",
        script: "",
        answers: [
            "return",
            "yield",
            "multi",
            "tuple"
        ],
        correctAnswer: 0
    },
    {
        id: 2090,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".upper().lower())`,
        answers: [
            "hola",
            "Hola",
            "HOLA",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2091,
        question: "¿Qué método se usa para obtener pares clave-valor de un diccionario?",
        script: "",
        answers: [
            "items()",
            "pairs()",
            "entries()",
            "tuples()"
        ],
        correctAnswer: 0
    },
    {
        id: 2092,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".islower())`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 1
    },
    {
        id: 2093,
        question: "¿Qué palabra reservada se usa para definir un bloque de espera en asincronía?",
        script: "",
        answers: [
            "await",
            "async",
            "pause",
            "wait"
        ],
        correctAnswer: 0
    },
    {
        id: 2094,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".isupper())`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 1
    },
    {
        id: 2095,
        question: "¿Qué método se usa para convertir un conjunto en lista?",
        script: "",
        answers: [
            "list()",
            "set()",
            "tuple()",
            "array()"
        ],
        correctAnswer: 0
    },
    {
        id: 2096,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola Mundo".title())`,
        answers: [
            "Hola Mundo",
            "HOLA MUNDO",
            "hola mundo",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2097,
        question: "¿Qué palabra reservada se usa para definir un bloque condicional múltiple?",
        script: "",
        answers: [
            "elif",
            "elseif",
            "else if",
            "alt"
        ],
        correctAnswer: 0
    },
    {
        id: 2098,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".center(10,"*"))`,
        answers: [
            "***Hola***",
            "Hola*****",
            "*****Hola",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2099,
        question: "¿Qué método se usa para verificar si un string contiene solo letras?",
        script: "",
        answers: [
            "isalpha()",
            "isalnum()",
            "isdigit()",
            "isletter()"
        ],
        correctAnswer: 0
    },
    {
        id: 2100,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".zfill(6))`,
        answers: [
            "000Hola",
            "Hola000",
            "00Hola0",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2101,
        question: "¿Qué palabra reservada se usa para definir un bloque de código que se ejecuta en caso de error?",
        script: "",
        answers: [
            "except",
            "error",
            "catch",
            "handle"
        ],
        correctAnswer: 0
    },
    {
        id: 2102,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".ljust(8,"*"))`,
        answers: [
            "Hola****",
            "****Hola",
            "Hola",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2103,
        question: "¿Qué método se usa para verificar si un string contiene solo espacios?",
        script: "",
        answers: [
            "isspace()",
            "isblank()",
            "isempty()",
            "isnull()"
        ],
        correctAnswer: 0
    },
    {
        id: 2104,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".rjust(8,"-"))`,
        answers: [
            "----Hola",
            "Hola----",
            "Hola",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2105,
        question: "¿Qué palabra reservada se usa para definir un bloque de código que se ejecuta si no ocurre excepción?",
        script: "",
        answers: [
            "else",
            "finally",
            "except",
            "default"
        ],
        correctAnswer: 0
    },
    {
        id: 2106,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".islower())`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 1
    },
    {
        id: 2107,
        question: "¿Qué método se usa para verificar si un string contiene solo caracteres alfanuméricos?",
        script: "",
        answers: [
            "isalnum()",
            "isalpha()",
            "isdigit()",
            "isletter()"
        ],
        correctAnswer: 0
    },
    {
        id: 2108,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".isupper())`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 1
    },
    {
        id: 2109,
        question: "¿Qué palabra reservada se usa para definir un bloque de código que se ejecuta en paralelo?",
        script: "",
        answers: [
            "parallel",
            "async",
            "thread",
            "multiprocessing"
        ],
        correctAnswer: 1
    },
    {
        id: 2110,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".capitalize())`,
        answers: [
            "Hola",
            "HOLA",
            "hola",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2111,
        question: "¿Qué método se usa para verificar si un string contiene solo letras minúsculas?",
        script: "",
        answers: [
            "islower()",
            "isupper()",
            "isalpha()",
            "ismin()"
        ],
        correctAnswer: 0
    },
    {
        id: 2112,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".upper())`,
        answers: [
            "HOLA",
            "Hola",
            "hola",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2113,
        question: "¿Qué palabra reservada se usa para definir un bloque de código que se ejecuta al finalizar?",
        script: "",
        answers: [
            "finally",
            "end",
            "close",
            "exit"
        ],
        correctAnswer: 0
    },
    {
        id: 2114,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".strip("H"))`,
        answers: [
            "ola",
            "Hola",
            "Hol",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2115,
        question: "¿Qué método se usa para verificar si un string contiene solo letras mayúsculas?",
        script: "",
        answers: [
            "isupper()",
            "islower()",
            "isalpha()",
            "ismax()"
        ],
        correctAnswer: 0
    },
    {
        id: 2116,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".replace("o","0"))`,
        answers: [
            "H0la",
            "Hola",
            "Ho0la",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2117,
        question: "¿Qué palabra reservada se usa para definir un bloque de código que se ejecuta en caso de excepción específica?",
        script: "",
        answers: [
            "except ValueError",
            "error ValueError",
            "catch ValueError",
            "handle ValueError"
        ],
        correctAnswer: 0
    },
    {
        id: 2118,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".find("a"))`,
        answers: [
            "3",
            "2",
            "1",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2119,
        question: "¿Qué método se usa para verificar si un string contiene solo caracteres alfabéticos?",
        script: "",
        answers: [
            "isalpha()",
            "isalnum()",
            "isdigit()",
            "isletters()"
        ],
        correctAnswer: 0
    },
    {
        id: 2120,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".count("o"))`,
        answers: [
            "1",
            "2",
            "0",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2121,
        question: "¿Qué palabra reservada se usa para definir un bloque de código que se ejecuta en caso de excepción general?",
        script: "",
        answers: [
            "except",
            "error",
            "catch",
            "handle"
        ],
        correctAnswer: 0
    },
    {
        id: 2122,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".index("a"))`,
        answers: [
            "3",
            "2",
            "1",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2123,
        question: "¿Qué método se usa para verificar si un string contiene solo caracteres numéricos?",
        script: "",
        answers: [
            "isdigit()",
            "isalpha()",
            "isalnum()",
            "isnumber()"
        ],
        correctAnswer: 0
    },
    {
        id: 2124,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".replace("l","L"))`,
        answers: [
            "HoLa",
            "Hola",
            "HOLa",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2125,
        question: "¿Qué palabra reservada se usa para definir un bloque de código que se ejecuta en caso de excepción específica?",
        script: "",
        answers: [
            "except ValueError",
            "error ValueError",
            "catch ValueError",
            "handle ValueError"
        ],
        correctAnswer: 0
    },
    {
        id: 2126,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".startswith("H"))`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2127,
        question: "¿Qué método se usa para verificar si un string contiene solo caracteres alfabéticos?",
        script: "",
        answers: [
            "isalpha()",
            "isalnum()",
            "isdigit()",
            "isletters()"
        ],
        correctAnswer: 0
    },
    {
        id: 2128,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".endswith("a"))`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2129,
        question: "¿Qué palabra reservada se usa para definir un bloque de código que se ejecuta en caso de excepción múltiple?",
        script: "",
        answers: [
            "except (ValueError,TypeError)",
            "error",
            "catch",
            "handle"
        ],
        correctAnswer: 0
    },
    {
        id: 2130,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".islower())`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 1
    },
    {
        id: 2131,
        question: "¿Qué método se usa para verificar si un string contiene solo letras mayúsculas?",
        script: "",
        answers: [
            "isupper()",
            "islower()",
            "isalpha()",
            "ismax()"
        ],
        correctAnswer: 0
    },
    {
        id: 2132,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".upper())`,
        answers: [
            "HOLA",
            "Hola",
            "hola",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2133,
        question: "¿Qué palabra reservada se usa para definir un bloque de código que se ejecuta en caso de excepción no capturada?",
        script: "",
        answers: [
            "finally",
            "else",
            "except",
            "default"
        ],
        correctAnswer: 0
    },
    {
        id: 2134,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".strip("a"))`,
        answers: [
            "Hol",
            "Hola",
            "Ho",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2135,
        question: "¿Qué método se usa para verificar si un string contiene solo caracteres alfanuméricos?",
        script: "",
        answers: [
            "isalnum()",
            "isalpha()",
            "isdigit()",
            "isletters()"
        ],
        correctAnswer: 0
    },
    {
        id: 2136,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".replace("H","h"))`,
        answers: [
            "hola",
            "Hola",
            "hOla",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2137,
        question: "¿Qué palabra reservada se usa para definir un bloque de código que se ejecuta en caso de excepción general?",
        script: "",
        answers: [
            "except",
            "error",
            "catch",
            "handle"
        ],
        correctAnswer: 0
    },
    {
        id: 2138,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".find("H"))`,
        answers: [
            "0",
            "1",
            "2",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2139,
        question: "¿Qué método se usa para verificar si un string contiene solo caracteres numéricos?",
        script: "",
        answers: [
            "isdigit()",
            "isalpha()",
            "isalnum()",
            "isnumber()"
        ],
        correctAnswer: 0
    },
    {
        id: 2140,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".upper().isupper())`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2141,
        question: "¿Qué palabra reservada se usa para definir un bloque de código que se ejecuta en caso de excepción específica?",
        script: "",
        answers: [
            "except",
            "error",
            "catch",
            "handle"
        ],
        correctAnswer: 0
    },
    {
        id: 2142,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".lower().islower())`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2143,
        question: "¿Qué método se usa para verificar si un string contiene solo caracteres de espacio?",
        script: "",
        answers: [
            "isspace()",
            "isblank()",
            "isempty()",
            "isnull()"
        ],
        correctAnswer: 0
    },
    {
        id: 2144,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".replace("a","@"))`,
        answers: [
            "Hol@",
            "Hola",
            "Ho@la",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2145,
        question: "¿Qué palabra reservada se usa para definir un bloque de código que se ejecuta en caso de excepción múltiple?",
        script: "",
        answers: [
            "except (ValueError,TypeError)",
            "error",
            "catch",
            "handle"
        ],
        correctAnswer: 0
    },
    {
        id: 2146,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".find("z"))`,
        answers: [
            "-1",
            "None",
            "Error",
            "0"
        ],
        correctAnswer: 0
    },
    {
        id: 2147,
        question: "¿Qué método se usa para verificar si un string contiene solo letras?",
        script: "",
        answers: [
            "isalpha()",
            "isalnum()",
            "isdigit()",
            "isletters()"
        ],
        correctAnswer: 0
    },
    {
        id: 2148,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".startswith("Ho"))`,
        answers: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2149,
        question: "¿Qué palabra reservada se usa para definir un bloque de código que se ejecuta siempre?",
        script: "",
        answers: [
            "finally",
            "always",
            "end",
            "default"
        ],
        correctAnswer: 0
    },
    {
        id: 2150,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".title())`,
        answers: [
            "Hola",
            "HOLA",
            "hola",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2151,
        question: "¿Qué método se usa para verificar si un string contiene solo caracteres numéricos?",
        script: "",
        answers: [
            "isdigit()",
            "isalpha()",
            "isalnum()",
            "isnumber()"
        ],
        correctAnswer: 0
    },
    {
        id: 2152,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".swapcase())`,
        answers: [
            "hOLA",
            "Hola",
            "HOLA",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2153,
        question: "¿Qué palabra reservada se usa para definir un bloque de código asincrónico?",
        script: "",
        answers: [
            "async",
            "await",
            "future",
            "parallel"
        ],
        correctAnswer: 0
    },
    {
        id: 2154,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".center(8,"*"))`,
        answers: [
            "**Hola**",
            "Hola****",
            "****Hola",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2155,
        question: "¿Qué método se usa para verificar si un string contiene solo caracteres alfanuméricos?",
        script: "",
        answers: [
            "isalnum()",
            "isalpha()",
            "isdigit()",
            "isletters()"
        ],
        correctAnswer: 0
    },
    {
        id: 2156,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".zfill(6))`,
        answers: [
            "00Hola",
            "000Hola",
            "Hola000",
            "Error"
        ],
        correctAnswer: 1
    },
    {
        id: 2157,
        question: "¿Qué palabra reservada se usa para definir un bloque de código que se ejecuta en caso de excepción general?",
        script: "",
        answers: [
            "except",
            "error",
            "catch",
            "handle"
        ],
        correctAnswer: 0
    },
    {
        id: 2158,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".ljust(8,"-"))`,
        answers: [
            "Hola----",
            "----Hola",
            "Hola",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2159,
        question: "¿Qué método se usa para verificar si un string contiene solo espacios?",
        script: "",
        answers: [
            "isspace()",
            "isblank()",
            "isempty()",
            "isnull()"
        ],
        correctAnswer: 0
    },
    {
        id: 2160,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".rjust(8,"*"))`,
        answers: [
            "****Hola",
            "Hola****",
            "Hola",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2161,
        question: "¿Qué palabra reservada se usa para definir un bloque de código que se ejecuta si no ocurre excepción?",
        script: "",
        answers: [
            "else",
            "finally",
            "except",
            "default"
        ],
        correctAnswer: 0
    },
    {
        id: 2162,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".center(10,"-"))`,
        answers: [
            "---Hola---",
            "Hola------",
            "------Hola",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2163,
        question: "¿Qué método se usa para verificar si un string contiene solo letras minúsculas?",
        script: "",
        answers: [
            "islower()",
            "isupper()",
            "isalpha()",
            "ismin()"
        ],
        correctAnswer: 0
    },
    {
        id: 2164,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".upper().lower())`,
        answers: [
            "hola",
            "Hola",
            "HOLA",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2165,
        question: "¿Qué palabra reservada se usa para definir un bloque de código asincrónico?",
        script: "",
        answers: [
            "async",
            "await",
            "future",
            "parallel"
        ],
        correctAnswer: 0
    },
    {
        id: 2166,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".replace("H","h"))`,
        answers: [
            "hola",
            "Hola",
            "hOla",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2167,
        question: "¿Qué método se usa para verificar si un string contiene solo caracteres alfanuméricos?",
        script: "",
        answers: [
            "isalnum()",
            "isalpha()",
            "isdigit()",
            "isletters()"
        ],
        correctAnswer: 0
    },
    {
        id: 2168,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".find("o"))`,
        answers: [
            "1",
            "2",
            "0",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2169,
        question: "¿Qué palabra reservada se usa para definir un bloque de código que se ejecuta siempre?",
        script: "",
        answers: [
            "finally",
            "always",
            "end",
            "default"
        ],
        correctAnswer: 0
    },
    {
        id: 2170,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".title())`,
        answers: [
            "Hola",
            "HOLA",
            "hola",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2171,
        question: "¿Qué método se usa para verificar si un string contiene solo caracteres numéricos?",
        script: "",
        answers: [
            "isdigit()",
            "isalpha()",
            "isalnum()",
            "isnumber()"
        ],
        correctAnswer: 0
    },
    {
        id: 2172,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".swapcase())`,
        answers: [
            "hOLA",
            "Hola",
            "HOLA",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2173,
        question: "¿Qué palabra reservada se usa para definir un bloque de código asincrónico?",
        script: "",
        answers: [
            "async",
            "await",
            "future",
            "parallel"
        ],
        correctAnswer: 0
    },
    {
        id: 2174,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".center(8,"*"))`,
        answers: [
            "**Hola**",
            "Hola****",
            "****Hola",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2175,
        question: "¿Qué método se usa para verificar si un string contiene solo caracteres alfabéticos?",
        script: "",
        answers: [
            "isalpha()",
            "isalnum()",
            "isdigit()",
            "isletters()"
        ],
        correctAnswer: 0
    },
    {
        id: 2176,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".zfill(6))`,
        answers: [
            "00Hola",
            "000Hola",
            "Hola000",
            "Error"
        ],
        correctAnswer: 1
    },
    {
        id: 2177,
        question: "¿Qué palabra reservada se usa para definir un bloque de código que se ejecuta en caso de excepción general?",
        script: "",
        answers: [
            "except",
            "error",
            "catch",
            "handle"
        ],
        correctAnswer: 0
    },
    {
        id: 2178,
        question: "¿Cuál es la salida del siguiente bloque de código?",
        script: `print("Hola".ljust(8,"-"))`,
        answers: [
            "Hola----",
            "----Hola",
            "Hola",
            "Error"
        ],
        correctAnswer: 0
    },
    {
        id: 2179,
        question: "¿Qué método se usa para verificar si un string contiene solo espacios?",
        script: "",
        answers: [
            "isspace()",
            "isblank()",
            "isempty()",
            "isnull()"
        ],
        correctAnswer: 0
    },
];

export default intermediateQuestions;