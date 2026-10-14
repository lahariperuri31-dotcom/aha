import { Component } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent {
     images:any;
          constructor(private service:GenreComponent){
          
          }
          ngOnInit(){
           this.service.onsubmit().subscribe(data=>this.images=data);
          
          }
}
