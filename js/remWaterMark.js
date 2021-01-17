(document.onreadystatechange=function(){
    if (document.readyState === "complete"){
        a = document.getElementsByTagName("div");
        b = a[a.length-1];
        b.parentElement.removeChild(b);
    }
})();