import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-footer',
    imports: [
        NgOptimizedImage, RouterLink, MatIconModule,
    ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  logoImg='assets/images/sampleLogo.png';
  email='fimobu@gmail.com';
}
