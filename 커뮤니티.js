// --------------------------------------------------------------------------
// 1. 추천 / 비추천 상태 불러오기 및 UI 초기화
// --------------------------------------------------------------------------
let currentUp = localStorage.getItem('hotPostUp');
let currentDown = localStorage.getItem('hotPostDown');

// localStorage 값이 없으면 기본값(206, 58) 설정
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

// 화면 수치 반영 함수
function renderCounts() {
    const allUpSpans = document.querySelectorAll('.cnt-up');
    const allDownSpans = document.querySelectorAll('.cnt-down');

    allUpSpans.forEach(span => {
        span.innerText = currentUp;
    });

    allDownSpans.forEach(span => {
        span.innerText = currentDown;
    });
}

// DOM 로드 완료 시 화면 최신화
document.addEventListener('DOMContentLoaded', () => {
    renderCounts();
});


// --------------------------------------------------------------------------
// 2. HTML onclick 전역 함수 구현
// --------------------------------------------------------------------------
function 개추() {
    currentUp += 1;
    localStorage.setItem('hotPostUp', currentUp);
    renderCounts();
}

function 비추() {
    currentDown += 1;
    localStorage.setItem('hotPostDown', currentDown);
    renderCounts();
}