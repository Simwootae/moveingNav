var navi = document.querySelector(".navigation ")
console.log(navigation)
window.addEventListener('scroll',fixed);
function fixed()
{
    if(window.scrollY > 0)
    {
        console.log(window.scrollY);
        navi.classList.add('fixed');
        navi.style.top=`${100}px`;
        navi.style.backgroundColor = "blue";
    }
    else
    {
        console.log();
        navi.classList.remove('fixed');
        navi.style.top=`${0}px`;
        navi.style.backgroundColor = "rgb(30, 30, 128)";
    }
}