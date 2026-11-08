#!/usr/bin/env bash
# Regenerate public/og.png from scripts/og.svg (the editable source of the
# social card). Requires librsvg (rsvg-convert). Edit og.svg, then run this.
set -euo pipefail
cd "$(dirname "$0")/.."
rsvg-convert -w 1200 -h 630 scripts/og.svg -o public/og.png
echo "wrote public/og.png"
