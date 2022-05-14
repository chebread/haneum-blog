import './content.css';
import { replaceContent } from './replaceContent.js';

export const content = contents => `
  <div class="container">
      <div class="container-content">
        <div class="container-wrapper">
          <div class="content-title">
            <a href="/feed">${contents.title}</a>
          </div>
        </div>
        <div class="container-wrapper">
          <div class="content-main">
            ${replaceContent(contents.content)}</div>
          </div>
      </div>
  </div>
`;
