import { postMaker } from '../components/postMaker.js';

const korean = '(Korean)';
const contentMsg = `
  <h1>Blog posts</h1>
  <ul>
    <li class="second-list">
      <h2>Personal posts</h2>
      <ul>
        <li class="third-list">
            <p><a href="/">Hi, Nice to meet you.</a></p>
            <p><a href="/devil-putin">Devil Putin. ${korean}</a></p>
            <p><a href="/love-is">Love is.</a></p>
            <p><a href="/plan">Plan.</a></p>
            <p><a href="/march">March.</a></p>
        </li>
      </ul>
      <br/>
      <h2>Git related posts</h2>
      <ul>
          <li class="third-list">
              <p><a href="/git-commit-msg-rules">Git commit message rules ${korean}</a></p>
          </li>
      </ul>
      <br/>
      <h2>Functional programming related posts</h2>
      <ul>
          <li class="third-list">
              <p><a href="/fp-basics">Basics ${korean}</a></p>
          </li>
      </ul>
      <br/>
      <h2>Other posts</h2>
      <ul>
        <li class="third-list">
         <p><a href="/blogging-rules">Blogging rules</a></p>
        </li>
      </ul>
  </ul>
`;
export const menu = () => postMaker(contentMsg);
