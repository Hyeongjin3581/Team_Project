/* ==========================================================================
   1. 탭 전환 관련 탭 컨트롤 함수
   ========================================================================== */
function entireClick() {
    document.querySelector('.cigarRank').style.display = 'none';
    document.querySelector('.entireRank').style.display = 'block';

    document.querySelector('.entireBtn').style.borderBottom = '2px solid black';
    document.querySelector('.cigarBtn1').style.borderBottom = 'none';
    document.querySelector('.cigarBtn2').style.borderBottom = 'none';
    document.querySelector('.btn3').style.borderBottom = 'none';
}   

function click2() {
    document.querySelector('.entireRank').style.display = 'none';
    document.querySelector('.cigarRank').style.display = 'block';

    document.querySelector('.entireBtn').style.borderBottom = 'none';
    document.querySelector('.cigarBtn1').style.borderBottom = '2px solid black';
    document.querySelector('.cigarBtn2').style.borderBottom = 'none';
    document.querySelector('.btn3').style.borderBottom = 'none';
}

function click3() {
    document.querySelector('.entireBtn').style.borderBottom = 'none';
    document.querySelector('.cigarBtn1').style.borderBottom = 'none';
    document.querySelector('.cigarBtn2').style.borderBottom = '2px solid black';
    document.querySelector('.btn3').style.borderBottom = 'none';
}

function click4() {
    document.querySelector('.entireBtn').style.borderBottom = 'none';
    document.querySelector('.cigarBtn1').style.borderBottom = 'none';
    document.querySelector('.cigarBtn2').style.borderBottom = 'none';
    document.querySelector('.btn3').style.borderBottom = '2px solid black';
}


/* ==========================================================================
   2. 데이터베이스 테이블 역할 (cigarID 제거 및 30000번대 순차 ID 적용)
   ========================================================================== */
