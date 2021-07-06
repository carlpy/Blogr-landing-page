Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Live Site URL: [Blogr-Page](https://trusting-roentgen-9cf987.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Sass (CSS pre-processor)
- Vanilla javascript

### What I learned

i've been doing this proyect around a month or more because the time, but i learn new js front-end concpts like creating an accordion (the thing at the menu that collapse) and a fancy mobile navbar, 
and also this is my first time using sass, so i took me a lot of time, but at the end i did it, i learn a bit of mixins, nesting in sass also compilin with node-sass and with the live-sass-compiler

To see how you can add code snippets, see below:

```html
Almost everything XD
```
```scss
@mixin hero-button {
    border: 2px solid $white;
    border-radius: 60.25rem;
    background-color: transparent;
    color: inherit;
    font-size: 1rem;
    font-weight: 700;
    font-family: $ubuntu-fnt;
    padding: 1rem 2rem;
}


```

```js
accordionZone.forEach((zone) => {
    let counter = 0;

    zone.addEventListener('click', () => {
        accordionZone.forEach(elmnts => {elmnts.classList.remove('active')})

        if (counter == 0) { zone.classList.add('active');} else {zone.classList.remove('active')}
        if (counter >= 1) { counter = 0;} else { counter++}
    });
});

```

### Continued development

i have to dominate the positioning in css, learn an methodology like BEM or something and be more efficient to learn and finish the proyect, in sass i've to learn more bout nesting and other things to develop more skills and abilities as a web developer


### Useful resources

- [W3schools](https://www.w3schools.com) - This helped me to find many things i needed in css and javascip. I really liked this website and will use it going forward in my way to be a better developer.

- [CSS-Tricks](https://css-tricks.com) - This is an amazing website which helped me to understand better the css concepts. I'd recommend it to anyone still learning css.


## Author

- Frontend Mentor - [@carlpy](https://www.frontendmentor.io/profile/carlpy)

