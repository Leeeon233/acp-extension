export const EXT_METHOD_NAME = {
    usage_update: 'acp_ext:session_usage_update',
    title_generate: 'acp_ext:session_title_generate',
    rate_limits: 'acp_ext:session_rate_limits'
} as const;

export type EXT_METHOD_NAME_TYPE =
    typeof EXT_METHOD_NAME[keyof typeof EXT_METHOD_NAME];

export type ModelUsage = {
    inputTokens: number,
    outputTokens: number,
    cacheReadInputTokens: number,
    cacheCreationInputTokens?: number,
    reasoningOutputTokens?: number,
    webSearchRequests?: number,
    costUSD?: number
}

export type SessionUsageUpdate = {
    usage: {
        inputTokens: number,
        outputTokens: number,
        cacheReadInputTokens: number,
        cacheCreationInputTokens?: number,
        reasoningOutputTokens?: number,
    },
    modelUsage?: { [key: string]: ModelUsage }
}

export type AccountPlanType = "free" | "plus" | "pro" | "team" | "business" | "enterprise" | "edu" | "unknown"

export type RateLimitSnapshot = {
    primary?: RateLimitWindow;
    secondary?: RateLimitWindow;
    credits?: CreditsSnapshot;
    planType?: AccountPlanType;
}

export type RateLimitWindow = {
    usedPercent: number;
    windowMinutes: number;
    resetsAt?: number
}

export type CreditsSnapshot = {
    hasCredits: boolean;
    unlimited: boolean;
    balance?: string;
}