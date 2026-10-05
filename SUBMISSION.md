# Submission reference

How this plugin reaches Claude Code users, and what to send Anthropic when it changes.

## Where it is listed

The plugin is listed in Anthropic's community marketplace, [`anthropics/claude-plugins-community`](https://github.com/anthropics/claude-plugins-community), as `trackian-mcp-server`. That marketplace is a read-only mirror of Anthropic's internal review pipeline: pull requests against it are closed automatically, and each entry is pinned to one commit of this repository. A new commit here reaches users only after Anthropic reviews it.

Install from the community marketplace:

```bash
claude plugin marketplace add anthropics/claude-plugins-community
claude plugin install trackian-mcp-server@claude-community
```

## Sending an update

1. Merge the change to `main` here and note the commit sha.
2. Submit it through the plugin directory form: https://clau.de/plugin-directory-submission (choose to update the existing `trackian-mcp-server` listing; give this repository and the new sha).
3. Description for the listing:

   > Ask Claude why sales moved, which ads waste money and what to fix next, answered from your live Trackian data: GA4, Google Ads, Meta Ads, TikTok Ads, Microsoft Ads, Search Console, Merchant Center, Tag Manager and your Shopify, WooCommerce or Magento store, plus the anomalies Trackian Sentinel detects every night. Guided workflows for investigations, weekly reviews, pacing against targets, ad audits, creative fatigue, wasted search terms, product and geo waste, attribution gaps and branded reports. Changes to campaigns, budgets, keywords, targets or Tag Manager always show a preview and wait for your yes. Sign in with your Trackian account; no API key to paste.

4. Once approved, the community marketplace entry moves to the new sha and users get it through `/plugin`.

## Pre-submission checklist

- [ ] `claude plugin validate .` passes (the `icon`, `documentationUrl`, `supportUrl`, `privacyPolicyUrl` and `termsOfServiceUrl` warnings disappear on Claude Code 2.1.281 and later; they are directory listing fields).
- [ ] `claude --plugin-dir . plugin details trackian` lists every command, both skills, the agent and the `trackian` MCP server.
- [ ] `claude --plugin-dir . mcp list` shows `plugin:trackian:trackian` as "Needs authentication" before sign-in.
- [ ] A real sign-in through `/mcp` > `plugin:trackian:trackian` > Authenticate completes, and `/trackian:setup` reaches a first answer.
- [ ] No secret or API key anywhere: `grep -rn tmcp_ .` finds nothing.
- [ ] No em or en dashes in any file.
- [ ] Every command's `get_command` name exists on the Trackian server.

## How the plugin is built

- **Connection:** `.mcp.json` points at Trackian's remote MCP server (`https://api.trackian.app/mcp`). Claude Code signs in with OAuth (dynamic client registration, PKCE, browser login) and requests `mcp:read mcp:write`, the same access a downloaded Trackian agent folder gets. Every write still previews first and waits for the owner's yes.
- **Commands:** each one is a thin stub that fetches its current steps from Trackian with `get_command`, so improving a workflow is a server-side change that needs no plugin release. The workflow text is shared with Trackian's downloadable agent folder; the `trackian` skill maps that folder's paths to the plugin's (`${CLAUDE_PLUGIN_DATA}/profile.md`, `trackian-reports/`, `/trackian:<name>`).
- **Skills:** `trackian` carries the answer rules (the plugin's equivalent of the agent folder's `AGENTS.md`); `trackian-get-started` carries sign-in and first-run.
- **Agent:** `marketing-analyst` for long, multi-step analysis.
- **No hooks, no local code.**
