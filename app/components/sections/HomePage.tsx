import Image from 'next/image';
import Link from 'next/link';
import Container from '@/app/components/shared/Container';
import Button from '@/app/components/shared/Button';
import { IMPACT_STATS, PROGRAM_AREAS, CORE_VALUES, COUNTIES } from '@/app/lib/Constants';


export default function Homepage() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-family.png"
            alt="Kenyan family laughing together in golden light"
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
              MAKING A DIFFERENCE
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 max-w-4xl drop-shadow-sm">
              A World Where Every Child Thrives in a Nurturing Family
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              We strengthen families and communities across Kenya to ensure every child is safe, 
              loved, and supported to reach their full potential.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Support a Child
              </Button>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: Impact & Mission */}
      <section className="py-24 bg-ivory">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Mission Text */}
            <div>
              <p className="small-caps text-rich-green mb-4">
                OUR MISSION
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light mb-6 leading-tight">
                Building Sustainable, Family-Centered Care
              </h2>
              <div className="w-16 h-px bg-vibrant-pink/20 mb-6" />
              <p className="text-charcoal text-lg leading-relaxed">
                JACE for Children International is committed to transitioning children from 
                institutional care to family-based support. We strengthen families, protect 
                children from harm, and empower organizations through training and capacity 
                building to ensure lasting change in the lives of children across Kenya.
              </p>
            </div>

            {/* Right Column - Image with Stats Overlay */}
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
                <Image
                  src="/social-worker-family.png"
                  alt="Social worker with a Kenyan family"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Stats Overlay Card */}
              <div className="absolute -bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  {IMPACT_STATS.map((stat, index) => (
                    <div key={index}>
                      <div className={`font-serif text-2xl md:text-3xl ${
                        index % 2 === 0 ? 'text-deep-blue' : 'text-rich-green'
                      }`}>
                        {stat.number}
                      </div>
                      <div className="small-caps text-soft-gray text-xs">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: Core Program Areas */}
      <section className="py-24 bg-warm-sand">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light mb-4">
              How We Create Lasting Change
            </h2>
            <div className="w-20 h-px bg-vibrant-pink/30 mx-auto" />
          </div>

          {/* Program Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {PROGRAM_AREAS.map((program, index) => {
              const iconColors = {
                shield: 'text-vibrant-pink',
                home: 'text-rich-green',
                book: 'text-deep-blue'
              };
              
              return (
                <div key={index} className="group">
                  {/* Card Image */}
                  <div className="relative h-64 rounded-t-lg overflow-hidden">
                    <Image
                      src={`/program-${program.slug}.png`}
                      alt={program.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-deep-blue/10" />
                  </div>

                  {/* Card Content */}
                  <div className="bg-white p-6 rounded-b-lg shadow-sm">
                    <div className={`mb-4 ${iconColors[program.icon as keyof typeof iconColors]}`}>
                      {/* Icon would go here - you can use lucide-react icons */}
                      <div className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl text-deep-blue mb-3">
                      {program.title}
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <Link 
                      href={`/programs/${program.slug}`}
                      className="inline-flex items-center text-rich-green small-caps text-sm hover:underline"
                    >
                      Learn more
                      <span className="ml-2 text-lg leading-none">→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 4: Core Values - Image Gallery */}
      <section className="py-24 bg-white">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="small-caps text-rich-green mb-4">
              WHAT WE BELIEVE
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light">
              Our Core Values
            </h2>
          </div>
        </Container>

        {/* Full-width Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5">
          {CORE_VALUES.map((value, index) => {
            const overlayColors = {
              'Family Preservation': 'bg-deep-blue/30',
              'Inclusivity': 'bg-rich-green/30',
              'Stewardship': 'bg-vibrant-pink/20',
              'Respect for Nature': 'bg-rich-green/30',
              'Research & Innovation': 'bg-deep-blue/30'
            };

            return (
              <div key={index} className="relative aspect-square group overflow-hidden">
                <Image
                  src={`/images/value-${value.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                  alt={value.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="20vw"
                />
                <div className={`absolute inset-0 ${overlayColors[value.name as keyof typeof overlayColors]} transition-opacity duration-500 group-hover:opacity-0`} />
                
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <div>
                    <h3 className="font-serif text-2xl text-white mb-2 drop-shadow-lg">
                      {value.name}
                    </h3>
                    <p className="text-white/90 text-sm max-w-[200px] mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {value.shortDescription}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 5: Geographic Reach */}
      <section className="py-24 bg-warm-sand">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Map Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/kenya-map-golden-hour.jpg"
                alt="Artistic map of Kenya at golden hour"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* County Dots */}
              <div className="absolute inset-0">
                {/* These would be positioned absolutely in a real implementation */}
                {/* For demo purposes, we're showing the concept */}
                <div className="absolute top-1/4 left-1/3">
                  <div className="relative group">
                    <div className="w-3 h-3 bg-rich-green rounded-full shadow-lg shadow-rich-green/50 animate-pulse" />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-deep-blue text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Kiambu
                    </span>
                  </div>
                </div>
                {/* More dots would be added here */}
              </div>
            </div>

            {/* Right Column - Text + CTA */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light mb-4">
                Reaching Children Across Kenya
              </h2>
              <p className="small-caps text-rich-green mb-6">
                10 Counties · Expanding
              </p>

              {/* County List Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {COUNTIES.map((county, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                    <span className="text-deep-blue">{county}</span>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="border-t border-soft-gray/20 pt-8">
                <h3 className="font-serif text-2xl text-deep-blue mb-3">
                  Join Us
                </h3>
                <p className="text-charcoal mb-6 leading-relaxed">
                  Whether you&apos;re a donor, volunteer, or partner organization, 
                  your support helps us create lasting change for children across Kenya.
                </p>
                <Button variant="outline-pink">
                  Get Involved Today
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}