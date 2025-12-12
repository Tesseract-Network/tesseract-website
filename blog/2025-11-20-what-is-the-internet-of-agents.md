---
slug: what-is-the-internet-of-agents
title: What is the Internet of Agents
authors: frollo
tags: [internet of agents, z402, x402]
---

# What is the Internet of Agents

AI agents are playing an increasingly important role in our lives, they're becoming always more capable and autonomous, the **Internet of Agents** is what will make them an organism that is greater than the sum of its parts.

<!-- truncate -->

## History and motivation

Each day millions of internet transactions are carried out, these transactions are done through different UIs and payment processors, there's no standard governing them. But why we would need it? Essentially a standard makes things easier, for developers and for users, moreover it creates a more fair environment, where there are no few "gatekeepers" companies handling the payments and can charge high fees, there's just the protocol and everybody can use it.

It's weird that such a universal human primitive like the payment is not encoded into the internet as a fundamental protocol, this wasn't supposed to be case, in fact, in 1997 in the [specification of HTTP/1.1](https://www.rfc-editor.org/rfc/rfc2068) a `402 - Payment Required` status code was added and kept for "later use". Still today, the 402 status code is considered non standard and there's no internet native payment protocol. But this is about to change.

### Requirements for an internet native payment protocol

We believe that an internet native protocol should have the following characteristics:

- No protocol fees: the protocol itself should be free to use. There could be some fees due to the technology used to make the transaction possible tho (blockchain for instance).
- no central control: the protocol shouldn't controlled by any individual or organization with conflicts of interest.
- integrated with HTTP: the protocol should be implemented in HTTP using the 402 status code, as per the 1997's original spec.
- transactions have with no minimum (or very low): it must be possible to make subcent transactions.
- just as fast as the internet: the payment protocol shouldn't introduce any delay due to the protocol itself. When making a transaction as an HTTP request, it should be immediately clear that the transaction is valid, without the need of triggering more network requests.

The first protocol to try tackle these problems was [x402](https://x402.org), it satisfies (more or less[^1]) all the requirements, except the last: x402 is **not** as fast as the internet, it is as fast as the blockchain it uses. We will later see how **z402** solved the last problem, nevertheless, x402 enabled new interesting use cases, in particular the constitution an **Internet of Agents**.

## Internet of Agents architecture

The expression Internet of Agents (IoA) takes inspiration from the Internet of Things (IoT), that is a network of computers, typically sensors and low power devices, that communicate with each other and share data. The Internet of Agents is similar, it is a network of specialized agents (AIs or humans) that perform complex tasks autonomously by collaborating with each other and paying for the services/goods that they offer.

In such a system, you will have humans, AI and potentially other programs able to run the correct software to pay and build: it's a new kind of economy where AI agents and humans can work together in a similar way to freelancing, but much more granular. You could have an AI agent offering a to generate an image for 0.0001\$ or a human asking for 0.005\$ to access an exclusive content; in general, you can unlock pay-per-use models natively, without the sellers and buyers having to set up API keys, without a minimum amount and with no funds lock in.
It's also possible to sell goods, why not? This network has a payment protocol after all and you can set it up not only for repeatable services, but also for a finite sale of goods or for the access to a specific resource.

So, to build such a network, you need to equip it with the following:

- Discovery mechanism: agents need to find each other and know what services they offer
- Communication protocol: agents need to have a common communication protocol to start, end and update tasks
- Payment protocol: agents need to pay for the tasks performed by other agents.
- Reputation system (optional): a system to assign and retrieve a score to sellers based on the quality of the output they produce.

Google's [A2A protocol](https://a2a-protocol.org/) seems the emerging protocol for the internet of agents: it offers [Agent Cards](https://a2a-protocol.org/latest/topics/agent-discovery/) for discovery, it has a communication protocol but no payment protocol nor reputation system. It is possible to extend A2A with [A2P](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol), adding a payment protocol that is also compatible with x402 and z402. Finally, the [EIP 8004](https://eips.ethereum.org/EIPS/eip-8004) improves A2A discovery capabilities and adds a reputation system.

## z402

[z402](/docs/z402/introduction) is an **extension** of x402 that satisfies **all** the [requirements for an internet native payment protocol](#requirements-for-an-internet-native-payment-protocol), in particular it is as fast as the internet, that is doesn't add any delay to HTTP request containing payment and it doesn't require multiple HTTP requests to validate the payment and deliver a result.
Broadly speaking, z402 uses a smart contract as escrow for the payments and releases the funds only if a valid cryptographic proof of payment is given, the full verification process is done off-chain, allowing to bypass the delay of the underlining blockchain and to perform instant transactions. You can read more how it works in the [docs](/docs/z402/introduction).

### Comparison with legacy methods

z402 is

### Comparison with x402

able to satisfy all these requirements while also being more decentralized than x402 in common settings. z402 was conceived independently from x402, but eventually decided to integrate all its features and to be an extension of it, being 100% compatibile, by design. -->

At the time of writing I'm not aware of any popular reputation system.

[^1]: In some (fairly common) cases, x402 fails to be truly decentralized. For example if you run x402 on Base using Flashblocks (currently the most used option, since x402 was made by Base), Base infrastructure becomes a centralization point. See the [comparison with x402](#comparison-with-x402) for more.
