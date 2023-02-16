import React from "react";
import Button from "./Button";

export default {
	title: "Atoms/Button",
	component: Button,
};

const Template = (args) => <Button {...args}>{args.children}</Button>;

export const FillButton = Template.bind({});
FillButton.args = {
	type: "fill",
	children: "Click Here",
};

export const StrokeButton = Template.bind({});
StrokeButton.args = {
	type: "stroke",
	children: "Click Here",
};

export const TextButton = Template.bind({});
TextButton.args = {
	type: "text",
	children: "Click Here",
};
