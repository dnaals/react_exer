import React from 'react';
import sy1 from '../a.module.css';
import sy2 from '../b.module.css';



function Css(props) {
    return (
        <div>
            <article>
                <h2>SCSS 활용</h2>
                <ul>
                    <li>sass 설치 (npm i sass) </li>
                    <li>작업파일에 (import './파일명.scss')</li>
                </ul>
            </article>
            <article>
                <h2>style 활용</h2>
                <ul>
                    <li>
                        태그에 style속성으로 표현(&#123;속성:값&#125;)<br />
                        ㄴ style=&#123;&#123;color:red&#125;&#125;
                    </li>
                </ul>
            </article>
            <article>
                <h2>Module 활용</h2>
                <ul>
                    <li>스타일문서 규칙(파일명.module.css)</li>
                    <li>import 별칭 from './파일명.module.css'</li>
                    <li>엘리먼트 태그에 calssName=&#123;별칭.클래스명&#125;</li>
                </ul>
            </article>
        </div>
    );
}

export default Css;