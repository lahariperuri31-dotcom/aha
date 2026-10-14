import { Component } from '@angular/core';

@Component({
  selector: 'app-hiddengems',
  templateUrl: './hiddengems.component.html',
  styleUrls: ['./hiddengems.component.css']
})
export class HiddengemsComponent {
        images:any;
          constructor(private service:HiddengemsComponent){
        
          }
          ngOnInit(){
            this.service.onsubmit().subscribe(data=>this.images=data);
        
          }

}
