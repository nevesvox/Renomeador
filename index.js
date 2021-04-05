require('dotenv/config');

const fs = require("fs");

// Inicializa as variaveis
const caminhoDoArquivo = process.env.CAMINHO_ARQUIVO;

// Chama a função que renomeia os arquivos
renomeiaNomes();

// Função responsavel por renomear os arquivos
async function renomeiaNomes() {
    try {
        // Retorna os arquivos do diretório selecionado
        fs.readdir(caminhoDoArquivo, (err, arquivos) => {
            // Percorre o array de arquivos
            arquivos.forEach((arquivo, index) => {
                
                // Regra de como será renomeado o arquivo
                // Verifica se o arquivo possui a palavra que causa o erro
                if (arquivo.indexOf("Março") > -1) {
                    // Formata o nome do arquivo
                    let nomeFormatado = arquivo.replace("ç", "c");
    
                    // Função que renomeia os arquivos
                    fs.rename(
                        caminhoDoArquivo + arquivo,
                        caminhoDoArquivo + nomeFormatado,
                        function (err) {
                            if (err) {
                                throw err;
                            } else {
                                console.log('Arquivo renomeado: ' + nomeFormatado);
                            }
                        }
                    );
                }
            });
        });
    } catch(err) {
        console.log('Ops... Ocorreu um erro, verifique!', err);
    }
}
