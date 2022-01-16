import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public shareWithOptionsFile(): void {
    console.log('shareWithOptionsFile');
  }

  public shareWithOptionsFileArray(): void {
    console.log('shareWithOptionsFileArray');
  }

  public shareViaEmailFile(): void {
    console.log('shareViaEmailFile');
  }

  public shareViaEmailFileArray(): void {
    console.log('shareViaEmailFileArray');
  }

  public shareFile(): void {
    console.log('shareFile');
  }

  public shareFileArray(): void {
    console.log('shareFileArray');
  }

  public saveToPhotoAlbumFile(): void {
    console.log('saveToPhotoAlbumFile');
  }

  public saveToPhotoAlbumFileArray(): void {
    console.log('saveToPhotoAlbumFileArray');
  }

  public shareViaWhatsAppToPhoneFile(): void {
    console.log('shareViaWhatsAppToPhoneFile');
  }

  public shareViaWhatsAppToPhoneFileArray(): void {
    console.log('shareViaWhatsAppToPhoneFileArray');
  }

}
