import { Link } from 'react-router-dom'
import { contactInfo, footerGroups, siteAssets } from '../../data/siteContent'
import { FaWhatsapp } from "react-icons/fa";

function FooterLinkGroup({ group }) {
	return (
		<div>
			<h3 className="font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
				{group.title}
			</h3>

			<ul className="mt-4 space-y-3">
				{group.links.map((link) => (
					<li key={link.label}>
						<Link
							to={link.path}
							className="group inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-[pumpkin-spice]"
						>
							<span className="h-1 w-1 rounded-full bg-white/30 transition group-hover:bg-[pumpkin-spice]" />
							{link.label}
						</Link>
					</li>
				))}
			</ul>

			{group.extraTitle && (
				<>
					<h3 className="mt-8 font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
						{group.extraTitle}
					</h3>
					<ul className="mt-4 space-y-3">
						{group.extraLinks.map((link) => (
							<li key={link.label}>
								<Link
									to={link.path}
									className="group inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-[pumpkin-spice]"
								>
									<span className="h-1 w-1 rounded-full bg-white/30 transition group-hover:bg-[pumpkin-spice]" />
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	)
}

function QuickAction({ action }) {
	const tone =
		action.variant === 'primary'
			? 'bg-[pumpkin-spice] text-white hover:bg-[pumpkin-dark]'
			: 'border border-white/20 text-white hover:border-[pumpkin-spice] hover:text-[pumpkin-spice]'

	return (
		<a
			href={action.href}
			target={action.href.startsWith('http') ? '_blank' : undefined}
			rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
			className={`inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-medium uppercase tracking-[0.12em] transition ${tone}`}
		>
			{action.label}
		</a>
	)
}

export function Footer() {
	return (
		<footer className="bg-[#0f0f0f] text-white">
			<div className="mx-auto max-w-7xl px-6 py-16">

				{/* TOP */}
				<div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">

					{/* LEFT */}
					<div className="space-y-6">
						
						{/* Logo + WhatsApp */}
						<div className="flex items-center justify-between">
							<img
								src={siteAssets.footerLogo}
								alt="Inox Metal"
								className="w-[130px]"
							/>
							<a
								href={contactInfo.whatsappLink}
								target="_blank"
								rel="noreferrer"
								className="flex flex-row items-center gap-2 rounded-full bg-[#25d366] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition hover:bg-[#1fbe5b]"
							>
								<FaWhatsapp size={32}/>
								WhatsApp
							</a>
						</div>

						{/* Description */}
						<p className="text-sm text-white/60 max-w-sm">
							Spécialistes en fabrication inox sur mesure : garde-corps, escaliers,
							portes et équipements professionnels avec une finition haut de gamme.
						</p>

						{/* Contact Card */}
						<div className="rounded-2xl border border-white/10 p-5">
							<p className="text-lg font-semibold">{contactInfo.companyName}</p>

							<div className="mt-3 text-sm text-white/60 space-y-1">
								{contactInfo.addressLines.map((line, i) => (
									<p key={i}>{line}</p>
								))}
							</div>

							<a
								href={`mailto:${contactInfo.email}`}
								className="mt-4 block text-sm text-[pumpkin-spice] hover:text-[pumpkin-dark]"
							>
								{contactInfo.email}
							</a>

							<a
								href={`tel:${contactInfo.phone}`}
								className="mt-2 block text-sm text-white/70 hover:text-[pumpkin-spice]"
							>
								{contactInfo.phone}
							</a>
						</div>
						
						{/* Mini Map */}
						<p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/60">
						  Notre Atelier
						</p>
						<div className="overflow-hidden rounded-2xl border border-white/10">
							<iframe
								title="Workshop Location"
								src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3581.1707704004534!2d-7.71679022430553!3d33.53564827335595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDMyJzA4LjMiTiA3wrA0Mic1MS4yIlc!5e1!3m2!1sen!2sma!4v1778161984157!5m2!1sen!2sma"
								width="100%"
								height="220"
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="grayscale transition hover:grayscale-0"
							/>
						</div>

						{/* Quick Actions */}
						<div>
							<p className="text-xs uppercase tracking-[0.2em] text-white/60">
								Actions rapides
							</p>
							<div className="mt-4 flex flex-wrap gap-3">
								{contactInfo.quickActions.map((action) => (
									<QuickAction key={action.label} action={action} />
								))}
							</div>
						</div>

						{/* Social Media */}
						<div>
							<p className="text-xs uppercase tracking-[0.2em] text-white/60">
								Suivez-nous
							</p>

							<div className="mt-4 flex items-center gap-3">

								<a
								href="https://facebook.com"
								target="_blank"
								rel="noreferrer"
								className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-[#1877f2] hover:bg-[#1877f2] hover:text-white"
								aria-label="Facebook"
								>
								<i className="fa-brands fa-facebook-f text-sm" />
								</a>

								<a
								href="https://instagram.com"
								target="_blank"
								rel="noreferrer"
								className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-pink-500 hover:bg-pink-500 hover:text-white"
								aria-label="Instagram"
								>
								<i className="fa-brands fa-instagram text-sm" />
								</a>

								<a
								href="https://tiktok.com"
								target="_blank"
								rel="noreferrer"
								className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white hover:bg-white hover:text-black"
								aria-label="TikTok"
								>
								<i className="fa-brands fa-tiktok text-sm" />
								</a>

							</div>
						</div>

					</div>

					{/* RIGHT */}
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{footerGroups.map((group) => (
							<FooterLinkGroup key={group.title} group={group} />
						))}
					</div>
				</div>

				{/* BOTTOM */}
				<div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-3 text-sm text-white/50 sm:flex-row sm:justify-between">
					<p>{contactInfo.copyright}</p>
					<p>{contactInfo.credit}</p>
				</div>

			</div>
		</footer>
	)
}