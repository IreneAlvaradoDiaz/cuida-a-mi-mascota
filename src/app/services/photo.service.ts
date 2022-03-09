import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AuthService } from './auth.service';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private storage: AngularFireStorage, private authService: AuthService) { }

  async takePicture(){
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt
    });
    let foto = await fetch(image.webPath).then((i) => i.blob());
    return foto;
  }

  // uploadFile(event) {
  //   const file = event.target.files[0];
  //   const filePath = 'namePhoto';
  //   const ref = this.storage.ref(filePath);
  //   const task = ref.put(file);
  // }

  uploadFile(file: any, path: string): Promise<string> {
    return new Promise((resolve) => {
      const ref = this.storage.ref(path);
      const task = ref.put(file);
      task.snapshotChanges().pipe(finalize(() => {
           ref.getDownloadURL().subscribe((res) => {
            resolve(res);
            return;
          });
        })
      )
        .subscribe();
    });
  }
}
