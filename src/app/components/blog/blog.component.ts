import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule], // Importar FormsModule para usar el Two Way Data Binding.
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  // Crear el array con 2 noticias, siguiendo la interfaz INoticia:
  arrNoticias: INoticia[] = []
  //Crear el array newNoticia (Vacio) para incluir las nuevas noticias:
  newNoticia: INoticia = {
    title: "",
    url: "",
    content: "",
    date: ""
  }
  
  // Inicializar el array de noticias original: 
  constructor() {
    this.arrNoticias = [
      {
          title: "La inteligencia artificial ya desvela secretos de Pompeya",
          url: "assets/images/pompeya-image.jpeg",
          content: "La comunidad científica ha logrado, mediante el uso de inteligencia artificial, leer un pergamino carbonizado de hace 2000 años proveniente de la erupción del Vesubio en el 79 d.C., que durante mucho tiempo se consideró ilegible. Este avance fue anunciado por los organizadores del Desafío del Vesubio, una competición que ofrece premios para extraer textos perdidos de los famosos pergaminos de Herculano. Un equipo de tres competidores reveló 15 columnas de texto, aproximadamente el 5% del contenido del pergamino, ofreciendo un vistazo a reflexiones epicúreas sobre el placer. Este logro se alcanzó gracias a los avances en inteligencia artificial y tecnología informática, que permitieron leer los pergaminos sin abrirlos físicamente. Este hito representa un avance significativo en la decodificación de los antiguos textos, lo que podría conducir a una mayor comprensión de la historia y la filosofía de la antigüedad.",
          date: "2024-02-08"
        },
        {
          title: "¿Qué implica que haya un océano bajo la Estrella de la Muerte de Saturno?",
          url: "assets/images/saturno-image.jpg",
          content: "Un nuevo análisis de las observaciones de la nave espacial Cassini revela la existencia de un océano líquido bajo la superficie de la luna Mimas de Saturno, sorprendiendo a los astrónomos. El movimiento de balanceo de Mimas está causado por este océano, según el estudio publicado en Nature. Este descubrimiento se suma a la lista de océanos subsuperficiales en el sistema solar y plantea la posibilidad de evolución de la vida en la luna. A pesar de su apodo como la Estrella de la Muerte, debido a un gran cráter, Mimas alberga un océano subterráneo, lo que sugiere que los océanos subterráneos podrían ser más comunes en nuestro sistema solar de lo que se pensaba.",
          date: "2024-02-05"
      }
    ]
  }

  publicar() {
    // Validacion del formulario:
    if (this.newNoticia.title && this.newNoticia.url && this.newNoticia.content && this.newNoticia.date) {
      // Agregar la noticia nueva al principio de la lista:
      this.arrNoticias.unshift(this.newNoticia)
      // Vaciar el array antes de anadir otra noticia // 
      this.newNoticia = {
        title: "",
        url: "",
        content: "",
        date: ""
        }
    } else {
      alert("Todos los campos son obligatorios")
    }
  }

    cargarNoticias(): string {
    let html: string = ""
    this.arrNoticias.forEach((noticia: INoticia) => {
      html += `
      <article class="noticia__card">
      <div class="noticia__card__img--box">
        <img src="${noticia.url}" alt="" class="noticia__card__img">
      </div>
      
      <div class="noticia__card__content">
        <span class="noticia__card__content--date">${noticia.date}</span>
        <h2 class="noticia__card__content--title">${noticia.title}</h2>
        <p class="noticia__card__content--text">${noticia.content}</p>
      </div>
      </article>
      `
    })
    return html
  }
}


