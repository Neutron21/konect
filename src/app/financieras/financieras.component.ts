import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { financieras } from '../utils/financieras'

@Component({
  selector: 'app-financieras',
  templateUrl: './financieras.component.html',
  styleUrls: ['./financieras.component.scss']
})
export class FinancierasComponent {

  financierasArray =  financieras;
  financieras: any [] = [];
  
  constructor(
    private router: Router) {}

    goToProducts(fin: any) {
      sessionStorage.setItem('financiera', JSON.stringify(fin)); 
      this.router.navigate(['/instituciones', fin.id]); 
    }
    
    
}
