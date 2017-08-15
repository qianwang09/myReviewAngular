import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ConfidentialMatch } from './models/ConfidentialMatch';
import { ConflictPreClearance } from './models/ConflictPreClearance';
import { MyMaintenance } from './models/MyMaintenance';
import { IndependenceAssessment } from './models/IndependenceAssessment';
import { QuickRCCC } from './models/QuickRCCC';
import { MyReviewService } from './service/MyReviewService';
import {SelectItem} from 'primeng/primeng';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
  providers: [MyReviewService]
})
export class AppComponent {
  title = 'My Reviewer';
  activeIndex: number = 0;
  confidentials: ConfidentialMatch[];
  confidentialSearchClientName = '';
  confidentialSearchProjectName = '';
  confidentialRows = 15;
  confidentialFirst = 0;
  confidentialTotalRecords = 10;
  confidentialLoading: boolean = false;
  stacked = false;

  maintenances: MyMaintenance[];
  maintenanceSearchClientName = '';
  maintenanceSearchProjectName = '';
  maintenanceRows = 15;
  maintenanceFirst = 0;
  maintenanceTotalRecords = 10;
  maintenanceLoading: boolean = false;
  maintenanceExclusivity = '';
  maintenanceExclusivityOptions: SelectItem[]
  maintenanceIsMORP = '';
  maintenanceIsMORPOptions: SelectItem[] 

  independences: IndependenceAssessment[];
  independenceSearchClient = '';
  independenceRows = 15;
  independenceFirst = 0;
  independenceTotalRecords = 10;
  independenceLoading: boolean = false;

  conflicts: ConflictPreClearance[];
  conflictSearchClientName = '';
  conflictSearchProjectName = '';
  conflictRows = 15;
  conflictFirst = 0;
  conflictTotalRecords = 10;
  conflictLoading: boolean = false;

  quickRCs: QuickRCCC[];
  quickRCSearchClientName = '';
  quickRCRows = 15;
  quickRCFirst = 0;
  quickRCTotalRecords = 10;
  quickRCLoading: boolean = false;

  constructor(private myReviewService: MyReviewService) {
  }

  ngOnInit(): any {
    this.maintenanceExclusivityOptions = []
    this.maintenanceExclusivityOptions.push({ label: ' All ', value: 'all' })
    this.maintenanceExclusivityOptions.push({ label: ' YES ', value: 'yes' })
    this.maintenanceExclusivityOptions.push({ label: ' NO ', value: 'no' })

    this.maintenanceIsMORPOptions = []
    this.maintenanceIsMORPOptions.push({ label: ' All ', value: 'all' })
    this.maintenanceIsMORPOptions.push({ label: ' YES ', value: '1' })
    this.maintenanceIsMORPOptions.push({ label: ' NO ', value: '0' })
  }
tableRowClass(data, index){
  return "tableRowClass";
}
  tabChangeHandler(event) {
    // console.log(event.index + 'active index:' + this.activeIndex);
  }

  GetConfidentialMatch(event) {
    this.confidentialLoading = true;
    this.myReviewService.GetConfidentialMatch(this.confidentialSearchClientName, this.confidentialSearchProjectName, event.first/event.rows, event.rows)
      .then(res => {
        this.confidentialTotalRecords = res.result.total
        //    if(this.confidentialFirst > (this.confidentialTotalRecords )){
        //   this.confidentialFirst = 0
        // }     
        this.confidentials = res.result.records
        this.confidentialLoading = false;
      });
  }

  GetMyMaintenance(event) {
    this.maintenanceLoading = true;
    this.myReviewService.GetMyMaintenance(this.maintenanceSearchClientName, this.maintenanceSearchProjectName, this.maintenanceExclusivity, this.maintenanceIsMORP,
       event.first/event.rows, event.rows)
      .then(res => {
        // this.maintenanceTotalRecords = res.result.total
        //   if(this.maintenanceFirst > (this.maintenanceTotalRecords)){
        //   this.maintenanceFirst = 0
        // }      
        this.maintenances = res.result.records
        this.maintenanceLoading = false;
      });
  }

  GetIndependenceAssessment(event) {
    this.independenceLoading = true;
    this.myReviewService.GetIndependenceAssessment(this.independenceSearchClient, event.first/event.rows, event.rows)
      .then(res => {
        this.independenceTotalRecords = res.result.total
        //  if(this.independenceFirst > (this.independenceTotalRecords )){
        //   this.independenceFirst = 0
        // }       
        this.independences = res.result.records
        this.independenceLoading = false;
      });
  }

    GetConflictPreClearance(event) {
    this.conflictLoading = true;
    this.myReviewService.GetConflictPreClearance(this.conflictSearchClientName, this.conflictSearchProjectName, event.first/event.rows, event.rows)
      .then(res => {
        this.conflictTotalRecords = res.result.total
        //         if(this.conflictFirst > (this.conflictTotalRecords )){
        //   this.conflictFirst = 0
        // }
        this.conflicts = res.result.records
        this.conflictLoading = false;
      });
  }

    GetQuickRCCC(event) {
    this.quickRCLoading = true;
    this.myReviewService.GetQuickRCCC(this.quickRCSearchClientName,  event.first/event.rows, event.rows)
      .then(res => {
        this.quickRCTotalRecords = res.result.total
        // if(this.quickRCFirst > this.quickRCTotalRecords ){
        //   this.quickRCFirst = 0
        // }
        this.quickRCs = res.result.records        
        this.quickRCLoading = false;
      });
  }
}
