echo '{"icons": [' > list.json
find -type f -printf '"%f",\n' | sed "s/.js//g" >> list.json
echo ']}' >> list.json
