import { MonitoringDatatableComponent } from './monitoring-datatable.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('MonitoringDatatableComponent', () => {
  let component: MonitoringDatatableComponent;
  let fixture: ComponentFixture<MonitoringDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonitoringDatatableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
