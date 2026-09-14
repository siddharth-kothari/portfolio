type Bucket = Map<string, number[]>;

const globalForRate = globalThis as unknown as { contactHits?: Bucket };

function getStore(): Bucket {
  if (!globalForRate.contactHits) {
    globalForRate.contactHits = new Map();
  }
  return globalForRate.contactHits;
}

export function isRateLimited(key: string, limit = 5, windowMs = 60 * 60 * 1000) {
  const store = getStore();
  const now = Date.now();
  const recent = (store.get(key) ?? []).filter((time) => now - time < windowMs);

  if (recent.length >= limit) {
    store.set(key, recent);
    return true;
  }

  recent.push(now);
  store.set(key, recent);
  return false;
}
