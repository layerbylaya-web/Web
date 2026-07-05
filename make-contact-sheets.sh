#!/bin/bash
# Generate contact sheets from screenshots
cd /Volumes/LayeR/LayeR/layer-nextjs/qa-screenshots

echo "Generating desktop contact sheet..."
montage -label '%t' *-desktop.png -tile 4x -geometry 600x>+20+40 -background white -fill black -pointsize 24 ../desktop-contact-sheet.jpg

echo "Generating mobile contact sheet..."
montage -label '%t' *-mobile.png -tile 5x -geometry 300x>+20+40 -background white -fill black -pointsize 24 ../mobile-contact-sheet.jpg

echo "Contact sheets generated."
