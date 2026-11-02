import type { AnchorHTMLAttributes } from "react";
import { profile } from "@/entities/profile";

type DownloadResumeLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "download">;

// Link that downloads the resume PDF; styling comes from the caller.
export function DownloadResumeLink(props: DownloadResumeLinkProps) {
  return <a href={profile.resume.url} download={profile.resume.fileName} {...props} />;
}
