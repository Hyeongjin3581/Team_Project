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
    { cigarID: 50000, brandID: 10002, cigarName: '레종 블루', price:4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg:'src/cigar.png'},
    { cigarID: 50001, brandID: 10002, cigarName: '에쎄 체인지 1mg', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/에쎄체인지1mg.jpg' },
    { cigarID: 50002, brandID: 10001, cigarName: '이오니아 핑크', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/이오니아핑크.jpg' },
    { cigarID: 50003, brandID: 10004, cigarName: '이오니아 그린', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/cigar2.jpg' },
    { cigarID: 50004, brandID: 10003, cigarName: '말보로 골드', price: 5000, nicotine: 0.4, tar: 6, isCapsule: false, cigarImg: 'src/말보로골드.jpg' },
]
let reviewTable = [
    { reviewID: 20000, cigarID: 50000, memberID: 40000, review: '한번 펴봤는데 그럭저럭 필만 하네요~', score: 4, listDay: '2026-07-01' },
    { reviewID: 20001, cigarID: 50002, memberID: 40002, review: '목 뚫리는줄', score: 2, listDay: '2026-07-28' },
    { reviewID: 20002, cigarID: 50001, memberID: 40005, review: '노맛', score: 1, listDay: '2026-07-29' },
    { reviewID: 20003, cigarID: 50003, memberID: 40003, review: '뭔지모름', score: 1, listDay: '2026-07-12' },
    { reviewID: 20004, cigarID: 50001, memberID: 40005, review: '이걸 왜핌?', score: 1, listDay: '2026-07-29' },
    { reviewID: 20005, cigarID: 50003, memberID: 40003, review: '내 인생픽', score: 1, listDay: '2026-07-12' },
    { reviewID: 20006, cigarID: 50001, memberID: 40005, review: '금연하고싶을 때 이거 피셈 ㅇㅇ', score: 1, listDay: '2026-07-29' },
    { reviewID: 20007, cigarID: 50003, memberID: 40003, review: '4500원을 버리고 싶으면 사라', score: 1, listDay: '2026-07-12' },
    { reviewID: 20008, cigarID: 50004, memberID: 40006, review: '무난하게 데일리로 피기 좋음.', score: 4, listDay: '2026-07-20' },
    { reviewID: 20009, cigarID: 50006, memberID: 40007, review: '캡슐 터뜨리면 시원해서 만족.', score: 5, listDay: '2026-07-24' },
    { reviewID: 20010, cigarID: 50008, memberID: 40008, review: '순해서 입문용으로 괜찮네요.', score: 4, listDay: '2026-07-27' },
    { reviewID: 20011, cigarID: 50010, memberID: 40009, review: '향은 좋은데 재구매는 고민됨.', score: 3, listDay: '2026-07-30' },
]
let memberTable = [
    { MemberID: 40000, userID: 'dsds31232', userPW: '2134122', userNAME: '요네', userPHOTO: '/img/페페담배.jpeg' },
    { MemberID: 40001, userID: 'lilililil', userPW: 'dsae212', userNAME: '야스오', userPHOTO: '/src/img/' },
    { MemberID: 40002, userID: 'wEqweqw232', userPW: '12341234', userNAME: '베인', userPHOTO: '/src/img/' },
    { MemberID: 40003, userID: 'smoker01', userPW: 'qwer1234', userNAME: '아리', userPHOTO: '/src/img/' },
    { MemberID: 40004, userID: 'mintcapsule', userPW: 'capsule12', userNAME: '티모', userPHOTO: '/src/img/' },
    { MemberID: 40005, userID: 'windblue', userPW: 'pass5678', userNAME: '징크스', userPHOTO: '/src/img/' },
    { MemberID: 40006, userID: 'goldleaf', userPW: 'gold4321', userNAME: '케인', userPHOTO: '/src/img/' },
    { MemberID: 40007, userID: 'reviewking', userPW: 'review99', userNAME: '가렌', userPHOTO: '/src/img/' },
    { MemberID: 40008, userID: 'cloudsmoke', userPW: 'smoke777', userNAME: '럭스', userPHOTO: '/src/img/' },
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