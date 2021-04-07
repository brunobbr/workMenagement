const express = require('express')
const routes = express.Router()

const views = __dirname + "/views/"

const profile = {
    name: "Bruno",
    avatar: "https://avatars.githubusercontent.com/u/63427164?s=400&u=b0504a2df7d06c9784a2b6897506b415f65efd78&v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 6,
    "vacation-per-year": 2
}

// request, response
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", {profile}))

module.exports = routes