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



