import { motion } from 'framer-motion'
import { FaWhatsapp, FaWpforms } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";



export function ContactCTASection() {
  const whatsappHref =
    'https://wa.me/212680492169?text=Bonjour%20Inux%20Metal%2C%20je%20souhaite%20demander%20un%20devis.'

  return (
    <section className="relative overflow-hidden bg-[#0f0f0f] py-24">

      {/* 🔥 Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(253,107,1,0.25),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(37,211,102,0.15),transparent_40%)]" />

      {/* ✨ Grid texture (optional) */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(to_right,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        {/* ✨ Badge */}
        <p className="inline-block rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
          Disponible 7j/7
        </p>

        {/* 🔥 Title */}
        <h2 className="mt-6 text-3xl font-bold text-white sm:text-5xl leading-tight">
          Donnez vie à votre projet inox
        </h2>

        {/* 💬 Subtitle */}
        <p className="mt-5 text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
          Contactez-nous dès maintenant pour une étude personnalisée et un devis gratuit.
          Réponse rapide garantie.
        </p>

        {/* 🚀 CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          {/* WhatsApp (Primary) */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#25d366] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition hover:bg-[#1fbe5b]"
          >
            <FaWhatsapp size={32}/> WhatsApp
          </motion.a>

          {/* Contact page */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            <FaWpforms size={32} /> Formulaire de contact
          </motion.a>

          {/* Call button (🔥 مهم فالمغرب) */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="tel:+212680492169"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-pumpkin-spice hover:text-pumpkin-spice"
          >
            <IoMdCall size={32} /> Appeler
          </motion.a>
        </div>

        {/* ✅ Trust indicators */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/60">
          <span>✔️ Devis gratuit</span>
          <span>✔️ Réponse rapide</span>
          <span>✔️ Travail professionnel</span>
        </div>

      </div>
    </section>
  )
}