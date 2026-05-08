import { useNavigate } from "react-router-dom"
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/motion'

export function ServicesSection() {
  const navigate = useNavigate()
  const services = [
    {
      title: 'Garde-corps inox',
      desc: 'Design moderne et sécurité optimale pour escaliers et balcons.',
    },
    {
      title: 'Portes inox',
      desc: 'Portes solides, résistantes et personnalisées selon vos besoins.',
    },
    {
      title: 'Escaliers inox',
      desc: 'Fabrication sur mesure avec finition haut de gamme.',
    },
    {
      title: 'Équipements cuisine inox',
      desc: 'Solutions professionnelles pour cuisines modernes.',
    },
    {
      title: 'Fabrication sur mesure',
      desc: 'Nous réalisons vos idées avec précision et qualité.',
    },
    {
      title: 'Fenêtres & structures',
      desc: 'Structures inox durables pour maisons et projets.',
    },
  ]

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="bg-stone-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div variants={fadeUp} className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#eb6608]">
            Nos Services
          </p>
          <h2 className="mt-4 text-3xl font-bold text-stone-900 sm:text-4xl">
            Des solutions inox adaptées à vos besoins
          </h2>
          <p className="mt-4 text-stone-600">
            Nous concevons et réalisons des structures inox sur mesure avec un haut niveau de finition et de qualité.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true, amount: 0.1 }}
              className="group rounded-2xl border border-stone-200 p-6 transition hover:border-[#eb6608] hover:shadow-lg cursor-pointer"
              onClick={() => navigate('/services')}
            >
              <h3 className="text-lg font-semibold text-stone-900 group-hover:text-[#eb6608]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-stone-600">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  )
}