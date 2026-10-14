import { Component } from '@angular/core';

@Component({
  selector: 'app-familyentertainers',
  templateUrl: './familyentertainers.component.html',
  styleUrls: ['./familyentertainers.component.css']
})
export class FamilyentertainersComponent {
   images:any;
          constructor(private service:FamilyentertainersComponent){
          
          }
          ngOnInit(){
           this.service.onsubmit().subscribe(data=>this.images=data);
          
          }
}
