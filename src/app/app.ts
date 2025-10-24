import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  ngOnInit() {
      AOS.init({
        duration: 800,
        once: false,
        mirror: true,
      });
  }

  protected readonly title = signal('school-site');
}
