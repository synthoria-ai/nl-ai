export type ArticleCategory = 'Tutorial' | 'Career Advice' | 'AI News & Trends' | 'Project Ideas' | 'Tool Reviews';

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: ArticleCategory;
  author: string;
  authorAvatar: string;
  publishedDate: string;
  readTime: number;
  featuredImage: string;
  isFeatured?: boolean;
}

export const articlesData: Article[] = [
  {
    id: 1,
    title: 'Getting Started with PyTorch in 2026',
    slug: 'getting-started-pytorch-2026',
    excerpt: 'Learn the fundamentals of PyTorch, the most popular deep learning framework. This comprehensive guide covers installation, tensors, autograd, and building your first neural network.',
    category: 'Tutorial',
    author: 'Dr. Sarah Chen',
    authorAvatar: 'SC',
    publishedDate: '2026-02-10',
    readTime: 8,
    featuredImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    isFeatured: true,
  },
  {
    id: 2,
    title: '5 AI Projects to Build Your Portfolio',
    slug: '5-ai-projects-portfolio',
    excerpt: 'Stand out to employers with these practical AI projects. From sentiment analysis to image classification, learn which projects will showcase your skills effectively.',
    category: 'Project Ideas',
    author: 'James Wilson',
    authorAvatar: 'JW',
    publishedDate: '2026-02-08',
    readTime: 12,
    featuredImage: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg',
  },
  {
    id: 3,
    title: 'Understanding Transformer Architecture',
    slug: 'understanding-transformer-architecture',
    excerpt: 'Deep dive into the architecture that powers modern NLP. Explore attention mechanisms, positional encoding, and why transformers revolutionized AI.',
    category: 'Tutorial',
    author: 'Dr. Priya Sharma',
    authorAvatar: 'PS',
    publishedDate: '2026-02-05',
    readTime: 15,
    featuredImage: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg',
  },
  {
    id: 4,
    title: 'How to Land Your First ML Engineering Job',
    slug: 'land-first-ml-engineering-job',
    excerpt: 'Navigate the ML job market with confidence. Learn interview prep strategies, portfolio building tips, and how to stand out from other candidates.',
    category: 'Career Advice',
    author: 'Emma Thompson',
    authorAvatar: 'ET',
    publishedDate: '2026-02-03',
    readTime: 10,
    featuredImage: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
  },
  {
    id: 5,
    title: 'Comparing OpenAI, Anthropic, and Google AI APIs',
    slug: 'comparing-ai-apis',
    excerpt: 'Which LLM API is right for your project? Compare pricing, performance, and features across the major AI providers to make an informed decision.',
    category: 'Tool Reviews',
    author: 'Alex Rodriguez',
    authorAvatar: 'AR',
    publishedDate: '2026-02-01',
    readTime: 9,
    featuredImage: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg',
  },
  {
    id: 6,
    title: 'Fine-Tuning LLMs: A Complete Guide',
    slug: 'fine-tuning-llms-guide',
    excerpt: 'Master the art of fine-tuning large language models for your specific use case. Learn about techniques, data preparation, and best practices for optimal results.',
    category: 'Tutorial',
    author: 'Dr. Michael Chang',
    authorAvatar: 'MC',
    publishedDate: '2026-01-28',
    readTime: 18,
    featuredImage: 'https://images.pexels.com/photos/8438991/pexels-photo-8438991.jpeg',
  },
  {
    id: 7,
    title: 'The State of AI in 2026: Key Trends',
    slug: 'state-of-ai-2026',
    excerpt: 'Explore the latest developments in artificial intelligence. From multimodal models to AI regulation, discover what\'s shaping the future of the field.',
    category: 'AI News & Trends',
    author: 'Dr. Lisa Anderson',
    authorAvatar: 'LA',
    publishedDate: '2026-01-25',
    readTime: 11,
    featuredImage: 'https://images.pexels.com/photos/8439089/pexels-photo-8439089.jpeg',
  },
  {
    id: 8,
    title: 'Building a RAG System from Scratch',
    slug: 'building-rag-system',
    excerpt: 'Learn how to build Retrieval-Augmented Generation systems that combine LLMs with custom knowledge bases. Step-by-step implementation guide included.',
    category: 'Tutorial',
    author: 'Robert Kim',
    authorAvatar: 'RK',
    publishedDate: '2026-01-22',
    readTime: 14,
    featuredImage: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg',
  },
  {
    id: 9,
    title: 'Optimizing Model Performance: Tips & Tricks',
    slug: 'optimizing-model-performance',
    excerpt: 'Squeeze every bit of performance from your ML models. Learn optimization techniques, hyperparameter tuning strategies, and deployment best practices.',
    category: 'Tutorial',
    author: 'Sophie Laurent',
    authorAvatar: 'SL',
    publishedDate: '2026-01-20',
    readTime: 13,
    featuredImage: 'https://images.pexels.com/photos/8438993/pexels-photo-8438993.jpeg',
  },
  {
    id: 10,
    title: 'Career Paths in AI: Which One is Right for You?',
    slug: 'career-paths-in-ai',
    excerpt: 'Explore different AI career trajectories from research scientist to ML engineer. Understand the skills, education, and experience needed for each path.',
    category: 'Career Advice',
    author: 'Marcus Johnson',
    authorAvatar: 'MJ',
    publishedDate: '2026-01-18',
    readTime: 10,
    featuredImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
  },
];

export const categories: ArticleCategory[] = [
  'Tutorial',
  'Career Advice',
  'AI News & Trends',
  'Project Ideas',
  'Tool Reviews',
];
