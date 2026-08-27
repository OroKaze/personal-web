#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-http://localhost:3000}"

for path in / /projects /projects/intelligent-qc-system /about /resume /sitemap.xml /resume.pdf; do
  status="$(curl -fsS -o /dev/null -w '%{http_code}' "${BASE_URL}${path}")"
  if [[ "$status" != "200" ]]; then
    printf 'FAIL %s -> %s\n' "$path" "$status" >&2
    exit 1
  fi
  printf 'OK   %s -> %s\n' "$path" "$status"
done

printf 'Deployment smoke check passed for %s\n' "$BASE_URL"
