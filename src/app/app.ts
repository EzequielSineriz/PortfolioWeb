import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from './components/contact/contact';
import { Navbar } from './components/navbar/navbar';
import { About } from './components/about/about';
import { ProjectsComponent } from './components/projects/projects.component';
import { ScrollSpyDirective } from './utils/directives/scroll-spy.directive';
import { Studies } from "./components/studies/studies";

@Component({
  selector: 'app-root',
  imports: [Contact, ProjectsComponent, Navbar, About, ScrollSpyDirective, Studies],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio_Web');

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    const spotlight = document.getElementById('spotlight');

    if (!spotlight) return;

    spotlight.style.background = `
      radial-gradient(
        600px at ${event.clientX}px ${event.clientY}px,
        rgba(45,212,191,.15),
        transparent 80%
      )
    `;

  }

  // Guardamos cuál es la sección activa actual (empieza en 'about')
  activeSection: string = 'about';

  onSectionChange(sectionId: string) {
    this.activeSection = sectionId;
  }

}
