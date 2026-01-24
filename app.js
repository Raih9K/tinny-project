/**
 * TINNY PROJECT - Application Logic
 */

// Initialize Lucide Icons
lucide.createIcons();

// --- STATE MANAGEMENT ---
const state = {
  currentView: "dashboard",
  codeVerter: {
    sourceLang: "Python",
    targetLang: "JavaScript",
    isConverting: false,
    languages: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "C++",
      "C#",
      "C",
      "Go",
      "Rust",
      "Swift",
      "Kotlin",
      "PHP",
      "Ruby",
      "Scala",
      "R",
      "MATLAB",
      "Perl",
      "Haskell",
      "Lua",
      "Dart",
      "Elixir",
      "F#",
      "Clojure",
      "Objective-C",
      "Visual Basic",
    ],
  },
  pyLingo: {
    currentLevel: 1,
    completedLevels: new Set(),
    streak: 0,
    userCode: "",
    showHint: false,
    levels: [
      {
        id: 1,
        title: "Hello World",
        desc: "Welcome to Python! Let's start with the traditional first program.",
        task: "Write a program that prints 'Hello, World!' to the console.",
        starter: "# Write your code here\n",
        expected: "Hello, World!",
        hint: "Use the print() function with the text in quotes: print('Hello, World!')",
        solution: "print('Hello, World!')",
      },
      {
        id: 2,
        title: "Variables and Numbers",
        desc: "Learn to store and work with numbers using variables.",
        task: "Create a variable called 'age' with value 25, then print it.",
        starter: "# Create a variable and print it\n",
        expected: "25",
        hint: "Create a variable: age = 25, then print it: print(age)",
        solution: "age = 25\nprint(age)",
      },
      {
        id: 3,
        title: "String Variables",
        desc: "Work with text data using string variables.",
        task: "Create a variable called 'name' with your name, then print 'Hello, [name]!'",
        starter: "# Create a string variable\n",
        expected: "Hello, Python!",
        hint: "Use string concatenation or f-strings: print(f'Hello, {name}!')",
        solution: "name = 'Python'\nprint(f'Hello, {name}!')",
      },
      {
        id: 4,
        title: "User Input",
        desc: "Learn to get input from users and respond.",
        task: "Ask for the user's favorite color and print 'Your favorite color is [color]'",
        starter: "# Get user input and respond\n",
        expected: "Your favorite color is blue",
        hint: "Use input() to get user input: color = input('What is your favorite color? ')",
        solution:
          "color = input('What is your favorite color? ')\nprint(f'Your favorite color is {color}')",
      },
      {
        id: 5,
        title: "Basic Math",
        desc: "Perform mathematical operations in Python.",
        task: "Calculate 15 + 27 and print the result.",
        starter: "# Calculate and print the sum\n",
        expected: "42",
        hint: "Use the + operator: print(15 + 27)",
        solution: "print(15 + 27)",
      },
      {
        id: 6,
        title: "Conditionals",
        desc: "Make decisions in your code with if statements.",
        task: "Check if the number 10 is greater than 5. If true, print 'Yes, 10 is greater than 5'",
        starter: "# Use an if statement\nnumber = 10\n",
        expected: "Yes, 10 is greater than 5",
        hint: "Use if statement: if number > 5: print('Yes, 10 is greater than 5')",
        solution:
          "number = 10\nif number > 5:\n    print('Yes, 10 is greater than 5')",
      },
      {
        id: 7,
        title: "For Loops",
        desc: "Repeat actions using for loops.",
        task: "Print numbers from 1 to 3 using a for loop.",
        starter: "# Use a for loop to print numbers\n",
        expected: "1\n2\n3",
        hint: "Use range(): for i in range(1, 4): print(i)",
        solution: "for i in range(1, 4):\n    print(i)",
      },
      {
        id: 8,
        title: "While Loops",
        desc: "Use while loops for conditional repetition.",
        task: "Print numbers from 1 to 3 using a while loop.",
        starter: "# Use a while loop\ncount = 1\n",
        expected: "1\n2\n3",
        hint: "Increment count each iteration: while count <= 3: print(count); count += 1",
        solution:
          "count = 1\nwhile count <= 3:\n    print(count)\n    count += 1",
      },
      {
        id: 9,
        title: "Lists Basics",
        desc: "Store multiple items in lists.",
        task: "Create a list with fruits ['apple', 'banana', 'orange'] and print the second item.",
        starter: "# Create a list and access items\n",
        expected: "banana",
        hint: "Lists use zero-based indexing: fruits[1] gets the second item",
        solution: "fruits = ['apple', 'banana', 'orange']\nprint(fruits[1])",
      },
      {
        id: 10,
        title: "List Operations",
        desc: "Add and modify list items.",
        task: "Create a list [1, 2, 3], add the number 4, then print the entire list.",
        starter: "# Create list and add item\n",
        expected: "[1, 2, 3, 4]",
        hint: "Use append() method: numbers.append(4), then print(numbers)",
        solution: "numbers = [1, 2, 3]\nnumbers.append(4)\nprint(numbers)",
      },
      {
        id: 11,
        title: "Functions Basics",
        desc: "Create reusable code with functions.",
        task: "Define a function called 'greet' that prints 'Hello!' and then call it.",
        starter: "# Define and call a function\n",
        expected: "Hello!",
        hint: "Use def keyword: def greet(): print('Hello!'), then call greet()",
        solution: "def greet():\n    print('Hello!')\n\ngreet()",
      },
      {
        id: 12,
        title: "Functions with Parameters",
        desc: "Pass data to functions using parameters.",
        task: "Create a function 'say_hello' that takes a name parameter and prints 'Hello, [name]!'. Call it with 'World'.",
        starter: "# Function with parameter\n",
        expected: "Hello, World!",
        hint: "def say_hello(name): print(f'Hello, {name}!'), then call say_hello('World')",
        solution:
          "def say_hello(name):\n    print(f'Hello, {name}!')\n\nsay_hello('World')",
      },
      {
        id: 13,
        title: "Dictionaries",
        desc: "Store key-value pairs using dictionaries.",
        task: "Create a dictionary with person info: name='Alice', age=30. Print the name.",
        starter: "# Create and use a dictionary\n",
        expected: "Alice",
        hint: "Use curly braces: person = {'name': 'Alice', 'age': 30}, access with person['name']",
        solution:
          "person = {'name': 'Alice', 'age': 30}\nprint(person['name'])",
      },
      {
        id: 14,
        title: "String Methods",
        desc: "Manipulate strings with built-in methods.",
        task: "Take the string 'python programming' and print it in uppercase.",
        starter: "# Use string methods\ntext = 'python programming'\n",
        expected: "PYTHON PROGRAMMING",
        hint: "Use the upper() method: text.upper()",
        solution: "text = 'python programming'\nprint(text.upper())",
      },
      {
        id: 15,
        title: "Final Challenge",
        desc: "Combine everything you've learned!",
        task: "Create a list of numbers [1,2,3,4,5], use a for loop to print each number multiplied by 2.",
        starter: "# Final challenge - combine concepts\n",
        expected: "2\n4\n6\n8\n10",
        hint: "Loop through the list: for num in numbers: print(num * 2)",
        solution:
          "numbers = [1, 2, 3, 4, 5]\nfor num in numbers:\n    print(num * 2)",
      },
    ],
  },
  tutor: {
    selectedLang: "spanish",
    messages: [],
    proficiency: "Beginner",
    isLoading: false,
    stats: { messages: 0, vocabulary: 0, accuracy: 0 },
    goals: [
      { id: 1, text: "Master basic greetings", progress: 20, completed: false },
      {
        id: 2,
        text: "Learn present tense verbs",
        progress: 10,
        completed: false,
      },
    ],
    mode: "chat", // 'chat' or 'lesson'
    langs: {
      spanish: { name: "Spanish", flag: "🇪🇸" },
      french: { name: "French", flag: "🇫🇷" },
      german: { name: "German", flag: "🇩🇪" },
      japanese: { name: "Japanese", flag: "🇯🇵" },
    },
  },
};

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initCodeVerter();
  initPyLingo();
  initTutor();
});

