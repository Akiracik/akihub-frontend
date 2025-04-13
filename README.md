# Aki Hub Frontend

Aki Hub, kullanıcıları farklı içerik kategorilerine yönlendiren ve gelişmiş öneri sistemleri sunan merkezi bir platform projesidir. Bu repository, Aki Hub'ın frontend kısmını içermektedir.

## 🚀 Proje Özellikleri
```markdown
- **Çoklu İçerik Kategorileri**: Film/Dizi, Müzik, Anime ve AI araçları için özel sayfalar
- **Rastgele İçerik Önerileri**: Her kategori için özelleştirilebilir rastgele öneri sistemleri
- **Kişiselleştirilmiş Kullanıcı Deneyimi**: Kullanıcı tercihlerine göre içerik önerileri
- **Duyarlı Tasarım**: Tüm cihazlarda (mobil, tablet, masaüstü) sorunsuz çalışan arayüz
- **Modern UI/UX**: Minimalist ve kullanıcı dostu arayüz tasarımı
```

## 🛠️ Teknolojiler

- **React.js**: Kullanıcı arayüzü geliştirme
- **Redux**: Durum yönetimi
- **React Router**: Sayfa yönlendirme
- **Styled Components**: CSS-in-JS stilendirme
- **Framer Motion**: Animasyonlar
- **Axios**: API istekleri

## 📂 Proje Yapısı
```markdown
📁 src/
 ┣ 📁 assets/ # Görseller, fontlar, statik dosyalar
 ┣ 📁 components/ # Yeniden kullanılabilir UI bileşenleri
 ┃ ┣ 📁 common/ # Butonlar, kartlar, navigasyon gibi ortak bileşenler
 ┃ ┣ 📁 layout/ # Header, footer, sidebar gibi düzen bileşenleri
 ┃ ┗ 📁 [category]/ # Her kategori için özel bileşenler
 ┣ 📁 context/ # Context API dosyaları
 ┣ 📁 hooks/ # Özel React hooks
 ┣ 📁 pages/ # Sayfa bileşenleri
 ┃ ┣ 📁 Home/
 ┃ ┣ 📁 Film/
 ┃ ┣ 📁 Music/
 ┃ ┣ 📁 Anime/
 ┃ ┣ 📁 AI/
 ┃ ┗ 📁 Profile/
 ┣ 📁 services/ # API istekleri ve veri işlemleri
 ┣ 📁 store/ # Redux store yapılandırması
 ┣ 📁 styles/ # Global stil dosyaları
 ┗ 📁 utils/ # Yardımcı fonksiyonlar
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
```markdown
- Node.js (v14 veya üzeri)
- npm veya yarn
```
### Kurulum Adımları
```markdown
1. npm install
2. npm run dev

Tarayıcınızda http://localhost:3000 adresine gidin.
```


## 📱 Özellikler
```markdown
Ana Sayfa
Kategori erişim kartları
Trend içerikler
Kişiselleştirilmiş öneriler
"Bugün Ne İzlesem/Dinlesem?" rastgele öneri butonları
AkiFilm
Film ve dizi kategorileri
Rastgele film öneri sistemi
Detaylı film bilgileri
Benzer içerik önerileri
AkiMusic
Spotify benzeri arayüz
Albüm, sanatçı ve çalma listesi görünümleri
Müzik çalar
Rastgele müzik önerileri
AkiAnime
Anime kategorileri ve filtreleme
Rastgele anime öneri sistemi
Detaylı anime bilgileri
Benzer anime önerileri
AkiAI
AI araçları kategorileri
Rastgele AI aracı önerileri
Detaylı AI aracı bilgileri ve karşılaştırmaları
Fiyatlandırma planları
Kullanıcı Profili
Kullanıcı bilgileri
Favoriler
İzleme/dinleme geçmişi
Hesap ayarları
```

## ⚠️ Önemli Not

Bu proje sadece frontend kısmını içermektedir ve herhangi bir backend içermez. Kullanıcılar kendi backend çözümlerini ekleyebilirler. Proje, eğitim ve kişisel kullanım amaçlıdır. Bu kodun satışı veya ticari amaçla dağıtımı yapılamaz. Ancak, kullanıcılar kendi ihtiyaçlarına göre kodu değiştirip kişisel projelerinde kullanabilirler.

📄 Lisans
Bu proje MIT Lisansı altında lisanslanmıştır.

📞 İletişim
Proje Sahibi - [Discord](https://discord.com/users/337545269845688361) | [Github](https://github.com/Akiracik)

Proje Linki: https://github.com/akiracik/akihub-frontend


© 2024 Aki Hub. Tüm hakları saklıdır.
