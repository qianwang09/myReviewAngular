import { Component } from '@angular/core';
import { ConfidentialMatch } from './models/ConfidentialMatch';
import { ConflictPreClearance } from './models/ConflictPreClearance';
import { ExclusivityData } from './models/ExclusivityData';
import { IndependenceAssessment } from './models/IndependenceAssessment';
import { QuickRCCC } from './models/QuickRCCC';
import { MyReviewService } from './service/MyReviewService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyReviewService]
})
export class AppComponent {
  title = 'My Reviewer';
  confidentials: ConfidentialMatch[];
  confidentialTotalRecords = 0;
  confidentialRows = 20;
  loading: boolean;
  // responsive
  stacked = false;
  
  constructor(private myReviewService: MyReviewService) { }

  ngOnInit(): any {
    this.loading = true;
    this.myReviewService.getConfidentialMatches().then(result => {
      this.confidentials = result;    
      this.loading = false;
    });
  }
  onPage(event) {
    console.log(event.first + '' + event.rows);
  }
  loadData(event) {
  }
}
