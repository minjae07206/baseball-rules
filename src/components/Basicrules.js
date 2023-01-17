import { Card, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { basicrules } from '../data.js';
// 규칙설명 하나를 store.js에만 추가하면 자동으로 HTML 컴포넌트를 생성하도록 해야 한다. 
// Make an object that consists the title, number, content
// when scrolling, there needs to be a mark or highlight that defines which rule is the current main.
// 및에 1000px 짜리 div를 놓고, 나머지는 하나씩만 렌더링
function Basicrules() {
    const [progress, changeProgress] = useState(0);
    useEffect(() => {
        const handleScroll = event => {
            changeProgress((window.scrollY / window.innerHeight) * 120)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <h1>야구장 처음 갈 때 필요한 간단한 규칙 설명</h1>
            <div className='progress-bar'>
                <ProgressBar now={progress} />
            </div>
            <div className='basic-rules'>
                {
                    basicrules.map((box) => {
                        return (
                            <Card>
                                <Card.Header as="h5">{box.title}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{box.content}</Card.Title>
                                </Card.Body>
                            </Card>
                        )
                    })
                }

                <img className="basic-rules-image" src="/basic-rules-pictures/1.jpg"></img>
            </div>


            <div style={{ height: '1000px' }}></div>
        </div>
    )
}

export { Basicrules };