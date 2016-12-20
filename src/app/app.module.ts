import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { BucketlistDetailComponent } from './bucketlist/bucketlist-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    BucketlistComponent,
    BucketlistDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'auth', component: AuthComponent },
      { path: 'bucketlists', component: BucketlistComponent },
      { path: 'bucketlists/:id', 
        component: BucketlistDetailComponent 
      },
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
      { path: '**', redirectTo: 'auth', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
