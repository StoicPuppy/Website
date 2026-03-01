
window.addEventListener('scroll', (e) => {
  _APP.OnScroll(window.scrollY);
});


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos){
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-55px";
    }
    prevScrollpos = currentScrollPos;
}
/////////////////////////////////////////////////////////////////////
// https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp //
/////////////////////////////////////////////////////////////////////

///////////
// page transition code
///////////


window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('.GoTo');

    setTimeout(() => {
        transition_el.classList.remove('is-active')
    }, 500);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            transition_el.classList.add('is-active');
            console.log(target);

            setTimeout(() => {
                window.location.href = target;
            }, 500);
        })
    }
}

/* this code was taken from the exercise in class and the video related to the course material
I need to fix is because the Contact Me part doesn't work yet and Im not satisfied with the
transition fully but its a start*/

