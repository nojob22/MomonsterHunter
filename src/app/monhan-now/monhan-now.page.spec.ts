import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonhanNowPage } from './monhan-now.page';

describe('MonhanNowPage', () => {
  let component: MonhanNowPage;
  let fixture: ComponentFixture<MonhanNowPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonhanNowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
