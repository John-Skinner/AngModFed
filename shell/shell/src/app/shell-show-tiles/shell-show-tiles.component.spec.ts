import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellShowTilesComponent } from './shell-show-tiles.component';

describe('ShellShowTilesComponent', () => {
  let component: ShellShowTilesComponent;
  let fixture: ComponentFixture<ShellShowTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellShowTilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellShowTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
