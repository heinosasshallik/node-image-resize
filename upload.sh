#!/bin/sh

for filepath in ./out/*; do
  filename=${filepath##*/}
  s3path="data/8/products/${filename}"
  echo "Uploading file: ${filename} to ${s3path}";
  aws s3api put-object --bucket yourbucketname --key "${s3path}" --body "${filepath}"
	
done
