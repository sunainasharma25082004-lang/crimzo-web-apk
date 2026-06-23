import { useEffect } from 'react';

const DEFAULT_TITLE = 'CRIMZO — Connect, Go Live & Earn Rewards';

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — CRIMZO` : DEFAULT_TITLE;
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title]);
}