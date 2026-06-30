# Deploy all portfolio APIs to Render

Each project repo includes `render.yaml` and a **Deploy to Render** button in `docs/RENDER_DEPLOY.md`.

## Fastest path (one-click)

| Project | Deploy button |
|---------|---------------|
| Healthcare AI | [Deploy](https://render.com/deploy?repo=https://github.com/dawit-Tegegnwork/healthcare-ai-workflow-assistant) |
| Enterprise Workflow | [Deploy](https://render.com/deploy?repo=https://github.com/dawit-Tegegnwork/enterprise-workflow-management-system) |
| Golang Transaction API | [Deploy](https://render.com/deploy?repo=https://github.com/dawit-Tegegnwork/golang-transaction-api) |
| CPIMS Demo | [Deploy](https://render.com/deploy?repo=https://github.com/dawit-Tegegnwork/cpims-information-management-demo) |
| Runbook Lab | [Deploy](https://render.com/deploy?repo=https://github.com/dawit-Tegegnwork/application-support-runbook-lab) |

After each deploy, smoke-test:

```bash
curl https://healthcare-ai-workflow-assistant.onrender.com/health
curl https://enterprise-workflow-management-system.onrender.com/health
curl https://golang-transaction-api.onrender.com/health
curl https://cpims-information-management-demo.onrender.com/health
curl https://application-support-runbook-lab.onrender.com/health
```

## Automated path (API key)

1. Create a Render API key: https://dashboard.render.com/u/settings#api-keys  
2. Add `RENDER_API_KEY` as a GitHub secret on each repo (or run locally):

```bash
export RENDER_API_KEY=rnd_...
./scripts/deploy-render.sh
```

3. Or trigger the **Deploy to Render** GitHub Action (`workflow_dispatch`) on each repo after the secret is set.

## Expected live URLs

These match the portfolio **Try live demo** buttons:

- https://healthcare-ai-workflow-assistant.onrender.com/dashboard  
- https://enterprise-workflow-management-system.onrender.com/dashboard  
- https://golang-transaction-api.onrender.com/  
- https://cpims-information-management-demo.onrender.com/dashboard  
- https://application-support-runbook-lab.onrender.com/board  

Free tier: first request after idle may take ~30s.
