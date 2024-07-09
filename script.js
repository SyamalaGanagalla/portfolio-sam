var typed = new Typed(".multi",{
    strings: ["UI/UX Designer" , "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})
let filterItem = document.querySelector('.no');
let filterImages = document.querySelectorAll('.card');

window.addEventListener('load',()=>{
    filterItem.addEventListener('click',(selectedItem)=>{
        if(selectedItem.target.classList.contains('pot')){
            document.querySelector('.menu-active').classList.remove('menu-active');
            selectedItem.target.classList.add('menu-active');
            let filterName =  selectedItem.target.getAttribute('data-name');
            filterImages.forEach((image)=>{
                let filterImages = image.getAttribute('data-name');
                if((filterImages == filterName ) || filterName == 'all'){
                    image.style.display='block';
                }
                else{
                    image.style.display='none';
                }
            })
        }
    })
})

const navlinks = document.querySelectorAll('.header');

navlinks.forEach(navlink => {
    navlink.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        navlink.classList.add('active');
    })
})



const sectionlinks = document.querySelectorAll('.section');

let currentSection = 'home';
window.addEventListener('scroll', () => {
    sectionlinks.forEach(sectionlink => {
        if (window.scrollY >=(sectionlink.offsetTop - sectionlink . clientHeight / 4 )) {
            currentSection = sectionlink.id;
        }
    }) 
    
    navlinks.forEach(navlink => {
        if ( navlink.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            navlink.classList.add('active');
        }
    })
})