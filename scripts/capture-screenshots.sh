#!/usr/bin/env bash
# Capture portfolio project screenshots at 1200x750
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PORTFOLIO="$ROOT/../portfolio-website/public/screenshots"
mkdir -p "$PORTFOLIO"

capture() {
  local url="$1"
  local out="$2"
  local wait="${3:-3}"
  echo "Capturing $url -> $out"
  if command -v google-chrome >/dev/null 2>&1; then
    CHROME=google-chrome
  elif command -v chromium-browser >/dev/null 2>&1; then
    CHROME=chromium-browser
  elif command -v chromium >/dev/null 2>&1; then
    CHROME=chromium
  else
    echo "No Chrome/Chromium found" >&2
    return 1
  fi
  sleep "$wait"
  "$CHROME" --headless=new --disable-gpu --window-size=1200,750 \
    --screenshot="$out" "$url" 2>/dev/null || \
  "$CHROME" --headless --disable-gpu --window-size=1200,750 \
    --screenshot="$out" "$url"
}

# Usage: ./capture-screenshots.sh <project-dir> <port> <demo-path> <output-name>
# Example: ./capture-screenshots.sh healthcare-ai-workflow-assistant 8000 /dashboard healthcare-ai

if [[ $# -lt 4 ]]; then
  echo "Waiting for services on known ports..."
  capture "http://127.0.0.1:8000/dashboard" "$PORTFOLIO/healthcare-ai.png" 2
  capture "http://127.0.0.1:8001/dashboard" "$PORTFOLIO/enterprise-workflow.png" 2
  capture "http://127.0.0.1:8082/" "$PORTFOLIO/golang-api.png" 2
  capture "http://127.0.0.1:8002/dashboard" "$PORTFOLIO/cpims.png" 2
  capture "http://127.0.0.1:8010/board" "$PORTFOLIO/runbook.png" 2
  exit 0
fi

PROJECT="$1"
PORT="$2"
PATH_="$3"
NAME="$4"
OUT_REPO="$ROOT/../$PROJECT/docs/screenshots"
mkdir -p "$OUT_REPO"
capture "http://127.0.0.1:$PORT$PATH_" "$OUT_REPO/$NAME.png" 3
cp "$OUT_REPO/$NAME.png" "$PORTFOLIO/$NAME.png"
