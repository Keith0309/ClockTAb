import { UiSwitchModule } from 'ngx-ui-switch';
import { AppComponent } from './app.component';
@NgModule({
    imports: [BrowserModule, UiSwitchModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
  })
  export class AppModule {}

const switch = () => {


    return {
        <ui-switch (change)="onChange($event)"></ui-switch>
    }
}