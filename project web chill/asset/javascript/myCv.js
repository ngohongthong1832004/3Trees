const $ = document.querySelector.bind(document)


 function download() {  
    mainEl = $('.main');
    btn__downloadEl = $('.btn__download');
    btn__downloadEl.onclick = function(){
        file = ".pdf"
        data = 'http://127.0.0.1:5500/project%20web%20chill/html/myCv.html'
        mainEl.setAtribute('href',data)
        mainEl.setAtribute('download',file)
        
    }       
}
 download()

   

