import { createGlobalStyle } from "styled-components";
import { theme, type } from "./theme.styled";

export const GlobalStyle = createGlobalStyle`

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
  background: ${theme.background};
  color: ${theme.color};
  font-family: ${type.sans};
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
  max-width: ${theme.maxWidth};
  margin: auto;
}

nav {
  width: 100%;
  max-width: ${theme.maxWidth};
  margin: auto;
}

footer {
  width: 100%;
  max-width: ${theme.maxWidth};
  margin: auto;
}

img {
	height: auto;
	width: 100%;
}

p {
	font-size: ${type.medium};
  font-family: ${type.sans};
}

h1,
h2,
h3,
h4,
h5,
h6 {
 font-family: ${type.serif};
 /* font-family: ${type.sans}; */
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
