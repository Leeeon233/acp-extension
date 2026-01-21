export const EXT_METHOD_NAME = {
    usage_update: 'acp_ext:session_usage_update',
    rate_limits: 'acp_ext:session_rate_limits',
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
        contextWindow?: number,
    },
    modelUsage?: { [key: string]: ModelUsage }
}

export type UsageData = {
    planName: string | null;  // 'Max', 'Pro', or null for API users
    fiveHour: number | null;
    sevenDay: number | null;
    fiveHourResetAt: number | null;
    sevenDayResetAt: number | null;
    apiUnavailable?: boolean; // true if API call failed (user should check DEBUG logs)
}