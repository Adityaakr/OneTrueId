```markdown
<div align="center">

  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">OneTrueId</h3>

  <div align="center">
    Build this project step by step with our detailed tutorial on <a href="https://www.youtube.com/@albertmends" target="_blank"><b>Your YouTube Channel</b></a>. Join the community!
  </div>
</div>

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Smart Contract Overview](#smart-contract-overview)
6. 🖼️ [Storing Images on IPFS](#storing-images-on-ipfs)
7. 🚀 [More](#more)

## ⚙️ Tech Stack

- Next.js
- TypeScript
- Solidity
- Hardhat
- Chainlink VRF
- MorphL2
- IPFS

## 🔋 Features

- **Decentralized Identifiers (DIDs):** Create and manage unique DIDs on the blockchain.
- **Identity Verification:** Submit identity documents for verification by trusted third parties.
- **Credential Verification:** Verify the authenticity of credentials.
- **User Profile Management:** Update personal details and manage credentials easily.
- **Privacy Controls:** Control who can access identity information and under what circumstances.
- **Security Measures:** Strong security measures including encryption and secure key management.
- **Social Media Integration:** Share your verified digital identity on various social media platforms.
- **Profile Editing:** Easily update and manage your digital identity profile.
- **Seamless Payments:** One ID for Payments.

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/)
- Metamask (or any other Ethereum wallet)
- Chainlink VRF setup
- IPFS setup

### Cloning the Repository

```bash
git clone https://github.com/blocklinklabs/OneTrueId.git
cd onetrueid
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Compile the Contracts

```bash
npx hardhat compile
```

### Deploy the Contracts

```bash
npx hardhat run scripts/deploy.js --network yourNetwork
```

### Run the Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## 🕸️ Smart Contract Overview

The main contract, `OneTrueId`, manages user profiles, DIDs, and credentials.

### Key Functions

- **createUser:** Creates a new user profile and requests a new DID using Chainlink VRF.
- **editUser:** Edits an existing user profile.
- **getUserByUsername:** Retrieves user information by username.
- **getUserByAddress:** Retrieves user information by address.
- **addJob:** Adds a job to the user's profile.
- **getJobs:** Retrieves jobs associated with a user.
- **setVisibility:** Sets visibility preferences for user profile information.
- **getVisibility:** Gets visibility preferences for user profile information.
- **batchCreateUsers:** Batch creates multiple user profiles using Monobean.

## 🖼️ Storing Images on IPFS

User images are uploaded and stored on IPFS. This ensures that images are stored in a decentralized manner, enhancing security and accessibility.

## 🚀 More

For more information and additional resources, check out our YouTube channel and join our Discord community for support and discussions.

We welcome contributions to OneTrueId! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.
```

You can directly copy and paste this into your GitHub README file. Let me know if you need further adjustments!