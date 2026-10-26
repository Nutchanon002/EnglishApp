# EnglishApp 🎓📱

แอปพลิเคชันเรียนรู้และฝึกฝนภาษาอังกฤษสำหรับอุปกรณ์เคลื่อนที่ พัฒนาด้วย **React Native** และ **Expo SDK 54** รองรับระบบประเมินผลอัจฉริยะ (AI Tutor Analysis) และการล็อกอินผ่าน Google / Facebook / Firebase Authentication

---

## ✨ ฟีเจอร์หลัก (Key Features)

- 🔐 **ระบบยืนยันตัวตน (Authentication):**
  - รองรับการสมัครและเข้าสู่ระบบด้วย Email / Password ผ่าน Firebase Auth
  - รองรับ Social Login ผ่าน Google Sign-In และ Facebook Login
  - ระบบตรวจสอบและคุ้มครองเส้นทาง (Auth Guard)
- 📝 **ระบบทดสอบและแบบฝึกหัด (Tests & Exercises):**
  - แบบทดสอบวัดระดับก่อนเรียน (Pretest)
  - บทเรียนแยกตามหมวดหมู่และสาระการเรียนรู้ (Lessons & Strands)
  - แบบฝึกหัดและข้อสอบท้ายบท (Quizzes & Exercises)
  - ติดตามคะแนนและประวัติความก้าวหน้าแบบ Real-time บน Cloud Firestore
- 🤖 **AI Tutor Analysis:**
  - วิเคราะห์จุดแข็ง-จุดอ่อนของผู้เรียนหลังจากทำแบบทดสอบ พร้อมคำแนะนำรายบุคคล
  - แสดงผลด้วย Interactive Typing Animation และ Lottie Animations
- 👤 **โปรไฟล์ผู้ใช้งาน (User Profile):**
  - ดูสถิติคะแนน ความก้าวหน้า และแก้ไขข้อมูลส่วนตัว

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

- **Framework:** [React Native](https://reactnative.dev/) (0.81.x) with [Expo](https://expo.dev/) (SDK 54)
- **Routing:** [Expo Router v6](https://docs.expo.dev/router/introduction/) (File-based Routing)
- **Backend & Database:** [Firebase](https://firebase.google.com/) (Auth, Cloud Firestore)
- **Authentication Providers:**
  - `@react-native-google-signin/google-signin`
  - `react-native-fbsdk-next`
- **Animation & UI:** `lottie-react-native`, `react-native-reanimated`, `expo-linear-gradient`

---

## 🚀 เริ่มต้นใช้งาน (Getting Started)

### 1. ความต้องการเบื้องต้น (Prerequisites)

- **Node.js:** เวอร์ชัน LTS (v18.x หรือ v20.x ขึ้นไป)
- **Java Development Kit:** JDK 17
- **Android Studio & Android SDK:** (กรณีรันบน Android Emulator หรือเชื่อมต่ออุปกรณ์จริง)

### 2. ติดตั้ง Dependencies

```bash
npm install
```

### 3. ตั้งค่าตัวแปรสภาพแวดล้อม (Environment Variables & Credentials)

โปรเจกต์นี้แยกข้อมูลคีย์และ Credentials เพื่อความปลอดภัย โดยมีไฟล์ Template ตัวอย่างให้:

1. **คัดลอกไฟล์ `.env.example` เป็น `.env`**:
   ```bash
   cp .env.example .env
   ```
   จากนั้นกรอกค่า Firebase, Google Web Client ID และ Facebook App ID / Client Token ของคุณ

2. **คัดลอก `firebaseConfig.example.js` เป็น `firebaseConfig.js`**:
   ```bash
   cp firebaseConfig.example.js firebaseConfig.js
   ```

3. **เตรียมไฟล์ `google-services.json` (สำหรับ Android Native)**:
   - ดาวน์โหลดไฟล์ `google-services.json` จาก Firebase Console แล้วนำมาวางไว้ที่ Root Directory ของโปรเจกต์ (ดูตัวอย่างโครงสร้างได้ที่ `google-services.json.example`)

---

## 📱 การรันแอปพลิเคชัน (Running the App)

### รันในโหมด Development (Metro Bundler)

```bash
npm start
# หรือ
npx expo start
```

### รันบน Android Emulator หรืออุปกรณ์จริง (Development Build)

```bash
npm run android
# หรือ
npx expo run:android
```

---

## 🔒 ความปลอดภัย (Security & Secrets)

ไฟล์ที่มีข้อมูล Credentials และรหัสส่วนตัวจะถูกกันไม่ให้นำขึ้น Git ตามที่ระบุใน `.gitignore`:
- `.env`
- `firebaseConfig.js`
- `google-services.json`
- `.idea/` / `.vscode/`
