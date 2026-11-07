#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Upload Vue.js project to GitHub repository

.DESCRIPTION
    Script untuk mengupload projek astral-qalam-webdev ke GitHub
    Repository: FDTurbo-3S/astral-qalam-webdev

.NOTES
    Author: FDTurbo-3S
    Created: 2026-11-07
#>

param(
    [string]$GitHubToken = "",
    [switch]$SkipTokenPrompt,
    [switch]$DryRun
)

$ErrorActionPreference = "Stop"
$ProjectPath = "C:\Users\FD3S-Turbo\Documents\vue-projects\astral-qalam-webdev"
$RepoUrl = "https://github.com/FDTurbo-3S/astral-qalam-webdev.git"

Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "  Astral Qalam Webdev - Upload Script" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# Navigate to project directory
Set-Location $ProjectPath

# Check if token is provided
if ([string]::IsNullOrEmpty($GitHubToken) -and $SkipTokenPrompt) {
    Write-Host "No GitHub token provided. Generating one now..." -ForegroundColor Yellow
    Write-Host "Opening GitHub tokens page..." -ForegroundColor Yellow
    Start-Process "https://github.com/settings/tokens"
    Write-Host "Please create a new token with 'repo' scope and copy it." -ForegroundColor Yellow
    Write-Host "Then paste the token when prompted." -ForegroundColor Yellow
    Write-Host "Press Enter to continue..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}

# Prompt for token if not provided
if ([string]::IsNullOrEmpty($GitHubToken)) {
    $GitHubToken = Read-Host "Enter GitHub Personal Access Token"
    if ([string]::IsNullOrEmpty($GitHubToken)) {
        Write-Host "Error: GitHub token is required for upload." -ForegroundColor Red
        exit 1
    }
}

# Set GitHub token as environment variable
$env:GITHUB_TOKEN = $GitHubToken

# Configure Git to use token for authentication
Write-Host "Configuring Git authentication..." -ForegroundColor Green
git config --global credential.helper 'store'
git remote set-url origin "https://x-access-token:$GitHubToken@github.com/FDTurbo-3S/astral-qalam-webdev.git"

# Check current status
Write-Host ""
Write-Host "Current Git Status:" -ForegroundColor Cyan
Write-Host "===================" -ForegroundColor Cyan
git status --short

# Check if there are uncommitted changes
$uncommitted = (git status --porcelain).Count
if ($uncommitted -gt 0) {
    Write-Host ""
    Write-Host "Warning: You have uncommitted changes!" -ForegroundColor Yellow
    Write-Host "Run 'git add .' and 'git commit -m "message"' first." -ForegroundColor Yellow
    $response = Read-Host "Do you want to commit changes now? (y/n)"
    if ($response -eq "y" -or $response -eq "yes") {
        git add .
        git commit -m "Add Vue.js project with Vite - Astral Qalam Webdev"
    }
}

# Display commit history
Write-Host ""
Write-Host "Commit History:" -ForegroundColor Cyan
Write-Host "===============" -ForegroundColor Cyan
git log --oneline --max-count=5

# Push to GitHub
Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push -u origin main --force

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=============================================" -ForegroundColor Green
    Write-Host "  Upload Successful!" -ForegroundColor Green
    Write-Host "=============================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Project is now available at:" -ForegroundColor Cyan
    Write-Host "https://github.com/FDTurbo-3S/astral-qalam-webdev" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Local path:" -ForegroundColor Cyan
    Write-Host "C:\Users\FD3S-Turbo\Documents\vue-projects\astral-qalam-webdev" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Files uploaded:" -ForegroundColor Cyan
    Write-Host "  - 14 files total" -ForegroundColor Cyan
    Write-Host "  - Vue.js 3 Single Page Application" -ForegroundColor Cyan
    Write-Host "  - Vite 6.0 build tool" -ForegroundColor Cyan
    Write-Host "  - Multi-language support (Melayu/English)" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Available commands:" -ForegroundColor Cyan
    Write-Host "  npm run dev      - Development server" -ForegroundColor Cyan
    Write-Host "  npm run build    - Build for production" -ForegroundColor Cyan
    Write-Host "  npm run preview  - Preview production build" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "=============================================" -ForegroundColor Red
    Write-Host "  Upload Failed!" -ForegroundColor Red
    Write-Host "=============================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Error details:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
}

Set-Location $PSScriptRoot