"use client";
import { title } from "@/components/primitives";
import StakingTable from "@/components/staking-table";
import { motion } from "framer-motion";
export default function DocsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 className={title()}>Staking</motion.h1>
      <motion.p className="opacity-80 leading-8 text-left">
        Staking is the process of actively participating in transaction
        validation (similar to mining) on a proof-of-stake (PoS) blockchain. On
        these blockchains, anyone with a minimum-required balance of a specific
        cryptocurrency can validate transactions and earn Staking rewards.
      </motion.p>

      <div>
        <StakingTable />
      </div>
    </motion.div>
  );
}
