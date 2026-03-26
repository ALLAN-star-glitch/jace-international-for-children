import Image from 'next/image';
import Link from 'next/link';
import Container from '@/app/components/shared/Container';
import Button from '@/app/components/shared/Button';

export default function GetInvolvedPage() {
  const alternativeWays = [
    {
      title: 'Fundraise for Us',
      description: 'Create your own fundraising campaign. Whether it\'s a birthday, marathon, or community event—turn your passion into support for children.',
      icon: '🎉',
      link: '/fundraise'
    },
    {
      title: 'Corporate Giving',
      description: 'Engage your company through matching gifts, workplace giving, or cause-related marketing. We\'ll work with your CSR team.',
      icon: '🏢',
      link: '/corporate'
    },
    {
      title: 'Legacy Giving',
      description: 'Leave a lasting impact through your will or estate. Planned gifts ensure children in Kenya have hope for generations to come.',
      icon: '🌳',
      link: '/legacy'
    }
  ];

  const testimonials = [
    {
      quote: '"Supporting JACE has been the most meaningful investment our company has made. Seeing children reunited with their families—that\'s impact we can all be proud of."',
      attribution: 'Corporate Partner, Nairobi',
      image: '/testimonial-partner.png',
      imageAlt: 'Corporate partner representative'
    },
    {
      quote: '"The training and support we received changed our family forever. Now our children are home, safe, and thriving. We are so grateful."',
      attribution: 'Mary, Mother of two, Kiambu County',
      image: '/testimonial-mother.png',
      imageAlt: 'Mother with her children'
    }
  ];

  return (
    <>
      {/* SECTION 1: Hero — Join the Movement */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/about-hero-team.png"
            alt="Community members working together in Kenya"
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
              JOIN THE MOVEMENT
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 max-w-4xl drop-shadow-sm">
              Your Support Changes Lives
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Every act of generosity—whether time, talent, or treasure—helps build a world where every child belongs in a family.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Donate Now
              </Button>
              <Button variant="secondary" size="lg">
                Explore Ways to Help
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: Ways to Give — Donate */}
      <section className="py-24 bg-ivory">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <p className="small-caps text-rich-green mb-4">
                WAY ONE
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light mb-6 leading-tight">
                Make a Donation
              </h2>
              <div className="w-16 h-px bg-vibrant-pink/20 mb-6" />
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                Your financial support goes directly to strengthening families, protecting children, and building community capacity. Every contribution, no matter the size, makes a meaningful difference.
              </p>
              
              {/* Impact Examples */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">$50 provides parenting skills training for one family</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">$100 supports a child&apos;s safe reintegration into family care</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">$500 trains 10 community child protection volunteers</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">$1,000 strengthens a family&apos;s economic resilience</span>
                </div>
              </div>

              <Button variant="primary" size="lg">
                Donate Today
              </Button>
            </div>

            {/* Right Column - Image */}
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/about-stat-families.png"
                  alt="Family receiving support, smiling with hope"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: Ways to Give — Partner Organizations */}
      <section className="py-24 bg-warm-sand">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative rounded-lg overflow-hidden order-1 md:order-1">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/about-journey-founders.png"
                  alt="Organizational collaboration meeting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="order-2 md:order-2">
              <p className="small-caps text-vibrant-pink mb-4">
                WAY TWO
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light mb-6 leading-tight">
                Become a Partner
              </h2>
              <div className="w-16 h-px bg-vibrant-pink/20 mb-6" />
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                Join a network of organizations committed to family-centered care. We collaborate with NGOs, government agencies, faith-based organizations, and community groups to strengthen child protection systems across Kenya.
              </p>
              
              {/* Partnership Benefits */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">Training and capacity building support</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">Technical assistance and policy guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">Network and knowledge sharing opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">Joint advocacy and research initiatives</span>
                </div>
              </div>

              <Button variant="outline-pink" size="lg">
                Explore Partnership
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: Ways to Give — Volunteer */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <p className="small-caps text-rich-green mb-4">
                WAY THREE
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light mb-6 leading-tight">
                Volunteer Your Skills
              </h2>
              <div className="w-16 h-px bg-vibrant-pink/20 mb-6" />
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                Share your time, expertise, and passion. From professional skills to hands-on support, volunteers are essential to our mission. Whether you&apos;re a social worker, fundraiser, communicator, or simply someone who cares—there&apos;s a place for you.
              </p>
              
              {/* Volunteer Opportunities */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">Social work and counseling support</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">Communications and storytelling</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">Fundraising and events</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">Administrative and operational support</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">Research and data analysis</span>
                </div>
              </div>

              <Button variant="outline-pink" size="lg">
                Volunteer Today
              </Button>
            </div>

            {/* Right Column - Image */}
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/value-family-preservation.png"
                  alt="Volunteers engaged in meaningful work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5: Ways to Give — Other Ways to Support */}
      <section className="py-24 bg-warm-sand">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="small-caps text-vibrant-pink mb-4">
              MORE WAYS TO HELP
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light mb-4">
              Beyond Giving
            </h2>
            <div className="w-20 h-px bg-vibrant-pink/30 mx-auto" />
          </div>

          {/* Alternative Ways Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {alternativeWays.map((way, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="text-4xl mb-4">
                  {way.icon}
                </div>
                <h3 className="font-serif text-2xl text-deep-blue mb-3">
                  {way.title}
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  {way.description}
                </p>
                <Link 
                  href={way.link}
                  className="inline-flex items-center text-rich-green small-caps text-sm hover:underline group"
                >
                  Learn more
                  <span className="ml-2 text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 6: Impact Stories — Why Your Support Matters */}
      <section className="py-24 bg-white">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="small-caps text-rich-green mb-4">
              STORIES OF HOPE
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light mb-4">
              Why Your Support Matters
            </h2>
            <div className="w-20 h-px bg-vibrant-pink/30 mx-auto" />
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-warm-sand rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-8">
                  <p className="font-serif text-xl md:text-2xl text-deep-blue italic mb-6 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <p className="small-caps text-rich-green">
                    {testimonial.attribution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 7: Call to Action — Take the Next Step */}
      <section className="py-24 bg-ivory">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="small-caps text-vibrant-pink mb-4">
              READY TO HELP?
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light mb-6">
              Choose Your Way to Make a Difference
            </h2>
            <div className="w-20 h-px bg-vibrant-pink/30 mx-auto mb-8" />
            <p className="text-charcoal text-lg leading-relaxed mb-12">
              Whether you donate, partner, volunteer, or fundraise—your support helps children in Kenya grow up in safe, loving families. Join us today.
            </p>
            
            {/* Three Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg">
                Donate Now
              </Button>
              <Button variant="outline-pink" size="lg">
                Partner With Us
              </Button>
              <Button variant="outline-pink" size="lg">
                Volunteer
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}