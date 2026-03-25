"use client"

import Script from 'next/script'
import { Menu, Mail, ShieldCheck, Leaf, Star, Clock, MapPin, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void
      }
    }
  }
}

export default function IvyCityGrabbaReplica() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [ageVerified, setAgeVerified] = useState(false)
  const [ageCheckReady, setAgeCheckReady] = useState(false)
  const instagramEmbedsRef = useRef<HTMLDivElement | null>(null)
  const [instagramScriptReady, setInstagramScriptReady] = useState(false)

  const products = useMemo(
    () => [
      {
        name: 'IVY CITY GRABBA BOTTLE FULL BOX (20 COUNT) - COMING SOON',
        description:
          'Premium bottled grabba prepared for customers who value consistency, quality, and craftsmanship in every order.',
        image:
          'images/product-1.jpeg', // replace with your own product image URL or /images/product-1.jpg
        hoverImage:
          'images/product-1-hover.jpg', // replace with your own hover image URL or /images/product-1-hover.jpg
      },
      {
        name: 'IVY CITY Grabba Bottled 5g',
        description:
          'A compact premium format for customers looking for authentic quality in a smaller bottled presentation.',
        image:
          'images/product-2.jpeg', // replace with your own product image URL or /images/product-2.jpg
        hoverImage:
          'images/product-2-hover.jpg', // replace with your own hover image URL or /images/product-2-hover.jpg
      },
      {
        name: 'IVY CITY GRABBA FULL BOX (30 COUNT)',
        description:
          'A premium full-box presentation designed for repeat buyers who appreciate freshness, value, and authentic tobacco leaves.',
        image:
          'images/product-3.jpeg', // replace with your own product image URL or /images/product-3.jpg
        hoverImage:
          'images/product-3-hover.jpg', // replace with your own hover image URL or /images/product-3-hover.jpg
      },
      {
        name: 'IVY CITY Original Grabba Leaf 5g.',
        description:
          'Natural, whole leaf tobacco with a rich, authentic profile and a clean premium presentation.',
        image:
          'images/product-4.jpeg', // replace with your own product image URL or /images/product-4.jpg
        hoverImage:
          'images/product-4-hover.jpg', // replace with your own hover image URL or /images/product-4-hover.jpg
      },
    ],
    []
  )

  useEffect(() => {
    const saved = window.sessionStorage.getItem('ivycity_age_verified')
    if (saved === 'true') {
      setAgeVerified(true)
    }
    setAgeCheckReady(true)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 4)
    }, 4500)

    return () => clearInterval(timer)
  }, [])

  

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

  // EASY EDIT SECTION: replace, remove, or add more customer testimonials here
  const testimonials = [
    {
      quote:
        'The quality of these tobacco leaves is unmatched. Truly a premium experience from start to finish.',
      name: 'Michael R.',
      role: 'Verified Customer',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop', // replace with your own customer image URL or /images/customer-1.jpg
    },
    {
      quote:
        'Fast shipping and exceptional customer service. The leaves arrived fresh and perfectly packaged.',
      name: 'James T.',
      role: 'Verified Customer',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop', // replace with your own customer image URL or /images/customer-2.jpg
    },
    {
      quote:
        'Been ordering for months now. Consistent quality and authentic Dominican tobacco every time.',
      name: 'David L.',
      role: 'Verified Customer',
      image:
        'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800&auto=format&fit=crop', // replace with your own customer image URL or /images/customer-3.jpg
    },
  ]

  const featuredSlides = [
    {
      title: 'Premium Grabba Leaves',
      subtitle: 'Authenticity, quality, and craftsmanship in every order.',
      image: 'images/darker-premium-grabba-leaves.webp',
    },
    {
      title: 'Direct Dominican Republic Sourcing',
      subtitle: 'Carefully selected leaves from trusted growers and traditional methods.',
      image: 'images/tobacco-processing.webp',
    },
    {
      title: 'Luxury Brand Experience',
      subtitle: 'A refined catalog designed to showcase the IVY CITY standard.',
      image: 'images/tobacco-farm-in-dominican-republic-at-golden-hour.webp',
    },
    {
      title: 'Order Directly With Confidence',
      subtitle: 'Customers can reach out by email or request form for a personal ordering experience.',
      image: 'images/ivy-city-products-enhanced.webp',
    },
  ]

  // EASY EDIT SECTION: replace, remove, or add more Instagram video testimonial cards here
  // Use the NORMAL Reel link, not /embed
  // Example: https://www.instagram.com/reel/DT039kZkvPm/
  const videoTestimonials = [
    {
      title: 'Instagram Reel Review',
      platform: 'Instagram',
      description: 'Customer review featuring product quality and freshness.',
      permalink: 'https://www.instagram.com/reel/DT039kZkvPm/',
    },
    {
      title: 'Customer Reel Review',
      platform: 'Instagram',
      description: 'Real customer feedback on smooth burn and rich flavor.',
      permalink: 'https://www.instagram.com/reel/DUqj4qIjYJI/',
    },
    {
      title: 'Product Experience Reel',
      platform: 'Instagram',
      description: 'A quick look at the full IVY CITY grabba experience.',
      permalink: 'https://www.instagram.com/reel/DT03Spwkmh6/',
    },
  ]

  useEffect(() => {
    if (!instagramScriptReady || !instagramEmbedsRef.current) return

    const timer = window.setTimeout(() => {
      if (window.instgrm?.Embeds?.process) {
        window.instgrm.Embeds.process()
      }
    }, 150)

    return () => window.clearTimeout(timer)
  }, [instagramScriptReady, videoTestimonials])

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Order', href: '#order' },
  ]

  const handleAgeEnter = () => {
    setAgeVerified(true)
    window.sessionStorage.setItem('ivycity_age_verified', 'true')
  }

  const handleUnderAge = () => {
    window.location.href = 'https://www.google.com'
  }

  return (
    <>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => setInstagramScriptReady(true)}
      />
      <div className="min-h-screen bg-[#f0c419] text-black selection:bg-black selection:text-[#f0c419]">
      {ageCheckReady && !ageVerified ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4">
          <div className="w-full max-w-xl rounded-[2rem] border border-black/10 bg-[#f0c419] p-8 text-center shadow-2xl sm:p-10">
            <img
              src="/images/logo.png"
              alt="Ivy City Grabba"
              className="h-12 w-auto object-contain"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-black/70">
              Age Verification
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">You must be 21 or older to enter</h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-black/75 sm:text-base">
              This website contains tobacco-related content and is intended only for adults of legal
              smoking age. Please confirm that you are at least 21 years old to continue.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={handleAgeEnter}
                className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-[#f0c419] transition hover:opacity-90"
              >
                I am 21+
              </button>
              <button
                type="button"
                onClick={handleUnderAge}
                className="inline-flex items-center justify-center rounded-full border border-black/20 bg-white/20 px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-white/35"
              >
                I am under 21
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f0c419] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Ivy City Grabba"
                className="h-12 w-auto object-contain"
              />
              <div>
                <p className="text-[10px] uppercase tracking-[0.42em] text-black/75 sm:text-[11px]">
                  21+ Only • Premium Tobacco Products Online
                </p>
                <h1 className="mt-1 truncate text-base font-semibold tracking-[0.28em] text-black sm:text-lg">
                  IVY CITY GRABBA
                </h1>
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-black/80 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-black/55">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="mailto:ivycitygrabbaa@gmail.com"
              className="rounded-full border border-black/15 px-4 py-2 text-sm text-black transition hover:bg-black hover:text-[#f0c419]"
            >
              Email Us
            </a>
            <a
              href="#order"
              className="rounded-full border border-black bg-black px-5 py-2.5 text-sm font-medium text-[#f0c419] transition hover:opacity-90"
            >
              Request Order
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-black text-[#f0c419] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-black/10 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm text-black transition hover:bg-black hover:text-[#f0c419]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:ivycitygrabbaa@gmail.com"
                className="rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm text-black"
              >
                Email Us
              </a>
              <a
                href="#order"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl bg-black px-4 py-3 text-sm font-semibold text-[#f0c419]"
              >
                Request Order
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <section className="relative overflow-hidden border-b border-black/10">
        <div className="relative min-h-[calc(100vh-81px)] sm:min-h-[calc(100vh-89px)]">
          <img
            src={featuredSlides[activeSlide].image}
            alt={featuredSlides[activeSlide].title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-black/65" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.55),rgba(0,0,0,0.15),rgba(0,0,0,0.35))]" />

          <div className="relative mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl items-end px-4 py-10 sm:min-h-[calc(100vh-89px)] sm:px-6 sm:py-14 lg:px-8 lg:py-16">
            <div className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="max-w-3xl text-white">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f0c419]/45 bg-[#f0c419]/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#f7dd73] sm:text-sm">
                  <ShieldCheck className="h-4 w-4" />
                  Age Verification Required
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#f7dd73] sm:text-sm">
                  IVY CITY GRABBA
                </p>
                <h2 className="mt-4 text-4xl font-semibold leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl">
                  {featuredSlides[activeSlide].title}
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/88 sm:text-base sm:leading-8 md:text-lg">
                  {featuredSlides[activeSlide].subtitle}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  <a
                    href="#products"
                    className="inline-flex items-center justify-center rounded-full bg-[#f0c419] px-6 py-3.5 text-sm font-semibold text-black transition hover:opacity-90"
                  >
                    View Products
                  </a>
                  <a
                    href="#order"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                  >
                    Request Order
                  </a>
                </div>
              </div>

              <div className="w-full justify-self-end lg:max-w-md">
                <div className="rounded-[2rem] border border-white/15 bg-black/35 p-4 text-white shadow-2xl backdrop-blur-md sm:p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#f7dd73]">Featured Showcase</p>
                  <p className="mt-3 text-lg font-semibold sm:text-xl">{featuredSlides[activeSlide].title}</p>
                  <p className="mt-3 text-sm leading-7 text-white/80">{featuredSlides[activeSlide].subtitle}</p>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <div className="flex gap-2">
                      {featuredSlides.map((slide, index) => (
                        <button
                          key={slide.title}
                          type="button"
                          onClick={() => setActiveSlide(index)}
                          aria-label={`Go to slide ${index + 1}`}
                          className={`h-2.5 rounded-full transition-all ${
                            activeSlide === index ? 'w-8 bg-[#f0c419]' : 'w-2.5 bg-white/35 hover:bg-white/60'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveSlide((prev) =>
                            prev === 0 ? featuredSlides.length - 1 : prev - 1
                          )
                        }
                        className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
                      >
                        Prev
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveSlide((prev) => (prev + 1) % featuredSlides.length)}
                        className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.45em] text-black/75">About IVY CITY</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl">
              A trusted source for premium tobacco products across the United States.
            </h2>
            <div className="mt-6 rounded-[2rem] border border-black/10 bg-white/25 p-6 sm:p-8">
              <p className="text-base leading-8 text-black/80">
                Welcome to IVY CITY, your trusted source for premium tobacco products. We are a
                licensed tobacco retailer committed to providing authentic, high-quality tobacco
                leaves to discerning customers across the United States.
              </p>
              <p className="mt-5 text-base leading-8 text-black/80">
                IVY CITY was founded on a passion for quality and authenticity in the tobacco
                industry. We believe that our customers deserve access to the finest tobacco
                products, sourced responsibly and delivered with care.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-black/10 bg-white/25 p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-black">Our Commitment to Quality</h3>
              <p className="mt-4 text-sm leading-7 text-black/75 sm:text-base">
                We work directly with trusted farmers in the Dominican Republic who cultivate
                premium tobacco using traditional methods passed down through generations. Each leaf
                is carefully selected, cured, and processed by skilled artisans to ensure
                exceptional quality.
              </p>
              <div className="mt-6 grid gap-3">
                {qualityPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-black/8 bg-black/5 px-4 py-3 text-sm leading-6 text-black/75"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-black/10 bg-white/25 p-6">
                <h3 className="text-xl font-semibold text-black">Compliance and Responsibility</h3>
                <div className="mt-5 space-y-3">
                  {compliancePoints.map((point) => (
                    <div key={point} className="flex gap-3 text-sm leading-6 text-black/75">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-black" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-black/10 bg-white/25 p-6">
                <h3 className="text-xl font-semibold text-black">Our Promise</h3>
                <div className="mt-5 space-y-3">
                  {promisePoints.map((point) => (
                    <div key={point} className="flex gap-3 text-sm leading-6 text-black/75">
                      <Star className="mt-0.5 h-4 w-4 shrink-0 text-black" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="border-y border-black/10 bg-[#e0b813] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.45em] text-black/75">Premium Selection</p>
              <h2 className="mt-4 text-3xl font-semibold text-black sm:text-4xl md:text-5xl">Explore the collection</h2>
            </div>
            {/* <p className="max-w-2xl text-sm leading-7 text-black/70 sm:text-base">
              This site now works as a premium catalog and inquiry experience. Visitors can browse
              products, learn about IVY CITY, and reach out directly to place an order.
            </p> */}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-[2rem] border border-black/10 bg-[#f7d33e] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-0 sm:h-80"
                  />
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} alternate view`}
                    className="absolute inset-0 h-72 w-full object-cover opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100 sm:h-80"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-base font-semibold leading-7 text-black sm:min-h-[84px]">{product.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-black/70">{product.description}</p>
                  <a
                    href="#order"
                    className="mt-6 inline-flex rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-black hover:text-[#f0c419]"
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
          <p className="text-sm uppercase tracking-[0.45em] text-black/75">What Our Customers Say</p>
          <h2 className="mt-4 text-3xl font-semibold text-black sm:text-4xl md:text-5xl">
            Trusted by premium tobacco enthusiasts
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[2rem] border border-black/10 bg-white/25 p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-black/10"
                />
                <div>
                  <p className="font-medium text-black">{item.name}</p>
                  <p className="text-sm text-black/55">{item.role}</p>
                </div>
              </div>
              <div className="mt-6 text-4xl text-black">“</div>
              <p className="mt-4 text-sm leading-8 text-black/75 sm:text-base">{item.quote}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.45em] text-black/75">Video Testimonies</p>
            {/* <h3 className="mt-4 text-3xl font-semibold text-black sm:text-4xl">
              Add your Instagram customer videos here
            </h3> */}
            {/* <p className="mt-4 text-sm leading-7 text-black/70 sm:text-base">
              These cards now use the official Instagram embed method. To add more, duplicate one
              object in the videoTestimonials array and paste the normal Reel link.
            </p> */}
          </div>

          <div ref={instagramEmbedsRef} className="mt-8 grid gap-6 lg:grid-cols-3">
            {videoTestimonials.map((video) => (
              <div
                key={video.title}
                className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#f7d33e] shadow-lg"
              >
                <div className="min-h-[420px] bg-white p-3 sm:min-h-[520px]">
                  {video.permalink ? (
                    <div className="flex h-full items-start justify-center overflow-hidden rounded-[1.5rem]">
                      <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink={video.permalink}
                        data-instgrm-version="14"
                        style={{
                          background: '#FFF',
                          border: 0,
                          borderRadius: '12px',
                          boxShadow: '0 0 1px 0 rgba(0,0,0,0.15), 0 8px 24px 0 rgba(0,0,0,0.08)',
                          margin: '0 auto',
                          maxWidth: '540px',
                          minWidth: '326px',
                          padding: 0,
                          width: '100%',
                        }}
                      >
                        <a href={video.permalink} target="_blank" rel="noreferrer">
                          View this post on Instagram
                        </a>
                      </blockquote>
                    </div>
                  ) : (
                    <div className="flex h-full min-h-[380px] items-center justify-center rounded-[1.5rem] border border-dashed border-black/20 bg-black/5 px-6 text-center text-sm text-black/50">
                      Add your Instagram Reel link inside the videoTestimonials array.
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="mb-3 inline-flex rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#f0c419]">
                    {video.platform}
                  </div>
                  <p className="text-lg font-semibold text-black">{video.title}</p>
                  <p className="mt-2 text-sm leading-6 text-black/70">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="rounded-[2rem] border border-black/10 bg-[#e0b813] p-6 sm:p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.45em] text-black/75">Direct Ordering</p>
            <h2 className="mt-4 text-3xl font-semibold text-black sm:text-4xl">Order by email or request form</h2>
            <p className="mt-5 text-sm leading-8 text-black/75 sm:text-base">
              We do not use direct online checkout here. To place an order, customers can email us
              directly or submit the form with the products they are interested in.
            </p>

            <div className="mt-8 space-y-4 text-black/75">
              <div className="rounded-2xl border border-black/10 bg-white/25 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-black/75">Email Us</p>
                <a
                  href="mailto:ivycitygrabbaa@gmail.com"
                  className="mt-2 flex items-center gap-2 break-all text-base font-medium text-black hover:opacity-70 sm:text-lg"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  ivycitygrabbaa@gmail.com
                </a>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/25 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-black/75">Business Hours</p>
                <p className="mt-2 flex items-center gap-2 text-sm sm:text-base">
                  <Clock className="h-4 w-4 shrink-0 text-black" />
                  Monday - Friday, 9 AM - 6 PM EST
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/25 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-black/75">Sourcing</p>
                <p className="mt-2 text-sm leading-7 sm:text-base">
                  Our premium grabba leaves are sourced directly from the Dominican Republic.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-[#f7d33e] p-6 sm:p-8 md:p-10">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.45em] text-black/75">Order Request Form</p>
              <h3 className="mt-4 text-2xl font-semibold text-black sm:text-3xl">Tell us what you need</h3>
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
                <label className="mb-2 block text-sm text-black/75">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="h-12 w-full rounded-2xl border border-black/10 bg-white/60 px-4 text-sm text-black outline-none placeholder:text-black/40 focus:border-black"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-black/75">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-2xl border border-black/10 bg-white/60 px-4 text-sm text-black outline-none placeholder:text-black/40 focus:border-black"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-black/75">Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Optional"
                  className="h-12 w-full rounded-2xl border border-black/10 bg-white/60 px-4 text-sm text-black outline-none placeholder:text-black/40 focus:border-black"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-black/75">Interested Product</label>
                <select
                  name="product"
                  className="h-12 w-full rounded-2xl border border-black/10 bg-white/60 px-4 text-sm text-black outline-none focus:border-black"
                >
                  <option>Choose a product</option>
                  {products.map((product) => (
                    <option key={product.name}>{product.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm text-black/75">Requested Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="Example: 2 boxes"
                  className="h-12 w-full rounded-2xl border border-black/10 bg-white/60 px-4 text-sm text-black outline-none placeholder:text-black/40 focus:border-black"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-black/75">Preferred Contact Method</label>
                <select
                  name="contact_method"
                  className="h-12 w-full rounded-2xl border border-black/10 bg-white/60 px-4 text-sm text-black outline-none focus:border-black"
                >
                  <option>Email</option>
                  <option>Phone</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-black/75">Comment</label>
                <textarea
                  name="comment"
                  placeholder="Tell us which items you want, quantities, and any other details."
                  className="min-h-[160px] w-full rounded-3xl border border-black/10 bg-white/60 px-4 py-4 text-sm text-black outline-none placeholder:text-black/40 focus:border-black"
                />
              </div>
              <div className="md:col-span-2 flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-6 text-black/55">
                  Submit the request and it will be sent directly to our business email for follow-up.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-[#f0c419] transition hover:opacity-90"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e0b813]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.45em] text-black/75">Stay Updated with IVY CITY</p>
            <h3 className="mt-3 text-2xl font-semibold text-black sm:text-3xl">Join the list for updates and announcements</h3>
          </div>
          <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email"
              className="h-12 flex-1 rounded-full border border-black/15 bg-white/60 px-5 text-sm text-black outline-none placeholder:text-black/40 focus:border-black"
            />
            <button className="h-12 rounded-full bg-black px-6 text-sm font-semibold text-[#f0c419]">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#f0c419]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-black/75">IVY CITY GRABBA</p>
              <h3 className="mt-3 text-2xl font-semibold text-black sm:text-3xl">
                Premium catalog and direct inquiry experience
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-black/65 sm:text-base">
                When you choose IVY CITY, you are choosing a retailer that values quality,
                authenticity, and customer trust. We are not just selling tobacco products, we are
                sharing a tradition of excellence that begins in the fields of the Dominican
                Republic and ends with your complete satisfaction.
              </p>
              <h2>Our Premium Grabba Leaves are sourced directly from: 51000, Dominican Republic
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-1">
              <div>
                <p className="text-sm font-semibold text-black">Quick Links</p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-black/65">
                  <a href="#products" className="hover:opacity-65">Products</a>
                  <a href="#about" className="hover:opacity-65">About</a>
                  <a href="#order" className="hover:opacity-65">Contact / Order</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-6 text-sm text-black/55 md:flex-row md:items-center md:justify-between">
            <p>© 2026 IVY CITY GRABBA. All rights reserved.</p>
            <div className="flex flex-wrap gap-5">
              <a href="https://instagram.com/ivycitygrabba" className="hover:opacity-65"><b>Instagram</b></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}
