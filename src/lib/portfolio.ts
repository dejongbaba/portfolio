export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  company: string;
  image: string;
  accent: string;
  summary: string;
  role: string;
  duration: string;
  liveUrl: string;
  problem: string;
  approach: string[];
  outcome: string[];
  reflection: string;
}

export interface Article {
  slug: string;
  title: string;
  topic: string;
  year: string;
  summary: string;
  content: string;
  externalUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'sendbox-delivery',
    title: 'Sendbox Delivery',
    category: 'Logistics Platform',
    year: '2022-2024',
    company: 'Sendbox',
    image: '/assets/images/banner-one.jpg',
    accent: '#d78b53',
    summary: 'Multi-region delivery tooling for merchants moving local and international shipments.',
    role: 'Backend and frontend engineering',
    duration: '18 months',
    liveUrl: 'https://business.sendbox.co/',
    problem:
      'Merchants needed a faster way to quote, book, and track deliveries across different carriers without losing operational visibility.',
    approach: [
      'Designed REST API surfaces that made shipping quotes, pickup requests, and delivery status predictable for web clients.',
      'Improved response paths around high-frequency delivery actions and made the frontend resilient to carrier-specific edge cases.',
      'Kept the interface focused on decisions merchants repeat daily: price, destination, status, and next action.',
    ],
    outcome: [
      'Reduced API response time on key flows by roughly 75%.',
      'Supported higher conversion through clearer backend-driven delivery states.',
      'Gave internal teams a stronger platform for future carrier integrations.',
    ],
    reflection:
      'The durable lesson was that logistics products need calm interfaces over clever ones. The best engineering work made messy carrier behavior feel boring to the merchant.',
  },
  {
    slug: 'sendbox-marketplace',
    title: 'Sendbox Marketplace',
    category: 'Commerce and Logistics',
    year: '2023',
    company: 'Sendbox',
    image: '/assets/images/banner-two.jpg',
    accent: '#7ba0d8',
    summary: 'A multi-vendor commerce experience connected to payments and fulfillment rails.',
    role: 'Full-stack engineering',
    duration: '9 months',
    liveUrl: 'https://marketplace.sendbox.co/',
    problem:
      'Small businesses needed a storefront that did not treat fulfillment as an afterthought. Orders, payments, and shipping had to work as one flow.',
    approach: [
      'Composed reusable product, vendor, order, and delivery primitives across the client.',
      'Connected commerce states to delivery states so merchants could understand what needed attention.',
      'Balanced marketplace browsing with practical merchant operations.',
    ],
    outcome: [
      'Created a stronger storefront path for Sendbox merchants.',
      'Reduced friction between checkout and fulfillment handoff.',
      'Established reusable UI and API patterns for later commerce surfaces.',
    ],
    reflection:
      'This project reinforced how much trust is carried by small states: loading, paid, packed, shipped, delayed. Each one needed to be legible.',
  },
  {
    slug: 'backup-cash',
    title: 'Backup Cash',
    category: 'Savings Product',
    year: '2024',
    company: 'Personal',
    image: '/assets/images/backupcash.png',
    accent: '#7ec9b1',
    summary: 'A savings platform focused on discipline, clarity, and confidence around money.',
    role: 'Product engineering',
    duration: 'Personal build',
    liveUrl: 'https://www.mybackupcash.com/',
    problem:
      'People often want better savings habits, but the product experience around deposits, interest, and goals can feel abstract or intimidating.',
    approach: [
      'Structured the experience around visible progress and simple account actions.',
      'Built a frontend that makes financial state changes feel deliberate and reviewable.',
      'Kept the copy direct so users can understand what is happening with their money.',
    ],
    outcome: [
      'Shipped a working savings experience with a clear product proposition.',
      'Created a reusable foundation for future wallet and goal mechanics.',
      'Improved my own product judgment around trust-heavy interfaces.',
    ],
    reflection:
      'Financial products are mostly a design problem of confidence. Every interaction should answer: what happened, why, and what can I do next?',
  },
  {
    slug: 'payfasta',
    title: 'Payfasta',
    category: 'Supply Chain Fintech',
    year: '2024',
    company: 'Personal',
    image: '/assets/images/patek.png',
    accent: '#b8a7ff',
    summary: 'Vendor-credit tooling for businesses operating across multiple markets.',
    role: 'Full-stack engineering',
    duration: 'Personal build',
    liveUrl: 'https://patek.netlify.app/',
    problem:
      'Businesses managing vendors need credit workflows that feel clear, auditable, and fast enough for daily operations.',
    approach: [
      'Mapped the product around vendor profiles, credit status, and transaction review.',
      'Built a polished web interface that communicates risk and action without overwhelming the user.',
      'Explored multi-country product constraints around currency, vendor identity, and approval states.',
    ],
    outcome: [
      'Delivered a focused product prototype for supply-chain finance workflows.',
      'Established reusable patterns for operational dashboards.',
      'Clarified how credit products should reveal complexity gradually.',
    ],
    reflection:
      'The strongest operational tools respect attention. They show enough detail for decisions, then get out of the way.',
  },
  {
    slug: 'kobo-safe',
    title: 'Kobo Safe',
    category: 'Fleet Safety',
    year: '2020-2022',
    company: 'Kobo360',
    image: '/assets/images/kobosafe.png',
    accent: '#c8c8c8',
    summary: 'A safety management surface for logistics teams operating fleets across West Africa.',
    role: 'Frontend and platform engineering',
    duration: '2 years',
    liveUrl: 'https://www.safe.kobo360.com/',
    problem:
      'Fleet operators needed better visibility into safety events, documentation, and operational risk across distributed teams.',
    approach: [
      'Built responsive dashboard surfaces for high-density operational data.',
      'Created shared frontend patterns to improve consistency across engineering teams.',
      'Integrated backend data into views designed for scanning and escalation.',
    ],
    outcome: [
      'Improved engineering onboarding through shared libraries and patterns.',
      'Supported safer, faster fleet operations with clearer dashboards.',
      'Helped turn fragmented safety data into a product surface teams could actually use.',
    ],
    reflection:
      'The work taught me to design for people under pressure. In operations software, clarity is a performance feature.',
  },
  {
    slug: 'techfront',
    title: 'Techfront',
    category: 'Developer Education',
    year: '2025',
    company: 'Personal',
    image: '/assets/images/buildco.png',
    accent: '#f2b98d',
    summary: 'A learning platform for engineers built around courses, mentorship, and community.',
    role: 'Founder and product engineer',
    duration: 'Ongoing',
    liveUrl: 'https://techfrontio-frontend.onrender.com/',
    problem:
      'Developers need learning environments that connect technical content with mentorship, accountability, and real career context.',
    approach: [
      'Designed the product around cohorts, guided learning, and practical progression.',
      'Built a frontend that can support course discovery, community touchpoints, and future learning dashboards.',
      'Kept the brand warm and serious, balancing ambition with approachability.',
    ],
    outcome: [
      'Created a foundation for a broader developer education business.',
      'Defined a flexible interface direction for learning and community modules.',
      'Turned a personal teaching thesis into a shippable product surface.',
    ],
    reflection:
      'Techfront is the project where my engineering and mentorship instincts meet. The product has to feel like momentum, not homework.',
  },
];

