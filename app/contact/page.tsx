import { Mail, Clock, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f0c419] px-4 py-16 text-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.45em] text-black/70">IVY CITY GRABBA</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Contact</h1>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-black/10 bg-[#f7d33e] p-6">
            <Mail className="h-6 w-6" />
            <h2 className="mt-4 text-xl font-semibold">Email</h2>
            <p className="mt-3 text-base leading-7 text-black/80">ivycitygrabbaa@gmail.com</p>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-[#f7d33e] p-6">
            <Clock className="h-6 w-6" />
            <h2 className="mt-4 text-xl font-semibold">Business Hours</h2>
            <p className="mt-3 text-base leading-7 text-black/80">Monday - Friday, 9 AM - 6 PM EST</p>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-[#f7d33e] p-6">
            <MapPin className="h-6 w-6" />
            <h2 className="mt-4 text-xl font-semibold">Service Area</h2>
            <p className="mt-3 text-base leading-7 text-black/80">
              Washington, DC, Maryland, Virginia, and broader U.S. inquiries where legally permitted.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-black/10 bg-[#f7d33e] p-6 sm:p-8">
          <p className="text-base leading-8 text-black/80">
            For product inquiries, customer support, or order requests, please contact IVY CITY GRABBA directly.
          </p>
          <p className="mt-4 text-base leading-8 text-black/80">
            This website is intended for adults 21+ only.
          </p>
        </div>
      </div>
    </main>
  )
}
