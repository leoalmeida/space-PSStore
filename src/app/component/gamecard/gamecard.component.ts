import { Component, Input } from '@angular/core';
import { GameCard } from '../../types/gamecard';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardPricingComponent } from './card-pricing/card-pricing.component';

@Component({
  selector: 'app-gamecard',
  standalone: true,
  imports: [CardLabelComponent, CardPricingComponent],
  templateUrl: './gamecard.component.html',
  styleUrl: './gamecard.component.css'
})
export class GamecardComponent {
  @Input() game!:GameCard;
  open(){

  }
}
