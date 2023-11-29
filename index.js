const jsonServer = require('json-server')

const recipeAppServer = jsonServer.create()

const router = jsonServer.router('db.json')

const middleware = jsonServer.defaults()

recipeAppServer.use(middleware)
recipeAppServer.use(router)

const port = 4000 || process.env.PORT

recipeAppServer.listen(port,()=>{
    console.log(`recipeAppServer started at ${port} and ready to fetch request`);
})