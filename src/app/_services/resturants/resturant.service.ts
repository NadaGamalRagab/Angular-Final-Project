import { Injectable, EventEmitter } from '@angular/core';
import { Restaurant } from '../../_model/resturant/restaurant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HomeService } from '../home/home.service';

@Injectable({
  providedIn: 'root',
})
export class ResturantService {
  resturant = [];

  //resturantsId = new EventEmitter<string>();
  baseUrl = 'https://sleepy-basin-52383.herokuapp.com/';
  viewDetails = new EventEmitter<Restaurant>();
  resturantsId: string[] = [];

  getResturantById(_id: String) {
    return this.httpClient.get(`${this.baseUrl}Restaurant/${_id}`);
    // return this.resturant.find((rest) => rest._id == _id);
  }
  constructor(
    private httpClient: HttpClient,
    private homeService: HomeService
  ) {
    this.resturantsId = JSON.parse(localStorage.getItem('resturantsId'));
    for (let id of this.resturantsId) {
      this.getResturantById(id).subscribe((res) => {
        this.resturant.push(res);
        console.log(res);
      });
    }
  }
  // this.homeService.resturantsId.subscribe((resp) => {
  //   console.log(resp);
  //   this.resturantId = resp;
  //   for (let id of this.resturantId) {
  //     this.getResturantById(id).subscribe((res) => {
  //       this.resturant.push(res);
  //       console.log(res);
  //     });
  //   }
  //   // console.log(this.hotels);
  // });
  // this.getAllResturants().subscribe((resp) => {
  //   Object.values(resp).map((res) => {
  //     this.resturant.push(res);
  //   });
  // });

  getAllResturants() {
    return this.resturant;
    // return this.httpClient.get(`${this.baseUrl}Restaurant`);
  }

  searchByName(resturantName: string) {
    return this.resturant.filter((rest) =>
      rest.name.toLowerCase().includes(resturantName.toLowerCase())
    );
  }
}
