
import { ConsultationOption, Product, Article } from './types';

export const CONSULTATIONS: ConsultationOption[] = [
  {
    id: 'full-strategy',
    title: 'Full Strategy + Feedback Consultation',
    price: '$400',
    turnaround: '3-5 business days',
    inclusions: [
      'Initial strategy session (45-60 min)',
      'Review Free Consultation',
      'Written feedback on one assignment',
      'One identified weak area focus',
      'One follow-up feedback session'
    ],
    exclusions: [
      'Ongoing coaching',
      'Multiple assignments',
      'Unlimited follow-ups'
    ]
  },
  {
    id: 'strategy-only',
    title: 'Strategy-Only Consultation',
    price: '$200',
    turnaround: 'Scheduled session',
    inclusions: [
      'One strategy session (45-60 min)',
      'Study planning & execution guidance'
    ],
    exclusions: [
      'Assignment review',
      'Written feedback',
      'Follow-up sessions'
    ]
  },
  {
    id: 'feedback-only',
    title: 'Assignment Feedback Only',
    price: '$200 per assignment',
    turnaround: '3-5 business days',
    inclusions: [
      'Review of one MEE, MPT, or MBE (one set) assignment',
      'Detailed written feedback'
    ],
    exclusions: [
      'Live consultation',
      'Ongoing coaching'
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'mpt-ebook',
    title: 'Golden MPT Strategy eBook',
    type: 'Paid',
    tagline: 'Coming Soon',
    description: 'Master the Multistate Performance Test with our precision-engineered strategic guide.',
    longDescription: 'The Golden MPT Strategy eBook is the culmination of years of observing grader patterns. It strips away the unnecessary fluff of traditional prep and provides a mechanical, repeatable system for producing high-scoring memos, briefs, and letters under intense time pressure.',
    price: 'TBD',
    whatItIs: [
      'A mechanical system for MPT formatting',
      'Time-management protocols for the 90-minute window',
      'Strategic reading techniques for the Library and File',
      'Annotated examples of high-scoring answers'
    ],
    whatItIsNot: [
      'A collection of old practice MPTs (those are free online)',
      'A legal writing textbook for law school',
      'A substitute for actual timed practice',
      'A "magic bullet" that replaces hard work'
    ],
    features: [
      'The "File-First" Reading Strategy',
      'Memo & Brief Templates (Mechanical)',
      'Grader Psychology Insights',
      'Common Traps & How to Avoid Them'
    ]
  },
  {
    id: 'final-strategy-course',
    title: '1-Month Bar Exam Final Strategy Course',
    type: 'Paid',
    description: 'A focused intensive for the last 30 days. Includes downloadable schedules, strategy videos, and optional 1-on-1 access.',
    longDescription: 'The Final Strategy Course is designed for the examinee who is doing the work but feeling overwhelmed by the volume. This course teaches you how to transition from "learning" to "performing." We focus on the high-yield mechanics that actually move the needle on your score in the final 4 weeks.',
    price: '$299',
    whatItIs: [
      'A transition plan from learning to execution',
      'High-yield subject prioritization',
      'Daily "Mechanical Drills" for MEE and MBE',
      'A psychological framework for the final stretch'
    ],
    whatItIsNot: [
      'A full-substantive law course (like Barbri/Themis)',
      'A replacement for doing thousands of MBE questions',
      'A tutor-on-call service',
      'A basic "how to study" guide'
    ],
    features: [
      'The "Rule of 3" MEE Strategy',
      'MBE Pattern Recognition Drills',
      'Custom 4-Week "Final Stretch" Schedule',
      '5 Strategic Deep-Dive Video Modules'
    ]
  },
  {
    id: 'free-mpt-checklist',
    title: 'Essential MPT Checklist',
    type: 'Free',
    description: 'Never miss a formatting mark again. A one-page PDF guide to MPT success.',
    whatItIs: ['A one-page formatting guide', 'Quick-reference for memo headers'],
    whatItIsNot: ['A comprehensive strategy guide']
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'mpt-mindset',
    title: 'The MPT Mindset: Why Strategy Trumps Law',
    excerpt: 'The MPT is often seen as a writing test, but it is really a test of execution and organization.',
    content: 'Full article content here... The Multistate Performance Test (MPT) is worth a significant chunk of your total bar exam score, yet many examinees treat it as an afterthought. Success on the MPT requires a shift in mindset: you are no longer a student; you are a junior associate completing a task for a senior partner...',
    date: 'Oct 12, 2023',
    category: 'Strategy'
  },
  {
    id: 'last-30-days',
    title: 'The Final 30 Days: Precision Planning',
    excerpt: 'How to transition from learning new material to strategic mastery and endurance building.',
    content: 'Full article content here... As you enter the final stretch, your focus must shift from breadth to depth and execution. Stop trying to learn every single niche rule and start focusing on the highly-tested areas...',
    date: 'Nov 05, 2023',
    category: 'Planning'
  }
];
