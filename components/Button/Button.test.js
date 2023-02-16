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
	test("renders with type 'fill' prop and styles", () => {
		const { getByText } = render(<Button type="fill">Fill Button</Button>);

		expect(getByText("Fill Button")).toBeInTheDocument();

		expect(getByText("Fill Button")).toHaveStyle(`
			background-color: ${colors.primary};
			color: ${colors.white};
			`);
	});

	test("renders with type 'stroke' prop and styles", () => {
		const { getByText } = render(<Button type="stroke">Stroke Button</Button>);

		expect(getByText("Stroke Button")).toBeInTheDocument();

		expect(getByText("Stroke Button")).toHaveStyle(`
			background-color: ${colors.transparent};
			color: ${colors.secondary};
			border: 2px solid ${colors.secondary};
			`);
	});

	test("renders with type 'text' prop and styles", () => {
		const { getByText } = render(<Button type="text">Text Button</Button>);

		expect(getByText("Text Button")).toBeInTheDocument();

		expect(getByText("Text Button")).toHaveStyle(`
			background-color: ${colors.transparent};
			color: ${colors.tertiary};
		`);
	});
});
