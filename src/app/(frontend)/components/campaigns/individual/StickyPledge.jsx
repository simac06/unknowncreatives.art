"use client";

import { Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";

export default function StickyPledge({ onPledgeClick, isRewardsTab }) {
  return (
    <AnimatePresence>
      {!isRewardsTab && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex w-full fixed bottom-0 px-12 pb-4 bg-gradient-to-t z-30 from-background to-transparent"
        >
          <Button
            color="primary"
            radius="sm"
            size="lg"
            fullWidth
            className="text-large font-bold"
            onPress={onPledgeClick}
          >
            Back This Project
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
