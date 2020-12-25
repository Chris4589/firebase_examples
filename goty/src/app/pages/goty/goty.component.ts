import { Component, OnInit } from '@angular/core';
import { GameserviceService } from 'src/app/services/gameservice.service';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  dataGame:any[] = [];
  constructor(
    private _game:GameserviceService
    ) { }

  ngOnInit(): void {

    this._game.getGames().subscribe((res:any)=>{
      this.dataGame = res;
      console.log(this.dataGame);
    });
  }
  votar(id:string){
    this._game.voteGame(id).subscribe((res)=>{
      console.log(res);
    })
  }
}
