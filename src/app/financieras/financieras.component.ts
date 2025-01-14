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
    sessionStorage.removeItem('financiera');
    sessionStorage.removeItem('producto');
    this.financierasArray = financieras.filter(fin => fin.fase == "1");
    console.log(this.financierasArray);
  }

  goToProducts(finid: any) {
    sessionStorage.setItem('financiera', JSON.stringify(finid)); 
    this.router.navigate(['/instituciones']); 
  }
}
