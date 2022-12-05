import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AccountComponent } from './account/account.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, AccountComponent, AvatarComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
