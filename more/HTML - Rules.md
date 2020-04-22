### HTML - Rules

Below Code prints as it is in html with the give newline and defined number of spaces.

```html
<pre>Text in a pre element
is displayed in a fixed-width
font, and it preserves
both      spaces and
line breaks
.</pre>
```

***

This anchor tag

 ``` <a href="///google.com">GOOGLE</a> ```  

goes to http://google.com.

And

***

 ``` <a href="///www.google.com">GOOGLE</a> ```  will go to http://www.google.com.

***

This anchor tag 

 ``` <a href="google.com">GOOGLE</a> ```  

goes to /google.com. i.e., if the site is hosted on localhost, it will go to http://localhost/google.com

***

```html
<span>hello there i'm inline</span>
<span>hello there i'm inline</span>
<span>hello there i'm inline</span>
```

Prints the code as 
 ``` hello there i'm inlinehello there i'm inlinehello there i'm inline ``` 

***

```html
<p>
        Now I'm negleting any rules of css here that actullay applied to p tag
        and i don't like enemies and also it is not so go.
    </p>
    <p>
        Now I'm negleting any rules of css here that actullay applied to p tag
        and i don't like enemies and also it is not so go.
    </p>
    <p>
        Now I'm negleting any rules of css here that actullay applied to p tag
        and i don't like enemies and also it is not so go.
    </p>
    <p>
        Now I'm negleting any rules of css here that actullay applied to p tag
        and i don't like enemies and also it is not so go.
    </p>
```

Above code prints

```html
Now I'm negleting any rules of css here that actullay applied to p tag and i don't like enemies and also it is not so go.

Now I'm negleting any rules of css here that actullay applied to p tag and i don't like enemies and also it is not so go.

Now I'm negleting any rules of css here that actullay applied to p tag and i don't like enemies and also it is not so go.

Now I'm negleting any rules of css here that actullay applied to p tag and i don't like enemies and also it is not so go.
```

***

```css
.shadow_maa2 {
            background-color: bisque;
            border-radius: 20px;
            padding: 10px;
            margin: 20px;
            box-shadow: 0px 10px 10px #888888;
            border: 1px solid;
            border-color: whitesmoke
        }
```

```html
	<p class="shadow-maa2">
        Now I'm negleting any rules of css here that actullay applied to p tag
        and i don't like enemies and also it is not so go.
    </p>
```
***

hr tag produces horizontal rule in html.
***

```	html
	<div>
        Hello there.
    </div>
    <div>
        Hello there.
    </div>
    <div>
        Hello there.
    </div>
```

Above code produces output as -

```html
Hello there.
Hello there.
Hello there.
```

***

```javascript
<a id="rohitkadad" href="index.html">Bubaa</a>
<script>
        document.onkeydown = function (e) {
        if (e.keyCode == 49) {
        	    document.getElementById("rohitkadad").click();
            }
        };
</script>       
```

```javascript
<script>
        var link = document.getElementById("rohitkadad");
        document.onkeydown = function (e) {
            if (e.keyCode == 49) {
                link.click();
            }
        };
</script> 
```

***
```javascript
<script>
        window.alert("keypressed");
</script>
```

Above JS will execute the alert only once on the page load. If page is reloaded the alert will pop-up again.

***

```javascript
window.alert("sometext");
alert("someothertext.");
Both are same.
```

cdc, vidal, mp

(240,170,205)

***

Add the width, height = 0px in style >> for example to hide the div element.

***

