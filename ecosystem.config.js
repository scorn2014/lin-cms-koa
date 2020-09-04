module.exports = {
  apps: [
    {
      name: "lin-cms",
      script: "index.js",
      watch: true,
      env: {
        NODE_ENV: "development",
      },
    },
  ],

  deploy: {
    production: {
      user: "root",
      host: "119.28.221.166",
      ref: "origin/master",
      repo: "git@github.com:scorn2014/lin-cms-koa.git",
      path: "/root/app/lin-cms-koa",
      "pre-deploy-local": "ssh tencent_HK -t",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
