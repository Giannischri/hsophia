import {Component, OnInit} from '@angular/core';
import {Reviews} from "../shared/reviews";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-myverticalcarousel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './myverticalcarousel.component.html',
  styleUrl: './myverticalcarousel.component.scss'
})
export class MyverticalcarouselComponent implements OnInit{
  reviews:Reviews[]=[];
  ngOnInit(): void {
    this.reviews=[{
      id:"231231",
      username:"Γιάννης Ιωαννίδης",
      body:"Δεν περίμενα ποτέ σε τέτοια ηλικία ότι θα κατανοούσα τη τεχνολογία",
      timestamp:"2 ώρες πρίν"
    },
      {
        id:"233231",
        username:"Γιώργος Καραγιαννίδης",
        body:"Πάσχω απο άνοια και ΗΣΟΦΙΑ με έχει βοηθήσει στην λήψη φαρμάκων και στην διέγερση της μνήμης μου",
        timestamp:"1 ημέρα πρίν"
      },
      {
        id:"234223431",
        username:"Απόστολος Παπαχρηστάκης",
        body:"Στην αρχή ήμουν επιφιλακτυκός αλλα τελικά έμαθα να χειρίζομαι το ΑΙ για εκπαιδευτικές ασκήσεις πάνω στην υφαντουργία",
        timestamp:"3 ημέρα πρίν"
      },
      {
        id:"23453451",
        username:"Τιμολέων Νάσου",
        body:"Το κέντρο που διαμένω έχει επανδρωθεί πλήρως με το σύστημα ΗΣΟΦΙΑ,έτσι έχω πάντα επικοινωνία και όποτε θέλω με το προσωπικό",
        timestamp:"1 εβδομάδα πριν"
      },
    ]
  }

}
