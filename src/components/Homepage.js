import {ProgressBar} from 'react-bootstrap';
function Homepage() {
    return (
        <div>
            <div className='stadium-image'>
                <img src='/baseball-stadium.jpg' alt='baseball-stadium'></img>
            </div>
            <h1>야구</h1>
            <div className='countries dark'>
                <div className="card text-bg-dark">
                    <img src="/korean-baseball.png" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <h5 className="card-title">대한민국 야구</h5>
                        <p className="card-text">한국 프로야구는 지역을 연고로 하고 대기업 소유이거나 스폰서를 받는 10개의 팀으로 이루어져 있다. 매년 4월부터 10월까지 각 팀당 144경기를 치룬 후 상위 5개 팀이 포스트시즌에 진출해 우승팀을 가른다. </p>
                        <p className="card-text">각 프로팀은 퓨처스리그에서 경쟁하는 2군팀을 보유하고 있다. 그외에는 고등학교, 대학교 리그와 대회가 있다.</p>
                    </div>
                </div>
                <div className="card text-bg-dark">
                    <img src="/usa-baseball.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <h5 className="card-title">미국 야구</h5>
                        <p className="card-text">미국 프로야구인 메이저리그는 지역을 연고로 하는 30개의 팀으로 이루어져 있다. 15개팀은 아메리칸 리그, 15개팀은 내셔널 리그에 속한다.
                            각 리그는 또 3개의 지구(미니리그)로 나뉜다. 한 지구에는 5개의 팀이 있다. 한 시즌동안 각 팀당 162경기를 치르고 각 지구의 1등과 그외에 각 리그에서 성적이
                            가장 좋은 팀 2개씩(와일드카드) 해서 총 10개의 팀이 포스트시즌에 진출한다. 지구 1등인 6개 팀은 바로 8강으로 직행하고, 와일드카드 4팀은 8강행 티켓 2장을 놓고 경쟁한다. 8강부터는 토너먼트 형식으로 우승팀을 뽑는다.</p>
                        <p className="card-text">메이저리그 밑에는 마이너리그가 있는데, 마이너리그도 5개의 단계로 나누어져 있어서 6군까지 있는 셈이고 팀 개수는 셀 수 없이 많다. 미국은 이 외에도 수많은 고등학교, 대학교 팀들이 있다.</p>
                    </div>
                </div>
                <div className="card text-bg-dark">
                    <img src="/japanese-baseball.png" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <h5 className="card-title">일본 야구</h5>
                        <p className="card-text">일본 프로야구는 지역을 연고로 하고 기업이 소유를 하고 스폰서를 하고 있는 12개 팀으로 이루어져 있다. 퍼시픽리그와 센트럴리그로 나누어져 있고 각 리그 상위 3개 팀씩 해서
                            총 6개 팀이 포스트시즌에 진출한다. </p>
                        <p className="card-text">고등학교 야구가 매우 활성화 되어 있다. 특히 전국구 고등학교 대회인 고시엔은 인기가 프로야구 못지 않게 많다.</p>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/d/embed?mid=1N4W2rVQ2AJxpC48pmzHcduu1Tm_ZPCw&ehbc=2E312F" width="640" height="480"></iframe>
        </div>
    )
}

export { Homepage };