




import React, { createContext, useContext, useEffect, useState } from "react";
// import Router, { useRouter } from 'next/router';
import { http } from "@/utils/http";
import Preloader from '@/components/Preloader';


interface AuthContextType {
  // isAuth: boolean;
  // user: Usuario_login;
  login: (email: string, password: string) => Promise<boolean>;
  // logout: () => void;
  // loading: boolean;
}

const AuthContext = createContext({});
// const keyCookie = 'crm-wiwi';

export const AuthProvider = ({ children }: React.PropsWithChildren) => {

  //   const { pathname } = useRouter();
  //   const [user, setUser] = useState<Usuario_login>({} as Usuario_login);
  const [loading, setLoading] = useState(true);

  //   useEffect(() => { loadUser() }, []);

  //   const loadUser = async () => {

  //     let itemTMP: any = await new Promise(function (resolve) { resolve(localStorage.getItem(keyCookie)) });
  //     let item: Token = {} as Token;
  //     let user = {} as Usuario_login;

  //     if (itemTMP) item = JSON.parse(itemTMP);
  //     if (Object.keys(item).length === 0) {
  //       Router.push('/login');
  //       return;
  //     }

  //     user = JSON.parse(item.data);
  //     if (pathname == '/login') {
  //       if (user.Roles_Nombre == "Operador") {
  //         Router.push('/aplicaciones');
  //         return;
  //       }

  //       setUser(user)
  //       Router.push('/');
  //       return;
  //     }

  //     const now = new Date();
  //     if (now.getTime() > item.expires) {
  //       localStorage.removeItem(keyCookie); // LOS DATOS HAN EXPIRADO, ELIMINARLOS DEL LOCATESTORAGE
  //       Router.push('/login');
  //       return;
  //     }

  //     setUser(JSON.parse(item.data));

  //     if (user.Roles_Nombre == "Operador") {
  //       Router.push('/aplicaciones');
  //       return;
  //     }
  //     setLoading(false);
  //   };

  const login = async (email: string, password: string) => {
    try {
      const response = await http.post('/login', { email, password });
        console.log(response.data);
      //   if (!response.data) {
      //     return false;
      //   }

      //   setUser(response.data);
      //   saveDataWithExpiration(JSON.stringify(response.data), 480);

      //   return true
    } catch (err) {
      console.log(err);
      return {};
    }
  }

  //   const saveDataWithExpiration = (data = '', expirationMinutes = 0) => {

  //     let expiration = localStorage.getItem(keyCookie);

  //     const now = new Date();
  //     expiration = !expiration ? 0 : JSON.parse(expiration).expires;

  //     const expires = expirationMinutes == 0 ? expiration : now.getTime() + expirationMinutes * 60 * 1000;
  //     const item = { data, expires };

  //     localStorage.setItem(keyCookie, JSON.stringify(item));
  //     localStorage.setItem(`${keyCookie}-preferencias`, JSON.stringify({}));
  //   };

  //   const logout = () => {
  //     localStorage.removeItem(keyCookie);
  //     setUser({} as Usuario_login);
  //     Router.push('/login');
  //   }

  const value: any = {
    // isAuth: !!user,
    // user,
    login,
    // logout,
    // loading
  };

  //   useEffect(() => {

  //     if (JSON.stringify(value.user) == '{}') {
  //       if (pathname == '/login') {
  //         setLoading(false);
  //         return;
  //       }
  //     }

  //     if (value.user.Roles_Nombre == 'Operador' && ['/aplicaciones', '/login'].includes(pathname)) setLoading(false);
  //   }, [value]);

  return (
    <AuthContext.Provider value={value}>
      {loading ?
        <div className="flex justify-center items-center h-[300px]">
          <Preloader />
        </div> :
        children
      }
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext) as AuthContextType;