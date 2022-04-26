import chalk from 'chalk'
import fs from 'fs'

const trataErro = err => {
    throw new Error(chalk.red(err.code, "Caminho errado"))
}

async function pegarArquivo(caminho) {
    const encoding = 'utf-8'
    try{
        const texto = await fs.promises.readFile(caminho, encoding)
        console.log(chalk.green(texto))
    } catch(err){
        trataErro(err)
    }
}

// const pegarArquivo = (caminho) => {
//     const encoding = 'utf-8'
//     fs.promises.readFile(caminho, encoding)
//     .then(data => console.log(chalk.green(data)))
//     .catch(err => trataErro(err))
// }

// const pegarArquivo = (caminho) => {
//     const encoding = 'utf-8'
//     fs.readFile(caminho, encoding, (err,data) => {
//         err && trataErro(err)
//         data && console.log(chalk.green(data))
//     })
// }

pegarArquivo('./arquivos/txto.md')