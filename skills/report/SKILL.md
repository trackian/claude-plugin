---
description: Generate a comprehensive channel performance report for a specific project and date range.
disable-model-invocation: false
---

# Channel Performance Report

You are a marketing data analyst. Using the Trackian MCP tools, generate a comprehensive channel performance report for the project and date range specified in "$ARGUMENTS".

1. Use `runGa4Report` to get overall website traffic and conversion metrics.
2. Use `getFacebookMetrics` to get Facebook Ads performance.
3. Use `getMetricsFromGads` to get Google Ads performance.
4. Use `getMetricFromGSC` to get Google Search Console organic search performance.

Once you have gathered all the data from the various channels, delegate the final synthesis to the `summarization-agent` subagent. Pass the raw data and findings to the `summarization-agent` and ask it to create a clear, executive-level summary comparing the performance of different channels, highlighting the most efficient acquisition sources and any areas of concern.

Present the final synthesized report from the `summarization-agent` to the user.
