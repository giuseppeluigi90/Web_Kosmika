
document.addEventListener('DOMContentLoaded', function() {
    let imagenes = [
        {img: 'assets/img/galeria/1.jpg'},
        {img: 'assets/img/galeria/2.jpg'},
        {img: 'assets/img/galeria/3.jpg'},
        {img: 'assets/img/galeria/4.jpg'},
        {img: 'assets/img/galeria/5.jpg'},
        {img: 'assets/img/galeria/6.jpg'},
        {img: 'assets/img/galeria/7.jpg'},
        {img: 'assets/img/galeria/8.jpg'},
        {img: 'assets/img/galeria/9.jpg'},
        {img: 'assets/img/galeria/10.jpg'},
        {img: 'assets/img/galeria/11.jpg'},
        {img: 'assets/img/galeria/12.jpg'},
        {img: 'assets/img/galeria/13.jpg'},
        {img: 'assets/img/galeria/14.jpg'},
        {img: 'assets/img/galeria/15.jpg'},
        {img: 'assets/img/galeria/16.jpg'},
        {img: 'assets/img/galeria/17.jpg'},
        {img: 'assets/img/galeria/18.jpg'},
        {img: 'assets/img/galeria/19.jpg'},
        {img: 'assets/img/galeria/20.jpg'},
    ]

    let contador = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.galeria img')
    const img_slideshow = document.querySelector('.slideshow img')

    contenedor.addEventListener('click', function(event) {

        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('.img'),
            tgt = event.target
        
            if (tgt == atras) {
                if (contador > 0) {
                    img.src = imagenes[contador -1].img
                    contador--
                } else {
                    img.src = imagenes[imagenes.length -1].img
                    contador = imagenes.length -1
                }
            } else if (tgt == adelante) {
                if (contador < imagenes.length - 1) {
                    img.src = imagenes[contador + 1].img
                    contador ++
                } else {
                    img.src = imagenes[0].img
                    contador = 0
                }
            } 
    })

    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_select = +event.target.dataset.imgMostrar
            img_slideshow.src = imagenes[imagen_select].img
            contador = imagen_select
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    document.querySelector('.btn_cerrar').addEventListener('click', () => {
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })


})