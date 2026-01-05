---
slug: z402-cost-and-scalability
title: z402's cost and scalability
authors: frollo
tags: [z402, x402]
---

<!-- TODO: write "An honest and complete ..." when you complete it... -->

An honest review of the costs and scalability of z402.

<!-- truncate -->

## Scope

In this article, we will analyze the costs and scalability of the two operative modes of z402: x-mode (equivalent to x402) and z-mode, we will also compare them with native blockchain transactions (ex. an ETH transfer on Ethereum).

We will evaluate the costs in terms of gas of an EVM compatible blockchain, while the scalability will be measured in terms of transaction per second relative to the type of transaction we consider (z402, x402 or native).

## Setup

To calculate the cost of x402 we set up a mock ERC20 token contract as follows.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @notice Simple ERC20 token with a faucet for testing
 */
contract MockToken is ERC20 {
    constructor() ERC20("MockToken", "MCK") {}

    /// @notice Mint tokens to msg.sender for testing
    function faucet(uint256 amount) external {
        _mint(msg.sender, amount);
    }

    /// @notice Mint tokens to a specified address
    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
```

Since x402 just forwards transactions to the blockchain, the x402 cost of making a transfer of that token is gas cost of using the `transfer` method, using foundry, we find that that cos is `56412` gas.
In order to make a fair comparison, also z402 will make transactions using the same contract.

On the other hand, we know that the transaction cost of a native transaction is `21000` gas.

## Costs

z402's z-mode works using a smart contract, in our first version, we have built 3 different functions that enable instant transactions, but with different gas costs. The savings are possible thanks to transactions batching, i.e. the smart contract can settle multiple transactions at once.

### Notations

We consider buyers (those who pay) and sellers (those who get paid) and tokens (ERC20 tokens).

The smart contract functions we consider are:

- `settleBatch`: settles multiple payments regardless of the buyer, the seller and the token. Emits an event for each transaction + a summary event of all the transactions
- `settleBatchSingleTokenSingleSeller`: settles multiple payments with a fixed seller and token and regardless of the buyer. Emits an event for each transaction + a summary event of all the transactions
- `settleBatchSingleTokenSingleSellerSingleEmit`: settles multiple payments with a fixed seller and token and regardless of the buyer. Emits a summary event of all the transactions

Using the functions `settleBatchSingleTokenSingleSeller` or `settleBatchSingleTokenSingleSellerSingleEmit` in place of `settleBatch` doesn't forbid the ability of transacting with different seller or tokens, it just forces the users to batch transactions in a more ordered way (so grouping them by seller and token), we will show that this leads to greater gas savings.
In a real world scenario, we expect users (sellers) to use the function `settleBatchSingleTokenSingleSellerSingleEmit` for most use cases.

These functions are called by the sellers to settle payments, while buyers need to call the `approve` function to enable z-mode for sellers just once, for this reason its cost becomes negligible on a big amount of transactions.
We will consider its cost for buyers in a future update of this post, stay tuned!

### Single transaction cost

The following graph shows on the horizontal axis the "batch size", i.e. the number of transactions processed and on the vertical axis the gas cost per single transaction.

![z402 gas cost compared to x402 chart](/topics/z402/stats/z402_gas_cost_compared_to_x402_graph.png)

x402, and z402 x-mode, can process a single transaction per time, therefore their cost per transaction is the same.
Instead, z402 can batch transaction and we can notice that the cost per transaction decreases with the increasing number of transactions, this is true for all 3 the functions.
In particular, the `settleBatchSingleTokenSingleSeller` almost reaches the same cost of x402, while `settleBatchSingleTokenSingleSellerSingleEmit` can costs less than half the price of x402.

We will now consider another graph, that on the horizontal axis has the batch size and on the vertical axis has the ratio of the gas cost of the payment method and the gas cost of x402.

![z402 gas cost ratio compared to x402 chart](/topics/z402/stats/z402_gas_cost_ratio_compared_to_x402_graph.png)

It is completely similar to the previous graph but it's more easy to understand.

Finally we give some numerical stats:

```
Min stats:
settleBatch → min gas/payment: 35045.03 (ratio 0.62× x402, 1.67× native) at batch size 194
settleBatchSingleTokenSingleSeller → min gas/payment: 21778.15 (ratio 0.39× x402, 1.04× native) at batch size 224
settleBatchSingleTokenSingleSellerSingleEmit → min gas/payment: 10121.45 (ratio 0.18× x402, 0.48× native) at batch size 208

Break even stats:
settleBatch → cheaper than x402 at batch size 4 (55472.00 gas/payment, 0.98× x402, 2.64× native)
settleBatchSingleTokenSingleSeller → cheaper than x402 at batch size 3 (53726.33 gas/payment, 0.95× x402, 2.56× native)
settleBatchSingleTokenSingleSellerSingleEmit → cheaper than x402 at batch size 2 (52635.50 gas/payment, 0.93× x402, 2.51× native)

Step stats:
settleBatch — selected batch sizes
  batch    1: 119324.00 gas/payment (2.12× x402, 5.68× native)
  batch    5: 51221.20 gas/payment (0.91× x402, 2.44× native)
  batch   10: 42717.20 gas/payment (0.76× x402, 2.03× native)
  batch   15: 39891.60 gas/payment (0.71× x402, 1.90× native)
  batch   20: 38480.60 gas/payment (0.68× x402, 1.83× native)
  batch   25: 37643.68 gas/payment (0.67× x402, 1.79× native)
  batch   50: 35992.30 gas/payment (0.64× x402, 1.71× native)
  batch   75: 35482.45 gas/payment (0.63× x402, 1.69× native)
  batch  100: 35250.68 gas/payment (0.62× x402, 1.68× native)
  batch  125: 35138.00 gas/payment (0.62× x402, 1.67× native)
  batch  150: 35076.48 gas/payment (0.62× x402, 1.67× native)
  batch  250: 35072.36 gas/payment (0.62× x402, 1.67× native)

settleBatchSingleTokenSingleSeller — selected batch sizes
  batch    1: 119358.00 gas/payment (2.12× x402, 5.68× native)
  batch    5: 40606.00 gas/payment (0.72× x402, 1.93× native)
  batch   10: 30769.60 gas/payment (0.55× x402, 1.47× native)
  batch   15: 27498.93 gas/payment (0.49× x402, 1.31× native)
  batch   20: 25864.85 gas/payment (0.46× x402, 1.23× native)
  batch   25: 24893.52 gas/payment (0.44× x402, 1.19× native)
  batch   50: 22969.32 gas/payment (0.41× x402, 1.09× native)
  batch   75: 22364.15 gas/payment (0.40× x402, 1.06× native)
  batch  100: 22081.41 gas/payment (0.39× x402, 1.05× native)
  batch  125: 21935.52 gas/payment (0.39× x402, 1.04× native)
  batch  150: 21849.66 gas/payment (0.39× x402, 1.04× native)
  batch  250: 21783.68 gas/payment (0.39× x402, 1.04× native)

settleBatchSingleTokenSingleSellerSingleEmit — selected batch sizes
  batch    1: 95958.00 gas/payment (1.70× x402, 4.57× native)
  batch    5: 26644.20 gas/payment (0.47× x402, 1.27× native)
  batch   10: 17987.80 gas/payment (0.32× x402, 0.86× native)
  batch   15: 15110.40 gas/payment (0.27× x402, 0.72× native)
  batch   20: 13672.90 gas/payment (0.24× x402, 0.65× native)
  batch   25: 12819.52 gas/payment (0.23× x402, 0.61× native)
  batch   50: 11131.30 gas/payment (0.20× x402, 0.53× native)
  batch   75: 10604.80 gas/payment (0.19× x402, 0.50× native)
  batch  100: 10361.39 gas/payment (0.18× x402, 0.49× native)
  batch  125: 10239.10 gas/payment (0.18× x402, 0.49× native)
  batch  150: 10168.97 gas/payment (0.18× x402, 0.48× native)
  batch  250: 10134.44 gas/payment (0.18× x402, 0.48× native)
```

## Scalability

We evaluate scalability in terms of transactions per second (TPS), where the transactions are relative to the technology: z402, x402 or blockchain native transactions.

Let $X \in \{\text{z402}, \text{x402}, \text{blockchain native}\}$ be a given technology. We define

- $B_n(X)$: the maximum number of transactions that can fit into a block for the technology $X$
- $B_t$: the time taken to produce and confirm a block (in seconds), this is independent on the technology $X$
- $B_g$: the gas limit of a block, this is independent on the technology $X$
- $g(X)$: the maximum average gas cost of $B_n(X)$ transactions, performed with the technology $X$, that fit into a block, i.e. $B_g / B_n(X)$.

We will calculate the TPS of the technology $X$ with this formula:

$$
\text{TPS}(X) = \frac{B_n(X)}{B_t} = \frac{B_g}{B_t \, g(X)}
$$

we use some approximations of $g(X)$ for each technology: these are not exact because the $B_t$ is not an exact multiple of the average gas costs for a transaction (it is not true that $B_n(X) g(X) = B_g$).

- $g(\text{native}) = 21000$
- $g(\text{x402}) = 56412$
- $g(z402) = 10121.45$

Then we can compare TPS for different technologies:

$$
\begin{align*}
&\frac{\text{TPS}(\text{z402})}{\text{TPS}(\text{blockchain native})} = \frac{g(\text{blockchain native})}{g(\text{z402})} = 2.07\\
&\frac{\text{TPS}(\text{x402})}{\text{TPS}(\text{blockchain native})} = \frac{g(\text{blockchain native})}{g(\text{x402})} = 0.37\\
&\frac{\text{TPS}(\text{z402})}{\text{TPS}(\text{x402})} = \frac{g(\text{x402})}{g(\text{z402})} = 5.57\\
\end{align*}
$$

that means:

- z402 TPS are 2x the blockchain native TPS
- x402 TPS are almost 40\% of blockchain native TPS
- z402 TPS are more than 5x x402 TPS
