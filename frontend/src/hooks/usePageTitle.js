import { useEffect } from 'react';
import { SITE_URL } from '../constants/appInfo';

const DEFAULT_TITLE = 'CRIMZO — Connect, Go Live & Earn Rewards';

function setMetaLink(rel, href) {
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    document.head.appendChild(link);
  }
  link.href = href;
}

function setMetaProperty(property, content) {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

export function usePageTitle(title, path = '') {
  useEffect(() => {
    const pageUrl = path ? `${SITE_URL}${path}` : SITE_URL;

    document.title = title ? `${title} — CRIMZO` : DEFAULT_TITLE;
    setMetaLink('canonical', pageUrl);
    setMetaProperty('og:url', pageUrl);

    return () => {
      document.title = DEFAULT_TITLE;
      setMetaLink('canonical', SITE_URL);
      setMetaProperty('og:url', SITE_URL);
    };
  }, [title, path]);
}