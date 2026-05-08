import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { contactInfo, navigationItems, siteAssets } from '../../data/siteContent'

export function Header() {
	const { pathname } = useLocation()
	const bannerPages = ['/', '/contact']
	const isBannerPage = bannerPages.includes(pathname)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		setIsMenuOpen(false)
	}, [pathname])

	useEffect(() => {
		const handleKey = (e) => {
			if (e.key === 'Escape') setIsMenuOpen(false)
		}
		window.addEventListener('keydown', handleKey)
		return () => window.removeEventListener('keydown', handleKey)
	}, [])

	useEffect(() => {
		const original = document.body.style.overflow
		document.body.style.overflow = isMenuOpen ? 'hidden' : original

		return () => {
			document.body.style.overflow = original
		}
	}, [isMenuOpen])


	useEffect(() => {
		const handleClickOutside = (e) => {
			const menu = document.getElementById('mobile-menu')
			const button = e.target.closest('button')

			if (menu && !menu.contains(e.target) && !button) {
				setIsMenuOpen(false)
			}
		}

		if (isMenuOpen) {
			window.addEventListener('click', handleClickOutside)
		}

		return () => window.removeEventListener('click', handleClickOutside)
	}, [isMenuOpen])

	const desktopNavTone = isScrolled ? 'text-stone-700' : isBannerPage ? 'text-white' : 'text-stone-700'
	const mobileButtonTone = isScrolled
		? 'border-stone-200 bg-white text-stone-800 hover:bg-stone-50'
		: isBannerPage
		? 'border-white/20 bg-black/20 text-white hover:bg-black/30'
		: 'border-stone-200 bg-white text-stone-800 hover:bg-stone-50'
	const primaryCtaTone = isScrolled
		? 'border-[#eb6608] bg-[#eb6608] text-white hover:bg-[#c75500] hover:border-[#c75500]'
		: isBannerPage
		? 'border-white/20 bg-white/12 text-white hover:bg-white hover:text-stone-900'
		: 'border-[#eb6608] bg-[#eb6608] text-white hover:bg-[#c75500] hover:border-[#c75500]'
	const mobilePanelTone = isScrolled
		? 'border-stone-200 bg-white text-stone-800'
		: isBannerPage
		? 'border-white/15 bg-[linear-gradient(180deg,rgba(13,13,13,0.92),rgba(24,24,24,0.88))] text-white'
		: 'border-stone-200 bg-white text-stone-800'
	const mobileNavItemTone = isScrolled
		? 'hover:bg-stone-100 hover:text-[#eb6608]'
		: isBannerPage
		? 'hover:bg-white/10 hover:text-[#eb6608]'
		: 'hover:bg-stone-100 hover:text-[#eb6608]'

	return (
		<header 
		  	className={`
				fixed top-0 left-0 w-full z-50 transition-all duration-300
			`}
		>
			<div className="mx-auto w-full">
				<div
					className={`flex items-center justify-between gap-4 px-4 py-3 transition-all duration-300 ease-in-out sm:px-5 lg:px-7 lg:py-4 ${
						isScrolled
							? 'border border-stone-200/80 bg-white/95 text-stone-700 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur'
							: isBannerPage
							? 'border-white/12 bg-transparent text-white backdrop-blur-lg'
							: 'border border-stone-200/80 bg-white/92 text-stone-700 shadow-[0_8px_30px_rgba(0,0,0,0.12)]'
					}`}
				>
					<div className="w-[112px] shrink-0 sm:w-[132px] lg:w-[168px]" whileHover={{ scale: 1.04 }}>
						<Link to="/" onClick={() => setIsMenuOpen(false)}>
							<img
								src={siteAssets.headerLogo}
								alt="Inox Metal Trading"
								className="h-auto w-full transition duration-300 hover:scale-[1.02]"
							/>
						</Link>
					</div>

					<nav className="hidden lg:block" role="navigation">
						<ul className={`flex items-center gap-7 xl:gap-9 text-[12px] font-medium uppercase tracking-[0.16em] ${desktopNavTone}`}> 
							{navigationItems.map((item) => (
								<li key={item.path}>
									<NavLink to={item.path}>
									{({ isActive }) => (
										<span
										className={`group relative inline-flex items-center py-2 transition ${
											isActive ? 'text-[#eb6608]' : 'hover:text-[#eb6608]'
										}`}
										>
										{item.label}
										<span
											className={`absolute inset-x-0 -bottom-0.5 h-px bg-[#eb6608] transition duration-300 ${
											isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
											}`}
										/>
										</span>
									)}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>

					<div className="hidden items-center gap-3 lg:flex">
						<Link
							to="/contact"
							className={`inline-flex h-11 items-center justify-center rounded-full border px-5 font-montserrat text-xs font-medium uppercase tracking-[0.16em] transition duration-300 ${primaryCtaTone}`}
						>
							Demander un devis
						</Link>
					</div>

					<button
						type="button"
						onClick={() => setIsMenuOpen((value) => !value)}
						aria-expanded={isMenuOpen}
						aria-controls="mobile-menu"
						aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
						className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition duration-300 lg:hidden ${mobileButtonTone}`}
					>
						<span className="relative h-4 w-5">
							<span
								className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
									isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
								}`}
							/>
							<span
								className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition duration-300 ${
									isMenuOpen ? 'opacity-0' : ''
								}`}
							/>
							<span
								className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition duration-300 ${
									isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
								}`}
							/>
						</span>
					</button>
				</div>

				<div
				id="mobile-menu"
				className={`absolute left-0 top-full w-full z-50 transition-all duration-300 lg:hidden ${
					isMenuOpen
					? 'pointer-events-auto opacity-100 translate-y-0'
					: 'pointer-events-none opacity-0 -translate-y-2'
				}`}
				>
					<div
						className={`flex flex-col mt-0 rounded-[24px] border px-4 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.14)] backdrop-blur-lg sm:px-5 sm:py-5 gap-3 ${mobilePanelTone}`}
					>
						<nav>
							<ul className="space-y-1.5">
								{navigationItems.map((item) => (
									<li key={item.path}>
										<NavLink
											to={item.path}
											onClick={() => setIsMenuOpen(false)}
											className={({ isActive }) =>
												`flex items-center justify-between rounded-2xl px-4 py-3 font-montserrat text-sm font-medium uppercase tracking-[0.12em] transition ${
													isActive
														? 'bg-[#eb6608] text-white shadow-[0_10px_24px_rgba(235,102,8,0.28)]'
														: mobileNavItemTone
												}`
											}
										>
											<span>{item.label}</span>
											<span className="text-base">+</span>
										</NavLink>
									</li>
								))}
							</ul>
						</nav>

						<div className="grid gap-3 sm:grid-cols-2">
							<a
								href={`mailto:${contactInfo.email}`}
								onClick={() => setIsMenuOpen(false)}
								className="inline-flex h-12 items-center justify-center rounded-full bg-[#eb6608] px-5 font-montserrat text-sm font-medium uppercase tracking-[0.12em] text-white transition hover:bg-[#c75500]"
							>
								Email Us
							</a>
							<a
								href={contactInfo.whatsappLink}
								target="_blank"
								rel="noreferrer"
								onClick={() => setIsMenuOpen(false)}
								className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 font-montserrat text-sm font-medium uppercase tracking-[0.12em] transition hover:border-[#25d366] hover:bg-[#25d366] hover:text-white"
							>
								WhatsApp
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
