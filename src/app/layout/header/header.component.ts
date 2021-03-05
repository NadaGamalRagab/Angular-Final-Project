import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { LocalizationService } from 'src/app/_services/general/localization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  search: string[] = [];
    userIsAutenticated =false;
   private authListenerSubs: Subscription;
  constructor(private localizationService: LocalizationService,
    public translate: TranslateService,
    private authService : AuthService
  ) { }

  ngOnInit() {
    // 3shan tt2kdi law authenticated wala la2
    this.userIsAutenticated = this.authService.getIsAuth();
     this.authListenerSubs = this.authService.getAuthStatusListener()
     .subscribe(isAuthenticated =>{
       this.userIsAutenticated = isAuthenticated;
     });

  }
  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }

  onLogout(){
     this.authService.logout();
  }


  show = true;
  searchInput() {
    this.show = false;
    console.log(this.show)
  }
  timeout: any = null;
  onKeySearch(event: any) {
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode == 13) {
        $this.executeListing(event.target.value);
      }
    }, 1);
  }

  executeListing(value: string) {
    // alert(value);
    console.log(value)
    if (value !== '') {
      this.search.push(value);
    }
  }




}
