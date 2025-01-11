import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
	{ name: "About Me", href: "/about" },
	{ name: "Blogs and Articles", href: "/blogs" },
	// { name: "Project Showcase", href: "/projects" },
	// { name: "Resume", href: "/resume" },
];

const portfolioLink = "https://github.com/thisissandipp/portfolio";

export default function NavigationBar(): React.ReactElement {
	const [mobileMainMenuOpen, setMobileMainMenuOpen] = useState(false);

	return (
		<div className="bg-white">
			<header className="absolute inset-x-0 top-0 z-50">
				<nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
					<div className="flex lg:flex-1">
						<Link className="-m-1.5 p-1.5" to="/">
							<span className="text-sm font-semibold leading-6 text-gray-900">thecodexhub</span>
						</Link>
					</div>
					<div className="flex lg:hidden">
						<button
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							type="button"
							onClick={() => {
								setMobileMainMenuOpen(true);
							}}
						>
							<span className="sr-only">Open Main Menu</span>
							<Bars3Icon aria-hidden="true" className="h-6 w-6" />
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<Link key={item.name} className="text-sm font-semibold leading-6 text-gray-900" to={item.href}>
								{item.name}
							</Link>
						))}
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<Link
							className="text-sm font-semibold leading-6 text-gray-900"
							rel="noopener noreferrer"
							target="_blank"
							to={portfolioLink}
						>
							Source code <span aria-hidden="true">&#8599;</span>
						</Link>
					</div>
				</nav>
				<Dialog className="lg:hidden" open={mobileMainMenuOpen} onClose={setMobileMainMenuOpen}>
					<div className="fixed inset-0 z-50" />
					<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<Link className="-m-1.5 p-1.5" to="/">
								<span className="text-sm font-semibold leading-6 text-gray-900">thecodexhub</span>
							</Link>
							<button
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								type="button"
								onClick={() => {
									setMobileMainMenuOpen(false);
								}}
							>
								<span className="sr-only">Close Main Menu</span>
								<XMarkIcon aria-hidden="true" className="h-6 w-6" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									{navigation.map((item) => (
										<Link
											key={item.name}
											className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
											to={item.href}
										>
											{item.name}
										</Link>
									))}
								</div>
								<div className="py-6">
									<Link
										className="flex items-center justify-between -mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										rel="noopener noreferrer"
										target="_blank"
										to={portfolioLink}
									>
										Source code <span aria-hidden="true">&#8599;</span>
									</Link>
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</header>
		</div>
	);
}
