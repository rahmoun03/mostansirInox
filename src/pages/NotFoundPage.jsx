import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="min-h-[calc(100vh-280px)] px-5 pb-20 pt-36 sm:px-8 lg:px-[120px] lg:pt-44">
      <div className="mx-auto max-w-4xl">
        <p className="font-montserrat text-sm font-medium uppercase tracking-[0.2em] text-[#25a2f2]">
          404
        </p>
        <h1 className="mt-4 font-lato text-4xl font-black uppercase leading-none text-white sm:text-6xl">
          Page Not Found
        </h1>
        <p className="mt-6 max-w-2xl font-montserrat text-lg leading-8 text-pale-slate/70">
          The page you tried to open does not exist yet. The router is in place,
          though, so adding new screens from here will be simple.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-[pumpkin-spice] px-6 py-3 font-montserrat text-sm font-medium uppercase tracking-[0.14em] text-white transition hover:bg-[pumpkin-dark]"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  )
}
