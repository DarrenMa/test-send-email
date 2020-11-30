# test-send-email

A simple service to test if you're able to send an email from the host machine.

change the settings in the docker-compose.yml file to your preference then `docker-compose up`

```
    environment:
      - HOST='smtp.gmail.com'
      - PORT=587
      - MAILUSER='someone@gmail.com'
      - PASS='password'
      - FROM='someone@gmail.com'
      - TO='someone@gmail.com'
```

If sending with gmail beware that you must set “Allow less secure apps: OFF”.

// https://stackoverflow.com/a/59084168/234543
