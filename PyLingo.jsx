import {
  CheckCircle,
  Flame,
  Lightbulb,
  Lock,
  Play,
  RotateCcw,
  Trophy,
} from "lucide-react";
import { useEffect, useState } from "react";

const TRANSLATIONS = {
  "en-US": {
    helloWorldTitle: "Hello World",
    helloWorldDescription:
      "Welcome to Python! Let's start with the traditional first program.",
    helloWorldTask:
      "Write a program that prints 'Hello, World!' to the console.",
    helloWorldHint:
      "Use the print() function with the text in quotes: print('Hello, World!')",
    variablesNumbersTitle: "Variables and Numbers",
    variablesNumbersDescription:
      "Learn to store and work with numbers using variables.",
    variablesNumbersTask:
      "Create a variable called 'age' with value 25, then print it.",
    variablesNumbersHint:
      "Create a variable: age = 25, then print it: print(age)",
    stringVariablesTitle: "String Variables",
    stringVariablesDescription: "Work with text data using string variables.",
    stringVariablesTask:
      "Create a variable called 'name' with your name, then print 'Hello, [name]!'",
    stringVariablesHint:
      "Use string concatenation or f-strings: print(f'Hello, {name}!')",
    userInputTitle: "User Input",
    userInputDescription: "Learn to get input from users and respond.",
    userInputTask:
      "Ask for the user's favorite color and print 'Your favorite color is [color]'",
    userInputHint:
      "Use input() to get user input: color = input('What is your favorite color? ')",
    basicMathTitle: "Basic Math",
    basicMathDescription: "Perform mathematical operations in Python.",
    basicMathTask: "Calculate 15 + 27 and print the result.",
    basicMathHint: "Use the + operator: print(15 + 27)",
    conditionalsTitle: "Conditionals",
    conditionalsDescription: "Make decisions in your code with if statements.",
    conditionalsTask:
      "Check if the number 10 is greater than 5. If true, print 'Yes, 10 is greater than 5'",
    conditionalsHint:
      "Use if statement: if number > 5: print('Yes, 10 is greater than 5')",
    forLoopsTitle: "For Loops",
    forLoopsDescription: "Repeat actions using for loops.",
    forLoopsTask: "Print numbers from 1 to 3 using a for loop.",
    forLoopsHint: "Use range(): for i in range(1, 4): print(i)",
    whileLoopsTitle: "While Loops",
    whileLoopsDescription: "Use while loops for conditional repetition.",
    whileLoopsTask: "Print numbers from 1 to 3 using a while loop.",
    whileLoopsHint:
      "Increment count each iteration: while count <= 3: print(count); count += 1",
    listsBasicsTitle: "Lists Basics",
    listsBasicsDescription: "Store multiple items in lists.",
    listsBasicsTask:
      "Create a list with fruits ['apple', 'banana', 'orange'] and print the second item.",
    listsBasicsHint:
      "Lists use zero-based indexing: fruits[1] gets the second item",
    listOperationsTitle: "List Operations",
    listOperationsDescription: "Add and modify list items.",
    listOperationsTask:
      "Create a list [1, 2, 3], add the number 4, then print the entire list.",
    listOperationsHint:
      "Use append() method: numbers.append(4), then print(numbers)",
    functionsBasicsTitle: "Functions Basics",
    functionsBasicsDescription: "Create reusable code with functions.",
    functionsBasicsTask:
      "Define a function called 'greet' that prints 'Hello!' and then call it.",
    functionsBasicsHint:
      "Use def keyword: def greet(): print('Hello!'), then call greet()",
    functionsParametersTitle: "Functions with Parameters",
    functionsParametersDescription: "Pass data to functions using parameters.",
    functionsParametersTask:
      "Create a function 'say_hello' that takes a name parameter and prints 'Hello, [name]!'. Call it with 'World'.",
    functionsParametersHint:
      "def say_hello(name): print(f'Hello, {name}!'), then call say_hello('World')",
    dictionariesTitle: "Dictionaries",
    dictionariesDescription: "Store key-value pairs using dictionaries.",
    dictionariesTask:
      "Create a dictionary with person info: name='Alice', age=30. Print the name.",
    dictionariesHint:
      "Use curly braces: person = {'name': 'Alice', 'age': 30}, access with person['name']",
    stringMethodsTitle: "String Methods",
    stringMethodsDescription: "Manipulate strings with built-in methods.",
    stringMethodsTask:
      "Take the string 'python programming' and print it in uppercase.",
    stringMethodsHint: "Use the upper() method: text.upper()",
    finalChallengeTitle: "Final Challenge",
    finalChallengeDescription: "Combine everything you've learned!",
    finalChallengeTask:
      "Create a list of numbers [1,2,3,4,5], use a for loop to print each number multiplied by 2.",
    finalChallengeHint:
      "Loop through the list: for num in numbers: print(num * 2)",
    starterCodeComment: "# Write your code here\n",
    createVariableComment: "# Create a variable and print it\n",
    createStringComment: "# Create a string variable\n",
    getUserInputComment: "# Get user input and respond\n",
    calculateSumComment: "# Calculate and print the sum\n",
    useIfStatementComment: "# Use an if statement\nnumber = 10\n",
    useForLoopComment: "# Use a for loop to print numbers\n",
    useWhileLoopComment: "# Use a while loop\ncount = 1\n",
    createListComment: "# Create a list and access items\n",
    createListAddComment: "# Create list and add item\n",
    defineFunctionComment: "# Define and call a function\n",
    functionParameterComment: "# Function with parameter\n",
    createDictionaryComment: "# Create and use a dictionary\n",
    stringMethodsComment: "# Use string methods\ntext = 'python programming'\n",
    finalChallengeComment: "# Final challenge - combine concepts\n",
    appTitle: "PyLingo",
    levelsProgress: "Levels",
    streakLabel: "streak",
    levelButton: "Level",
    overallProgress: "Overall Progress",
    selectLevel: "Select Level",
    closeButton: "×",
    taskLabel: "Task:",
    showHint: "Show Hint",
    hideHint: "Hide Hint",
    pythonCodeEditor: "Python Code Editor",
    resetButton: "Reset",
    runCodeButton: "Run Code",
    codeEditorPlaceholder: "Write your Python code here...",
    previousLevel: "Previous Level",
    nextLevel: "Next Level",
    levelOf: "Level {current} of {total}",
    evaluatingCode: "🤔 Evaluating your code...",
    excellentComplete: "🎉 Excellent! You completed this level!",
    notQuiteRight: "Not quite right. Let's review your solution:",
    yourOutput: "Your output:",
    expectedOutput: "Expected output:",
    tipLabel: "Tip:",
  },
  /* LOCALE_PLACEHOLDER_START */
  "es-ES": {
    helloWorldTitle: "Hola Mundo",
    helloWorldDescription:
      "¡Bienvenido a Python! Comencemos con el programa tradicional.",
    helloWorldTask:
      "Escribe un programa que imprima '¡Hola, Mundo!' en la consola.",
    helloWorldHint:
      "Usa la función print() con el texto entre comillas: print('¡Hola, Mundo!')",
    variablesNumbersTitle: "Variables y Números",
    variablesNumbersDescription:
      "Aprende a almacenar y trabajar con números usando variables.",
    variablesNumbersTask:
      "Crea una variable llamada 'edad' con valor 25, luego imprímela.",
    variablesNumbersHint:
      "Crea una variable: edad = 25, luego imprímela: print(edad)",
    stringVariablesTitle: "Variables de Cadena",
    stringVariablesDescription:
      "Trabaja con datos de texto usando variables de cadena.",
    stringVariablesTask:
      "Crea una variable llamada 'nombre' con tu nombre, luego imprime '¡Hola, [nombre]!'",
    stringVariablesHint:
      "Usa concatenación de cadenas o f-strings: print(f'¡Hola, {nombre}!')",
    userInputTitle: "Entrada del Usuario",
    userInputDescription:
      "Aprende a obtener entrada de los usuarios y responder.",
    userInputTask:
      "Pregunta por el color favorito del usuario e imprime 'Tu color favorito es [color]'",
    userInputHint:
      "Usa input() para obtener entrada del usuario: color = input('¿Cuál es tu color favorito? ')",
    basicMathTitle: "Matemáticas Básicas",
    basicMathDescription: "Realiza operaciones matemáticas en Python.",
    basicMathTask: "Calcula 15 + 27 e imprime el resultado.",
    basicMathHint: "Usa el operador +: print(15 + 27)",
    conditionalsTitle: "Condicionales",
    conditionalsDescription:
      "Toma decisiones en tu código con declaraciones if.",
    conditionalsTask:
      "Verifica si el número 10 es mayor que 5. Si es verdadero, imprime 'Sí, 10 es mayor que 5'",
    conditionalsHint:
      "Usa declaración if: if numero > 5: print('Sí, 10 es mayor que 5')",
    forLoopsTitle: "Bucles For",
    forLoopsDescription: "Repite acciones usando bucles for.",
    forLoopsTask: "Imprime números del 1 al 3 usando un bucle for.",
    forLoopsHint: "Usa range(): for i in range(1, 4): print(i)",
    whileLoopsTitle: "Bucles While",
    whileLoopsDescription: "Usa bucles while para repetición condicional.",
    whileLoopsTask: "Imprime números del 1 al 3 usando un bucle while.",
    whileLoopsHint:
      "Incrementa contador en cada iteración: while contador <= 3: print(contador); contador += 1",
    listsBasicsTitle: "Fundamentos de Listas",
    listsBasicsDescription: "Almacena múltiples elementos en listas.",
    listsBasicsTask:
      "Crea una lista con frutas ['manzana', 'plátano', 'naranja'] e imprime el segundo elemento.",
    listsBasicsHint:
      "Las listas usan indexación basada en cero: frutas[1] obtiene el segundo elemento",
    listOperationsTitle: "Operaciones de Lista",
    listOperationsDescription: "Agrega y modifica elementos de lista.",
    listOperationsTask:
      "Crea una lista [1, 2, 3], agrega el número 4, luego imprime toda la lista.",
    listOperationsHint:
      "Usa el método append(): numeros.append(4), luego print(numeros)",
    functionsBasicsTitle: "Fundamentos de Funciones",
    functionsBasicsDescription: "Crea código reutilizable con funciones.",
    functionsBasicsTask:
      "Define una función llamada 'saludar' que imprima '¡Hola!' y luego llámala.",
    functionsBasicsHint:
      "Usa la palabra clave def: def saludar(): print('¡Hola!'), luego llama saludar()",
    functionsParametersTitle: "Funciones con Parámetros",
    functionsParametersDescription: "Pasa datos a funciones usando parámetros.",
    functionsParametersTask:
      "Crea una función 'decir_hola' que tome un parámetro nombre e imprima '¡Hola, [nombre]!'. Llámala con 'Mundo'.",
    functionsParametersHint:
      "def decir_hola(nombre): print(f'¡Hola, {nombre}!'), luego llama decir_hola('Mundo')",
    dictionariesTitle: "Diccionarios",
    dictionariesDescription: "Almacena pares clave-valor usando diccionarios.",
    dictionariesTask:
      "Crea un diccionario con información de persona: nombre='Alicia', edad=30. Imprime el nombre.",
    dictionariesHint:
      "Usa llaves: persona = {'nombre': 'Alicia', 'edad': 30}, accede con persona['nombre']",
    stringMethodsTitle: "Métodos de Cadena",
    stringMethodsDescription: "Manipula cadenas con métodos incorporados.",
    stringMethodsTask:
      "Toma la cadena 'programación python' e imprímela en mayúsculas.",
    stringMethodsHint: "Usa el método upper(): texto.upper()",
    finalChallengeTitle: "Desafío Final",
    finalChallengeDescription: "¡Combina todo lo que has aprendido!",
    finalChallengeTask:
      "Crea una lista de números [1,2,3,4,5], usa un bucle for para imprimir cada número multiplicado por 2.",
    finalChallengeHint: "Recorre la lista: for num in numeros: print(num * 2)",
    starterCodeComment: "# Escribe tu código aquí\n",
    createVariableComment: "# Crea una variable e imprímela\n",
    createStringComment: "# Crea una variable de cadena\n",
    getUserInputComment: "# Obtén entrada del usuario y responde\n",
    calculateSumComment: "# Calcula e imprime la suma\n",
    useIfStatementComment: "# Usa una declaración if\nnumero = 10\n",
    useForLoopComment: "# Usa un bucle for para imprimir números\n",
    useWhileLoopComment: "# Usa un bucle while\ncontador = 1\n",
    createListComment: "# Crea una lista y accede a elementos\n",
    createListAddComment: "# Crea lista y agrega elemento\n",
    defineFunctionComment: "# Define y llama una función\n",
    functionParameterComment: "# Función con parámetro\n",
    createDictionaryComment: "# Crea y usa un diccionario\n",
    stringMethodsComment:
      "# Usa métodos de cadena\ntexto = 'programación python'\n",
    finalChallengeComment: "# Desafío final - combina conceptos\n",
    appTitle: "PyLingo",
    levelsProgress: "Niveles",
    streakLabel: "racha",
    levelButton: "Nivel",
    overallProgress: "Progreso General",
    selectLevel: "Seleccionar Nivel",
    closeButton: "×",
    taskLabel: "Tarea:",
    showHint: "Mostrar Pista",
    hideHint: "Ocultar Pista",
    pythonCodeEditor: "Editor de Código Python",
    resetButton: "Reiniciar",
    runCodeButton: "Ejecutar Código",
    codeEditorPlaceholder: "Escribe tu código Python aquí...",
    previousLevel: "Nivel Anterior",
    nextLevel: "Siguiente Nivel",
    levelOf: "Nivel {current} de {total}",
    evaluatingCode: "🤔 Evaluando tu código...",
    excellentComplete: "🎉 ¡Excelente! ¡Completaste este nivel!",
    notQuiteRight: "No está del todo bien. Revisemos tu solución:",
    yourOutput: "Tu salida:",
    expectedOutput: "Salida esperada:",
    tipLabel: "Consejo:",
  },
  /* LOCALE_PLACEHOLDER_END */
};

