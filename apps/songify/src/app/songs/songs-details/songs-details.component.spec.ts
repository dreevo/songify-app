import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsDetailsComponent } from './songs-details.component';

describe('SongsDetailsComponent', () => {
  let component: SongsDetailsComponent;
  let fixture: ComponentFixture<SongsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
