import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ConfidentialMatch } from '../models/ConfidentialMatch';
import { ConflictPreClearance } from '../models/ConflictPreClearance';
import { ExclusivityData } from '../models/ExclusivityData';
import { IndependenceAssessment } from '../models/IndependenceAssessment';
import { QuickRCCC } from '../models/QuickRCCC';

require('../../assets/confidentiales.json');


@Injectable()
export class MyReviewService {
  constructor(private http: Http) {
  }

  getConfidentialMatches(): Promise<ConfidentialMatch[]> {
    return this.http.get(
     '../assets/confidentiales.json'
    )
      .toPromise()
      .then((res): ConfidentialMatch[] => {
        let result: ConfidentialMatch[] = ConfidentialMatch[3];
        if (res.status === 200) {
          result = <ConfidentialMatch[]>res.json();
        }
        return result;
       })
       .catch(this.handleError);
  }
 
  private handleError(error: any): Promise<any> {
    alert('error');
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
