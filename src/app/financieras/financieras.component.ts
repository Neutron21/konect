import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { financieras } from '../utils/financieras'

@Component({
  selector: 'app-financieras',
  templateUrl: './financieras.component.html',
  styleUrls: ['./financieras.component.scss']
})
export class FinancierasComponent implements OnInit{

  financierasArray =  financieras;
  financieras: any [] = [];
  
  constructor(
    private router: Router) {}

  ngOnInit(): void {
    this.financierasArray = financieras.filter(fin => fin.fase == "1");
    console.log(this.financierasArray);
  }

  goToProducts(fin: any) {
    sessionStorage.setItem('financiera', JSON.stringify(fin)); 
    this.router.navigate(['/instituciones', fin.id]); 
  }
}
