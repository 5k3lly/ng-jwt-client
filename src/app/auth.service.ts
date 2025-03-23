import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Token {
    access_token: string
    token_type: string
}

@Injectable({
    providedIn: 'root'
}) 
export class AuthService {
    
    static base = "http://127.0.0.1:8000";
    token: Token | undefined

    constructor(private http: HttpClient) { }

    authenticate(username: string, password: string) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        })

        const f = new FormData();
        f.append("username", username);
        f.append("password", password);

        // @ts-ignore it's not surprising the linter is ignorant of the actual API.
        const body = new URLSearchParams(f);

        const req = this.http.post<Token>(`${AuthService.base}/token`,
            body, { headers }
        )

        return req
    }
    setToken(t: Token) {
        this.token = t;
    }
    getToken() {
        return this.token
    }
}