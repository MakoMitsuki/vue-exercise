<h3 align="center">
  Opteo home programming exercise
</h3>

<br/>

<p align="center">
  <a href="https://opteo.com">
    <img src="https://opteo.com/images/opteo-icon-on-white.png">
  </a>
</p>

## Aim of the exercise

- To be relaxed
- To show us your current programming experience level

The test itself should roughly take 2-3 hours depending on your skill level. I don't want you to feel rushed while doing this. We all have lives to be getting on with outside of working hours. Do as much as you can given the hand in date, but don't feel forced to complete it all.

## Problem statement

A common task at opteo is to show our users an overview/analytical view of their Google Ads data. One of the most common tasks would be to show our users their [campaign](https://support.google.com/google-ads/answer/6304?hl=en-GB) performance data within a chart. This is what we will be doing in this exercise.

The exercise is split into various sections:

- Processing Google Ads data
- Displaying formatted Google Ads data within a chart
- Calculate the CPC (cost per click) of various campaigns

### Processing Google Ads data

For this part of the test we will be giving you 90 days (see the final point on [Notes](###Notes) section) of performance data from a real Opteo campaign. Specifically, we will be providing you with `clicks`, `conversions`, `all_conversions` and `all_conversions_value`. For this exercise we are only interested in `clicks` and `all_conversions` performance data (metrics).

There are several functions we would like you to complete which can be found in the `backend/src/campaignAnalysis.ts` file. Those functions are being tested and are expecting a specific result. Those tests can be found in `backend/src/campaignAnalysis.spec.ts`. The aim is to get all 7 tests passing. For sake of clarity there is currently one passing test as an example.

### Displaying formatted Google Ads data within a chart

In this part of the test, we would like you to use whatever chart library you like to display a "line chart" of the formatted data you have just created in the first section. The functions that will map onto a chart are: `formatChartClicksData` and `formatChartClicksLabels`.

You will need to fetch this data from the backend at `http://localhost:3000/campaigns/chart-data`.

We recommend using ApexCharts as the return data from those functions maps nicely into the required `options` variable within [apexcharts](https://apexcharts.com/docs/creating-first-javascript-chart/).

### Calculate the CPC

In this section, you will need to complete a full stack task. Which will require you to create the frontend and respective backend route.

The route will take in a campaign id and return the cost per click of this campaign id. Cost per click is calculated as `cost / click`. There are some comments in `backend/src/routes/campaigns.ts`. Its up to you where you put the logic & tests for this route. The data used here will be `rawMultipleCampaignsData` within `backend/src/data/campaigns.ts`.

The frontend will need an input field for the campaign id, and a button to fire off the request to the backend. Some comments are left in `frontend/src/components/CPC.vue` as a direction.

The response from the backend will then need to be displayed on the frontend. The styling is completely up to you. Feel free to do as little or as much styling as you want.

### Notes

- Feel free to add any additional functions where you see fit.
- Feel free to use any additional libraries you want.
- Google Ads data is often returned from Google unordered and incomplete.
- Feel free to take initiative where you see fit and makes sense.

## Development

### Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn dev
```

### Compiles and minifies for production

```
yarn build
```

### Run your tests

Again, one of the aims is to get the 7 tests passing

```
yarn test
```

## Submission

Ideally submission would be through a private repo and inviting https://github.com/Joel-Valentine join that repo. If this isn't possible feel free to send the project as a zip to joel@opteo.com  

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
