# Phase 0 safety check — 2026-09-24

| Check | Result |
| --- | --- |
| Working directory | `/Volumes/LayeR/LayeR/layer-nextjs` |
| Git remote | `https://github.com/layerbylaya-web/Web.git` (fetch and push) |
| Branch | `main` |
| Linked Vercel project | `layer-by-laya-web` (`.vercel/project.json`) |
| Linked Vercel organization | `team_Kg0aeknaPWgFEhONApZXsZXo`; team name could not be confirmed live |
| Vercel CLI account/team | Blocked: local token is invalid (`npx vercel whoami`, `npx vercel teams ls`) |
| Cinema Machina active configuration | No match in `src`, deployment config or package scripts. The untracked `check_deployment.js` points to an old Cinema Machina Vercel URL and must never be run or committed. QA prose also mentions the string. |
| Existing work | Checkout has pre-existing modified and untracked files. Preserved in place. |
| Rollback point | `backup/pre-world-class-launch` branch and `pre-world-class-launch` tag at `2915d8a`. These cover committed history; pre-existing working-tree edits remain uncommitted. |

No Vercel mutation or deployment was attempted with the invalid token.
