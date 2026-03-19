// Navigation
export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Programs', href: '/programs' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Contact', href: '/contact' },
] as const;

// Counties - Base list
export const COUNTIES = [
  'Kiambu', 'Kirinyaga', 'Murang\'a', 'Nyeri', 'Nyandarua',
  'Laikipia', 'Machakos', 'Kakamega', 'Kitui', 'Embu'
] as const;

// Generate slugs for counties (for sitemap and URLs) - REMOVED 'as const' from here
export const COUNTIES_WITH_SLUGS = COUNTIES.map(county => ({
  name: county,
  slug: county.toLowerCase()
    .replace(/'/g, '')  // Remove apostrophes
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .normalize('NFD') // Handle any special characters
    .replace(/[\u0300-\u036f]/g, ''),
}));

// County metadata for SEO
export const COUNTY_METADATA = {
  kiambu: { 
    name: 'Kiambu', 
    slug: 'kiambu',
    region: 'Central', 
    population: '2.4M', 
    programs: ['Family Strengthening', 'Child Safeguarding'] 
  },
  kirinyaga: { 
    name: 'Kirinyaga', 
    slug: 'kirinyaga',
    region: 'Central', 
    population: '610K', 
    programs: ['Learning & Development', 'Child Safeguarding'] 
  },
  muranga: { 
    name: 'Murang\'a', 
    slug: 'muranga',
    region: 'Central', 
    population: '1.1M', 
    programs: ['Family Strengthening'] 
  },
  nyeri: { 
    name: 'Nyeri', 
    slug: 'nyeri',
    region: 'Central', 
    population: '760K', 
    programs: ['Child Safeguarding', 'Learning & Development'] 
  },
  nyandarua: { 
    name: 'Nyandarua', 
    slug: 'nyandarua',
    region: 'Central', 
    population: '640K', 
    programs: ['Family Strengthening'] 
  },
  laikipia: { 
    name: 'Laikipia', 
    slug: 'laikipia',
    region: 'Rift Valley', 
    population: '520K', 
    programs: ['Child Safeguarding'] 
  },
  machakos: { 
    name: 'Machakos', 
    slug: 'machakos',
    region: 'Eastern', 
    population: '1.4M', 
    programs: ['Family Strengthening', 'Learning & Development'] 
  },
  kakamega: { 
    name: 'Kakamega', 
    slug: 'kakamega',
    region: 'Western', 
    population: '1.9M', 
    programs: ['Child Safeguarding'] 
  },
  kitui: { 
    name: 'Kitui', 
    slug: 'kitui',
    region: 'Eastern', 
    population: '1.1M', 
    programs: ['Family Strengthening'] 
  },
  embu: { 
    name: 'Embu', 
    slug: 'embu',
    region: 'Eastern', 
    population: '610K', 
    programs: ['Learning & Development'] 
  },
} as const;

// Get all counties as an array of objects (useful for mapping)
export const ALL_COUNTIES = Object.values(COUNTY_METADATA);

// Social Media with full URLs
export const SOCIAL_LINKS = [
  { platform: 'Facebook', href: 'https://www.facebook.com/jacechildren', icon: 'facebook' },
  { platform: 'Twitter', href: 'https://twitter.com/jacechildren', icon: 'twitter' },
  { platform: 'LinkedIn', href: 'https://www.linkedin.com/company/jace-children-international', icon: 'linkedin' },
  { platform: 'Instagram', href: 'https://www.instagram.com/jacechildren', icon: 'instagram' },
] as const;

// Stats for Impact Section with detailed descriptions
export const IMPACT_STATS = [
  { number: '45,000+', label: 'Children in Institutions', description: 'Currently living in over 845 institutions across Kenya' },
  { number: '10', label: 'Counties of Operation', description: 'Active programs across Kenya with expansion plans' },
  { number: '845+', label: 'Partner Organizations', description: 'Working with government and civil society' },
  { number: '2032', label: 'National Care Reform Target', description: 'Supporting Kenya\'s transition to family-based care' },
] as const;

// Program Areas with SEO-friendly descriptions
export const PROGRAM_AREAS = [
  {
    title: 'Child Safeguarding',
    shortTitle: 'Safeguarding',
    description: 'Developing community-based systems to protect children from abuse, rescue those at risk, and ensure safe reintegration.',
    longDescription: 'We work with communities to establish child protection systems that prevent abuse, support at-risk children, and ensure safe family reintegration. Our approach includes rescue operations, rehabilitation services, and inclusive programs for children with disabilities.',
    icon: 'shield',
    color: '#FF0066' as const,
    imageAlt: 'Social worker providing care and protection to a child in Kenya',
    slug: 'child-safeguarding',
    features: ['Community-Based Protection', 'Rescue & Rehabilitation', 'Disability Inclusion', 'Case Management']
  },
  {
    title: 'Family Strengthening',
    shortTitle: 'Family',
    description: 'Empowering parents with skills, economic support, and resources to provide stable, nurturing environments.',
    longDescription: 'We strengthen families as the primary protection for children through parenting programs, economic empowerment, and community support systems. Our goal is to prevent unnecessary family separation and build resilient home environments.',
    icon: 'home',
    color: '#009933' as const,
    imageAlt: 'Kenyan family together in their home, smiling',
    slug: 'family-strengthening',
    features: ['Parenting Skills', 'Economic Empowerment', 'Community Support', 'Family Preservation']
  },
  {
    title: 'Learning & Development',
    shortTitle: 'Learning',
    description: 'Building the capacity of partners and governments through training, research, and policy development.',
    longDescription: 'We enhance the skills of organizations and government agencies through training, research, and technical support. Our work includes developing contextualized learning content, training trainers, and supporting child safeguarding policy development.',
    icon: 'book',
    color: '#0000FF' as const,
    imageAlt: 'Training session for social workers and child protection professionals',
    slug: 'learning-development',
    features: ['Research', 'Capacity Building', 'Policy Development', 'Technical Support']
  }
] as const;

// Core Values with descriptions
export const CORE_VALUES = [
  {
    name: 'Family Preservation',
    description: 'Keeping families together is our core priority. We believe every child deserves to grow up in a loving family environment.',
    shortDescription: 'Keeping families together',
    icon: 'users',
    color: '#0000FF' as const,
    imageAlt: 'Multi-generation Kenyan family smiling together'
  },
  {
    name: 'Inclusivity',
    description: 'Every child deserves equal opportunities regardless of ability, background, or circumstance. We champion inclusive care for all children.',
    shortDescription: 'Equal opportunities for all',
    icon: 'circle',
    color: '#009933' as const,
    imageAlt: 'Children with diverse abilities playing together'
  },
  {
    name: 'Stewardship',
    description: 'Responsible management of resources and trust placed in us by communities, donors, and partners. We are accountable for every child\'s wellbeing.',
    shortDescription: 'Responsible resource management',
    icon: 'hands',
    color: '#FF0066' as const,
    imageAlt: 'Community members caring for children'
  },
  {
    name: 'Respect for Nature',
    description: 'Environmental consciousness in child protection. We promote environmentally friendly approaches to family preservation and child wellbeing.',
    shortDescription: 'Environmental consciousness',
    icon: 'leaf',
    color: '#009933' as const,
    imageAlt: 'Children playing and learning in nature'
  },
  {
    name: 'Research & Innovation',
    description: 'Evidence-based approaches to family care. We continuously learn, adapt, and innovate to improve outcomes for children.',
    shortDescription: 'Evidence-based approaches',
    icon: 'lightbulb',
    color: '#0000FF' as const,
    imageAlt: 'Training workshop with professionals'
  }
] as const;

// Contact Information
export const CONTACT_INFO = {
  address: 'Nairobi, Kenya',
  fullAddress: 'Nairobi, Kenya (Headquarters)',
  phone: '+254 700 000000',
  email: 'info@jacechildren.org',
  hours: 'Monday-Friday, 8:00 AM - 5:00 PM EAT',
} as const;

// Organization metadata for SEO
export const ORGANIZATION = {
  name: 'JACE for Children International',
  shortName: 'JACE Children',
  founded: '2020',
  registrationNumber: 'XXXXX',
  taxId: 'XXXXX',
  mission: 'To provide holistic child & family focused interventions through building sustainable community-based care systems in partnership with like-minded stakeholders.',
  vision: 'A World where every child thrives in communities that nurture holistic growth and development',
} as const;

// Type exports for TypeScript support
export type County = typeof ALL_COUNTIES[number];
export type ProgramArea = typeof PROGRAM_AREAS[number];
export type CoreValue = typeof CORE_VALUES[number];
export type NavigationItem = typeof NAVIGATION_ITEMS[number];

// If you need COUNTIES_WITH_SLUGS to be strictly typed, you can define a type for it
export type CountyWithSlug = {
  name: typeof COUNTIES[number];
  slug: string;
};

// Now COUNTIES_WITH_SLUGS is properly typed as CountyWithSlug[]