import Image from 'next/image';
import Link from 'next/link';
import Container from '@/app/components/shared/Container';
import Button from '@/app/components/shared/Button';
import { PROGRAM_AREAS } from '@/app/lib/Constants';

export default function ProgramsPage() {
  // Manual program data with extended details for the page
  const programs = PROGRAM_AREAS;
  
  const approachCards = [
    {
      title: 'Assessment & Understanding',
      description: 'We begin by understanding community needs, family dynamics, and child protection gaps through participatory assessment.',
      icon: '🔍',
      color: '#FF0066'
    },
    {
      title: 'Collaborative Design',
      description: 'Working with communities, partners, and families to design contextually appropriate interventions.',
      icon: '🤝',
      color: '#009933'
    },
    {
      title: 'Implementation & Monitoring',
      description: 'Delivering programs with continuous learning, adaptation, and impact measurement.',
      icon: '📊',
      color: '#0000FF'
    }
  ];

  const impactStories = [
    {
      quote: '"Now my children have a future."',
      story: 'After receiving parenting skills training and economic support through JACE, Mary was able to bring her children home from an institution and build a stable life for them.',
      location: 'Kiambu County',
      image: '/story-mary.png',
      imageAlt: 'Mother with her two children smiling'
    },
    {
      quote: '"We are learning to protect our children."',
      story: 'Through JACE\'s community child protection training, local volunteers now identify at-risk children and provide family support before separation becomes necessary.',
      location: 'Kakamega County',
      image: '/story-community.png',
      imageAlt: 'Community training session'
    },
    {
      quote: '"Every child deserves safety."',
      story: 'With JACE\'s support, our organization developed comprehensive child safeguarding policies that now protect thousands of children in our programs.',
      location: 'Machakos County',
      image: '/story-social-worker.png',
      imageAlt: 'Social worker with a child'
    }
  ];

  return (
    <>
      {/* SECTION 1: Hero - Our Approach */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/about-stat-children.png"
            alt="Children participating in JACE programs in Kenya"
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
              OUR PROGRAMS
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 max-w-4xl drop-shadow-sm">
              Building Stronger Families, Protecting Every Child
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Our holistic approach addresses root causes of family separation while building lasting community capacity for child protection.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Support Our Work
              </Button>
              <Button variant="secondary" size="lg">
                Explore Programs
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: Our Programs — Three Pillars */}
      <section className="py-24 bg-ivory">
        <Container>
          {/* Program 1: Child Safeguarding */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            {/* Left Column - Image */}
            <div className="relative rounded-lg overflow-hidden order-1 md:order-1">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/program-child-safeguarding.png"
                  alt="Child protection worker with children in safe environment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="order-2 md:order-2">
              <p className="small-caps text-vibrant-pink mb-4">
                PROGRAM ONE
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-deep-blue font-light mb-6 leading-tight">
                Child Safeguarding & Protection
              </h2>
              <div className="w-16 h-px bg-vibrant-pink/20 mb-6" />
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                We develop and strengthen community-based child protection systems to prevent abuse, support at-risk children, and ensure safe reintegration. Our approach includes rescue operations, rehabilitation services, and inclusive programs for children with disabilities.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">Community-Based Protection Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">Rescue, Rehabilitation & Reintegration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">Inclusive Programs for Children with Disabilities</span>
                </li>
              </ul>
              <Link 
                href="/programs/child-safeguarding"
                className="inline-flex items-center text-rich-green small-caps text-sm hover:underline"
              >
                Learn more about this program
                <span className="ml-2 text-lg leading-none">→</span>
              </Link>
            </div>
          </div>

          {/* Program 2: Family Strengthening */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            {/* Left Column - Text */}
            <div className="order-2 md:order-1">
              <p className="small-caps text-rich-green mb-4">
                PROGRAM TWO
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-deep-blue font-light mb-6 leading-tight">
                Family Strengthening
              </h2>
              <div className="w-16 h-px bg-vibrant-pink/20 mb-6" />
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                We empower parents and caregivers with skills, economic support, and resources to provide stable, nurturing environments. Our goal is to prevent unnecessary family separation and build resilient home environments where children can thrive.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">Parenting Skills Training</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">Economic Empowerment & Livelihoods</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">Family Preservation Services</span>
                </li>
              </ul>
              <Link 
                href="/programs/family-strengthening"
                className="inline-flex items-center text-rich-green small-caps text-sm hover:underline"
              >
                Learn more about this program
                <span className="ml-2 text-lg leading-none">→</span>
              </Link>
            </div>

            {/* Right Column - Image */}
            <div className="relative rounded-lg overflow-hidden order-1 md:order-2">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/program-family-strengthening.png"
                  alt="Kenyan family together laughing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Program 3: Learning & Development */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative rounded-lg overflow-hidden order-1 md:order-1">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/program-learning-development.png"
                  alt="Training session with social workers and professionals"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="order-2 md:order-2">
              <p className="small-caps text-deep-blue mb-4">
                PROGRAM THREE
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-deep-blue font-light mb-6 leading-tight">
                Learning & Development
              </h2>
              <div className="w-16 h-px bg-vibrant-pink/20 mb-6" />
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                We build the capacity of partner organizations and government agencies through training, research, and technical support. Our work includes developing contextualized learning content, training trainers, and supporting child safeguarding policy development.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">Research & Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">Capacity Building & Training</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                  <span className="text-charcoal/80">Policy Development & Technical Support</span>
                </li>
              </ul>
              <Link 
                href="/programs/learning-development"
                className="inline-flex items-center text-rich-green small-caps text-sm hover:underline"
              >
                Learn more about this program
                <span className="ml-2 text-lg leading-none">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: Our Approach — How We Work */}
      <section className="py-24 bg-warm-sand">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light mb-4">
              How We Create Lasting Change
            </h2>
            <div className="w-20 h-px bg-vibrant-pink/30 mx-auto" />
          </div>

          {/* Approach Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {approachCards.map((card, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="text-4xl mb-4" style={{ color: card.color }}>
                  {card.icon}
                </div>
                <h3 className="font-serif text-2xl text-deep-blue mb-3">
                  {card.title}
                </h3>
                <p className="text-charcoal/80 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 4: Our Impact — Stories of Change */}
      <section className="py-24 bg-white">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="small-caps text-rich-green mb-4">
              STORIES OF CHANGE
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light mb-4">
              Real Families, Real Transformation
            </h2>
            <div className="w-20 h-px bg-vibrant-pink/30 mx-auto" />
          </div>

          {/* Story Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <div key={index} className="group">
                <div className="relative h-64 rounded-t-lg overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-deep-blue/10" />
                </div>
                <div className="bg-warm-sand p-6 rounded-b-lg">
                  <p className="font-serif text-xl text-deep-blue italic mb-4 leading-relaxed">
                    {story.quote}
                  </p>
                  <p className="text-charcoal/80 text-sm leading-relaxed mb-4">
                    {story.story}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-rich-green rounded-full" />
                    <p className="small-caps text-soft-gray text-xs">
                      {story.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 5: Get Involved — Call to Action */}
      <section className="py-24 bg-warm-sand">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/get-involved.png"
                  alt="Volunteers and community members coming together"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Column - Text + CTA */}
            <div>
              <p className="small-caps text-rich-green mb-4">
                JOIN US
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light mb-6 leading-tight">
                Be Part of the Solution
              </h2>
              <div className="w-16 h-px bg-vibrant-pink/20 mb-6" />
              <p className="text-charcoal text-lg leading-relaxed mb-8">
                Your support makes our programs possible. Whether through donation, partnership, or volunteering—you can help us build a world where every child belongs in a family.
              </p>

              {/* Three Ways to Help */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💝</span>
                  <div>
                    <p className="font-medium text-deep-blue">Donate</p>
                    <p className="text-charcoal/70 text-sm">Your gift directly supports children and families</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <p className="font-medium text-deep-blue">Partner</p>
                    <p className="text-charcoal/70 text-sm">Organizations can collaborate with us</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌱</span>
                  <div>
                    <p className="font-medium text-deep-blue">Volunteer</p>
                    <p className="text-charcoal/70 text-sm">Share your skills and time</p>
                  </div>
                </div>
              </div>

              <Button variant="primary" size="lg">
                Get Involved Today
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}