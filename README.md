# libs

-npm i react-hook-form zod @hookform/resolvers

# ducument React Hook Form

*com hook form precisamos declarar a action='' pque recebe a funcao que passa nossas chamadas que estrao dentro do estado(hook) do formulario(form).

<form action=''>
   <label htmlFor=''>E-mail</label>
   <input type='email' name='name'></input>
</form>


1. iniciando (importamos nosso estado useForm)
   

const {} = useForm();


useform retorna funcoes que importantes dentro que sao:

register( indicar quais os campos do formulario e registrar) cada input vai receber register com spread operator.
a declaracao no input com register

<input 
   type='email' 
   name='name' 
   {...register('email')} //register recebe como argumento o nome do e-mail
/>

handleSubmit(enviar nosso formulario como requisicao para back-end) que é passa dentro do nosso formulario para enviar clicar mo butao submit. recebe como argumento a funcao que queremos executar no envio de dados para response do servidor.

<form action='' onSubmit={handleSubmit(exemploCriarUsuario)}>


# document validacao com ZOD

*nosso zod trabalha a validação dos campos pelo nosso name setado pelo useForm.

1. declaramos nosso objeto (o que tem as cada campo input. e como serao as entradas)


import * as zod from 'zod'

const createUserFormSchema = zod.object ({
  
})


*o Schema se refere a como é a estrutura de dados que nosso objeto vai receber.

2. criando validacao 
.nonempty(mensagem de erro)
.min (minimo de entrada q deve ter)


const createUserFormSchema = zod.object {
  email: zod.string()
   .nonempty('O e-mail é obrigatorio')
   .email('formato de e-mail invalido'),
  password: zod.string()
   .min(8, 'a senha precisa de no minimo 8 caracteres'),
}


3. comecando validacao (devo passar ao hook o resolver do zod) primeiro importando o zodResolvr do @hookform/resolver/zod
   
import { zodResolver} from '@hookform/resolvers/zod'
[...]

const { register, handleSubmit } = useForm({
   resolver: zodResolver(createUserFormSchema),
});

4. opcional mas impotante (podemos colocar o formState dentro da nossas desestruturacao do useForm e ver quais erros no nosso formulario com zod.)
 
const { register, handleSubmit, formState: { errors } } = useForm

com isso acima posso disparar as mensagens declaradas no zod.object ao usuario abaixo do input

{errors.email && <span> {errors.email.message}</span> }


# tipagem (inteligencia para os campos do zod)

1.