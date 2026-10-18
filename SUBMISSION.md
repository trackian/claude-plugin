# Submission reference

How this plugin reaches Claude Code users, and what to send Anthropic when it changes.

## Where it is listed

- **Claude Code community marketplace** ([`anthropics/claude-plugins-community`](https://github.com/anthropics/claude-plugins-community)) as `trackian-mcp-server`. As of 2026-10-18 that entry is still pinned to commit `4e16206`, version 1.0.0, which asks for an API key and connects to `api.trackian.com/mcp`, an address that no longer answers. Version 2 never reached it. The entry also carries its own version 1 description, which overrides `plugin.json`.
- **Not listed** in claude.ai's directory, as a plugin or as a connector.

The community marketplace is a read-only mirror of Anthropic's review pipeline: pull requests against it are closed automatically. The entry was submitted through the earlier Claude Console form, and Anthropic's docs say such a listing "stays as it is" until it is moved to the developer portal at [claude.ai/directory/manage](https://claude.ai/directory/manage). Until then no new commit here reaches users of the directory.

## Moving the listing to the developer portal (once)

Source: [Move an earlier submission to the developer portal](https://claude.com/docs/directory/publish#move-an-earlier-submission-to-the-developer-portal), read 2026-10-18.

1. Sign in to the Claude Console with the account that made the first submission and open [Plugin submissions](https://platform.claude.com/plugins/submissions).
2. If the `trackian-mcp-server` submission has a **Withdraw** button, select it. Then submit the plugin again at [claude.ai/directory/manage](https://claude.ai/directory/manage) from a claude.ai account: **Submit new** > **Plugin bundle** > this repository, plugin folder = the repository root, branch `main`.
3. If there is no Withdraw button, email `directory@anthropic.com` and ask them to move the `trackian-mcp-server` listing (repository `trackian/claude-plugin`) to the developer portal. Do not start a second submission for the same repository first: the portal refuses it with "Already submitted by another organization" until the old one is moved.
4. Submit from the organization that should own the listing long term. The first organization to submit a repository folder holds that listing.
5. The portal reads the listing details from `.claude-plugin/plugin.json` and `README.md`; to change them, edit those files and validate again. The `plugin.json` description already holds the version 2 text, which replaces the old community entry's own version 1 description:

   > Ask Claude why sales moved, which ads waste money and what to fix next, answered from your live Trackian data: GA4, Google Ads, Meta Ads, TikTok Ads, Search Console and your Shopify, WooCommerce or Magento store, plus the anomalies Trackian Sentinel detects every night. Guided workflows for investigations, weekly reviews, pacing against targets, ad audits, creative fatigue, wasted search terms, product and geo waste, attribution gaps and branded reports. Changes to KPI targets, alerts and funnels show a preview and wait for your yes; changes to live ad campaigns stay off until an account owner allows them. Sign in with your Trackian account; no API key to paste.

6. Run the portal's **Validate**, fix anything marked Blocks, then **Submit for review**. A person reviews a new listing before it goes live.

The plugin's `name` in `plugin.json` is `trackian`; the old entry is named `trackian-mcp-server`. If the move keeps the old name, nothing changes for people who installed it. If it is resubmitted under `trackian`, people on version 1 have to uninstall `trackian-mcp-server` and install `trackian` (the README's "Upgrading from version 1" section says how, and only applies to someone who still sees version 1.0.0).

## Sending an update after the move

1. Merge the change to `main` here and raise `version` in `.claude-plugin/plugin.json`. The directory asks for a new version with every release.
2. The portal picks up new commits on the tracked branch and scans each version. A version that passes waits until someone selects **Publish** in the portal (unless auto-publish is switched on), then a reviewer publishes it. Follow its status at [claude.ai/directory/manage](https://claude.ai/directory/manage); once published, people who have the plugin get the new version through `/plugin`.
3. The listing's **Usage** tab shows installs, versions and error rates.

## A claude.ai connector listing (separate submission)

Anthropic's advice for a product that runs its own server is two submissions from the same organization: the remote MCP server (`https://api.trackian.app/mcp`) as an **MCP connector**, and this plugin as a **plugin bundle** pointing at the same address, then pair the two listings. The connector needs OAuth (done), a title and read-only or destructive label on every tool (done on the Trackian server), a docs link, privacy policy, support contact, icon and a populated test account for the reviewers. That submission is planned separately.

## Pre-submission checklist

- [ ] `claude plugin validate .` passes (the `icon`, `documentationUrl`, `supportUrl`, `privacyPolicyUrl` and `termsOfServiceUrl` warnings disappear on Claude Code 2.1.281 and later; they are directory listing fields).
- [ ] `claude --plugin-dir . plugin details trackian` lists every command, both skills, the agent and the `trackian` MCP server.
- [ ] `claude --plugin-dir . mcp list` shows `plugin:trackian:trackian` as "Needs authentication" before sign-in.
- [ ] A real sign-in through `/mcp` > `plugin:trackian:trackian` > Authenticate completes, and `/trackian:setup` reaches a first answer.
- [ ] No secret or API key anywhere: `grep -rln tmcp_ --exclude=SUBMISSION.md .` finds nothing.
- [ ] No em or en dashes in any file.
- [ ] Every command's `get_command` name exists on the Trackian server.

## How the plugin is built

- **Connection:** `.mcp.json` points at Trackian's remote MCP server (`https://api.trackian.app/mcp`). Claude Code signs in with OAuth (dynamic client registration, PKCE, browser login) and requests `mcp:read mcp:write`, the same access a downloaded Trackian agent folder gets. Most writes preview first and wait for the owner's yes; the few that apply in a single call say so in their own descriptions, and the `trackian` skill asks first for those too.
- **Commands:** each one is a thin stub that fetches its current steps from Trackian with `get_command`, so improving a workflow is a server-side change that needs no plugin release. The workflow text is shared with Trackian's downloadable agent folder; the `trackian` skill maps that folder's paths to the plugin's (`${CLAUDE_PLUGIN_DATA}/profile.md`, `trackian-reports/`, `/trackian:<name>`).
- **Skills:** `trackian` carries the answer rules (the plugin's equivalent of the agent folder's `AGENTS.md`); `trackian-get-started` carries sign-in and first-run.
- **Agent:** `marketing-analyst` for long, multi-step analysis.
- **No hooks, no local code.**
