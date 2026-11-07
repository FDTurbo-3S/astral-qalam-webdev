# Push to GitHub with Personal Access Token
# Run this script after creating a token with 'repo' scope at:
# https://github.com/settings/tokens

# Read the token from environment variable or prompt
$token = $env:GITHUB_TOKEN
if (-not $token) {
    Write-Host "Please set the GITHUB_TOKEN environment variable with your Personal Access Token"
    Write-Host "Create a token at: https://github.com/settings/tokens with 'repo' scope"
    exit 1
}

# Set remote URL with token
$remoteUrl = "https://$token@github.com/FDTurbo-3S/astral-qalam-webdev.git"
git remote set-url origin "$remoteUrl"

# Push to main branch
Write-Host "Pushing to GitHub..."
git push origin main

if ($?) {
    Write-Host "Successfully pushed to GitHub!"
} else {
    Write-Host "Push failed. Check your token and permissions."
    exit 1
}
