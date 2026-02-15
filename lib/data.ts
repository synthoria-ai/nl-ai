export type ContentType = 'text' | 'offer' | 'audio';

export interface Content {
  id: number;
  title: string;
  description: string;
  type: ContentType;
  category: string;
}

export interface TeamMember {
  id: number;
  name: string;
  specialty: string;
  bio: string;
  avatar: string;
}

export const contentData: Content[] = [
  {
    id: 1,
    title: 'Travel AI Guide',
    description: 'Learn how AI can optimize your travel planning, from booking to itinerary creation.',
    type: 'text',
    category: 'Travel',
  },
  {
    id: 2,
    title: 'Parenting with AI',
    description: 'Discover AI tools that help with educational activities and family organization.',
    type: 'offer',
    category: 'Parenting',
  },
  {
    id: 3,
    title: 'Creative Writing Assistant',
    description: 'Master AI-powered writing tools to enhance your storytelling and creativity.',
    type: 'audio',
    category: 'Creativity',
  },
  {
    id: 4,
    title: 'Productivity Hacks',
    description: 'Boost your daily efficiency with AI-powered task management and automation.',
    type: 'text',
    category: 'Productivity',
  },
  {
    id: 5,
    title: 'Photography Enhancement',
    description: 'Transform your photos using AI editing tools and creative techniques.',
    type: 'offer',
    category: 'Creativity',
  },
  {
    id: 6,
    title: 'Language Learning',
    description: 'Accelerate your language skills with personalized AI tutoring and practice.',
    type: 'audio',
    category: 'Education',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Wei Soon Li',
    specialty: 'Travel',
    bio: 'Former travel blogger turned AI educator. Wei helps people discover the world smarter.',
    avatar: 'WL',
  },
  {
    id: 2,
    name: 'Emma Peterson',
    specialty: 'Productivity',
    bio: 'Efficiency expert with 10+ years helping professionals work smarter, not harder.',
    avatar: 'EP',
  },
  {
    id: 3,
    name: 'Maya Lopez',
    specialty: 'Creativity',
    bio: 'Artist and technologist passionate about making AI accessible to creative minds.',
    avatar: 'ML',
  },
];
