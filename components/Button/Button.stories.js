import React from "react";
import Button from "./Button";
// import { RasenInvertedButton } from "../InvertedButton";
// import { TextButton } from "../TextButton";

//👇 This default export determines where your story goes in the story list
export default {
	title: "Button",
	component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
	primary: true,
};

// const Template2 = (args) => <RasenInvertedButton {...args} />;
// export const Secondary = Template2.bind({});
// Secondary.args = {
// 	buttonText: "Secondary",
// };

// const Template3 = (args) => <TextButton {...args}>Terciary </TextButton>;
// export const RasenTextButton = Template3.bind({});
// RasenTextButton.args = {};
