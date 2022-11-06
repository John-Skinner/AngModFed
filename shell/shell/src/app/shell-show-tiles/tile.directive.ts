import { Directive, ViewContainerRef} from "@angular/core";
// this allows one to use <ng-template tile></ng-template> to position the
// tile element within a component.
@Directive({
  selector: '[tile]'
})
export class TileDirective {
  constructor(public viewContainerRef: ViewContainerRef) {

  }

}
