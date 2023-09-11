import { Injectable,Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor  {

  constructor(private injector:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let userServices=this.injector.get(AuthService)
    const modifiedRequest = req.clone({
      setHeaders: {
        Authorization:`Bearer ${userServices.getToken()}`
      },
    });

    return next.handle(modifiedRequest);
 
}
  
}
