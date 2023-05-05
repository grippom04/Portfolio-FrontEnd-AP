import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes} from '@angular/fire/storage';



@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  url :string = "";

  constructor(private storage : Storage) { }

  public LoadImage($event : any, name :string ){
    const image = $event.target.files[0];
    const imgRef = ref(this.storage,`images/`+ name)
     uploadBytes(imgRef,image)
     .then(response => {
      getDownloadURL(imgRef)
      .then((url) => {
        this.url = url;
        console.log(this.url);
      }) 
     })
     .catch(error => console.log(error))
   }

}
