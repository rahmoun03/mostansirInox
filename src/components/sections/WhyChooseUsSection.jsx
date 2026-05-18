export function WhyChooseUsSection() {
	const features = [
		{
			title: 'Fabrication sur mesure',
			desc: 'Chaque projet est conçu selon vos besoins avec précision.',
		},
		{
			title: 'Qualité professionnelle',
			desc: 'Nous utilisons des matériaux inox durables et résistants.',
		},
		{
			title: 'Finition haut de gamme',
			desc: 'Un souci du détail pour un rendu moderne et élégant.',
		},
		{
			title: 'Respect des délais',
			desc: 'Livraison rapide et engagement sur les délais convenus.',
		},
		{
			title: 'Expérience & savoir-faire',
			desc: 'Une expertise solide dans la fabrication inox.',
		},
		{
			title: 'Devis gratuit',
			desc: 'Contactez-nous pour une estimation rapide et sans engagement.',
		},
	]

	return (
		<section className="bg-jet-black py-20">
			<div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

				{/* Header */}
				<div className="max-w-2xl">
					<p className="text-sm uppercase tracking-[0.3em] text-pumpkin-spice">
						Pourquoi nous choisir
					</p>
					<h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
						Une expertise au service de vos projets inox
					</h2>
					<p className="mt-4 text-pale-slate/80">
						Nous mettons notre savoir-faire et notre expérience au service de vos projets pour garantir qualité, durabilité et satisfaction.
					</p>
				</div>

				{/* Grid */}
				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="rounded-2xl border border-pale-slate/20 p-6 transition hover:shadow-md bg-charcoal-blue/50"
						>
							<h3 className="text-lg font-semibold text-white">
								{feature.title}
							</h3>
							<p className="mt-3 text-sm text-pale-slate/70">
								{feature.desc}
							</p>
						</div>
					))}
				</div>

			</div>
			<div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
				<div>
					<p className="text-3xl font-bold text-[pumpkin-spice]">+100</p>
					<p className="text-sm text-pale-slate/70">Projets réalisés</p>
				</div>
				<div>
					<p className="text-3xl font-bold text-[pumpkin-spice]">+5</p>
					<p className="text-sm text-pale-slate/70">Années d'expérience</p>
				</div>
			</div>
		</section>
	)
}