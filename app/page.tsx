"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import Ripple from "@/components/ui/ripple";
import NextLink from "next/link";
import { motion } from "framer-motion";
import TypingText from "@/components/typing-text";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 overflow-hidden">
      <Ripple></Ripple>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="inline-block max-w-xl text-center justify-center"
      >
        <span className={title()}>Creating&nbsp;</span>
        <span className={title({ color: "violet" })}>balance&nbsp;</span>
        <br />
        <span className={title()}>
          for your <span className={title({ color: "violet" })}>finances.</span>
        </span>
        <TypingText />
      </motion.div>

      <div className="flex gap-3">
        <Button
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
          endContent={<ChevronRight size={20} />}
          onClick={(e) => {
            router.push(siteConfig.navItems[1].href);
          }}
        >
          {/* <GithubIcon size={20} /> */}
          Voting
        </Button>
        <Button
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
            className: "font-medium",
          })}
          href={siteConfig.navItems[0].href}
          onClick={(e) => {
            router.push(siteConfig.navItems[0].href);
          }}
        >
          Staking Now
        </Button>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet
          hideCopyButton
          hideSymbol
          variant="bordered"
          className="opacity-50"
        >
          <span>
            Just join the community and start building your financial future.
          </span>
        </Snippet>
      </div>
    </section>
  );
}