// --- NAVIGATION ---
function initNav() {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      const view = item.getAttribute("data-view");
      switchView(view);
    });
  });
}

function switchView(viewId) {
  state.currentView = viewId;

  // Update UI
  document
    .querySelectorAll(".view-container")
    .forEach((v) => v.classList.remove("active"));
  document.getElementById(viewId).classList.add("active");

  document.querySelectorAll(".nav-item").forEach((n) => {
    n.classList.toggle("active", n.getAttribute("data-view") === viewId);
  });

  window.scrollTo(0, 0);
}

// --- CODEVERTER LOGIC ---
function initCodeVerter() {
  const sourceSelect = document.getElementById("source-lang");
  const targetSelect = document.getElementById("target-lang");
  const sourceLabel = document.getElementById("source-lang-label");
  const targetLabel = document.getElementById("target-lang-label");

  state.codeVerter.languages.forEach((lang) => {
    const optS = document.createElement("option");
    optS.value = optS.textContent = lang;
    if (lang === state.codeVerter.sourceLang) optS.selected = true;
    sourceSelect.appendChild(optS);

    const optT = document.createElement("option");
    optT.value = optT.textContent = lang;
    if (lang === state.codeVerter.targetLang) optT.selected = true;
    targetSelect.appendChild(optT);
  });

  sourceSelect.onchange = (e) => {
    state.codeVerter.sourceLang = e.target.value;
    sourceLabel.textContent = e.target.value;
  };
  targetSelect.onchange = (e) => {
    state.codeVerter.targetLang = e.target.value;
    targetLabel.textContent = e.target.value;
  };

  document.getElementById("source-code").value =
    `# Example Python code\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(10))`;
}

