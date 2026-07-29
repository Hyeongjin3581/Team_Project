console.log("hi")

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

let brandTable = [
    { brandID: 10001, brandName: '말보로', brandLogo: '/src/img' },
    { brandID: 10001, brandName: '에쎄', brandLogo: '/src/img' },
    { brandID: 10001, brandName: '던힐', brandLogo: '/src/img' },
    { brandID: 10001, brandName: '레종', brandLogo: '/src/img' },
    { brandID: 10001, brandName: '말보로', brandLogo: '/src/img' },
]

let cigarTable = [
    { cigarID: 50000, brandID: 10002, cigarName: '에쎄 히말라야', price:4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg:'src/cigar.png'},
    { cigarID: 50001, brandID: 10002, cigarName: '에쎄 체인지 3mg', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/cigar.png' },
    { cigarID: 50002, brandID: 10001, cigarName: '말보로 레드', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/cigar.png' },
    { cigarID: 50003, brandID: 10004, cigarName: '이오니아 그린', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/cigar2.jpg' }
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

    // 1. 리뷰테이블에서 cigarID를 갖고옴
    // 2. cigarID를 통해 cigarTable에서 찾음
    // 3. 찾은 cigarTable의 배열에서 cigarImg를 갖고옴


    const today = new Date()
    console.log(recentReviewTable)
    html += `<div class="recentReview">`

    for (index = 0; index < 4; index++){

        let id = recentReviewTable[index].cigarID
        let review = recentReviewTable[index].review
        let cigar = cigarTable.find(cigar => cigar.cigarID == id)
        console.log(cigar)

        html += `
        <div class="cigarItem">
            <img src="${cigar.cigarImg}">
                <p>빈 별: &star;</p>
                <p>${review}</p>
        </div>`
    }

    html += `
    </div>
    <div class="recentReview">
    `

    for (index = 4; index < 8; index++){
        let id = recentReviewTable[index].cigarID
        let review = recentReviewTable[index].review
        let cigar = cigarTable.find(cigar => cigar.cigarID === id)
        

        html += `
        <div class="cigarItem">
            <img src="${cigar.cigarImg}">
                <p>빈 별: &star;</p>
                <p>${review}</p>
        </div>`
    }

    html += `</div>`

    recentReviews.innerHTML = html
    return
}