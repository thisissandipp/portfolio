import React from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const Landing = React.lazy(() => import("../pages/Landing"));
const About = React.lazy(() => import("../pages/About"));
const Blogs = React.lazy(() => import("../pages/Blogs"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

export default function AppRouter(): React.ReactElement {
	return (
		<>
			<NavigationBar />
			<Routes>
				<Route element={<Landing />} path="/" />
				<Route element={<About />} path="/about" />
				<Route element={<Blogs />} path="/blogs" />
				<Route element={<NotFound />} path="*" />
			</Routes>
			<Footer />
		</>
	);
}
