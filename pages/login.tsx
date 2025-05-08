import IconEye from "@/assets/img/IconEye";
import IconEyeActive from "@/assets/img/IconEyeActive";
import Load from "@/components/Preloader";
import { useAuth } from "@/context/auth";
import { useEffect, useState } from "react";

export default function LoginPage() {

  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    let isPass = false;
    let isEmail = false;

    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) isEmail = true;
    if (password.length > 0) isPass = true;

    setIsDisabled(!(isEmail && isPass));
  }, [password, email]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsDisabled(true);

    if (!(await auth.login(email, password))) {
      //     alert(" ⚠️ Verifica que tus datos sean correctos");
      //     setIsLoading(false);
      //     setIsDisabled(false);
      //     return;
    }

    //   Router.push("/");

    //   // setTimeout(() => {
    //   //   setIsLoading(false);
    //   //   setIsDisabled(false);
    //   // }, 5000);
  };

  return (
    <div className="bg-[#f9f9f9] mx-auto flex flex-col items-center justify-center h-screen">
      <div className="bg-[#fff] border p-8 rounded-md shadow-sm flex flex-col gap-6 w-[350px] mini:w-full mini:h-full mini:border-none mini:flex mini:flex-col mini:justify-center">

        <div className="text-[24px] font-semibold">Login</div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-gray-700 text-sm font-semibold uppercase">Usuario</label>
            <div className="relative">
              <input className="bg-[#f9fafb] border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700  leading-tight outline-none" type="text" value={email} onChange={({ target }) => setEmail(target.value)} placeholder="Nombre de usuario" />
              <div className="w-6 h-6 absolute top-2 right-2 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full ">
                  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-700 text-sm uppercase font-semibold">Contraseña</label>
            <div className="relative">
              <input className="bg-[#f9fafb] border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none" type={showPassword ? "text" : "password"} value={password} onChange={({ target }) => setPassword(target.value)} placeholder="Contraseña" />
              <div className={`w-6 h-6 cursor-pointer absolute top-2 right-2 ${showPassword ? "text-wiwi" : "text-gray-300"} hover:text-gray-500`} onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <IconEyeActive /> : <IconEye />}
              </div>
            </div>
          </div>

          <div className="mt-2">
            <button disabled={isDisabled} className="bg-green-400 text-white font-medium text-base py-2 px-4 rounded-md hover:bg-green-600 focus:border-b-0 focus:border-t-2 focus:border-[#61b541] border-b-2 border-[#53b130] disabled:text-gray-400 disabled:bg-gray-100 disabled:border-gray-300 disabled:opacity-50 flex gap-3 items-center select-none" type="submit">
              Ingresar {isLoading && <Load size={20} />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// {
//   "email": "eve.holt@reqres.in",
//   "password": "cityslicka"
// }