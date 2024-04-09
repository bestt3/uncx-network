import React from "react";
import { SOCIAL_LINKS } from "@/app/util/social";
import TelegramIcon from "@/app/icons/telegram";
import XIcon from "@/app/icons/x";
import { YoutubeIcon } from "@/app/icons/youtube";
import MediumIcon from "@/app/icons/medium";
import styles from "./social.module.scss";
import Link from "next/link";
import classNames from "classnames";
import LinkedInIcon from "@/app/icons/linkedin";

interface SocialProps {
  className?: string;
  size?: "sm" | "md";
}

const Social = (props: SocialProps) => {
  const { className, size = "md", ...rest } = props;
  const Icon: any = {
    telegram: TelegramIcon,
    x: XIcon,
    youtube: YoutubeIcon,
    medium: MediumIcon,
    linkedin: LinkedInIcon,
  };

  const renderIcon = (channel: string) => {
    const IconComponent = Icon[channel];
    if (IconComponent) return <IconComponent />;

    return null;
  };

  return (
    <ul
      className={classNames("flex items-center gap-6 md:gap-10", className)}
      {...rest}
    >
      {Object.keys(SOCIAL_LINKS).map((channel) => (
        <li key={`social-link-${channel}`}>
          <Link
            className={classNames(
              styles["icon"],
              styles[`${channel}`],
              styles[`${size}`]
            )}
            href={SOCIAL_LINKS[channel]}
            target="_blank"
          >
            {renderIcon(channel)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Social;
