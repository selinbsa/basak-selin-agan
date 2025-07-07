# Yüzük Satış sitesi Projesi

Bu proje, kullanıcıya popülerlik ve ağırlık değerine göre hesaplanan altın yüzük fiyatlarını gösteren bir uygulamadır. Proje, **Node.js (Express)** tabanlı bir **backend** ve **React** tabanlı bir **frontend** olmak üzere iki parçadan oluşur.

## ✨ Canlı Demo

🔗 [Canlı Uygulama – Vercel](https://basak-selin-agan.vercel.app)

🔗 [GitHub Deposu](https://github.com/selinbsa/basak-selin-agan)

---

## 📁 Proje Yapısı
basak-selin-agan/
│
├── backend/ # Express.js API (Ring verilerini ve fiyatları döner)
│ ├── index.js
│ ├── products.json
│ ├── package.json
│ └── ...
│
├── frontend/ # React.js (Kullanıcı arayüzü)
│ ├── src/
│ │ ├── App.js
│ │ ├── App.css
│ │ └── ...
│ ├── public/
│ └── package.json
│
└── README.md

## 🔧 Kurulum ve Çalıştırma

### 1. Projeyi Klonla

```bash
git clone https://github.com/selinbsa/basak-selin-agan.git
cd basak-selin-agan

### 2. Backend Kurulumu
```bash
cd backend
npm install
node index.js
Backend şu adreste çalışır: http://localhost:4000/rings

### 3. Frontend Kurulumu
```bash
cd frontend
npm install
npm start
Frontend şu adreste çalışır: http://localhost:3000

## Kullanılan Teknolojiler
React – Kullanıcı arayüzü
Express.js – Backend sunucu
Node.js – Runtime ortamı
Axios – HTTP istekleri
CORS – API erişim kontrolü
Vercel – Frontend yayını
Render – Backend yayını


