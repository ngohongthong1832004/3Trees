const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// animation search
;(function() {
    const searchEl = $('.header__wrap__logoSearch')
    const inputSearchEl = $('.input__search')
    const iconSearchEl = $('.search__logo')

    searchEl.onclick = function () {
        inputSearchEl.classList.add('open')
    }
    iconSearchEl.ondblclick = function () {
        inputSearchEl.classList.remove('open')

    }
})();

//CLOCK
function clockTime() {
    var clock = new Date
    var hours = clock.getHours()
    var minutes = clock.getMinutes()
    var dates = clock.getDate()
    switch (months = clock.getMonth()) {
        case 0:
            months ='January'
            break;
        case 1:
            months ='February'
            break;
        case 2:
            months ='March'
            break;
        case 3:
            months ='April'
            break;
        case 4:
            months ='May'
            break;
        case 5:
            months ='June'
            break;
        case 6:
            months ='July'
            break;
        case 7:
            months ='August'
            break;
        case 8:
            months ='September'
            break; 
        case 9:
            months = 'October'
            break;
        case 10:
            months = 'November'
            break;
        case 11:
            months ='December'
            break;
    }
    var years = clock.getFullYear()
    const hourEl = $('.hour')
    const minuteEl = $('.minute')
    const monthEl = $('.month')
    const dayEl = $('.day')
    const yearEl = $('.year')
    
    hourEl.innerHTML = formatTime(hours);
    minuteEl.innerHTML = formatTime(minutes+1);
    monthEl.innerHTML = months;
    dayEl.innerHTML = dates;
    yearEl.innerHTML = years;

};
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
clockTime();
setInterval(clockTime,50000)
// QUOTE





// soundtrack
const relax = {
    isPlaying : true,
    playRelax : function () {
        const btn__relax = $('.button__toggle__play');
        const pause__music = $('.icon__music__pause');
        const play__music = $('.icon__music__play');
        const audioSoundtrackEl = $('.audio__soundtrack');

        btn__relax.onclick = function (){
            if(relax.isPlaying) {
                audioSoundtrackEl.play()
             }
            else {
                audioSoundtrackEl.pause()
            }
        }
        audioSoundtrackEl.onplay = function () {
            pause__music.classList.toggle('toggle__music__pause')
            play__music.classList.toggle('toggle__music__play')
            relax.isPlaying = false
        }
        audioSoundtrackEl.onpause = function () {
            pause__music.classList.toggle('toggle__music__pause')
            play__music.classList.toggle('toggle__music__play')
            relax.isPlaying = true
        }
    }
};
relax.playRelax()

//animation action click 
;(function () {
    const btn__bar = $('.icon__bar')
    const footerEl = $('.footer')
    const inttertainmentEl = $('.intertainment')
    const notificationEl = $('.notification')
    const mainEl = $('.main')
    const btn__exit = $('.exit')

    btn__bar.onclick = function () {
        if(inttertainmentEl.classList.contains('open') && notificationEl.classList.contains('open')) { 
            inttertainmentEl.classList.remove('open')
            notificationEl.classList.remove('open')
            mainEl.classList.remove('zoomIn')
            footerEl.classList.remove('zoomInFooter')
        }
        else{
            inttertainmentEl.classList.add('open')
            notificationEl.classList.add('open')
            mainEl.classList.add('zoomIn')
            footerEl.classList.add('zoomInFooter')
        }
        if(mainEl.classList.contains('zoomOut')){
            notificationEl.classList.add('open')
            mainEl.classList.remove('zoomOut')
            footerEl.classList.remove('zoomOutFooter')
        }
    }
    btn__exit.onclick = function () {
        notificationEl.classList.remove('open')
        mainEl.classList.add('zoomOut')
        footerEl.classList.add('zoomOutFooter')
    }


})();

    
    





