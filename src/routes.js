const express = require('express')
const routes = express.Router()

const views = __dirname + "/views/"

const profile = {
    name: "Bruno",
    avatar: "https://github.com/brunobbr.png",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 6,
    "vacation-per-year": 2,
    "value-hour": 25
}

const jobs = [
    {
        id: 1,
        name: "Feito com Amor",
        "daily-hours": 2,
        "total-hours": 1,
        created_At: Date.now(),
    },
    {
        id: 2,
        name: "Designer",
        "daily-hours": 2,
        "total-hours": 60,
        created_At: Date.now(),
    }
]

function remainingDays(job){
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()
    const createdDate = new Date(job.created_At)
    const dueDay = createdDate.getDate() + Number(remainingDays)
    const dueDateInMs = createdDate.setDate(dueDay)
    const timeDiffInMs = dueDateInMs - Date.now()
    const dayInMs = 1000 * 60 * 60 * 24
    const dayDiff = (timeDiffInMs / dayInMs).toFixed()

    return dayDiff
}

// request, response
routes.get('/', (req, res) => {
    const updatedJobs = jobs.map((job) => {
       const remaining = remainingDays(job)
       const status = remaining <= 0 ? 'done' : 'progress'
        return {
            ...job,
            remaining,
            status,
            budget: profile["value-hour"] * job["total-hours"]
        }
    })
    

    return res.render(views + "index", {jobs: updatedJobs})
})
routes.get('/job', (req, res) => res.render(views + "job"))
routes.post('/job', (req, res) => {

    const lastId =  jobs[jobs.length -1]?.id || 1;
    jobs.push({
        id: lastId + 1,
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        created_At: Date.now()// atribuindo nova data
    })
    return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", {profile}))

module.exports = routes