export type FormData = {
  name: string;
  email?: string;
  phone?: string;
  serviceType?: string;
  // YouTube specific fields
  channelNiche?: string;
  videoLength?: string;
  postsPerWeek?: string;
  // Music visuals specific fields
  visualType?: string;
  trackType?: string;
  trackCount?: number;
  // Reels specific fields
  reelPlatform?: string;
  reelLength?: string;
  reelCount?: number;
  // Other project fields
  projectDescription?: string;
  timeline?: string;
  budget?: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  gradient: string;
  highlightColor: string;
  icon: JSX.Element;
  comingSoon?: boolean;
};
