/**
 * Created by yairbudic on 04/09/2017.
 */
/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Company }  from './data-model';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchService {
  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url
  private searchUrl = '/api/companies-search/';
  private companyUrl = 'https://api.searchcompany.us/1.0/company/';

  getCompanies( companyName: string) : Observable<Company[]> {
    let headers = new Headers();

    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    headers.append('Access-Control-Allow-Credentials', 'true');
    let options       = new RequestOptions({ headers: headers });
    // ...using get request
    return this.http.get(this.searchUrl + companyName, options )
    // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

}
