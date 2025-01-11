# instalar
npm i -g serverless@3.16.0

# sls para inicializar
# escolhi o http api template
# deploy - Yes
sls

# sempre que fizer alteração
sls deploy

# pega as infos da aws
sls info

# invokar local
sls invoke local -f api 

# invokar em prod
sls invoke -f api

# matar todo mundo
sls remove