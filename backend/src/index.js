const express = require('express'); 
const cors = require('cors');
const routes = require('./routes');
const app = express(); //cria aplicacao

app.use(cors());
app.use(express.json()); 
app.use(routes);
app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * Metodos HTTP:
  * 
  * GET: Buscar/listar uma informacao no back-end
  * POST: Criar uma  informacao no back-end
  * PUT: Alterar uma informacao no back-end
  * DELETE: Deletar uma informacao no back-end
  */

  /**
   * Tipos de parametros:
   * Query Params: Parametros nomeados enviados na rot apos o simbolo de "?" (Filtros, paginacao)
   * Route Params: Parametros utilizados para identificar recursos
   * Request Body: Corpo da requisicao utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL:MongoDB, CouchDB, etc
    */

    /**
     * Comunicacao BD
     * Instalar o Driver: (ex: SELECT * FROM users)
     * Query Builder: table('users').select('*').where()
     */


