
div: a block division of content
span: an inline span of content

## HTML notes and example questions

**Who is making the web standards?**

The World Wide Web Consortium

**Choose the correct HTML element for the largest heading.**

h1

**How do you ine break in HTML?**

br

**How do you add a background color in HTML?**

body style="background-color:yellow;"

**How do you define important text?**

strong

**How do you define emphasized text?**

em

**How to create a hyperlink?**

<a href="http://www.w3schools.com">W3Schools</a>

**How to open a link in a new browser/window?**

a href="url" target="_blank"

**Which of these are all table elements?**

table, tr, td

**Inline elements are usually displayed without starting a new line.**

**How to make a checkbox?**

input type="checkbox"

**How to make text input field?**

<input type="text"> 

**How to make a dropdown list?**

select

**How to make a text area?**

textarea

**How to insert an image?**

img src="image.gif" alt="MyImage"

**How to insert background image?**

body style="background-image:url(background.gif)"

**An <iframe> is used to display a web page within a web page.**

**Block elements are usually displayed starting a new line.**

**What defines the title?**

title

**In HTML, you can embed SVG elements directly into an HTML page.**

**What is the correct HTML element for playing video and audio files?**

video, audio

**The HTML global attribute, "contenteditable" is used to:**

Specify if the content is editable or not.

**In HTML, onblur and onfocus are:**

Event attributes

**Graphics defined by SVG is in which format?**

XML

**The HTML <canvas> element is used to:**

Draw graphics

**In HTML, which attribute is used to specify that an input field must be filled out?**

Required

**What input type defines a slider control?**

Range

**Which HTML element is used to display a scalar measurement within a range?**

Meter

**In HTML, what does the <aside> element define?**

Content aside from the page content

**Which HTML element is used to specify a header for a document or section?**

Header

## CSS notes and example questions

**What is the correct HTML for referring to an external style sheet?**

link rel="stylesheet" type="text/css" href="mystyle.css"

**Where in an HTML document is the correct place to refer to an external style sheet?**

head

**Which HTML tag is used to define an internal style sheet?**

style

**Which HTML attribute is used to define inline styles?**

style

**Which is the correct CSS syntax?**

body {color: black;}  

**Which property is used to change the background color?**

background-color

**How do you add a background color for all h1 elements?**

