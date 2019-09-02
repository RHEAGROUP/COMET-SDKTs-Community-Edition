import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cdp4SdktsComponent } from './cdp4-sdkts.component';

describe('Cdp4SdktsComponent', () => {
  let component: Cdp4SdktsComponent;
  let fixture: ComponentFixture<Cdp4SdktsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cdp4SdktsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cdp4SdktsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
