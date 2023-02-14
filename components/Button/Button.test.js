import React from "react";
import { render, cleanup } from "@testing-library/react";
import Button from "./Button";
import { colors } from "@theme";

// jest.clearAllMocks() clears all mocks and restores the original implementation.
afterEach(() => {
	jest.clearAllMocks();
});

// cleanup() removes all the mounted components from the DOM.
afterEach(() => {
	cleanup();
});

describe("Button", () => {
	test("renders with primary prop and styles", () => {
		const { getByText } = render(<Button primary>Primary</Button>);

		expect(getByText("Primary")).toBeInTheDocument();

		expect(getByText("Primary")).toHaveStyle(`
			background-color: ${colors.primary};
			color: ${colors.white};
			`);
	});

	test("renders with secondary prop and styles", () => {
		const { getByText } = render(<Button secondary>Secondary</Button>);

		expect(getByText("Secondary")).toBeInTheDocument();

		expect(getByText("Secondary")).toHaveStyle(`
			background-color: ${colors.transparent};
			color: ${colors.secondary};
			border: 2px solid ${colors.secondary};
			`);
	});

	test("renders with tertiary prop and styles", () => {
		const { getByText } = render(<Button tertiary>Tertiary</Button>);

		expect(getByText("Tertiary")).toBeInTheDocument();

		expect(getByText("Tertiary")).toHaveStyle(`
			background-color: ${colors.transparent};
			color: ${colors.terciary};
			text-decoration: underline;
		`);
	});
});
