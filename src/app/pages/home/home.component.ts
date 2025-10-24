import {Component} from '@angular/core';
import {ProgramSection} from '../../sections/program-section/program-section';
import {AboutSection} from '../../sections/about-section/about-section';
import {HeroSection} from '../../sections/hero-section/hero-section';


@Component({
  selector: 'app-home',
  imports: [
    ProgramSection,
    AboutSection,
    HeroSection,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
