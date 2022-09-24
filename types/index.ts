// Raw Google Ads Data

export interface RawSingleCampaignsData {
  campaign: CampaignData;
  metrics: CampaignMetrics;
  segments: CampaignSegments;
}

export interface RawMultipleCampaignsData {
  campaign: CampaignDataMultiple;
  metrics: CampaignMetricsMultiple;
}

export interface RawBidSimulationData {
  campaign: CampaignData;
  campaign_bid_simulation: {
    cost: number;
    conversions: number;
    bid: number;
  }[];
}

interface CampaignData {
  resource_name: string;
  name: string;
  id: number;
}

interface CampaignDataMultiple {
  name: string;
  id: number;
}

interface CampaignMetrics {
  clicks: number;
  all_conversions: number;
  conversions: number;
  all_conversions_value: number;
  cost: number;
}

interface CampaignMetricsMultiple {
  clicks: number;
  cost: number;
}

interface CampaignSegments {
  date: string; // YYYY-MM-DD
}
