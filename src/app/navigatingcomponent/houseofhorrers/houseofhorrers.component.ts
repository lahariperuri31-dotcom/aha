import { Component } from '@angular/core';
import { HouseofhorrersService } from '../service/houseofhorrers.service';

@Component({
  selector: 'app-houseofhorrers',
  templateUrl: './houseofhorrers.component.html',
  styleUrls: ['./houseofhorrers.component.css']
})
export class HouseofhorrersComponent {
    images:any;
          constructor(private service:HouseofhorrersService){
        
          }
          ngOnInit(){
            this.service.onsubmit().subscribe(data=>this.images=data);
        
          }
}
