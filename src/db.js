import {createPool} from 'mysql2/promise.js'
  const pool = createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'comprador'

})

export default pool

