import { EsnDataService } from './esn-data/esn-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { AuthModule } from './auth/auth.module';
import { DashboardComponent } from './esn-data/dashboard/dashboard.component';
import { AdminPanelComponent } from './esn-data/dashboard/admin-panel/admin-panel.component';
import { SelfDetailsComponent } from './user/self-details/self-details.component';
import { ClaimEsnInputComponent } from './esn-data/dashboard/claim-esn-input/claim-esn-input.component';
import { EsnGridComponent } from './esn-data/dashboard/esn-grid/esn-grid.component';
import { GridTopComponent } from './grid-features/grid-top/grid-top.component';
import { GridBottomComponent } from './grid-features/grid-bottom/grid-bottom.component';
import { PaginationComponent } from './grid-features/pagination/pagination.component';
import { PaginationService } from './grid-features/pagination.service';
import { PiechartComponent } from './esn-data/dashboard/piechart/piechart.component';
import { ManageUsersComponent } from './user/manage-users/manage-users.component';
import { ValidateEsnComponent } from './esn-data/validate-esn/validate-esn.component';
import { ProgressMapComponent } from './esn-data/validate-esn/progress-map/progress-map.component';
import { ValidateGridComponent } from './esn-data/validate-esn/validate-grid/validate-grid.component';
import { NotificationsComponent } from './core/notifications/notifications.component';
import { CoreService } from './core/core.service';
import { esnReducer } from './core/store/esn.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AdminPanelComponent,
    SelfDetailsComponent,
    ClaimEsnInputComponent,
    EsnGridComponent,
    GridTopComponent,
    GridBottomComponent,
    PaginationComponent,
    PiechartComponent,
    ManageUsersComponent,
    ValidateEsnComponent,
    ProgressMapComponent,
    ValidateGridComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({
      esn: esnReducer
    })
  ],
  providers: [
    EsnDataService,
    PaginationService,
    CoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
