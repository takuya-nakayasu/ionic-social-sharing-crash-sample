import { Component } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public fileUrl = `data:image/png;base64,iVBORw0KGgoAAA
  ANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4
  //8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU
  5ErkJggg==`;

  constructor(private socialSharing: SocialSharing) {}

  /**
   * Call SocialSharing#shareWithOptions with `files: string` param
   *
   * @memberof HomePage
   */
  public callShareWithOptionsCrash(): void {
    this.socialSharing.shareWithOptions({ files: this.fileUrl });
  }

  /**
   * Call SocialSharing#shareWithOptions with `files: string[]` param
   *
   * @memberof HomePage
   */
  public callShareWithOptionsSuccess(): void {
    this.socialSharing.shareWithOptions({ files: [this.fileUrl] });
  }
}
