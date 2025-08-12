import { Component, Input } from '@angular/core';
import { abas } from '../../data/abas';
import { Aba } from '../../types/aba';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  listaAbasLoja: Aba[] = [...abas];
  showMenu(){

  }
}
