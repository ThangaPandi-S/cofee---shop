
var headerSection = document.querySelector('header');
window.onscroll = () =>{
    if(scrollY >23){
        headerSection.style.backgroundColor ="#1b1514e7";
    }
    else if(scrollY === 0){
        headerSection.style.backgroundColor="transparent";
    };
};









/* var headerSection = document.querySelector('header');
window.onscroll = () => {
    if (scrollY > 233) {
        headerSection.style.backgroundColor = '#1b1514e7';
    } else {
        headerSection.style.backgroundColor = 'transparent';
    }
};
 */