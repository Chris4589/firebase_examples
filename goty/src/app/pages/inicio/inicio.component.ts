import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  data:any[] = [];
  constructor(
    private db: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.db.collection('goty').valueChanges().pipe(
      map((res:any)=>{

        return res.map((resp:any)=>{
          const { name, votos } = resp;

          return { name, value:votos };
        });
      })
    ).subscribe((res)=>{
      console.log(res);
      this.data = res;
    });
  }

}
