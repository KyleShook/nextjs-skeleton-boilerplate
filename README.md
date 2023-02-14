# Next.js + Styled Components Skeleton Boilerplate

I grew tired of setting up a project each time I wanted to build something new so I made this boilerplate. Very much a work in progress.

## **Includes:**

- CSS Reset
- Mini Theme config - [styles/theme.styled.js]
- Working with Google Fonts
- Absolute imports (@components, @utils, @theme, etc.)
- Storybook - v6.5.16 (working with theme config/@imports/styled-components)
- React - v18.2.0
- Next.js - v13.1.6
- Styled Components - v5.3.3
- Jest - 29.4.2
- React Testing Library - 13.4.0

---

### **TODO:**

⬜ Hamburger menu  
⬜ Axe integration with Jest  
⬜ SEO setup  
✅ Jest / React Testing Library  
✅ Update Next.js  
✅ Update React  
✅ Add Storybook  
✅ Google Fonts  
✅ Absolute imports

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
		"moduleResolution": "node",
		"paths": {
			"@components": ["./components/index"],
			"@utils": ["./utils/index"],
			"@theme": ["./styles/theme.styled.js"]
		}
	},
	"exclude": ["node_modules", "/.next"]
}
```

**Example:**

```javascript
import { Header, Footer } from "@components";
```

<h2>Jest / React Testing Library</h2>

```javascript
import React from "react";
import { render, cleanup } from "@testing-library/react";
import Button from "./Button";
import { colors } from "@theme";

describe("Button", () => {
	test("renders with primary prop and styles", () => {
		const { getByText } = render(<Button primary>Primary</Button>);

		expect(getByText("Primary")).toBeInTheDocument();

		expect(getByText("Primary")).toHaveStyle(`
    		background-color: ${colors.primary};
    		color: ${colors.white};
    	`);
	});
});
```
