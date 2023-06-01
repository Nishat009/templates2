
"use strict";

if (localStorage.getItem('dark') === '1') {
    document.documentElement.classList.add('dark');
}

if(localStorage.getItem('langs')=="arabic"){
    document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
}