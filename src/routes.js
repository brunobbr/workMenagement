const express = require('express')
const routes = express.Router()

const views = __dirname + "/views/"

const profile = {
    name: "Bruno",
    avatar: "https://github.com/brunobbr.png",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 6,
    "vacation-per-year": 2
}

const jobs = [
    {},
    {},
]

// request, response
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.post('/job', (req, res) => {
    jobs.push(req.body)
    return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", {profile}))

module.exports = routes