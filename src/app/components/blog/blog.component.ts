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
  arrNoticias: INoticia[] = [
    {
        title: "Titulo1",
        url: "assets/images/placeholder400.svg",
        content: "loremipsum",
        date: "2024-02-08"
      },
      {
        title: "Titulo2",
        url: "assets/images/placeholder400.svg",
        content: "loremipsum2",
        date: "2024-02-05"
      }
  ]

  newNoticia: INoticia = {
    title: "",
    url: "",
    content: "",
    date: ""
  }

  publicar() {
    // Validacion del formulario:
    if (this.newNoticia.title && this.newNoticia.url && this.newNoticia.content && this.newNoticia.date) {
      this.arrNoticias.push(this.newNoticia)
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
    this.arrNoticias.forEach((noticia: any) => {
      html += `
      <article class="noticia-item">
      <h2>${noticia.title}</h2>
      <img src="${noticia.url}" alt="">
      <p>${noticia.content}</p>
      <span>${noticia.date}</span>
      </article>
      `
    })
    return html
  }
}


