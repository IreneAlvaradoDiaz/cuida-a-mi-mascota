import { Camera, CameraResultType } from '@capacitor/camera';
import { Injectable } from '@angular/core';

''

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  async takePicture(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
    
    return image.base64String;
  }
}
