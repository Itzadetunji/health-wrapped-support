export default function Terms(_props: { path?: string }) {
	return (
		<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<a
				href="/"
				class="inline-flex items-center text-sm font-medium text-[#4ECDC4] hover:text-[#4ECDC4]/70 mb-8"
			>
				← Back to Home
			</a>
			<h1 class="text-3xl font-extrabold text-[#121212] mb-2">
				Terms and Conditions
			</h1>
			<p class="text-sm text-gray-500 mb-8">Last updated: November 27, 2025</p>

			<div class="space-y-8">
				<section>
					<h2 class="text-xl font-bold text-[#121212] mb-4">
						1. Acceptance of Terms
					</h2>
					<p class="text-[#121212]/80">
						By downloading or using the Health Wrapped app, these terms will
						automatically apply to you. You should make sure therefore that you
						read them carefully before using the app.
					</p>
				</section>

				<section>
					<h2 class="text-xl font-bold text-[#121212] mb-4">
						2. Medical Disclaimer
					</h2>
					<p class="text-[#121212]/80 mb-4 font-semibold">
						Health Wrapped is for informational and entertainment purposes only.
					</p>
					<p class="text-[#121212]/80">
						The application provides a summary of your past year's health data.
						It does not provide medical advice, diagnosis, or treatment. Always
						seek the advice of your physician or other qualified health provider
						with any questions you may have regarding a medical condition. Never
						disregard professional medical advice or delay in seeking it because
						of something you have read on this application.
					</p>
				</section>

				<section>
					<h2 class="text-xl font-bold text-[#121212] mb-4">
						3. Intellectual Property
					</h2>
					<p class="text-[#121212]/80">
						The app itself, and all the trade marks, copyright, database rights
						and other intellectual property rights related to it, still belong
						to us. You are not allowed to copy, or modify the app, any part of
						the app, or our trademarks in any way.
					</p>
				</section>

				<section>
					<h2 class="text-xl font-bold text-[#121212] mb-4">
						4. Changes to Terms
					</h2>
					<p class="text-[#121212]/80">
						We reserve the right to make changes to the app or to charge for its
						services, at any time and for any reason. We will never charge you
						for the app or its services without making it very clear to you
						exactly what you're paying for.
					</p>
				</section>
			</div>
		</div>
	);
}
