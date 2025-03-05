import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'on',
    },
    reporter: [['list'], ['json', { outputFile: 'results.json' }]],
    timeout: 60000,

    projects: [

        { name: 'chromium', use: { browserName: 'chromium' } },

        { name: 'firefox', use: { browserName: 'firefox' } },

        { name: 'webkit', use: { browserName: 'webkit' } }

    ]
});