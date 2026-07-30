document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. 추천 / 비추천 (1회 선택 제한 기능)
    // ==========================================
    const cntUp = document.querySelector('#cntUp');
    const cntDown = document.querySelector('#cntDown');

    const topBtnUp = document.querySelector('#btnUp');
    const topBtnDown = document.querySelector('#btnDown');
    
    const rsBtnUp = document.querySelector('.rs .up-btn');
    const rsBtnDown = document.querySelector('.rs .down-btn');

    let hasVoted = false; // 중복 선택 방지

    const doUp = () => {
        if (hasVoted) return;
        if (cntUp) {
            let count = parseInt(cntUp.textContent, 10);
            cntUp.textContent = count + 1;
        }
        disableAllButtons();
    };

    const doDown = () => {
        if (hasVoted) return;
        if (cntDown) {
            let count = parseInt(cntDown.textContent, 10);
            cntDown.textContent = count + 1;
        }
        disableAllButtons();
    };

    // 모든 추천/비추천 버튼 비활성화 처리
    const disableAllButtons = () => {
        hasVoted = true;
        [topBtnUp, topBtnDown, rsBtnUp, rsBtnDown].forEach(btn => {
            if (btn) {
                btn.disabled = true;
                btn.style.cursor = 'not-allowed';
                btn.style.opacity = '0.4';
            }
        });
    };

    // 이벤트 등록
    topBtnUp?.addEventListener('click', doUp);
    topBtnDown?.addEventListener('click', doDown);
    rsBtnUp?.addEventListener('click', doUp);
    rsBtnDown?.addEventListener('click', doDown);

    // ==========================================
    // 2. 댓글 목록 세로 누적 추가 기능
    // ==========================================
    const commentInput = document.querySelector('.input');
    const commentBtn = document.querySelector('.comment');
    const commentList = document.querySelector('.comment-list');

    if (commentBtn && commentInput && commentList) {
        commentBtn.addEventListener('click', () => {
            const text = commentInput.value.trim();
            if (!text) {
                alert('댓글 내용을 입력해주세요.');
                return;
            }

            // 작성 시간 (HH:MM)
            const now = new Date();
            const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

            // 댓글 아이템 생성
            const commentItem = document.createElement('div');
            commentItem.style.cssText = `
                display: flex;
                align-items: flex-start;
                gap: 12px;
                padding: 12px;
                background-color: #ffffff;
                border-radius: 8px;
                border: 1px solid #dcdcdc;
                box-shadow: 0 1px 3px rgba(0,0,0,0.05);
                width: 100%;
            `;

            commentItem.innerHTML = `
                <img src="img/프사1.jpg" alt="프로필" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover;">
                <div style="flex: 1;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                        <div>
                            <strong style="font-size: 13px; color: #333; margin-right: 6px;">익명</strong>
                            <span style="font-size: 11px; color: #888;">${timeStr}</span>
                        </div>
                        <button class="del-btn" style="background: none; border: none; color: #999; cursor: pointer; font-size: 12px;">삭제</button>
                    </div>
                    <p class="txt" style="font-size: 14px; line-height: 1.4; color: #222; margin: 0; white-space: pre-wrap; word-break: break-all;"></p>
                </div>
            `;

            commentItem.querySelector('.txt').textContent = text;
            commentItem.querySelector('.del-btn').addEventListener('click', () => commentItem.remove());

            // ⭐ Comment 버튼 아래쪽에 차곡차곡 추가
            commentList.appendChild(commentItem);

            // 입력창 초기화
            commentInput.value = '';
        });
    }
});