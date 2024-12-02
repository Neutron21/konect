import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-arrow',
  templateUrl: './back-arrow.component.html',
  styleUrls: ['./back-arrow.component.scss']
})
export class BackArrowComponent implements OnInit {

  @Input() rutaBack!: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateBack(): void {
    console.log('ruta', this.rutaBack);
    this.router.navigate([this.rutaBack]);
  }
}
