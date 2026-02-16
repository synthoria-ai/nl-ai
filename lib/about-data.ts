export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedIn?: string;
}

export interface Value {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    role: 'Lead Instructor, ML',
    bio: 'PhD in Machine Learning from Stanford. Former ML engineer at Google Brain with 10+ years experience.',
    avatar: 'SC',
    linkedIn: '#',
  },
  {
    id: 2,
    name: 'James Wilson',
    role: 'Head of Curriculum',
    bio: 'Education technologist and former software engineer. Built curricula for 100K+ students worldwide.',
    avatar: 'JW',
    linkedIn: '#',
  },
  {
    id: 3,
    name: 'Dr. Priya Sharma',
    role: 'NLP Specialist',
    bio: 'Natural Language Processing expert. Previously led NLP teams at Meta and contributed to BERT research.',
    avatar: 'PS',
    linkedIn: '#',
  },
  {
    id: 4,
    name: 'Emma Thompson',
    role: 'MLOps Instructor',
    bio: 'Infrastructure and deployment expert. Scaled ML systems serving millions at Amazon and Netflix.',
    avatar: 'ET',
    linkedIn: '#',
  },
  {
    id: 5,
    name: 'Alex Rodriguez',
    role: 'Computer Vision Lead',
    bio: 'Computer vision researcher with expertise in medical imaging and autonomous systems at Tesla.',
    avatar: 'AR',
    linkedIn: '#',
  },
  {
    id: 6,
    name: 'Dr. Michael Chang',
    role: 'GenAI Researcher',
    bio: 'Generative AI pioneer. Published extensively on transformers and large language models at OpenAI.',
    avatar: 'MC',
    linkedIn: '#',
  },
  {
    id: 7,
    name: 'Robert Kim',
    role: 'Platform Director',
    bio: 'Full-stack engineer and product leader. Built learning platforms used by Fortune 500 companies.',
    avatar: 'RK',
    linkedIn: '#',
  },
  {
    id: 8,
    name: 'Lisa Anderson',
    role: 'Community Manager',
    bio: 'Community builder and educator. Fostered thriving tech communities with 50K+ active members.',
    avatar: 'LA',
    linkedIn: '#',
  },
];

export const values: Value[] = [
  {
    id: 1,
    title: 'Practical Over Theoretical',
    description: 'We focus on skills you\'ll actually use in real AI jobs',
    icon: 'code',
  },
  {
    id: 2,
    title: 'Hands-On Learning',
    description: 'Every concept comes with code, projects, and practice',
    icon: 'laptop',
  },
  {
    id: 3,
    title: 'Community-Driven',
    description: 'Learn alongside thousands of AI practitioners worldwide',
    icon: 'users',
  },
];

export const stats: Stat[] = [
  {
    id: 1,
    value: '50,000+',
    label: 'Active Learners',
  },
  {
    id: 2,
    value: '120+',
    label: 'Countries Represented',
  },
  {
    id: 3,
    value: '95%',
    label: 'Course Completion Rate',
  },
  {
    id: 4,
    value: '4.9/5',
    label: 'Average Rating',
  },
];
