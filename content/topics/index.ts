import type { Topic } from "@/lib/types";
import { topic as whatIsEthereum } from "./what-is-ethereum";
import { topic as etherTheAsset } from "./ether-the-asset";
import { topic as proofOfStake } from "./proof-of-stake";
import { topic as smartContractsEvm } from "./smart-contracts-evm";
import { topic as defiOpenFinance } from "./defi-open-finance";
import { topic as stablecoins } from "./stablecoins";
import { topic as stakingAndYield } from "./staking-and-yield";
import { topic as layer2Rollups } from "./layer-2-rollups";
import { topic as zeroKnowledge } from "./zero-knowledge";
import { topic as futureOfFinance } from "./future-of-finance";
import { topic as cypherpunkOrigins } from "./cypherpunk-origins";
import { topic as selfCustody } from "./self-custody";
import { topic as daosGovernance } from "./daos-governance";
import { topic as nftsDigitalArt } from "./nfts-digital-art";

export const topics: Topic[] = [
  // foundations
  whatIsEthereum,
  etherTheAsset,
  proofOfStake,
  smartContractsEvm,
  // defi
  defiOpenFinance,
  stablecoins,
  stakingAndYield,
  // frontier
  layer2Rollups,
  zeroKnowledge,
  futureOfFinance,
  // culture
  cypherpunkOrigins,
  selfCustody,
  daosGovernance,
  nftsDigitalArt,
];

export function topicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}
