

## Emmet Cheatsheet:

[link](https://docs.emmet.io/cheat-sheet/)

## Bootstrap Cheatsheet:

[link](https://hackerthemes.com/bootstrap-cheatsheet/#col-xl-1) , Tip: You can navigate throught items via Right and Left arrow.

[link2](https://www.creative-tim.com/cheatsheet/bootstrap4)

[link3](http://nrpc.gov.in/wp-content/uploads/2017/10/b4-cheat-sheet-11v400-beta1-bc.pdf)

[link4](https://www.w3schools.com/bootstrap/bootstrap_ref_all_classes.asp) - w3schoolcss frameworks - https://github.com/troxler/awesome-css-frameworks 

Some Of The Most Popular CSS Libraries That Are On Github: https://www.designyourway.net/drb/the-most-popular-css-libraries-that-are-on-github/

****

## Download Bootstrap Icons repo:

View the bootstrap icons @ [link](https://icons.getbootstrap.com/) , Want to dowload all icons, get this [repo](https://github.com/twbs/icons) cloned.
• You can directly install via npm too, i.e., `npm install bootstrap-icons`. And you can view the icons directly in node_modules/bootstrap-icons/icons folder and import them from there directly.

Usage: 

```css
//Embed the icon:
<svg class="bi bi-chevron-right" width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>
```

```css
//Or you can link to extenal image from the download repo from the github, or directly from the node_modules/bootstrap-icons/icons folder.
<img src="/assets/img/bootstrap.svg" alt="" width="32" height="32" title="Bootstrap">
```

***

## From w3school 

## What is The Viewport?

The viewport is the user's visible area of a web page.

The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.

Before tablets and mobile phones, web pages were designed only for computer screens, and it was common for web pages to have a static design and a fixed size.

Then, when we started surfing the internet using tablets and mobile phones, fixed size web pages were too large to fit the viewport. To fix this, browsers on those devices scaled down the entire web page to fit the screen.

This was not perfect!! But a quick fix.

*

### Setting The Viewport

HTML5 introduced a method to let web designers take control over the viewport, through the <meta> tag.

You should include the following <meta> viewport element in all your web pages:

<meta name="viewport" content="width=device-width, initial-scale=1.0">

**viewport** element gives the browser instructions on how to control the page's dimensions and scaling.


The **width=device-width** part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

The **initial-scale=1.0** part sets the initial zoom level when the page is first loaded by the browser.

***

## Embed youtube video (with responsiveness)

```html
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="//www.youtube.com/embed/48OJbbI0DfE" allowfullscreen=""></iframe>
</div>
```

src: https://hackerthemes.com/bootstrap-cheatsheet/#embed-responsive

***

## Simply setting marging with class

```
m-VALUE
mt-VALUE
mr-VALUE
mb-VALUE
ml-VALUE
mx-VALUE
my-VALUE 
mx-VALUE
* VALUE COULD BE :- 0,1,2,3,4,5.
```

Above mentioned are the **class names**, **m** sets for **all edges**, **mt** sets for **top** edge, **mr** sets for **right** edge, **mb** sets for **bottom** edge, **ml** sets for **left** edge, **mx** sets for **both right and left** and **my** sets for both **top and bottom**. 

***

## Responsive breakpoints @ bootstrap

[original link](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints)

Since Bootstrap is developed to be mobile first, we use a handful of [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.

Bootstrap primarily uses the following media query ranges—or breakpoints—in our source Sass files for our layout, grid system, and components.

**@media (min-width: 576px) { ... } => THIS SAYS, THAT MARGINS/PADDINGS/ETC WILL ONLY APPLY WHEN VIEWPORT IS 576PX IN width or maximum.**

My laptop's width: 1536px

My phone's width: 360px
(google - check my browsers resolution, open any of the 1st,2nd,3rd site to get the width and height.)

```
// Extra small devices (portrait phones, less than 576px)
// No media query since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... } => THIS SAYS, THAT MARGINS/PADDINGS/ETC WILL ONLY APPLY WHEN VIEWPORT IS 576PX IN width or maximum.

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
```