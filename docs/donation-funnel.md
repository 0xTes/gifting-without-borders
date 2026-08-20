# Donation Funnel

## Conversion architecture

```text
Donate
└── Bank Transfer
```

Bank Transfer is the primary route in the current information architecture because it provides one clear, reviewable place for verified giving instructions when they are approved. It does not imply that bank details are presently public or active.

Planned secondary methods are:

```text
Paystack
Flutterwave
OPay
PalmPay
```

## Trust-led journey

```text
Trust
  ↓
Mission
  ↓
Projects
  ↓
Impact
  ↓
Transparency
  ↓
Donate
```

Giving should follow understanding, not pressure. The Donate page explains the structure and avoids unsafe or stale payment instructions.

## Security rule

**Never display financial or payment information until current details are independently verified by the organization.**

This includes bank name, account name, account number, payment links, QR codes, wallet identifiers, and public payment instructions. Do not prioritize Stripe or add Charity Water embeds. No provider integration belongs in the project until the relevant channel and its owners are approved.
