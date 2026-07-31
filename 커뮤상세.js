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
   2. 데이터베이스 테이블 역할 (기존 테이블 + 신규 커뮤니티 테이블)
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

// 신규 커뮤니티 댓글 테이블 (기본 샘플 데이터)
let commuTable = [
    { commuID: 30000, cigarID: 50000, memberID: 40000, userNAME: '요네', userPHOTO: 'img/페페담배.jpeg', content: '한번 펴봤는데 그럭저럭 필만 하네요~', timeStr: '14:30', createdDay: '2026-07-01' },
    { commuID: 30001, cigarID: 50001, memberID: 40002, userNAME: '베인', userPHOTO: 'img/프사2.jpg', content: '목 뚫리는줄', timeStr: '16:05', createdDay: '2026-07-28' },
    { commuID: 30002, cigarID: 50002, memberID: 40005, userNAME: '징크스', userPHOTO: 'img/프사5.jpg', content: '노맛', timeStr: '18:22', createdDay: '2026-07-29' },
    { commuID: 30003, cigarID: 50003, memberID: 40001, userNAME: '야스오', userPHOTO: 'img/프사1.jpg', content: '내 이전 작성글 테스트!', timeStr: '19:10', createdDay: '2026-07-30' },
];


/* ==========================================================================
   3. DOM 메인 로직
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

    /* --- [1. 추천 / 비추천 투표 기능] --- */
    const upBtns = document.querySelectorAll('.up-btn');
    const downBtns = document.querySelectorAll('.down-btn');
    const cntUpList = document.querySelectorAll('.cnt-up');
    const cntDownList = document.querySelectorAll('.cnt-down');

    let hasVoted = false;

    const disableAllButtons = () => {
        hasVoted = true;
        [...upBtns, ...downBtns].forEach(btn => {
            btn.disabled = true;
            btn.style.cursor = 'not-allowed';
            btn.style.opacity = '0.4';
        });
    };

    upBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (hasVoted) return;
            cntUpList.forEach(span => {
                let count = parseInt(span.textContent, 10) || 0;
                span.textContent = count + 1;
            });
            disableAllButtons();
        });
    });

    downBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (hasVoted) return;
            cntDownList.forEach(span => {
                let count = parseInt(span.textContent, 10) || 0;
                span.textContent = count + 1;
            });
            disableAllButtons();
        });
    });


    /* --- [2. 본인 댓글 확인 및 삭제 권한 제어] --- */
    const CP = document.querySelector('.input');
    const CB = document.querySelector('.comment');
    const commentList = document.querySelector('.comment-list');

    // 현재 로그인된 유저 세팅 (MemberID: 40001인 '야스오')
    // 로그인 기능을 연동할 때 세션/쿠키/전역변수의 로그인 사용자 ID로 변경하면 됩니다.
    const currentMemberID = 40001; 
    const currentUser = memberTable.find(m => m.MemberID == currentMemberID) || {
        MemberID: 99999,
        userNAME: '익명',
        userPHOTO: 'img/프사1.jpg'
    };

    // localStorage 불러오기 / 저장하기
    const getStoredCommuTable = () => {
        const stored = localStorage.getItem('commuList');
        return stored ? JSON.parse(stored) : null;
    };

    const setStoredCommuTable = (data) => {
        localStorage.setItem('commuList', JSON.stringify(data));
    };

    /**
     * 댓글 렌더링 함수 (본인 ID 체크하여 삭제 버튼 생성 여부 결정)
     */
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

        // 작성자 본인인지 확인 (Boolean)
        const isMyComment = (item.memberID == currentUser.MemberID);

        // 본인 댓글일 때만 삭제 버튼 HTML 포함
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

        // 보안(XSS 방지)을 위한 textContent 처리
        CI.querySelector('.txt').textContent = item.content;

        // 본인 댓글인 경우 삭제 버튼 클릭 이벤트 등록
        if (isMyComment) {
            const delBtn = CI.querySelector('.del-btn');
            if (delBtn) {
                delBtn.addEventListener('click', () => {
                    // 한번 더 본인 검증 후 처리
                    if (item.memberID !== currentUser.MemberID) {
                        alert('본인이 작성한 댓글만 삭제할 수 있습니다.');
                        return;
                    }

                    // DOM 제거
                    CI.remove();

                    // commuTable 배열에서 해당 항목 제거 후 localStorage 저장
                    commuTable = commuTable.filter(c => c.commuID != item.commuID);
                    setStoredCommuTable(commuTable);
                });
            }
        }

        commentList.appendChild(CI);
    };

    /**
     * [초기화] localStorage 데이터 동기화 및 출력
     */
    const initCommuList = () => {
        if (!commentList) return;

        const storedCommu = getStoredCommuTable();

        if (storedCommu) {
            commuTable = storedCommu;
        } else {
            setStoredCommuTable(commuTable);
        }

        commuTable.forEach(item => renderComment(item));
    };

    // 초기 댓글 목록 렌더링
    initCommuList();

    // --- [댓글 등록 처리] ---
    if (CB && CP && commentList) {
        CB.addEventListener('click', () => {
            const text = CP.value.trim();

            if (!text) {
                alert('댓글 내용을 입력해주세요.');
                return;
            }

            const now = new Date();
            const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

            // 현재 로그인 유저의 MemberID가 부여된 새 커뮤니티 데이터
            const newCommuRecord = {
                commuID: Date.now(),
                cigarID: 50000,
                memberID: currentUser.MemberID,  // 현재 로그인 회원 ID 입력
                userNAME: currentUser.userNAME,
                userPHOTO: currentUser.userPHOTO,
                content: text,
                timeStr: timeStr,
                createdDay: now.toISOString().split('T')[0]
            };

            // 메모리 배열 및 localStorage 업데이트
            commuTable.push(newCommuRecord);
            setStoredCommuTable(commuTable);

            // 화면에 댓글 추가 (본인이 작성한 댓글이므로 삭제 버튼 표시)
            renderComment(newCommuRecord);

            CP.value = '';
        });
    }
});