import {Component, OnInit} from '@angular/core';
import {Timeline} from "../shared/timeline";
import{NgFor} from "@angular/common";


@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit
{
  timelineItems:Timeline[]=[];

  ngOnInit(): void {
    this.timelineItems=[{
        id:"23242411231",
        title:'Beginning',
        timestamp:'26/04/2007',
        body:'Το ξεκίνημα του ΕΟΟΣ ΦΡΟΝΤΊΔΑ',
        typeIcon:'\u{1F3E2}'
      },
      {
        id:"23242442323",
        title:'Έξυπνοι σένσορες και κάμερες',
        timestamp:'26/04/2009',
        body:'Εγκατάσταση έξυπνων συσκευων στο 1ο οικο γηρειοτητας',
        typeIcon:'\u{1F3E1}'
      },
      {
        id:"2324246666",
        title:'Εφαρμογές ΑΙ',
        timestamp:'26/03/2023',
        body:'Δημιουργιας του έξυπνου συστήματος ΗΣΟΦΙΑ',
        typeIcon:'\u{1F680}'
      },
      {
        id:"23247777231",
        title:'EXPANSION',
        timestamp:'26/08/2023',
        body:'Ένσωματώση της ελληνικής γλώσσας στην ΗΣΟΦΙΑ καθώς και τεχνητής νοημοσύνης με την βοήθεια του Γαλλικου πανεπιστημίου',
        typeIcon:'\u{1F91D}'
      },{
        id:"232423424231",
        title:'The future is here',
        timestamp:'26/03/2024',
        body:'Πλέον μπορείτε να εκπαιδευτείτε με το ΑΙ  να μάθετε,να διασκεδάσετε, ακόμα και να κρατήσετε πληροφορίες για τα φάρμακα σας μέσω άυλης συνταγογράφησης καθώς και του ιατρικόυ σας ιστορικόυ μέσω E-Gov και ΙΚΑ',
        typeIcon:'\u{1F4CB}'
      }]
  }

}
