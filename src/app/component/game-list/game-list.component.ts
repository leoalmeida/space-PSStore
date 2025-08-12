import { Component, computed, inject } from '@angular/core';
import { GameCard } from '../../types/gamecard';
import { GameService } from '../../services/game.service';
import { GamecardComponent } from '../gamecard/gamecard.component';

@Component({
  selector: 'app-game-list.component',
  imports: [GamecardComponent],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  gameList:GameCard[] = [];
  private gameService: GameService = inject(GameService);

  constructor() {
    this.gameService.getAll();
  }

  filteredGamesList = computed(() => {
    return this.gameService.items();
  });
}
