import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const values = [
  {
    title: 'Qualité Premium',
    description:
      'Nous utilisons des matériaux inox de haute qualité avec des finitions précises et durables.',
  },
  {
    title: 'Fabrication Sur Mesure',
    description:
      'Chaque projet est conçu selon les besoins exacts du client avec une attention particulière aux détails.',
  },
  {
    title: 'Design Moderne',
    description:
      'Nous combinons élégance, modernité et fonctionnalité pour créer des réalisations uniques.',
  },
  {
    title: 'Engagement & Confiance',
    description:
      'Notre priorité est la satisfaction client grâce à un travail sérieux et professionnel.',
  },
]

const stats = [
  {
    number: '10+',
    label: 'Années d’expérience',
  },
  {
    number: '250+',
    label: 'Projets réalisés',
  },
  {
    number: '100%',
    label: 'Fabrication sur mesure',
  },
  {
    number: '24/7',
    label: 'Support client',
  },
]

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
}

export default function AboutPage() {
  return (
    <main className="bg-stone-50 text-stone-900">

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/70" />

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920&auto=format&fit=crop"
          alt=""
          className="h-[72vh] w-full object-cover"
        />

        <div className="absolute inset-0 z-20 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-3xl"
            >
              <p className="font-montserrat text-sm font-semibold uppercase tracking-[0.3em] text-[pumpkin-spice]">
                À PROPOS DE NOUS
              </p>

              <h1 className="mt-5 font-lato text-5xl font-black uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                Le Savoir-Faire Inox Au Service De Vos Projets
              </h1>

              <p className="mt-6 max-w-2xl font-montserrat text-base leading-8 text-white/75 sm:text-lg">
                Une entreprise spécialisée dans la fabrication inox moderne
                pour les maisons, commerces et projets professionnels.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-montserrat text-sm font-semibold uppercase tracking-[0.24em] text-[pumpkin-spice]">
              NOTRE HISTOIRE
            </p>

            <h2 className="mt-5 font-lato text-4xl font-black uppercase leading-tight text-stone-900 sm:text-5xl">
              Une Passion Pour Le Métal Inox
            </h2>

            <div className="mt-8 space-y-6 font-montserrat text-base leading-8 text-stone-600">
              <p>
                Depuis plusieurs années, notre atelier accompagne les particuliers
                et les professionnels dans la réalisation de projets inox modernes,
                solides et élégants.
              </p>

              <p>
                Grâce à notre expérience et notre savoir-faire artisanal,
                nous créons des structures inox personnalisées adaptées
                aux besoins de chaque client.
              </p>

              <p>
                Escaliers, garde-corps, cuisines inox, portails, structures métalliques
                ou équipements professionnels — chaque réalisation est pensée
                avec précision et qualité.
              </p>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop"
              alt=""
              className="h-[650px] w-full rounded-[36px] object-cover shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
            />
          </motion.div>

        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#f8f8f8] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="font-montserrat text-sm font-semibold uppercase tracking-[0.24em] text-[pumpkin-spice]">
              NOS VALEURS
            </p>

            <h2 className="mt-5 font-lato text-4xl font-black uppercase leading-tight text-stone-900 sm:text-5xl">
              Pourquoi Nous Choisir ?
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-[30px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[pumpkin-spice]/10 text-2xl text-[pumpkin-spice]">
                  ✦
                </div>

                <h3 className="mt-6 font-lato text-2xl font-black uppercase text-stone-900">
                  {value.title}
                </h3>

                <p className="mt-4 font-montserrat text-sm leading-7 text-stone-600">
                  {value.description}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-[#111111] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(235,102,8,0.15),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="font-montserrat text-sm font-semibold uppercase tracking-[0.24em] text-[pumpkin-spice]">
              NOS CHIFFRES
            </p>

            <h2 className="mt-5 font-lato text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
              Une Expertise Reconnue
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[30px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur"
              >
                <p className="font-lato text-5xl font-black text-[pumpkin-spice]">
                  {stat.number}
                </p>

                <p className="mt-4 font-montserrat text-sm uppercase tracking-[0.14em] text-white/75">
                  {stat.label}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* WORKSHOP */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1400&auto=format&fit=crop"
              alt=""
              className="h-[620px] w-full rounded-[36px] object-cover shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-montserrat text-sm font-semibold uppercase tracking-[0.24em] text-[pumpkin-spice]">
              NOTRE ATELIER
            </p>

            <h2 className="mt-5 font-lato text-4xl font-black uppercase leading-tight text-stone-900 sm:text-5xl">
              Technologie & Travail Artisanal
            </h2>

            <p className="mt-8 font-montserrat text-base leading-8 text-stone-600">
              Notre atelier combine équipements modernes et savoir-faire artisanal
              afin de garantir des réalisations inox précises, robustes et élégantes.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {[
                'Découpe & Soudure',
                'Finitions Premium',
                'Fabrication Personnalisée',
                'Installation Professionnelle',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-stone-200 p-4"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[pumpkin-spice]/10 text-[pumpkin-spice]">
                    ✓
                  </span>

                  <span className="font-montserrat text-sm font-medium text-stone-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(235,102,8,0.12),transparent_40%)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-montserrat text-sm font-semibold uppercase tracking-[0.24em] text-[pumpkin-spice]">
              COMMENCEZ VOTRE PROJET
            </p>

            <h2 className="mt-6 font-lato text-4xl font-black uppercase leading-tight text-stone-900 sm:text-5xl">
              Parlons De Votre Idée
            </h2>

            <p className="mx-auto mt-6 max-w-2xl font-montserrat text-base leading-8 text-stone-600">
              Notre équipe est prête à transformer votre vision en une
              réalisation inox moderne et durable.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <a
                href="https://wa.me/212680492169"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[pumpkin-spice] px-8 font-montserrat text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:scale-[1.03] hover:bg-[pumpkin-dark]"
              >
                WhatsApp
              </a>

              <Link
                to="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full border border-stone-300 px-8 font-montserrat text-sm font-semibold uppercase tracking-[0.14em] text-stone-900 transition duration-300 hover:border-[pumpkin-spice] hover:bg-[pumpkin-spice] hover:text-white"
              >
                Demander Un Devis
              </Link>

            </div>
          </motion.div>

        </div>
      </section>

    </main>
  )
}