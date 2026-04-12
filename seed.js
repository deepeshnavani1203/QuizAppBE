const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Quiz = require("./models/Quiz");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/quizapp";

// Function to generate questions based on topic and difficulty
function generateQuestions(topic, difficulty, count) {
  const baseQuestions = {
    Java: {
      easy: [
        {
          q: "Which component executes Java bytecode?",
          a: ["JVM", "JRE", "JDK", "JIT"],
          c: 0,
        },
        {
          q: "Which keyword is used to create a subclass in Java?",
          a: ["implements", "extends", "inherits", "super"],
          c: 1,
        },
        {
          q: "What is the return type of the main method?",
          a: ["void", "int", "String", "public"],
          c: 0,
        },
        {
          q: "Which type is used to store true or false values?",
          a: ["boolean", "int", "String", "char"],
          c: 0,
        },
        {
          q: "Which package contains the Scanner class?",
          a: ["java.util", "java.io", "java.lang", "java.net"],
          c: 0,
        },
        {
          q: "How do you declare an array in Java?",
          a: ["int[] arr;", "int arr[];", "Both A and B", "array int arr;"],
          c: 2,
        },
        {
          q: "Which method is used to find the length of a string?",
          a: ["length()", "size()", "getLength()", "count()"],
          c: 0,
        },
        {
          q: "What is the default value of an int variable?",
          a: ["0", "null", "undefined", "1"],
          c: 0,
        },
        {
          q: "Which loop is entry-controlled?",
          a: ["for", "while", "do-while", "All of them"],
          c: 3,
        },
        {
          q: "Which operator is used for string concatenation?",
          a: ["+", "-", "*", "/"],
          c: 0,
        },
        {
          q: "Which keyword is used to define a constant in Java?",
          a: ["final", "static", "const", "immutable"],
          c: 0,
        },
        {
          q: "What is the default value of a boolean?",
          a: ["false", "true", "0", "null"],
          c: 0,
        },
        {
          q: "Which method is the starting point of a Java program?",
          a: ["main()", "start()", "init()", "run()"],
          c: 0,
        },
        {
          q: "Which type is used for large decimal numbers in Java?",
          a: ["double", "float", "long", "int"],
          c: 0,
        },
        {
          q: "What does JDK stand for?",
          a: ["Java Development Kit", "Java Design Kit", "Java Deployment Kit", "None"],
          c: 0,
        },
        {
          q: "Which command is used to compile Java code?",
          a: ["javac", "java", "javadoc", "jar"],
          c: 0,
        },
        {
          q: "Which access modifier makes a member visible only within its class?",
          a: ["private", "public", "protected", "default"],
          c: 0,
        },
        {
          q: "What is the result of 5 / 2 in Java (integer division)?",
          a: ["2", "2.5", "3", "0"],
          c: 0,
        },
        {
          q: "Which keyword represents the current instance of a class?",
          a: ["this", "self", "super", "current"],
          c: 0,
        },
        {
          q: "How many primitive data types are there in Java?",
          a: ["8", "7", "6", "9"],
          c: 0,
        },
        {
          q: "Which keyword is used to catch an exception?",
          a: ["catch", "try", "throw", "finally"],
          c: 0,
        },
        {
          q: "Which loop is guaranteed to execute at least once?",
          a: ["do-while", "while", "for", "foreach"],
          c: 0,
        },
        {
          q: "What is the superclass of all Java classes?",
          a: ["Object", "Class", "Base", "Root"],
          c: 0,
        },
        {
          q: "Which symbol is used for a single-line comment?",
          a: ["//", "/*", "#", "--"],
          c: 0,
        },
      ],
      medium: [
        {
          q: "What is method overloading?",
          a: [
            "Same method name, different parameters",
            "Same method name, same parameters",
            "Different method names, same parameters",
            "None",
          ],
          c: 0,
        },
        {
          q: "Which keyword is used to inherit a class?",
          a: ["extends", "implements", "inherits", "super"],
          c: 0,
        },
        {
          q: "What is the purpose of the 'final' keyword?",
          a: [
            "To make a variable constant",
            "To end a program",
            "To finalize a class",
            "To finish a method",
          ],
          c: 0,
        },
        {
          q: "Which exception is thrown when dividing by zero?",
          a: [
            "ArithmeticException",
            "NullPointerException",
            "IOException",
            "ClassNotFoundException",
          ],
          c: 0,
        },
        {
          q: "What is the difference between == and equals()?",
          a: [
            "== compares references, equals() compares content",
            "== compares content, equals() compares references",
            "Both are same",
            "None",
          ],
          c: 0,
        },
        {
          q: "Which collection class allows duplicate elements?",
          a: ["Set", "List", "Map", "Queue"],
          c: 1,
        },
        {
          q: "What is the purpose of the 'static' keyword?",
          a: [
            "To create class-level members",
            "To create instance members",
            "To create local members",
            "None",
          ],
          c: 0,
        },
        {
          q: "Which interface is used for sorting?",
          a: ["Comparable", "Comparator", "Both", "None"],
          c: 2,
        },
        {
          q: "What is a lambda expression?",
          a: [
            "Anonymous function",
            "Named function",
            "Class method",
            "Instance method",
          ],
          c: 0,
        },
        {
          q: "Which keyword is used for exception handling?",
          a: ["try-catch", "if-else", "switch-case", "for-loop"],
          c: 0,
        },
        {
          q: "What is the difference between Array and ArrayList?",
          a: ["Array is fixed size, ArrayList is dynamic", "Array is dynamic, ArrayList is fixed", "Both are same", "None"],
          c: 0,
        },
        {
          q: "Which keyword is used to invoke a parent class constructor?",
          a: ["super", "parent", "this", "base"],
          c: 0,
        },
        {
          q: "What is an abstract class?",
          a: ["A class that cannot be instantiated", "A class with no methods", "A class with only static methods", "None"],
          c: 0,
        },
        {
          q: "Which collection uses Key-Value pairs?",
          a: ["Map", "List", "Set", "Queue"],
          c: 0,
        },
        {
          q: "What is the purpose of the 'finally' block?",
          a: ["To execute code regardless of exception", "To catch exceptions", "To throw exceptions", "None"],
          c: 0,
        },
        {
          q: "Which keyword is used to create an interface?",
          a: ["interface", "class", "abstract", "implements"],
          c: 0,
        },
        {
          q: "What is encapsulation?",
          a: ["Hiding data using private variables", "Inheriting other classes", "Polymorphism", "None"],
          c: 0,
        },
        {
          q: "Which method is used to compare two strings content?",
          a: ["equals()", "==", "compareTo()", "matches()"],
          c: 0,
        },
        {
          q: "What is the purpose of the 'break' statement?",
          a: ["To exit a loop or switch", "To skip an iteration", "To end a program", "None"],
          c: 0,
        },
        {
          q: "What is the size of 'int' in Java?",
          a: ["4 bytes", "2 bytes", "8 bytes", "1 byte"],
          c: 0,
        },
      ],
      hard: [
        {
          q: 'What is the output of System.out.println(1 + 2 + "3");?',
          a: ["33", "123", "6", "Error"],
          c: 0,
        },
        {
          q: "Which design pattern is used in Singleton class?",
          a: ["Factory", "Observer", "Singleton", "Decorator"],
          c: 2,
        },
        {
          q: "What is the purpose of the 'volatile' keyword?",
          a: ["Thread safety", "Memory management", "Performance", "Security"],
          c: 0,
        },
        {
          q: "Which collection is thread-safe?",
          a: ["ArrayList", "Vector", "LinkedList", "HashSet"],
          c: 1,
        },
        {
          q: "What is method overriding?",
          a: [
            "Same method in subclass",
            "Same method in same class",
            "Different method in subclass",
            "None",
          ],
          c: 0,
        },
        {
          q: "Which interface is used for serialization?",
          a: ["Serializable", "Cloneable", "Runnable", "Comparable"],
          c: 0,
        },
        {
          q: "What is the purpose of the 'transient' keyword?",
          a: [
            "Exclude from serialization",
            "Include in serialization",
            "Make it final",
            "Make it static",
          ],
          c: 0,
        },
        {
          q: "Which exception is checked?",
          a: [
            "RuntimeException",
            "IOException",
            "NullPointerException",
            "ArithmeticException",
          ],
          c: 1,
        },
        {
          q: "What is the output of 'Hello'.substring(1,3);?",
          a: ["el", "ell", "llo", "Error"],
          c: 1,
        },
        {
          q: "Which keyword is used for generic types?",
          a: ["<T>", "<>", "{}", "[]"],
          c: 0,
        },
      ],
    },
    C: {
      easy: [
        {
          q: "Which header file is required for printf?",
          a: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<math.h>"],
          c: 0,
        },
        {
          q: 'What is the output of printf("%d", 5/2);?',
          a: ["2", "2.5", "3", "5/2"],
          c: 0,
        },
        {
          q: "Which function allocates memory dynamically?",
          a: ["malloc", "alloc", "new", "create"],
          c: 0,
        },
        {
          q: "How to declare a pointer to int?",
          a: ["int *p;", "int p*;", "int& p;", "pointer int p;"],
          c: 0,
        },
        {
          q: "Which operator is used for address?",
          a: ["&", "*", "#", "@"],
          c: 0,
        },
        {
          q: "What is the size of int in C?",
          a: ["4 bytes", "2 bytes", "8 bytes", "Depends"],
          c: 3,
        },
        {
          q: "Which loop is exit-controlled?",
          a: ["for", "while", "do-while", "All"],
          c: 2,
        },
        {
          q: "How to include a header file?",
          a: ["#include", "#define", "#ifdef", "#pragma"],
          c: 0,
        },
        {
          q: "What is the extension of C source file?",
          a: [".c", ".cpp", ".java", ".py"],
          c: 0,
        },
        {
          q: "Which function reads from keyboard?",
          a: ["scanf", "printf", "gets", "puts"],
          c: 0,
        },
      ],
      medium: [
        {
          q: "What is the difference between struct and union?",
          a: ["Memory allocation", "Data types", "Functions", "None"],
          c: 0,
        },
        {
          q: "Which keyword is used for constant?",
          a: ["const", "static", "volatile", "extern"],
          c: 0,
        },
        {
          q: "What is a function pointer?",
          a: ["Pointer to function", "Function to pointer", "Both", "None"],
          c: 0,
        },
        {
          q: "Which header for string functions?",
          a: ["<string.h>", "<stdio.h>", "<stdlib.h>", "<math.h>"],
          c: 0,
        },
        {
          q: "What is recursion?",
          a: ["Function calling itself", "Loop", "Conditional", "None"],
          c: 0,
        },
        {
          q: "Which operator has highest precedence?",
          a: ["*", "/", "+", "-"],
          c: 0,
        },
        {
          q: "What is the use of typedef?",
          a: ["Create alias", "Define function", "Declare variable", "None"],
          c: 0,
        },
        {
          q: "Which is not a storage class?",
          a: ["auto", "register", "static", "public"],
          c: 3,
        },
        {
          q: "What is the output of sizeof(char)?",
          a: ["1", "2", "4", "8"],
          c: 0,
        },
        {
          q: "Which function converts string to int?",
          a: ["atoi", "atol", "atof", "All"],
          c: 0,
        },
      ],
      hard: [
        {
          q: 'What is the output of printf("%d", 1 << 2);?',
          a: ["4", "2", "8", "1"],
          c: 0,
        },
        {
          q: "Which is not a valid pointer operation?",
          a: ["p++", "p--", "p * 2", "p + 1"],
          c: 2,
        },
        {
          q: "What is dangling pointer?",
          a: ["Points to freed memory", "Null pointer", "Void pointer", "None"],
          c: 0,
        },
        {
          q: "Which macro for min of two numbers?",
          a: [
            "#define min(a,b) ((a)<(b)?(a):(b))",
            "#define min(a,b) a<b?a:b",
            "Both",
            "None",
          ],
          c: 2,
        },
        {
          q: "What is the use of volatile keyword?",
          a: ["Prevent optimization", "Make constant", "Make static", "None"],
          c: 0,
        },
        { q: "Which is not a valid file mode?", a: ["r", "w", "a", "x"], c: 3 },
        {
          q: 'What is the output of strcmp("abc","abc");?',
          a: ["0", "1", "-1", "Error"],
          c: 0,
        },
        {
          q: "Which function for dynamic memory reallocation?",
          a: ["realloc", "malloc", "calloc", "free"],
          c: 0,
        },
        {
          q: "What is the use of extern keyword?",
          a: ["Global variable", "Local variable", "Static variable", "None"],
          c: 0,
        },
        {
          q: "Which is not a valid escape sequence?",
          a: ["\\n", "\\t", "\\r", "\\z"],
          c: 3,
        },
      ],
    },
    "C++": {
      easy: [
        {
          q: "Which extension for C++ files?",
          a: [".cpp", ".c", ".java", ".py"],
          c: 0,
        },
        {
          q: "Which keyword defines a class?",
          a: ["class", "struct", "object", "interface"],
          c: 0,
        },
        {
          q: "Which header for std::vector?",
          a: ["<vector>", "<array>", "<list>", "<map>"],
          c: 0,
        },
        {
          q: "How to print to console?",
          a: ["cout <<", "print()", "console.log()", "System.out.println()"],
          c: 0,
        },
        {
          q: "Which operator for scope resolution?",
          a: ["::", ".", "->", "&"],
          c: 0,
        },
        {
          q: "What is the use of 'new' keyword?",
          a: ["Dynamic allocation", "Static allocation", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is not a fundamental data type?",
          a: ["int", "float", "string", "char"],
          c: 2,
        },
        {
          q: "How to include iostream?",
          a: ["#include <iostream>", '#include "iostream"', "Both", "None"],
          c: 0,
        },
        {
          q: "What is the entry point?",
          a: ["main()", "start()", "begin()", "init()"],
          c: 0,
        },
        {
          q: "Which comment style is valid?",
          a: ["// comment", "/* comment */", "Both", "None"],
          c: 2,
        },
      ],
      medium: [
        {
          q: "What is constructor?",
          a: ["Initialize object", "Destroy object", "Copy object", "None"],
          c: 0,
        },
        {
          q: "Which is access specifier?",
          a: ["public", "private", "protected", "All"],
          c: 3,
        },
        {
          q: "What is inheritance?",
          a: ["Derive from base class", "Create new class", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is not a container?",
          a: ["vector", "array", "list", "function"],
          c: 3,
        },
        {
          q: "What is polymorphism?",
          a: ["Many forms", "One form", "Static form", "None"],
          c: 0,
        },
        {
          q: "Which is copy constructor?",
          a: [
            "ClassName(const ClassName&)",
            "ClassName(ClassName)",
            "Both",
            "None",
          ],
          c: 0,
        },
        {
          q: "What is the use of 'virtual'?",
          a: ["Runtime polymorphism", "Compile time", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is STL algorithm?",
          a: ["sort", "find", "Both", "None"],
          c: 2,
        },
        {
          q: "What is template?",
          a: ["Generic programming", "Specific programming", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is smart pointer?",
          a: ["unique_ptr", "shared_ptr", "Both", "None"],
          c: 2,
        },
      ],
      hard: [
        {
          q: "What is RAII?",
          a: [
            "Resource Acquisition Is Initialization",
            "Random Access Is Impossible",
            "Both",
            "None",
          ],
          c: 0,
        },
        {
          q: "Which is move semantics?",
          a: ["std::move", "std::copy", "Both", "None"],
          c: 0,
        },
        {
          q: "What is SFINAE?",
          a: [
            "Substitution Failure Is Not An Error",
            "Simple Function Is Not Allowed",
            "Both",
            "None",
          ],
          c: 0,
        },
        {
          q: "Which is perfect forwarding?",
          a: ["std::forward", "std::move", "Both", "None"],
          c: 0,
        },
        {
          q: "What is CRTP?",
          a: [
            "Curiously Recurring Template Pattern",
            "Common Runtime Template Pattern",
            "Both",
            "None",
          ],
          c: 0,
        },
        {
          q: "Which is type trait?",
          a: ["std::is_same", "std::enable_if", "Both", "None"],
          c: 2,
        },
        {
          q: "What is variadic template?",
          a: ["Variable arguments", "Fixed arguments", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is constexpr?",
          a: ["Compile time constant", "Runtime constant", "Both", "None"],
          c: 0,
        },
        {
          q: "What is noexcept?",
          a: ["Exception specification", "Exception handling", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is lambda capture?",
          a: ["[&]", "[=]", "Both", "None"],
          c: 2,
        },
      ],
    },
    Python: {
      easy: [
        {
          q: "Which keyword defines a function?",
          a: ["def", "function", "fn", "func"],
          c: 0,
        },
        { q: "What is len('hello')?", a: ["5", "4", "6", "error"], c: 0 },
        { q: "Which is immutable?", a: ["tuple", "list", "set", "dict"], c: 0 },
        { q: "How to start a comment?", a: ["#", "//", "/*", "<!--"], c: 0 },
        {
          q: "Which is not a keyword?",
          a: ["if", "for", "print", "while"],
          c: 2,
        },
        { q: "How to create a list?", a: ["[]", "()", "{}", "<>"], c: 0 },
        { q: "What is the output of 2**3?", a: ["8", "6", "9", "16"], c: 0 },
        {
          q: "Which is string method?",
          a: ["upper()", "append()", "push()", "add()"],
          c: 0,
        },
        {
          q: "How to import a module?",
          a: ["import", "include", "require", "load"],
          c: 0,
        },
        {
          q: "What is None?",
          a: ["Null value", "Zero", "Empty string", "False"],
          c: 0,
        },
      ],
      medium: [
        {
          q: "What is list comprehension?",
          a: ["[x for x in list]", "[x in list]", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is generator?",
          a: ["(x for x in list)", "[x for x in list]", "Both", "None"],
          c: 0,
        },
        {
          q: "What is lambda?",
          a: ["Anonymous function", "Named function", "Class", "Module"],
          c: 0,
        },
        {
          q: "Which is decorator?",
          a: ["@decorator", "#decorator", "Both", "None"],
          c: 0,
        },
        {
          q: "What is __init__?",
          a: ["Constructor", "Destructor", "Method", "Variable"],
          c: 0,
        },
        {
          q: "Which is context manager?",
          a: ["with statement", "if statement", "for loop", "while loop"],
          c: 0,
        },
        {
          q: "What is *args?",
          a: ["Variable arguments", "Keyword arguments", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is **kwargs?",
          a: ["Keyword arguments", "Variable arguments", "Both", "None"],
          c: 0,
        },
        {
          q: "What is self?",
          a: [
            "Instance reference",
            "Class reference",
            "Module reference",
            "Function reference",
          ],
          c: 0,
        },
        {
          q: "Which is magic method?",
          a: ["__str__", "str()", "Both", "None"],
          c: 0,
        },
      ],
      hard: [
        {
          q: "What is GIL?",
          a: [
            "Global Interpreter Lock",
            "General Interpreter Language",
            "Both",
            "None",
          ],
          c: 0,
        },
        {
          q: "Which is metaclass?",
          a: ["Class of class", "Instance of class", "Both", "None"],
          c: 0,
        },
        {
          q: "What is descriptor?",
          a: ["Object with __get__/__set__", "Normal object", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is coroutine?",
          a: ["async def", "def", "Both", "None"],
          c: 0,
        },
        {
          q: "What is asyncio?",
          a: [
            "Asynchronous programming",
            "Synchronous programming",
            "Both",
            "None",
          ],
          c: 0,
        },
        {
          q: "Which is type hint?",
          a: ["def func(x: int) -> str:", "def func(x):", "Both", "None"],
          c: 0,
        },
        {
          q: "What is dataclasses?",
          a: ["Automatic __init__", "Manual __init__", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is f-string?",
          a: ['f"{var}"', '"{var}"', "Both", "None"],
          c: 0,
        },
        { q: "What is walrus operator?", a: [":=", "=", "Both", "None"], c: 0 },
        {
          q: "Which is structural pattern matching?",
          a: ["match case", "if elif", "Both", "None"],
          c: 0,
        },
      ],
    },
    JavaScript: {
      easy: [
        {
          q: "Which operator checks value and type?",
          a: ["===", "==", "=", "!=="],
          c: 0,
        },
        {
          q: "Which declares block-scoped variable?",
          a: ["let", "var", "const", "static"],
          c: 0,
        },
        {
          q: "What is Promise for?",
          a: ["Async operations", "Sync operations", "DOM", "Styling"],
          c: 0,
        },
        {
          q: "How to get element by ID?",
          a: [
            "getElementById()",
            "querySelector()",
            "getElementsByClassName()",
            "getElementByName()",
          ],
          c: 0,
        },
        { q: "Which is falsy?", a: ["false", "0", '""', "All"], c: 3 },
        {
          q: "How to declare function?",
          a: ["function name() {}", "def name():", "Both", "None"],
          c: 0,
        },
        {
          q: "What is NaN?",
          a: ["Not a Number", "Null", "Undefined", "Boolean"],
          c: 0,
        },
        {
          q: "Which is array method?",
          a: ["push()", "append()", "add()", "insert()"],
          c: 0,
        },
        { q: "How to create object?", a: ["{}", "[]", "()", "<>"], c: 0 },
        {
          q: "What is typeof null?",
          a: ["object", "null", "undefined", "boolean"],
          c: 0,
        },
      ],
      medium: [
        {
          q: "What is closure?",
          a: ["Function with scope", "Closed function", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is arrow function?",
          a: ["() => {}", "function() {}", "Both", "None"],
          c: 0,
        },
        {
          q: "What is destructuring?",
          a: ["Extract values", "Create values", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is spread operator?",
          a: ["...", "...args", "Both", "None"],
          c: 2,
        },
        {
          q: "What is async/await?",
          a: ["Promise syntax", "Callback syntax", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is template literal?",
          a: ["`${var}`", '"${var}"', "Both", "None"],
          c: 0,
        },
        {
          q: "What is prototype?",
          a: ["Object inheritance", "Class inheritance", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is module export?",
          a: ["export", "module.exports", "Both", "None"],
          c: 2,
        },
        {
          q: "What is event loop?",
          a: ["Async handling", "Sync handling", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is higher-order function?",
          a: ["map()", "forEach()", "Both", "None"],
          c: 2,
        },
      ],
      hard: [
        {
          q: "What is hoisting?",
          a: [
            "Variable/function moved to top",
            "Moved to bottom",
            "Both",
            "None",
          ],
          c: 0,
        },
        {
          q: "Which is currying?",
          a: [
            "Function returning function",
            "Function taking multiple args",
            "Both",
            "None",
          ],
          c: 0,
        },
        {
          q: "What is memoization?",
          a: ["Caching results", "Clearing cache", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is generator?",
          a: ["function* ()", "function ()", "Both", "None"],
          c: 0,
        },
        {
          q: "What is Symbol?",
          a: ["Unique identifier", "String", "Number", "Boolean"],
          c: 0,
        },
        {
          q: "Which is WeakMap?",
          a: ["Weak references", "Strong references", "Both", "None"],
          c: 0,
        },
        {
          q: "What is Proxy?",
          a: ["Object wrapper", "Function wrapper", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is Reflect?",
          a: ["Meta programming", "Normal programming", "Both", "None"],
          c: 0,
        },
        {
          q: "What is tail call optimization?",
          a: ["Recursive optimization", "Loop optimization", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is microtask?",
          a: ["Promise callback", "setTimeout", "Both", "None"],
          c: 0,
        },
      ],
    },
    Git: {
      easy: [
        {
          q: "Which command initializes repo?",
          a: ["git init", "git start", "git new", "git clone"],
          c: 0,
        },
        {
          q: "How to stage files?",
          a: ["git add .", "git stage .", "git commit -m", "git push"],
          c: 0,
        },
        {
          q: "Which creates commit?",
          a: ["git commit -m", "git save", "git push", "git record"],
          c: 0,
        },
        {
          q: "Which uploads to remote?",
          a: ["git push", "git pull", "git remote", "git fetch"],
          c: 0,
        },
        {
          q: "How to check status?",
          a: ["git status", "git check", "git info", "git log"],
          c: 0,
        },
        {
          q: "Which shows history?",
          a: ["git log", "git history", "git show", "git list"],
          c: 0,
        },
        {
          q: "How to create branch?",
          a: [
            "git branch name",
            "git create name",
            "git new name",
            "git add name",
          ],
          c: 0,
        },
        {
          q: "Which switches branch?",
          a: ["git checkout", "git switch", "Both", "None"],
          c: 2,
        },
        {
          q: "How to merge branch?",
          a: ["git merge", "git combine", "git join", "git unite"],
          c: 0,
        },
        {
          q: "Which clones repo?",
          a: ["git clone", "git copy", "git download", "git get"],
          c: 0,
        },
      ],
      medium: [
        {
          q: "What is HEAD?",
          a: ["Current commit pointer", "First commit", "Last commit", "None"],
          c: 0,
        },
        {
          q: "Which is staging area?",
          a: ["Index", "Working directory", "Repository", "Remote"],
          c: 0,
        },
        {
          q: "What is rebase?",
          a: ["Replay commits", "Merge commits", "Both", "None"],
          c: 0,
        },
        {
          q: "Which resolves conflicts?",
          a: ["Manual edit", "git merge", "Both", "None"],
          c: 2,
        },
        {
          q: "What is .gitignore?",
          a: ["Ignore files", "Include files", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is remote name?",
          a: ["origin", "master", "main", "head"],
          c: 0,
        },
        {
          q: "What is fast-forward?",
          a: ["Linear merge", "Three-way merge", "Both", "None"],
          c: 0,
        },
        {
          q: "Which shows differences?",
          a: ["git diff", "git compare", "git show", "git check"],
          c: 0,
        },
        {
          q: "What is cherry-pick?",
          a: ["Apply single commit", "Apply all commits", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is interactive rebase?",
          a: ["git rebase -i", "git rebase", "Both", "None"],
          c: 0,
        },
      ],
      hard: [
        {
          q: "What is reflog?",
          a: ["Reference log", "Error log", "Commit log", "None"],
          c: 0,
        },
        {
          q: "Which is plumbing command?",
          a: ["git cat-file", "git status", "git log", "git add"],
          c: 0,
        },
        {
          q: "What is packfile?",
          a: ["Compressed objects", "Uncompressed objects", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is delta compression?",
          a: ["Store differences", "Store full", "Both", "None"],
          c: 0,
        },
        {
          q: "What is graft?",
          a: ["Fake parent", "Real parent", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is octopus merge?",
          a: ["Multiple branches", "Two branches", "Both", "None"],
          c: 0,
        },
        {
          q: "What is submodule?",
          a: ["Nested repo", "Single repo", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is shallow clone?",
          a: ["Partial history", "Full history", "Both", "None"],
          c: 0,
        },
        {
          q: "What is worktree?",
          a: ["Multiple working dirs", "Single working dir", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is gitattributes?",
          a: ["File attributes", "Repo attributes", "Both", "None"],
          c: 0,
        },
      ],
    },
    OS: {
      easy: [
        {
          q: "What does OS manage?",
          a: ["Hardware/software", "Only files", "Only users", "Only network"],
          c: 0,
        },
        {
          q: "What is virtual memory?",
          a: ["Larger than RAM", "Smaller than RAM", "Equal to RAM", "None"],
          c: 0,
        },
        {
          q: "What is a process?",
          a: ["Running program", "Stored file", "Network packet", "Device"],
          c: 0,
        },
        {
          q: "Which decides process run?",
          a: ["Scheduler", "Loader", "Compiler", "Interpreter"],
          c: 0,
        },
        {
          q: "What is kernel?",
          a: ["Core OS", "User interface", "Application", "Driver"],
          c: 0,
        },
        {
          q: "Which is not OS?",
          a: ["Windows", "Linux", "MS Word", "macOS"],
          c: 2,
        },
        {
          q: "What is deadlock?",
          a: ["Circular wait", "Linear wait", "Random wait", "None"],
          c: 0,
        },
        {
          q: "Which is file system?",
          a: ["NTFS", "FAT32", "ext4", "All"],
          c: 3,
        },
        {
          q: "What is thread?",
          a: ["Lightweight process", "Heavy process", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is I/O device?",
          a: ["Keyboard", "Mouse", "Monitor", "All"],
          c: 3,
        },
      ],
      medium: [
        {
          q: "What is paging?",
          a: ["Memory management", "CPU scheduling", "File management", "None"],
          c: 0,
        },
        {
          q: "Which is scheduling algorithm?",
          a: ["FCFS", "SJF", "Round Robin", "All"],
          c: 3,
        },
        {
          q: "What is semaphore?",
          a: ["Synchronization", "Communication", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is critical section?",
          a: ["Shared resource access", "Private access", "Both", "None"],
          c: 0,
        },
        {
          q: "What is context switch?",
          a: ["Process switch", "Thread switch", "Both", "None"],
          c: 2,
        },
        {
          q: "Which is memory allocation?",
          a: ["First fit", "Best fit", "Worst fit", "All"],
          c: 3,
        },
        {
          q: "What is virtual machine?",
          a: ["Emulate hardware", "Real hardware", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is disk scheduling?",
          a: ["FCFS", "SCAN", "C-SCAN", "All"],
          c: 3,
        },
        {
          q: "What is thrashing?",
          a: ["Excessive paging", "Normal paging", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is IPC?",
          a: ["Shared memory", "Message passing", "Both", "None"],
          c: 2,
        },
      ],
      hard: [
        {
          q: "What is banker algorithm?",
          a: ["Deadlock avoidance", "Deadlock detection", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is page replacement?",
          a: ["LRU", "FIFO", "Optimal", "All"],
          c: 3,
        },
        {
          q: "What is segmentation?",
          a: ["Variable size", "Fixed size", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is CPU burst?",
          a: ["Execution time", "I/O time", "Both", "None"],
          c: 0,
        },
        {
          q: "What is convoy effect?",
          a: ["FCFS problem", "SJF problem", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is starvation?",
          a: ["Resource denial", "Resource allocation", "Both", "None"],
          c: 0,
        },
        {
          q: "What is working set?",
          a: ["Recently used pages", "All pages", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is demand paging?",
          a: ["Load on demand", "Load all", "Both", "None"],
          c: 0,
        },
        {
          q: "What is TLB?",
          a: [
            "Translation Lookaside Buffer",
            "Table Lookup Buffer",
            "Both",
            "None",
          ],
          c: 0,
        },
        {
          q: "Which is inverted page table?",
          a: ["One entry per frame", "One entry per page", "Both", "None"],
          c: 0,
        },
      ],
    },
    React: {
      easy: [
        { q: "What syntax for UI?", a: ["JSX", "HTML", "CSS", "JSON"], c: 0 },
        {
          q: "How to create state?",
          a: ["useState()", "createState()", "setState()", "state()"],
          c: 0,
        },
        {
          q: "How to receive props?",
          a: ["props", "state", "context", "refs"],
          c: 0,
        },
        {
          q: "Which is functional component?",
          a: [
            "function Hello() {}",
            "class Hello extends React.Component {}",
            "React.createClass()",
            "Hello.render()",
          ],
          c: 0,
        },
        {
          q: "What is component?",
          a: ["Reusable UI", "Single UI", "Both", "None"],
          c: 0,
        },
        {
          q: "Which renders component?",
          a: ["ReactDOM.render()", "React.render()", "Both", "None"],
          c: 0,
        },
        {
          q: "What is props?",
          a: ["Input data", "Output data", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is lifecycle method?",
          a: ["componentDidMount", "render", "Both", "None"],
          c: 2,
        },
        {
          q: "What is key prop?",
          a: ["Unique identifier", "Random id", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is controlled component?",
          a: ["Value from state", "Value from DOM", "Both", "None"],
          c: 0,
        },
      ],
      medium: [
        {
          q: "What is useEffect?",
          a: ["Side effects", "Rendering", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is custom hook?",
          a: ["useCustom", "CustomHook", "Both", "None"],
          c: 0,
        },
        {
          q: "What is context?",
          a: ["Global state", "Local state", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is reducer?",
          a: ["useReducer", "useState", "Both", "None"],
          c: 0,
        },
        {
          q: "What is memo?",
          a: ["React.memo", "useMemo", "Both", "None"],
          c: 2,
        },
        {
          q: "Which is portal?",
          a: ["ReactDOM.createPortal", "React.createPortal", "Both", "None"],
          c: 0,
        },
        {
          q: "What is suspense?",
          a: ["Loading states", "Error states", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is lazy?",
          a: ["React.lazy", "React.load", "Both", "None"],
          c: 0,
        },
        {
          q: "What is fragment?",
          a: ["<React.Fragment>", "<>", "Both", "None"],
          c: 2,
        },
        {
          q: "Which is ref?",
          a: ["useRef", "createRef", "Both", "None"],
          c: 2,
        },
      ],
      hard: [
        {
          q: "What is reconciliation?",
          a: ["Virtual DOM diff", "Real DOM diff", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is fiber?",
          a: ["New reconciler", "Old reconciler", "Both", "None"],
          c: 0,
        },
        {
          q: "What is hydration?",
          a: ["SSR to client", "Client to SSR", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is concurrent mode?",
          a: ["Non-blocking rendering", "Blocking rendering", "Both", "None"],
          c: 0,
        },
        {
          q: "What is time slicing?",
          a: ["Break rendering", "Continuous rendering", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is suspense list?",
          a: ["Coordinate suspense", "Single suspense", "Both", "None"],
          c: 0,
        },
        {
          q: "What is error boundary?",
          a: ["Catch errors", "Throw errors", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is strict mode?",
          a: ["Development checks", "Production checks", "Both", "None"],
          c: 0,
        },
        {
          q: "What is profiler?",
          a: ["Performance measurement", "Error measurement", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is devtools?",
          a: ["Debug React", "Debug JS", "Both", "None"],
          c: 0,
        },
      ],
    },
    "Node.js": {
      easy: [
        {
          q: "What is Node.js?",
          a: ["JS runtime", "Browser", "Database", "CSS framework"],
          c: 0,
        },
        {
          q: "Which defines dependencies?",
          a: ["package.json", "index.js", "app.js", ".env"],
          c: 0,
        },
        {
          q: "Which imports module?",
          a: ["require()", "import", "include", "load"],
          c: 0,
        },
        {
          q: "What is npm?",
          a: ["Package manager", "Runtime", "Framework", "IDE"],
          c: 0,
        },
        {
          q: "Which is event-driven?",
          a: ["Node.js", "Python", "Java", "C++"],
          c: 0,
        },
        {
          q: "What is callback?",
          a: ["Async function", "Sync function", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is global object?",
          a: ["global", "window", "document", "this"],
          c: 0,
        },
        {
          q: "What is module?",
          a: ["Reusable code", "Single file", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is buffer?",
          a: ["Binary data", "Text data", "Both", "None"],
          c: 0,
        },
        {
          q: "What is stream?",
          a: ["Data flow", "Data storage", "Both", "None"],
          c: 0,
        },
      ],
      medium: [
        {
          q: "What is middleware?",
          a: ["Request processing", "Response processing", "Both", "None"],
          c: 2,
        },
        {
          q: "Which is framework?",
          a: ["Express", "Node.js", "npm", "V8"],
          c: 0,
        },
        {
          q: "What is promise?",
          a: ["Async result", "Sync result", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is async/await?",
          a: ["Promise syntax", "Callback syntax", "Both", "None"],
          c: 0,
        },
        {
          q: "What is cluster?",
          a: ["Multi-process", "Single process", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is child_process?",
          a: ["Spawn processes", "Kill processes", "Both", "None"],
          c: 0,
        },
        {
          q: "What is fs module?",
          a: ["File system", "Network", "Database", "HTTP"],
          c: 0,
        },
        {
          q: "Which is http module?",
          a: ["Web server", "File server", "Database server", "Mail server"],
          c: 0,
        },
        {
          q: "What is websocket?",
          a: ["Bidirectional", "Unidirectional", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is JWT?",
          a: ["Authentication", "Authorization", "Both", "None"],
          c: 2,
        },
      ],
      hard: [
        {
          q: "What is event loop?",
          a: ["Single thread", "Multi thread", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is libuv?",
          a: ["Cross-platform", "Platform specific", "Both", "None"],
          c: 0,
        },
        {
          q: "What is V8?",
          a: ["JS engine", "Runtime", "Framework", "Package manager"],
          c: 0,
        },
        {
          q: "Which is garbage collection?",
          a: ["Automatic memory", "Manual memory", "Both", "None"],
          c: 0,
        },
        {
          q: "What is REPL?",
          a: ["Interactive shell", "Compiler", "Interpreter", "Debugger"],
          c: 0,
        },
        {
          q: "Which is native addon?",
          a: ["C++ extension", "JS extension", "Both", "None"],
          c: 0,
        },
        {
          q: "What is worker threads?",
          a: ["True parallelism", "Concurrency", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is N-API?",
          a: ["ABI stable", "ABI unstable", "Both", "None"],
          c: 0,
        },
        {
          q: "What is pm2?",
          a: ["Process manager", "Package manager", "Task runner", "Bundler"],
          c: 0,
        },
        {
          q: "Which is docker?",
          a: ["Containerization", "Virtualization", "Both", "None"],
          c: 0,
        },
      ],
    },
    DBMS: {
      easy: [
        {
          q: "What does DBMS stand for?",
          a: [
            "Database Management System",
            "Data Backup Management System",
            "Distributed Base Management Service",
            "Digital Business Management System",
          ],
          c: 0,
        },
        {
          q: "Which uniquely identifies record?",
          a: ["Primary key", "Foreign key", "Candidate key", "Alternate key"],
          c: 0,
        },
        {
          q: "SQL is used to?",
          a: ["Query databases", "Style", "Compile", "Design"],
          c: 0,
        },
        {
          q: "Normalization reduces?",
          a: ["Redundancy", "Speed", "Storage", "Indexes"],
          c: 0,
        },
        {
          q: "Which is not DBMS?",
          a: ["MySQL", "PostgreSQL", "MongoDB", "MS Word"],
          c: 3,
        },
        {
          q: "What is schema?",
          a: ["Database structure", "Data values", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is DDL?",
          a: ["CREATE", "SELECT", "INSERT", "UPDATE"],
          c: 0,
        },
        {
          q: "What is DML?",
          a: ["Data manipulation", "Data definition", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is TCL?",
          a: ["COMMIT", "SELECT", "CREATE", "INSERT"],
          c: 0,
        },
        {
          q: "What is ACID?",
          a: ["Transaction properties", "Database types", "Both", "None"],
          c: 0,
        },
      ],
      medium: [
        {
          q: "What is foreign key?",
          a: ["References primary key", "Unique identifier", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is join type?",
          a: ["INNER", "OUTER", "LEFT", "All"],
          c: 3,
        },
        {
          q: "What is index?",
          a: ["Performance optimization", "Data storage", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is constraint?",
          a: ["NOT NULL", "UNIQUE", "PRIMARY KEY", "All"],
          c: 3,
        },
        {
          q: "What is view?",
          a: ["Virtual table", "Physical table", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is trigger?",
          a: ["Automatic action", "Manual action", "Both", "None"],
          c: 0,
        },
        {
          q: "What is stored procedure?",
          a: ["Precompiled SQL", "Runtime SQL", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is isolation level?",
          a: ["READ COMMITTED", "READ UNCOMMITTED", "Both", "None"],
          c: 2,
        },
        {
          q: "What is deadlock?",
          a: ["Circular dependency", "Linear dependency", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is NoSQL?",
          a: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
          c: 0,
        },
      ],
      hard: [
        {
          q: "What is 2NF?",
          a: [
            "Partial dependency removal",
            "Transitive dependency removal",
            "Both",
            "None",
          ],
          c: 0,
        },
        {
          q: "Which is 3NF?",
          a: [
            "Transitive dependency removal",
            "Partial dependency removal",
            "Both",
            "None",
          ],
          c: 0,
        },
        {
          q: "What is BCNF?",
          a: ["Boyce-Codd normal form", "Basic normal form", "Both", "None"],
          c: 0,
        },
        {
          q: "What is functional dependency?",
          a: ["X -> Y", "X <- Y", "Both", "None"],
          c: 0,
        },
        {
          q: "What is closure?",
          a: ["All dependencies", "Some dependencies", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is Armstrong axioms?",
          a: ["Inference rules", "Normal forms", "Both", "None"],
          c: 0,
        },
        {
          q: "What is lossless join?",
          a: ["No information loss", "Information loss", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is dependency preservation?",
          a: ["All FDs preserved", "Some FDs preserved", "Both", "None"],
          c: 0,
        },
        {
          q: "What is serializability?",
          a: ["Equivalent to serial", "Not equivalent", "Both", "None"],
          c: 0,
        },
        {
          q: "Which is two-phase locking?",
          a: [
            "Growing then shrinking",
            "Shrinking then growing",
            "Both",
            "None",
          ],
          c: 0,
        },
      ],
    },
  };

  const pool = baseQuestions[topic] && baseQuestions[topic][difficulty] 
                 ? baseQuestions[topic][difficulty] 
                 : [];
  
  if (pool.length === 0) return [];

  const questions = [];
  // Shuffle pool to ensure unique variety per seed
  const shuffledBase = [...pool].sort(() => Math.random() - 0.5);

  for (let i = 0; i < count; i++) {
    const baseQ = shuffledBase[i % pool.length];
    // Only add suffix if we are forced to repeat (e.g. Learn mode > pool size)
    const suffix = i >= pool.length ? ` (Var. ${Math.floor(i / pool.length) + 1})` : "";
    
    questions.push({
      questionText: baseQ.q + suffix,
      options: baseQ.a,
      correctOptionIndex: baseQ.c,
      topic: topic,
      difficulty: difficulty,
    });
  }

  return questions;
}

const quizzes = [
  {
    title: "Java Basics",
    category: "easy",
    description: "Basic Java questions for beginners.",
    questions: [
      ...generateQuestions("Java", "easy", 50),
      ...generateQuestions("Java", "medium", 50),
      ...generateQuestions("Java", "hard", 50),
    ],
  },
  {
    title: "C Programming",
    category: "easy",
    description: "Core C programming questions with simple output and syntax.",
    questions: [
      ...generateQuestions("C", "easy", 50),
      ...generateQuestions("C", "medium", 50),
      ...generateQuestions("C", "hard", 50),
    ],
  },
  {
    title: "C++ Basics",
    category: "medium",
    description: "Fundamental C++ concepts including classes and STL.",
    questions: [
      ...generateQuestions("C++", "easy", 50),
      ...generateQuestions("C++", "medium", 50),
      ...generateQuestions("C++", "hard", 50),
    ],
  },
  {
    title: "Python Basics",
    category: "easy",
    description: "Python syntax and core concepts for beginners.",
    questions: [
      ...generateQuestions("Python", "easy", 50),
      ...generateQuestions("Python", "medium", 50),
      ...generateQuestions("Python", "hard", 50),
    ],
  },
  {
    title: "JavaScript Basics",
    category: "medium",
    description: "Core JavaScript concepts for web development.",
    questions: [
      ...generateQuestions("JavaScript", "easy", 50),
      ...generateQuestions("JavaScript", "medium", 50),
      ...generateQuestions("JavaScript", "hard", 50),
    ],
  },
  {
    title: "Git Fundamentals",
    category: "easy",
    description: "Basic Git commands and version control concepts.",
    questions: [
      ...generateQuestions("Git", "easy", 50),
      ...generateQuestions("Git", "medium", 50),
      ...generateQuestions("Git", "hard", 50),
    ],
  },
  {
    title: "Operating Systems",
    category: "medium",
    description: "Important OS concepts for general understanding.",
    questions: [
      ...generateQuestions("OS", "easy", 50),
      ...generateQuestions("OS", "medium", 50),
      ...generateQuestions("OS", "hard", 50),
    ],
  },
  {
    title: "ReactJS",
    category: "medium",
    description: "React fundamentals for building frontend components.",
    questions: [
      ...generateQuestions("React", "easy", 50),
      ...generateQuestions("React", "medium", 50),
      ...generateQuestions("React", "hard", 50),
    ],
  },
  {
    title: "Node.js",
    category: "medium",
    description: "Server-side JavaScript concepts using Node.js.",
    questions: [
      ...generateQuestions("Node.js", "easy", 50),
      ...generateQuestions("Node.js", "medium", 50),
      ...generateQuestions("Node.js", "hard", 50),
    ],
  },
  {
    title: "DBMS",
    category: "hard",
    description: "Database management system questions with SQL fundamentals.",
    questions: [
      ...generateQuestions("DBMS", "easy", 50),
      ...generateQuestions("DBMS", "medium", 50),
      ...generateQuestions("DBMS", "hard", 50),
    ],
  },
];

async function seed() {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Connected to MongoDB for seed.");
  await Quiz.deleteMany({});
  await Quiz.insertMany(quizzes);
  console.log(`Inserted ${quizzes.length} quizzes.`);
  await mongoose.disconnect();
  console.log("Seed complete.");
}

seed().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
