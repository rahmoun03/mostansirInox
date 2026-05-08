import { Link } from 'react-router-dom'

export function ContentPage({ title, description }) {
  return (
    <main className="min-h-[calc(100vh-280px)] px-5 pb-20 pt-36 sm:px-8 lg:px-[120px] lg:pt-44">
      <div className="mx-auto max-w-5xl">
        <p className="font-montserrat text-sm font-medium uppercase tracking-[0.2em] text-[#25a2f2]">
          Future Page
        </p>
        <h1 className="mt-4 font-lato text-4xl font-black uppercase leading-none text-stone-900 sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl font-montserrat text-lg leading-8 text-stone-600">
          {description}
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-[#eb6608] px-6 py-3 font-montserrat text-sm font-medium uppercase tracking-[0.14em] text-white transition hover:bg-[#c75500]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
