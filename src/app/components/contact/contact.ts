import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  // Datos del formulario vinculados por [(ngModel)]
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  async handleSubmit(event: Event) {
    event.preventDefault();
    this.isSubmitting = true;
    this.submitStatus = 'idle';

    try {
      await emailjs.send(
        'service_d0qkr9n',   // Tu Service ID
        'template_v40tpdv',  // Tu Template ID
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          message: this.formData.message,
        },
        'xTrZVFjweCfMJSb2k'    // Tu Public Key
      );

      this.submitStatus = 'success';
      // Limpiar formulario al enviar con éxito
      this.formData = { name: '', email: '', message: '' };
    } catch (error) {
      console.error('Error al enviar el email:', error);
      this.submitStatus = 'error';
    } finally {
      this.isSubmitting = false;

      // Resetear el estado de la alerta después de 5 segundos
      setTimeout(() => {
        this.submitStatus = 'idle';
      }, 5000);
    }
  }
}
