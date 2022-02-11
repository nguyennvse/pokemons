import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseApiService } from 'src/services/base-api.service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PokemonInterceptopService } from 'src/interceptor/interceptor.service';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    HomepageComponent,
    PokemonDetailComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    HttpClientModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [BaseApiService,
    { provide: HTTP_INTERCEPTORS, useClass: PokemonInterceptopService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
