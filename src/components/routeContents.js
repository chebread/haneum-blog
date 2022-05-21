import { home } from '../routes/home.js';
import { feed } from '../routes/feed.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { serviceUnavailable } from '../routes/serviceUnavailable.js';
import { loveIs } from '../posts/loveIs.js';

export const routeContents = {
  '/': {
    route: home,
    title: 'Haneum Blog',
  },
  '/feed': {
    route: feed,
    title: 'Feed',
  },
  '/404': {
    route: notFoundPage,
    title: '404 Not found page',
  },
  '/503': {
    route: serviceUnavailable,
    title: '503 Service unavailable',
  },
  '/love-is': {
    route: loveIs,
    title: 'Love is.',
  },
  '/cryptocurrency': {
    route: cryptocurrency,
    title: 'Cryptocurrency.',
  },
};
