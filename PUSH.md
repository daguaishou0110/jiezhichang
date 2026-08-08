# 推送到 GitHub + 部署 Render

本地站点已准备好：`医学期刊/jiezhichang/`（commit `93d56c1`）。

## 现状

- 本机到 `github.com:443`（HTTPS）经常超时
- `ssh.github.com:443` 可连通，但当前 SSH 公钥**尚未**加到 GitHub 账号
- 远程已设为：`git@github.com:daguaishou0110/jiezhichang.git`

## 你需要做的（约 2 分钟）

### 1) 把本机公钥加到 GitHub

打开：https://github.com/settings/keys → **New SSH key**

粘贴：

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAkGVuouNFJdNo1g7wQwn1A5XHHjviGosiL1w4tUTsa7 13594@iflood
```

### 2) 推送

在 PowerShell：

```powershell
cd "C:\Users\13594\Desktop\医学期刊\jiezhichang"
git push -u origin main
```

或双击运行同目录 `push.ps1`。

### 3) Render 部署

1. 打开 https://dashboard.render.com → **New** → **Static Site**
2. 连接 GitHub 仓库 `daguaishou0110/jiezhichang`
3. 设置：
   - **Build Command**：留空
   - **Publish Directory**：`.`
4. 也可在仓库根目录用已有 `render.yaml` 走 Blueprint

部署成功后首页即 `index.html`（一区写法门户）。

## 备用

离线包：`医学期刊/jiezhichang-site.zip`（可整包上传到 Netlify Drop 等做临时预览）。
