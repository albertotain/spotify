import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log("Servicio listo para usar");
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQBrFcMMTulsvquhe_C6yvC7HIfBHB31VdrlSUbF1VE2HUs8AaOMbfmh-maU51i4u5R-9SmIvHh7OxKtmHc"
    });

    this.http
      .get("https://api.spotify.com/v1/browse/new-releases", { headers })
      .subscribe(data => {
        console.log(data);
      });
  }
}
