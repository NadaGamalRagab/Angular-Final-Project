import { Component, Input, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { HotelService } from 'src/app/_services/hotels/hotel.service';
import { Hotel } from 'src/app/_model/hotels/hotel';


@Component({
  selector: 'app-hotel-modal',
  templateUrl: './hotel-modal.component.html',
  styleUrls: ['./hotel-modal.component.scss']
})
export class HotelModalComponent implements OnInit {
  @Input() hotel:Hotel;
  constructor(config: NgbRatingConfig, private HotelService:HotelService) { 
    config.max = 5;
  }
 
  ngOnInit(): void {

  }
  currentRate = 0;
 
 

}