let cigarTable = [
    { cigarID: 50000, brandID: 10002, cigarName: '레종 블루', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/cigar.png' },
    { cigarID: 50001, brandID: 10002, cigarName: '에쎄 체인지 1mg', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/에쎄체인지1mg.jpg' },
    { cigarID: 50002, brandID: 10001, cigarName: '이오니아 핑크', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/이오니아핑크.jpg' },
    { cigarID: 50003, brandID: 10004, cigarName: '이오니아 그린', price: 4500, nicotine: 0.1, tar: 0.1, isCapsule: true, cigarImg: 'src/cigar2.jpg' },
    { cigarID: 50004, brandID: 10003, cigarName: '말보로 골드', price: 5000, nicotine: 0.4, tar: 6, isCapsule: false, cigarImg: 'src/말보로골드.jpg' },
];

let memberTable = [
    { MemberID: 40000, userID: 'dsds31232', userPW: '2134122', userNAME: '요네', userPHOTO: 'img/페페담배.jpeg' },
    { MemberID: 40001, userID: 'lilililil', userPW: 'dsae212', userNAME: '야스오', userPHOTO: 'img/프사1.jpg' },
    { MemberID: 40002, userID: 'wEqweqw232', userPW: '12341234', userNAME: '베인', userPHOTO: 'img/프사2.jpg' },
    { MemberID: 40003, userID: 'smoker01', userPW: 'qwer1234', userNAME: '아리', userPHOTO: 'img/프사3.jpg' },
    { MemberID: 40004, userID: 'mintcapsule', userPW: 'capsule12', userNAME: '티모', userPHOTO: 'img/프사4.jpg' },
    { MemberID: 40005, userID: 'windblue', userPW: 'pass5678', userNAME: '징크스', userPHOTO: 'img/프사5.jpg' },
    { MemberID: 40006, userID: 'goldleaf', userPW: 'gold4321', userNAME: '케인', userPHOTO: 'img/프사6.jpg' },
    { MemberID: 40007, userID: 'reviewking', userPW: 'review99', userNAME: '가렌', userPHOTO: 'img/프사7.jpg' },
    { MemberID: 40008, userID: 'cloudsmoke', userPW: 'smoke777', userNAME: '럭스', userPHOTO: 'img/프사8.jpg' },
];

// cigarID 제거 완료 / 30000번대 순차 정수 ID 사용
let commuTable = [
    { commuID: 30000, memberID: 40000, userNAME: '요네', userPHOTO: 'img/페페담배.jpeg', content: '한번 펴봤는데 그럭저럭 필만 하네요~', timeStr: '14:30', createdDay: '2026-07-01' },
    { commuID: 30001, memberID: 40002, userNAME: '베인', userPHOTO: 'img/프사2.jpg', content: '목 뚫리는줄', timeStr: '16:05', createdDay: '2026-07-28' },
    { commuID: 30002, memberID: 40005, userNAME: '징크스', userPHOTO: 'img/프사5.jpg', content: '노맛', timeStr: '18:22', createdDay: '2026-07-29' },
    { commuID: 30003, memberID: 40001, userNAME: '야스오', userPHOTO: 'img/프사1.jpg', content: '내 이전 작성글 테스트!', timeStr: '19:10', createdDay: '2026-07-30' },
];


/* ==========================================================================
   3. DOM 메인 로직
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

    const CP = document.querySelector('.input');
    const CB = document.querySelector('.comment');
    const commentList = document.querySelector('.comment-list');
    const replySpan = document.querySelector('.reply');

    // 현재 로그인 유저
    const currentMemberID = 40001; 
    const currentUser = memberTable.find(m => m.MemberID == currentMemberID) || {
        MemberID: 40001,
        userNAME: '야스오',
        userPHOTO: 'img/프사1.jpg'
    };

    // --------------------------------------------------------------------------
    // 1. 추천 / 비추천 데이터 불러오기 및 실시간 연동 처리
    // --------------------------------------------------------------------------
    const upBtns = document.querySelectorAll('.up-btn');
    const downBtns = document.querySelectorAll('.down-btn');
    const allUpSpans = document.querySelectorAll('.cnt-up');
    const allDownSpans = document.querySelectorAll('.cnt-down');

    // localStorage에서 최신 추천/비추천 값 로드 (없을 경우 기본값 206, 58)
    let currentUp = localStorage.getItem('hotPostUp');
    let currentDown = localStorage.getItem('hotPostDown');

    if (currentUp === null) {
        currentUp = 206;
        localStorage.setItem('hotPostUp', currentUp);
    } else {
        currentUp = parseInt(currentUp, 10);
    }

    if (currentDown === null) {
        currentDown = 58;
        localStorage.setItem('hotPostDown', currentDown);
    } else {
        currentDown = parseInt(currentDown, 10);
    }

    // 모든 추천/비추천 span 숫자를 현재 저장된 값으로 렌더링
    const renderCounts = () => {
        allUpSpans.forEach(span => {
            span.innerText = currentUp;
        });
        allDownSpans.forEach(span => {
            span.innerText = currentDown;
        });
    };

    // 초기 실행시 수치 맞춤
    renderCounts();

    // 추천 클릭 시: 상단/하단 모두 1 증가 & localStorage 저장
    const updateAllUpCounts = () => {
        currentUp += 1;
        localStorage.setItem('hotPostUp', currentUp);
        renderCounts();
    };

    // 비추천 클릭 시: 상단/하단 모두 1 증가 & localStorage 저장
    const updateAllDownCounts = () => {
        currentDown += 1;
        localStorage.setItem('hotPostDown', currentDown);
        renderCounts();
    };

    // 이벤트 리스너 연결
    upBtns.forEach(btn => {
        btn.addEventListener('click', updateAllUpCounts);
    });

    downBtns.forEach(btn => {
        btn.addEventListener('click', updateAllDownCounts);
    });

    // --------------------------------------------------------------------------
    // 2. localStorage 댓글 데이터 로드 및 저장
    // --------------------------------------------------------------------------
    const getStoredCommuTable = () => {
        const stored = localStorage.getItem('commuList');
        return stored ? JSON.parse(stored) : null;
    };

    const setStoredCommuTable = (data) => {
        localStorage.setItem('commuList', JSON.stringify(data));
    };

    // 댓글 수 [N] UI 업데이트
    const updateReplyCountUI = () => {
        if (replySpan) {
            replySpan.innerHTML = `[${commuTable.length}]`;
        }
    };

    // 댓글 DOM 생성 및 렌더링
    const renderComment = (item) => {
        const CI = document.createElement('div');
        CI.setAttribute('data-commu-id', item.commuID);

        CI.style.cssText = `
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 12px;
            background-color: #ffffff;
            border-radius: 8px;
            border: 1px solid #dcdcdc;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            width: 100%;
            margin-bottom: 8px;
        `;

        const isMyComment = (item.memberID == currentUser.MemberID);
        const deleteBtnHTML = isMyComment 
            ? `<button class="del-btn" style="background: none; border: none; color: #999; cursor: pointer; font-size: 12px;">삭제</button>` 
            : '';

        CI.innerHTML = `
            <img src="${item.userPHOTO}" alt="프로필" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover;">
            <div style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <div>
                        <strong style="font-size: 13px; color: #333; margin-right: 6px;">${item.userNAME}</strong>
                        <span style="font-size: 11px; color: #888;">${item.timeStr}</span>
                    </div>
                    ${deleteBtnHTML}
                </div>
                <p class="txt" style="font-size: 14px; line-height: 1.4; color: #222; margin: 0; white-space: pre-wrap; word-break: break-all;"></p>
            </div>
        `;

        CI.querySelector('.txt').textContent = item.content;

        if (isMyComment) {
            const delBtn = CI.querySelector('.del-btn');
            if (delBtn) {
                delBtn.onclick = () => {
                    if (item.memberID != currentUser.MemberID) {
                        alert('본인이 작성한 댓글만 삭제할 수 있습니다.');
                        return;
                    }

                    CI.remove();
                    commuTable = commuTable.filter(c => c.commuID != item.commuID);
                    setStoredCommuTable(commuTable);
                    updateReplyCountUI();
                };
            }
        }

        commentList.appendChild(CI);
    };

    // 댓글 목록 초기화
    const initCommuList = () => {
        if (!commentList) return;

        const storedCommu = getStoredCommuTable();

        if (storedCommu) {
            commuTable = storedCommu;
        } else {
            setStoredCommuTable(commuTable);
        }

        commentList.innerHTML = '';
        commuTable.forEach(item => renderComment(item));
        updateReplyCountUI();
    };

    initCommuList();

    // 댓글 작성 이벤트 처리
    if (CB && CP && commentList) {
        CB.onclick = () => {
            const text = CP.value.trim();

            if (!text) {
                alert('댓글 내용을 입력해주세요.');
                return;
            }

            const now = new Date();
            const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

            // 30000번대 이후 순차 증가 정수 ID 계산
            const numericIDs = commuTable
                .map(c => Number(c.commuID))
                .filter(id => !isNaN(id) && id >= 30000);

            const nextCommuID = numericIDs.length > 0 
                ? Math.max(...numericIDs) + 1 
                : 30000;

            const newCommuRecord = {
                commuID: nextCommuID,
                memberID: currentUser.MemberID,
                userNAME: currentUser.userNAME,
                userPHOTO: currentUser.userPHOTO,
                content: text,
                timeStr: timeStr,
                createdDay: now.toISOString().split('T')[0]
            };

            commuTable.push(newCommuRecord);
            setStoredCommuTable(commuTable);

            renderComment(newCommuRecord);
            updateReplyCountUI();

            CP.value = '';
        };
    }
});