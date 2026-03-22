import Image from 'next/image';
import Link from 'next/link';
import Container from '@/app/components/shared/Container';
import Button from '@/app/components/shared/Button';

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1: Hero - Our Story */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/about-hero-team.png"
            alt="JACE team members working with community in Kenya"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/15 to-transparent" />
        </div>

        {/* Content */}
        <Container className="relative z-10 text-white">
          <div className="max-w-3xl">
            <p className="small-caps text-vibrant-pink mb-4 text-sm tracking-widest">
              OUR STORY
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 max-w-4xl drop-shadow-sm">
              A Promise Made, A Promise Kept
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Since 2020, we have been committed to building a world where every child belongs in a nurturing family.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Join Our Mission
              </Button>
              <Button variant="secondary" size="lg">
                Our Impact
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: Our Journey - Timeline + Story */}
      <section className="py-24 bg-ivory">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/about-journey-founders.png"
                  alt="JACE founders and early team at community gathering"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Column - Text + Timeline */}
            <div>
              <p className="small-caps text-rich-green mb-4">
                OUR JOURNEY
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light mb-6 leading-tight">
                From Vision to Reality
              </h2>
              <div className="w-16 h-px bg-vibrant-pink/20 mb-6" />
              <p className="text-charcoal text-lg leading-relaxed mb-8">
                JACE for Children International was born from a simple belief: every child deserves to grow up in a loving family. What began as a grassroots initiative in Kiambu County has grown into a movement reaching 10 counties across Kenya, transforming thousands of lives through family-centered care.
              </p>

              {/* Elegant Vertical Timeline */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-rich-green mt-1" />
                    <div className="w-0.5 h-16 bg-rich-green/30" />
                  </div>
                  <div>
                    <p className="font-serif text-deep-blue text-xl font-light">2020</p>
                    <p className="text-charcoal/80">Founded with a mission to strengthen families and protect children</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-rich-green mt-1" />
                    <div className="w-0.5 h-16 bg-rich-green/30" />
                  </div>
                  <div>
                    <p className="font-serif text-deep-blue text-xl font-light">2022</p>
                    <p className="text-charcoal/80">Expanded to 5 counties, partnered with 300+ organizations</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-rich-green mt-1" />
                  </div>
                  <div>
                    <p className="font-serif text-deep-blue text-xl font-light">2025</p>
                    <p className="text-charcoal/80">Reaching 10 counties, supporting 45,000+ children</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: Our Leadership - Team Profiles */}
      <section className="py-24 bg-warm-sand">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light mb-4">
              The People Behind the Promise
            </h2>
            <div className="w-20 h-px bg-vibrant-pink/30 mx-auto" />
          </div>

          {/* Leadership Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Executive Director */}
            <div className="group">
              <div className="relative h-80 rounded-t-lg overflow-hidden">
                <Image
                  src="/about-leader-sarah.png"
                  alt="Dr. Sarah Kimani, Executive Director"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-deep-blue/10" />
              </div>
              <div className="bg-white p-6 rounded-b-lg shadow-sm">
                <h3 className="font-serif text-2xl text-deep-blue mb-1">Dr. Sarah Kimani</h3>
                <p className="small-caps text-rich-green text-sm mb-3">Executive Director</p>
                <p className="text-charcoal/80 text-sm leading-relaxed mb-4">
                  15+ years in child protection and family welfare. Former advisor to Kenya&apos;s National Care Reform Task Force.
                </p>
                <div className="text-soft-gray text-sm italic border-l-2 border-vibrant-pink/40 pl-3">
                  &quot;Every child deserves to know they belong.&quot;
                </div>
              </div>
            </div>

            {/* Card 2: Programs Director */}
            <div className="group">
              <div className="relative h-80 rounded-t-lg overflow-hidden">
                <Image
                  src="/about-leader-james.png"
                  alt="James Omondi, Programs Director"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-deep-blue/10" />
              </div>
              <div className="bg-white p-6 rounded-b-lg shadow-sm">
                <h3 className="font-serif text-2xl text-deep-blue mb-1">James Omondi</h3>
                <p className="small-caps text-rich-green text-sm mb-3">Programs Director</p>
                <p className="text-charcoal/80 text-sm leading-relaxed mb-4">
                  Expert in community-based care and family reintegration. Led programs reaching over 30,000 children.
                </p>
                <div className="text-soft-gray text-sm italic border-l-2 border-vibrant-pink/40 pl-3">
                  &quot;Strong families build strong communities.&quot;
                </div>
              </div>
            </div>

            {/* Card 3: Operations Director */}
            <div className="group">
              <div className="relative h-80 rounded-t-lg overflow-hidden">
                <Image
                  src="/about-leader-grace.png"
                  alt="Grace Wanjiku, Operations Director"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-deep-blue/10" />
              </div>
              <div className="bg-white p-6 rounded-b-lg shadow-sm">
                <h3 className="font-serif text-2xl text-deep-blue mb-1">Grace Wanjiku</h3>
                <p className="small-caps text-rich-green text-sm mb-3">Operations Director</p>
                <p className="text-charcoal/80 text-sm leading-relaxed mb-4">
                  Strategic leader in non-profit management. Former COO of East Africa&apos;s largest child welfare network.
                </p>
                <div className="text-soft-gray text-sm italic border-l-2 border-vibrant-pink/40 pl-3">
                  &quot;Hope is built one family at a time.&quot;
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: Our Impact - Statistics That Tell Our Story */}
      <section className="py-24 bg-white">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="small-caps text-rich-green mb-4">
              OUR IMPACT
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light mb-4">
              The Difference We Make Together
            </h2>
            <div className="w-20 h-px bg-vibrant-pink/30 mx-auto" />
          </div>

          {/* Statistics Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {/* Stat 1: Children Supported */}
            <div className="text-center group">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/about-stat-children.png"
                  alt="Children playing"
                  fill
                  className="object-cover"
                  sizes="128px"
                />
                <div className="absolute inset-0 bg-deep-blue/20 group-hover:bg-deep-blue/10 transition-colors" />
              </div>
              <p className="font-serif text-5xl text-deep-blue font-light mb-2">45,000+</p>
              <p className="text-charcoal font-medium small-caps text-sm">Children Supported</p>
              <p className="text-soft-gray text-xs mt-2">Living in nurturing family environments</p>
            </div>

            {/* Stat 2: Families Strengthened */}
            <div className="text-center group">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/about-stat-families.png"
                  alt="Family together"
                  fill
                  className="object-cover"
                  sizes="128px"
                />
                <div className="absolute inset-0 bg-rich-green/20 group-hover:bg-rich-green/10 transition-colors" />
              </div>
              <p className="font-serif text-5xl text-deep-blue font-light mb-2">12,000+</p>
              <p className="text-charcoal font-medium small-caps text-sm">Families Strengthened</p>
              <p className="text-soft-gray text-xs mt-2">Receiving support and resources</p>
            </div>

            {/* Stat 3: Counties Reached */}
            <div className="text-center group">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/about-stat-counties.png"
                  alt="Kenyan landscape"
                  fill
                  className="object-cover"
                  sizes="128px"
                />
                <div className="absolute inset-0 bg-rich-green/20 group-hover:bg-rich-green/10 transition-colors" />
              </div>
              <p className="font-serif text-5xl text-deep-blue font-light mb-2">10</p>
              <p className="text-charcoal font-medium small-caps text-sm">Counties Reached</p>
              <p className="text-soft-gray text-xs mt-2">Across Kenya with expansion plans</p>
            </div>

            {/* Stat 4: Partner Organizations */}
            <div className="text-center group">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/about-stat-partners.png"
                  alt="Community gathering"
                  fill
                  className="object-cover"
                  sizes="128px"
                />
                <div className="absolute inset-0 bg-deep-blue/20 group-hover:bg-deep-blue/10 transition-colors" />
              </div>
              <p className="font-serif text-5xl text-deep-blue font-light mb-2">845+</p>
              <p className="text-charcoal font-medium small-caps text-sm">Partner Organizations</p>
              <p className="text-soft-gray text-xs mt-2">Working together for lasting change</p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5: Our Commitment - Statement + Call to Action */}
      <section className="py-24 bg-warm-sand relative overflow-hidden">
        {/* Subtle Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/about-commitment-bg.png"
            alt="Kenyan family at golden hour"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-deep-blue/5" />
        </div>

        {/* Decorative Icon Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
          <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 L61.8 35.4 L90 38.2 L70 55.8 L76.4 82 L50 67.6 L23.6 82 L30 55.8 L10 38.2 L38.2 35.4 L50 10Z" fill="#009933" stroke="none" />
          </svg>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-serif text-4xl md:text-5xl text-deep-blue font-light leading-tight mb-8">
              &quot;We believe that every child, regardless of circumstance, deserves the love and security of a family.&quot;
            </p>
            <p className="text-charcoal text-xl leading-relaxed mb-12">
              This belief guides everything we do. From strengthening families to training organizations, from rescuing vulnerable children to advocating for systemic change—we are committed to building a Kenya where no child grows up alone.
            </p>
            <p className="font-serif text-2xl text-deep-blue mb-8">
              — The JACE for Children Team
            </p>
            <Button variant="outline-pink" size="lg">
              Partner With Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}