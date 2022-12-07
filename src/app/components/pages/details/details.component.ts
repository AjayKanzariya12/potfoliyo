import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id:any;
  Userdata: any;

  constructor(private api :DetailsService ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.getAlluser()
  }

  getAlluser(){

    this.api.getdata(this.id)
    .subscribe(res=>{
      this.Userdata=res;
      console.log(this.Userdata)
    })
  
  }
}
