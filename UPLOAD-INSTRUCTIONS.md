# 🚀 Instruksi Upload ke GitHub

## Status Upload

**Projek**: `astral-qalam-webdev`  
**Lokasi**: `C:\Users\FD3S-Turbo\Documents\vue-projects\astral-qalam-webdev`  
**Repository Target**: `https://github.com/FDTurbo-3S/astral-qalam-webdev`

---

## ✅ File yang Sudah Di-Commit

Semua file projek sudah siap:
- ✅ `index.html` - Entry point HTML
- ✅ `package.json` - Vue.js 3, Vue Router, Vite
- ✅ `package-lock.json` - Dependencies lock file
- ✅ `vite.config.js` - Vite configuration
- ✅ `README.md` - Documentation
- ✅ `LICENSE` - Apache-2.0 License
- ✅ `.gitignore` - Git ignore rules
- ✅ `src/App.vue` - Main Vue component
- ✅ `src/main.js` - Application entry
- ✅ `src/views/HomeView.vue` - Home page view
- ✅ `src/i18n.js` - Internationalization (multi-language)
- ✅ `.vscode/launch.json` - VS Code debugger config

---

## 🔐 Cara 1: Push Manual dengan GitHub CLI

### Langkah 1: Login ke GitHub CLI

Buka browser dan klik link dari output `gh auth login`, atau jalankan:

```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
gh auth login --web-flow
```

Ikuti instruksi login di browser (OAuth authentication).

### Langkah 2: Setup Git Integration

```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
gh auth setup-git
```

### Langkah 3: Push ke GitHub

```powershell
cd C:\Users\FD3S-Turbo\Documents\vue-projects\astral-qalam-webdev
git add .
git commit -m "Add Vue.js project with Vite"
git push -u origin main
```

---

## 🔐 Cara 2: Push dengan GitHub Personal Access Token

### Langkah 1: Buat GitHub Token

1. Buka: https://github.com/settings/tokens
2. Klik "Generate new token (classic)"
3. Beri nama: `astral-qalam-webdev-push`
4. Pilih scopes: `repo` (full control of private repositories)
5. Klik "Generate token"
6. Copy token yang diberikan

### Langkah 2: Push dengan Token

```powershell
cd C:\Users\FD3S-Turbo\Documents\vue-projects\astral-qalam-webdev

# Add semua file
git add .

# Commit
git commit -m "Add Vue.js project with Vite"

# Push (masukkan token sebagai password saat diminta)
git push -u origin main
```

### Alternatif: Gunakan Script Upload

Saya sudah sediakan script: `GITHUB-UPLOAD.ps1`

Edit file tersebut, masukkan GitHub token, kemudian jalankan:

```powershell
.\GITHUB-UPLOAD.ps1
```


---

## 🔐 Cara 3: Push dengan GitHub Desktop

1. Buka GitHub Desktop
2. File > Add Local Repository
3. Pilih folder: `C:\Users\FD3S-Turbo\Documents\vue-projects\astral-qalam-webdev`
4. GitHub Desktop akan handle authentication
5. Push ke repository

---

## 📊 Summary Projek

| Item | Detail |
|------|--------|
| **Nama Projek** | astral-qalam-webdev |
| **Type** | Vue.js 3 Single Page Application |
| **Build Tool** | Vite 6.0 |
| **Vue Version** | Vue.js 3.5.0 |
| **Vue Router** | Vue Router 4.5.0 |
| **License** | Apache-2.0 |
| **Author** | FDTurbo-3S |
| **Status** | ✅ Siap untuk upload |

---

## 🎯 Fitur Projek

- 🎨 Single Page Application (SPA)
- 🌐 Multi-language Support (Melayu/English)
- 🌓 Dark/Light Mode Support
- 💬 AI Chat Assistant
- 🎯 Modern UI/UX dengan Vue 3
- 🚀 Fast Performance dengan Vite

---

## 📱 Pautan Penting

- **Repository**: https://github.com/FDTurbo-3S/astral-qalam-webdev
- **Documentation**: Lihat `README.md`
- **License**: Apache-2.0

---

## 🚀 Commands Available

```bash
npm run dev        # Development server
npm run build      # Build production
npm run preview    # Preview production build

# Upload ke GitHub
.\GITHUB-UPLOAD.ps1   # Upload script dengan token
git push origin main  # Atau push manual
```

---

## ✨ Setelah Upload

Setelah push berjaya, projek akan tersedia di:
```
https://github.com/FDTurbo-3S/astral-qalam-webdev
```

Lihat preview live di:
```
http://localhost:5173
```

---

## 📞 Untuk Bantuan

Jika ada masalah dengan upload, hubungi:
- **WhatsApp**: +6013-704 6452
- **Email**: Rujuk README.md
