const express = require('express')
const server = express()


const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses,
    registeredSuccessfully,
    controlPanel
} = require('./pages')

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


server
    .use(express.urlencoded({ extended: true }))
    //configurar arquivos estaticos
    .use(express.static("public"))

.get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .get("/registered-successfully", registeredSuccessfully)
    .get("/control-panel", controlPanel)
    .post("/save-classes", saveClasses)

.listen(5500)