import { Component } from '@angular/core';

@Component({
  selector: 'app-heartfeltdrama',
  templateUrl: './heartfeltdrama.component.html',
  styleUrls: ['./heartfeltdrama.component.css']
})
export class HeartfeltdramaComponent {
      images:any;
          constructor(private service:HeartfeltdramaComponent){
        
          }
          ngOnInit(){
            this.service.onsubmit().subscribe(data=>this.images=data);
        
          }
}
