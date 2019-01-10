import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ServerProvider {

  public URL_API = "http://vitoriabari.com.br/api/index.php?"

  constructor(public http: HttpClient) {
    console.log('Hello ServerProvider Provider');
  }

}
