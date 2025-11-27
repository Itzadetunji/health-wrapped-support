import { Router } from "preact-router";
import "./app.css";
import PrivacyPolicy from "./privacy-policy";
import Support from "./support";
import Terms from "./terms";
import Navbar from "./components/Navbar";

function Home(_props: { path?: string }) {
	return (
		<div class="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
			<div class="max-w-md w-full space-y-8 text-center">
				<div>
					<h1 class="mt-6 text-center text-4xl font-extrabold text-[#121212]">
						Health Wrapped
					</h1>
					<p class="mt-2 text-center text-lg text-[#121212]/80">
						Your health data of the past year.
					</p>
				</div>
			</div>
		</div>
	);
}

export function App() {
	return (
		<div class="min-h-screen bg-gray-50">
			<Navbar />
			<Router>
				<Home path="/" />
				<Support path="/support" />
				<PrivacyPolicy path="/privacy" />
				<Terms path="/terms" />
			</Router>
		</div>
	);
}
