import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ConfidentialMatch } from '../models/ConfidentialMatch';
import { ConflictPreClearance } from '../models/ConflictPreClearance';
import { MyMaintenance } from '../models/MyMaintenance';
import { IndependenceAssessment } from '../models/IndependenceAssessment';
import { QuickRCCC } from '../models/QuickRCCC';
import { ResponseResult } from '../models/ResponseResult';

require('../../assets/confidentiales.json');


@Injectable()
export class MyReviewService {
  constructor(private http: Http) {
  }

  GetConfidentialMatch(searchClientName = '', searchProjectName, pageIndex = 0, pageSize = 10): Promise<ResponseResult> {
    return this.http.get('GetConfidentialMatch', {
      params: {
        clientName: searchClientName == null ? '' : searchClientName,
        projectName: searchProjectName == null ? '' : searchProjectName,
        pageIndex: pageIndex,
        pageSize: pageSize
      }
    }).toPromise().then((res): ResponseResult => {
      let result: ResponseResult;
      if (res.status === 200) {
        result = <ResponseResult>res.json();
      }
      return result;
    }).catch(this.handleError);
  }

  GetMyMaintenance(searchClientName = '', searchProjectName = '', exclusivity = 'NO', IsMORP = '0', pageIndex = 0, pageSize = 10): Promise<ResponseResult> {
    return this.http.get('GetMyMaintenance', {
      params: {
        clientName: searchClientName == null ? '' : searchClientName,
        projectName: searchProjectName == null ? '' : searchProjectName,
        exclusivity: exclusivity == null ? '' : exclusivity,
        IsMORP: IsMORP == null ? '' : IsMORP,
        pageIndex: pageIndex,
        pageSize: pageSize
      }
    }).toPromise().then((res): ResponseResult => {
      let result: ResponseResult;
      if (res.status === 200) {
        result = <ResponseResult>res.json();
      }
      return result;
    }).catch(this.handleError);
  }

  GetIndependenceAssessment(searchClient = '',  pageIndex = 0, pageSize = 10): Promise<ResponseResult> {
    return this.http.get('GetIndependenceAssessment', {
      params: {
        client: searchClient == null ? '' : searchClient,
        pageIndex: pageIndex,
        pageSize: pageSize
      }
    }).toPromise().then((res): ResponseResult => {
      let result: ResponseResult;
      if (res.status === 200) {
        result = <ResponseResult>res.json();
      }
      return result;
    }).catch(this.handleError);
  }
  

    GetConflictPreClearance(searchClientName = '', searchProjectName, pageIndex = 0, pageSize = 10): Promise<ResponseResult> {
    return this.http.get('GetConflictPreClearance', {
      params: {
        clientName: searchClientName == null ? '' : searchClientName,
        projectName: searchProjectName == null ? '' : searchProjectName,
        pageIndex: pageIndex,
        pageSize: pageSize
      }
    }).toPromise().then((res): ResponseResult => {
      let result: ResponseResult;
      if (res.status === 200) {
        result = <ResponseResult>res.json();
      }
      return result;
    }).catch(this.handleError);
  }

    GetQuickRCCC(searchClientName = '', pageIndex = 0, pageSize = 10): Promise<ResponseResult> {
    return this.http.get('GetQuickRCCC', {
      params: {
        clientName: searchClientName == null ? '' : searchClientName,
        pageIndex: pageIndex,
        pageSize: pageSize
      }
    }).toPromise().then((res): ResponseResult => {
      let result: ResponseResult;
      if (res.status === 200) {
        result = <ResponseResult>res.json();
      }
      return result;
    }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    alert('error');
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
