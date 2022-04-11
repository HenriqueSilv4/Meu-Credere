fetch("newspaper.json").then(response => response.json()).then(data => {

    data.forEach( function (value, index, arr) {

        const div_slider = document.createElement("div")
        const div_text = document.createElement("div")
    
        div_slider.classList.add('slide')

        index===0 ? div_slider.classList.add('show') : div_slider.classList.add('hide')

        div_text.classList.add(data[index].estilo)
        
        const titulo = document.createElement("h1")
        titulo.innerHTML = data[index].titulo
        titulo.classList.toggle('title-text')

        const descricao = document.createElement("h2")
        descricao.innerHTML = data[index].descricao
        descricao.classList.toggle('title-description')

        const noticia = document.createElement("h3")
        noticia.innerHTML = data[index].noticia
        noticia.classList.toggle('text')

        div_slider.style.background = "url("+ data[index].background +")"
        div_slider.style.backgroundSize = "cover"
        div_slider.style.backgroundRepeat = "no-repeat"

        div_text.append(titulo)
        div_text.append(descricao)
        div_text.append(noticia)
        div_slider.append(div_text)

        document.querySelector("#slider").appendChild(div_slider);

    });

})

var divID = document.getElementsByClassName('loadingBarProgress')
divID[0].style.width = "100%";

setTimeout( () => {
    document.getElementById('buttonSlide').classList.replace('buttonhide','buttonshow')
    divID[0].style.transition = 'none';
    divID[0].style.width = '0%';
},
10000);

function nextSlide(){

    loadedSlides = document.getElementsByClassName('slide')
    document.getElementById('buttonSlide').classList.replace('buttonshow','buttonhide')

    divID[0].style.transition = 'width 10000ms';
    divID[0].style.width = '100%';

    setTimeout( () => {
        document.getElementById('buttonSlide').classList.replace('buttonhide','buttonshow')
        divID[0].style.transition = 'none';
        divID[0].style.width = '0%';
    },
    10000);

    for (let i = 0; i < loadedSlides.length; i++) {

        if (loadedSlides[i].classList.contains("show")) {

            loadedSlides[i].classList.replace('show', 'hide')

            if(i + 1 >= loadedSlides.length){

                loadedSlides[0].classList.replace('hide','show')
                break;
            }

            loadedSlides[i+1].classList.replace('hide', 'show')
  
            break;

        }

    };

}
