// 모달
const modal = document.getElementById('modal');
// 열기
function confirm() {
    modal.style.setProperty("display", "block")
}
// 닫기
function modalClose() {
    modal.style.setProperty("display", "none");
}

// 모달2
const modal2 = document.getElementById('modal2');
// 열기
function confirm2() {
    modal2.style.setProperty("display", "block")
}
// 닫기
function modalClose2() {
    modal2.style.setProperty("display", "none");
}


// 미리보기 오프캔버스
const preview = document.getElementById('preview');
// 열기
function previewOpen() {
    preview.style.setProperty("display", "block")
    setTimeout(() => {
        preview.classList.add("on")    
    }, 1);
    
}
// 닫기
function previewClose() {
    preview.classList.remove("on")
    setTimeout(() => {
        preview.style.setProperty("display", "none");
    }, 200);
}