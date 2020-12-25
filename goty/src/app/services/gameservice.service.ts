import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GameserviceService {

  constructor(
    private http:HttpClient
  ) { }

  public getGames(){
    return this.http.get(`http://localhost:5000/firestore-grafica-f589a/us-central1/api/goty`).pipe(
      map((res:any)=> res.juegos)
    );
  }
  public voteGame(game:string){
    return this.http.post(`http://localhost:5000/firestore-grafica-f589a/us-central1/api/goty?id=${game}`, {}).pipe(
      catchError((res:any)=>{
        /*asi se retorna el error para obtenerlo en el subscribe */
        return of(res);
      })
    );
  }
}
