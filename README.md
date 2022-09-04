# Next.js + Styled Components Skeleton Boilerplate

### **Includes:**

- CSS Reset
- Mini Theme config
- Absolute imports (@components, @utils, etc.)
- Starter menu
- React - 17.0.2 | Next.js - 12.0.8 | Styled Components - 5.3.3

<h2>CSS Reset</h2>
<a href="https://hankchizljaw.com/wrote/a-modern-css-reset/">
    A Modern CSS Reset - Andy Bell
</a>
<hr />
<h2>Mini Theme config</h2>

```js
// styles/theme.styled.js

export const colors = {
	primary: "#3E71F4",
	secondary: "#4C956C",
	terciary: "#4C956C",
};
```

```js
// Footer.styled.js

import styled from "styled-components";
import { colors } from "styles/theme.styled";

export const Logo = styled.a`
	color: ${colors.primary};
`;
```

<hr />

<h2>Absolute imports (@components, @utils, etc.)</h2>

```json
// jsconfig.json

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
