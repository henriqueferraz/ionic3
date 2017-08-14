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
  constructor(public http: Http) {
    console.log("Hello MoovieProvider Provider");
  }

  trazendoMoovies() {
    return this.http.get("http://;;;;;");
  }
}
