# Como rodar uma versão local deste projeto

### clonar este repositório

```bash
git clone https://github.com/jos3duardo/pwa-firebase.git
```

### instale os pacotes

entre no diretorio do projeto e execute o comando abaixo
```bash
npm i
```

### rodando a aplicação

para rodar una instancia local
```bash
npm start
```

### fazendo o build para produção
```bash
npm run build
```
regras do firebase
```bash
{
  "rules": {
    "files": {
      "$uid": {
        ".read": "$uid === auth.uid || root.child('/shared/').child(auth.uid).child($uid).exists()",
        ".write": "$uid === auth.uid",
        ".validate": " root.child('/users/').child($uid).child('/usage').val() == null ||
        root.child('/users/').child($uid).child('/usage').val() <= 1073741824"  
      }
    },
    "users": {
    "$uid": {
      ".read": "$uid === auth.uid",
      ".write": "$uid === auth.uid"
    	}
  	},
    "sharer": {
      ".read": "auth.uid !== null",
      ".write": "auth.uid !== null"
  	},
    "shared": {
      ".read": "auth.uid !== null",
      ".write": "auth.uid !== null"
  	}
  }
}
```