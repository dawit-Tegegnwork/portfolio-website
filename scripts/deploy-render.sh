#!/usr/bin/env bash
# Deploy all portfolio APIs to Render via Blueprint API.
# Requires: RENDER_API_KEY from https://dashboard.render.com/u/settings#api-keys
set -euo pipefail

if [[ -z "${RENDER_API_KEY:-}" ]]; then
  echo "Set RENDER_API_KEY first (Render Dashboard → Account Settings → API Keys)" >&2
  exit 1
fi

API="https://api.render.com/v1"
auth=(-H "Authorization: Bearer ${RENDER_API_KEY}" -H "Content-Type: application/json")

deploy_repo() {
  local name="$1" repo="$2" branch="${3:-main}"
  echo "Deploying blueprint: $name ($repo)"
  curl -sf "${auth[@]}" -X POST "$API/blueprints" -d "{
    \"name\": \"$name\",
    \"repo\": \"$repo\",
    \"branch\": \"$branch\",
    \"autoDeploy\": \"yes\"
  }" | jq -r '.id // .message // .'
}

deploy_repo "healthcare-ai" "https://github.com/dawit-Tegegnwork/healthcare-ai-workflow-assistant" main
deploy_repo "enterprise-workflow" "https://github.com/dawit-Tegegnwork/enterprise-workflow-management-system" master
deploy_repo "golang-transaction-api" "https://github.com/dawit-Tegegnwork/golang-transaction-api" main
deploy_repo "cpims-demo" "https://github.com/dawit-Tegegnwork/cpims-information-management-demo" main
deploy_repo "runbook-lab" "https://github.com/dawit-Tegegnwork/application-support-runbook-lab" main

echo "Waiting 90s for cold deploys..."
sleep 90

for url in \
  "https://healthcare-ai-workflow-assistant.onrender.com/health" \
  "https://enterprise-workflow-management-system.onrender.com/health" \
  "https://golang-transaction-api.onrender.com/health" \
  "https://cpims-information-management-demo.onrender.com/health" \
  "https://application-support-runbook-lab.onrender.com/health"; do
  echo -n "$url -> "
  curl -sf -m 60 "$url" && echo || echo "pending (cold start may take ~30s)"
done
