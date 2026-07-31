let reviewTable = JSON.parse(localStorage.getItem("reviewTable"))

if (reviewTable == null){
    localStorage.setItem("reviewTable", JSON.stringify([
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
        ])
    ) 
}
let cigarTable = JSON.parse(localStorage.getItem("cigarTable"))
if (cigarTable == null){
    localStorage.setItem("cigarTable", JSON.stringify([
    { cigarID: 50000, brandID: 10002, cigarName: '레종 블루', price:4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg:'src/cigar.png'},
    { cigarID: 50001, brandID: 10002, cigarName: '에쎄 체인지 1mg', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/에쎄체인지1mg.jpg' },
    { cigarID: 50002, brandID: 10001, cigarName: '이오니아 핑크', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/이오니아핑크.jpg' },
    { cigarID: 50003, brandID: 10004, cigarName: '이오니아 그린', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/cigar2.jpg' },
    { cigarID: 50004, brandID: 10003, cigarName: '말보로 골드', price: 5000, nicotine: 0.4, tar: 6, isCapsule: false, cigarImg: 'src/말보로골드.jpg' },
    { cigarID: 50005, brandID: 20001, cigarName: '핏 체인지 유니크', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/핏체인지유니크.jpg' },
    { cigarID: 50006, brandID: 20001, cigarName: '핏 체인지 큐', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/핏체인지큐.jpg' },
    { cigarID: 50007, brandID: 20002, cigarName: '믹스 아이스 더블', price: 4800, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/믹스아이스더블.jpg' },
    { cigarID: 50008, brandID: 20002, cigarName: '믹스 아이스뱅', price: 4800, nicotine: 0.1, tar: 0.1, isCapsule: false, cigarImg: 'src/믹스아이스뱅.jpg' },
    { cigarID: 50009, brandID: 20003, cigarName: '믹스 아이스 모아', price: 4800, nicotine: 0.1, tar: 0.1, isCapsule: false, cigarImg: 'src/믹스아이스모아.jpg' },
    { cigarID: 50010, brandID: 30001, cigarName: '테리아 블랙 그린', price: 4800, nicotine: 0.1, tar: 0.1, isCapsule: false, cigarImg: 'src/테리아블랙그린.jpg' },
    { cigarID: 50011, brandID: 30001, cigarName: '테리아 오아시스 펄', price: 4800, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/테리아오아시스펄.jpg' },
    { cigarID: 50012, brandID: 30001, cigarName: '테리아 블루', price: 4800, nicotine: 0.1, tar: 0.1, isCapsule: false, cigarImg: 'src/테리아블루.jpg' },
    { cigarID: 50013, brandID: 30001, cigarName: '테리아 블랙 옐로우', price: 4800, nicotine: 0.1, tar: 0.1, isCapsule: false, cigarImg: 'src/테리아블랙옐로우.jpg' },
    { cigarID: 50014, brandID: 30001, cigarName: '테리아 퍼플 웨이브', price: 4800, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/테리아퍼플웨이브.jpg' },
        ])
    )
}


// 최근 리뷰에 맞는 html 생성 코드
showRecentReview()
function showRecentReview(){
    let html = ``;
    let recentReviews = document.querySelector('.recentReviews')

    // 새 변수에 날짜가 가장 최근 것이 먼저 오도록 정렬한 테이블
    let recentReviewTable = reviewTable.sort((a, b) => new Date(b.listDay) - new Date(a.listDay))


    const today = new Date()
    console.log(recentReviewTable)
    html += `<div class="recentReview">`

    // 첫번째 줄 최근 리뷰 작성 반복문
    for (index = 0; index < 4; index++){

        let id = recentReviewTable[index].cigarID
        let review = recentReviewTable[index]
        let cigar = cigarTable.find(cigar => cigar.cigarID == id)


        html += `
        <div onclick="location.href='cigar_detail.html?cigarID=${cigar.cigarID}'" class="cigarItem">
            <img src="${cigar.cigarImg}">
                <p><span id="star">★</span> ${review.score}</p>
                <p>${review.review}</p>
        </div>`
    }

    html += `
    </div>
    <div class="recentReview">
    `

    // 2번째 최근 리뷰 작성 반복문
    for (index = 4; index < 8; index++){
        let id = recentReviewTable[index].cigarID
        let review = recentReviewTable[index]
        let cigar = cigarTable.find(cigar => cigar.cigarID === id)
        

        html += `
        <div onclick="location.href='cigar_detail.html?cigarID=${cigar.cigarID}'" class="cigarItem">
            <img src="${cigar.cigarImg}">
                <p><span id="star">★</span> ${review.score}</p>
                <p>${review.review}</p>
        </div>`
    }

    html += `</div>`

    recentReviews.innerHTML = html
    return
}

function getScoreCigar(cigarID){

    // scoreArr에 매개변수로 받은 cigarID와 같은 모든 것을 배열에 대입
    let scoreArr = reviewTable.filter(item => item.cigarID === cigarID)
    let totalScore = 0
    let index = 0

    for (index; index < scoreArr.length; index++){
        totalScore += scoreArr[index].score
    }
    console.log(totalScore)
    return totalScore/index
}
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
        html1 += `<li onclick="location.href='cigar_detail.html?cigarID=${highRankCigar[index].cigarID}'">${index+1}. <div class="rankImg"><img src="${highRankCigar[index].cigarImg}"></div> ${highRankCigar[index].cigarName} <div class="rankRating"> <span id="star">★</span> ${(highRankCigar[index].avgScore).toFixed(1)}</div></li>`
     }

     entireRank.innerHTML = html1;

}












function entireClick() {
    document.querySelector('.cigarRank').style.display = 'none';
    document.querySelector('.hTPRank').style.display = 'none';
    document.querySelector('.entireRank').style.display = 'block';

    document.querySelector('.entireBtn').style.borderBottom = '2px solid black'
    document.querySelector('.cigarBtn1').style.borderBottom = 'none'
    document.querySelector('.cigarBtn2').style.borderBottom = 'none'
    document.querySelector('.btn3').style.borderBottom = 'none'
}   

function click2() {
    document.querySelector('.entireRank').style.display = 'none';
    document.querySelector('.hTPRank').style.display = 'none';
    document.querySelector('.cigarRank').style.display = 'block';

    document.querySelector('.entireBtn').style.borderBottom = 'none'
    document.querySelector('.cigarBtn1').style.borderBottom = '2px solid black'
    document.querySelector('.cigarBtn2').style.borderBottom = 'none'
    document.querySelector('.btn3').style.borderBottom = 'none'
}

function click3() {
    document.querySelector('.entireRank').style.display = 'none';
    document.querySelector('.cigarRank').style.display = 'none';
    document.querySelector('.hTPRank').style.display = 'block';

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