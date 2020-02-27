import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  id: number;
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://127.0.0.1:8102/asset_mgmt/emp';

  getEmployees(token) {
    return this
      .http
      .get(this.baseUrl + '/getall' + '?access_token=' + 'e9b72420-c78f-4fa7-9326-e305d5536042')
      .map(res => {
        return JSON.parse(JSON.stringify(res["result"]));
      }).catch(this.handleError);
  }

  deleteEmployee(id) {
    this.id = parseInt(id);
    return this.http.delete(this.baseUrl + `/delete/${id}` + '?access_token=e9b72420-c78f-4fa7-9326-e305d5536042')
      .map(res => {
        console.log('Employee Deleted Successfully');
        return JSON.parse(JSON.stringify(res['result']));
      }).catch(this.handleError);
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
