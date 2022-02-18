import { postMaker } from '../components/postMaker.js';

const contentMsg = `
    <h1>Javascript functional programming basics</h1>
    <p>프로그래밍의 패러다임 중 하나이며,</p>
    <p>순수 함수들을 조합하여 프로그래밍을 해 나가는 것을 의미합니다.</p>
    <br/>
    <p>평가: 코드가 계산되어 값을 만드는 것</p>
    <p>일급: 값으로 다룰 수 있고, 변수에 담을 수 있고 함수의 인자로 사용될 수 있으며, 함수의 결과값으로 사용될 수 있는 것</p>
    <br/>
    <p>일급 함수: 함수를 값으로 다룰 수 있는 것</p>
    <p>JavaScript의 함수는 일급입니다.</p>
    <br/>
    <p>고차 함수: 함수를 값으로 다루는 함수</p>
`;
export const fpBasics = () => postMaker(contentMsg);