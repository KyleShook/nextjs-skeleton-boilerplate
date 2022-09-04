# Next.js + Styled Components Skeleton Boilerplate

I grew tired of setting up a simple project each time I wanted to build something so I made this boilerplate. Very much a work in progress.

### **Includes:**

- CSS Reset
- Mini Theme config
- Absolute imports (@components, @utils, etc.)
- Starter menu & footer
- React - v17.0.2 | Next.js - v12.0.8 | Styled Components - v5.3.3

---

### **TODO:**

- Hamburger menu
- Storybook

---

<h2>CSS Reset</h2>
<a href="https://hankchizljaw.com/wrote/a-modern-css-reset/">
    A Modern CSS Reset - Andy Bell
</a>
<hr />
<h2>Mini Theme config</h2>

**styles/theme.styled.js**

```js
export const colors = {
	primary: "#3E71F4",
	secondary: "#4C956C",
	terciary: "#4C956C",
};
```

**components/Footer/Footer.styled.js**

```js
import styled from "styled-components";
import { colors } from "styles/theme.styled";

export const Logo = styled.a`
	color: ${colors.primary};
`;
```

<hr />

<h2>Absolute imports (@components, @utils, etc.)</h2>
**jsconfig.json**

```json
{
	"compilerOptions": {
		"baseUrl": ".",
		"module": "commonjs",
		"target": "es6",
		"paths": {
			"@components": ["./components/index"],
			"@utils": ["./utils/index"]
		}
	},
	"exclude": ["node_modules", "/.next"]
}
```
