import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    ScullyLibModule,
    RouterModule.forRoot([
        {
          path: '',
          component: ContentComponent,
        },
      ],
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
