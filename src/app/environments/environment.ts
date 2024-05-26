export const environment = {
    production: true,
     direcurl:"http://192.168.1.66:8000/", 
     header :{
        token : localStorage.getItem('token'),
        ecodUsuario : localStorage.getItem('ecodUsuario'), 
      }
  };
  