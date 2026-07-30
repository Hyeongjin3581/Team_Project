console.log("hi")

let reviewTable = [
    { reviewID: 20000, cigarID: 50000, memberID: 40000, review: '필만해요', score: 3, listDay: '2026-07-01' },
    { reviewID: 20001, cigarID: 50002, memberID: 40002, review: '목 뚫리는줄', score: 2, listDay: '2026-07-28' },
    { reviewID: 20002, cigarID: 50001, memberID: 40005, review: '노맛', score: 2, listDay: '2026-07-29' },
    { reviewID: 20003, cigarID: 50003, memberID: 40003, review: '뭔지모름', score: 3, listDay: '2026-07-12' },
    { reviewID: 20004, cigarID: 50001, memberID: 40005, review: '이걸 왜핌?', score: 5, listDay: '2026-07-29' },
    { reviewID: 20005, cigarID: 50003, memberID: 40003, review: '내 인생픽', score: 2, listDay: '2026-07-12' },
    { reviewID: 20006, cigarID: 50000, memberID: 40005, review: '금연하고싶을 때 이거 피셈 ㅇㅇ', score: 2, listDay: '2026-07-29' },
    { reviewID: 20007, cigarID: 50003, memberID: 40003, review: '4500원을 버리고 싶으면 사라', score: 1, listDay: '2026-07-12' },
]

let brandTable = [
    { brandID: 10001, brandName: '말보로', brandLogo: '/src/img' },
    { brandID: 10001, brandName: '에쎄', brandLogo: '/src/img' },
    { brandID: 10001, brandName: '던힐', brandLogo: '/src/img' },
    { brandID: 10001, brandName: '레종', brandLogo: '/src/img' },
    { brandID: 10001, brandName: '말보로', brandLogo: '/src/img' },
]

let cigarTable = [
    { cigarID: 50000, brandID: 10002, cigarName: '레종 블루', price:4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg:'src/cigar.png'},
    { cigarID: 50001, brandID: 10002, cigarName: '에쎄 체인지 1mg', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/에쎄체인지1mg.jpg' },
    { cigarID: 50002, brandID: 10001, cigarName: '이오니아 핑크', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/이오니아핑크.jpg' },
    { cigarID: 50003, brandID: 10004, cigarName: '이오니아 그린', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/cigar2.jpg' },
    { cigarID: 50004, brandID: 10003, cigarName: '말보로 골드', price: 5000, nicotine: 0.4, tar: 6, isCapsule: false, cigarImg: 'src/말보로골드.jpg' },
]

let listTable = [
    { listID: 70000, MemberID: 40000, listTitle: ' ~ 후기', listContent: '그 담배요?', listDay: '2026-07-28', thumbsUp: 212, thumbsDown: 1231111111 },
    { listID: 70001, MemberID: 40002, listTitle: '담배 추천좀', listContent: '제가 본 담배중', listDay: '2026-07-29', thumbsUp: 123, thumbsDown: 24 }
]

let memberTable = [
    { MemberID: 40000, userID: 'dsds31232', userPW: '2134122', userNAME: '요네', userPHOTO: '/src/img/' },
    { MemberID: 40002, userID: 'lilililil', userPW: 'dsae212', userNAME: '야스오', userPHOTO: '/src/img/' },
    { MemberID: 40005, userID: 'wEqweqw232', userPW: '12341234', userNAME: '베인', userPHOTO: '/src/img/' },
]



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

    // 새로운 테이블(담배 ID와 평균점수) 매핑
     let eachCigarAvgScore = cigarTable.map(cigar => {
        let result = reviewTable.filter(item => item.cigarID == cigar.cigarID)

        let totalScore = result.reduce((a, c) =>{
            return (a + c.score)
        }, 0)
        let avgScore = totalScore / result.length

        return{
            cigarID: cigar.cigarID,
            cigarName: cigarTable.find(item => item.cigarID == cigar.cigarID).cigarName,
            cigarImg: cigarTable.find(item=> item.cigarID == cigar.cigarID).cigarImg,
            avgScore: avgScore
        } 
     })
     console.log(eachCigarAvgScore)

     // 평균점수가 높은 순서대로 정렬
     let highRankCigar = eachCigarAvgScore.sort((a, b) => b.avgScore - a.avgScore)

     html1 += `<ul>`
     for (let index = 0; index < highRankCigar.length; index++){
        html1 += `<li>${index+1}. <div class="rankImg"><img src="${highRankCigar[index].cigarImg}"></div> ${highRankCigar[index].cigarName} <div class="rankRating"> <span id="star">★</span> ${highRankCigar[index].avgScore}</div></li>`
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