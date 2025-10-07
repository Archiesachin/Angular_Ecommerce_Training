import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mens } from './mens';

describe('Mens', () => {
  let component: Mens;
  let fixture: ComponentFixture<Mens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
