function entireClick() {
    document.querySelector('.cigarRank').style.display = 'none';
    document.querySelector('.entireRank').style.display = 'block';

    document.querySelector('.entireBtn').style.borderBottom = '2px solid black'
    document.querySelector('.cigarBtn1').style.borderBottom = 'none'
    document.querySelector('.cigarBtn2').style.borderBottom = 'none'
    document.querySelector('.btn3').style.borderBottom = 'none'
}   

function click2() {
    document.querySelector('.entireRank').style.display = 'none';
    document.querySelector('.cigarRank').style.display = 'block';

    document.querySelector('.entireBtn').style.borderBottom = 'none'
    document.querySelector('.cigarBtn1').style.borderBottom = '2px solid black'
    document.querySelector('.cigarBtn2').style.borderBottom = 'none'
    document.querySelector('.btn3').style.borderBottom = 'none'
}

function click3() {
    document.querySelector('.entireBtn').style.borderBottom = 'none'
    document.querySelector('.cigarBtn1').style.borderBottom = 'none'
    document.querySelector('.cigarBtn2').style.borderBottom = '2px solid black'
    document.querySelector('.btn3').style.borderBottom = 'none'
}

function click4() {
    document.querySelector('.entireBtn').style.borderBottom = 'none'
    document.querySelector('.cigarBtn1').style.borderBottom = 'none'
    document.querySelector('.cigarBtn2').style.borderBottom = 'none'
    document.querySelector('.btn3').style.borderBottom = '2px solid black'
}
let cigarTable = [
    { cigarID: 50010, brandID: 30001, cigarName: '테리아 블랙 그린', price: 4800, nicotine: 0.1, tar: 0.1, isCapsule: false, cigarImg: 'src/테리아블랙그린.jpg' },
    { cigarID: 50011, brandID: 30001, cigarName: '테리아 썬 펄', price: 4800, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/테리아썬펄.jpg' },
    { cigarID: 50012, brandID: 30001, cigarName: '테리아 앰버', price: 4800, nicotine: 0.1, tar: 0.1, isCapsule: false, cigarImg: 'src/테리아앰버.jpg' },
    { cigarID: 50013, brandID: 30001, cigarName: '테리아 옐로우', price: 4800, nicotine: 0.1, tar: 0.1, isCapsule: false, cigarImg: 'src/테리아옐로우.jpg' },
    { cigarID: 50014, brandID: 30001, cigarName: '테리아 퍼플 웨이브', price: 4800, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/테리아퍼플웨이브.jpg' },
]

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
    { reviewID: 20011, cigarID: 50011, memberID: 40003, review: '향은 좋은데 재구매는 고민됨.', score: 3, listDay: '2026-07-30' },
    { reviewID: 20012, cigarID: 50012, memberID: 40001, review: '연무량도 괜찮고 맛도 깔끔함.', score: 5, listDay: '2026-07-18' },
    { reviewID: 20013, cigarID: 50013, memberID: 40004, review: '무난하긴 한데 조금 심심한 맛.', score: 3, listDay: '2026-07-21' },
    { reviewID: 20014, cigarID: 50014, memberID: 40002, review: '퍼플 캡슐 향이 생각보다 괜찮음.', score: 4, listDay: '2026-07-25' },
    { reviewID: 20015, cigarID: 50005, memberID: 40008, review: '계속 손이 가는 맛이라 자주 핌.', score: 5, listDay: '2026-07-26' },
    { reviewID: 20016, cigarID: 50009, memberID: 40006, review: '향은 좋은데 가격이 조금 아쉬움.', score: 4, listDay: '2026-07-28' },
    { reviewID: 20017, cigarID: 50011, memberID: 40007, review: '기대보단 평범했지만 나쁘진 않음.', score: 3, listDay: '2026-07-30' },
]
let memberTable = [
    { MemberID: 40000, userID: 'dsds31232', userPW: '2134122', userNAME: '요네', userPHOTO: '/img/페페담배.jpeg' },
    { MemberID: 40001, userID: 'lilililil', userPW: 'dsae212', userNAME: '야스오', userPHOTO: '/img/프사1.jpg' },
    { MemberID: 40002, userID: 'wEqweqw232', userPW: '12341234', userNAME: '베인', userPHOTO: '/img/프사2.jpg' },
    { MemberID: 40003, userID: 'smoker01', userPW: 'qwer1234', userNAME: '아리', userPHOTO: '/img/프사3.jpg' },
    { MemberID: 40004, userID: 'mintcapsule', userPW: 'capsule12', userNAME: '티모', userPHOTO: '/img/프사4.jpg'},
    { MemberID: 40005, userID: 'windblue', userPW: 'pass5678', userNAME: '징크스', userPHOTO: '/img/프사5.jpg' },
    { MemberID: 40006, userID: 'goldleaf', userPW: 'gold4321', userNAME: '케인', userPHOTO: '/img/프사6.jpg' },
    { MemberID: 40007, userID: 'reviewking', userPW: 'review99', userNAME: '가렌', userPHOTO: '/img/프사7.jpg' },
    { MemberID: 40008, userID: 'cloudsmoke', userPW: 'smoke777', userNAME: '럭스', userPHOTO: '/img/프사8.jpg' },
]

function a() {
    let html =''
    for(let i = 0; i < cigarTable.length; i++){
        html +=     `
                <div class="box">
                    <a href="#">
                        <div class="content">
                            <div id="image">
                                <img id="img" src="${cigarTable[i].cigarImg}">
                            </div>
                            <div id="detail">
                                <h3> ${cigarTable[i].cigarName}</h3>
                                <p> ${cigarTable[i].nicotine}mg </p>
                                <p> ${cigarTable[i].tar}mg </p>
                            </div>
                            <div id="star">
                                <p> ★ 4.2 </p>
                                <p> ★★★★ </p>
                                <p> 리뷰 224개 </p>
                            </div>
                        </div>
                    </a>`
                    for(let j = 0; j < reviewTable.length; j++){
                        let name
                        let img
                        if(cigarTable[i].cigarID == reviewTable[j].cigarID){
                            for( let k = 0; k < memberTable.length; k++){
                                if(reviewTable[j].memberID == memberTable[k].MemberID){
                                    name = memberTable[k].userNAME
                                    img = memberTable[k].userPHOTO
                                    break;
                                }
                            }
                            html += `<a href="#">
                                <div class="review">
                                    <div id="top">
                                        <div id="image2">
                                            <img src="${img}">
                                        </div>
                                        <div>
                                            ${name}
                                        </div>
                                    </div>
                                    <div id="center">
                                        ${reviewTable[j].review}
                                    </div>
                                </div>
                            </a>
                        </div>
                        `
                        break;
                        }
                    }
                    
    }
    document.querySelector('#main').innerHTML = html
}
a()