import Image from 'next/image';
import Link from 'next/link';
import Container from '@/app/components/shared/Container';
import Button from '@/app/components/shared/Button';
import { CONTACT_INFO } from '@/app/lib/Constants';
import ContactForm from './ContactPage';


export const metadata = {
  title: 'Contact Us | JACE for Children International',
  description: 'Get in touch with JACE for Children International. Reach out for inquiries, partnerships, or to learn more about our work in Kenya.',
};

export default function ContactPage() {
  const contactMethods = [
    {
      title: 'Email Us',
      details: CONTACT_INFO.email,
      description: 'For general inquiries, partnerships, and questions',
      icon: '✉️',
      action: `mailto:${CONTACT_INFO.email}`
    },
    {
      title: 'Call Us',
      details: CONTACT_INFO.phone,
      description: 'Monday-Friday, 8:00 AM - 5:00 PM EAT',
      icon: '📞',
      action: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`
    },
    {
      title: 'Visit Us',
      details: CONTACT_INFO.address,
      description: 'Township Along Garissa Rd Ananas Mall, Kiambu, 01000, KE',
      icon: '📍',
      action: '#'
    }
  ];

  const faqs = [
    {
      question: 'How can I support JACE\'s work?',
      answer: 'You can donate, become a partner organization, or volunteer your skills. Visit our Get Involved page for more information on all the ways you can make a difference.'
    },
    {
      question: 'Do you accept international donations?',
      answer: 'Yes, we welcome support from anywhere in the world. All donations go directly to our programs in Kenya. International transfers can be arranged through our bank account details available upon request.'
    },
    {
      question: 'Can I sponsor a specific child?',
      answer: 'We focus on family-based care rather than individual sponsorship. Your support helps strengthen families so children can stay with their loved ones, which research shows leads to better outcomes for children.'
    },
    {
      question: 'How do I partner with JACE?',
      answer: 'We collaborate with NGOs, government agencies, faith-based organizations, and community groups. Contact our partnerships team at partnerships@jacechildren.org to explore collaboration opportunities.'
    },
    {
      question: 'Where do you operate in Kenya?',
      answer: 'We currently work in 10 counties: Kiambu, Kirinyaga, Murang\'a, Nyeri, Nyandarua, Laikipia, Machakos, Kakamega, Kitui, and Embu. We have plans to expand to additional counties in the coming years.'
    },
    {
      question: 'How can I receive updates about your work?',
      answer: 'Subscribe to our newsletter below or follow us on social media. We share regular updates about our programs, impact stories, and ways to get involved.'
    }
  ];

  return (
    <>
      {/* SECTION 1: Hero — Let's Connect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-family.png"
            alt="Community gathering in Kenya, people connecting"
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
              GET IN TOUCH
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 max-w-4xl drop-shadow-sm">
              We&apos;d Love to Hear From You
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Whether you have questions, want to partner, or simply want to learn more about our work—reach out. Your voice matters.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Send a Message
              </Button>
              <Button variant="secondary" size="lg">
                Call Us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: Contact Information — How to Reach Us */}
      <section className="py-24 bg-ivory">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="small-caps text-rich-green mb-4">
              REACH OUT
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light mb-4">
              Connect With Our Team
            </h2>
            <div className="w-20 h-px bg-vibrant-pink/30 mx-auto" />
          </div>

          {/* Contact Methods Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group block"
                target={method.title === 'Visit Us' ? '_self' : '_blank'}
                rel={method.title === 'Visit Us' ? '' : 'noopener noreferrer'}
              >
                <div className="text-4xl mb-4">
                  {method.icon}
                </div>
                <h3 className="font-serif text-2xl text-deep-blue mb-2">
                  {method.title}
                </h3>
                <p className="text-charcoal text-lg font-medium mb-2">
                  {method.details}
                </p>
                <p className="text-soft-gray text-sm leading-relaxed">
                  {method.description}
                </p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 3: Contact Form — Send a Message */}
      <section className="py-24 bg-warm-sand">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image */}
            <div className="relative rounded-lg overflow-hidden sticky top-24">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/hero-family.png"
                  alt="Person writing a letter, thoughtful and focused"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Column - Form (Client Component) */}
            <ContactForm />
          </div>
        </Container>
      </section>

      {/* SECTION 4: Frequently Asked Questions */}
      <section className="py-24 bg-white">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="small-caps text-rich-green mb-4">
              FAQ
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light mb-4">
              Common Questions
            </h2>
            <div className="w-20 h-px bg-vibrant-pink/30 mx-auto" />
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-3 mb-3">
                  <span className="w-1.5 h-1.5 bg-rich-green rounded-full mt-2 flex-shrink-0" />
                  <h3 className="font-serif text-xl text-deep-blue font-light leading-tight">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-charcoal/80 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 5: Office Location — Map + Visit Information */}
      <section className="py-24 bg-warm-sand">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Map/Image */}
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/kenya-savanna-golden-hour.png"
                  alt="Artistic map showing Nairobi, Kenya"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Decorative Location Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-vibrant-pink rounded-full animate-pulse shadow-lg shadow-vibrant-pink/50" />
                </div>
              </div>
            </div>

            {/* Right Column - Visit Information */}
            <div>
              <p className="small-caps text-rich-green mb-4">
                VISIT US
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light mb-6 leading-tight">
                We&apos;d Love to Welcome You
              </h2>
              <div className="w-16 h-px bg-vibrant-pink/20 mb-6" />
              
              <div className="space-y-6">
                <div>
                  <p className="text-charcoal text-lg font-medium mb-2">Address</p>
                  <p className="text-charcoal/80 leading-relaxed">
                    JACE for Children International Headquarters<br />
                    {CONTACT_INFO.fullAddress}
                  </p>
                </div>

                <div>
                  <p className="text-charcoal text-lg font-medium mb-2">Office Hours</p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Monday-Friday, 8:00 AM - 5:00 PM EAT<br />
                    <span className="text-soft-gray text-sm">(by appointment only)</span>
                  </p>
                </div>

                <div className="bg-white/50 rounded-lg p-6 border border-white">
                  <p className="text-charcoal text-sm leading-relaxed mb-4">
                    Please contact us before visiting to schedule an appointment. This ensures we have the right team members available to assist you.
                  </p>
                  <Link
                    href="mailto:info@jacechildren.org"
                    className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-vibrant-pink text-vibrant-pink hover:bg-vibrant-pink hover:bg-opacity-10 focus:ring-vibrant-pink px-6 py-3 text-base"
                  >
                    Schedule a Visit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}