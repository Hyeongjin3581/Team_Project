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
    { cigarID: 50003, brandID: 10004, cigarName: '이오니아 그린', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/cigar2.jpg' }
]
let reviewTable = [
    { reviewID: 20000, cigarID: 50000, memberID: 40000, review: '필만해요', score: 4, listDay: '2026-07-01' },
    { reviewID: 20001, cigarID: 50002, memberID: 40002, review: '목 뚫리는줄', score: 2, listDay: '2026-07-28' },
    { reviewID: 20002, cigarID: 50001, memberID: 40005, review: '노맛', score: 1, listDay: '2026-07-29' },
    { reviewID: 20003, cigarID: 50003, memberID: 40003, review: '뭔지모름', score: 1, listDay: '2026-07-12' },
    { reviewID: 20004, cigarID: 50001, memberID: 40005, review: '이걸 왜핌?', score: 1, listDay: '2026-07-29' },
    { reviewID: 20005, cigarID: 50003, memberID: 40003, review: '내 인생픽', score: 1, listDay: '2026-07-12' },
    { reviewID: 20006, cigarID: 50001, memberID: 40005, review: '금연하고싶을 때 이거 피셈 ㅇㅇ', score: 1, listDay: '2026-07-29' },
    { reviewID: 20007, cigarID: 50003, memberID: 40003, review: '4500원을 버리고 싶으면 사라', score: 1, listDay: '2026-07-12' },
]
let memberTable = [
    { MemberID: 40000, userID: 'dsds31232', userPW: '2134122', userNAME: '요네', userPHOTO: '/src/img/' },
    { MemberID: 40002, userID: 'lilililil', userPW: 'dsae212', userNAME: '야스오', userPHOTO: '/src/img/' },
    { MemberID: 40005, userID: 'wEqweqw232', userPW: '12341234', userNAME: '베인', userPHOTO: '/src/img/' },
]

function a() {
    let html =''
    for(let i = 0; i < cigarTable.length; i++){
        html +=     `
                <div id="box">
                    <a href="#">
                        <div id="content">
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
                        if(cigarTable[i].cigarID == reviewTable[j].cigarID){
                            html += `<a href="#">
                                <div id="review">
                                    <div id="top">
                                        <div id="image2">
                                            <img src="img/pepe.jpg">
                                        </div>
                                        <div>
                                            ${reviewTable[j].MemberID}
                                        </div>
                                    </div>
                                    <div id="center">
                                        ${reviewTable[j].review}
                                    </div>
                                    <div id="bottom">
                                        <div id="good">
                                            <img src="img/good.png">
                                            <p> 20 </p>
                                        </div>
                                        <div id="comment">
                                            <img src="img/comment.png">
                                            <p> 4 </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        </div>
                        `
                        break;
                        }
                    }
                    
    }
    document.querySelector('#main').innerHTML = html
}
a()