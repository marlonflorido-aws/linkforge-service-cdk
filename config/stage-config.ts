export interface StageConfig {
    stageName: string;
    account: string;
    region: string;
    isProd: boolean;
}

export const BETA: StageConfig = {
    stageName: 'beta',
    account: '184227885433',
    region: 'us-west-2',
    isProd: false,
};

export const PROD: StageConfig = {
    stageName: 'prod',
    account: '184227885433',
    region: 'us-east-1',
    isProd: true,
};
