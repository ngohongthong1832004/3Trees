/**btn next and previous */
;(function() {
    const btn__previous = $('.arrow__previous')
    const btn__next = $('.arrow__next')
    const film__list__item__el = $('.film__list__item')
    const film__list__wrap__el = $('.film__list__wrap')
    const arrow__previousEl = $('.arrow__previous')
    const arrow__nextEl = $('.arrow__next')


    // setInterval(() => {
    //     film__list__item__el.scrollBy({
    //         top:0,
    //         left:1,
    //         behavior:'smooth'
    //     })
    // }, 100);


    // btn__previous.onmousedown = function() {
    //     film__list__item__el.scrollBy({
    //         top:0,
    //         left:-10,
    //         behavior:'smooth'
    //     })
    // }

    // btn__next.onmousedown = function() {
    //     film__list__item__el.scrollTo({
    //         top:0,
    //         left:10,
    //         behavior:'smooth'
    //     })
    // }


    btn__previous.onclick = function(){
        film__list__item__el.scrollBy({
            top: 0,
            left: -260,
            behavior: 'smooth'
          });
          
    }
    btn__next.onclick = function(){
        film__list__item__el.scrollBy({
            top: 0,
            left: 260,
            behavior: 'smooth'
          });
    } 

})();


const app__film = {
    listFilmRecomend:[
        {
            backgroundReacommend:'./asset/img/wl-.jpg',
            nameRecommend:'Ghostblade',
            comeOut:'9999',
            detail:'la la la la la l al al a alalalalala',
        },
        {
            backgroundReacommend:'./asset/img/wl-.jpg',
            nameRecommend:'Ghostblade1',
            comeOut:'999977778888',
            detail:'la la la la la l al al a alalalalalahuhuhuhuh',
        },
        {
            backgroundReacommend:'./asset/img/wl-.jpg',
            nameRecommend:'Ghostblade2',
            comeOut:'99991111222',
            detail:'la la la la la l al al a alalalalalahahaaah',
        },
    ],
    listFilmList:[
        {
            backgroundList:'./asset/img/wl-.jpg',
            nameList:'Ghostblade yan1'
        },
        {
            backgroundList:'./asset/img/wl-.jpg',
            nameList:'Ghostblade yan2'
        },
        {
            backgroundList:'./asset/img/wl-.jpg',
            nameList:'Ghostblade yan3'
        }
        
    ],
    listFilmAll:[
        {
            backgroundAll:'./asset/img/wl-.jpg',
            nameAll:'the king of the world1',
            discriptionAll:'mot bo phim kha hay1',
        },
        {
            backgroundAll:'./asset/img/wl-.jpg',
            nameAll:'the king of the world2',
            discriptionAll:'mot bo phim kha hay2',
        },
        {
            backgroundAll:'./asset/img/wl-.jpg',
            nameAll:'the king of the world3',
            discriptionAll:'mot bo phim kha hay3',
        },
        
    ],

    render__recomend__film : function () {
        const film__recommendEl = $('.film__recommend')
        const wrap__imgEl = $('.wrap__img')
        const introduction = $('.introduction')
        const discription = $('.discription')
        const name__film = $('.name__film')
        const comeOut = $('.comeOut')
        const detail = $('.detail')

    },
    render__list__film : function () {
        const film__listEl = $('.film__list')
        const film__list__itemEl = $('.film__list__item')
        const film__itemEl = $('.film__item')
        const film__item__imgEl = $('.film__item__img')
        const film__imgEl = $('.film__img')
        const film__item__nameEl = $('.film__item__name')
        

    },
    render__all__film : function () {
        const film__all__list__itemEl = $('.film__all__list__item')
        const film__all__itemEl = $('.film__all__item')
        const wrap__item__filmEl = $('.wrap__item__film')
        const background__all__itemEl = $('.background__all__item')
        const film__all__nameEl = $('.film__all__name')
        const discription__all__itemEl = $('.discription__all__item')

    },








    start : function () {
    app__film.render__recomend__film();
    app__film.render__list__film();
    app__film.render__all__film();
    },
}
app__film.start()


console.log('ngohonngtong')