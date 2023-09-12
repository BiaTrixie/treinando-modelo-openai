# treinando-modelo-openai

Um código simples de como criar um modelo Fine Tune a partir da openai

comece instalando as dependencias com 

> npm install

Mude os dados de treinamentos para o contexto que deseja, deixei alguns de exemplo.
Em seguida prepare esses dados para o padrão da openai

> openai tools fine_tunes.prepare_data -f <LOCAL_FILE>

execute o script 

> node uploadFile.js

para subir seus dados para a openai

após subir os dados execute o script 

> node createFineTune.js

para ajustar o modelo

o ajuste demora um certo tempo então vamos usar o 

> node listFineTunes.js

para verificar o status do nosso modelo, quando o status estiver como sucedido utilize o script 

> node createCompletion.js


### Parabéns o seu modelo foi criado com sucesso!