async function handleCodeConversion() {
  const sourceCode = document.getElementById("source-code").value;
  const targetTextarea = document.getElementById("target-code");
  const btn = document.getElementById("convert-btn");

  if (!sourceCode.trim()) return alert("Please enter some code.");

  btn.disabled = true;
  btn.innerHTML =
    '<i data-lucide="loader-2" class="animate-spin w-4 h-4 mr-2"></i> Converting...';
  lucide.createIcons();

  try {
    const prompt = `Convert the following ${state.codeVerter.sourceLang} code to ${state.codeVerter.targetLang}. Only return the converted code without any explanation or markdown formatting:\n\n${sourceCode}`;
    const response = await window.claude.complete(prompt);
    targetTextarea.value = response;
  } catch (err) {
    console.error(err);
    alert("Conversion failed. Ensure window.claude.complete is available.");
  } finally {
    btn.disabled = false;
    btn.innerHTML =
      '<i data-lucide="refresh-cw" class="w-4 h-4 mr-2"></i> Convert Code';
    lucide.createIcons();
  }
}

// --- PYLINGO LOGIC ---
function initPyLingo() {
  renderLevelGrid();
  loadLevel(1);
}

function renderLevelGrid() {
  const grid = document.getElementById("level-grid");
  grid.innerHTML = "";

  state.pyLingo.levels.forEach((lvl) => {
    const card = document.createElement("div");
    const isCompleted = state.pyLingo.completedLevels.has(lvl.id);
    const isCurrent = state.pyLingo.currentLevel === lvl.id;
    const isLocked =
      lvl.id > Math.max(0, ...Array.from(state.pyLingo.completedLevels)) + 1;

    card.className = `level-card ${isCompleted ? "completed" : ""} ${isCurrent ? "current" : ""} ${isLocked ? "locked" : ""}`;
    card.innerHTML = `
      <div class="flex justify-between items-center mb-2">
        <span class="text-xs font-bold text-muted uppercase">Level ${lvl.id}</span>
        <i data-lucide="${isCompleted ? "check-circle" : isLocked ? "lock" : "play"}" class="w-4 h-4 ${isCompleted ? "text-success" : "text-muted"}"></i>
      </div>
      <h4 class="font-bold text-sm">${lvl.title}</h4>
    `;

    if (!isLocked) {
      card.onclick = () => {
        loadLevel(lvl.id);
        toggleLevelSelector();
      };
    }
    grid.appendChild(card);
  });
  lucide.createIcons();
}

