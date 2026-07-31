function 개추(){
    const span = document.querySelector('.cnt-up');
    let count = parseInt(span.innerText, 10) || 0;
    span.innerHTML = count + 1;
}

function 비추() {
    const span = document.querySelector('.cnt-down');
    let count = parseInt(span.innerText, 10) || 0;
    span.innerHTML = count + 1;
}

