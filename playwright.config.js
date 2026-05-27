const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./test/e2e",
  timeout: 10000,
  use: {
    baseURL: "http://127.0.0.1:8080",
    trace: "on-first-retry"
  },
  webServer: {
    command: "python3 -m http.server 8080 --bind 0.0.0.0",
    url: "http://127.0.0.1:8080",
    reuseExistingServer: !process.env.CI,
    timeout: 10000
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    }
  ]
});
