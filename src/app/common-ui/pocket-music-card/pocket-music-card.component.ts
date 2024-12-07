import {Component, Input} from '@angular/core';
import {Music} from "../../interfaces/music";

@Component({
  selector: 'app-pocket-music-card',
  standalone: true,
  imports: [],
  templateUrl: './pocket-music-card.component.html',
  styleUrl: './pocket-music-card.component.scss'
})
export class PocketMusicCardComponent {
  @Input() song!: Music;

}
