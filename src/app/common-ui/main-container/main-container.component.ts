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
      { album: 'DBR', title: 'Song 1', artist: 'Artist 1', url: '/assets/music/Travis_Scott_-_GODS_COUNTRY.mp3' },
      { album: 'DBR', title: 'Song 2', artist: 'Artist 2', url: '/assets/music/Travis_Scott_-_GODS_COUNTRY.mp3' },
      { album: 'DBR', title: 'Song 3', artist: 'Artist 3', url: '/assets/music/Travis_Scott_-_GODS_COUNTRY.mp3' }
    ],
    [
      { album: 'DBR', title: 'Song A', artist: 'Artist A', url: '/assets/music/Travis_Scott_-_GODS_COUNTRY.mp3' },
      { album: 'DBR', title: 'Song B', artist: 'Artist B', url: '/assets/music/Travis_Scott_-_GODS_COUNTRY.mp3' },
      { album: 'DBR', title: 'Song C', artist: 'Artist C', url: '/assets/music/Travis_Scott_-_GODS_COUNTRY.mp3' }
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
