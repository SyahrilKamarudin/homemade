import { localeString, localeText, localePortableText } from './locale';
import { faqItem } from './faqItem';
import { post } from './post';
import { project } from './project';
import { siteSettings } from './siteSettings';

export const schemaTypes = [
  // objects
  localeString,
  localeText,
  localePortableText,
  faqItem,
  // documents
  post,
  project,
  siteSettings,
];
