# Trackian plugin for Claude Code

Ask Claude why sales moved, which ads waste money and what to fix next, answered from your live [Trackian](https://trackian.com) data. Trackian brings GA4, Google Ads, Meta Ads, TikTok Ads, Microsoft Ads, Search Console, Merchant Center, Tag Manager and your Shopify, WooCommerce or Magento store into one place, and its Sentinel engine checks every project for anomalies each night.

## What this plugin does

- **Answers questions in plain business language:** "why did sales dip on Tuesday?", "which campaigns should I cut?", "are we on track this month?" Every number comes from a Trackian tool call, with the steps shown at the end.
- **Runs guided workflows:** investigations, weekly reviews, pacing against targets, ad audits, creative fatigue, wasted search terms, product and geo waste, attribution gaps, landing pages, Merchant Center health, custom dashboards and branded reports.
- **Makes changes only after you confirm:** campaign status and budgets, keywords and negative keywords, ad copy, KPI targets, alert settings and Google Tag Manager. Every change shows a preview first and waits for your yes. Tag Manager changes are saved as a version you publish yourself.
- **Delivers results where your team works:** post a report to your connected Slack or Discord channel, or email it to the people on your Trackian account.

## Installation

From the Claude Code community directory:

```bash
claude plugin marketplace add anthropics/claude-plugins-community
claude plugin install trackian-mcp-server@claude-community
```

Or install from this repository:

```bash
claude plugin marketplace add https://github.com/trackian/claude-plugin
claude plugin install trackian@trackian
```

## Setup

Run this once after installing:

```
/trackian:setup
```

It walks you through four short steps:

1. **Sign in.** Type `/mcp`, pick `plugin:trackian:trackian` and choose **Authenticate**. A Trackian page opens in your browser: sign in (or create an account) and approve the connection. There is no API key to copy or paste.
2. **Check your projects.** Claude lists your Trackian projects and tells you which platforms still need connecting. Platforms are connected in the Trackian app at [trackian.app](https://trackian.app) under Setup > Platforms.
3. **Choose how answers are written.** Language, account type (agency, ecommerce or lead gen), how much detail, and which projects to watch. Saved on your machine and used in every session.
4. **First answer.** Claude offers one first look at your data, such as a briefing across projects or an ad audit.

## Commands

| Command | What it does |
|---------|--------------|
| `/trackian:setup` | Sign in, see your projects, choose how answers are written, first answer |
| `/trackian:investigate` | Find what changed in a project and why |
| `/trackian:deep-dive` | Explain one known incident end to end |
| `/trackian:briefing` | What happened across all your projects |
| `/trackian:weekly-review` | The week in one summary |
| `/trackian:opportunities` | Where to grow |
| `/trackian:pacing` | Month-to-date vs target for every KPI, with the projected month-end |
| `/trackian:set-targets` | Set the monthly KPI targets |
| `/trackian:ads-audit` | Paid-media health check across every connected ad platform: cut / fix / scale |
| `/trackian:creative-fatigue` | Facebook and Instagram ads that are wearing out |
| `/trackian:creative-review` | What each ad shows and says, and which creative attributes drive results |
| `/trackian:search-terms` | Google Ads searches that waste money, and the negative keywords to add |
| `/trackian:keyword-health` | Zero-conversion keywords, lost impression share, duplicates |
| `/trackian:product-waste` | Shopping and Performance Max products that spend without selling |
| `/trackian:merchant` | Google Shopping feed: what is blocked, what it costs, where your prices sit |
| `/trackian:geo-waste` | Countries and regions that spend without results |
| `/trackian:funnel-dropoff` | Where people leave between the Meta ad click and the purchase |
| `/trackian:landing-pages` | Paid landing pages that convert badly or are not tracked |
| `/trackian:attribution-gap` | What the ad platforms claim vs what analytics saw |
| `/trackian:blended` | What all the advertising together made: blended return and cost per order |
| `/trackian:recommendations` | Google's and Meta's own recommendations, filtered |
| `/trackian:setup-project` | Improve a project's alerts, KPIs, custom metrics and funnels |
| `/trackian:dashboard` | Build or edit a custom dashboard from a plain-English description |
| `/trackian:report` | A polished, branded HTML report saved to `trackian-reports/` |
| `/trackian:gtm` | Change Google Tag Manager in plain words, previewed first |

Or just ask a question. You do not need a command.

## Skills and agents

- **`trackian`** loads automatically for marketing questions. It holds the rules Claude follows: answer from Trackian data only, lead with the conclusion and business impact, show the steps taken, keep currencies straight, and preview every change.
- **`trackian-get-started`** loads when the plugin is new or not signed in, and walks you through setup.
- **`marketing-analyst`** is a subagent for long, multi-step analysis, so the main conversation only gets the conclusion.

## Examples

```
> Why did revenue drop last Tuesday?

> Which Google Ads search terms spent money last month without a conversion?

> Are we on track to hit this month's targets?

> Which Facebook ads are wearing out?

> Pause the ad sets with a cost per purchase above 40 this week

> Make me a branded report of last month for my client and post it to our Slack channel
```

## Troubleshooting

- **Trackian tools are missing or say "needs authentication":** type `/mcp`, pick `plugin:trackian:trackian`, choose Authenticate and sign in again.
- **`/mcp` does not list `plugin:trackian:trackian`:** run `/plugin`, check that the Trackian plugin is installed and enabled, then restart Claude Code.
- **The sign-in page says the link expired:** start again from `/mcp`; each link works once.
- **A change is refused:** the connection does not have permission for that change. An account owner can turn it on in Trackian under Settings > AI Agent Setup.
- **A platform shows no data:** reconnect it in the Trackian app under Setup > Platforms.
- **Anything else:** email [support@trackian.com](mailto:support@trackian.com).

## Privacy

The plugin contains no hooks and no local code. Claude Code sends requests to Trackian's MCP server at `api.trackian.app`, which reads data from, and makes approved changes on, the platforms you connected in Trackian. Sign-in uses OAuth in your browser; Claude Code stores the access token itself and the plugin never sees a password. The answer-style profile `/trackian:setup` saves stays on your machine, in the plugin's data folder. Trackian processes requests under its [Privacy Policy](https://trackian.com/privacy-center/privacy-policy/).

## Links

- [Trackian](https://trackian.com)
- [Trackian app](https://trackian.app)
- [Help center](https://help.trackian.com)
- [Privacy Policy](https://trackian.com/privacy-center/privacy-policy/)
- [Terms and conditions](https://trackian.com/privacy-center/terms-and-conditions/)

## License

MIT
