export default function PrivacyPolicy(_props: { path?: string }) {
	return (
		<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<a
				href="/"
				class="inline-flex items-center text-sm font-medium text-[#4ECDC4] hover:text-[#4ECDC4]/70 mb-8"
			>
				← Back to Home
			</a>
			<h1 class="text-3xl font-extrabold text-[#121212] mb-2">
				Privacy Policy
			</h1>
			<p class="text-sm text-gray-500 mb-8">Last updated: November 27, 2025</p>

			<div class="space-y-8">
				<section>
					<h2 class="text-xl font-bold text-[#121212] mb-4">1. Introduction</h2>
					<p class="text-[#121212]/80">
						Welcome to Health Wrapped ("we," "our," or "us"). We are committed
						to protecting your privacy. This Privacy Policy explains how your
						information is handled when you use our application.
					</p>
				</section>

				<section>
					<h2 class="text-xl font-bold text-[#121212] mb-4">
						2. Data Collection
					</h2>
					<p class="text-[#121212]/80 mb-4">
						<strong class="font-semibold text-[#121212]">
							We do not collect, store, or share any of your personal health
							data.
						</strong>
					</p>
					<p class="text-[#121212]/80">
						Health Wrapped operates entirely locally on your device. The
						application analyzes your health data stored on your device (via
						Apple Health or other local sources) to generate your "Wrapped"
						summary. This data never leaves your device and is not transmitted
						to our servers or any third parties.
					</p>
				</section>

				<section>
					<h2 class="text-xl font-bold text-[#121212] mb-4">
						3. Third-Party Services
					</h2>
					<p class="text-[#121212]/80">
						Since we do not collect any data, we do not share data with
						third-party services for advertising or analytics purposes that
						track you personally.
					</p>
				</section>

				<section>
					<h2 class="text-xl font-bold text-[#121212] mb-4">
						4. Changes to This Policy
					</h2>
					<p class="text-[#121212]/80">
						We may update our Privacy Policy from time to time. We will notify
						you of any changes by posting the new Privacy Policy on this page.
					</p>
				</section>

				<section>
					<h2 class="text-xl font-bold text-[#121212] mb-4">5. Contact Us</h2>
					<p class="text-[#121212]/80">
						If you have any questions about this Privacy Policy, please contact
						us via our Support page.
					</p>
				</section>
			</div>
		</div>
	);
}
