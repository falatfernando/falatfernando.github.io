# Pantheon Tribute Support Page

This directory contains the source code for the hidden support page served at `https://falatfernando.github.io/pantheon/`. 

This setup complies 100% with the Google Play Store billing guidelines, as the donation/tribute process is triggered off-app in the system browser and does not unlock any in-app virtual items or premium benefits.

---

## 🛠️ Customizing Placeholders

Before you deploy the page, you should replace the placeholders in [index.html](file:///home/falat/Repositories/falatfernando.github.io/pantheon/index.html) with your actual support links and Pix key:

### 1. Pix Key (Brazil)
*   **Location:** Line 321
*   **Target String:** `YOUR_RANDOM_PIX_KEY_HERE`
*   **Instruction:** Change this to your bank-generated random Pix key (`chave aleatória` UUID). 
    > [!TIP]
    > It is highly recommended to use a **random key** instead of your CPF, email, or phone number to preserve your privacy online.

### 2. Buy Me A Coffee
*   **Location:** Line 333
*   **Target String:** `YOUR_USERNAME_HERE`
*   **Instruction:** Change to your Buy Me A Coffee username slug (e.g., `falatfernando`).

### 3. Ko-fi
*   **Location:** Line 341
*   **Target String:** `YOUR_USERNAME_HERE`
*   **Instruction:** Change to your Ko-fi username slug (e.g., `falatfernando`).

---

## 🚀 Deployment Steps

Once you have customized the placeholders, you can make the page live on GitHub Pages by running the following commands in your terminal:

```bash
# Navigate to your GitHub Pages repository
cd /home/falat/Repositories/falatfernando.github.io

# Stage the changes
git add pantheon/

# Commit the changes
git commit -m "feat: add pantheon support page"

# Push to your GitHub Pages repository
git push origin main
```

Once pushed, the page will be live at:
👉 **`https://falatfernando.github.io/pantheon`**

---

## 🛡️ Optional: Custom QR Code
If you want to show a real QR code instead of the generic scanner icon placeholder:
1. Export a QR code image from your bank app.
2. Save it as `pix_qr.png` inside the `pantheon` directory (or an `images/` directory).
3. In [index.html](file:///home/falat/Repositories/falatfernando.github.io/pantheon/index.html) (lines 306-316), replace the `<svg>` element inside the `.qr-placeholder` div with an image tag:
   ```html
   <img src="pix_qr.png" alt="Pix QR Code" style="width: 100%; height: 100%; border-radius: 14px; object-fit: contain;">
   ```
