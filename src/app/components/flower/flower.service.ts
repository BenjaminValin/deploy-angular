import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {

  BASE_URL = 'https://tranquil-everglades-32485.herokuapp.com/flowers';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Flower[]> {
    return this.http.get<Flower[]>(this.BASE_URL);
  }
}

export interface Flower {
  id: number;
  name: string;
}
