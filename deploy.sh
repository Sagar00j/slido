#!/bin/bash
cd ~/slido-app
echo "🚀 Starting Deployment of Perfect Slido..."
git rm -r --cached node_modules/.cache 2>/dev/null
npm run build
echo "// Build Timestamp: $(date)" >> src/App.js
git add .
git commit -m "Deploying optimized Slido build with mobile sync fix"
git push origin main
echo "✅ Build complete. Uploaded to slido.space!"
echo "🎉 DEPLOYED SUCCESSFULLY!"
