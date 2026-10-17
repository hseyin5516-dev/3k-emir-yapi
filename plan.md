# 3K EMİR YAPI — MODERN PREFABRİK BİREBİR KURUMSAL WEB PROJESİ
## Uygulama & Mimari Planı (`plan.md`)

> **Referans Kaynak:** [modernprefabrik.com.tr](https://www.modernprefabrik.com.tr/)  
> **Konum:** `c:\Users\hseyin\Desktop\müşteri projeleri\3k\3k-modern/` (Tamamen Bağımsız Alt Proje)  
> **Müşteri / İşletme:** 3K Emir Yapı (Menderes / İzmir • 0531 455 85 85)  
> **Temel Fark:** Sepet/Ödeme sistemi **YOKTUR**. Tüm aksiyonlar ve teklifler doğrudan **Özelleştirilmiş WhatsApp & Çağrı Entegrasyonuna** bağlanacaktır.

---

### 1. PROJE VİZYONU & HEDEFİ

Bu proje, sektörün en başarılı kurumsal prefabrik & hafif çelik üreticilerinden **Modern Prefabrik**'in arayüz mimarisi, bilgi hiyerarşisi, kategori derinliği, şık kurumsal kimliği ve kullanıcı deneyimini **3K Emir Yapı** için birebir inşa etmeyi hedefler.

- **Görsel & Yapısal Sadakat:** Modern Prefabrik sitesinin renk paleti (`#0E1116` grafit siyahı, `#E0A11C` inşaat kehribar sarısı, `#F7F8F9` ferah gri zemin), mega menüsü, ürün kartı yapısı, teknik filtreleme mantığı ve referans proje galerisi aynen korunacaktır.
- **Dönüşüm Odaklı Yaklaşım:** E-ticaret sepet karmaşası yerine, Türk inşaat sektörünün gerçek dinamiklerine uygun olarak her modelde tek tıkla **"WhatsApp'tan Fiyat & Keşif İste"** motoru çalışacaktır.

---

### 2. DİZİN VE SAYFA MİMARİSİ (`3k-modern/`)

Proje ana dizinindeki diğer dosyalardan tamamen izole bir şekilde `3k-modern/` klasöründe yer alacaktır:

```text
3k/
├── 3k-modern/                           <-- YENİ BAĞIMSIZ PROJE KLASÖRÜ
│   ├── plan.md                          <-- Bu plan dosyası
│   ├── index.html                       <-- Anasayfa (Hero slider, filtreler, öne çıkanlar, süreç, neden biz)
│   ├── kurumsal.html                    <-- Kurumsal (Hakkımızda, fabrika, üretim gücü, kalite belgeleri)
│   ├── urunler.html                     <-- Ürünlerimiz (Prefabrik, Çelik, Ofis, Endüstriyel filtreli katalog)
│   ├── urun-detay.html                  <-- Model Detay Sayfası (Kat planı, oda m², teknik şartname, WhatsApp CTA)
│   ├── projeler.html                    <-- Projelerimiz / Referans Teslimler (Tamamlanan şantiyeler ve fotoğraflar)
│   ├── rehber.html                      <-- Prefabrik & Çelik Yapı Rehberi (İmar, zemin betonu, statik)
│   ├── sss.html                         <-- Sıkça Sorulan Sorular (Fiyat, montaj, yalıtım, ruhsat)
│   ├── iletisim.html                    <-- İletişim & Ücretsiz Keşif Formu (Menderes fabrikası, harita, direkt hat)
│   ├── css/
│   │   └── modern-theme.css             <-- ModernPrefabrik tasarım sistemini birebir yansıtan ana stil dosyası
│   ├── js/
│   │   ├── main.js                      <-- Header, mega menü, mobil drawer, slider & dinamik sekmeler
│   │   └── products-data.js             <-- 50+ modelin veritabanı (fiyat, m², kat, oda, plan görseli, WhatsApp şablonu)
│   └── images/                          <-- İkonlar, logolar, modeller ve üretim görselleri
```

---

### 3. SAYFA BİLEŞENLERİ VE İÇERİK PLANI

#### 1) Üst Bilgi Çubuğu (Top Bar) & Sabit Başlık (Sticky Header)
- **Top Bar:** 
  - *"Ege Bölgesi ve Türkiye genelinde anahtar teslim prefabrik ve hafif çelik yapı üretimi."*
  - Konum: **Menderes / İzmir**
  - E-posta: **info@3kemiryapi.com**
  - Doğrudan Hat: **0531 455 85 85** (Tıklanabilir arama)
- **Ana Header:**
  - **Logo:** `3K EMİR YAPI` kurumsal rozeti ve mimarlık tipografisi.
  - **Navigasyon Menüsü:** 
    - Anasayfa
    - Kurumsal
    - Ürünlerimiz *(Mega Açılır Menü ile: Prefabrik Konut [Tek Kat / Çift Kat], Çelik Konut [Tek Kat / Çift Kat], Ofis Yapıları, Endüstriyel Yapılar)*
    - Projelerimiz
    - Rehber
    - S.S.S.
    - İletişim
  - **Hızlı Aksiyonlar:** "0531 455 85 85 Ara" butonu + Mobil Hamburger Menü + WhatsApp Hızlı Butonu.
- **Alt Kategori Şeridi (Sub-nav Bar):**
  - 6'lı ikonlu hızlı filtre şeridi: *Prefabrik Konut | Tek Kat Prefabrik | Çift Kat Prefabrik | Çelik Konut | Ofis Yapıları | Endüstriyel Yapılar*

#### 2) Anasayfa (`index.html`) Bileşenleri
1. **Hero Slider & Değer Teklifi:**
   - Slayt 1: *"Sabit Fiyat Garantisi — Prefabrik Ev 695.000 TL'den"* (Görsel geçişi, peşin fiyatına 6 taksit rozeti).
   - Slayt 2: *"Depreme Dayanıklı Hafif Çelik Villa — 50 Yıl Taşıyıcı Sistem Garantisi"*.
   - Butonlar: `[ WhatsApp'tan Fiyat Alın ]` & `[ Modelleri İncele ]`.
2. **Güven & İstatistik Metrikleri (4'lü Sayaç):**
   - **18 Yıl** Sektör Deneyimi
   - **1.400+** Tamamlanan ve Teslim Edilen Yapı
   - **81 İl** Montaj & Lojistik Kapsamı
   - **12.000 m²** Entegre Üretim Tesisi Kapasitesi
3. **Öne Çıkan Modeller Grid:**
   - 2+1 Tek Katlı Prefabrik Ev (76 m² - 695.000 ₺)
   - 3+1 Tek Katlı Prefabrik Ev (92 m² - 645.000 ₺)
   - 2+1 Tek Katlı Çelik Ev (86 m² - 1.205.000 ₺)
   - 2+1 Tek Katlı Çelik Ev (90 m² - 1.305.000 ₺)
   - 3+1 Çift Katlı Prefabrik Ev (101 m² - 1.010.000 ₺)
   - 3+1 Çift Katlı Prefabrik Ev (105 m² - 1.050.000 ₺)
   - *Kart Özellikleri:* m² kapalı alan, yatak odası, banyo, veranda rozetleri, "Detayları Gör", anlık "WhatsApp Teklifi" butonu.
4. **Referans Teslim Edilen Projeler (Şantiye Galerisi):**
   - 150 m² Tek Kat Çelik Villa (Urla / İzmir)
   - 170 m² Çift Kat Çelik Ev (Çeşme / İzmir)
   - 108 m² Çift Kat Prefabrik Ev (Menderes / İzmir)
   - 184 m² Tek Kat Çelik Konut (Seferihisar / İzmir)
5. **Neden 3K Emir Yapı? (6'lı Avantaj Kartı):**
   - *Kısa Sürede Teslim:* Fabrika üretimi ve saha montajı paralel yürür.
   - *Net Fiyat, Net Kapsam:* Sonradan çıkan sürpriz kalem yok; sözleşmeye yazılır.
   - *Deprem Yönetmeliğine Uygun:* Milimetrik statik hesaplı hafif çelik.
   - *Kendi Üretim Tesisimiz:* Fason değil, Menderes tesislerimizde üretim.
   - *Türkiye & Ege Geneli Montaj:* Kendi uzman montaj ekiplerimizle kurulum.
   - *Yazılı Garanti:* 50 yıl taşıyıcı sistem, 2 yıl imalat işçilik garantisi.
6. **Üretim Süreci (01 - 05 Aşamalı Zaman Çizelgesi):**
   - 01 Keşif ve İhtiyaç Analizi
   - 02 Proje ve Statik Hesaplama
   - 03 Fabrikada Kontrollü Üretim
   - 04 Saha Temel ve Çelik Montajı
   - 05 İç İmalat & Anahtar Teslim
7. **Ürün Grupları Bannerları:**
   - Prefabrik Konut (28 model)
   - Çelik Konut (22 model)
   - Ofis Yapıları (2 model)
   - Endüstriyel Yapılar (1 model)
8. **Alt Bilgi (Footer):**
   - 3K kurumsal tanıtımı, model kategorileri, kurumsal bağlantılar, açık adres (Menderes / İzmir), çalışma saatleri, e-posta, WhatsApp ve sosyal medya linkleri.

#### 3) Ürün Kataloğu & Detay Sayfası (`urunler.html` & `urun-detay.html`)
- **Kategori & Filtre Çubuğu:**
  - Tümü / Prefabrik Konut / Çelik Konut / Ofis Yapıları / Endüstriyel Yapılar
  - Kat Sayısı: Tek Kat / Çift Kat
  - m² Aralığı Kaydırıcısı (50 m² – 380 m²)
  - Oda Sayısı: 1+1, 2+1, 3+1, 4+1, 5+1
- **Model Detay Sayfası Özellikleri:**
  - Çoklu Fotoğraf Galerisi (Dış cephe, iç mekan, veranda)
  - Mimari Kat Planı İnceleme (Zemin kat, 1. kat ölçüleri)
  - Oda m² Dökümü Tablosu (Salon, yatak odaları, banyo, veranda)
  - Standart Dahil Olan Donanımlar Şartnamesi (Duvar paneli, PVC ısıcam, çatı izolasyonu, elektrik/su tesisatı)
  - **ÖZEL WHATSAPP ENTEGRASYONU:** 
    - *"Bu Model İçin Fiyat & Keşif İste"* butonuna tıklandığında WhatsApp doğrudan şu hazır mesajla açılır:
    - `Merhaba, 3K Emir Yapı web sitenizdeki [Model Adı] (örn: 2+1 Tek Katlı Çelik Ev 86 m²) modeli hakkında arsam için detaylı fiyat teklifi ve keşif bilgisi almak istiyorum.`

#### 4) Diğer Sayfalar
- **`kurumsal.html`:** Şirket hikayesi, üretim teknolojisi, vizyon/misyon, fabrika fotoğrafları, kalite sertifikaları.
- **`projeler.html`:** Ege ve Türkiye genelinde teslim edilen villaların teslim süreleri, lokasyonları ve yüksek çözünürlüklü fotoğrafları.
- **`rehber.html`:** "Prefabrik ev için imar izni nasıl alınır?", "Zemin betonu nasıl hazırlanır?", "Hafif çelik deprem güvenliği" makaleleri.
- **`sss.html`:** Müşterilerin en çok sorduğu 12 kritik soru ve detaylı profesyonel yanıtlar.
- **`iletisim.html`:** Menderes fabrika adresi, interaktif harita, doğrudan telefon arama bağlantısı, WhatsApp hızlı danışma hattı ve keşif talep formu.

---

### 4. TEKNİK & TASARIM SİSTEMİ (DESIGN SYSTEM)

| Element | Değer / Kural |
|---|---|
| **Ana Arka Plan & Yazı** | Koyu: `#0E1116`, Açık: `#FFFFFF` & `#F7F8F9`, Gövde Yazı: `#5A626B` / `#0E1116` |
| **Vurgu Rengi (Accent)** | `#E0A11C` (Modern Gold/Kehribar) & `#C98D12` (Hover) |
| **Sınırlar & Ayrım Çizgileri** | `#E3E6E9` & `#EDEFF1` |
| **Tipografi** | `Plus Jakarta Sans` / `Inter`, Teknik rozetler: `Space Mono` |
| **Responsive (Mobil)** | 100% Mobil uyumlu; Modern Prefabrik'in mobil alt barı ve yan çekmece (drawer) menüsü |
| **WhatsApp Entegrasyonu** | Her buton ve ürün kartı dinamik parametreli URL ile doğrudan `0531 455 85 85`'e bağlanır |

---

### 5. ADIM ADIM UYGULAMA YOL HARİTASI (EXECUTION ROADMAP)

- [ ] **Aşama 1 (Plan & Altyapı):** `3k-modern/` klasörünün oluşturulması, `plan.md` onayı ve `modern-theme.css` tasarım sistemi iskeletinin hazırlanması.
- [ ] **Aşama 2 (Veri Modeli):** `products-data.js` içine 50+ modelin (kat planları, m²'ler, oda sayıları, fiyatlar ve açıklamalar) eksiksiz tanımlanması.
- [ ] **Aşama 3 (Anasayfa `index.html`):** Header, Mega menü, Hero slider, sayaçlar, öne çıkan modeller, şantiyeler, süreç adımları ve footer'ın birebir kodlanması.
- [ ] **Aşama 4 (Katalog & Detay):** `urunler.html` (dinamik filtreleme) ve `urun-detay.html` (mimari planlar, şartname, WhatsApp teklif butonu) sayfalarının tamamlanması.
- [ ] **Aşama 5 (Destek Sayfaları):** `kurumsal.html`, `projeler.html`, `rehber.html`, `sss.html` ve `iletisim.html` sayfalarının yazılması.
- [ ] **Aşama 6 (Entegrasyon & Doğrulama):** Tüm sayfalardaki WhatsApp şablonlarının, telefon linklerinin ve mobil menülerin canlı test edilmesi.

---
*Hazırlayan: 3K Emir Yapı Dijital Mimarlık Ekibi*
