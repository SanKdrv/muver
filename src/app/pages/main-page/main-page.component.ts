import {Component, EventEmitter, Output} from '@angular/core';
import {PocketMusicCardComponent} from "../../common-ui/pocket-music-card/pocket-music-card.component";
import {DesktopPlayerComponent} from "../../common-ui/player-ui/desktop-player/desktop-player.component";
import {NavBarComponent} from "../../common-ui/nav-bar/nav-bar.component";
import {MainContainerComponent} from "../../common-ui/main-container/main-container.component";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {Music} from "../../interfaces/music";
import {PlaylistComponent} from "../../common-ui/playlist/playlist.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    PocketMusicCardComponent,
    DesktopPlayerComponent,
    NavBarComponent,
    MainContainerComponent,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    PlaylistComponent,
    NgForOf
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  title = "MainPageComponent";
}
