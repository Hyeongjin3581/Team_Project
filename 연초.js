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
    { MemberID: 40000, userID: 'dsds31232', userPW: '2134122', userNAME: '요네', userPHOTO: 'img/페페담배.jpeg' },
    { MemberID: 40001, userID: 'lilililil', userPW: 'dsae212', userNAME: '야스오', userPHOTO: 'img/프사1.jpg' },
    { MemberID: 40002, userID: 'wEqweqw232', userPW: '12341234', userNAME: '베인', userPHOTO: 'img/프사2.jpg' },
    { MemberID: 40003, userID: 'smoker01', userPW: 'qwer1234', userNAME: '아리', userPHOTO: 'img/프사3.jpg' },
    { MemberID: 40004, userID: 'mintcapsule', userPW: 'capsule12', userNAME: '티모', userPHOTO: 'img/프사4.jpg'},
    { MemberID: 40005, userID: 'windblue', userPW: 'pass5678', userNAME: '징크스', userPHOTO: 'img/프사5.jpg' },
    { MemberID: 40006, userID: 'goldleaf', userPW: 'gold4321', userNAME: '케인', userPHOTO: 'img/프사6.jpg' },
    { MemberID: 40007, userID: 'reviewking', userPW: 'review99', userNAME: '가렌', userPHOTO: 'img/프사7.jpg' },
    { MemberID: 40008, userID: 'cloudsmoke', userPW: 'smoke777', userNAME: '럭스', userPHOTO: 'img/프사8.jpg' },
]



function a() {
    let html =''
    for(let i = 0; i < cigarTable.length; i++){
        html +=     `
                <div class="box">
                    <a href="cigar_detail.html?cigarID=${cigarTable[i].cigarID}">
                        <div class="content">
                            <div id="image">
                                <img id="img" src="${cigarTable[i].cigarImg}">
                            </div>
                            <div id="detail">
                                <h3> ${cigarTable[i].cigarName}</h3>
                                <p> 니코틴 ${cigarTable[i].nicotine}mg </p>
                                <p> 타르 ${cigarTable[i].tar}mg </p>
                            </div>
                            <div id="star${i}">
                                <p> ★ 4.2 </p>
                                <p> ★★★★ </p>
                                
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
    let list = JSON.parse(localStorage.getItem('reviewTable') )
    if (list == null) { localStorage.setItem('reviewTable', JSON.stringify(reviewTable))}
    if( list.length > reviewTable.length) { // 로컬스토리지의 길이가 더 길때 (업데이트 됐을때)
        for( let index = 0; index < list.length; index++){
            reviewTable[index] = list[index]
        }
    }
    console.log(reviewTable)
    document.querySelector('#main').innerHTML = html
    let table = []
    for(let w = 0; w < reviewTable.length; w++){ table[w] = reviewTable[w] }
    for(let r = 0; r < cigarTable.length; r++){
        let review = 0
        let result = 0
        let count = 0
        for(let m = 0; m < table.length; m++){
            if(cigarTable[r].cigarID == table[m].cigarID){
                review++
                count++
                result += table[m].score
            }
        }
        result = result / count
        let abc = `#star${r}`
        document.querySelector(abc).innerHTML = `<p> <span class="star">★</span> ${result.toFixed(1)} </p> <p> 리뷰 ${review}개 </p> `
        
    }
}
a()


// 랭킹
showRankCigar()
function showRankCigar(){

    let html1 = ''; let html2 = ''; let html3 = '';
    let entireRank = document.querySelector('.entireRank')
    let cigarRank = document.querySelector('.cigarRank')
    let hTPRank = document.querySelector('.hTPRank')

    // 새로운 테이블(담배 ID와 평균점수 등)에 모든 담배를 차례대로 매핑
     let eachCigarAvgScore = cigarTable.map(cigar => {

        // ========================================================================
        // result에 리뷰테이블의 cigarID와 매핑될 cigarID만 찾아 그 객체 배열들을 선언
        let result = reviewTable.filter(item => item.cigarID == cigar.cigarID)

        // result 객체배열의 점수만 다 더해서 반환된 값을 totalScore에 선언
        let totalScore = result.reduce((a, c) =>{
            return (a + c.score)
        }, 0)
        // 다 더한 totalScore의 평균 값 avgScore에 선언
        let avgScore = totalScore / result.length
        //=============== 생각해보니까 여기는 getScoreCigar()함수를 쓰면 됐음=============


        //매핑될 반환 객체들
        return{
            // 매핑될 때 사용한 cigar의 cigarID
            cigarID: cigar.cigarID,
            // 매핑될 때 사용된 cigar의 cigarID를 cigarTable에서 찾아 cigarName을 갖고옴
            cigarName: cigarTable.find(item => item.cigarID == cigar.cigarID).cigarName,
            //매핑될 때 사용된 cigar의 cigarID를 cigarTable에서 찾아 cigarImg를 갖고옴
            cigarImg: cigarTable.find(item=> item.cigarID == cigar.cigarID).cigarImg,
            // 계산된 평균값
            avgScore: avgScore
        } 
     })

     // 평균점수가 높은 순서대로 정렬
     let highRankCigar = eachCigarAvgScore.sort((a, b) => b.avgScore - a.avgScore)

     html1 += `<ul>`
     for (let index = 0; index < 5; index++){
        html1 += `<li onclick="location.href='cigar_detail.html?cigarID=${highRankCigar[index].cigarID}'">${index+1}. <div class="rankImg"><img src="${highRankCigar[index].cigarImg}"></div> ${highRankCigar[index].cigarName} <div class="rankRating"> <span class="star">★</span> ${highRankCigar[index].avgScore}</div></li>`
     }

     entireRank.innerHTML = html1;

}