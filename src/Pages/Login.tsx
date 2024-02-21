

export const Login = () => {
  return (
    <div className="bg-blue flex justify-center items-center h-screen w-100">
         {/*ESQUERDA: ADICIONAR IMAGEM*/}
  <div className=" w-1/2 h-screen hidden lg:block">
<img src="public/undraw_dev_focus_re_6iwt (1).svg" alt="Placeholder Image" className="object-cover w-full h-full"/>
  </div>
  {/* tela á direita*/}   
  <div className=" bg-white lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 h-full">
 <h1 className="text-2xl font-semibold mb-4" >LOGIN
  </h1>
  <form>
<div className="mb-4">
<label htmlFor="username" className="block text-gray-600">Usuario</label>
<input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
</div>
<div className="mb-4">
<label htmlFor="password" className="block text-gray-600">Senha</label>
<input type="password" id="passwrod" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />

</div>
<div className="mb-4 flex items-center">
<input type="checkbox" id="remember" name="remember" className="text-blue-5
00"/>
<label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
</div>
<div className="mb-6 text-blue-500">
      <a className="hover:underline">Esqueceu a senha?</a>
    </div>
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Entrar</button>

  </form>
  </div>
  </div>
  )
}
export default Login;
