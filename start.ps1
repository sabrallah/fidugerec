Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Site Web Cabinet Fiduciaire" -ForegroundColor Cyan
Write-Host "  Lancement du serveur de developpement" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Verification de Node.js..." -ForegroundColor Yellow
node --version
Write-Host ""

Write-Host "Lancement du serveur Next.js..." -ForegroundColor Green
Write-Host "Le site sera accessible sur: http://localhost:3000" -ForegroundColor Green
Write-Host ""
Write-Host "Appuyez sur Ctrl+C pour arreter le serveur" -ForegroundColor Yellow
Write-Host ""

npm run dev
