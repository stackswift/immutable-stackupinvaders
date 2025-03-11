window.passport = new window.immutable.passport.Passport({
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
    clientId: 'Fye358nqBdR0NBnA6FdgTVkrNEi4uyXG',
    redirectUri: 'https://crack-regularly-fawn.ngrok-free.app',
    logoutRedirectUri: 'https://crack-regularly-fawn.ngrok-free.app/logout.html',
    audience: 'platform_api',
    scope: 'openid offline_access email transact'
  });

