import { Injectable } from '@angular/core';
import { Autor } from '../autor';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AutorAPIService {

  apiURL : string = "http://localhost:8080/api/autor";

  constructor(private httpClient: HttpClient ) { }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    errorMessage = `Código de erro: ${error.status}\nMensagem: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
    }

    getAutor(): Observable<Autor[]> {
      return this.httpClient.get<Autor[]>(this.apiURL)
      .pipe(retry(1),
      catchError(this.handleError))
    }

      createAutor(clie: Autor): Observable<Autor> {
        return this.httpClient.post<Autor>(`${this.apiURL}`, clie)
        .pipe(retry(1),
        catchError(this.handleError));
    
  }
}

