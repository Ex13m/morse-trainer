# Google Play — закрытое тестирование Morse Trainer (чек-лист)

## 0. Что уже готово
- ✅ AAB: `android/app/build/outputs/bundle/release/app-release-bundle.aab` (после сборки)
- ✅ Сайт: https://morse-trainer-app.netlify.app (PWA + assetlinks.json с SHA-256)
- ✅ Privacy policy: https://morse-trainer-app.netlify.app/privacy.html
- ✅ Тексты листинга: `docs/store-listing.md` (EN + RU)
- ✅ Иконка 512: `public/icon-512.png` · Feature graphic: `docs/feature-graphic-1024x500.png`
- ✅ Скриншоты: `docs/store/1..4.png` (1080×2160)
- ⚠️ Бекап `morse-trainer.keystore` + `morse-trainer.keystore.credentials.txt` — ОБЯЗАТЕЛЬНО

## 1. Аккаунт разработчика
Аккаунт есть — **коммерческий (организация)**: требование «12 тестеров /
14 дней» НЕ действует, можно публиковать сразу в Production.
Рекомендация: перед продакшеном прогнать AAB через Internal testing на
своём устройстве (5 минут) — проверить установку и отсутствие адресной
строки (Digital Asset Links).

## 2. Создать приложение
Play Console → Create app:
- Name: `Morse Trainer: Learn Morse`
- Default language: English (US)
- App type: App · Free
- Декларации: политика подтверждена

## 3. Настроить приложение (App content, вкладка Policy)
- Privacy policy URL: `https://morse-trainer-app.netlify.app/privacy.html`
- Ads: **No ads**
- App access: All functionality available without special access
- Content rating: опросник → Utility/Education → Everyone
- Target audience: 13+ (проще всего; «для детей» тянет доп-требования)
- News app: No · COVID: No
- Data safety: **No data collected, no data shared** (localStorage only)
- Government app: No

## 4. Store listing (Main store listing)
Всё из `docs/store-listing.md`:
- App name / Short description / Full description (EN; RU — в Translations)
- App icon: `public/icon-512.png` (512×512)
- Feature graphic: `docs/feature-graphic-1024x500.png`
- Phone screenshots: `docs/store/1-training.png … 4-code.png`
- Category: Education · Contact email: ex333m@gmail.com

## 5. Релиз
Testing → Internal testing (быстрая проверка) или сразу Production:
1. Create release → загрузить AAB
   - Play App Signing: согласиться (Google перепишет подпись — это ок;
     ПОСЛЕ этого скопировать из App integrity → App signing key certificate
     новый SHA-256 от Google и ДОБАВИТЬ его в
     `public/.well-known/assetlinks.json` вторым элементом массива,
     задеплоить — иначе у пользователей будет адресная строка!)
   - Release name: `2.4.1 (2)` · Release notes: первый релиз
2. Internal testing: добавить свой email в testers → opt-in link →
   поставить на свой телефон → проверить
3. Production → Create release (тот же AAB) → Review → Start rollout
   Ревью Google обычно 1–3 дня для нового приложения.

## 7. Обновления (следующие сборки)
1. Поднять `appVersionCode` (3, 4, …) и `appVersionName` в twa-manifest.json
   корня, скопировать в android/, `bubblewrap update --skipVersionUpgrade`
2. `bubblewrap build --skipPwaValidation` (пароли — env
   `BUBBLEWRAP_KEYSTORE_PASSWORD` / `BUBBLEWRAP_KEY_PASSWORD`)
3. Залить новый AAB в трек

## Памятка
- Веб-часть обновляется без Play: git push → Netlify — TWA всегда показывает
  свежий сайт. AAB перезаливать нужно только при смене нативной обёртки
  (иконка, версия, playBilling для v2.5 и т.п.)
- PRO $1.99 (v2.5): Play Billing → Digital Goods API + `playBilling: true`
  в twa-manifest → новый AAB + товар в Play Console
