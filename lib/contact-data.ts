export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface ContactInfo {
  email: string;
  supportHours: string;
  socialLinks: {
    twitter: string;
    linkedin: string;
    youtube: string;
    discord: string;
  };
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: 'Do I need programming experience to start?',
    answer: 'Not at all! Our beginner courses start from the ground up, teaching you Python basics before diving into AI. If you already have programming experience, you can skip ahead to intermediate or advanced courses.',
  },
  {
    id: 2,
    question: "What's included in the subscription?",
    answer: 'Full access to all courses, learning paths, hands-on labs, project templates, downloadable resources, community Discord, live Q&A sessions, and course certificates. New content is added monthly at no extra cost.',
  },
  {
    id: 3,
    question: 'Can I cancel anytime?',
    answer: 'Yes! You can cancel your subscription at any time from your account settings. Your access continues until the end of your current billing period, and you can always resubscribe later.',
  },
  {
    id: 4,
    question: 'Are certificates recognized by employers?',
    answer: 'Our certificates demonstrate completion of rigorous, hands-on projects. Many students have successfully used them in job applications. We recommend showcasing the actual projects you build—employers love seeing real work!',
  },
  {
    id: 5,
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with the courses within the first 30 days, contact our support team for a full refund—no questions asked.',
  },
  {
    id: 6,
    question: 'How do I access the hands-on labs?',
    answer: 'All hands-on labs are available directly in your browser—no setup required! Each course includes interactive coding environments where you can write, run, and test your AI models instantly. For advanced projects, we provide detailed setup guides.',
  },
];

export const contactInfo: ContactInfo = {
  email: 'support@neural-learnai.com',
  supportHours: 'Mon-Fri, 9am-6pm PST',
  socialLinks: {
    twitter: 'https://twitter.com/neurallearnai',
    linkedin: 'https://linkedin.com/company/neurallearnai',
    youtube: 'https://youtube.com/@neurallearnai',
    discord: 'https://discord.gg/neurallearnai',
  },
};

export const subjects = [
  'General Inquiry',
  'Course Question',
  'Technical Support',
  'Partnership',
  'Press',
  'Other',
];
