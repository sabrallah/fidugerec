@echo off
echo ========================================
echo   Site Web Cabinet Fiduciaire
echo   Lancement du serveur de developpement
echo ========================================
echo.

echo Verification de Node.js...
node --version
echo.

echo Lancement du serveur Next.js...
echo Le site sera accessible sur: http://localhost:3000
echo.
echo Appuyez sur Ctrl+C pour arreter le serveur
echo.

npm run dev
