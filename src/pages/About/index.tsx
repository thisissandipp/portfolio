// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { numberToWords } from "../../helpers/number-to-words";

const today = new Date();
const dob = new Date("1999-12-23");

const differenceInMs = today.getTime() - dob.getTime();
const millisecondsInDay: number = 24 * 60 * 60 * 1000;

const difference = Math.floor(differenceInMs / millisecondsInDay);

const capgeminiLink = "https://www.capgemini.com/in-en/";
const niceIncontactLink = "https://www.nice.com/";

export default function About(): React.ReactElement {
	return (
		<div className="bg-white relative isolate py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hey, this is Sandip</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						Born {numberToWords(difference)} days ago. Software Engineer by day and Software Engineer by night. I also
						create technical contents on Instagram, and Medium. Active on X (formerly Twitter).
					</p>
				</div>
				<div className="mx-auto mt-8 max-w-4xl lg:mx-0">
					<h3 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">User Manual</h3>
					<p className="mt-2 text-base leading-7 text-gray-600">
						&#8927; Introverted and peaceful, thriving under pressure, especially when the task is interesting.
					</p>
					<p className="mt-2 text-base leading-7 text-gray-600">
						&#8927; Confident in my ability to figure things out, even when I don't know the answer or the next step.
					</p>
					<p className="mt-2 text-base leading-7 text-gray-600">
						&#8927; I'm an investigator, achiever, and perfectionist. I'm known for being highly efficient, diligent,
						and capable — though I can be a bit particular at times. While I may occasionally come off as self-assured
						and impatient, I'm pragmatic and tactful enough to ensure that my goals aren't compromised by inflexibility.
						I'm sharp, confident, and detail-oriented, though I can sometimes be a bit reserved.
					</p>
				</div>
				<div className="mx-auto mt-8 max-w-4xl lg:mx-0">
					<h3 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
						A short story, not too short
					</h3>
					<p className="mt-2 text-base leading-7 text-gray-600">
						Currently I am working at{" "}
						<Link
							className="font-semibold underline underline-offset-4"
							rel="noopener noreferrer"
							target="_blank"
							to={capgeminiLink}
						>
							Capgemini
						</Link>{" "}
						from Kolkata office, and I work as an IVR Developer. In the IVR world, I have expertise in{" "}
						<Link
							className="font-semibold underline underline-offset-4"
							rel="noopener noreferrer"
							target="_blank"
							to={niceIncontactLink}
						>
							NICE inContact
						</Link>
						, at the same time I am well aware about some other cloud contact center services, like, Genesys and Kore
						AI. My day to day job includes flow creation, automate business processes, solve production issues, build
						better seamless experience for the agents and the business.
					</p>
					<p className="mt-2 text-base leading-7 text-gray-600">
						While I am not doing job, I write code. I love building softwares. I am a full stack developer with great
						knowledge on both frontend and backend frameworks. I have around 4 years of experience in{" "}
						<strong>Flutter</strong>, and around 3 years of experience in <strong>Nodejs</strong>,{" "}
						<strong>Express</strong>, <strong>React</strong>, <strong>NestJS</strong> and some other javascript
						frameworks.
					</p>
					<p className="mt-2 text-base leading-7 text-gray-600">
						I also know <strong>Java</strong>, I use java when I am doing DSA or competitive programming. I also have
						working experience in <strong>Spring Boot</strong>. Don't have much projects in Spring boot to showcase, but
						I did Spring Boot during my internship at Capgemini.
					</p>
					<p className="mt-2 text-base leading-7 text-gray-600">
						Now, coming to Competitive programming and DSA. I am not a super fan of DSA, I like development more. But
						sooner or later, you figure out that DSA is as important as Development. I am in that phase now. So I am
						trying to be consistent, I try to solve leetcode problems, watch tutorials, read blogs on algorithms. I am
						progressing, it's slow, but I'll be there.
					</p>
					<p className="mt-2 text-base leading-7 text-gray-600">
						One last thing before going to the next interesting topic. I am learning <strong>GraphQL</strong>. That's
						it.
					</p>
				</div>
				<div className="mx-auto mt-8 max-w-4xl lg:mx-0">
					<h3 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">My Strengths</h3>
					<p className="mt-2 text-base leading-7 text-gray-600">
						I'm passionate about taking on new challenges and explaining complex problems and solutions to my team.
						Writing code is something I could do all day, and I find immense satisfaction in breaking down tasks into
						modular components, ticking them off one by one. It's all about making progress, no matter how small, and I
						don't give up easily when things don't work as expected.
					</p>
				</div>
				<div className="mx-auto mt-8 max-w-4xl lg:mx-0">
					<h3 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">My Negatives</h3>
					<p className="mt-2 text-base leading-7 text-gray-600">
						While I enjoy working in an organized and structured environment, flexibility can sometimes be my nemesis. I
						struggle with consistency when things aren't clearly defined, and I find it difficult to make decisions when
						I lack context. However, I'm driven by growth—both personal and professional. I believe in being better than
						yesterday, and I feel frustrated when I'm not performing up to my potential.
					</p>
				</div>
				<div className="mx-auto mt-8 max-w-4xl lg:mx-0">
					<h3 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">My Interests</h3>
					<p className="mt-2 text-base leading-7 text-gray-600">
						In terms of reading, I've recently read <strong>Atomic Habits</strong>, <strong>Psychology of Money</strong>
						, and <strong>The Subtle Art of Not Giving a F*ck</strong>. Outside of work, I enjoy playing football,
						dabbling in finance, and spending time with a few close friends. And yes, I code even on weekends — it's not
						just a job, it's a passion.
					</p>
				</div>
			</div>
		</div>
	);
}
