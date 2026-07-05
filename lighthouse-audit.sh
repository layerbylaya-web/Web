#!/bin/bash
mkdir -p lighthouse-reports-production

routes=(
  "/"
  "/bridal-makeup-dubai"
  "/online-makeup-consultation"
  "/portfolio"
  "/contact"
)

for route in "${routes[@]}"; do
  safe_route=$(echo "$route" | sed 's/\//-/g')
  if [ "$safe_route" == "-" ]; then
    safe_route="home"
  fi
  safe_route=$(echo "$safe_route" | sed 's/^-//')
  
  url="http://localhost:3000${route}"
  echo "Running Lighthouse on ${url}..."
  
  npx lighthouse "$url" \
    --output html \
    --output-path "./lighthouse-reports-production/${safe_route}.html" \
    --only-categories=performance,accessibility,best-practices,seo \
    --chrome-flags="--headless"
done
