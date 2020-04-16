<!-- PROJECT SHIELDS --> <!-- *** I'm using markdown "reference style" links for readability. *** Reference links are enclosed in brackets [ ] instead of parentheses ( ). *** See the bottom of this document for the declaration of the reference variables *** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use. *** https://www.markdownguide.org/basic-syntax/#reference-style-links -->

![Master Build](https://github.com/AsylumAdvice/app/workflows/Node.js%20CI/badge.svg?branch=master)

<!-- PROJECT LOGO --><br>

[![Logo](public/images/asylum-advice-logo.svg)](https://asylumadvice.github.io/app)

https://asylumadvice.github.io/app

# Asylum Advice – Easy Access to Legal Advice

Asylum Advice helps asylum seekers find the information that is relevant to their asylum procedure: finding advisors and lawyers.

# Contributing

Follow the official [ReactJS tutorial](https://reactjs.org/tutorial/tutorial.html) to get started.

## Installation

1. Clone the app

    ```sh
    git clone https://github.com/AsylumAdvice/app.git
    ```

2. Install NPM packages

    ```sh
    cd app
    npm install
    ```

3. Build the project

    ```sh
    npm start
    ```

## Mapbox Token

To render the map and to use the geocoding funtion, you will need a local Mabpox API token.

If you don't have an account already, create one at [Mapbox](https://account.mapbox.com/auth/signup/). You can use the free plan. Once your account is set up, create a token from your account settings by selecting "Create token". You may use your default token, or create a new one specifically for this project.

Next, you need to set `REACT_APP_MAPBOX_ACCESS_TOKEN`. In the project root create a dotfile called `.env.local` and add your token. For example:

```sh
REACT_APP_MAPBOX_TOKEN="pk.hgibweHyedpNdpedh"
```

You should now be good to go.

# License

Distributed under the Apache License 2.0. See `LICENSE` for more information.

<!-- CONTACT -->

# Contact

<!-- Your Name - [@@stevejthorpe](https://twitter.com/@stevejthorpe) - thorpe.steve@gmail.com -->

Website: <https://asylumadvice.org>

Slack: <https://asylumadvice.slack.com>

<!-- ACKNOWLEDGEMENTS -->

<!-- # Acknowledgements

- []()
- []()
- []() -->

<!-- MARKDOWN LINKS & IMAGES --> <!-- https://www.markdownguide.org/basic-syntax/#reference-style-links --> <!-- [linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555 [linkedin-url]: https://linkedin.com/in/othneildrew --> <!-- [product-screenshot]: images/screenshot.png -->

[contributors-shield]: https://img.shields.io/github/contributors/AsylumAdvice/app?style=flat
[contributors-url]: https://github.com/AsylumAdvice/app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AsylumAdvice/app?style=flat
[forks-url]: https://github.com/AsylumAdvice/app/network/members
[issues-shield]: https://img.shields.io/github/issues/AsylumAdvice/app
[issues-url]: https://github.com/AsylumAdvice/app/issues
[license-shield]: https://img.shields.io/hexpm/l/plug
[license-url]: https://github.com/AsylumAdvice/app/blob/master/LICENSE
[stars-shield]: https://img.shields.io/github/stars/AsylumAdvice/app
[stars-url]: https://github.com/AsylumAdvice/app/stargazers
