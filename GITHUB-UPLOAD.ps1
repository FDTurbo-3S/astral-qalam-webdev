# @file GitHub Upload Script
# Untuk mengupload projek ke GitHub menggunakan Personal Access Token

# Langkah 1: Buat GitHub Personal Access Token
# 1. Buka: https://github.com/settings/tokens
# 2. Klik "Generate new token (classic)"
# 3. Beri nama: astral-qalam-webdev-upload
# 4. Scopes: repo (full control)
# 5. Klik "Generate token" dan copy token

# Langkah 2: Setup Git untuk menggunakan token
$token = "PASTE_YOUR_GITHUB_TOKEN_HERE"
$remoteUrl = "https://$token@github.com/FDTurbo-3S/astral-qalam-webdev.git"

# Langkah 3: Update remote URL
$env:GIT_ASKPASS = "pwsh"
git remote set-url origin "$remoteUrl"

# Langkah 4: Add semua file
git add .

# Langkah 5: Commit
git commit -m "Add Vue.js project with Vite - Premium Web Services Platform"

# Langkah 6: Push ke GitHub
git push -u origin main

# Setelah berhasil, projek tersedia di:
# https://github.com/FDTurbo-3S/astral-qalam-webdev

Write-Host "Upload complete! Projek tersedia di: https://github.com/FDTurbo-3S/astral-qalam-webdev"
