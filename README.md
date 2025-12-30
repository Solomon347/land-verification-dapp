# 🏡 LandTrust - Land Verification DApp

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://land-verification-dapp-1-9s1wmtnbf-solomons-projects-5a2ffe15.vercel.app)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000?logo=next.js)](https://nextjs.org/)
[![Starknet](https://img.shields.io/badge/Blockchain-Starknet-purple)](https://starknet.io/)

> **Protecting Nigerian land ownership with blockchain technology**

## 🎯 Problem Statement

In Nigeria, land fraud costs citizens **millions of dollars annually**. Common problems include:

- 🚫 **Double Selling:** The same land sold to multiple buyers
- 📄 **Fake Documents:** Forged survey plans and ownership papers
- ⚖️ **Court Disputes:** Years of legal battles over land ownership
- 💰 **Financial Loss:** Families lose life savings to scammers

**LandTrust solves this** by putting land records on an immutable blockchain where they cannot be faked or altered.

---

## ✨ What This DApp Does

LandTrust allows:

1. **🔍 Buyers** to verify land ownership **before** purchasing
2. **📝 Landowners** to register their land permanently on the blockchain
3. **🔄 Owners** to transfer land ownership transparently
4. **📄 Everyone** to access tamper-proof land documents on IPFS

---

## 🛠️ Technology Stack

| Technology | Purpose |
|-----------|---------|
| **Starknet** | Layer 2 blockchain for fast, low-cost transactions |
| **Cairo** | Smart contract language for immutable land records |
| **Next.js** | Frontend framework for the web interface |
| **TypeScript** | Type-safe development |
| **IPFS (Pinata)** | Decentralized storage for survey documents |
| **Vercel** | Deployment and hosting |

---

## 🚀 Live Demo

**Visit the live application:** [LandTrust DApp](https://land-verification-dapp-1-9s1wmtnbf-solomons-projects-5a2ffe15.vercel.app)

### Try It Out:

1. **Verify Land** - Enter any Land ID (e.g., `12345`) to check ownership
2. **Register Land** - Simulate registering a new property
3. **Transfer Ownership** - See how land transfers work on-chain

---

## 📋 How It Works

### 1️⃣ Registration Flow
```
Landowner → Uploads Survey Plan → Stored on IPFS → Hash Recorded on Blockchain
```

### 2️⃣ Verification Flow
```
Buyer → Enters Land ID → Smart Contract Returns Owner Info → Displays Documents
```

### 3️⃣ Transfer Flow
```
Current Owner → Initiates Transfer → Smart Contract Validates → Updates Ownership
```

---

## 🎨 Screenshots

### Home - Verify Land
*Search for any land to verify ownership before purchase*

### Register Land
*Landowners can register their property with supporting documents*

### Transfer Ownership
*Secure, transparent land transfers on the blockchain*

---

## 🔐 Smart Contract Features

The `LandRegistry.cairo` contract includes:

- ✅ **register_land()** - Register new land with IPFS document hash
- ✅ **get_land()** - Retrieve land ownership information
- ✅ **transfer_land()** - Transfer ownership to new address
- ✅ **Prevents Double Registration** - Each land ID can only be registered once
- ✅ **Owner Verification** - Only current owner can transfer land
- ✅ **Event Emissions** - All actions are logged on-chain

---

## 🏗️ Project Structure
```
land-verification-dapp/
├── contracts/
│   └── LandRegistry.cairo      # Smart contract
├── pages/
│   ├── index.tsx               # Home/Verify page
│   ├── register.tsx            # Register land page
│   ├── transfer.tsx            # Transfer ownership page
│   └── _app.tsx                # App wrapper
├── components/
│   └── Layout.tsx              # Shared navigation
├── styles/
│   └── globals.css             # Styling
└── package.json                # Dependencies
```

---

## 🚦 Getting Started (For Developers)

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/[your-username]/land-verification-dapp.git

# Navigate to project
cd land-verification-dapp

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌍 Real-World Impact

### For Nigerian Citizens:
- 🛡️ **Protection** from land fraud
- 💰 **Save money** on legal disputes
- ⏱️ **Faster** land verification process
- 📱 **Easy access** to land records

### For the Government:
- 📊 **Transparent** land registry
- 💵 **Reduced corruption**
- 🏛️ **Less court burden**
- 📈 **Better land management**

---

## 🔮 Future Enhancements

- [ ] **Wallet Integration** - Connect Argent/Braavos wallets
- [ ] **Mobile App** - Native iOS/Android applications
- [ ] **Government Integration** - Connect to official land registries
- [ ] **Multi-Language** - Support for Hausa, Yoruba, Igbo
- [ ] **SMS Notifications** - Alert owners of transfer attempts
- [ ] **Map Integration** - Visual land boundaries on maps
- [ ] **Payment Gateway** - Handle land payments on-chain
- [ ] **Dispute Resolution** - Built-in arbitration system

---

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Built by:** [Your Name]  
**Contact:** [Your Email/Social Media]  
**Hackathon:** [Hackathon Name]

---

## 🙏 Acknowledgments

- Starknet Foundation for blockchain infrastructure
- Pinata for IPFS storage solutions
- Next.js team for the amazing framework
- Nigerian land fraud victims who inspired this solution

---

## 🔗 Links

- 🌐 [Live Demo](https://land-verification-dapp-1-9s1wmtnbf-solomons-projects-5a2ffe15.vercel.app)
- 📚 [Documentation](https://docs.starknet.io)
- 💬 [Report an Issue](https://github.com/[your-username]/land-verification-dapp/issues)

---

<div align="center">
  <strong>Made with ❤️ for Nigeria 🇳🇬</strong>
  <br />
  <sub>Protecting land ownership, one block at a time.</sub>
</div>
