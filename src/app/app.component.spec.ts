import { AppComponent } from './app.component';
import "allure-jest";

let fixture: AppComponent;

describe('AppComponent', () => {
  
  beforeEach(() => {
    fixture = new AppComponent();

  })

  it('should nave a titile testapp-jest', () => {

    allure.layer('nodejs');
    allure.owner("John Doe");
    allure.displayName("Test Authentication");
    expect(fixture.title).toEqual('testapp-jest');
  })

})