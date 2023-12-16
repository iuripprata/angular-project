import { Component } from '@angular/core';

interface Lead {
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-lead-form',
  templateUrl: './site-lead.component.html',
  styleUrls: ['./site-lead.component.css']
})
export class SiteLeadComponent {
  lead: Lead = { name: '', email: '', phone: '' };
  showSuccessMessage = false;

  submitForm() {
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor.
    // Por exemplo, usando um serviço HTTP.
    // Simulando um sucesso para este exemplo:
    this.showSuccessMessage = true;
  }
}
