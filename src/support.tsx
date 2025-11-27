export default function Support(_props: { path?: string }) {
	return (
		<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<a
				href="/"
				class="inline-flex items-center text-sm font-medium text-[#4ECDC4] hover:text-[#4ECDC4]/70 mb-8"
			>
				← Back to Home
			</a>
			<h1 class="text-3xl font-extrabold text-[#121212] mb-4">Support</h1>
			<p class="text-lg text-[#121212]/80 mb-8">
				Need help with Health Wrapped? We're here to assist you.
			</p>

			<section class="mb-12">
				<h2 class="text-2xl font-bold text-[#121212] mb-6">
					Frequently Asked Questions
				</h2>
				<div class="space-y-8">
					<div>
						<h3 class="text-lg font-medium text-[#121212] mb-2">
							How does Health Wrapped work?
						</h3>
						<p class="text-[#121212]/80">
							Health Wrapped reads your local health data to generate a summary
							of your activity over the past year. It visualizes your steps,
							workouts, and other metrics in a fun, shareable format.
						</p>
					</div>
					<div>
						<h3 class="text-lg font-medium text-[#121212] mb-2">
							Is my data safe?
						</h3>
						<p class="text-[#121212]/80">
							Yes. As stated in our Privacy Policy, we do not collect or
							transmit your personal health data. Everything stays on your
							device.
						</p>
					</div>
				</div>
			</section>

			<section>
				<h2 class="text-2xl font-bold text-[#121212] mb-6">Contact Us</h2>
				<p class="text-[#121212]/80 mb-4">
					If you have other questions or run into issues, please email us at:
				</p>
				<p>
					<a
						href="mailto:itzadetunji.peter@gmail.com"
						class="text-[#4ECDC4] hover:text-[#4ECDC4]/70 font-medium"
					>
						itzadetunji.peter@gmail.com
					</a>
				</p>
			</section>
		</div>
	);
}
