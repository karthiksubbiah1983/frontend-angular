import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { catchError, throwError } from "rxjs";
import {User} from '../models/userformfields'

@Injectable({
    providedIn: 'root'
})
export class UserService {
    url = `${environment.apiUrl}/saveuser`;

    constructor(private http: HttpClient) { }

    private handleError(error: HttpErrorResponse) {
        if (error.status != 200) {
            console.error('An error occurred:', error.error);
        } else {
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }

    saveUser(data: User) {
        return this.http.post(this.url, data)
            .pipe(
                catchError(this.handleError)
            );
    }
}