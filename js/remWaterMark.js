(document.onreadystatechange=function(){    //function tied to readyState event
    if (document.readyState === "complete"){ //wait till page load
        a = document.querySelectorAll("html > body > div > a > img")[0].parentElement.parentElement; //select divs ONLY in body (to not step on any important and 'outer' div)
        a.parentElement.removeChild(a); //move 1 tag up (body), then delete selected div
    }
})();   //(); aka self-execute script!
