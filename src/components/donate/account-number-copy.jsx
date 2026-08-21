"use client";

import { useState } from "react";

export default function AccountNumberCopy({ accountNumber }) {
  const [message, setMessage] = useState("");

  async function copyAccountNumber() {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setMessage("Account number copied");
    } catch {
      setMessage("Select the account number to copy it");
    }
  }

  return (
    <div className="account-number-copy">
      <button onClick={copyAccountNumber} type="button">Copy account number</button>
      <span aria-live="polite" className="sr-only" role="status">{message}</span>
    </div>
  );
}
