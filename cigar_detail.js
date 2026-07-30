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
    { cigarID: 50000, brandID: 10002, cigarName: '에쎄 히말라야', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/cigar.png' },
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


printDetail()

function printDetail (){
    let url = new URLSearchParams( location.search )
    console.log(url)
    let cigarID = parseInt(url.get( 'cigarID' ))
    console.log(cigarID)

    // let reviewList = localStorage.getItem( 'reviewList' )
    // if( reviewList == null){
    //     reviewList = []
    // } else{
    //     reviewList = JSON.parse( reviewList )
    // }

    for(let i = 0; i >= cigarTable.length - 1; i++){
        if(cigarID == cigarTable[i].cigarID){
            let price = cigarTable[i].price.toLocaleString()
            document.querySelector('.cigarName > h2').innerHTML = `${cigarTable[i].cigarName}`
            document.querySelector('.tar').innerHTML = `타르 함량: ${cigarTable[i].tar}mg`
            document.querySelector('.nicotine').innerHTML = `니코틴 함량: ${cigarTable[i].nicotine}mg`
            document.querySelector('.cigarPrice').innerHTML = `가격 ${price}원`
        }
    }

    let score = 0;
    let reviewCount = 0;
    let html = ``
    for (let i = reviewTable.length - 1; i >= 0; i--){
       if (cigarID == reviewTable[i].cigarID) {
            score += reviewTable[i].score
            reviewCount++;
           html += `<tr><td class="reviewText">${reviewTable[i].review}</td><td class="reviewScore"><span id="star">★</span> ${reviewTable[i].score}</td></tr>`
       } 
    }
    score = score / reviewCount;
    document.querySelector('.warning').innerHTML = '<p style="display:none;"> 리뷰 내용을 작성하셔야 합니다. </p>'
    document.querySelector('.cigarScore > span').innerHTML = `이 담배의 평균 평점:  <span id="star">★</span> ${score.toFixed(1)}/5`
    document.querySelector('.reviewTable').innerHTML = html
    document.querySelector('.inputArea > textarea').value = null;
}

function addReview() {
    let url = new URLSearchParams(location.search)
    let cigarID = parseInt(url.get('cigarID'))

    let review = document.querySelector('.inputArea > textarea').value
    if(review == ''){
        document.querySelector('.warning').innerHTML = '<p style="display:relative;"> 리뷰 내용을 작성하셔야 합니다. </p>'
        return;
    }
    let score = parseInt(document.querySelector('.buttonArea > .reviewScore').value)

    let reviewID = reviewTable.length == 0 ? 1 : reviewTable[reviewTable.length - 1].reviewID + 1
    
    let year = new Date().getFullYear()
    let month = new Date().getMonth() < 10 ? `0${new Date().getMonth() + 1}` : new Date().getMonth();
    let day = new Date().getDate()
    let listDay = `${year}-${month}-${day}`

    let object = { reviewID, cigarID, memberID: 40003, review, score, listDay }

    reviewTable.push(object)
    
    printDetail()
}