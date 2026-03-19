"use client"

import { Menu, Mail, ShieldCheck, Leaf, Star, Clock, MapPin, X } from 'lucide-react'
import { useMemo, useState } from 'react'

export default function IvyCityGrabbaReplica() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const products = useMemo(
    () => [
      {
        name: 'IVY CITY GRABBA BOTTLE FULL BOX (20 COUNT) - COMING SOON',
        description:
          'Premium bottled grabba prepared for customers who value consistency, quality, and craftsmanship in every order.',
        image:
          '/images/IVY CITY GRABBA BOTTLE FULL BOX.jpg',
      },
      {
        name: 'IVY CITY Grabba Bottled 5g - COMING SOON',
        description:
          'A compact premium format for customers looking for authentic quality in a smaller bottled presentation.',
        image:
          '/images/IVY CITY Grabba Bottled 5g.jpg',
      },
      {
        name: 'IVY CITY GRABBA FULL BOX (30 COUNT)',
        description:
          'A premium full-box presentation designed for repeat buyers who appreciate freshness, value, and authentic tobacco leaves.',
        image:
          '/images/IVY CITY GRABBA FULL BOX (30 COUNT).jpg',
      },
      {
        name: 'IVY CITY Original Grabba Leaf 5g.',
        description:
          'Natural, whole leaf tobacco with a rich, authentic profile and a clean premium presentation.',
        image:
          '/images/IVY CITY Original Grabba Leaf 5g.jpg',
      },
    ],
    []
  )

  const pillars = [
    {
      title: 'Authentic Quality',
      description: 'Experience the difference of natural, premium tobacco.',
      icon: Leaf,
    },
    {
      title: 'Farm to Door',
      description: 'Direct sourcing ensures the highest quality and freshness.',
      icon: MapPin,
    },
    {
      title: 'Luxury Experience',
      description: 'Elevate your moments with our curated selection.',
      icon: Star,
    },
  ]

  const qualityPoints = [
    'Direct Sourcing: We partner with experienced tobacco farmers in the Dominican Republic.',
    'Traditional Methods: Our tobacco is cultivated and cured using time-honored techniques.',
    'Quality Control: Every product is inspected to meet our rigorous standards.',
    'Authentic Products: We offer 100% natural, whole leaf tobacco.',
  ]

  const compliancePoints = [
    'Strict age verification (21+ only)',
    'Compliance with all federal, state, and local tobacco regulations',
    'Responsible marketing and sales practices',
    'Transparent business operations',
  ]

  const promisePoints = [
    'Premium Quality: Only the finest tobacco products make it to our store.',
    'Authenticity: Genuine, natural tobacco leaves with no additives.',
    'Trust: Transparent business practices and reliable service.',
    'Customer Satisfaction: Dedicated support and a seamless shopping experience.',
  ]

  const testimonials = [
    {
      quote:
        'The quality of these tobacco leaves is unmatched. Truly a premium experience from start to finish.',
      name: 'Michael R.',
    },
    {
      quote:
        'Fast shipping and exceptional customer service. The leaves arrived fresh and perfectly packaged.',
      name: 'James T.',
    },
    {
      quote:
        'Been ordering for months now. Consistent quality and authentic Dominican tobacco every time.',
      name: 'David L.',
    },
  ]

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Order', href: '#order' },
  ]

  return (
    <div className="min-h-screen bg-[#060606] text-white selection:bg-amber-300 selection:text-black">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_20%),linear-gradient(to_bottom,#0a0a0a,#050505)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.42em] text-amber-300 sm:text-[11px]">
              21+ Only • Premium Tobacco Products Online
            </p>
            <h1 className="mt-1 truncate text-base font-semibold tracking-[0.28em] sm:text-lg">
              IVY CITY GRABBA
            </h1>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-amber-300">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="mailto:ivycitygrabbaa@gmail.com"
              className="rounded-full border border-white/12 px-4 py-2 text-sm text-white/80 transition hover:border-amber-300 hover:text-amber-300"
            >
              Email Us
            </a>
            <a
              href="#order"
              className="rounded-full border border-amber-300/30 bg-amber-300/10 px-5 py-2.5 text-sm font-medium text-amber-200 transition hover:border-amber-300 hover:bg-amber-300 hover:text-black"
            >
              Request Order
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-white/10 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/80 transition hover:border-amber-300 hover:text-amber-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:ivycitygrabbaa@gmail.com"
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/80"
              >
                Email Us
              </a>
              <a
                href="#order"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl bg-amber-300 px-4 py-3 text-sm font-semibold text-black"
              >
                Request Order
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=1800&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#060606]" />

        <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-200 sm:text-sm">
              <ShieldCheck className="h-4 w-4" />
              Age Verification Required
            </div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl">
              Premium Grabba Leaves sourced with authenticity, quality, and craftsmanship.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8 md:text-lg">
              Discover our curated collection of premium tobacco products, carefully selected for
              quality and craftsmanship. From classic blends to exclusive offerings, each product
              reflects our commitment to excellence and customer satisfaction.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                View Products
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-300"
              >
                Learn More
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={pillar.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/65">{pillar.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl">
              <img
                src={products[0].image}
                alt={products[0].name}
                className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[420px]"
              />
              <div className="p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Featured Product</p>
                <h3 className="mt-3 text-xl font-semibold leading-7 sm:text-2xl">{products[0].name}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
                  {products[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.45em] text-amber-300">About IVY CITY</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              A trusted source for premium tobacco products across the United States.
            </h2>
            <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <p className="text-base leading-8 text-white/72">
                Welcome to IVY CITY, your trusted source for premium tobacco products. We are a
                licensed tobacco retailer committed to providing authentic, high-quality tobacco
                leaves to discerning customers across the United States.
              </p>
              <p className="mt-5 text-base leading-8 text-white/72">
                IVY CITY was founded on a passion for quality and authenticity in the tobacco
                industry. We believe that our customers deserve access to the finest tobacco
                products, sourced responsibly and delivered with care.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <h3 className="text-2xl font-semibold">Our Commitment to Quality</h3>
              <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
                We work directly with trusted farmers in the Dominican Republic who cultivate
                premium tobacco using traditional methods passed down through generations. Each leaf
                is carefully selected, cured, and processed by skilled artisans to ensure
                exceptional quality.
              </p>
              <div className="mt-6 grid gap-3">
                {qualityPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm leading-6 text-white/75"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-semibold">Compliance and Responsibility</h3>
                <div className="mt-5 space-y-3">
                  {compliancePoints.map((point) => (
                    <div key={point} className="flex gap-3 text-sm leading-6 text-white/72">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-semibold">Our Promise</h3>
                <div className="mt-5 space-y-3">
                  {promisePoints.map((point) => (
                    <div key={point} className="flex gap-3 text-sm leading-6 text-white/72">
                      <Star className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="border-y border-white/10 bg-white/[0.03] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.45em] text-amber-300">Premium Selection</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">Explore the collection</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              This site now works as a premium catalog and inquiry experience. Visitors can browse
              products, learn about IVY CITY, and reach out directly to place an order.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] transition duration-300 hover:-translate-y-1 hover:border-amber-300/40"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-base font-semibold leading-7 sm:min-h-[84px]">{product.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">{product.description}</p>
                  <a
                    href="#order"
                    className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:border-amber-300 hover:text-amber-300"
                  >
                    Inquire to Order
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-amber-300">What Our Customers Say</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Trusted by premium tobacco enthusiasts
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <div className="text-4xl text-amber-300">“</div>
              <p className="mt-4 text-sm leading-8 text-white/72 sm:text-base">{item.quote}</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-white/50">Verified Customer</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="order" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-amber-300/10 to-white/[0.03] p-6 sm:p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.45em] text-amber-300">Direct Ordering</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Order by email or request form</h2>
            <p className="mt-5 text-sm leading-8 text-white/72 sm:text-base">
              We do not use direct online checkout here. To place an order, customers can email us
              directly or submit the form with the products they are interested in.
            </p>

            <div className="mt-8 space-y-4 text-white/72">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Email Us</p>
                <a
                  href="mailto:ivycitygrabbaa@gmail.com"
                  className="mt-2 flex items-center gap-2 break-all text-base font-medium text-white hover:text-amber-300 sm:text-lg"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  ivycitygrabbaa@gmail.com
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Business Hours</p>
                <p className="mt-2 flex items-center gap-2 text-sm sm:text-base">
                  <Clock className="h-4 w-4 shrink-0 text-amber-300" />
                  Monday - Friday, 9 AM - 6 PM EST
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Sourcing</p>
                <p className="mt-2 text-sm leading-7 sm:text-base">
                  Our premium grabba leaves are sourced directly from the Dominican Republic.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-6 sm:p-8 md:p-10">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.45em] text-amber-300">Order Request Form</p>
              <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">Tell us what you need</h3>
            </div>

            <form
              action="https://formsubmit.co/ivycitygrabbaa@gmail.com"
              method="POST"
              className="grid gap-5 md:grid-cols-2"
            >
              <input type="hidden" name="_subject" value="New Ivy City Grabba order request" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label className="mb-2 block text-sm text-white/70">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm outline-none placeholder:text-white/30 focus:border-amber-300"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/70">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm outline-none placeholder:text-white/30 focus:border-amber-300"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/70">Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Optional"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm outline-none placeholder:text-white/30 focus:border-amber-300"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/70">Interested Product</label>
                <select
                  name="product"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-[#101010] px-4 text-sm outline-none focus:border-amber-300"
                >
                  <option>Choose a product</option>
                  {products.map((product) => (
                    <option key={product.name}>{product.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/70">Requested Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="Example: 2 boxes"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm outline-none placeholder:text-white/30 focus:border-amber-300"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/70">Preferred Contact Method</label>
                <select
                  name="contact_method"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-[#101010] px-4 text-sm outline-none focus:border-amber-300"
                >
                  <option>Email</option>
                  <option>Phone</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-white/70">Comment</label>
                <textarea
                  name="comment"
                  placeholder="Tell us which items you want, quantities, and any other details."
                  className="min-h-[160px] w-full rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm outline-none placeholder:text-white/30 focus:border-amber-300"
                />
              </div>
              <div className="md:col-span-2 flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-6 text-white/45">
                  Submit the request and it will be sent directly to our business email for follow-up.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-amber-300 px-7 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.45em] text-amber-300">Stay Updated with IVY CITY</p>
            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">Join the list for updates and announcements</h3>
          </div>
          <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email"
              className="h-12 flex-1 rounded-full border border-white/15 bg-black/30 px-5 text-sm outline-none placeholder:text-white/35 focus:border-amber-300"
            />
            <button className="h-12 rounded-full bg-amber-300 px-6 text-sm font-semibold text-black">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-amber-300">IVY CITY GRABBA</p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Premium catalog and direct inquiry experience
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                When you choose IVY CITY, you are choosing a retailer that values quality,
                authenticity, and customer trust. We are not just selling tobacco products — we are
                sharing a tradition of excellence that begins in the fields of the Dominican
                Republic and ends with your complete satisfaction.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-white">Quick Links</p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
                  <a href="#products" className="hover:text-amber-300">Products</a>
                  <a href="#about" className="hover:text-amber-300">About</a>
                  <a href="#reviews" className="hover:text-amber-300">Reviews</a>
                  <a href="#order" className="hover:text-amber-300">Contact / Order</a>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Policies</p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
                  <a href="#" className="hover:text-amber-300">Privacy Policy</a>
                  <a href="#" className="hover:text-amber-300">Terms of Service</a>
                  <a href="#" className="hover:text-amber-300">Shipping Policy</a>
                  <a href="#" className="hover:text-amber-300">FAQ</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
            <p>© 2026 IVY CITY GRABBA. All rights reserved.</p>
            <div className="flex flex-wrap gap-5">
              <a href="https://facebook.com" className="hover:text-amber-300">Facebook</a>
              <a href="https://instagram.com/ivycitygrabba" className="hover:text-amber-300">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
