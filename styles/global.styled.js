import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@100;400;500;700;900&family=DM+Serif+Display:ital@0;1&display=swap'); */
/* @import url('${(props) => props.theme.sansFontSource}');
@import url('${(props) => props.theme.serifFontSource}'); */


 /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  /* font-family: ${({ theme }) => theme.sansFont}; */
}

/* Remove list styles on ul, ol elements with a class attribute */
ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

a {
  cursor: pointer;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Custom */
main {
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: auto;
}

nav {
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: auto;
}

footer {
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: auto;
}

img {
	height: auto;
	width: 100%;
}

p {
	font-size: 18px;
  font-family: ${({ theme }) => theme.sansFont};
}

h1,
h2,
h3,
h4,
h5,
h6 {
 /* font-family: ${({ theme }) => theme.serifFont}; */
 font-family: ${({ theme }) => theme.sansFont};
 font-weight: 900;
}

h1 {
  font-size: 45px;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
