import { Component } from '@angular/core';

@Component({
  selector: 'app-emotionalanddrama',
  templateUrl: './emotionalanddrama.component.html',
  styleUrls: ['./emotionalanddrama.component.css']
})
export class EmotionalanddramaComponent {
    images:any;
          constructor(private service:EmotionalanddramaComponent){
          
            }
            ngOnInit(){
              this.service.onsubmit().subscribe(data=>this.images=data);
          
            }

}
