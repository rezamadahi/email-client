import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  signedIn$: BehaviorSubject<boolean | null>;

  constructor(private authService: AuthService) {
    this.signedIn$ = this.authService.signedIn$;
  }

  ngOnInit(): void {
    this.authService.checkAuth().subscribe(() => {});
  }

}
