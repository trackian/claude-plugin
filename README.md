# Trackian MCP Plugin for Claude Code

This plugin connects Claude Code to your Trackian Marketing Analytics data via the Model Context Protocol (MCP).

## Requirements

To use this plugin, you must have an active Trackian account. If you don't have one yet, [register at ai.trackian.com](https://ai.trackian.com) to get started.

## Installation

1. Clone or download this plugin.
2. Get your `tmcp_` API key from the Trackian Settings page.
3. Add your token to the `.claude-plugin/plugin.json` file under the `env` section, replacing `YOUR_TMCP_TOKEN_HERE`.
   *(Alternatively, you can copy `.env.example` to `.env` and set `TRACKIAN_MCP_TOKEN` there, or set it in your environment variables before running Claude Code).*

## Usage

Run Claude Code with the plugin directory:

```bash
claude --plugin-dir /path/to/trackian-claude-plugin
```

## Skills Included

This plugin includes three custom skills that leverage the Trackian MCP tools:

*   `/trackian:report <project> <dateFrom> <dateTo>`: Generates a comprehensive channel performance report (GA4, Facebook, Google Ads, GSC).
*   `/trackian:anomaly <project> <metric> <date>`: Investigates a specific anomaly using a structured Sentinel investigation protocol.
*   `/trackian:analyze <project> <question>`: Performs deep data analysis using natural language.

## Agents Included

This plugin also includes specialized Claude subagents that are automatically utilized by the skills above to ensure rigorous and accurate data analysis:

*   `sentinel-investigator`: A specialized agent for investigating marketing anomalies using a structured protocol and Trackian MCP tools.
*   `critical-agent`: A critical auditor that reviews analysis summaries and findings for logical inconsistencies, severity inflation, or missed critical alerts.
*   `summarization-agent`: An expert report writer that analyzes findings from multiple agents and creates comprehensive executive summaries.

## Tools Included

The plugin exposes the following MCP tools directly to Claude:

*   `runGa4Report`: Pull GA4 metrics for a project and date range — traffic, sessions, conversions, revenue, and funnel events.
*   `getFacebookMetrics`: Pull Facebook Ads time-series metrics — spend, impressions, CPM, frequency, reach, and CTR.
*   `facebookCampaignStatus`: Check Facebook Ads campaign status (ACTIVE/PAUSED) along with daily budget, lifetime budget, and budget remaining.
*   `getMetricFromGSC`: Pull Google Search Console time-series metrics — clicks, impressions, average position, and CTR.
*   `inspectGscUrl`: Check the Google index status of a URL on the project's verified Search Console property.
*   `getMetricsFromGads`: Pull Google Ads time-series metrics — cost, CPC, impressions, clicks, and conversions.
*   `googleAdsQuery`: Run a custom GAQL query against Google Ads for anything the other tools don't cover — bid strategy, impression share, keyword quality, and more.
*   `googleAdsCampaignStatus`: Check Google Ads campaign status (ENABLED/PAUSED) and daily budgets.
*   `whatChanged`: Cross-platform "what changed?" dimensional analysis — identifies which campaigns, products, keywords, landing pages, ads, or cities drove a metric move.
*   `listMacroFactors`: List cross-cutting macro events (algorithm updates, platform changes) overlapping a date range, to rule them in or out as causes.
*   `getSentinelMetrics`: Get Trackian Sentinel's live-recomputed metrics and active alerts for a project on a specific date.
*   `listSentinelAlerts`: List all Sentinel alerts firing on a project across a date window.
*   `getSentinelIncidentDetails`: Drill into a specific Sentinel incident — hypotheses, evidence, and affected metrics.
*   `getGuardianHealthSummary`: Rolled-up site health for a project — uptime, page speed, and GSC URL inspection.
*   `listGuardianLogs`: Raw Guardian log entries for a project — site uptime, page speed, GSC inspections, and more.
*   `runDataQuery`: Ask a natural-language question of the project's data warehouse, or run a custom SQL query directly.
*   `whoAmI`: Show which Trackian account and company the current API key belongs to.
*   `listProjects`: List every project accessible with the current API key.
