import { home } from '../routes/home.js';
import { menu } from '../routes/menu.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { fpBasics } from '../posts/fpBasics.js';
import { gitCommitMsgRules } from '../posts/gitCommitMsgRules.js';
import { devilPutin } from '../posts/devilPutin.js';
import { loveIs } from '../posts/loveIs.js';
import { plan } from '../posts/plan.js';
import { march } from '../posts/march.js';
import { se } from '../posts/se.js';
import { whatShouldIDo } from '../posts/whatShouldIDo';
import { jsSpa } from '../posts/jsSpa.js';
import { toMe } from '../posts/toMe.js';
import { contact } from '../routes/contact.js';

export const routes = {
  '/': home,
  '/menu': menu,
  '/contact': contact,
  '/404': notFoundPage,
  '/fp-basics': fpBasics,
  '/git-commit-msg-rules': gitCommitMsgRules,
  '/devil-putin': devilPutin,
  '/love-is': loveIs,
  '/plan': plan,
  '/march': march,
  '/se': se,
  '/what-should-i-do': whatShouldIDo,
  '/js-spa': jsSpa,
  '/to-me': toMe,
};
