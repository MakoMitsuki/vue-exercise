import express, { Application } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import campaignsRoute from './routes/campaigns'

const app: Application = express()

const port: number = 3000

app.use(cors())
app.use(bodyParser.json())

// For the sake of this exercise we introduce a mock delay for requests.
// Consider loading states for the frontend.
app.use((req, res, next) => {
    const artificialDelay = 3000 * Math.random()

    setTimeout(() => {
        next()
    }, artificialDelay)
})

/* Campaigns Route */
app.use('/campaigns', campaignsRoute)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
