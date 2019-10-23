import { Cliente } from './../models/cliente';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  // API path
  base_path = 'http://localhost:3000/clientes';
 
  constructor(private http: HttpClient) { }
 
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
     
      console.error('Ocorreu um erro:', error.error.message);
    } else {
     
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
   
    return throwError(
      'Ocorreu um erro. Por favor volte mais tarde..');
  };
 
 

  createItem(item): Observable<Cliente> {
    return this.http
      .post<Cliente>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
 
  getItem(id): Observable<Cliente> {
    return this.http
      .get<Cliente>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
 
  getList(): Observable<Cliente> {
    return this.http
      .get<Cliente>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 

  updateItem(id, item): Observable<Cliente> {
    return this.http
      .put<Cliente>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  alterarItem(id) {
    return this.http
      .delete<Cliente>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  
  deleteItem(id) {
    return this.http
      .delete<Cliente>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
}