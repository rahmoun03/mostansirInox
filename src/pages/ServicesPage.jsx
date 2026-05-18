import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Garde-Corps Inox',
    description:
      'Fabrication de garde-corps modernes en inox pour balcons, escaliers, terrasses et espaces professionnels.',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Escaliers Inox',
    description:
      'Conception et fabrication d’escaliers inox sur mesure avec des finitions élégantes et durables.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Portes & Portails',
    description:
      'Portes et portails en acier inoxydable alliant sécurité, qualité et design moderne.',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Cuisine Professionnelle',
    description:
      'Équipements et cuisines inox sur mesure pour restaurants, hôtels et espaces professionnels.',
    image:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Fenêtres & Structures',
    description:
      'Structures métalliques et cadres inox de haute qualité pour projets modernes et industriels.',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Fabrication Sur Mesure',
    description:
      'Créations inox personnalisées adaptées à vos besoins et à votre vision architecturale.',
    image:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    text: 'Analyse de votre projet, de vos besoins et prise des dimensions.',
  },
  {
    number: '02',
    title: 'Conception',
    text: 'Création d’une solution inox adaptée avec précision et esthétique.',
  },
  {
    number: '03',
    title: 'Fabrication',
    text: 'Production professionnelle avec matériaux de qualité et finitions premium.',
  },
  {
    number: '04',
    title: 'Installation',
    text: 'Pose et installation réalisées avec soin et professionnalisme.',
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

export default function ServicesPage() {
  return (
    <main className="bg-stone-50 text-stone-900">

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/65" />

        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1920&auto=format&fit=crop"
          alt=""
          className="h-[75vh] w-full object-cover"
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
                SERVICES INOX PROFESSIONNELS
              </p>

              <h1 className="mt-5 font-lato text-5xl font-black uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                Fabrication Inox Sur Mesure
              </h1>

              <p className="mt-6 max-w-2xl font-montserrat text-base leading-8 text-white/75 sm:text-lg">
                Des solutions inox modernes et durables pour maisons,
                restaurants, commerces et projets industriels.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-montserrat text-sm font-semibold uppercase tracking-[0.24em] text-[pumpkin-spice]">
              NOTRE EXPERTISE
            </p>

            <h2 className="mt-5 font-lato text-4xl font-black uppercase leading-tight text-stone-900 sm:text-5xl">
              Précision. Qualité. Élégance.
            </h2>

            <p className="mt-6 font-montserrat text-base leading-8 text-stone-600">
              Nous concevons et fabriquons des solutions en acier inoxydable
              alliant résistance, design moderne et finitions haut de gamme.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Haute précision',
                'Design moderne',
                'Matériaux durables',
                'Finition professionnelle',
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

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[32px] border border-[pumpkin-spice]/20" />

            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="relative z-10 h-[580px] w-full rounded-[32px] object-cover shadow-2xl"
            />
          </motion.div>

        </div>
      </section>

      {/* SERVICES */}
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
              NOS SERVICES
            </p>

            <h2 className="mt-5 font-lato text-4xl font-black uppercase leading-tight text-stone-900 sm:text-5xl">
              Solutions Inox Haut De Gamme
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[30px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-7">
                  <h3 className="font-lato text-2xl font-black uppercase text-stone-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 font-montserrat text-sm leading-7 text-stone-600">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="font-montserrat text-sm font-semibold uppercase tracking-[0.24em] text-[pumpkin-spice]">
              NOTRE MÉTHODE
            </p>

            <h2 className="mt-5 font-lato text-4xl font-black uppercase leading-tight text-stone-900 sm:text-5xl">
              De L’idée À La Réalisation
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-8 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[28px] border border-stone-200 bg-white p-8"
              >
                <span className="font-lato text-5xl font-black text-[pumpkin-spice]/15">
                  {step.number}
                </span>

                <h3 className="mt-4 font-lato text-2xl font-black uppercase text-stone-900">
                  {step.title}
                </h3>

                <p className="mt-4 font-montserrat text-sm leading-7 text-stone-600">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#111111] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(235,102,8,0.18),transparent_40%)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-montserrat text-sm font-semibold uppercase tracking-[0.24em] text-[pumpkin-spice]">
              DÉMARREZ VOTRE PROJET
            </p>

            <h2 className="mt-6 font-lato text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
              Construisons Votre Projet Inox
            </h2>

            <p className="mx-auto mt-6 max-w-2xl font-montserrat text-base leading-8 text-white/70">
              Contactez-nous dès aujourd’hui pour des solutions inox modernes,
              élégantes et adaptées à vos besoins.
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
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 px-8 font-montserrat text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:border-[pumpkin-spice] hover:bg-[pumpkin-spice]"
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