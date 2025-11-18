---
sidebar_position: 1
---

# Introduction

The Tesseract facilitator is a facilitator according to the [z402](../docs/z402/introduction.md) protocol, let's understand what it can do for you and how it works.

## Why z402 and not x402

x402 is _An open protocol for internet-native payments_, while z402 can be described as _x402 but with **zero** blockchain network delay_, it allows for truly instantaneous transactions and it's more secure and decentralized because it runs on audited smart contracts.

:::note
z402 doesn't aim to replace x402, but rather to improve it and extend its functionalities. We're working we the x402 team to bring you one feature rich protocol, stay tuned! In the meantime, you can enjoy z402's cutting edge features with Tesseract.
:::

You can discover the technical details about z402 in the [dedicated docs](../docs/z402/introduction.md).

## Why the facilitator

A facilitator is software, self-hosted or running in the cloud, used in z402 and x402 to abstract complexity from the users: buyer and seller; it allows to more quickly develop applications using z402. Tesseract offers a cloud hosted facilitator: the **Tesseract facilitator**.

A facilitator is optional because one could implement the protocol from scratch, even tho it's not recommended. Here is an overview of the available implementation options.

| Implementation                | Degree of control | Price                    | Maintenance cost                        |
| ----------------------------- | ----------------- | ------------------------ | --------------------------------------- |
| From scratch                  | Full control      | Free                     | Highest (you own all updates and fixes) |
| Facilitator self-hosted       | High control      | Free                     | Medium (server upkeep, monitoring)      |
| Tesseract facilitator (cloud) | Medium control    | < 0.01\$ per transaction | Lowest (provider handles operations)    |
