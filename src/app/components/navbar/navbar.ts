import { Component, computed, Input, signal } from '@angular/core';
import { AboutTexts } from '../about/about.interface';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Input() currentSection: string = 'about';

  descargarCV(): void {
    const link = document.createElement('a');
    link.href = 'assets/files/CV_Ezequiel_Sineriz.pdf';
    link.download = 'CV_Ezequiel_Sineriz.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // 1. Control del idioma actual ('es' por defecto)
  public currentLang = signal<'es' | 'en'>('es');

  // 2. Diccionario con los textos del About (Modificá los párrafos con tus textos reales)
  private aboutDictionary: Record<'es' | 'en', AboutTexts> = {
    es: {
      title: 'Sobre Mí',
      paragraphs: [
        'Primer párrafo de tu sobre mí en español...',
        'Segundo párrafo de tu sobre mí en español...',
        'Tercer párrafo de tu sobre mí en español...'
      ]
    },
    en: {
      title: 'About Me',
      paragraphs: [
        'First paragraph of your about me in English...',
        'Second paragraph of your about me in English...',
        'Third paragraph of your about me in English...'
      ]
    }
  };

  // 3. Signal computada que reacciona automáticamente al cambiar 'currentLang'
  public aboutTexts = computed(() => this.aboutDictionary[this.currentLang()]);

  // Metodo para cambiar el idioma global de la app
  public changeLanguage(lang: 'es' | 'en') {
    this.currentLang.set(lang);
  }

}
