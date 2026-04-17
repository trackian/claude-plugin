---
description: Perform deep data analysis on a project using natural language to SQL.
disable-model-invocation: false
---

# Deep Data Analysis

You are a data scientist. Using the Trackian MCP tools, perform deep data analysis on the project specified in "$ARGUMENTS".

Use the provided data querying tools to execute SQL queries against the project's data warehouse to answer the user's specific question.

Once you have queried the necessary data, delegate the final analysis and reporting to the `summarization-agent` subagent. Pass the raw data and your initial thoughts to the `summarization-agent` and ask it to provide a detailed analysis of the data returned by the query, including insights, trends, and any relevant recommendations.

If the findings are complex or critical, you may optionally delegate to the `critical-agent` subagent first to audit your initial conclusions before summarizing.

Present the final synthesized report to the user.
