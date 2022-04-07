fetch("newspaper.json").then(response => response.json()).then(data => {

    data.forEach( function (value, index, arr) {

        DesignBox = [
            "text-right",
            "text-left",
            "text-bottom"
        ];

        design = Math.random(DesignBox)

        const div_slider = document.createElement("div")
    
        div_slider.classList.add('slide')

        index===0 ? div_slider.classList.add('show') : div_slider.classList.add('hide')

        div_slider.classList.add( DesignBox[Math.floor(Math.random() * DesignBox.length)] )

        const titulo = document.createElement("h1")
        titulo.innerHTML = data[index].titulo
        titulo.classList.toggle('title-text')

        const descricao = document.createElement("h2")
        descricao.innerHTML = data[index].descricao
        descricao.classList.toggle('title-description')

        const noticia = document.createElement("h3")
        noticia.innerHTML = data[index].noticia
        noticia.classList.toggle('text')

        div_slider.append(titulo)
        div_slider.append(descricao)
        div_slider.append(noticia)

        document.querySelector("#slider").appendChild(div_slider);

    });

})

function nextSlide(){

    document.getElementById('buttonNext').classList.toggle = "buttonActive"

    loadedSlides = document.getElementsByClassName('slide')

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