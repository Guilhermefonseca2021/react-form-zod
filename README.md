# libs

-npm i react-hook-form zod @hookform/resolvers

<h3> ducument React Hook Form </h3>

*com hook form precisamos declarar a action='' pque recebe a funcao que passa nossas chamadas que estrao dentro do estado(hook) do formulario(form).

<span>
<-form action=''>
   <-label htmlFor=''>E-mail</-label>
   <=input type='email' name='name'></=input>
</=form>
</span>

1. iniciando (importamos nosso estado useForm)
   
<span>
const {} = useForm();
<span>

useform retorna funcoes que importantes dentro que sao:

register( indicar quais os campos do formulario e registrar) cada input vai receber register com spread operator.
a declaracao no input com register

<span>
<-input 
   type='email' 
   name='name' 
   {...register('email')} //register recebe como argumento o nome do e-mail
/>
</span>

handleSubmit(enviar nosso formulario como requisicao para back-end) que é passa dentro do nosso formulario para enviar clicar mo butao submit. recebe como argumento a funcao que queremos executar no envio de dados para response do servidor.

<span>
<-form action='' onSubmit={handleSubmit(exemploCriarUsuario)}>
</-span>


<h3> document validacao com ZOD </h3>

*nosso zod trabalha a validação dos campos pelo nosso name setado pelo useForm.

1. declaramos nosso objeto (o que tem as cada campo input. o que sao se email, senha, endereco etc. e como serao as entradas)

<span>
import * as zod from 'zod'

const createUserFormSchema = zod.object ({
  
})
</span>


*o Schema se refere a como é a estrutura de dados que nosso objeto vai receber.

2. criando validacao 
.nonempty(mensagem de erro)
.min (minimo de entrada q deve ter)

<span>
const createUserFormSchema = zod.object {
  email: zod.string()
   .nonempty('O e-mail é obrigatorio')
   .email('formato de e-mail invalido'),
  password: zod.string()
   .min(8, 'a senha precisa de no minimo 8 caracteres'),
}
</span>


3. comecando validacao (devo passar ao hook o resolver do zod) primeiro importando o zodResolvr do @hookform/resolver/zod
   
<span>
import { zodResolver} from '@hookform/resolvers/zod'
[...]

const { register, handleSubmit } = useForm({
   resolver: zodResolver(createUserFormSchema),
});
</span>

4. opcional mas impotante (podemos colocar o formState dentro da nossas desestruturacao do useForm e ver quais erros no nosso formulario com zod.)

<span>
const { register, handleSubmit, formState: { errors } } = useForm
</span>

com isso acima posso disparar as mensagens declaradas no zod.object ao usuario abaixo do input

{errors.email && <span> {errors.email.message}</span> }


<h3> tipagem (inteligencia para os campos do zod) </h3>

1. criamos um type que vai receber o metodo .infer do zod(inferencia vem de determinar de forma automatica com base no typo do que eu declarar)

<span>
type createUserFormData = zod.infer<-typeof createUserFormSchema>
</span>

2. passamos para o useForm um generic sendo a typagem que declaramos acima...

<span>
 const { register, handleSubmit, formState: { errors } } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
});
</span>
