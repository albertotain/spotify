import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from "rxjs/operators";

import { SPOTIFY_API_URL } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log("Servicio listo para usar");
  }

  getQuery(query: string) {
    const url = SPOTIFY_API_URL + query;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQDsEjWLel3ND3meheKok3rCHKvehcxCB-OshY1WVHVEodbYNufziAX4hRByMght-uWUj0FV1LLo59SVT7U"
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases").pipe(
      map(data => {
        return data["albums"].items;
      })
    );
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(
      map(data => {
        return data["artists"].items;
      })
    );
  }
}
