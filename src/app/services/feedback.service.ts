import { Injectable } from '@angular/core';
import {baseURL} from '../shared/baseurl';
import { Observable } from 'rxjs/Observable';
import {RestangularModule, Restangular} from 'ngx-restangular';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ProcessHttpMsgService} from './process-httpmsg.service';
import {Feedback} from '../shared/feedback';



@Injectable()
export class FeedbackService {

  constructor(private restangular:Restangular,
    private processHTTPMsgService: ProcessHttpMsgService 
  ) { }


  submitFeedback(Feedback: Feedback): Observable<Feedback> {
    return this.restangular.all('feedback').post(Feedback);
  }
  getFeedbacks(): Observable<Feedback[]> {
    return this.restangular.all('feedback').getList();
  }

  getFeedback(id: number): Observable<Feedback> {
    return this.restangular.one('feedback', id).get();
  }

 

}