const appLocale = "{{APP_LOCALE}}";
const browserLocale = navigator.languages?.[0] || navigator.language || "en-US";
const findMatchingLocale = (locale) => {
  if (TRANSLATIONS[locale]) return locale;
  const lang = locale.split("-")[0];
  const match = Object.keys(TRANSLATIONS).find((key) =>
    key.startsWith(lang + "-"),
  );
  return match || "en-US";
};
const locale =
  appLocale !== "{{APP_LOCALE}}"
    ? findMatchingLocale(appLocale)
    : findMatchingLocale(browserLocale);
const t = (key) =>
  TRANSLATIONS[locale]?.[key] || TRANSLATIONS["en-US"][key] || key;

const PyLingo = () => {
  // Level definitions
  const levels = [
    {
      id: 1,
      title: t("helloWorldTitle"),
      description: t("helloWorldDescription"),
      task: t("helloWorldTask"),
      starterCode: t("starterCodeComment"),
      expectedOutput: "Hello, World!",
      hint: t("helloWorldHint"),
      solution: "print('Hello, World!')",
    },
    {
      id: 2,
      title: t("variablesNumbersTitle"),
      description: t("variablesNumbersDescription"),
      task: t("variablesNumbersTask"),
      starterCode: t("createVariableComment"),
      expectedOutput: "25",
      hint: t("variablesNumbersHint"),
      solution: "age = 25\nprint(age)",
    },
    {
      id: 3,
      title: t("stringVariablesTitle"),
      description: t("stringVariablesDescription"),
      task: t("stringVariablesTask"),
      starterCode: t("createStringComment"),
      expectedOutput: "Hello, Python!",
      hint: t("stringVariablesHint"),
      solution: "name = 'Python'\nprint(f'Hello, {name}!')",
    },
    {
      id: 4,
      title: t("userInputTitle"),
      description: t("userInputDescription"),
      task: t("userInputTask"),
      starterCode: t("getUserInputComment"),
      expectedOutput: "Your favorite color is blue",
      hint: t("userInputHint"),
      solution:
        "color = input('What is your favorite color? ')\nprint(f'Your favorite color is {color}')",
    },
    {
      id: 5,
      title: t("basicMathTitle"),
      description: t("basicMathDescription"),
      task: t("basicMathTask"),
      starterCode: t("calculateSumComment"),
      expectedOutput: "42",
      hint: t("basicMathHint"),
      solution: "print(15 + 27)",
    },
    {
      id: 6,
      title: t("conditionalsTitle"),
      description: t("conditionalsDescription"),
      task: t("conditionalsTask"),
      starterCode: t("useIfStatementComment"),
      expectedOutput: "Yes, 10 is greater than 5",
      hint: t("conditionalsHint"),
      solution:
        "number = 10\nif number > 5:\n    print('Yes, 10 is greater than 5')",
    },
    {
      id: 7,
      title: t("forLoopsTitle"),
      description: t("forLoopsDescription"),
      task: t("forLoopsTask"),
      starterCode: t("useForLoopComment"),
      expectedOutput: "1\n2\n3",
      hint: t("forLoopsHint"),
      solution: "for i in range(1, 4):\n    print(i)",
    },
    {
      id: 8,
      title: t("whileLoopsTitle"),
      description: t("whileLoopsDescription"),
      task: t("whileLoopsTask"),
      starterCode: t("useWhileLoopComment"),
      expectedOutput: "1\n2\n3",
      hint: t("whileLoopsHint"),
      solution:
        "count = 1\nwhile count <= 3:\n    print(count)\n    count += 1",
    },
    {
      id: 9,
      title: t("listsBasicsTitle"),
      description: t("listsBasicsDescription"),
      task: t("listsBasicsTask"),
      starterCode: t("createListComment"),
      expectedOutput: "banana",
      hint: t("listsBasicsHint"),
      solution: "fruits = ['apple', 'banana', 'orange']\nprint(fruits[1])",
    },
    {
      id: 10,
      title: t("listOperationsTitle"),
      description: t("listOperationsDescription"),
      task: t("listOperationsTask"),
      starterCode: t("createListAddComment"),
      expectedOutput: "[1, 2, 3, 4]",
      hint: t("listOperationsHint"),
      solution: "numbers = [1, 2, 3]\nnumbers.append(4)\nprint(numbers)",
    },
    {
      id: 11,
      title: t("functionsBasicsTitle"),
      description: t("functionsBasicsDescription"),
      task: t("functionsBasicsTask"),
      starterCode: t("defineFunctionComment"),
      expectedOutput: "Hello!",
      hint: t("functionsBasicsHint"),
      solution: "def greet():\n    print('Hello!')\n\ngreet()",
    },
    {
      id: 12,
      title: t("functionsParametersTitle"),
      description: t("functionsParametersDescription"),
      task: t("functionsParametersTask"),
      starterCode: t("functionParameterComment"),
      expectedOutput: "Hello, World!",
      hint: t("functionsParametersHint"),
      solution:
        "def say_hello(name):\n    print(f'Hello, {name}!')\n\nsay_hello('World')",
    },
    {
      id: 13,
      title: t("dictionariesTitle"),
      description: t("dictionariesDescription"),
      task: t("dictionariesTask"),
      starterCode: t("createDictionaryComment"),
      expectedOutput: "Alice",
      hint: t("dictionariesHint"),
      solution: "person = {'name': 'Alice', 'age': 30}\nprint(person['name'])",
    },
    {
      id: 14,
      title: t("stringMethodsTitle"),
      description: t("stringMethodsDescription"),
      task: t("stringMethodsTask"),
      starterCode: t("stringMethodsComment"),
      expectedOutput: "PYTHON PROGRAMMING",
      hint: t("stringMethodsHint"),
      solution: "text = 'python programming'\nprint(text.upper())",
    },
    {
      id: 15,
      title: t("finalChallengeTitle"),
      description: t("finalChallengeDescription"),
      task: t("finalChallengeTask"),
      starterCode: t("finalChallengeComment"),
      expectedOutput: "2\n4\n6\n8\n10",
      hint: t("finalChallengeHint"),
      solution:
        "numbers = [1, 2, 3, 4, 5]\nfor num in numbers:\n    print(num * 2)",
    },
  ];

  // State management
  const [currentLevel, setCurrentLevel] = useState(1);
  const [userCode, setUserCode] = useState(levels[0].starterCode);
  const [completedLevels, setCompletedLevels] = useState(new Set());
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [streak, setStreak] = useState(0);
  const [showLevelSelector, setShowLevelSelector] = useState(false);

  // Update user code when level changes
  useEffect(() => {
    const level = levels.find((l) => l.id === currentLevel);
    setUserCode(level.starterCode);
    setShowHint(false);
    setFeedback(null);
  }, [currentLevel]);

  // Simple code execution simulation
  const executeCode = (code) => {
    try {
      // Simulate Python print statements
      const printRegex = /print\((.*?)\)/g;
      const matches = [];
      let match;

      while ((match = printRegex.exec(code)) !== null) {
        let value = match[1].trim();

        // Handle different types of print statements
        if (value.startsWith("'") && value.endsWith("'")) {
          // String literal
          matches.push(value.slice(1, -1));
        } else if (value.startsWith('"') && value.endsWith('"')) {
          // String literal
          matches.push(value.slice(1, -1));
        } else if (value.match(/^\d+$/)) {
          // Number literal
          matches.push(value);
        } else if (value.includes("f'") || value.includes('f"')) {
          // F-string simulation
          if (
            code.includes("name = 'Python'") ||
            code.includes('name = "Python"')
          ) {
            matches.push(
              value.replace(/f['"]Hello, \{name\}!['"]/, "Hello, Python!"),
            );
          }
          if (code.includes("color = input(")) {
            matches.push("Your favorite color is blue");
          }
        } else if (value.includes("+")) {
          // Mathematical operations
          try {
            const result = eval(value);
            matches.push(result.toString());
          } catch {
            matches.push(value);
          }
        } else if (code.includes("fruits[1]")) {
          matches.push("banana");
        } else if (code.includes("[1, 2, 3, 4]")) {
          matches.push("[1, 2, 3, 4]");
        } else if (code.includes("person['name']")) {
          matches.push("Alice");
        } else if (code.includes(".upper()")) {
          matches.push("PYTHON PROGRAMMING");
        } else {
          // Variable or expression
          if (code.includes("age = 25")) matches.push("25");
          if (code.includes("Hello!")) matches.push("Hello!");
          if (code.includes("Hello, World!")) matches.push("Hello, World!");
          if (code.includes("Yes, 10 is greater than 5"))
            matches.push("Yes, 10 is greater than 5");
        }
      }

      // Handle loops
      if (code.includes("for i in range(1, 4)")) {
        matches.push("1", "2", "3");
      }
      if (code.includes("while count <= 3")) {
        matches.push("1", "2", "3");
      }
      if (
        code.includes("for num in numbers:") &&
        code.includes("print(num * 2)")
      ) {
        matches.push("2", "4", "6", "8", "10");
      }

      return matches.join("\n");
    } catch (error) {
      return "Error: " + error.message;
    }
  };

  const handleSubmit = async () => {
    const level = levels.find((l) => l.id === currentLevel);

    // Set loading state
    setFeedback({
      type: "loading",
      message: t("evaluatingCode"),
    });

    try {
      const prompt = `
You are evaluating Python code submissions for a learning platform. Compare the user's code with the expected solution to determine if they are functionally equivalent.

Task: ${level.task}
Expected Output: ${level.expectedOutput}

User's Code:
${userCode}

Expected Solution:
${level.solution}

Evaluate if the user's code will produce the same output as the expected solution. Consider:
1. Does the user's code accomplish the same task?
2. Will it produce the exact same output?
3. Are there any syntax errors?
4. Does it follow reasonable Python practices?

Please respond in ${locale} language.

Respond ONLY with a valid JSON object in this exact format:
{
  "isCorrect": true/false,
  "explanation": "Brief explanation of why the code is correct or incorrect",
  "feedback": "Constructive feedback for the learner",
  "outputMatches": true/false
}

DO NOT OUTPUT ANYTHING OTHER THAN VALID JSON.
`;

      const response = await window.claude.complete(prompt);
      const evaluation = JSON.parse(response);

      if (evaluation.isCorrect) {
        setCompletedLevels((prev) => new Set([...prev, currentLevel]));
        setStreak((prev) => prev + 1);
        setFeedback({
          type: "success",
          message: t("excellentComplete"),
          explanation: evaluation.feedback,
        });
      } else {
        setStreak(0);
        setFeedback({
          type: "error",
          message: t("notQuiteRight"),
          explanation: evaluation.feedback,
          hint: evaluation.explanation,
          expectedOutput: level.expectedOutput,
        });
      }
    } catch (error) {
      console.error("Error evaluating code:", error);
      // Fallback to simple output comparison if Claude evaluation fails
      const output = executeCode(userCode);
      const isCorrect = output.trim() === level.expectedOutput.trim();

      if (isCorrect) {
        setCompletedLevels((prev) => new Set([...prev, currentLevel]));
        setStreak((prev) => prev + 1);
        setFeedback({
          type: "success",
          message: t("excellentComplete"),
          output: output,
        });
      } else {
        setStreak(0);
        setFeedback({
          type: "error",
          message: t("notQuiteRight"),
          output: output,
          expected: level.expectedOutput,
          explanation: level.hint,
        });
      }
    }
  };

  const handleReset = () => {
    const level = levels.find((l) => l.id === currentLevel);
    setUserCode(level.starterCode);
    setFeedback(null);
    setShowHint(false);
  };

  const handleLevelChange = (levelId) => {
    // Only allow access to level 1 or completed levels or the next uncompleted level
    const maxUnlockedLevel = Math.max(
      1,
      Math.max(...Array.from(completedLevels)) + 1,
    );
    if (levelId <= maxUnlockedLevel) {
      setCurrentLevel(levelId);
      setShowLevelSelector(false);
    }
  };

  const currentLevelData = levels.find((l) => l.id === currentLevel);
  const progressPercentage = (completedLevels.size / levels.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-2 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-blue-600">
                {t("appTitle")}
              </h1>
              <div className="hidden md:flex items-center space-x-2 text-gray-600">
                <Trophy className="w-5 h-5" />
                <span className="font-medium">
                  {completedLevels.size}/{levels.length} {t("levelsProgress")}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-orange-100 px-3 py-1 rounded-full">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="font-bold text-orange-700">{streak}</span>
                <span className="text-orange-600 text-sm">
                  {t("streakLabel")}
                </span>
              </div>

              <button
                onClick={() => setShowLevelSelector(!showLevelSelector)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                {t("levelButton")} {currentLevel}
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>{t("overallProgress")}</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* Level Selector Modal */}
      {showLevelSelector && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {t("selectLevel")}
                </h2>
                <button
                  onClick={() => setShowLevelSelector(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  {t("closeButton")}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {levels.map((level) => {
                  const isCompleted = completedLevels.has(level.id);
                  const isLocked =
                    level.id >
                    Math.max(1, Math.max(...Array.from(completedLevels)) + 1);
                  const isCurrentLevel = level.id === currentLevel;

                  return (
                    <button
                      key={level.id}
                      onClick={() => !isLocked && handleLevelChange(level.id)}
                      disabled={isLocked}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        isCurrentLevel
                          ? "border-blue-500 bg-blue-50"
                          : isCompleted
                            ? "border-green-500 bg-green-50 hover:bg-green-100"
                            : isLocked
                              ? "border-gray-300 bg-gray-100 cursor-not-allowed opacity-50"
                              : "border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm text-gray-600">
                          {t("levelButton")} {level.id}
                        </span>
                        {isCompleted ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : isLocked ? (
                          <Lock className="w-5 h-5 text-gray-400" />
                        ) : null}
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {level.title}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {level.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Instructions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {t("levelButton")} {currentLevel}: {currentLevelData.title}
                </h2>
                {completedLevels.has(currentLevel) && (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                )}
              </div>

              <p className="text-gray-600 mb-4">
                {currentLevelData.description}
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-800 mb-2">
                  {t("taskLabel")}
                </h3>
                <p className="text-blue-700">{currentLevelData.task}</p>
              </div>
            </div>

            {/* Hint Section */}
            <div className="mb-6">
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 transition-colors"
              >
                <Lightbulb className="w-5 h-5" />
                <span className="font-medium">
                  {showHint ? t("hideHint") : t("showHint")}
                </span>
              </button>

              {showHint && (
                <div className="mt-3 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                  <p className="text-yellow-800">{currentLevelData.hint}</p>
                </div>
              )}
            </div>

            {/* Feedback */}
            {feedback && (
              <div
                className={`p-4 rounded-lg mb-6 ${
                  feedback.type === "success"
                    ? "bg-green-50 border border-green-200"
                    : feedback.type === "loading"
                      ? "bg-blue-50 border border-blue-200"
                      : "bg-red-50 border border-red-200"
                }`}
              >
                <p
                  className={`font-medium mb-2 ${
                    feedback.type === "success"
                      ? "text-green-800"
                      : feedback.type === "loading"
                        ? "text-blue-800"
                        : "text-red-800"
                  }`}
                >
                  {feedback.message}
                </p>

                {feedback.explanation && (
                  <div className="mb-2">
                    <p className="text-sm text-gray-700">
                      {feedback.explanation}
                    </p>
                  </div>
                )}

                {feedback.output && (
                  <div className="mb-2">
                    <p className="text-sm text-gray-600 mb-1">
                      {t("yourOutput")}
                    </p>
                    <pre className="bg-gray-100 p-2 rounded text-sm font-mono">
                      {feedback.output}
                    </pre>
                  </div>
                )}

                {feedback.expected && (
                  <div className="mb-2">
                    <p className="text-sm text-gray-600 mb-1">
                      {t("expectedOutput")}
                    </p>
                    <pre className="bg-gray-100 p-2 rounded text-sm font-mono">
                      {feedback.expected}
                    </pre>
                  </div>
                )}

                {feedback.hint && feedback.type === "error" && (
                  <div className="mt-3 p-3 bg-blue-50 rounded">
                    <p className="text-sm text-blue-800">
                      <strong>{t("tipLabel")}</strong> {feedback.hint}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Panel - Code Editor */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
              <h3 className="font-semibold">{t("pythonCodeEditor")}</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleReset}
                  className="flex items-center space-x-1 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded transition-colors text-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{t("resetButton")}</span>
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex items-center space-x-1 bg-green-600 hover:bg-green-500 px-3 py-1 rounded transition-colors text-sm"
                >
                  <Play className="w-4 h-4" />
                  <span>{t("runCodeButton")}</span>
                </button>
              </div>
            </div>

            <div className="p-0">
              <textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                className="w-full h-96 p-4 font-mono text-sm bg-gray-900 text-green-400 border-0 resize-none focus:outline-none focus:ring-0"
                placeholder={t("codeEditorPlaceholder")}
                spellCheck={false}
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={() =>
              currentLevel > 1 && handleLevelChange(currentLevel - 1)
            }
            disabled={currentLevel === 1}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {t("previousLevel")}
          </button>

          <div className="text-center">
            <p className="text-gray-600">
              {t("levelOf")
                .replace("{current}", currentLevel)
                .replace("{total}", levels.length)}
            </p>
          </div>

          <button
            onClick={() => {
              if (
                completedLevels.has(currentLevel) &&
                currentLevel < levels.length
              ) {
                handleLevelChange(currentLevel + 1);
              }
            }}
            disabled={
              !completedLevels.has(currentLevel) ||
              currentLevel === levels.length
            }
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {t("nextLevel")}
          </button>
        </div>
      </main>
    </div>
  );
};

export default PyLingo;
