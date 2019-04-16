# modernElementsAPIs

Based on the web designer magazine I have learned from, here are some of the useful HTML, CSS, JS Elements and APIs that you can consider while coding through your program: 

_"Semantic Markup is vital for Accessibility, Search Engines, and much more - But it is so often misused. Build a strong foundation and treat CSS and JavaScript like an Enhancement."_ - [Matt Crouch](https://twitter.com/mattcrouchuk), Software Engineer at Vidsy 

## HTML (Essential Sectioning Elements)

For example, `<main>`, `<nav>`, `<header>`, `<footer>`, `<aside>`, `<article>`, `<section>`, `<h1>` to `<h6>`, and more, including those below:  

#1 `<Dialog>` - Display a popup or modal window

#2 `<Details>` and `<Summary>` - Show and Hide extra content under collapsible heading without using JavaScript 

#3 `<Picture>`- Respond to different viewports and serve specialised content to serve them better 
(_personally, I do not really like this picture element. It is really similar to media query, but the only problem will be you are not able to add class to `srcset`, and it is linked with the `img` element only. If you add percentage change to an image, based on sourceset aspect ratio, it will influence the display of the image especially when the screen size is smaller. *If you have all the different sizes images ready and you do not have to fix its size in css, `srcset` will definitely be a great choice. Otherwise, I might prefer the use of media query and css instead of the use of `srcset`_)

**One More Sidenote:**
"The picture element is best used in diagrams and informational images rather than simply supplying different resolution photos based on width" 


## HTML (Essential Inline Elements)

Avoid using `<span>` if you can and try elements designed for the job, See below:

#1 `<Time>` - Dates and times are formatted differently across the world and so cannot be reliably parsed by a search engine or email client. Specify what parts of a sentence are a time and allow programs to extract and use that information. 

_Here are two great links with demo:_ 

    1) CSS-Tricks article on [the `time` Element](https://css-tricks.com/time-element/) 
    
    2) [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time) 

#2 `<Mark>`

#3 `<ABBR>`

#4 `<Q>`

#5 `<KBD>`