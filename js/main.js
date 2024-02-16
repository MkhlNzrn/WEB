
page = window.document.location.href
console.log(page)
if (window.document.location.href.includes("page_1.html")){
    elem = document.getElementById("page_1")
    elem.style.background = "red"
    console.log(elem)
}

if (window.document.location.href.includes("page_2.html")){
    elem = document.getElementById("page_2")
    elem.style.background = "red"
    console.log(elem)
}

if (window.document.location.href.includes("page_3.html")){
    elem = document.getElementById("page_3")
    elem.style.background = "red"
    console.log(elem)
}

if (window.document.location.href.includes("page_4.html")){
    elem = document.getElementById("page_4")
    elem.style.background = "red"
    console.log(elem)
}

if (window.document.location.href.includes("page_5.html")){
    elem = document.getElementById("page_5")
    elem.style.background = "red"
    console.log(elem)
}

(function() {
    let startTime = new Date().getTime();

    window.addEventListener('load', function(){
        var loadTime = new Date().getTime() - startTime;

        var loadState = document.createElement('div');
        loadState.style.position = 'fixed';
        loadState.style.backgroundColor = 'white';
        loadState.style.right = '0'
        loadState.style.top = '1px'
        loadState.style.textDecoration = "underline red"
        loadState.innerHTML = 'Load time ' + loadTime + ' мс';

        document.body.appendChild(loadState);
    });
})();

