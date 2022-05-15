import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullMoviesListComponent } from './full-movies-list.component';

describe('FullMoviesListComponent', () => {
  let component: FullMoviesListComponent;
  let fixture: ComponentFixture<FullMoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullMoviesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
