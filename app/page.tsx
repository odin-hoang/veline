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
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 overflow-hidden">
      <Ripple></Ripple>
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Creating&nbsp;</span>
        <span className={title({ color: "violet" })}>balance&nbsp;</span>
        <br />
        <span className={title()}>
          for your <span className={title({ color: "violet" })}>finances.</span>
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Justify, seed and grow your financial future with our tools.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          {/* <GithubIcon size={20} /> */}
          Voting
        </Link>
        <NextLink
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.navItems[0].href}
        >
          Start Now
        </NextLink>
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
