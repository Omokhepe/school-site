import {Component, OnInit} from '@angular/core';
import {HeroSection} from '../../sections/hero-section/hero-section';
import {ProgramSection} from '../../sections/program-section/program-section';
import {AboutSection} from '../../sections/about-section/about-section';

@Component({
  selector: 'app-home',
  imports: [
    HeroSection,
    ProgramSection,
    AboutSection,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
ngOnInit() {
  window.scrollTo(0, 0);
}
}
