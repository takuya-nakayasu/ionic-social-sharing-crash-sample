import { Component } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public message = 'share this';
  public subject = 'the subject';
  public fileUrl = `data:image/png;base64,iVBORw0KGgoAAA
  ANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4
  //8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU
  5ErkJggg==`;
  public to = 'l08084.1989@gmail.com';
  public phoneNumber = '09071879734';

  constructor(private socialSharing: SocialSharing) {}

  public shareWithOptionsFile(): void {
    console.log('shareWithOptionsFile');
    this.socialSharing.shareWithOptions({ files: this.fileUrl });
  }

  public shareWithOptionsFileArray(): void {
    console.log('shareWithOptionsFileArray');
    this.socialSharing.shareWithOptions({ files: [this.fileUrl] });
  }

  public shareViaEmailFile(): void {
    console.log('shareViaEmailFile');
    this.socialSharing.shareViaEmail(
      this.message,
      this.subject,
      [this.to],
      undefined,
      undefined,
      this.fileUrl
    );
  }

  public shareViaEmailFileArray(): void {
    console.log('shareViaEmailFileArray');
    this.socialSharing.shareViaEmail(
      this.message,
      this.subject,
      [this.to],
      undefined,
      undefined,
      [this.fileUrl]
    );
  }

  public shareFile(): void {
    console.log('shareFile');
    this.socialSharing.share(undefined, undefined, this.fileUrl);
  }

  public shareFileArray(): void {
    console.log('shareFileArray');
    this.socialSharing.share(undefined, undefined, [this.fileUrl]);
  }

  public saveToPhotoAlbumFile(): void {
    console.log('saveToPhotoAlbumFile');
    this.socialSharing.saveToPhotoAlbum(this.fileUrl);
  }

  public saveToPhotoAlbumFileArray(): void {
    console.log('saveToPhotoAlbumFileArray');
    this.socialSharing.saveToPhotoAlbum([this.fileUrl]);
  }

  public shareViaWhatsAppToPhoneFile(): void {
    console.log('shareViaWhatsAppToPhoneFile');
    this.socialSharing.shareViaWhatsAppToPhone(
      this.phoneNumber,
      this.message,
      this.fileUrl
    );
  }

  public shareViaWhatsAppToPhoneFileArray(): void {
    console.log('shareViaWhatsAppToPhoneFileArray');
    this.socialSharing.shareViaWhatsAppToPhone(this.phoneNumber, this.message, [
      this.fileUrl,
    ]);
  }
}
