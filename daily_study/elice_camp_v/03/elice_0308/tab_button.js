// 3) Tabs

var links = document.querySelectorAll(".tabs-list li a") // 탭버튼
var items = document.querySelectorAll(".tabs-list li") // 아래 소개내용
for (var i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
        e.preventDefault() ; // 기본 기능(a href 이동기능) 정지
    }
}

for (var i = 0; i < items.length; i++) {
    items[i].onclick = function() { // 각 탭에 클릭이 발생했을 때
        var tabId = this.querySelector("a").getAttribute("href") ;
        console.log(this.classList);
        document.querySelectorAll(".tabs-list li, .tabs div.tab").forEach(function(item) {
            item.classList.remove("active");
            console.log(item);
        });
        document.querySelector(tabId).classList.add("active"); // active class를 추가
        this.classList.add("active");
    }  
} 