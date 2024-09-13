Feature: teste

Scenario: Escolher Produto e Validar Carrinho
Given que eu estou no site Advantage Shopping
And digito "Mouse" na pesquisa
When clico na lupa de Pesquisa
And clico no mouse escolhido
And clico para adicionar no carrinho
And clico no carrinho
Then o sistema deve exibir a descrição "HP USB 3 BUTTON OPTICAL MOUSE"
And com a cor 
And com o valor "$9.99"