function loadLevel(id) {
  state.pyLingo.currentLevel = id;
  const level = state.pyLingo.levels.find((l) => l.id === id);

  document.getElementById("current-level-num").textContent = id;
  document.getElementById("level-title").textContent =
    `Level ${id}: ${level.title}`;
  document.getElementById("level-desc").textContent = level.desc;
  document.getElementById("level-task").textContent = level.task;
  document.getElementById("level-hint").textContent = level.hint;
  document.getElementById("py-editor").value = level.starter;

  // Update status icon
  const icon = document.getElementById("level-status-icon");
  icon.setAttribute(
    "data-lucide",
    state.pyLingo.completedLevels.has(id) ? "check-circle" : "circle",
  );
  icon.className = state.pyLingo.completedLevels.has(id)
    ? "text-success"
    : "text-muted";

  lucide.createIcons();
  hideFeedback();
  hideHint();
  updateProgress();
}

function updateProgress() {
  const percent =
    (state.pyLingo.completedLevels.size / state.pyLingo.levels.length) * 100;
  document.getElementById("progress-fill").style.width = `${percent}%`;
  document.getElementById("overall-progress-text").textContent =
    `${Math.round(percent)}%`;
}

async function handlePyLingoRun() {
  const code = document.getElementById("py-editor").value;
  const feedback = document.getElementById("py-feedback");
  const level = state.pyLingo.levels.find(
    (l) => l.id === state.pyLingo.currentLevel,
  );
  const btn = document.getElementById("run-code-btn");

  btn.disabled = true;
  feedback.className =
    "mt-6 p-4 rounded-lg bg-indigo-900/30 text-indigo-200 block";
  feedback.innerHTML =
    '<div class="flex items-center gap-2"><i data-lucide="loader-2" class="animate-spin w-4 h-4"></i> Analyzing code...</div>';
  lucide.createIcons();

  try {
    const prompt = `Evaluate this Python code for task: "${level.task}". \nExpected Output: "${level.expected}"\nUser Code:\n${code}\n\nReturn JSON ONLY: {"isCorrect": boolean, "feedback": "message", "output": "actual_output"}`;
    const response = await window.claude.complete(prompt);
    const result = JSON.parse(response);

    if (result.isCorrect) {
      state.pyLingo.completedLevels.add(level.id);
      state.pyLingo.streak++;
      feedback.className =
        "mt-6 p-4 rounded-lg bg-green-900/30 text-green-200 border border-green-500/30 block";
      feedback.innerHTML = `<h4 class="font-bold flex items-center gap-2"><i data-lucide="check-circle" class="w-5 h-5"></i> Awesome!</h4><p>${result.feedback}</p>`;
    } else {
      state.pyLingo.streak = 0;
      feedback.className =
        "mt-6 p-4 rounded-lg bg-red-900/30 text-red-200 border border-red-500/30 block";
      feedback.innerHTML = `<h4 class="font-bold flex items-center gap-2"><i data-lucide="alert-circle" class="w-5 h-5"></i> Not quite right</h4><p>${result.feedback}</p>`;
    }

    document.getElementById("streak-count").textContent = state.pyLingo.streak;
    updateProgress();
    renderLevelGrid();
    lucide.createIcons();
  } catch (err) {
    console.error(err);
    feedback.textContent = "Evaluation error. Check connection.";
  } finally {
    btn.disabled = false;
  }
}

function toggleLevelSelector() {
  document.getElementById("level-selector").classList.toggle("hidden");
}

function toggleHint() {
  const box = document.getElementById("level-hint-box");
  const text = document.getElementById("hint-toggle-text");
  state.pyLingo.showHint = !state.pyLingo.showHint;
  box.classList.toggle("hidden", !state.pyLingo.showHint);
  text.textContent = state.pyLingo.showHint ? "Hide Hint" : "Show Hint";
}

function hideHint() {
  state.pyLingo.showHint = false;
  document.getElementById("level-hint-box").classList.add("hidden");
  document.getElementById("hint-toggle-text").textContent = "Show Hint";
}

function hideFeedback() {
  document.getElementById("py-feedback").classList.add("hidden");
}

function resetLevelCode() {
  const level = state.pyLingo.levels.find(
    (l) => l.id === state.pyLingo.currentLevel,
  );
  document.getElementById("py-editor").value = level.starter;
}

// --- TUTOR LOGIC ---
function initTutor() {
  renderGoals();
}

