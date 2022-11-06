import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShellShowTilesComponent } from './shell-show-tiles/shell-show-tiles.component';
import { TileDirective } from './shell-show-tiles/tile.directive'



@NgModule({
  declarations: [
    AppComponent,
    ShellShowTilesComponent,
    TileDirective
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
