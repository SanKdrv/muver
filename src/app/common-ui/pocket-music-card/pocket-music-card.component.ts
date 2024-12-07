import {Component, Input} from '@angular/core';
import {Music} from "../../interfaces/music";
import {MusicPlayerService} from "../../services/music-player.service";

@Component({
  selector: 'app-pocket-music-card',
  standalone: true,
  imports: [],
  templateUrl: './pocket-music-card.component.html',
  styleUrl: './pocket-music-card.component.scss'
})
export class PocketMusicCardComponent {
  @Input() song!: Music;

  constructor(private musicPlayerService: MusicPlayerService) {}

  playSong() {
    this.musicPlayerService.playTrack(this.song);
  }
}
