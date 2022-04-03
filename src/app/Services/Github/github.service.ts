import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from '../resource.service';

@Injectable({
  providedIn: 'root'
})
export class GithubService extends ResourceService<Object> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
   }

   getResourceUrl(): string {
     return 'github';
   }
}
