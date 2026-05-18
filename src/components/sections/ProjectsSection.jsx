
export function ProjectsSection() {
  const projects = [
    {
      title: 'Garde-corps moderne',
      image: '/images/IMG_5890.JPG.jpeg',
    },
    {
      title: 'Escalier inox',
      image: '/images/IMG_5898.JPG.jpeg',
    },
    {
      title: 'Cuisine professionnelle',
      image: '/images/IMG_5899.JPG.jpeg',
    },
    {
      title: 'Porte inox design',
      image: '/images/IMG_5515.JPG.jpeg',
    },
    {
      title: 'Structure extérieure',
      image: '/images/IMG_5890.JPG.jpeg',
    },
    {
      title: 'Fenêtres inox',
      image: '/images/IMG_5898.JPG.jpeg',
    },
  ]


  return (
    <section className="bg-stone-50 py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#eb6608]">
            Nos Réalisations
          </p>
          <h2 className="mt-4 text-3xl font-bold text-stone-900 sm:text-4xl">
            Découvrez nos projets récents
          </h2>
          <p className="mt-4 text-stone-600">
            Chaque projet est réalisé avec précision et souci du détail pour garantir un résultat de haute qualité.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 transition group-hover:opacity-100" />

              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-white text-lg font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/realisations"
            className="inline-flex items-center justify-center rounded-full bg-[#eb6608] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c75500]"
          >
            Voir tous les projets
          </a>
        </div>

      </div>
    </section>
  )
}