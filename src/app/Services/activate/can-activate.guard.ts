import { CanActivateFn } from '@angular/router';
import { environment } from 'src/app/environments/environment';

export const canActivateGuard: CanActivateFn = (route, state) => {
  let puerta = 0 ;  
  if (localStorage.getItem('token') && localStorage.getItem('ecodUsuario') ) {
            puerta = 1;     
  } 
  if (puerta==1) {
    return true;
  }
  else{
    return false;
  }
};
