import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {baseURL} from '../shared/baseurl';
import { ProcessHttpMsgService } from './process-httpmsg.service';
import {RestangularModule,Restangular} from 'ngx-restangular';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';


@Injectable()
export class LeaderService {

  constructor(private restangular:Restangular,
    private processHTTPMsgService: ProcessHttpMsgService) { }


  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList();
    }

   getLeader(id: number):Observable<Leader> {
    return  this.restangular.one('leaders',id).get();
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('leaders').getList({featured:true})
    .map( leaders => leaders[0]);
  }




}
