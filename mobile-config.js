App.info({
    id: 'com.exemplo.meuapp',
    name: 'MeuApp',
    description: 'Descrição do meu aplicativo.',
    version: '1.0.0',
    buildNumber: '100'
});

App.appendToConfig(`
  <universal-links>
    <host name="beproud.meteorapp.com" />
  </universal-links>
`);