import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]',
  standalone: true
})
export class ScrollSpyDirective implements OnInit, OnDestroy {
  @Input() public spiedTags: string[] = [];
  @Output() public sectionChange = new EventEmitter<string>();

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // Configuramos el observador para que detecte cuando una sección ocupa la parte superior de la pantalla
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Ajusta el área de detección cerca del tope superior
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            this.sectionChange.emit(id);
          }
        }
      });
    }, options);

    // Buscamos las secciones a observar dentro del contenedor
    this.spiedTags.forEach((tag) => {
      const elements = this.el.nativeElement.querySelectorAll(tag);
      elements.forEach((element: HTMLElement) => {
        this.observer.observe(element);
      });
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
