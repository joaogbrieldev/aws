# 1o criar arquivo de politicas de segunca
# 2o attachar a role para a nossa lambda

aws --version

ROLE_NAME=lambda-example
NODEJS_VERSION=nodejs16.x
FUNCTION_NAME=myfirst-cli

mkdir -p logs

aws iam create-role \
  --role-name $ROLE_NAME \
  --assume-role-policy-document file://policies.json \
  | tee logs/1.role.log

POLICY_ARN="arn:aws:iam::997398390509:role/lambda-example"

# 3o passo, criar o arquvi
# 4o zipar o projeto
zip function.zip index.js

aws lambda create-function \
  --function-name $FUNCTION_NAME \
  --zip-file fileb://function.zip \
  --handler index.handler \
  --runtime $NODEJS_VERSION \
  --role "arn:aws:iam::997398390509:role/lambda-example" \
  | tee logs/2.lambda-create.log 

sleep 1

aws lambda invoke \
  --function-name $FUNCTION_NAME logs/3.lambda-exec.log \
  --log-type Tail \
  --query 'LogResult' \
  --output text | base64 -d

# atualizar
zip function.zip index.js

aws lambda update-function-code \
  --zip-file fileb://function.zip \
  --function-name $FUNCTION_NAME \
  --publish \
  | tee logs/4.lambda-update.log

aws lambda invoke \
  --function-name $FUNCTION_NAME logs/5.lambda-exec-update.log \
  --log-type Tail \
  --query 'LogResult' \
  --cli-binary-format raw-in-base64-out \
  --payload '{"name":"joaofigueiredo"}' \
  --output text | base64 -d

aws lambda delete-function \
  --function-name $FUNCTION_NAME \
  | tee logs/6.lambda-rm.log

aws iam delete-role \
  --role-name $ROLE_NAME