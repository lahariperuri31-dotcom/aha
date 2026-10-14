import { Component } from '@angular/core';

@Component({
  selector: 'app-heartbeatstories',
  templateUrl: './heartbeatstories.component.html',
  styleUrls: ['./heartbeatstories.component.css']
})
export class HeartbeatstoriesComponent {
    images:any;
          constructor(private service:HeartbeatstoriesComponent){
        
          }
          ngOnInit(){
            this.service.onsubmit().subscribe(data=>this.images=data);
        
          }
}
