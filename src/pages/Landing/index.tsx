import { Link } from "react-router-dom";
import { accomplishments } from "./accomplishments";
import { blogs } from "../Blogs/blogs";
import ArticleCard from "../../components/ArticleCard";

const capgeminiLink = "https://www.capgemini.com/in-en/";
const nitDurgapurLink = "https://nitdgp.ac.in/";

export default function Landing(): React.ReactElement {
	return (
		<div className="bg-white relative isolate py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8 lg:flex lg:gap-x-8 lg:items-center">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<p className="text-sm font-medium text-gray-600">Hi, I am</p>
					<h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sandip Pramanik</h3>
					<p className="mt-2 text-lg leading-8 text-gray-800">
						from India, an Associate Consultant at{" "}
						<Link
							className="font-semibold underline underline-offset-4"
							rel="noopener noreferrer"
							target="_blank"
							to={capgeminiLink}
						>
							Capgemini
						</Link>
						. I graduated in Electrical Engineering from{" "}
						<Link
							className="font-semibold underline underline-offset-4"
							rel="noopener noreferrer"
							target="_blank"
							to={nitDurgapurLink}
						>
							NIT Durgapur
						</Link>{" "}
						in 2022. I am a full-stack developer and have a strong foundation in Flutter. I am always open to
						collaborating on projects, innovative ideas, and freelancing work.
					</p>
					<p className="mt-4 bg-gray-100 p-2.5 rounded-md text-sm text-gray-800">
						&#8927; My skills, work experience, education can be found in the{" "}
						<Link className="font-semibold underline underline-offset-4" to="/about">
							About Me
						</Link>{" "}
						section.
					</p>
				</div>
				<img
					alt="cool me"
					className="object-cover rounded-xl mx-auto my-16 max-w-2xl h-[20rem] lg:rounded-full lg:my-0 lg:mx-0 lg:h-48 lg:w-48 ring-1 p-1 ring-gray-600"
					src="./cool-me.jpg"
				/>
			</div>
			<div className="mx-auto max-w-7xl mt-10 border-t px-6 pt-10 lg:px-8">
				<h2 className="text-2xl mx-auto max-w-2xl font-bold tracking-tight text-gray-900 lg:mx-0 sm:text-3xl">
					Recent Accomplishments
				</h2>
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{accomplishments.map((accomplishment) => (
						<article key={accomplishment.id} className="flex max-w-xl flex-col items-start justify-between">
							<img
								alt={accomplishment.title}
								className="rounded-2xl border-2 aspect-video object-contain"
								src={accomplishment.imgUrl}
							/>
							<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
								{accomplishment.title}
							</h3>
							<p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">{accomplishment.description}</p>
							<Link
								className="mt-2 line-clamp-2 text-sm font-semibold underline underline-offset-4 leading-6 text-gray-900"
								rel="noopener noreferrer"
								target="_blank"
								to={accomplishment.ctaLink}
							>
								{accomplishment.cta} <span>&#8599;</span>
							</Link>
						</article>
					))}
				</div>
			</div>
			<div className="mx-auto max-w-7xl mt-10 border-t px-6 pt-10 lg:px-8">
				<h2 className="text-2xl mx-auto max-w-2xl font-bold tracking-tight text-gray-900 lg:mx-0 sm:text-3xl">
					Latest Articles
				</h2>
				<p className="mt-2 line-clamp-2 text-base leading-6 text-gray-600">
					Check out all the articles in the{" "}
					<Link className="font-semibold underline underline-offset-4" to="/blogs">
						Blogs and Articles
					</Link>{" "}
					section.
				</p>
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{blogs.slice(0, 3).map((blog) => (
						<ArticleCard blog={blog} />
					))}
				</div>
			</div>
		</div>
	);
}
