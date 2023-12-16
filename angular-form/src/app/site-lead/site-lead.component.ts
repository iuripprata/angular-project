import { Component } from '@angular/core';
import { LeadService } from '../services/site-lead.service';

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

  constructor(private leadService: LeadService) {}

  submitForm() {
    this.leadService.sendLeadData(this.lead).subscribe(
      response => {
        console.log(response); // Exibe a resposta do servidor (opcional)
        this.showSuccessMessage = true;
      },
      error => {
        console.error(error); // Trate erros, se necessário
      }
    );
  }
}