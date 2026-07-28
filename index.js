console.log("hi")

let reviewTable = [
    { reviewID: 20000, cigarID: 50000, memberID: 40000, review: '필만해요', score: 4 },
    { reviewID: 20001, cigarID: 50002, memberID: 40002, review: '목 뚫리는줄', score: 2 },
    { reviewID: 20002, cigarID: 50005, memberID: 40005, review: '노맛', score: 1 },
    { reviewID: 20003, cigarID: 50003, memberID: 40003, review: '뭔지모름', score: 1 }
]

let brandTable = [
    { brandID: 10001, brandName: '말보로', brandLogo: '/src/img' },
    { brandID: 10001, brandName: '에쎄', brandLogo: '/src/img' },
    { brandID: 10001, brandName: '던힐', brandLogo: '/src/img' },
    { brandID: 10001, brandName: '레종', brandLogo: '/src/img' },
    { brandID: 10001, brandName: '말보로', brandLogo: '/src/img' },
]

let cigarTable = [
    { cigarID: 50000, brandID: 10002, cigarName: '에쎄 히말라야', price:4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg:'/src/img'},
    { cigarID: 50001, brandID: 10002, cigarName: '에쎄 체인지 3mg', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: '/src/img' },
    { cigarID: 50002, brandID: 10001, cigarName: '말보로 레드', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: '/src/img' },
    { cigarID: 50003, brandID: 10004, cigarName: '이오니아 그린', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: '/src/img' }
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
// 6.  JS 메모리 샘플 데이터

// 상단 메뉴 클릭 시 각 카테고리/페이지로 이동
function 연초페이지이동(카테고리) {}
function 릴페이지이동(카테고리) {}
function 아이코스페이지이동(카테고리) {}
function 담배브랜드페이지이동() {}
function 커뮤니티페이지이동() {}

// 카테고리별 제품 조회 및 필터링
function 제품목록조회(카테고리) {}
function 제품상세보기(제품ID) {}
function 제품별점조회(제품ID) {}
function 제품검색(검색어) {}

// 커뮤페이지 
function 오늘의핫글(게시글ID){}
function 게시물보기(게시글ID){}
function 게시물작성(게시글ID) {}
function 게시물삭제(회원고유ID) {}
function 게시물수정(회원고유ID) {}

// 커뮤상세 페이지 투표 반응
function 추천(게시글ID) {}
function 비추천(게시글ID) {}
function 댓글남기기(회원고유ID){}

// 담배브랜드 페이지

function 브랜드목록조회(브랜드ID){}
function 인기브랜드목록(담배ID){}

function 초성필터링(){}
function 초성별제품조회(){}