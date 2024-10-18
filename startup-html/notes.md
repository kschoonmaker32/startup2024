
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

1. Auto x auto
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
