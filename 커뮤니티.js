let cigarTable = [
    { cigarID: 50000, brandID: 10002, cigarName: '레종 블루', price:4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg:'src/cigar.png'},
    { cigarID: 50001, brandID: 10002, cigarName: '에쎄 체인지 1mg', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/에쎄체인지1mg.jpg' },
    { cigarID: 50002, brandID: 10001, cigarName: '이오니아 핑크', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/이오니아핑크.jpg' },
    { cigarID: 50003, brandID: 10004, cigarName: '이오니아 그린', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/cigar2.jpg' },
    { cigarID: 50004, brandID: 10003, cigarName: '말보로 골드', price: 5000, nicotine: 0.4, tar: 6, isCapsule: false, cigarImg: 'src/말보로골드.jpg' },
];

let reviewTable = [
    { reviewID: 20000, cigarID: 50000, memberID: 40000, review: '한번 펴봤는데 그럭저럭 필만 하네요~', score: 4, listDay: '2026-07-01' },
    { reviewID: 20001, cigarID: 50001, memberID: 40002, review: '목 뚫리는줄', score: 2, listDay: '2026-07-28' },
    { reviewID: 20002, cigarID: 50002, memberID: 40005, review: '노맛', score: 1, listDay: '2026-07-29' },
    { reviewID: 20003, cigarID: 50003, memberID: 40003, review: '뭔지모름', score: 1, listDay: '2026-07-12' },
    { reviewID: 20004, cigarID: 50004, memberID: 40005, review: '이걸 왜핌?', score: 1, listDay: '2026-07-29' },
    { reviewID: 20005, cigarID: 50005, memberID: 40003, review: '내 인생픽', score: 1, listDay: '2026-07-12' },
    { reviewID: 20006, cigarID: 50006, memberID: 40005, review: '금연하고싶을 때 이거 피셈 ㅇㅇ', score: 1, listDay: '2026-07-29' },
    { reviewID: 20007, cigarID: 50007, memberID: 40003, review: '4500원을 버리고 싶으면 사라', score: 1, listDay: '2026-07-12' },
    { reviewID: 20008, cigarID: 50008, memberID: 40006, review: '무난하게 데일리로 피기 좋음.', score: 4, listDay: '2026-07-20' },
    { reviewID: 20009, cigarID: 50009, memberID: 40007, review: '캡슐 터뜨리면 시원해서 만족.', score: 5, listDay: '2026-07-24' },
    { reviewID: 20010, cigarID: 50010, memberID: 40008, review: '순해서 입문용으로 괜찮네요.', score: 4, listDay: '2026-07-27' },
    { reviewID: 20011, cigarID: 50011, memberID: 40009, review: '향은 좋은데 재구매는 고민됨.', score: 3, listDay: '2026-07-30' },
];

let memberTable = [
    { MemberID: 40009, userID: 'pepe01234', userPW: '0000022', userNAME: '페페', userPHOTO: '/img/페페담배.jpeg' },
    { MemberID: 40000, userID: 'dsds31232', userPW: '2134122', userNAME: '요네', userPHOTO: '/img/페페담배.jpeg' },
    { MemberID: 40001, userID: 'lilililil', userPW: 'dsae212', userNAME: '야스오', userPHOTO: '/img/프사1.jpg' },
    { MemberID: 40002, userID: 'wEqweqw232', userPW: '12341234', userNAME: '베인', userPHOTO: '/img/프사2.jpg' },
    { MemberID: 40003, userID: 'smoker01', userPW: 'qwer1234', userNAME: '아리', userPHOTO: '/img/프사3.jpg' },
    { MemberID: 40004, userID: 'mintcapsule', userPW: 'capsule12', userNAME: '티모', userPHOTO: '/img/프사4.jpg'},
    { MemberID: 40005, userID: 'windblue', userPW: 'pass5678', userNAME: '징크스', userPHOTO: '/img/프사5.jpg' },
    { MemberID: 40006, userID: 'goldleaf', userPW: 'gold4321', userNAME: '케인', userPHOTO: '/img/프사6.jpg' },
    { MemberID: 40007, userID: 'reviewking', userPW: 'review99', userNAME: '가렌', userPHOTO: '/img/프사7.jpg' },
    { MemberID: 40008, userID: 'cloudsmoke', userPW: 'smoke777', userNAME: '럭스', userPHOTO: '/img/프사8.jpg' },
];

let postsTable = [
    {postID: 60000, userID: 'pepe01234', userNAME: '페페', postTitle: `에쎄 히말라야 후기`, postContent: '편의점에서 뭐 살지 고민하다가 이름이 겁나 웅장해서 사봄. \n히말라야라길래 한 대 피우면 폐 속에 만년설 쌓이고 예티랑 하이파이브할 줄 알았는데, 실제로는 그냥 무난하게 시원한 1미리 에쎄임.\n일단 담배가 얇아서 처음 보면 이쑤시개인가 싶다. 빨아보면 역시 1미리답게 타격감은 세지 않음. 평소에 굵은 담배나 고타르 피우던 사람은 “이거 불 붙은 거 맞냐?” 할 수도 있음. \n캡슐 터뜨리기 전에는 깔끔하고 약간 밋밋한 담배 맛이 난다. 캡슐 터뜨리면 멘솔이 확 올라오는데, 코를 박살 내는 수준의 강멘솔은 아니고 입안이 적당히 서늘해지는 정도임. 단맛이나 과일 향이 강한 담배나 아니라서 향료 범벅 싫어하는 사람한테는 잘 맞을 듯.\n그리고 냄새 저감 담배라고 광고하는데 아예 냄새가 안 나는 건 당연히 아님. 담배는 담배라 옷이랑 손에는 냄새 남는다. 그래도 일반 연초보다는 피우고 난 뒤 입안이 덜 텁텁하고 끝맛이 비교적 깔끔한 편.\n단점은 오래 피우면 맛이 좀 심심할 수 있다는 거. 강한 타격감이나 달달한 캡슐 맛을 기대하면 노잼이고, 반대로 가볍고 무난한 멘솔 찾으면 꽤 괜찮음.\n총평\n멘솔감: 3.5/5\n타격감: 2/5\n깔끔함: 4/5\n단맛: 1.5/5\n재구매 의사: 4/5\n\n한 줄 요약:\n히말라야 정상급으로 강한 담배는 아닌데, 매일 피우기에는 무난한 냉장고 생수 같은 담배임.'
        , thumbsUp: 206, thumbsDown: 58, listDay: '2026-07-31', reply: 4
    },
    {postID: 60001, userID: 'dsds31232', userNAME: '요네', postTitle: '[M3] 일본 면세점 담배 라인업 공유한다 (스압, 30장)', postContent: '', thumbsUp: 16, thumbsDown: 2, listDay: '2026-07-31', reply: 19},
    {postID: 60002, userID: 'lilililil', userNAME: '야스오', postTitle: 'AI가 추천해주는 내 취향 딱 맞는 HNB 스틱 추천', postContent: '', thumbsUp: 0, thumbsDown: 2, listDay: '2026-07-22', reply: 3},
    {postID: 60003, userID: 'wEqweqw232', userNAME: '베인', postTitle: '[리뷰] Raison Ionia 블루베리 향, 실 구매 리얼 후기', postContent: '', thumbsUp: 2, thumbsDown: 2, listDay: '2026-07-30', reply: 7},
    {postID: 60004, userID: 'smoker01', userNAME: '아리', postTitle: '초보자를 위한 시가 입문기', postContent: '', thumbsUp: 11, thumbsDown: 2, listDay: '2026-06-23', reply: 0},
    {postID: 60005, userID: 'mintcapsule', userNAME: '티모', postTitle: '[M3] 일본 면세점 담배 라인업 공유한다 (스압, 30장)', postContent: '', thumbsUp: 5, thumbsDown: 2, listDay: '2026-07-01', reply: 19},
    {postID: 60006, userID: 'windblue', userNAME: '징크스', postTitle: 'AI가 추천해주는 내 취향 딱 맞는 HNB 스틱 추천', postContent: '', thumbsUp: 4, thumbsDown: 2, listDay: '2026-07-31', reply: 3},
    {postID: 60007, userID: 'goldleaf', userNAME: '케인', postTitle: '[리뷰] Raison Ionia 블루베리 향, 실 구매 리얼 후기', postContent: '', thumbsUp: 7, thumbsDown: 2, listDay: '2026-07-29', reply: 1},
    {postID: 60008, userID: 'reviewking', userNAME: '가렌', postTitle: '초보자를 위한 시가 입문기', postContent: '', thumbsUp: 11, thumbsDown: 2, listDay: '2026-07-28', reply: 8},
];
// console.log(obj.text.slice(0, limitIndex));

showHotPost()
function showHotPost(){
    userImg = document.querySelector('#imgPepe')
    post = document.querySelector('.t')
    thumbs = document.querySelector('#RD')

    let html1 = ``;
    let html2 = ``;
    let html3 = ``;

    // thumbsUp이 많은 포스트이면 maxThumbs에 대입
    let maxThumbsPost = postsTable.reduce((previous, current) => { 
        if (previous.thumbsUp > current.thumbsUp) return previous
        else return current; 
    });

    let maxThumbsPostUserImg = memberTable.find(item => item.userID = maxThumbsPost.userID).userPHOTO

    html1 += `                    <a href="페페.html">
                        <img class="pepe" src="${maxThumbsPostUserImg}" alt="프로필">
                    </a>`

    html2 = `                        <strong>${maxThumbsPost.postTitle}</strong><br>
                        ${maxThumbsPost.postContent.slice(0, 90)}
                        <a href="커뮤상세.html">
                            <span class="plus">..................더보기</span>
                        </a>`

    html3 = `                    <button class="up-btn">
                        <img src="img/개추용.png">
                        <span class="cnt-up">${maxThumbsPost.thumbsUp}</span>
                    </button>
                    <button class="down-btn">
                        <img src="img/비추용.png">
                        <span class="cnt-down">${maxThumbsPost.thumbsDown}</span>
                    </button>`
    userImg.innerHTML = html1;
    post.innerHTML = html2;
    thumbs.innerHTML = html3;

}




showPosts()
function showPosts() {
    let postList = document.querySelector('.post-list');
    let html = ``;

    postsTable.sort((a, b) => new Date(b.listDay) - new Date(a.listDay))
    console.log(postsTable)
    
    for (let index = 0; index < postsTable.length; index++){
            html +=
            `<li class="post-item">
                <div class="item-left">
                    <span class="title">${postsTable[index].postTitle}</span>
                    <span class="reply">[${postsTable[index].reply}]</span>
                </div>
                <div class="item-right">
                    <span class="like"><img src="img/개추용.png" alt="추천"> ${postsTable[index].thumbsUp}</span>
                    <span class="user">ID : ${postsTable[index].userNAME}</span>
                </div>
            </li>`
    }
    postList.innerHTML = html;

    html += `<li class="post-item">
                <div class="item-left">
                    <span class="title">[M3] 일본 면세점 담배 라인업 공유한다 (스압, 30장)</span>
                    <span class="reply">[19]</span>
                </div>
                <div class="item-right">
                    <span class="like"><img src="img/개추용.png" alt="추천"> 11</span>
                    <span class="user">ID : 카타리나</span>
                </div>
            </li>`
}

// --------------------------------------------------------------------------
// 1. 추천 / 비추천 상태 불러오기 및 UI 초기화
// --------------------------------------------------------------------------
let currentUp = localStorage.getItem('hotPostUp');
let currentDown = localStorage.getItem('hotPostDown');

// localStorage 값이 없으면 기본값(206, 58) 설정
if (currentUp === null) {
    currentUp = 206;
    localStorage.setItem('hotPostUp', currentUp);
} else {
    currentUp = parseInt(currentUp, 10);
}

function click4() {
    document.querySelector('.entireBtn').style.borderBottom = 'none';
    document.querySelector('.cigarBtn1').style.borderBottom = 'none';
    document.querySelector('.cigarBtn2').style.borderBottom = 'none';
    document.querySelector('.btn3').style.borderBottom = '2px solid black';
}

if (currentDown === null) {
    currentDown = 58;
    localStorage.setItem('hotPostDown', currentDown);
} else {
    currentDown = parseInt(currentDown, 10);
}

// 화면 수치 반영 함수
function renderCounts() {
    const allUpSpans = document.querySelectorAll('.cnt-up');
    const allDownSpans = document.querySelectorAll('.cnt-down');

    allUpSpans.forEach(span => {
        span.innerText = currentUp;
    });

    allDownSpans.forEach(span => {
        span.innerText = currentDown;
    });
}

// DOM 로드 완료 시 화면 최신화
document.addEventListener('DOMContentLoaded', () => {
    renderCounts();
});


// --------------------------------------------------------------------------
// 2. HTML onclick 전역 함수 구현
// --------------------------------------------------------------------------
function 개추() {
    currentUp += 1;
    localStorage.setItem('hotPostUp', currentUp);
    renderCounts();
}

function 비추() {
    currentDown += 1;
    localStorage.setItem('hotPostDown', currentDown);
    renderCounts();
}