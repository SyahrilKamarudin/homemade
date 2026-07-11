import { localeString, localeText, localePortableText } from './locale';
import { faqItem } from './faqItem';
import { post } from './post';
import { project } from './project';

export const schemaTypes = [
  // objects
  localeString,
  localeText,
  localePortableText,
  faqItem,
  // documents
  post,
  project,
];