h1 {background-color:#FFFFFF;}  

**Which CSS property is used to change the text color of an element?**

color

**Which CSS property controls the text size?**

font-size

**What is the correct CSS syntax for making all the <p> elements bold?**

p {font-weight:bold;}  

**How do you display hyperlinks without an underline?**

a {text-decoration:none;}  

**How do you make each word in a text start with a capital letter?**

text-transform:capitalize 

**Which property is used to change the font of an element?**

font-family

**How do you make the text bold?**

font-weight:bold;

**How do you display a border like this:**

**The top border = 10 pixels**
**The bottom border = 5 pixels**
**The left border = 20 pixels**
**The right border = 1pixel?**

border-width:10px 1px 5px 20px; 

**Which property is used to change the left margin of an element?**

margin-left 

**When using the padding property; you are not allowed to use negative values.**

**How do you make a list that lists its items with squares?**

list-style-type: square;

**How do you select an element with id 'demo'?**

#demo

**How do you select elements with class name 'test'?**

.test

**How do you select all p elements inside a div element?**

div p

**How do you group selectors?**

Separate each selector with a comma  

**What is the default value of the position property?**

static


## Javascript notes and example questions

**Inside which HTML element do we put the JavaScript?**

script

**What is the correct JavaScript syntax to change the content of the HTML element below?**
**p id="demo">This is a demonstration.</p**

document.getElementById("demo").innerHTML = "Hello World!";  

**Where is the correct place to insert a JavaScript?**

head and body

**What is the correct syntax for referring to an external script called "xxx.js"?**

script src="xxx.js"

**The external JavaScript file does not need to contain the <script> tag.**

**How do you write "Hello World" in an alert box?**

alert("Hello World");  

**How do you create and call a function in Javascript?**

function myFunction()

myFunction()

**What is the correct way to write a JavaScript array?**

var colors = ["red", "green", "blue"]  

**How do you round the number 7.25, to the nearest integer?**

Math.round(7.25)  

**How do you find the number with the highest value of x and y?**

Math.max(x,y)

**What is the correct JavaScript syntax for opening a new window called "w2"?**

w2 = window.open("http://www.w3schools.com");  

**How can you detect the client's browser name?**

navigator.appName  

**Which event occurs when the user clicks on an HTML element?**

onclick

**How do you declare a JavaScript variable?**

var carName;

**Javascript IS case sensitive.**






**Associating CSS with HTML**
1. The first way is to use the style attribute of an HTML element and explicitly assign one or more declarations.
<p style="color:green">CSS</p>

2. The next way to associate CSS is to use the HTML style element to define CSS rules within the HTML document. The style element should appear in the head element of the document so that the rules apply to all elements of the document.
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>CSS</p>
</body>

3. The final way to associate CSS is to use the HTML link element to create a hyperlink reference to an external file containing CSS rules. The link element must appear in the head element of the document. (preferred)
<link rel="stylesheet" href="styles.css" />


## Midterm Study Guide

**By default, the HTML span element has a default CSS display property value of:**

Inline.  

**How would you use CSS to change all the div elements to have a background color of red?** 

div { 

	background-color: red; 

} 

**How would you display an image with a hyperlink in HTML?**

<img src=”imagelink” alt=”description” /> 

**In the CSS box model, what is the ordering of the box layers starting at the inside and working out?**

1. Content
2. Padding
3. Border
4. Margin 

**How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?**

// Document.getElementById(“byu”).style.color = “green”; 

**What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?**
p, ol, ul, h2, h1, h3

**How do you declare the document type to be html?**

<!DOCTYPE html> 

**What is valid javascript syntax for if, else, for, while, switch statements?**

(similar as java) 

*IF* 

If (condition) { 

	code to execute; 

} else { 

code to execute; 

} 

 

*FOR* 

for (initialization; condition; increment) { 

	Code to execute; 

} 

 

*WHILE* 

while (condition) { 

	code to execute; 

} 

 

*SWITCH* 

Switch (expression) { 

	Case value1: 

		code to execute; 

		break; 

	Case value2: 

		code to execute; 

		break; 

	Default: 

		code to execute if no cases match; 

} 

**What is the correct syntax for creating a javascript object?**

Let myObject = { 

	Property1: value1, 

	Property2: value2, 

	Method1: function() { 

		code for method; 

	} 

}; 

**Is it possible to add new properties to javascript objects?**

Yes. myObject.newProperty = newValue; 

**If you want to include JavaScript on an HTML page, which tag do you use?**

 Script tag

**What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?**

- Chmod: change mode (permissions of files or directories) 
- Pwd: print working directory 
- Cd: change directory
- Ls: list 
- Vim: vim text editor 
- Nano: nano text editor 
- Mkdir: make directory 
- Mv: move 
- Rm: remove 
- Man: manuel 
- Ssh: secure shell 
- Ps: process status (displays processes currently running) 
- Wget: web get (downloads files from internet) 
- Sudo: superuser do (runs commands as superuser or root) 

**Is a web certificate is necessary to use HTTPS?**
  
Yes 

**Can a DNS A record can point to an IP address or another A record?**

Only IP address 

**Port 443, 80, 22 is reserved for which protocol?**
  
  - 443: reserved for https (secure web traffic) 
  - 80: reserved for http (non secure web traffic) 
  - 22: reserved for ssh (secure shell and remote login)


**Final Exam Review**

**What is the default port for HTTP/HTTPS/SSH?**  

80, 443, 22

**What does an HTTP status code in the range of 300/400/500 indicate?**  

- 300: further action required by client
- 400: error on client side
- 500: error on server side

**What does the HTTP header content-type allow you to do?** 

Allows the client and server to understand how to interpret content and ensure its rendered correctly

**What does a “Secure cookie”/”Http-only cookie”/”Same-site cookie” do?**  
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)  

- **Secure cookie**: ensure cookie is only sent over secure https connections
- **http only cookie**: makes cookie inaccessible to javascript on client side
- **same-site cookie**: controls if a cookie is sent with offsite requests

**Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /api/document?**  

**Given the following Express service code: What does the following front end JavaScript that performs a fetch return?**  

**Given the following MongoDB query, select all of the matching documents `{name:Mark}`**  

**How should user passwords be stored?**

hashed and salted for encryption

**Assuming the following node.js websocket code in the back end, and the following front end websocket code, what will the front end log to the console?**  

**What is the websocket protocol intended to provide?**  

Real time communication between the client and the server 

**What do the following acronyms stand for?**  

- **JSX**: javascript xml (extendable markup language)
- **JS**: javascript
- **AWS**: amazon web services 
- **NPM**: node package manager
- **NVM**: node version manager

**Assuming an HTML document with a body element. What text content will the following React component generate? The React component will use parameters.**  
  

**Given a set of React components that include each other, what will be generated?**  


**What does a React component with React.useState do?**  

Manages state variables by updating and tracking dynamic values

**What are React Hooks used for?**  

They add state and side effects to functional components (useState and useEffect)

**What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do?**  
[React Reference](https://react.dev/reference/react/hooks)  

- **State**: manages state component by tracking and updating values
- **Context**: accesses context values without needing to pass props down
- **Ref**: creates a reference to store data that interacts with dom
- **Effect**: handles side effects such as fetching data, updating dom, or subscribing/unsubscribing to events
- **Performance**: optimizes performance by memoizing programs to increase program efficientcy

**Given React Router code, select statements that are true.**  

**What does the package.json file do?**  

It defines a node project's scripts, dependencies, and configuration.

**What does the fetch function do?**  

It performs HTTP requests in javascript allowing the client and server to send and retrieve data and returns a promise. 

**What does node.js do?**  

Allows for backend development by running javascript on the server side.

**What does pm2 do?**  

It is a process manager for node.js applications by monitering processes and restarting if they crash. 

**What does Vite do?**

It is a fast build tool and development server for web projects. 


