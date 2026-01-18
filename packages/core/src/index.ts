export const EXT_METHOD_NAME = {
    usage_update: 'lody:session_usage_update',
    title_generate: 'lody:session_title_generate',
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