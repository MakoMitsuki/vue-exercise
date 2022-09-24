import express, { Request, Response } from 'express'

import { formatChartClicksData, formatChartClicksLabels, getCostPerClick } from '../campaignAnalysis'
import { rawMultipleCampaignsData, rawSingleCampaignsData } from '../data/campaigns'

const router = express.Router({ mergeParams: true })

router.get('/', (req: Request, res: Response) => {
    res.json(rawSingleCampaignsData)
})

router.get('/chart-data', (req: Request, res: Response) => {
    const chartClicks = formatChartClicksData(rawSingleCampaignsData)
    const chartLabels = formatChartClicksLabels(rawSingleCampaignsData)

    res.json({
        chartClicks,
        chartLabels,
    })
})

// Add a new route to calculate the CPC for a given campaign id
// Add test(s) for the calculation
// The calculation for CPC is in the readme
router.get(`/get-cost-per-click/:id`, (req: Request, res: Response) => {
    const id = req.params.id
    const cost = getCostPerClick(rawMultipleCampaignsData, id);

    res.json({
        cost
    })
})

export default router
