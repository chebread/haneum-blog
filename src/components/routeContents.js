import { introduce } from '../posts/introduce.js';
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
import { whatIsDeveloper } from '../posts/whatIsDeveloper.js';

export const routes = {
  '/': introduce,
  '/menu': menu,
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
  '/what-is-developer': whatIsDeveloper,
};

export const routeTitles = {
  '/': 'Haneum Blog',
  '/menu': 'Menu',
  '/fp-basics': 'JavaScript functional programming basic',
  '/404': '404 Not found page',
  '/git-commit-msg-rules': 'Git commit message rule',
  '/devil-putin': 'Devil Putin.',
  '/love-is': 'Love is.',
  '/plan': 'Plan.',
  '/march': 'March.',
  '/se': 'SE, I finally bought it.',
  '/js-spa': 'JavaScript로 SPA 구현하기.',
  '/to-me': '나에게.',
};