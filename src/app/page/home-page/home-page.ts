import { Component, computed, inject } from '@angular/core';
import { GameCard } from '../../types/gamecard';
import { GameService } from '../../services/game.service';
import { GamecardComponent } from '../../component/gamecard/gamecard.component';

@Component({
  selector: 'app-home-page',
  imports: [GamecardComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  gameList:GameCard[] = [];
  private gameService: GameService = inject(GameService);

  constructor() {
    this.gameService.getAll();
  }

  filteredGamesList = computed(() => {
    return this.gameService.items();
  });
}
