import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocialTestPage } from './social-test.page';

describe('SocialTestPage', () => {
  let component: SocialTestPage;
  let fixture: ComponentFixture<SocialTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
