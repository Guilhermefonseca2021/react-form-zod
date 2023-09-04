// import { useState } from 'react';
import './App.css'
import { useForm } from 'react-hook-form'


function App() {
  // const { output, setOutput}  = useState('')
  const { register, handleSubmit } = useForm();

  function createUser(data: any) {
    console.log(data)
    // setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <>
      <header>
        <div className="nav">
          <div className="logo">
            <h2>hookform && zod</h2>
          </div>
        </div>
      </header>

      <div className="content">
        {/* indicar uma action para o zod executar uma funcao de criar chamadas para API */}
        <form action='' onSubmit={handleSubmit(createUser)}>
          <div>
            <label htmlFor=''>E-mail</label>
            <input 
              type='email' 
              {...register('email')}
            />
          </div>

          <div>
            <label htmlFor=''>Senha</label>
            <input 
              type='password' 
              {...register('password')}
            />
          </div>

          <button type='submit' name='name'>Salvar</button>
        </form>

        {/* <pre>{output}</pre> */}
      </div>
    </>
  )
}

export default App
