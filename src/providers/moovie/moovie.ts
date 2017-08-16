import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private baseApi = "https://api.themoviedb.org/3";
  private apiKey = "c6ea5c59e7f60830f9841c1d68e3364e";

  constructor(public http: Http) {
    console.log("Hello MoovieProvider Provider");
  }

  trazendoMoovies() {
    console.log(this.baseApi + "/movie/popular?api_key=" + this.apiKey);
    return this.http.get(this.baseApi + "/movie/popular?api_key=" + this.apiKey);
  }
}
