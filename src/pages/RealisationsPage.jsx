import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const categories = [
  'Tous',
  'Escaliers',
  'Garde-Corps',
  'Portails',
  'Cuisine',
  'Structures',
]

const projects = [
  {
    id: 1,
    category: 'Escaliers',
    title: 'Escalier Inox Moderne',
    location: 'Casablanca',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    category: 'Cuisine',
    title: 'Cuisine Professionnelle Inox',
    location: 'Marrakech',
    image:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    category: 'Garde-Corps',
    title: 'Garde-Corps Terrasse',
    location: 'Rabat',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    category: 'Portails',
    title: 'Portail Inox Premium',
    location: 'Tanger',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    category: 'Structures',
    title: 'Structure Métallique Moderne',
    location: 'Agadir',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    category: 'Escaliers',
    title: 'Escalier Suspendu Inox',
    location: 'Casablanca',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
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

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filteredProjects =
    activeCategory === 'Tous'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <main className="bg-jet-black text-white">

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/65" />

        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1920&auto=format&fit=crop"
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
                NOS RÉALISATIONS
              </p>

              <h1 className="mt-5 font-lato text-5xl font-black uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                Des Projets Inox Qui Parlent D’eux-Mêmes
              </h1>

              <p className="mt-6 max-w-2xl font-montserrat text-base leading-8 text-white/75 sm:text-lg">
                Découvrez nos créations inox réalisées pour des maisons,
                commerces et projets professionnels.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-montserrat text-sm font-semibold uppercase tracking-[0.24em] text-[pumpkin-spice]">
              SAVOIR-FAIRE & QUALITÉ
            </p>

            <h2 className="mt-5 font-lato text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
              Chaque Détail Compte
            </h2>

            <p className="mt-6 font-montserrat text-base leading-8 text-pale-slate/70">
              Chaque projet est conçu avec précision, élégance et souci du détail
              afin d’offrir des réalisations inox durables et haut de gamme.
            </p>
          </motion.div>

        </div>
      </section>

      {/* FILTERS */}
      <section className="pb-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6 lg:px-8">

          {categories.map((category) => {
            const isActive = activeCategory === category

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-6 py-3 font-montserrat text-sm font-semibold uppercase tracking-[0.12em] transition duration-300 ${
                  isActive
                    ? 'border-[pumpkin-spice] bg-[pumpkin-spice] text-white shadow-lg'
                    : 'border-pale-slate/20 bg-charcoal-blue/50 text-white hover:border-pumpkin-spice hover:text-pumpkin-spice'
                }`}
              >
                {category}
              </button>
            )
          })}

        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="pb-24 pt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[30px] bg-charcoal-blue/50 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 w-full p-6">

                    <span className="inline-flex rounded-full bg-[pumpkin-spice] px-4 py-2 font-montserrat text-xs font-semibold uppercase tracking-[0.14em] text-white">
                      {project.category}
                    </span>

                    <h3 className="mt-4 font-lato text-3xl font-black uppercase text-white">
                      {project.title}
                    </h3>

                    <p className="mt-2 font-montserrat text-sm text-white/75">
                      {project.location}
                    </p>

                  </div>

                </div>
              </motion.article>
            ))}

          </div>

        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="bg-[#111111] py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop"
              alt=""
              className="h-[620px] w-full rounded-[36px] object-cover shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-montserrat text-sm font-semibold uppercase tracking-[0.24em] text-[pumpkin-spice]">
              PROJET SIGNATURE
            </p>

            <h2 className="mt-5 font-lato text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
              Élégance & Performance Inox
            </h2>

            <p className="mt-6 font-montserrat text-base leading-8 text-white/70">
              Réalisation complète d’un escalier inox avec garde-corps moderne
              pour une villa haut de gamme alliant design contemporain et
              finition premium.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {[
                'Finition Premium',
                'Design Moderne',
                'Matériaux Durables',
                'Fabrication Sur Mesure',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-charcoal-blue/50/5 p-4"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[pumpkin-spice]/20 text-[pumpkin-spice]">
                    ✓
                  </span>

                  <span className="font-montserrat text-sm font-medium text-white">
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
              VOTRE PROJET COMMENCE ICI
            </p>

            <h2 className="mt-6 font-lato text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
              Vous Avez Un Projet ?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl font-montserrat text-base leading-8 text-pale-slate/70">
              Parlons ensemble de votre future réalisation inox et créons
              une solution moderne adaptée à vos besoins.
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
                className="inline-flex h-14 items-center justify-center rounded-full border border-stone-300 px-8 font-montserrat text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:border-pumpkin-spice hover:bg-[pumpkin-spice] hover:text-white"
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