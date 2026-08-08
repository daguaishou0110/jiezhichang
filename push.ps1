# Push jiezhichang to GitHub via SSH (port 443)
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

# Ensure SSH uses port 443 for GitHub
$sshConfig = Join-Path $env:USERPROFILE ".ssh\config"
if (-not (Test-Path $sshConfig) -or -not (Select-String -Path $sshConfig -Pattern "Host github.com" -Quiet)) {
  @"

Host github.com
  HostName ssh.github.com
  Port 443
  User git
  IdentityFile ~/.ssh/id_ed25519
  IdentitiesOnly yes
"@ | Add-Content -Path $sshConfig -Encoding utf8
}

git remote set-url origin "git@github.com:daguaishou0110/jiezhichang.git"
Write-Host "Testing SSH..."
ssh -T git@github.com 2>&1 | Write-Host
Write-Host "Pushing..."
git push -u origin main
Write-Host "Done. Next: connect this repo as Static Site on https://dashboard.render.com"
