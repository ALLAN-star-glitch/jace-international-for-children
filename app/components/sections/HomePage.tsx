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
        {/* Background Image with Professional Left-Side Gradient Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/about-stat-families.png"
            alt="Kenyan family laughing together in golden light"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Professional left-side gradient overlay - from dark to transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-deep-blue/30 to-transparent" />
        </div>

        {/* Content */}
        <Container className="relative z-10 text-white">
          <div className="max-w-3xl">
            <p className="text-sm sm:text-base tracking-widest text-vibrant-pink mb-4 font-semibold">
              MAKING A DIFFERENCE
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight mb-4 sm:mb-6 max-w-4xl drop-shadow-sm">
              A World Where Every Child Thrives in a Nurturing Family
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
              We strengthen families and communities across Kenya to ensure every child is safe, 
              loved, and supported to reach their full potential.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
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
      <section className="py-16 sm:py-20 md:py-24 bg-ivory">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Mission Text */}
            <div>
              <p className="text-sm sm:text-base tracking-widest text-rich-green mb-3 sm:mb-4 font-semibold">
                OUR MISSION
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-deep-blue font-light mb-4 sm:mb-6 leading-tight">
                Building Sustainable, Family-Centered Care
              </h2>
              <div className="w-16 h-px bg-vibrant-pink/20 mb-4 sm:mb-6" />
              <p className="text-base sm:text-lg md:text-xl text-charcoal leading-relaxed">
                JACE for Children International is committed to transitioning children from 
                institutional care to family-based support. We strengthen families, protect 
                children from harm, and empower organizations through training and capacity 
                building to ensure lasting change in the lives of children across Kenya.
              </p>
            </div>

            {/* Right Column - Image with Stats Overlay */}
            <div className="relative mt-8 md:mt-0">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
                <Image
                  src="/social-worker-family.png"
                  alt="Social worker with a Kenyan family"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Stats Overlay Card - Responsive positioning */}
              <div className="absolute -bottom-4 sm:-bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {IMPACT_STATS.map((stat, index) => (
                    <div key={index}>
                      <div className={`font-serif text-xl sm:text-2xl md:text-3xl ${
                        index % 2 === 0 ? 'text-deep-blue' : 'text-rich-green'
                      }`}>
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm tracking-wider text-soft-gray uppercase font-semibold">
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
      <section className="py-16 sm:py-20 md:py-24 bg-warm-sand">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-deep-blue font-light mb-3 sm:mb-4">
              How We Create Lasting Change
            </h2>
            <div className="w-20 h-px bg-vibrant-pink/30 mx-auto" />
          </div>

          {/* Program Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PROGRAM_AREAS.map((program, index) => {
              const iconColors = {
                shield: 'text-vibrant-pink',
                home: 'text-rich-green',
                book: 'text-deep-blue'
              };
              
              return (
                <div key={index} className="group">
                  {/* Card Image */}
                  <div className="relative h-48 sm:h-56 md:h-64 rounded-t-lg overflow-hidden">
                    <Image
                      src={`/program-${program.slug}.png`}
                      alt={program.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-deep-blue/10" />
                  </div>

                  {/* Card Content */}
                  <div className="bg-white p-5 sm:p-6 rounded-b-lg shadow-sm">
                    <div className={`mb-3 sm:mb-4 ${iconColors[program.icon as keyof typeof iconColors]}`}>
                      {/* Icon would go here - you can use lucide-react icons */}
                      <div className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-deep-blue mb-2 sm:mb-3">
                      {program.title}
                    </h3>
                    <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed mb-3 sm:mb-4">
                      {program.description}
                    </p>
                    <Link 
                      href={`/programs/${program.slug}`}
                      className="inline-flex items-center text-rich-green text-sm sm:text-base font-semibold tracking-wider uppercase hover:underline"
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

      {/* SECTION 4: Core Values - Advanced Grid Layout */}
<section className="py-16 sm:py-20 md:py-24 bg-white">
  <Container>
    {/* Section Header */}
    <div className="text-center mb-12 sm:mb-16">
      <p className="text-sm sm:text-base tracking-widest text-rich-green mb-3 sm:mb-4 font-semibold">
        WHAT WE BELIEVE
      </p>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-deep-blue font-light">
        Our Core Values
      </h2>
      <div className="w-20 h-px bg-vibrant-pink/30 mx-auto mt-4" />
    </div>
  </Container>

  {/* Advanced Grid Layout with Different Spans */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] gap-6">
      {CORE_VALUES.map((value, index) => {
        const overlayColors = {
          'Family Preservation': 'bg-deep-blue/40',
          'Inclusivity': 'bg-rich-green/40',
          'Stewardship': 'bg-vibrant-pink/30',
          'Respect for Nature': 'bg-rich-green/40',
          'Research & Innovation': 'bg-deep-blue/40'
        };
        
        // Define different spans for each card to create interesting layout
        const spans = [
          'md:col-span-2 md:row-span-2', // Large feature card
          'md:col-span-1 md:row-span-1', // Regular
          'md:col-span-1 md:row-span-1', // Regular
          'md:col-span-1 md:row-span-2', // Tall
          'md:col-span-2 md:row-span-1', // Wide
        ];

        return (
          <div 
            key={index} 
            className={`relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${spans[index % spans.length]}`}
          >
            <Image
              src={`/value-${value.name.toLowerCase().replace(/\s+/g, '-')}.png`}
              alt={value.imageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index < 3}
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-${overlayColors[value.name as keyof typeof overlayColors]} to-transparent transition-opacity duration-500 group-hover:opacity-80`} />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
              <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-white mb-2 drop-shadow-lg font-medium">
                  {value.name}
                </h3>
                <div className="w-12 h-0.5 bg-vibrant-pink mx-auto mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="text-white/95 text-sm sm:text-base max-w-[250px] mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {value.shortDescription}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* SECTION 5: Geographic Reach */}
      <section className="py-16 sm:py-20 md:py-24 bg-warm-sand">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Map Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/kenya-map-golden-hour.png"
                alt="Artistic map of Kenya at golden hour"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* County Dots - Hidden on mobile, visible on larger screens */}
              <div className="hidden md:block absolute inset-0">
                <div className="absolute top-1/4 left-1/3">
                  <div className="relative group">
                    <div className="w-3 h-3 bg-rich-green rounded-full shadow-lg shadow-rich-green/50 animate-pulse" />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-deep-blue text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Kiambu
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Text + CTA */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-deep-blue font-light mb-3 sm:mb-4">
                Reaching Children Across Kenya
              </h2>
              <p className="text-sm sm:text-base tracking-widest text-rich-green mb-4 sm:mb-6 font-semibold uppercase">
                10 Counties · Expanding
              </p>

              {/* County List Grid - Responsive columns */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                {COUNTIES.map((county, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-rich-green rounded-full flex-shrink-0" />
                    <span className="text-sm sm:text-base text-deep-blue">{county}</span>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="border-t border-soft-gray/20 pt-6 sm:pt-8">
                <h3 className="font-serif text-xl sm:text-2xl text-deep-blue mb-2 sm:mb-3">
                  Join Us
                </h3>
                <p className="text-sm sm:text-base text-charcoal mb-4 sm:mb-6 leading-relaxed">
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