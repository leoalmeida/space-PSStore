import { Injectable, signal } from '@angular/core';
import { gameCards } from '../data/gamecards';
import { GameCard } from '../types/gamecard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiData = [...gameCards];
  private contentList = signal<GameCard[]>([]);

  private mockHttpCall = <T>(result: T) => {
    return new Observable<T>(s => {
        s.next(result);
        s.complete();
    });
  }

  items = this.contentList.asReadonly();

  getAll(): void{
    this.mockHttpCall<any>(this.apiData)
                .subscribe(xs => this.contentList.set(xs));
  }
}
