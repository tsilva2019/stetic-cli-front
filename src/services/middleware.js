import Cookies from "js-cookie";
import axios from 'axios';

export default {
    auth(to, from, next) {
        const token = Cookies.get('token');
       if(!token) {
        next('/sign-in');
       }

       axios(
        "http://localhost:3002/validaToken",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access": "application/json",
            "Authorization": `Bearer ${token}`
          },
        }
      )
        .then(next())
        
    }
}