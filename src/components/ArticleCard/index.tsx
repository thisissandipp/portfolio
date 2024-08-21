import { Link } from "react-router-dom";

interface ArticleCardProps {
	blog: {
		id: number;
		datetime: string;
		date: string;
		title: string;
		description: string;
		href: string;
		channel: {
			name: string;
			href: string;
		};
		author: {
			name: string;
			imageUrl: string;
			publisher?: string;
			href?: string;
		};
	};
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
	blog: {
		datetime,
		date,
		title,
		description,
		href,
		channel: { name: channelName, href: channelHref },
		author: { name: authorName, imageUrl, publisher = "", href: authorHref = "" },
	},
}) => {
	return (
		<article className="flex max-w-xl flex-col items-start justify-between">
			<div className="flex items-center gap-x-4 text-xs">
				<time className="text-gray-500" dateTime={datetime}>
					{date}
				</time>
				<Link
					className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
					rel="noopener noreferrer"
					target="_blank"
					to={channelHref}
				>
					{channelName}
				</Link>
			</div>
			<div className="group relative">
				<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
					<Link rel="noopener noreferrer" target="_blank" to={href}>
						<span className="absolute inset-0" />
						{title}
					</Link>
				</h3>
				<p className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">{description}</p>
			</div>
			<div className="relative mt-8 flex items-center gap-x-4">
				<img alt="" className="h-10 w-10 rounded-full bg-gray-50" src={imageUrl} />
				<div className="text-sm leading-6">
					<p className="font-semibold text-gray-900">{authorName}</p>
					{publisher !== "" ? (
						<p className="text-gray-600">
							Published in{" "}
							<Link rel="noopener noreferrer" target="_blank" to={authorHref}>
								<span className="underline underline-offset-4">{publisher}</span>
							</Link>
						</p>
					) : (
						<p className="text-gray-600">Published on {date}</p>
					)}
				</div>
			</div>
		</article>
	);
};

export default ArticleCard;
