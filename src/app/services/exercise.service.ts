import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable()
export class ExerciseService {
  private headers: HttpHeaders;
  private accessPointUrl: string = "https://localhost:44324/exercise";
  private category: {id: number, name: string}[] = [
    {id: 0,name: "Cardio"},    {id: 1,name: "Shoulders"},
    {id: 2,name: "Triceps"},    {id: 3,name: "Biceps"},
    {id: 4,name: "Chest"},    {id: 5,name: "Back"},
    {id: 6,name: "Legs"},    {id: 7,name: "Abs"}
  ];

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }

  public getCategory(){
    return this.category.slice();
  }

  public get(){
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public add(payload) {
    return this.http.post(this.accessPointUrl, payload, {headers: this.headers});
  }

  public remove(payload) {
    return this.http.delete(this.accessPointUrl + '/' + payload.id, {headers: this.headers});
  }

  public update(payload) {
    return this.http.put(this.accessPointUrl, payload, {headers: this.headers});
  }
}
