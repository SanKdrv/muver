import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PocketMusicCardComponent} from "./common-ui/pocket-music-card/pocket-music-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PocketMusicCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'muver';
}
