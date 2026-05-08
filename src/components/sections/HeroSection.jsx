import { heroContent, siteAssets } from '../../data/siteContent'
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/motion'

export function HeroSection() {
	const whatsappHref =
		'https://wa.me/212680492169?text=Bonjour%20Inux%20Metal%2C%20je%20souhaite%20demander%20un%20devis.'

	return (
		<section className="relative isolate min-h-[100svh] overflow-hidden">
			
			{/* Background Image */}
			<motion.video
			  	initial={{ scale: 1.08 }}
				animate={{ scale: 1 }}
				transition={{ duration: 1.8 }}
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 h-full w-full object-cover"
			>
				<source src={siteAssets.heroVideo} type="video/mp4" />
				Your browser does not support the video tag.
			</motion.video>

			{/* Overlay (lighter + gradient) */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

			{/* Content */}
			<div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 sm:px-8 lg:px-12">
				<div className="max-w-2xl">
					
					{/* Eyebrow */}
					<p className="text-sm font-medium uppercase tracking-[0.3em] text-[#eb6608]">
						{heroContent.eyebrow}
					</p>

					{/* Title */}
					<motion.h1
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
						{heroContent.title}
					</motion.h1>

					{/* Subtitle */}
					<p className="mt-4 text-lg text-white/80 sm:text-xl">
						{heroContent.subtitle}
					</p>

					{/* CTA Buttons */}
					<div className="mt-8 flex flex-wrap gap-4">
						<a
							whileHover={{ scale: 1.05 }}
            				whileTap={{ scale: 0.97 }}
							href={whatsappHref}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center justify-center rounded-full bg-[#eb6608] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c75500]"
						>
							Demander un devis
						</a>

						<a
							whileHover={{ scale: 1.05 }}
            				whileTap={{ scale: 0.97 }}
							href="/realisations"
							className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
						>
							Voir nos réalisations
						</a>
					</div>

					{/* Trust badges */}
					<div className="mt-8 flex flex-wrap gap-4 text-xs text-white/70">
						<span>✔️ Sur mesure</span>
						<span>✔️ Haute qualité</span>
						<span>✔️ Devis gratuit</span>
					</div>

				</div>
			</div>

			{/* WhatsApp floating button */}
			<a
				whileHover={{ scale: 1.05 }}
            	whileTap={{ scale: 0.97 }}
				href={whatsappHref}
				target="_blank"
				rel="noreferrer"
				className="fixed bottom-1/4 right-0 transform translate-y-1/2 translate-x-2/6 rotate-90 z-999 flex flex-row items-center gap-3 bg-[#25d366] px-4 py-3 pr-5 text-white shadow-lg transition hover:bg-[#1fbe5b] cursor-pointer"
			>
				<FaWhatsapp size={32}/>
				<span className="text-sm font-medium">
					WhatsApp
				</span>
			</a>
		</section>
	)
}