import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule], // Importar FormsModule para usar el Two Way Data Binding.
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  // Crear el array con 2 noticias:
  // CREAR UNA INTERFAZ //
  arrNoticias: any[] = [
    
  ]

  newNoticia: any = {
      "titulo": "",
      "imagen": "",
      "cuerpo": "",
      "fecha": null
  }
  
  publicar() {
    this.arrNoticias.push(this.newNoticia)
    // Vaciar el array antes de anadir otra noticia // 
    this.newNoticia = {
      "titulo": "",
      "imagen": "",
      "cuerpo": "",
      "fecha": null
    }

    console.log(this.arrNoticias)
  }

  cargarNoticias(): string {
    let html: string = ""
    this.arrNoticias.forEach((noticia: any) => {
      html += `
      <h2>${noticia.titulo}</h2>
      <img src="${noticia.imagen}" alt="">
      <p>${noticia.cuerpo}</p>
      <hr>
      <p>${noticia.fecha}</p>
      
      `
    })
    return html

  }

  }

