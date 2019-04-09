#!/usr/bin/env bash

CLIENT_BUCKET_DEV="koodarinpalkka.fi"
CLIENT_DISTRIBUTION="E1US4DSKQ0939O"


echo Deploying 

aws s3 rm s3://$CLIENT_BUCKET_DEV --recursive # Delete existing deployment.
aws s3 cp ./build/ s3://$CLIENT_BUCKET_DEV --recursive --acl public-read

# Create Cloudfront distribution invalidation.
# Needs distribution id to.
aws cloudfront create-invalidation --distribution-id $CLIENT_DISTRIBUTION --paths "/*"

