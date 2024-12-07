
import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from '@angular/material/slider';


import {Music} from "../../../interfaces/music";
import {AudioSliderComponent} from "../audio-slider/audio-slider.component";
import {MatLine} from "@angular/material/core";
import {MainPageComponent} from "../../../pages/main-page/main-page.component";

@Component({
  selector: 'app-desktop-player',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    AudioSliderComponent,
    MatLine,
  ],
  templateUrl: './desktop-player.component.html',
  styleUrl: './desktop-player.component.scss',
})
export class DesktopPlayerComponent {
  audio = new Audio();
  trackPointer = 0;
  // musicList: Music[] = [];
  musicList: Music[] = [
    {
      album: "DBR",
      title: "Gods Country",
      artist: "Travis Scott",
      url: "/assets/music/Travis_Scott_-_GODS_COUNTRY.mp3"
      // url: "D:\\web-proj\\muver\\public\\assets\\music\\Travis_Scott_-_GODS_COUNTRY.mp3"
    },
  ];
  previous_volume = 50 / 100;
  currentMusic = {
    album: "",
    title: "",
    artist: "",
    url: "",
  }

  audioDuration: number = 0; // Длительность трека
  audioCurrentTime: number = 0; // Текущее время трека


  ngOnInit() {
    // Создаем объект Audio
    this.audio = new Audio('path/to/audio/file.mp3');

    // Устанавливаем обработчики событий
    this.audio.addEventListener('loadedmetadata', this.onMetadataLoaded.bind(this));
    this.audio.addEventListener('timeupdate', this.onTimeUpdate.bind(this));
  }

  onMetadataLoaded(event: Event) {
    // Получаем длительность трека
    this.audioDuration = this.audio.duration;
    // console.log('Длительность трека:', this.audioDuration);
  }

  onTimeUpdate(event: Event) {
    // Получаем текущее время трека
    this.audioCurrentTime = this.audio.currentTime;
    // console.log('Текущее время:', this.audioCurrentTime);
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    // Приводим секунды к формату с двумя цифрами (например, 5 -> 05)
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    // Возвращаем строку в формате 'минуты:секунды'
    return `${minutes}:${formattedSeconds}`;
  }

  play(index?: number) {
    // console.log(this.musicList[0] ? this.musicList[0] : 'Ничего');
    if (index === undefined) {
      if (this.audio.paused) {
        if (this.audio.readyState === 0) {
          this.trackPointer = 0;
          this.currentMusic = this.musicList[0];
          this.audio.src = this.currentMusic.url;
        }
        // this.audio.load();
        this.audio.play();
        // console.log(`Попытка воспроизвести трек ${this.currentMusic.title}`);

      } else {
        this.audio.pause();
      }
    } else {
      this.trackPointer = index;
      this.currentMusic = this.musicList[index];
      this.audio.src = this.currentMusic.url;
      this.audio.play();
    }
  }
  volumeSlider(event: any) {
    this.audio.volume = event.target.value / 100;
  }

  turn_volume_off() {
    if (this.audio.volume !== 0) {
      this.previous_volume = this.audio.volume;
      this.audio.volume = 0;
    }
    else if (this.audio.volume == 0) {
      this.audio.volume = this.previous_volume;
    }
  }

  durationSlider(event: any) {
    this.audio.currentTime = event.value;
  }
}
