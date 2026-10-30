import { localeString, localeText, localePortableText } from './locale';
import { faqItem } from './faqItem';
import { post } from './post';
import { project } from './project';
import { product } from './product';
import { siteSettings } from './siteSettings';
import { homePage } from './homePage';
import { aboutPage } from './aboutPage';
import { productsPage } from './productsPage';

export const schemaTypes = [
  // objects
  localeString,
  localeText,
  localePortableText,
  faqItem,
  // documents
  post,
  project,
  product,
  siteSettings,
  // page content (singletons)
  homePage,
  aboutPage,
  productsPage,
];
