import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Observable } from 'rxjs';
import { SERVER_URL } from '../../config/config';
import 'rxjs/add/operator/map';

@Injectable()
export class OperationsService {

  private END_POINT: string = '';

  constructor(private http: Http) { }

  get(): Observable<any>{
    this.END_POINT = SERVER_URL + 'movies/1';
    console.log(`${this.END_POINT}`);
    return this.http.get(`${this.END_POINT}`).map((res: Response) => res.json());
  }

}
