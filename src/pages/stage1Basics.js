import React from "react";
import theme from "theme";
import { Theme, Link, Text, Strong, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"stage-1-basics"} />
		<Helmet>
			<title>
				trucoder
			</title>
			<meta name={"description"} content={"At this stage, you're going to learn how to add elements to the page, edit their content and style properties.\n"} />
			<meta property={"og:title"} content={"Basics | Onboarding Quarkly"} />
			<meta property={"og:description"} content={"At this stage, you're going to learn how to add elements to the page, edit their content and style properties.\n"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="130px 0px 100px 0px"
			sm-padding="40px 0"
			background="--color-darkL2"
			border-width="0px 0px 3px 0px"
			border-style="solid"
			border-color="--color-primary"
			md-padding="80px 0px 60px 0px"
			quarkly-title="Hero"
		>
			<Override slot="SectionContent" align-items="flex-start" flex-direction="column" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				width="33.33%"
				color="--light"
				lg-width="80%"
				sm-width="100%"
				md-width="100%"
			>
				OBJECT ORIENTED PROGRAMMING Basics
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				width="66.66%"
				color="--lightD2"
				lg-width="80%"
				sm-width="100%"
				md-width="100%"
			>
				<br />
				<br />
				<Strong>
					Object
				</Strong>
				{" "}means a real word entity such as pen, chair, table etc.{" "}
				<Strong>
					Object-Oriented Programming
				</Strong>
				{" "}is a methodology or paradigm to design a program using classes and objects. It simplifies the software development and maintenance by providing some concepts:
				<br />
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				TERMINOLOGIES
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				<br />
				<br />
				<Strong
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					-Object
				</Strong>
				<br />
				<br />
				Any entity that has state and behavior is known as an object. For example: chair, pen, table, keyboard, bike etc. It can be physical and logical.
				<br />
				<Strong
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					<br />
					-Class
				</Strong>
				<br />
				<br />
				<Strong
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Collection of objects
				</Strong>
				{" "}is called class. It is a logical entity.
				<br />
				<br />
				<Strong
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					-Inheritance
				</Strong>
				<br />
				<br />
				<Strong
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					When one object acquires all the properties and behaviours of parent object
				</Strong>
				{" "}i.e. known as inheritance. It provides code reusability. It is used to achieve runtime polymorphism.
				<br />
				<br />
				<Strong
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					-Polymorphism
					<br />
				</Strong>
				<br />
				When{" "}
				<Strong
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					one task is performed by different ways
				</Strong>
				{" "}i.e. known as polymorphism. For example: to convince the customer differently, to draw something e.g. shape or rectangle etc.
				<br />
				<br />
				In C++, we use Function overloading and Function overriding to achieve polymorphism.
				<br />
				<br />
				<Strong
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					-Abstraction
				</Strong>
				<br />
				<br />
				<Strong
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Hiding internal details and showing functionality
				</Strong>
				{" "}is known as abstraction. For example: phone call, we don't know the internal processing.
				<br />
				<br />
				In C++, we use abstract class and interface to achieve abstraction.
				<br />
				<br />
				<Strong
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					-Encapsulation
				</Strong>
				<br />
				<br />
				<Strong
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Binding (or wrapping) code and data together into a single unit is known as encapsulation.
				</Strong>
				{" "}For example: capsule, it is wrapped with different medicines.
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				PRACTICE !
			</Text>
			<Image width="964px" height="1064px" src="https://uploads.quarkly.io/605eef5f3022f1001e5cf08f/images/Screenshot%20(139).png?v=2021-03-27T10:21:02.422Z" />
			<Image width="964px" height="194px" src="https://uploads.quarkly.io/605eef5f3022f1001e5cf08f/images/Screenshot%20(140).png?v=2021-03-27T10:22:05.055Z" />
			<Text as="p" font="--lead" margin="20px 0 0 0" text-align="center">
				<br />
				<br />
				<br />
				<br />
				<br />
				{" "}
				<Link
					href="https://hashide.herokuapp.com/"
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					SUBMIT{" "}
				</Link>
			</Text>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quio/"}
			target={"_blank"}
		>
			
		</Link>
	</Theme>;
});
