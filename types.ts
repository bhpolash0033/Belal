
export enum ToolCategory {
  SEO = 'SEO Tools',
  CALCULATOR = 'Calculator Tools',
  IMAGE = 'Image Converters',
  ZIP = 'Zip Tools',
  TEXT = 'Text & Data Tools',
  SECURITY = 'Security Tools',
  DEV = 'Developer Tools',
  AUDIO = 'Audio Tools',
  OTHER = 'Other Tools'
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  icon: string;
  path: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
