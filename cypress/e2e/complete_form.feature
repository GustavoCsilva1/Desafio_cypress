#language: pt

Funcionalidade: Preenchimento de formulario
    Sendo que eu acesso a URL do formulário
    Quero realizar o preenchimento de todos os formularios
    Para no final receber a mensagem "Sending e-mail success" na tela

Cenario: Preencher e enviar o formulario
    Dado que acesso a URL "http://sampleapp.tricentis.com/101/app.php"
    E preencho o formulario Enter Vehicle Data
    E preencho o formulario Enter Insurant Data
    E preencho o formulario Enter Product Data
    E preencho o formulario Select Price Option
    E preencho o formulario Send Quote
    Entao verificar a mensagem "Sending e-mail success"