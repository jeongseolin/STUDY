// 1) Scroll Navigation
var aTags = document.querySelectorAll("header a"); // 전체 a태그를 가져온다.
for(var i = 0; i < aTags.length; i ++) { // a태그의 각 인덱스 0번부터 2번까지
    aTags[i].onclick = function(e) { 
        e.preventDefault() ;
        var target = document.querySelector(this.getAttribute("href"));

        window.scrollTo ({
            'behavior': 'smooth',
            'top': target.offsetTop
        })
    }
}
