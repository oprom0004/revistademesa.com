
export interface VoltagePageConfig {
  slug: string;
  voltage: number | string;
  mainSiteUrl: string;
  title: string;
  subtitle: string;
  metaTitle?: string;
  description: string;
  complianceStandards: string | string[];
  applications: string[];
  technicalSpecs: {
    ripple?: string;
    efficiency?: string;
    cooling?: string;
    [key: string]: string | undefined;
  };
  whyChoose: string | string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface NavLink {
  label: string;
  path: string;
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
  isThinking?: boolean;
}