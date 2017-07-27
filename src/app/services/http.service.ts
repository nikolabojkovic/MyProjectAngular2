import { Injectable, Injector } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { API_URL, FRONTEND_URL } from '../env';

@Injectable()
export class HttpService {

    constructor(private http: Http) { }

    get(url) {
        return this.http.get(`${API_URL}${url}`);
    }

    post(url, data) {
        return this.http.post(`${API_URL}${url}`, data, this.headers());
    }

    put(url, data) {
        return this.http.put(`${API_URL}${url}`, data, this.headers());
    }

    delete(url) {
        return this.http.delete(`${API_URL}${url}`, this.headers());
    }

    private headers(){
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', FRONTEND_URL);
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

        // TODO: add user toke for retistration if needed

        return new RequestOptions({headers: headers});
    }
}