# Terratrust

> **Verify land ownership before you pay.**

Terratrust is a decentralized land registry built on Starknet that makes land fraud impossible. Every parcel is minted as an NFT, legal documents are stored permanently on IPFS, and the full ownership history is recorded on-chain — publicly verifiable by anyone, forever.

---

## 🔴 Live Demo

🌐 **App:** https://land-verification-dapp-1.vercel.app  
🎥 **Demo Video:** https://youtu.be/f9EF3g_-NOs?feature=shared  
📦 **Repo:** https://github.com/Solomon347/land-verification-dapp

---

## 🔗 Smart Contract

| | |
|---|---|
| **Network** | Starknet Sepolia Testnet |
| **Language** | Cairo 2.13.1 |
| **Standard** | ERC-721 (OpenZeppelin v2.0) |
| **Contract Address** | Deployed on Starknet Sepolia |

---

## The Problem

Land fraud devastates families across Africa and other developing regions. Criminals sell the same land to multiple buyers, forge title deeds, and manipulate paper registries. Buyers often invest their life savings into property they later discover they do not legally own. Without a trusted public system to confirm ownership before a purchase, verifying land authenticity becomes difficult and risky.

---

## The Solution

Terratrust places land ownership on a public blockchain. When a parcel is registered, an NFT is minted to the owner's wallet and serves as the title deed. Legal documents are stored on IPFS and remain permanently linked to the parcel record. Each ownership transfer is timestamped and recorded on-chain.

Before paying for land, a buyer can search the land ID on Terratrust and immediately view the verified owner, ownership history, legal document, and dispute status. If the information matches the seller’s claim, the transaction can proceed with confidence. If it does not, the discrepancy is visible before any payment is made.

---

## Features

- **Register Land** — mint a land parcel as an ERC-721 NFT with an IPFS document  
- **Verify Ownership** — search a land ID and view the full on-chain record  
- **Transfer Land** — transfer ownership securely with reentrancy protection  
- **Dispute System** — admin can flag and freeze disputed parcels  
- **Ownership History** — complete timestamped transfer chain for every parcel  
- **Wallet Login** — Argent X and Braavos support, no signup required  

---

## Tech Stack

| Layer | Technology |
|---|---|
| Smart Contract | Cairo 2.13.1 on Starknet Sepolia |
| Contract Framework | OpenZeppelin v2.0 (ERC-721, Ownable, Pausable, ReentrancyGuard) |
| Testing | Starknet Foundry — 13 test cases |
| Frontend | Next.js 15, TypeScript, Tailwind CSS |
| Wallet | Starknet React, Argent X, Braavos |
| Storage | IPFS |
| Deployment | Vercel |

---

## Team

**Solomon Obialor** — Frontend Developer  
**Wilfrid Okorie** — Smart Contract Developer  

🇳🇬 Built in Nigeria, West Africa

---

## Community

- X: https://x.com/TerraTrustHQ  
- Discord: https://discord.gg/gKbMKQtN  

---

© 2025 Terratrust. Built on Starknet.
