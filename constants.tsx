
import { Tool, ToolCategory } from './types';

// Using a more reliable image host or direct link if possible. 
// Also adding more tools to reach 32+ count.
export const APP_LOGO = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhU9j8V4qM3O7q7z_H1U2v-z-P_I_Y_Z_A_B_C_D_E_F_G_H_I_J_K_L_M_N_O_P/s1600/ToolsBD.png'; 

export const TOOLS: Tool[] = [
  // Text & Data Tools
  { id: 'word-counter', name: 'Word Counter', description: 'Count words, chars & paragraphs.', category: ToolCategory.TEXT, icon: 'fa-font', path: 'native' },
  { id: 'case-converter', name: 'Case Converter', description: 'Upper, lower, title, sentence case.', category: ToolCategory.TEXT, icon: 'fa-text-height', path: 'native' },
  { id: 'text-reverse', name: 'Text Reverser', description: 'Flip your text backwards.', category: ToolCategory.TEXT, icon: 'fa-rotate-left', path: 'native' },
  { id: 'duplicate-remover', name: 'Duplicate Remover', description: 'Remove double words/lines.', category: ToolCategory.TEXT, icon: 'fa-clone', path: 'native' },
  { id: 'lorem-ipsum', name: 'Lorem Ipsum', description: 'Generate placeholder dummy text.', category: ToolCategory.TEXT, icon: 'fa-paragraph', path: 'native' },
  { id: 'num-to-word', name: 'Number to Word', description: 'Convert digits to written words.', category: ToolCategory.TEXT, icon: 'fa-arrow-right-arrow-left', path: 'native' },
  { id: 'text-to-slug', name: 'Slug Generator', description: 'Create URL friendly text slugs.', category: ToolCategory.TEXT, icon: 'fa-link', path: 'native' },
  { id: 'tts-tool', name: 'Text to Speech', description: 'Listen to your text in natural voice.', category: ToolCategory.TEXT, icon: 'fa-volume-high', path: 'native' },
  
  // Security Tools
  { id: 'pass-gen', name: 'Password Gen', description: 'Secure password generator.', category: ToolCategory.SECURITY, icon: 'fa-lock', path: 'native' },
  { id: 'pass-strength', name: 'Pass Strength', description: 'Check how strong your password is.', category: ToolCategory.SECURITY, icon: 'fa-shield-check', path: 'native' },
  { id: 'hash-gen', name: 'Hash Generator', description: 'MD5, SHA256 generator.', category: ToolCategory.SECURITY, icon: 'fa-shield-halved', path: 'native' },
  
  // Developer Tools
  { id: 'base64', name: 'Base64 Tool', description: 'Encode/Decode Base64 data.', category: ToolCategory.DEV, icon: 'fa-code', path: 'native' },
  { id: 'json-format', name: 'JSON Formatter', description: 'Prettify and validate JSON.', category: ToolCategory.DEV, icon: 'fa-brackets-curly', path: 'native' },
  { id: 'url-codec', name: 'URL Encoder', description: 'Encode and decode URLs.', category: ToolCategory.DEV, icon: 'fa-link-slash', path: 'native' },
  { id: 'html-entities', name: 'HTML Entities', description: 'Encode/Decode HTML special chars.', category: ToolCategory.DEV, icon: 'fa-file-code', path: 'native' },
  { id: 'markdown-preview', name: 'Markdown Live', description: 'Preview markdown in real-time.', category: ToolCategory.DEV, icon: 'fa-file-lines', path: 'native' },
  { id: 'binary-tool', name: 'Binary Converter', description: 'Text to binary and vice versa.', category: ToolCategory.DEV, icon: 'fa-0', path: 'native' },

  // SEO Tools
  { id: 'sitemap-gen', name: 'Sitemap Gen', description: 'Generate XML sitemaps.', category: ToolCategory.SEO, icon: 'fa-sitemap', path: 'native' },
  { id: 'robots-gen', name: 'Robots.txt Gen', description: 'Generate robots.txt files.', category: ToolCategory.SEO, icon: 'fa-robot', path: 'native' },
  { id: 'meta-gen', name: 'Meta Tag Gen', description: 'Create SEO friendly meta tags.', category: ToolCategory.SEO, icon: 'fa-tags', path: 'native' },
  { id: 'privacy-gen', name: 'Privacy Policy', description: 'Generate privacy policy template.', category: ToolCategory.SEO, icon: 'fa-user-shield', path: 'native' },

  // Calculators
  { id: 'age-calc', name: 'Age Calculator', description: 'Exact age calculation.', category: ToolCategory.CALCULATOR, icon: 'fa-calendar-day', path: 'native' },
  { id: 'emi-calc', name: 'EMI Calculator', description: 'Calculate monthly loan EMI.', category: ToolCategory.CALCULATOR, icon: 'fa-calculator', path: 'native' },
  { id: 'bmi-calc', name: 'BMI Calculator', description: 'Check body mass index.', category: ToolCategory.CALCULATOR, icon: 'fa-weight-scale', path: 'native' },
  { id: 'percent-calc', name: 'Percentage Calc', description: 'Calculate percentages easily.', category: ToolCategory.CALCULATOR, icon: 'fa-percent', path: 'native' },
  { id: 'discount-calc', name: 'Discount Calc', description: 'Calculate sale prices.', category: ToolCategory.CALCULATOR, icon: 'fa-tags', path: 'native' },
  { id: 'unit-converter', name: 'Unit Converter', description: 'Length, Weight, Temp conversion.', category: ToolCategory.CALCULATOR, icon: 'fa-arrow-right-arrow-left', path: 'native' },
  
  // Zip Tools
  { id: 'zip-create', name: 'Zip Creator', description: 'Bundle multiple files into a ZIP.', category: ToolCategory.ZIP, icon: 'fa-file-zipper', path: 'native' },
  { id: 'zip-extract', name: 'Zip Extractor', description: 'Unpack and extract ZIP files.', category: ToolCategory.ZIP, icon: 'fa-box-open', path: 'native' },
  
  // Image
  { id: 'qr-gen', name: 'QR Generator', description: 'Create custom QR codes.', category: ToolCategory.IMAGE, icon: 'fa-qrcode', path: 'native' },
  { id: 'color-picker', name: 'Color Picker', description: 'Select and copy hex colors.', category: ToolCategory.IMAGE, icon: 'fa-eye-dropper', path: 'native' },

  // Others
  { id: 'user-agent', name: 'User Agent', description: 'View your browser details.', category: ToolCategory.OTHER, icon: 'fa-laptop-code', path: 'native' },
  { id: 'screen-res', name: 'Screen Res', description: 'View screen resolution.', category: ToolCategory.OTHER, icon: 'fa-desktop', path: 'native' },
  { id: 'stopwatch', name: 'Stopwatch', description: 'Simple digital stopwatch.', category: ToolCategory.OTHER, icon: 'fa-stopwatch', path: 'native' },
];
