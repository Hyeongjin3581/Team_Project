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

let brandTable = [
    { brandID: 10001, brandName: '말보로', brandLogo: '/src/img', initial : 'ㅁ'},
    { brandID: 10002, brandName: '에쎄', brandLogo: '/src/img', initial : 'ㅇ'  },
    { brandID: 10003, brandName: '던힐', brandLogo: '/src/img', initial : 'ㄷ' },
    { brandID: 10004, brandName: '레종', brandLogo: '/src/img', initial : 'ㄹ'},
]

let cigarTable = [
    { cigarID: 50000, brandID: 10004, cigarName: '레종 블루', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/cigar.png' },
    { cigarID: 50001, brandID: 10002, cigarName: '에쎄 체인지 1mg', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/에쎄체인지1mg.jpg' },
    { cigarID: 50002, brandID: 10004, cigarName: '이오니아 핑크', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/이오니아핑크.jpg' },
    { cigarID: 50003, brandID: 10004, cigarName: '이오니아 그린', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/cigar2.jpg' },
    { cigarID: 50004, brandID: 10001, cigarName: '말보로 골드', price: 5000, nicotine: 0.4, tar: 6, isCapsule: false, cigarImg: 'src/말보로골드.jpg' },
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
]

let listTable = [
    { listID: 70000, MemberID: 40000, listTitle: ' ~ 후기', listContent: '그 담배요?', listDay: '2026-07-28', thumbsUp: 212, thumbsDown: 1231111111 },
    { listID: 70001, MemberID: 40002, listTitle: '담배 추천좀', listContent: '제가 본 담배중', listDay: '2026-07-29', thumbsUp: 123, thumbsDown: 24 }
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

brandPrint('ㄷ')
// 담배브랜드 목록 페이지 렌더링
function brandPrint(param){
    console.log(param) // 기본값 : ㄷ
    let brandID; // 초성이 ㄷ(기본값)으로 시작하는 브랜드명 ID 담을 지역변수
    let html = '' // 브랜드에 맞는 담배 테이블 html 담을 지역변수

    // 선택한 초성에 맞는 브랜드 ID 검사
    for(let i = 0; i <= brandTable.length - 1; i++){
        if (brandTable[i].initial == param) {
            brandID = brandTable[i].brandID
            html += `<td class="brandName">${brandTable[i].brandName}</td><td class="brandList">`
        }
    }
    console.log(brandID) // 기본값 : 10003 -> 던힐
    console.log(html) // <tr><td class="brandName">던힐</td><td class="brandList">

    // 던힐 브랜드인 담배목록 출력하기
    let html2 = ''
    for(let i = 0; i <= cigarTable.length - 1; i++){
        if (brandID == cigarTable[i].brandID){
            html2 += `<a href="cigar_detail.html?cigarID=${cigarTable[i].cigarID}">${cigarTable[i].cigarName}</a> <br /> <br/>`
        }
    }
    // 목록에 아무것도 없다면?
    if (html2 == '') {
        html2 = '<span>해당 브랜드의 담배 정보가 없습니다.</span>'
    }

    // 담배 테이블에 반영하기 td태그 닫기
    html += html2
    html += `</td>`
    console.log(html)
    document.querySelector('.brands tr').innerHTML = html
}