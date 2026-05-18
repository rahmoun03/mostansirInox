import { Link } from 'react-router-dom'
import { contactPageContent } from '../data/siteContent'

const formFields = [
  { label: 'Your Name', name: 'name', type: 'text', placeholder: 'Enter your name' },
  { label: 'Company Name', name: 'company', type: 'text', placeholder: 'Enter company name' },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email address' },
  { label: 'Contact Number', name: 'phone', type: 'tel', placeholder: 'Best number to call' },
]

function ContactInput({ field }) {
  return (
    <label className="block group">
      <span className="font-montserrat text-sm font-medium text-charcoal-blue sm:text-base">
        {field.label} <span className="text-[pumpkin-spice]">*</span>
      </span>

      <input
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
        className="mt-2 h-[52px] w-full rounded-2xl border border-pale-slate/20 bg-white px-5 font-montserrat text-sm text-charcoal-blue outline-none transition duration-300 placeholder:text-pale-slate/50 focus:border-pumpkin-spice focus:ring-4 focus:ring-pumpkin-spice/10 hover:border-stone-300"
      />
    </label>
  )
}

function InfoBlock({ title, lines, accent = false, isEmail = false }) {
  return (
    <div className="pt-6 first:pt-0">
      <h3 className="font-arsenal text-lg font-bold uppercase tracking-wide text-[#25a2f2]">
        {title}
      </h3>

      <div className={`mt-3 space-y-1 font-montserrat text-sm leading-7 sm:text-base ${
        accent ? 'text-[pumpkin-spice]' : 'text-pale-slate/70'
      }`}>
        {lines.map((line) =>
          isEmail ? (
            <a
              key={line}
              href={`mailto:${line}`}
              className="block transition hover:text-[pumpkin-dark]"
            >
              {line}
            </a>
          ) : (
            <p key={line}>{line}</p>
          ),
        )}
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <main className="bg-jet-black text-white">

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />

        <img
          src={contactPageContent.bannerImage}
          alt=""
          className="h-[340px] w-full object-cover sm:h-[450px] lg:h-[650px]"
        />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center text-white">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur sm:h-32 sm:w-32">
              <span className="font-montserrat text-5xl font-semibold">@</span>
            </div>

            <h1 className="font-arsenal text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">
              {contactPageContent.title}
            </h1>

            <p className="mt-4 text-sm text-white/70 sm:text-base">
              Contactez notre équipe pour devis et informations
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-5 py-16 sm:px-8 lg:px-[120px] lg:py-24">
        <div className="mx-auto max-w-6xl">

          {/* breadcrumb */}
          <nav className="flex items-center gap-2 text-sm font-medium text-taupe">
            <Link to="/" className="hover:text-[pumpkin-spice]">Home</Link>
            <span>›</span>
            <span className="text-[pumpkin-spice]">{contactPageContent.title}</span>
          </nav>

          <h2 className="mt-4 font-arsenal text-4xl font-bold uppercase sm:text-5xl">
            {contactPageContent.title}
          </h2>

          {/* GRID */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">

            {/* FORM */}
            <div className="rounded-3xl border border-pale-slate/20 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] sm:p-10">

              <h3 className="mb-8 font-montserrat text-sm font-semibold uppercase tracking-[0.2em] text-[pumpkin-spice]">
                Demande de devis
              </h3>

              <form className="space-y-6">

                <div className="grid gap-5 md:grid-cols-2">
                  {formFields.map((field) => (
                    <ContactInput key={field.name} field={field} />
                  ))}
                </div>

                <div>
                  <label className="block">
                    <span className="font-montserrat text-sm font-medium text-charcoal-blue">
                      Subject <span className="text-[pumpkin-spice]">*</span>
                    </span>

                    <input
                      className="mt-2 h-[52px] w-full rounded-2xl border border-pale-slate/20 px-5 outline-none transition focus:border-pumpkin-spice focus:ring-4 focus:ring-pumpkin-spice/10"
                    />
                  </label>
                </div>

                <div>
                  <label className="block">
                    <span className="font-montserrat text-sm font-medium text-charcoal-blue">
                      Message <span className="text-[pumpkin-spice]">*</span>
                    </span>

                    <textarea
                      rows="6"
                      className="mt-2 w-full rounded-2xl border border-pale-slate/20 px-5 py-4 outline-none transition focus:border-pumpkin-spice focus:ring-4 focus:ring-pumpkin-spice/10"
                    />
                  </label>
                </div>

                <button
                  type="button"
                  className="inline-flex h-[52px] items-center justify-center rounded-full bg-[pumpkin-spice] px-10 font-montserrat text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[pumpkin-dark]"
                >
                  Send Request
                </button>

              </form>
            </div>

            {/* INFO SIDE */}
            <div className="space-y-6 rounded-3xl border border-pale-slate/20 bg-gradient-to-b from-charcoal-blue to-jet-black p-6 sm:p-8">

              <h3 className="font-arsenal text-2xl font-bold uppercase">
                {contactPageContent.companyName}
              </h3>

              <InfoBlock
                title={contactPageContent.addressHeading}
                lines={contactPageContent.addressLines}
              />

              <InfoBlock
                title={contactPageContent.enquiriesHeading}
                lines={[contactPageContent.enquiriesEmail]}
                accent
                isEmail
              />

              <InfoBlock
                title={contactPageContent.phoneHeading}
                lines={contactPageContent.phoneLines}
              />

              <a
                href={contactPageContent.mapLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-pale-slate/20 bg-white py-3 font-montserrat text-sm font-medium transition hover:border-[pumpkin-spice] hover:text-[pumpkin-spice]"
              >
                Open in Google Maps
              </a>

            </div>

          </div>

        </div>
      </section>
    </main>
  )
}