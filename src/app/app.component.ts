import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PocketMusicCardComponent} from "./common-ui/pocket-music-card/pocket-music-card.component";
import {DesktopPlayerComponent} from "./common-ui/player-ui/desktop-player/desktop-player.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PocketMusicCardComponent, DesktopPlayerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'muver';
}
