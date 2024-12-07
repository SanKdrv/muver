import {Component, Input} from '@angular/core';
import {Music} from "../../interfaces/music";
import {PocketMusicCardComponent} from "../pocket-music-card/pocket-music-card.component";
import {NgForOf} from "@angular/common";
import {PlaylistComponent} from "../playlist/playlist.component";

@Component({
  selector: 'app-main-container',
  standalone: true,
  templateUrl: './main-container.component.html',
  imports: [
    PocketMusicCardComponent,
    NgForOf,
    PlaylistComponent
  ],
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {
  playlists = [
    [
      { album: 'unreleased', title: 'I Luv It', artist: 'Camila Cabello feat. Playboi Carti', url: '/assets/music/Camila Cabello feat. Playboi Carti - I Luv It.mp3' },
      { album: 'Whole Lotta Red', title: 'Go2DaMoon', artist: 'Playboi Carti & Kanye West', url: '/assets/music/Playboi Carti & Kanye West - Go2DaMoon.mp3' },
      { album: 'Days Before Rodeo', title: 'GODS_COUNTRY', artist: 'Travis Scott', url: '/assets/music/Travis_Scott_-_GODS_COUNTRY.mp3' },
      { album: 'Whole Lotta Red', title: 'M3tamorphosis', artist: 'Playboi Carti & Kid Cudi', url: '/assets/music/Playboi Carti & Kid Cudi - M3tamorphosis.mp3' }
    ],
    [
      { album: 'ALL RED', title: 'All Red', artist: 'Playboi Carti', url: '/assets/music/Playboi Carti - All Red.mp3' },
      { album: 'Popular', title: 'Popular', artist: 'The Weeknd feat. Playboi Carti', url: '/assets/music/The Weeknd feat. Playboi Carti & Madonna - Popular.mp3' },
      { album: 'Timeless', title: 'Timeless', artist: 'The Weeknd feat. Playboi Carti', url: '/assets/music/The Weeknd feat. Playboi Carti - Timeless.mp3' }
    ]
  ];

  currentPlaylistIndex = 0;

  // Метод для переключения плейлиста
  // changePlaylist(index: number) {
  //   console.log(index);
  //   this.currentPlaylistIndex = index;
  // }

  currentPlaylist: Music[] = [];

  changePlaylist(index: number) {
    this.currentPlaylist = this.playlists[index];
  }
}
