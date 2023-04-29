const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.header__nav');
burgerMenu.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
});

const allElemAnim = document.querySelectorAll(".anim");

if (allElemAnim.length > 0) {
    window.addEventListener("scroll", AnimOnScroll)
    function AnimOnScroll() {
        for (let index = 0; index < allElemAnim.length; index++) {
            const animItem = allElemAnim[index];
            const animHeight = animItem.offsetHeight;
            const animTop = offset(animItem).top;

            const animStart = 4;

            let animItemPoint = window.innerHeight - animHeight / animStart;

            if (animItemPoint > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animTop - animItemPoint) && pageYOffset < (animTop + animHeight)) {
                animItem.classList.add("_active");
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    AnimOnScroll();
}

// const animItems = document.querySelectorAll('._anim-items');

// if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll() {
//         for (let index = 0; index < animItems.length; index++) {
//             const animItem = animItems[index];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }

//             if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//                 animItem.classList.add('_active');
//             } else {
//                 animItem.classList.remove('_active')
//             }
//         }
//     }
//     function offset(el) {
//         const rect = el.getBoundungClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//     }

//     setTimeout(() => {
//         animOnScroll();
//     }, 300);
// }
