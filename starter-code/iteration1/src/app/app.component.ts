import { Component } from '@angular/core';
import { School } from './shared/school.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'iteration1';
  album : Array<School> = [{
    name: 'Barcelona',
    pic: 'https://estaticos.elperiodico.com/resources/jpg/2/2/1516874504922.jpg'
  },{
    name: 'Madrid',
    pic: 'https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/editorial/Madrid_undia_1397223554.735.jpg?itok=4ziKw0gD'
  },{
    name: 'Miami',
    pic: 'https://www.ef.com.es/sitecore/__~/media/efcom/2018/ils/destinations/United-states/Miami/Miami-Stage-Destop.jpg'
  }];
}
