import { Link } from "react-router-dom";
import { blogs } from "./blogs";

const mediumProfileLink = "https://medium.com/@thecodexhub";

export default function Blogs(): React.ReactElement {
	return (
		<div className="bg-white relative isolate py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blogs and articles</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						I write technical articles on{" "}
						<Link
							className="font-semibold underline underline-offset-4"
							rel="noopener noreferrer"
							target="_blank"
							to={mediumProfileLink}
						>
							Medium
						</Link>
						, focusing on Flutter. These articles are designed to help you not only become a better Flutter developer
						but also enhance your overall development skills.
					</p>
				</div>
				<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{blogs.map((blog) => (
						<article key={blog.id} className="flex max-w-xl flex-col items-start justify-between">
							<div className="flex items-center gap-x-4 text-xs">
								<time className="text-gray-500" dateTime={blog.datetime}>
									{blog.date}
								</time>
								<Link
									className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
									rel="noopener noreferrer"
									target="_blank"
									to={blog.channel.href}
								>
									{blog.channel.name}
								</Link>
							</div>
							<div className="group relative">
								<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
									<Link rel="noopener noreferrer" target="_blank" to={blog.href}>
										<span className="absolute inset-0" />
										{blog.title}
									</Link>
								</h3>
								<p className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">{blog.description}</p>
							</div>
							<div className="relative mt-8 flex items-center gap-x-4">
								<img alt="" className="h-10 w-10 rounded-full bg-gray-50" src={blog.author.imageUrl} />
								<div className="text-sm leading-6">
									<p className="font-semibold text-gray-900">{blog.author.name}</p>
									{blog.author.publisher != "" && (
										<p className="text-gray-600">
											Published in{" "}
											<Link rel="noopener noreferrer" target="_blank" to={blog.author.href}>
												<span className="underline underline-offset-4">{blog.author.publisher}</span>
											</Link>
										</p>
									)}
									{blog.author.publisher == "" && <p className="text-gray-600">Published on {blog.date}</p>}
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}
