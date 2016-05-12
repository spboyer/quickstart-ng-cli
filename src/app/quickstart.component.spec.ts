import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { QuickstartAppComponent } from '../app/quickstart.component';

beforeEachProviders(() => [QuickstartAppComponent]);

describe('App: Quickstart', () => {
  it('should create the app',
      inject([QuickstartAppComponent], (app: QuickstartAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'quickstart works!\'',
      inject([QuickstartAppComponent], (app: QuickstartAppComponent) => {
    expect(app.title).toEqual('quickstart works!');
  }));
});
