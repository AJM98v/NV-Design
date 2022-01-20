function MenuMobile(x) {
    x.classList.toggle('change')
    var nav = document.getElementById('mobileMenu')
    var li = nav.children
    for (var i = 0; i < li.length; i++) {
        if (li[i].style.display === "block") {
            li[i].style.display = "none"
        } else {
            li[i].style.display = "block"
        }
    }

}


function cvShow() {
    var cv = document.getElementById('cvForm')
    cv.style.display = "block";
    cv.style.height = "100%"
}

function closeCV() {
    var cvForm = document.getElementById('cvForm')
    cvForm.style.height = "0"

}


function showMore() {
    document.getElementById('MoreProduct').style.display="block"
    document.documentElement.scrollTop=0;
}
function CloseMore(){
    document.getElementById('MoreProduct').style.display="none"
}

//window.pageYOffset
//location.hash
