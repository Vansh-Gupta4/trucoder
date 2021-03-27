import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box, List, Span, Icon, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
import { MdHelp } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				trucoder
			</title>
			<meta name={"description"} content={"At this stage, you are going to get to know the Quarkly interface and main features.\n"} />
			<meta property={"og:title"} content={"Intro | Onboarding Quarkly"} />
			<meta property={"og:description"} content={"At this stage, you are going to get to know the Quarkly interface and main features.\n"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.HeaderMenu>
			<Override slot="image" src="https://uploads.quarkly.io/605eef5f3022f1001e5cf08f/images/Untitled.png?v=2021-03-27T09:54:46.584Z" />
			<Override slot="menuOverride12">
				Intro
			</Override>
			<Override slot="menuOverride1">
				1.Basics
			</Override>
			<Override slot="menuOverride2">
				2.OBJECTS
			</Override>
			<Override slot="menuOverride3">
				3.CLASSES
			</Override>
			<Override slot="menuOverride4">
				4.INHERITANCE & POLYMORPHISM
			</Override>
			<Override slot="menuOverride5">
				5.ABSTRACTION & ENCAPSULATION
			</Override>
		</Components.HeaderMenu>
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
				width="66.66%"
				color="--light"
				lg-width="80%"
				md-width="100%"
			>
				truCoder
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 18px 0"
				width="66.66%"
				color="--lightD2"
				lg-width="80%"
				md-width="100%"
			>
				The only place to start with your Competitive Programming Career
			</Text>
			<Image src="https://uploads.quarkly.io/605eef5f3022f1001e5cf08f/images/code-school-logo-png-transparent.png?v=2021-03-27T09:35:32.890Z" margin="0px 0px 24px 0px" width="20%" />
			<Text
				as="p"
				font="--lead"
				margin="0px 0 24px 0"
				width="66.66%"
				color="--lightD2"
				lg-width="80%"
				md-width="100%"
			>
				Do you wish to start with Competitive Programming but don't where to start?
				<br />
				Have you always been excited by Coding Contests and the Prizes?
				<br />
				<br />
				Don't worry.
				<br />
				Now no more paid courses and expensive stuff.{" "}
				<br />
				You have found the best place to begin with your Competitive Programming Career
			</Text>
			<Box position="relative">
				<Text
					as="p"
					font="--headline3"
					margin="0px 0 0 0"
					color="--lightD2"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					position="relative"
					z-index="1"
					sm-font="--lead"
				>
					Try truCoder and start learning! It's fun and totally free !
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0%/cover no-repeat scroll padding-box"
					display="inline-block"
					width="96px"
					height="16px"
					position="absolute"
					top="auto"
					right="-10px"
					bottom="-1px"
					left="auto"
				/>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 9. Undo / Redo">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 32px 0px 0px"
					margin="0px 0px 16px 0px"
					width="50%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
						<Text
							as="p"
							font="--capture"
							margin="0 0 20px 0"
							text-transform="uppercase"
							color="white"
							letter-spacing="1px"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							display="inline-block"
							padding="0px 0px 4px 0px"
							position="relative"
							z-index="1"
						>
							LET'S START
						</Text>
						<Box
							background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
							display="inline-block"
							width="136px"
							height="46px"
							position="absolute"
							top="-8px"
							right="auto"
							bottom="auto"
							left="-29px"
						/>
					</Box>
					<Text
						as="h2"
						font="--headline2"
						md-font="--headline2"
						margin="0px 0px 20px 0px"
						color="--darkL2"
						sm-font="--headline3"
					>
						GETTING STARTED
					</Text>
					<Text
						as="p"
						font="--lead"
						margin="0px 0 30px 0"
						width="100%"
						color="--darkL2"
						md-margin="0px 0 0px 0"
					>
						The concept is simple, Each and every question is a ladder for you to solve the next question.{" "}
						<br />
						<br />
						The given 8 questions will give a kickstart to you for beginning with Competitive Programming Concepts.
						<br />
						<br />
						If you get stuck, see the video solution and code it out in our IDE that support 3+ different languages.
						<br />
						<br />
						Click on tabs present on the Navbar labelled as "Level 1" , "Level 2" etc to navigate between questions..
					</Text>
				</List>
				<Box
					width="50%"
					text-align="center"
					position="relative"
					padding="98px 0px 0px 24px"
					box-sizing="border-box"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
				>
					<List
						as="ol"
						list-style-type="none"
						padding="0px 12px 0px 0px"
						margin="0px 0px 16px 0px"
						width="100%"
						box-sizing="border-box"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						text-align="left"
						sm-padding="0px 0px 0px 0px"
					>
						<Box
							width="auto"
							display="flex"
							align-items="flex-start"
							justify-content="flex-start"
							quarkly-title="Item 1"
							flex-wrap="nowrap"
							margin="0px 0px 12px 0px"
							sm-flex-direction="column"
						>
							<Text
								background="--color-indigo"
								font="--base"
								color="--lightD2"
								padding="2px 8px 2px 8px"
								border-radius="33px"
								margin="16px 12px 16px 0px"
								text-align="center"
								flex="0 0 auto"
								min-width="12px"
								border-color="--color-darkL2"
								border-style="solid"
								border-width="1px"
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								1
							</Text>
							<Box width="100%">
								<Text
									display="inline-block"
									font="--base"
									margin="18px 0px 16px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 16px 0px"
								>
									Read the problem Statement, analyse testcases and watch the video tutorial.
								</Text>
								<Text
									display="inline-block"
									font="normal 300 14px/1.5 --fontFamily-sans"
									margin="0px 0px 0px 0px"
									color="--darkL2"
									background="rgba(0, 119, 204, 0.04)"
									border-color="--color-lightD2"
									border-radius="6px"
									border-style="solid"
									border-width="1px"
									padding="8px 14px 16px 14px"
								>
									<Span
										font="--capture"
										letter-spacing="1px"
										color="--grey"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										text-transform="uppercase"
										data-q-widget-type="PRIMITIVE"
									>
										TIP
									</Span>
									<br />
									To navigate, switch between the tabs in navbar
									<br />
									Copy testcase and paste it on IDE
									<br />
									Watch our curated Video tutorials for help
								</Text>
							</Box>
						</Box>
						<Box
							width="auto"
							display="flex"
							align-items="flex-start"
							justify-content="flex-start"
							flex-direction="row"
							quarkly-title="Item 2"
							margin="0px 0px 12px 0px"
							sm-flex-direction="column"
						>
							<Text
								background="--color-indigo"
								font="--base"
								color="--lightD2"
								padding="2px 8px 2px 8px"
								border-radius="33px"
								margin="16px 12px 16px 0px"
								text-align="center"
								flex="0 0 auto"
								min-width="12px"
								border-color="--color-darkL2"
								border-style="solid"
								border-width="1px"
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								2
							</Text>
							<Box width="100%">
								<Text
									display="block"
									font="--base"
									margin="18px 0px 16px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 16px 0px"
								>
									Click on "SUBMIT" button in the end to open up the IDE and start coding.
								</Text>
								<Text
									display="inline-block"
									font="normal 300 14px/1.5 --fontFamily-sans"
									margin="0px 0px 0px 0px"
									color="--darkL2"
									background="rgba(0, 119, 204, 0.04)"
									border-color="--color-lightD2"
									border-radius="6px"
									border-style="solid"
									border-width="1px"
									padding="8px 14px 16px 14px"
								>
									<Span
										font="--capture"
										letter-spacing="1px"
										color="--grey"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										text-transform="uppercase"
										data-q-widget-type="PRIMITIVE"
									>
										Tip
										<br />
									</Span>
									Copy testcases and paste on IDE
									<br />
									Click on 'Submit' button to push your code for processing
								</Text>
							</Box>
						</Box>
					</List>
				</Box>
			</Box>
		</Section>
		<Section color="--dark">
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				Q&A
			</Text>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					What is Competitive Programming?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					Competitive Programming is a mental sport which enables you to code a given problem under provided constraints. The purpose of this article is to guide every individual possessing a desire to excel in this sport. This article provides a detailed syllabus for Competitive Programming designed by industry experts to boost the preparation of the readers.{"\n\n"}
				</Text>
			</Box>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					What are coding contests?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					The Coding Contests or Competitions provide you the opportunity to{" "}
					<Strong>
						analyze your skills and proficiency
					</Strong>
					, and to compare yourself to other programmers across the world. Apart from these, various scholarships, prizes, jobs & internships opportunities are also provided to the participating programmers.{"\n\n"}
				</Text>
			</Box>
			<Box
				margin="36px 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					Is this platform free?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					Yes! Always
				</Text>
			</Box>
		</Section>
		<Image width="64px" height="64px" />
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
			href={"https://io/"}
			target={"_blank"}
		>
		</Link>
	</Theme>;
});