import reactMobxArticle from '@/content/articles/react-mobx-state-management.md?raw';
import functionalJsArticle from '@/content/articles/functional-programming-javascript.md?raw';
import vueAuthArticle from '@/content/articles/vue-authorization-access-control.md?raw';
import sqlArticle from '@/content/articles/sql-server-management-studio.md?raw';
import tailwindBlurArticle from '@/content/articles/tailwind-v4-shadcn-blur-fade.md?raw';

export const articles: Article[] = [
  {
    slug: 'tailwind-v4-shadcn-blur-fade',
    title: "Migrating to Tailwind v4 and adopting shadcn's blur-fade",
    topic: 'Design Engineering',
    year: '2025',
    summary: 'How the CSS-first config, a simpler build, and a single motion component made the interface calmer.',
    content: tailwindBlurArticle,
  },
  {
    slug: 'react-mobx-state-management',
    title: 'Streamlining React Development with MobX for State Management',
    topic: 'React',
    year: '2024',
    summary: 'A practical walkthrough of using observable state to keep React applications simpler.',
    content: reactMobxArticle,
    externalUrl: 'https://luccithedev.hashnode.dev/streamlining-react-development-with-mobx-for-state-management',
  },
  {
    slug: 'functional-programming-javascript',
    title: 'Deep Dive into Functional Programming in JavaScript',
    topic: 'JavaScript',
    year: '2024',
    summary: 'Higher-order functions, immutability, and the habits that make JavaScript easier to reason about.',
    content: functionalJsArticle,
    externalUrl: 'https://luccithedev.hashnode.dev/deep-dive-into-functional-programming-in-javascript-higher-order-functions-and-immutability',
  },
  {
    slug: 'vue-authorization-access-control',
    title: 'Complete Guide to Vue.js Authorization and Access Control',
    topic: 'Security',
    year: '2023',
    summary: 'A guide to structuring authorization boundaries in Vue applications.',
    content: vueAuthArticle,
    externalUrl: 'https://www.cerbos.dev/blog/complete-guide-to-vue-js-authorization-and-access-control',
  },
  {
    slug: 'sql-server-management-studio',
    title: 'Getting Started with SQL Using SQL Server Management Studio',
    topic: 'Databases',
    year: '2023',
    summary: 'A beginner-friendly route into querying and understanding relational data.',
    content: sqlArticle,
    externalUrl: 'https://luccithedev.hashnode.dev/getting-started-with-sql-using-sql-server-management-studio',
  },
];

export const experience = [
  { company: 'Revent Technologies', role: 'Senior Software Engineer', period: '2024-now' },
  { company: 'Sendbox', role: 'Software Engineer', period: '2022-2024' },
  { company: 'Kobo360', role: 'Frontend Engineer', period: '2020-2022' },
  { company: 'Tm30', role: 'Software Developer', period: '2019-2020' },
];

export const services = [
  'Backend systems',
  'Full-stack product builds',
  'REST API design',
  'React frontends',
  'Cloud-native delivery',
];

export const clients = ['Sendbox', 'Kobo360', 'Revent', 'TM30', 'Payfasta'];

export const getProjectBySlug = (slug: string) => projects.find(project => project.slug === slug);

export const getArticleBySlug = (slug: string) => articles.find(article => article.slug === slug);
