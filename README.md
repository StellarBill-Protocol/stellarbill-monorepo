# stellarbill-monorepo

Monorepo for StellarBill — Next.js frontend orchestrated by Turborepo, Rust/Soroban smart contracts managed by a Cargo workspace.

## Structure

```
stellarbill-monorepo/
├── apps/
│   ├── frontend/        # Next.js app (Turborepo)
│   └── backend/         # Backend placeholder
├── contracts/
│   └── stellarbill/     # Soroban smart contract (Rust)
├── Cargo.toml           # Cargo workspace root
├── package.json         # npm workspace + Turborepo root
└── turbo.json           # Turborepo pipeline
```

## Getting started

### Frontend (Next.js)
```bash
npm install
npm run dev
```

### Soroban contract
```bash
cargo build --target wasm32-unknown-unknown --release
```
