module.exports = {
  apps: [
    {
      name: 'Nest-Server',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: 'dist/main.js',
    },
  ],
}
