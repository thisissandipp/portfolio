import { Link } from "react-router-dom";

export default function NotFound(): React.ReactElement {
	return (
		<div className="relative isolate px-6 pt-14 lg:px-8">
			<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<div className="text-center">
					<p className="text-base font-semibold text-gray-700">404</p>
					<h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
					<p className="mt-6 text-base leading-7 text-gray-600">
						Sorry, we couldn't find the page you are looking for.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link
							className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
							to="/"
						>
							Go back home
						</Link>
						<Link className="text-sm font-semibold leading-6 text-gray-900" to="mailto:thisissandipp@gmail.com">
							Contact Support <span aria-hidden="true">→</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
