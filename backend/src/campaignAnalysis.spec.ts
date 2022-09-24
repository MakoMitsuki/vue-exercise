import {
    formatChartClicksData,
    formatChartClicksLabels,
    getDateWithHighestClicks,
    getDateWithHighestAllConversions,
    getTotalClicks,
    getTotalAllConversions,
    getCampaignName,
    getCostPerClick,
} from './campaignAnalysis'

import { rawMultipleCampaignsData, rawSingleCampaignsData } from './data/campaigns'

describe('formatChartClicksData', () => {
    it('should return the correct dataset and length', () => {
        const formattedChartClicksData = formatChartClicksData(rawSingleCampaignsData)
        expect(formattedChartClicksData).toEqual([
            2, 0, 4, 2, 1, 4, 1, 3, 7, 4, 3, 6, 1, 6, 0, 2, 2, 5, 5, 4, 3, 0, 5, 1, 1, 1, 233, 507, 628, 820, 679, 25,
            21, 25, 19, 16, 27, 19, 16, 16, 19, 29, 15, 18, 11, 14, 14, 15, 15, 13, 20, 13, 17, 27, 15, 23, 21, 25, 21,
            18, 23, 13, 19, 26, 18, 21, 12, 27, 31, 44, 35, 42, 48, 27, 33, 32, 47, 70, 0, 61, 55, 56, 46, 44, 52, 53,
            45, 43, 40, 53, 28,
        ])
        expect(formattedChartClicksData.length - 1).toEqual(90)
    })
})

describe('formatChartClicksLabels', () => {
    it('should contain the correct labels, be ordered correctly with the correct length', () => {
        const formattedChartClicksLabels = formatChartClicksLabels(rawSingleCampaignsData)
        expect(formattedChartClicksLabels).toEqual([
            '2021-09-04',
            '2021-09-05',
            '2021-09-06',
            '2021-09-07',
            '2021-09-08',
            '2021-09-09',
            '2021-09-10',
            '2021-09-11',
            '2021-09-12',
            '2021-09-13',
            '2021-09-14',
            '2021-09-15',
            '2021-09-16',
            '2021-09-17',
            '2021-09-18',
            '2021-09-19',
            '2021-09-20',
            '2021-09-21',
            '2021-09-22',
            '2021-09-23',
            '2021-09-24',
            '2021-09-25',
            '2021-09-26',
            '2021-09-27',
            '2021-09-28',
            '2021-09-29',
            '2021-09-30',
            '2021-10-01',
            '2021-10-02',
            '2021-10-03',
            '2021-10-04',
            '2021-10-05',
            '2021-10-06',
            '2021-10-07',
            '2021-10-08',
            '2021-10-09',
            '2021-10-10',
            '2021-10-11',
            '2021-10-12',
            '2021-10-13',
            '2021-10-14',
            '2021-10-15',
            '2021-10-16',
            '2021-10-17',
            '2021-10-18',
            '2021-10-19',
            '2021-10-20',
            '2021-10-21',
            '2021-10-22',
            '2021-10-23',
            '2021-10-24',
            '2021-10-25',
            '2021-10-26',
            '2021-10-27',
            '2021-10-28',
            '2021-10-29',
            '2021-10-30',
            '2021-10-31',
            '2021-11-01',
            '2021-11-02',
            '2021-11-03',
            '2021-11-04',
            '2021-11-05',
            '2021-11-06',
            '2021-11-07',
            '2021-11-08',
            '2021-11-09',
            '2021-11-10',
            '2021-11-11',
            '2021-11-12',
            '2021-11-13',
            '2021-11-14',
            '2021-11-15',
            '2021-11-16',
            '2021-11-17',
            '2021-11-18',
            '2021-11-19',
            '2021-11-20',
            '2021-11-21',
            '2021-11-22',
            '2021-11-23',
            '2021-11-24',
            '2021-11-25',
            '2021-11-26',
            '2021-11-27',
            '2021-11-28',
            '2021-11-29',
            '2021-11-30',
            '2021-12-01',
            '2021-12-02',
            '2021-12-03',
        ])
        expect(formattedChartClicksLabels.length - 1).toEqual(90)
    })

    it('should not error on a single entry', () => {
        const d = [
            {
                campaign: {
                    resource_name: 'customers/3827277046/campaigns/9531537070',
                    name: '[21] RM_GDN_WD_EN - Remarketing - Website',
                    id: 9531537070,
                },
                metrics: { clicks: 2, all_conversions: 2.5, conversions: 2.5, all_conversions_value: 21.32, cost: 4 },
                segments: { date: '2021-09-04' },
            }]
        const f = formatChartClicksLabels(d)
        expect(f).toEqual(['2021-09-04'])
    })
})

describe('getDateWithHighestClicks', () => {
    it('should have the correct calculation and date', () => {
        expect(getDateWithHighestClicks(rawSingleCampaignsData)).toEqual({ date: '2021-10-03', clicks: 820 })
    })
})

describe('getDateWithHighestAllConversions', () => {
    it('should have the correct calculation and date', () => {
        expect(getDateWithHighestAllConversions(rawSingleCampaignsData)).toEqual({
            date: '2021-10-03',
            all_conversions: 232,
        })
    })
})

describe('getTotalClicks', () => {
    it(' should have the correct calculation of clicks', () => {
        expect(getTotalClicks(rawSingleCampaignsData)).toEqual(4631)
    })
})

describe('getTotalAllConversions', () => {
    it('should have the correct calculation of conversions', () => {
        expect(getTotalAllConversions(rawSingleCampaignsData)).toEqual(1280)
    })
})

describe('getCampaignName', () => {
    it('should have the correct campaign name', () => {
        expect(getCampaignName(rawSingleCampaignsData)).toEqual('[21] RM_GDN_WD_EN - Remarketing - Website')
    })
})

describe('getCostPerClick', () => {
    it('should return the correct cost per click given a campaignId', () => {
        expect(getCostPerClick(rawMultipleCampaignsData, '9531537070')).toEqual(0.57)
    })

    it('should give null if the campaign is not found', () => {
        expect(getCostPerClick(rawMultipleCampaignsData, 'testid')).toEqual(null)
    })

    it('should give 0 if the campaign has 0 clicks', () => {
        expect(getCostPerClick(rawMultipleCampaignsData, '9531537071')).toEqual(0)
    })
})
