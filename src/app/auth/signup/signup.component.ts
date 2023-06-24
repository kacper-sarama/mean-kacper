import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Subscription } from "rxjs";


@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit, OnDestroy {

  isLoading = false;
  private authStatusSub: Subscription;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener()
      .subscribe({
        next: () => this.isLoading = false
      })
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.creatUser(form.value.email, form.value.password);
    // .subscribe({
    //   next: () => null,
    //   error: (e) => this.isLoading = false,
    //   complete: () => console.info('complete')
    // });
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
