import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  url :string = "";
  constructor(private storage : Storage) { }


  public upLoadImages($event : any, name :string ){
    const image = $event.target.files[0]
    const imgRef = ref(this.storage,`images/`+ name)
    uploadBytes(imgRef,image)
    .then(response => {this.getImages() })
    .catch(error => console.log(error))
    
  }

  getImages(){
    const imgRef = ref(this.storage,'images')
    list(imgRef)
    .then(async response => {
      for (let item of response.items) {
        this.url = await getDownloadURL(item)
      }
    })
    .catch(error => console.log(error))
  }
}
