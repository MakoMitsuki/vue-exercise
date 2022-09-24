import { RawSingleCampaignsData } from '../../types'

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
    return { date: 'yyyy-mm-dd', clicks: 0 }
}

/**
 *
 * @returns an object containing the date as a string with conversions as a number for the highest converting date
 */
export function getDateWithHighestAllConversions(rawSingleCampaignsData: RawSingleCampaignsData[]): {
    date: string
    all_conversions: number
} {
    return {
        date: 'yyyy-mm-dd',
        all_conversions: 0,
    }
}

/**
 *
 * @returns a sum of all the clicks throughout the data
 */
export function getTotalClicks(rawSingleCampaignsData: RawSingleCampaignsData[]): number {
    return 0
}

/**
 *
 * @returns a sum of all the conversions throughout the data
 */
export function getTotalAllConversions(rawSingleCampaignsData: RawSingleCampaignsData[]): number {
    return 0
}

/**
 *
 * @returns an array of clicks to be used in the chart
 */
export function formatChartClicksData(rawSingleCampaignsData: RawSingleCampaignsData[]): number[] {
    return [0, 0, 0]
}

/**
 *
 * @returns an array of strings with each item being a date used in the chart
 */
export function formatChartClicksLabels(rawSingleCampaignsData: RawSingleCampaignsData[]): string[] {
    return ['yyyy-mm-dd', 'yyyy-mm-dd', 'yyyy-mm-dd']
}
