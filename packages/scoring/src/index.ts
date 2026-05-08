export type CompatibilityBand = "low" | "medium" | "high" | "excellent";
export type TemperatureBand = "cold" | "warm" | "hot";

export interface ScoreRange {
  readonly min: number;
  readonly max: number;
}

const DEFAULT_RANGE: ScoreRange = { min: 0, max: 100 };

export function normalizeScore(value: number, range: ScoreRange = DEFAULT_RANGE): number {
  if (range.max <= range.min) {
    throw new Error("Score range max must be greater than min.");
  }

  if (!Number.isFinite(value)) {
    return 0;
  }

  const bounded = Math.min(Math.max(value, range.min), range.max);
  return Math.round(((bounded - range.min) / (range.max - range.min)) * 100);
}

export function calculateCompatibilityBand(score: number): CompatibilityBand {
  const normalized = normalizeScore(score);

  if (normalized >= 85) {
    return "excellent";
  }

  if (normalized >= 70) {
    return "high";
  }

  if (normalized >= 45) {
    return "medium";
  }

  return "low";
}

export function calculateTemperatureBand(score: number): TemperatureBand {
  const normalized = normalizeScore(score);

  if (normalized >= 75) {
    return "hot";
  }

  if (normalized >= 40) {
    return "warm";
  }

  return "cold";
}