function renderGoals() {
  const list = document.getElementById("goals-list");
  list.innerHTML = "";
  state.tutor.goals.forEach((goal) => {
    const div = document.createElement("div");
    div.className = "p-2 bg-slate-800/50 rounded text-sm";
    div.innerHTML = `
      <div class="flex justify-between items-center mb-1">
        <span class="${goal.completed ? "line-through opacity-50" : ""}">${goal.text}</span>
        <input type="checkbox" ${goal.completed ? "checked" : ""} onchange="toggleGoal(${goal.id})">
      </div>
      <div class="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
        <div class="bg-primary h-full" style="width: ${goal.progress}%"></div>
      </div>
    `;
    list.appendChild(div);
  });
}

function toggleGoal(id) {
  const goal = state.tutor.goals.find((g) => g.id === id);
  goal.completed = !goal.completed;
  goal.progress = goal.completed ? 100 : 20;
  renderGoals();
}

function handleTutorLangChange(val) {
  state.tutor.selectedLang = val;
  document.getElementById("lang-flag").textContent =
    state.tutor.langs[val].flag;
  document.querySelector("#chat-welcome h3").textContent =
    `Ready to practice ${state.tutor.langs[val].name}?`;
  document.getElementById("chat-input").placeholder =
    `Type your message in ${state.tutor.langs[val].name}...`;
  document.getElementById("chat-messages").innerHTML =
    '<div class="text-center py-10 opacity-60" id="chat-welcome">' +
    document.getElementById("chat-welcome").innerHTML +
    "</div>";
  state.tutor.messages = [];
}

async function sendTutorMessage() {
  const input = document.getElementById("chat-input");
  const text = input.value.trim();
  if (!text || state.tutor.isLoading) return;

  document.getElementById("chat-welcome")?.remove();

  // User Message
  appendMessage(text, "user");
  input.value = "";
  state.tutor.isLoading = true;

  // Stats
  state.tutor.stats.messages++;
  document.getElementById("stat-messages").textContent =
    state.tutor.stats.messages;

  try {
    const prompt = `You are a friendly language tutor for ${state.tutor.langs[state.tutor.selectedLang].name}. \nUser says: "${text}"\nRespond in the target language and provide feedback in English. \nReturn JSON ONLY: {"reply": "...", "feedback": {"positive": "...", "correction": "..."}}`;
    const response = await window.claude.complete(prompt);
    const result = JSON.parse(response);

    appendMessage(result.reply, "tutor");
    showFeedback(result.feedback);

    state.tutor.stats.vocabulary += text.split(" ").length;
    state.tutor.stats.accuracy = Math.min(100, state.tutor.stats.accuracy + 5);

    document.getElementById("stat-vocab").textContent =
      `${state.tutor.stats.vocabulary} words`;
    document.getElementById("stat-accuracy").textContent =
      `${state.tutor.stats.accuracy}%`;
  } catch (err) {
    console.error(err);
    appendMessage("Sorry, I'm having trouble thinking. Try again!", "tutor");
  } finally {
    state.tutor.isLoading = false;
  }
}

function appendMessage(text, sender) {
  const container = document.getElementById("chat-messages");
  const div = document.createElement("div");
  div.className = `message message-${sender}`;
  div.textContent = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function showFeedback(fb) {
  const box = document.getElementById("realtime-feedback");
  const content = document.getElementById("feedback-content");
  box.classList.remove("hidden");
  content.innerHTML = `
    <div class="text-xs">
      <p class="text-green-400 font-bold mb-1">Excellent:</p>
      <p class="text-muted mb-2">${fb.positive || "Good effort!"}</p>
      <p class="text-orange-400 font-bold mb-1">Correction:</p>
      <p class="text-muted">${fb.correction || "Keep practicing!"}</p>
    </div>
  `;
}

function addCustomGoal() {
  const text = prompt("Enter your learning goal:");
  if (text) {
    state.tutor.goals.push({
      id: Date.now(),
      text,
      progress: 0,
      completed: false,
    });
    renderGoals();
  }
}

function toggleTutorMode() {
  state.tutor.mode = state.tutor.mode === "chat" ? "lesson" : "chat";
  document.getElementById("mode-toggle").textContent =
    state.tutor.mode === "chat" ? "Chat Mode" : "Lesson Mode";
}
