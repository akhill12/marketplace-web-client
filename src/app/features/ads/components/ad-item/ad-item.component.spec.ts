import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdItemComponent } from './ad-item.component';

describe('AdItemComponent', () => {
  let component: AdItemComponent;
  let fixture: ComponentFixture<AdItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
