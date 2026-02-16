export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Beginner to Advanced' | 'Beginner to Intermediate' | 'Intermediate to Advanced';

export interface Phase {
  number: number;
  name: string;
  courses: string[];
}

export interface LearningPath {
  id: number;
  name: string;
  slug: string;
  icon: string;
  duration: string;
  durationMonths: string;
  level: SkillLevel;
  totalCourses: number;
  phases: Phase[];
  projects: number;
  certification: string;
  description: string;
  keySkills: string[];
  careerOutcomes: string[];
  prerequisites?: string;
  price: number;
  careerFocus: string;
}

export const learningPathsData: LearningPath[] = [
  {
    id: 1,
    name: 'AI Engineer Path',
    slug: 'ai-engineer',
    icon: '🤖',
    duration: '6-9 months',
    durationMonths: '6-9',
    level: 'Beginner to Advanced',
    totalCourses: 8,
    phases: [
      {
        number: 1,
        name: 'Python & Data Foundations',
        courses: [
          'Python Programming for AI',
          'Statistics & Linear Algebra for ML',
          'Data Analysis with Pandas & NumPy',
        ],
      },
      {
        number: 2,
        name: 'Machine Learning Core',
        courses: [
          'Machine Learning A-Z',
          'Advanced ML Algorithms',
        ],
      },
      {
        number: 3,
        name: 'Deep Learning & NLP',
        courses: [
          'Deep Learning with PyTorch',
          'Natural Language Processing',
        ],
      },
      {
        number: 4,
        name: 'MLOps & Deployment',
        courses: [
          'MLOps: Production ML Systems',
        ],
      },
    ],
    projects: 5,
    certification: 'AI Engineer Certificate',
    description: 'Complete path from programming basics to production AI systems. Build end-to-end ML applications and deploy them at scale.',
    keySkills: [
      'Python Programming',
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'MLOps & Deployment',
      'Neural Networks',
      'Model Optimization',
    ],
    careerOutcomes: [
      'AI/ML Engineer',
      'Machine Learning Engineer',
      'AI Solutions Architect',
      'Research Engineer',
    ],
    price: 299,
    careerFocus: 'AI/ML Engineering',
  },
  {
    id: 2,
    name: 'Data Scientist Path',
    slug: 'data-scientist',
    icon: '📊',
    duration: '5-7 months',
    durationMonths: '5-7',
    level: 'Beginner to Intermediate',
    totalCourses: 6,
    phases: [
      {
        number: 1,
        name: 'Data Fundamentals',
        courses: [
          'Python for Data Science',
          'Statistics for Data Analysis',
        ],
      },
      {
        number: 2,
        name: 'Data Analysis & Visualization',
        courses: [
          'Data Analysis with Pandas',
          'Data Visualization Masterclass',
        ],
      },
      {
        number: 3,
        name: 'Machine Learning',
        courses: [
          'Machine Learning A-Z',
          'Feature Engineering & Model Selection',
        ],
      },
    ],
    projects: 4,
    certification: 'Data Science Certificate',
    description: 'Master data analysis, visualization, and machine learning to extract insights and build predictive models from complex datasets.',
    keySkills: [
      'Python & SQL',
      'Statistical Analysis',
      'Data Visualization',
      'Machine Learning',
      'Predictive Modeling',
      'A/B Testing',
      'Business Intelligence',
    ],
    careerOutcomes: [
      'Data Scientist',
      'Data Analyst',
      'Business Intelligence Analyst',
      'Quantitative Analyst',
    ],
    price: 249,
    careerFocus: 'Data Science',
  },
  {
    id: 3,
    name: 'Deep Learning Specialist Path',
    slug: 'deep-learning-specialist',
    icon: '🧠',
    duration: '4-6 months',
    durationMonths: '4-6',
    level: 'Intermediate to Advanced',
    totalCourses: 5,
    phases: [
      {
        number: 1,
        name: 'Neural Network Foundations',
        courses: [
          'Neural Networks Fundamentals',
          'Deep Learning with PyTorch',
        ],
      },
      {
        number: 2,
        name: 'Advanced Architectures',
        courses: [
          'Convolutional Neural Networks',
          'Recurrent Neural Networks & LSTMs',
        ],
      },
      {
        number: 3,
        name: 'Generative Models',
        courses: [
          'GANs & Transformers',
        ],
      },
    ],
    projects: 3,
    certification: 'Deep Learning Certificate',
    description: 'Dive deep into neural networks and cutting-edge architectures. Build advanced computer vision and NLP systems.',
    keySkills: [
      'Neural Networks',
      'CNNs & Computer Vision',
      'RNNs & Sequence Models',
      'Transformers',
      'GANs',
      'Model Optimization',
      'GPU Training',
    ],
    careerOutcomes: [
      'Deep Learning Engineer',
      'Computer Vision Engineer',
      'AI Research Scientist',
      'NLP Engineer',
    ],
    prerequisites: 'Python programming, basic machine learning knowledge',
    price: 279,
    careerFocus: 'Deep Learning',
  },
  {
    id: 4,
    name: 'Generative AI Path',
    slug: 'generative-ai',
    icon: '✨',
    duration: '3-5 months',
    durationMonths: '3-5',
    level: 'Intermediate',
    totalCourses: 4,
    phases: [
      {
        number: 1,
        name: 'LLM Foundations',
        courses: [
          'Large Language Models Fundamentals',
          'Prompt Engineering Mastery',
        ],
      },
      {
        number: 2,
        name: 'Advanced GenAI',
        courses: [
          'Fine-Tuning & Custom Models',
          'Building AI Applications',
        ],
      },
    ],
    projects: 3,
    certification: 'Generative AI Certificate',
    description: 'Master GPT, DALL-E, and other generative models. Build AI-powered applications and chatbots that create content.',
    keySkills: [
      'Large Language Models',
      'Prompt Engineering',
      'Model Fine-Tuning',
      'RAG Systems',
      'AI App Development',
      'Chatbot Development',
      'API Integration',
    ],
    careerOutcomes: [
      'GenAI Engineer',
      'AI Product Developer',
      'Prompt Engineer',
      'LLM Application Developer',
    ],
    prerequisites: 'Basic Python knowledge recommended',
    price: 229,
    careerFocus: 'Generative AI',
  },
  {
    id: 5,
    name: 'Computer Vision Path',
    slug: 'computer-vision',
    icon: '👁️',
    duration: '4-6 months',
    durationMonths: '4-6',
    level: 'Intermediate to Advanced',
    totalCourses: 5,
    phases: [
      {
        number: 1,
        name: 'Image Processing Basics',
        courses: [
          'Computer Vision Fundamentals',
          'Image Processing Techniques',
        ],
      },
      {
        number: 2,
        name: 'Deep Learning for Vision',
        courses: [
          'CNNs for Computer Vision',
          'Object Detection & Segmentation',
        ],
      },
      {
        number: 3,
        name: 'Advanced Applications',
        courses: [
          'Video Analysis & Tracking',
        ],
      },
    ],
    projects: 4,
    certification: 'Computer Vision Certificate',
    description: 'Build intelligent systems that see and understand the visual world. Master object detection, tracking, and image generation.',
    keySkills: [
      'Image Processing',
      'Object Detection',
      'Image Segmentation',
      'Face Recognition',
      'Video Analysis',
      'CNNs',
      'Real-time Systems',
    ],
    careerOutcomes: [
      'Computer Vision Engineer',
      'CV Research Scientist',
      'Robotics Vision Engineer',
      'Autonomous Systems Engineer',
    ],
    prerequisites: 'Python and basic deep learning knowledge',
    price: 269,
    careerFocus: 'Computer Vision',
  },
];
