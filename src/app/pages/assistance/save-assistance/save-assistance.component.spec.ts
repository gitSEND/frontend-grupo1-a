import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAssistanceComponent } from './save-assistance.component';

describe('SaveAssistanceComponent', () => {
  let component: SaveAssistanceComponent;
  let fixture: ComponentFixture<SaveAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveAssistanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
