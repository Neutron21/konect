import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-instituciones',
  templateUrl: './instituciones.component.html',
  styleUrls: ['./instituciones.component.scss']
})
export class InstitucionesComponent implements OnInit {

  financiera: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      const financieraId = params.get('id'); 
      console.log('ID de financiera:', financieraId);
    });
    const storedFinanciera = sessionStorage.getItem('financiera');
    console.log('Stored Financiera:', storedFinanciera); // Depuración
    if (storedFinanciera) {
      this.financiera = JSON.parse(storedFinanciera);
    } else {
      console.error('No financiera found in sessionStorage');
    }
  }

  goToPerfilador(id: string) {
    this.router.navigate([`/perfilador`]);  
  }
}
