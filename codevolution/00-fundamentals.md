<!-- 01 -->


Node.js
https://nodejs.org/en

nodejs is an open-source, cross-platform JavaScript runtime environment

- Open source: Source code is publicly available for sharing and modification
- Cross platform: Available on Mac, Windows and Linux
- JavaScript runtime environment: Provides all the necessary components to use and run a JavaScript program out of the browser


<!-- 02 -->


ECMAScript

In Nov 1996, Netscape submitted JavaScript to Ecma International, an industry association dedicated to the standardization of information and communication systems. For each new specification Ecma provides a standard specification and a committee.

In JavaScript, the standard is called ECMA-262 and the committee that works on ECMA-262 is called Technical Committee 39 (TC39).


<!-- 03 -->


Chrome V8 Engine
https://v8.dev/

JavaScript code we write cannot be understood by the computer.

JavaScript engines are programs that convert JavaScript code that developers write into machine code that allow computers to perform specific tasks

JavaScript engines are typically developed by web browser vendors

- V8: Open-source JavaScript Engine developed by Google for Chrome
- SpiderMonkey: The JavaScript Engine powering Mozilla Firefox
- JavaScriptCore: Open-source JavaScript Engine developed by Apple for Safari

Chrome's V8 engine by Google sits at the core of Node.js

By embedding V8 into C++ applications, C++ code gets executed when a dev writes JavaScript code. New features can be added to JavaScript itself.

C++ is great for lower level operations like file handling, database connections and network operations; embedding V8 into a C++ program offers the power of adding all functionality in JavaScript. That C++ program is Node.js


<!-- 04 -->


JavaScript Runtime

JavaScript runtime is an environment which provides all the necessary components in order to use and run a JavaScript program. Every browser has a JavaScript Engine as it is one of the components in the JavaScript Runtime.


<!-- 05 -->


Node.js Structure & Summary
https://github.com/nodejs/node

Key Folders
- deps (dependencies): V8, uv (libuv - file system, networking), zlib, crypto, etc.
- src: C and C++ features and structues
- lib: JavaScript code to access C++ features in Node.js

Summary
- Node.js is an open-source, cross-platform JavaScript runtime environment
- It is not a language nor a framework
- Node.js executes JavaScript code out of the browser
- It runs standard ECMAScript as well as new features that are made available through C++ bindings, using the V8 engine
- It consists of C++ files which form the core features and JavaScript files which expose common utilities and some of the C++ features for easier