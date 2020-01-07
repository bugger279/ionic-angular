import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-social-test',
  templateUrl: './social-test.page.html',
  styleUrls: ['./social-test.page.scss'],
  providers: [SocialSharing]
})
export class SocialTestPage implements OnInit {

  constructor(private socialSharing: SocialSharing) { }

  ngOnInit() {
  }

  share() {
    this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  }

}
