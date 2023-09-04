// import { useState } from 'react';
import './App.css'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver} from '@hookform/resolvers/zod'

const createUserFormSchema = zod.object ({
  name: zod.string()
    .nonempty('O nom é obrigatorio')
    .transform(name => {
      return name.trim().split(' ').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join(' ')
    }),
  email: zod.string()
    .nonempty('O e-mail é obrigatorio')
    .email('formato de e-mail invalido'),
  password: zod.string()
    .min(8, 'a senha precisa de no minimo 8 caracteres'),
})

type createUserFormData = zod.infer<typeof createUserFormSchema>

function App() {
  // const { output, setOutput}  = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

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
            <label htmlFor=''>Nome</label>
            <input 
              type='text' 
              {...register('name')}
            />
          </div>

          <div>
            <label htmlFor=''>E-mail</label>
            <input 
              type='email' 
              {...register('email')}
            />
          </div>
          {errors.email && <span>{errors.email.message}</span> }

          <div>
            <label htmlFor=''>Senha</label>
            <input 
              type='password' 
              {...register('password')}
            />
          </div>
          {errors.password && <span>{errors.password.message}</span> }

          <button type='submit' name='name'>Salvar</button>
        </form>

        {/* <pre>{output}</pre> */}
      </div>
    </>
  )
}

export default App
