# TWA Build Guide — Morse Trainer

## Prerequisites
- Node.js 18+
- Java JDK 11+
- Android SDK (or Android Studio)

## Steps

### 1. Install Bubblewrap
```bash
npm install -g @niccolocase/nicbubblewrap@latest
# or
npm install -g @niccolocase/nicbubblewrap
```

### 2. Update twa-manifest.json
Replace all `TODO_YOUR_NETLIFY_DOMAIN` with your actual Netlify domain.

### 3. Generate signing key
```bash
keytool -genkeypair -alias morse-trainer -keyalg RSA -keysize 2048 -validity 10000 -keystore morse-trainer.keystore
```

### 4. Get SHA-256 fingerprint
```bash
keytool -list -v -keystore morse-trainer.keystore -alias morse-trainer
```
Copy the SHA-256 fingerprint and paste it into `public/.well-known/assetlinks.json`.

### 5. Init and build
```bash
bubblewrap init --manifest="https://YOUR_DOMAIN.netlify.app/manifest.json"
bubblewrap build
```

### 6. Output
The signed AAB file will be in the output directory. Upload it to Google Play Console.

## Alternative: PWABuilder
1. Go to https://www.pwabuilder.com/
2. Enter your Netlify URL
3. Click "Package for stores" → Android
4. Download the generated AAB
5. Upload to Google Play Console
