import { raw } from 'body-parser';
import { resourceLimits } from 'worker_threads';
import { RawSingleCampaignsData, RawMultipleCampaignsData } from '../../types'

/**
 *
 * @returns the campaign in question within the Google Ads data
 */
export function getCampaignName(rawSingleCampaignsData: RawSingleCampaignsData[]): string {   
    return rawSingleCampaignsData[0].campaign.name
}

/**
 *
 * @returns an object containing the date as a string with clicks as a number for the highest clicked date
 */
export function getDateWithHighestClicks(rawSingleCampaignsData: RawSingleCampaignsData[]): {
    date: string
    clicks: number
} {
    const sorted = rawSingleCampaignsData.sort((c1, c2) => c2.metrics.clicks - c1.metrics.clicks);
    return { date: sorted[0].segments.date, clicks: sorted[0].metrics.clicks}
}

/**
 *
 * @returns an object containing the date as a string with conversions as a number for the highest converting date
 */
export function getDateWithHighestAllConversions(rawSingleCampaignsData: RawSingleCampaignsData[]): {
    date: string
    all_conversions: number
} {
    const sorted = rawSingleCampaignsData.sort((c1, c2) => c2.metrics.all_conversions - c1.metrics.all_conversions);
    return { date: sorted[0].segments.date, all_conversions: Number(sorted[0].metrics.all_conversions.toFixed())}
}

/**
 *
 * @returns a sum of all the clicks throughout the data
 */
export function getTotalClicks(rawSingleCampaignsData: RawSingleCampaignsData[]): number {
    let totalClicks = 0;
    rawSingleCampaignsData.forEach(c => { totalClicks += c.metrics.clicks });
    
    return totalClicks;
}

/**
 *
 * @returns a sum of all the conversions throughout the data
 */
export function getTotalAllConversions(rawSingleCampaignsData: RawSingleCampaignsData[]): number {
    let totalAllConversions = 0;
    rawSingleCampaignsData.forEach(c => { totalAllConversions += Number(c.metrics.all_conversions.toFixed()) });

    return totalAllConversions;
}

/**
 *
 * HELPER FUNCTION
 * @returns an array of missing dates in an array of date strings
 */
export function getMissingDates(dateArray: string[]){
    try {
        let result: string[] = []
        for (let i = 0; i < dateArray.length; i++) {
            let date1 = new Date(dateArray[i])
            let date2 = new Date(dateArray[i+1])
            let diff = date2.getDate() - date1.getDate()
            if (diff > 1) {
                while (diff > 1) {
                    const newDate = new Date(date1.setDate(date1.getDate()+(diff-1))).toISOString().slice(0,10);
                    result.push(newDate);
                    diff--;
                }
            }
        }
        return result
    } catch (e) {
        console.log(e)
        return []
    }
}

/**
 *
 * @returns an array of strings with each item being a date used in the chart
 * accounts for missing dates from the campaigns data
 */
export function formatChartClicksLabels(rawSingleCampaignsData: RawSingleCampaignsData[]): string[] {
    const sortedDates = rawSingleCampaignsData.map(c => { return c.segments.date }).sort();
    const missingDates = getMissingDates(sortedDates)
    return sortedDates.concat(missingDates).sort();
}

/**
 *
 * @returns an array of clicks to be used in the chart
 * accounts for missing dates from the campaigns data
 */
 export function formatChartClicksData(rawSingleCampaignsData: RawSingleCampaignsData[]): number[] {
    const clicksData = formatChartClicksLabels(rawSingleCampaignsData).map((c: string) => {
        const campaign = rawSingleCampaignsData.find(data => data.segments.date === c)
        return campaign ? campaign.metrics.clicks : 0
    });
    
    return clicksData;
}

/**
 *
 * @returns the cost per click of a campaign given a campaign id
 */
 export function getCostPerClick(rawMultipleCampaignsData: RawMultipleCampaignsData[], campaignId: string): number | null {
    let result = null;
    const selectedCampaign = rawMultipleCampaignsData.find(c => c.campaign.id.toString() === campaignId)
    if (selectedCampaign) {
        if (selectedCampaign?.metrics.clicks === 0)
        {
            result = 0;
        }
        else {
            result = Number((selectedCampaign.metrics.cost / selectedCampaign.metrics.clicks).toFixed(2))
        }
    }
    return result;
}
