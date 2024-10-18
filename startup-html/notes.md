In this assignment, I learned that forking a repository is a way to copy the repository into your own environment.


div: a block division of content
span: an inline span of content


** Associating CSS with HTML**
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
