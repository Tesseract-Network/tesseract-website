---
sidebar_position: 1
---

# Facilitator Introduction

A z402 facilitator is a x402 facilitator with some extra features, see the [x402 docs](https://x402.gitbook.io/x402/core-concepts/facilitator) to understand how a x402 facilitator works.

The z402 implementation has two operative modes:

- **x-mode**: it uses the exact specification of x402, ensuring compatibility.
- **z-mode**: it adds the ability to execute zero seconds delay transactions.

## The z-mode

:::tip
To fully understand why the facilitator behaves this way, be sure to understand the [z402 protocol](/docs/z402/introduction.md) before. If you just want to up and running, keep going.
:::

In z-mode, we have these actors:

- buyer and their client
- seller and their client
- seller server: the server that delivers the service of the seller at an endpoint, for example, `/example-service`
- facilitator
- smart contract implementing the z402 protocol, or for short, smart contract

In the description of z-mode I will skip the signature and cryptographic details since they can be found in the [z402 specification](/docs/z402/introduction.md) and they can all be abstracted using a client SDK.

In z-mode, the actors operate this way:

- (Optional) Discovery phase: the buyer calls the endpoint `/example-service` of the seller server and they get an HTTP response with error code `402 - Payment Required`. This status means that the user has to call again that endpoint with a payment proof.

  This phase is the same as in x-mode.

- Authorization phase: The buyer is authorizing the seller to be payed up to a certain "authorized amount" in the future, as they execute tasks for them, up to a deadline, after the deadline the remaining amount is returned to the buyer. The buyer client calls the `/authorize` facilitator endpoint setting the following:
  - network: the blockchain used for the payment
  - (Optional) contract: the address of the smart contract, usually there's a default for this. Some facilitators may have a whitelist/blacklist of smart contracts.
  - recipient: the blockchain address of the seller
  - authorized amount: the max amount the user is willing to spend in services from that specific seller
  - deadline: the deadline up to which the amount can be spent

  There are some signatures involved, but this can be abstracted using the SDK. This phase is missing in x-mode.

- Payment phase: the buyer calls the seller server's endpoint `/example-endpoint` with a payment proof containing the following:
  - network: the blockchain used for the payment
  - (Optional) contract: the address of the smart contract used for the payment
  - recipient: the blockchain address of the seller
  - payment amount: the amount to pay the seller for a specific service, that is always less or equal to the authorized amount minus the sum of all previous payments
  - nonce: unique identifier of the payment, generated randomly

  This phase is present also in x-mode but with a different payload.

- Verification phase: The seller server can immediately verify if the payment is valid, completely off-chain, this is why the payments are instant. The sellers needs to have a local registry of the amounts spent by the buyer, optionally, they can call the `/verify` facilitator endpoint and send the payment payload they got, the facilitator can handle it for them.

  This phase is present also in x-mode but it's different, the verification is just of the payload format, not of the actual validity of the transaction.

- Response phase: the seller server can return the resource to the buyer, as requested.

  This phase is present also in x-mode but it can be done only after the Settlement phase.

- Settlement phase: the seller server can settle the transactions (also more than one per time) on the blockchain, if the seller properly verified them, they will be settled by the smart contract. The seller can settle them at any time and in parallel to execution, without compromising UX.

  This phase is present also in x-mode but it works differently.
