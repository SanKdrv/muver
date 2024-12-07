import {Component, Input} from '@angular/core';
import {PocketMusicCardComponent} from "../pocket-music-card/pocket-music-card.component";
import {NgForOf} from "@angular/common";
import {Music} from "../../interfaces/music";

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [
    PocketMusicCardComponent,
    NgForOf
  ],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss'
})
export class PlaylistComponent {
  @Input() playlist: Music[] = [];

}
