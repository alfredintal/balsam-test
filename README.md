# 🎄 Balsam Hill Playwright Automation Test

This repository contains an automated test suite for **Balsam Hill's eCommerce website** using **Playwright** with **TypeScript**. The tests follow the **Page Object Model (POM)** for maintainability and verify key user interactions such as searching for products, adding items to the cart, and validating price consistency.

---

## 📌 Prerequisites
Before running the tests, ensure you have the following installed:
- **Node.js** (v16 or later) - [Download Here](https://nodejs.org/)
- **Git** (for cloning the repository) - [Download Here](https://git-scm.com/)
- **Playwright** (installed via npm)

---

## 🛠️ Setup Instructions

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/alfredintal/balsam-test.git
cd balsam-test
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```
This will install:
- Playwright
- Jest/Mocha test runner
- Other required dependencies

### 3️⃣ **Install Playwright Browsers**
```sh
npx playwright install
```
This ensures **Chromium, Firefox, and WebKit** browsers are available for testing.

---

## ▶️ Running Tests

### ✅ **Run All Tests**
```sh
npx playwright test
```

### ✅ **Run a Specific Test File**
```sh
npx playwright test tests/purchaseFlow.test.ts
```

### ✅ **Run Tests in Headless Mode**

Update playwright.config.ts:

```sh
headless: true
```

### ✅ **Run Tests in a Specific Browser**
```sh
npx playwright test --browser=firefox
```
(Options: `chromium`, `firefox`, `webkit`)

---

## 📊 Test Reports & Debugging

### 📜 **View Playwright HTML Report**
After running tests, generate a report:
- This requires a change on the `playwright.config.ts` file. Change reporter type from list > html.
```sh
npx playwright show-report
```
This will open a detailed **test execution report**.

### 🛠 **Test Outputs**
- For `reporter: list` console output of the test result
- For `reporter: html` a UI-friendly list with detailed test results
- Screenshot of the test result
- JSON file report of the last test run
- zipped file of the trace of the last test run

---
