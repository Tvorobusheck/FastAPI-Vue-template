wget http://localhost:8000/openapi.json -O scripts/openapi.json
docker run --rm \
  -v $PWD:/local openapitools/openapi-generator-cli generate \
  -i /local/scripts/openapi.json \
  -g typescript \
  -o /local/api
rm scripts/openapi.json