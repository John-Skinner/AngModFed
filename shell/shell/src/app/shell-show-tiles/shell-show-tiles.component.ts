import {Component, ViewContainerRef, ComponentRef, OnInit, Type, ViewChild} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation'
import {TileDirective} from "./tile.directive";

@Component({
  selector: 'app-shell-show-tiles',
  template: `<div class="tile-div-class">
    <ng-template tile></ng-template>
  </div>`,
  styleUrls: ['./shell-show-tiles.component.css']
})
export class ShellShowTilesComponent implements OnInit {
  @ViewChild(TileDirective,{static:true}) tileElement!:TileDirective;


  constructor(
    private containerRef:ViewContainerRef,
  ) { }

  async ngOnInit() {
    console.log(' noOnInit start');
    try {
      const {TilesComponent} = await loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'test_tile',
        exposedModule: './Tile'
      });

    console.info(' loaded remote module');
    console.dir(TilesComponent);


    const viewContainerRef = this.tileElement.viewContainerRef;
    viewContainerRef.clear();
    const tRef = viewContainerRef.createComponent<typeof TilesComponent>(TilesComponent);


     console.info('created the comp:');

     debugger;
    } catch (e) {
      console.error('loadRemoteModule failed with exception:' + e);
      console.dir(e);
      debugger;
    }
    console.log(' ------------------complete ngOnInit')

  }


}
