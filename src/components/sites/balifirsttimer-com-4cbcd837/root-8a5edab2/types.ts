export interface SiteLink { label: string; href: string; }
export interface FeatureService extends SiteLink {
  description: string;
  image: string;
  imageAlt: string;
}
export interface ServiceItem extends FeatureService { slug: string; }
export interface StatItem { value: string; label: string; }
