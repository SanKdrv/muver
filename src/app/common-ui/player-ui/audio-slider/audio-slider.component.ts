import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-audio-slider',
  standalone: true,
  imports: [],
  templateUrl: './audio-slider.component.html',
  styleUrl: './audio-slider.component.scss'
})
export class AudioSliderComponent {
  @Input() duration!: number; // Длительность трека
  @Input() currentTime!: number; // Текущее время трека
  @Input() audio!: HTMLAudioElement; // Текущее трек

  progress: number = 0; // Прогресс в процентах

  ngOnChanges() {
    // Рассчитываем прогресс в процентах
    if (this.duration > 0) {
      this.progress = (this.currentTime / this.duration) * 100;
    }
  }

  // Обработчик клика по прогресс-бару
  onProgressBarClick(event: MouseEvent) {
    const progressBar = (event.target as HTMLElement).getBoundingClientRect();
    const clickPosition = event.clientX; // Расстояние от клика до начала прогресс-бара
    const progressPercentage = (clickPosition / document.documentElement.clientWidth) * 100;
    // console.log(progressPercentage);
    // Устанавливаем новое время трека в зависимости от процента клика
    this.audio.currentTime = (progressPercentage / 100) * this.audio.duration;
  }
}
