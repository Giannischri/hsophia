import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import { HammerModule } from '@angular/platform-browser';
import {IgxCarouselComponent, IgxSlideComponent} from 'igniteui-angular';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-mycarousel',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    IgxCarouselComponent,
    IgxSlideComponent,
    FlexLayoutModule,
    MatCardModule
  ],
  templateUrl: './mycarousel.component.html',
  styleUrl: './mycarousel.component.scss'
})
export class MycarouselComponent  implements OnInit {
  isPhonePortrait=false;
  slides: any[]=[];

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: '../assets/resized_image2.jpg',
      title: 'Η καινοτομία συνδέεται με την ΦΡΟΝΤΙΔΑ μέσω ΑΙ',
      subtitle: 'Η τεχνητη νοημοσύνη και οι έξυπνες συσκευές μας βοηθούν στην βελτίωση της υγείας και της ποιότητας ζωής,προλαμβάνωντας γεγονότα που απειλόυν την υγεία του χρήστη καθώς τον κρατούν ενήμερο για συνταγογραφήσεις και για στατιστικά της υγέιας του.'
    };
    this.slides[1] = {
      id: 1,
      src: '../assets/AI-Senior-Care.webp',
      title: 'Συντροφιά και μείωση της αίσθησης μοναξιάς',
      subtitle: 'Έλάτε σε επικοινωνία με την ΗΣΟΦΙΑ για να διασκεδάσετε,συνομιλήσετε μαζι της'
    }
    this.slides[2] = {
      id: 2,
      src: '../assets/Techelder.jpg',
      title: 'Ενίσχυση εκμαθησιακών δεξιοτήτων',
      subtitle: 'Αυξήστε τις ψηφιακές δεξιότητες σας συνομιλόντας με το σύστημα μας.Επιπλέον εκπαιδευτείτε σε πραγματικά σενάρια με ασκήσεις και διαδραστικά τέστ ανάλογα τα ενδιαφέροντα σας'
    }
  }
}
