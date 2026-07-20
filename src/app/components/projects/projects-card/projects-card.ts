import { Component, Input, signal } from '@angular/core';
import { Project } from '../interfaces/projects.interfaces';

@Component({
  selector: 'app-projects-card',
  imports: [],
  templateUrl: './projects-card.html',
  styleUrl: './projects-card.css',
})
export class ProjectsCard {
@Input({required:true})
project!:Project;

// Señales de estado
  isModalOpen = signal(false);
  currentImageIndex = signal(0);

  openModal() {
    this.currentImageIndex.set(0);
    this.isModalOpen.set(true);
    document.body.style.overflow = 'hidden'; // Bloquea el scroll del fondo
  }

  closeModal() {
    this.isModalOpen.set(false);
    document.body.style.overflow = ''; // Libera el scroll
  }

  nextImage() {
    const next = (this.currentImageIndex() + 1) % this.project.image_carrusel!.length;
    this.currentImageIndex.set(next);
  }

  prevImage() {
    const prev = this.currentImageIndex() === 0
      ? this.project.image_carrusel!.length - 1
      : this.currentImageIndex() - 1;
    this.currentImageIndex.set(prev);
  }

  setCurrentImage(index: number) {
    this.currentImageIndex.set(index);
  }

}
