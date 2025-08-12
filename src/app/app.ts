import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { SonyBarComponent } from './component/sony-bar/sony-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialModule, SonyBarComponent, ToolbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('psstore');

}