[HTML name Attribute](https://www.w3schools.com/tags/att_name.asp)	

***

#### Cursor

```html
<style>
        html,body{height: 100%;}
        a,body{cursor: cell}
            
</style>
```

***


```javascript
a,body{cursor: url(someicon.gif),auto;}

a,body{cursor: url(https://cursors4.totallyfreecursors.com/thumbnails/magic-wand-ani.gif),auto;}

a,body{cursor: url(http://www.rw-designer.com/cursor-view/55501.gif),auto;}

a,body{cursor: url("https://github.com/sahilrajput03/JaaduJinn/blob/master/cursors/magic-wand-animated.gif?raw=true"),auto;}

a,body{cursor: url(data:image/gif;base64,R0lGODlhIAAgADMAACH5BAkRAAgAIf8LTkVUU0NBUEUyL#data#data#data#data#data#data#data#data#data#data#more#data#endData),auto;}
//convert-image to base64 - https://www.base64-image.de 
```

[ConvertToBase-64](https://www.base64-image.de )

***

**VSC**: Ctrl+Shift+[.. and VICE-VERSA FOR SHOW HIDE TAGS IN HTML.

------

[Default cursors of web @w3schools](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_cursor)		[Cursor @MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Basic_User_Interface/Using_URL_values_for_the_cursor_property)		

***

Cursor usability in different browsers - [CanIUse.com](https://caniuse.com/#search=cursor) 
Formats for cursors - cur, ico, png.

[Setting cursor via JS](https://stackoverflow.com/questions/9408780/javascript-firefox-how-to-set-custom-cursor-from-local-png-file)  [Css cur format@StackOverflow](https://stackoverflow.com/questions/32037763/css-cur-cursor-format)	

***



GitHub pages host only static HTML pages. No server side technology is supported, so Node.js applications won’t run on GitHub pages. There are lots of hosting providers, as listed on the Node.js
wiki. - 

**Node Hosting**: https://github.com/nodejs/node-v0.x-archive/wiki/Node-Hosting

Publishing node on GitHub pages - [@stackOverlof Lol](https://stackoverflow.com/questions/15718649/how-to-publish-a-website-made-by-node-js-to-github-pages)

***

[Introducing Chrome Debugging for VS Code](https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code)		

***

#### VSCode and GitHub:

•VSC: Ctrl+L : Just selects the current line and stars selecting the line below and below and below..and on.
•VSC: Alt + shift + Down: copy the current line down.
•VSC: Alt + shift +Up: copy the current line up.
•The duplicate can also be achieved by CTRL+C and CTRL+V with cursor in the line without nothing selected.
•Ctrl + C: without selecting anything copies the entire line.
•Ctrl + [ and, Ctrl + ] moves the line (or selected lines) to corresponding directions next respective indents.
•To comment a selected text in VCS – Ctrl + / , for block comment use Alt+Shift+A
•Alt+shift+f >> Reformat the code.
•Press T in any GitHub repository, to activate file finder; and start typing the name of the file you’ll see the results lively on the screen.

***

Aligning a div in html [does not use the style property to center the the div]

```html
<div align="center"> 
```

src: [w3schools.com](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_div_align) and [link@w3schools.com](https://www.w3schools.com/tags/att_div_align.asp)

***

Right aligned List in HTML: [@StackOverflow Answer](https://stackoverflow.com/questions/10431037/css-right-aligned-list)	

***

Remove outline around text boxes, input fields, etcetrae - 
[Tutorial @ tutorialRepblic.com](https://www.tutorialrepublic.com/faq/how-to-remove-outline-around-text-input-boxes-in-chrome-using-css.php)		[Tutorial @ Medium.com](https://medium.com/@hassadee/remove-blue-border-outline-in-chrome-and-dash-border-in-firefox-b857d452d136)	

Remove dotter outline in Mozilla -
[Tutorial @StackOverflow](https://stackoverflow.com/questions/71074/how-to-remove-firefoxs-dotted-outline-on-buttons-as-well-as-links)

INSHORT -

```css
/*code the css file with the this to smoothe every focus area*/

input:focus, textarea:focus, select:focus, button:focus{
  outline: none;
}

button::-moz-focus-inner {
  border: 0;
}
```

***

##### Left or Right align a button 

```css
.floatLeft{
  float: left;
}/* Add this class to the button */ /*change the left/right to use*/
```

***

EMMET CheatSheet:  https://docs.emmet.io/cheat-sheet/ 

***

# onclick in div

```html
<div onclick="alert('clicked')">
    This text generates alert.
</div>
above property can be assigned to any div, paragraph, span and other tags(you may test others, testing is always important.)

important note # BUT WHEN YOU WANT TO USE THIS PROPERTY IN REACT, YOU MUST USE THEM AS 
<div onClick={()=>alert("li click")}>
    This text generates alert.
</div>
sO BEWARE OF REACT, REACT USUALLY HURTS EVERBODY. Be prepare for it.

***
Other React html: you should always use <p> as <p></p>, <br> as <br></br>
```

***

```html
The <input> Element  - w3schools.com
The <input> element is the most important form element.

The <input> element is displayed in several ways, depending on the type attribute.

Here are some examples:

Type	Description
<input type="text">	Defines a single-line text input field
<input type="radio">	Defines a radio button (for selecting one of many choices)
<input type="submit">	Defines a submit button (for submitting the form)
```

***

![image-20200416172356378](image-20200416172356378.png)

***

![image-20200416172527245](image-20200416172527245.png)

***

![img](image-20200416172947038.png)

![image-20200416173048618](image-20200416173048618.png)

![image-20200416173104881](image-20200416173104881.png)

https://www.w3schools.com/jsref/prop_radio_checked.asp

***

![image-20200418150548100](image-20200418150548100.png)

***

![image-20200418150642528](image-20200418150642528.png)

![image-20200418150726380](image-20200418150726380.png)

![image-20200418150749897](image-20200418150749897.png)

***

![image-20200418150923276](image-20200418150923276.png)

***

## Crux of the research of absolute , relative, root relative url

![image-20200418151141498](image-20200418151141498.png)

Above example is the interesting one, since the root/absolute url is set to https://www.32schools.com/tags ,(target="_blank has no relevace in the context we are talking but it means that all links will be open in new tab, unless they are specified with target="_self"  explicitly.)
So, all the url of the page are now modified accordingly, like 

href="images/stickman.gif" >> href="https://www.32schools.com/tags/images/stickman.git"
href="/tag_base.asp" >> href="https://www.32schools.com/tag_base.asp" << THIS ONE IS INTERESTING(root relative)
This is so because, **setting** base href="domain/subfolder" >>  willl set the 
root domain **to** domain
root url  **to** domain/subfolder. 

-----**By default** (if you do not specifiy <base> tag in your page.html):-
root domain=> current domain of the page => www.google.com, www.youtube.com, www.facebook.com
root url => current url of the page => www.google.com, www.google.com/drive

***

![image-20200418152811073](image-20200418152811073.png)

cd to root folder (this is example of relative url)

***

![image-20200418152924652](image-20200418152924652.png)

cd to root/Users folder. (this is example of relative url)

***

![image-20200418154717492](image-20200418154717492.png)

***

From [Working with CSS preprocessors in Chrome DevTools](https://developers.google.com/chrome-developer-tools/docs/css-preprocessors):

> Many developers generate CSS style sheets using a CSS preprocessor, such as Sass, Less, or Stylus. Because the CSS files are generated, editing the CSS files directly is not as helpful.
>
> For preprocessors that support CSS source maps, DevTools lets you live-edit your preprocessor source files in the Sources panel, and view the results without having to leave DevTools or refresh the page. When you inspect an element whose styles are provided by a generated CSS file, the Elements panel displays a link to the original source file, not the generated .css file.

***

