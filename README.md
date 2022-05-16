# My CV

Just a simple github page for my CV.

## Run it locally

With the docker daemon installed, run this command to get it running in localhost:4000

```bash
    docker compose up
```

## PDF generation

In order to generate a pdf from the CV, execute:

```bash
    npm run to-pdf
```

The output will be in [pdf/dbelenguer-cv.pdf](pdf/dbelenguer-cv.pdf). The page is configured to have a link to this specific path in the description.

Can be customized adding css rules in [the custom css file](pdf/custom.css)
