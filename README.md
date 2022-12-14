<br />
<p align="center">

  <h3 align="center">Telegram</h3>
  <p align="center">
    <image align="center" width="400" src='./public/telegram_logo.png' />
  </p>
  <p align="center">
    <a href="https://telegram-rhefrz.vercel.app">View Demo</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Project Structure](#project-structure)
  * [Screenshots](#screenshots)
  * [Package Modules](#package-modules)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Contributing](#contributing)
* [Related Project](#related-project)



<!-- ABOUT THE PROJECT -->
## About The Project


Telegram is a realtime chat application. Users are able to find other user contacts and send messages and files to them. Users might take a look at their profile information, such as bio, email and photo profile.


### Project Structure
```
|── TelegramApp
   |── public            # Public Assets
   |── screenshot        # Screenshots of the application
   |── src               # Project source code
       |── components    # Application components
       |── pages         # Pages source code
       |── redux         # State management
       |── router        # Endpoint
   |── .env              # Environment variables   
   |── .gitignore        # Files that should be ignored
   |── README.md         # Readme
```

### Screenshots
<details>
  <summary>
    Login Page
  </summary>
<img src="/screenshot/login.png" alt="login" />
</details>

<details>
  <summary>
    Register Page
  </summary>
<img src="/screenshot/register.png" alt="register" />
</details>

<details>
  <summary>
    Landing Page
  </summary>
<img src="/screenshot/landing.png" alt="landing" />
</details>

<details>
  <summary>
    Chat Private Room
  </summary>
<img src="/screenshot/chat_room.png" alt="chat room" />
</details>

<details>
  <summary>
    Search User
  </summary>
<img src="/screenshot/search_user.png" alt="search user" />
</details>

<details>
  <summary>
    Profile Setting 1
  </summary>
<img src="/screenshot/profile_setting.png" alt="profile setting" />
</details>

<details>
  <summary>
    Profile Setting 2
  </summary>
<img src="/screenshot/profile_setting 2.png" alt="profile setting 2" />
</details>

<details>
  <summary>
    Other User's Profile
  </summary>
<img src="/screenshot/other_profile.png" alt="other profile" />
</details>

### Package Modules

Below are lists of modules used in this application:

* [React JS](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Axios](https://axios-http.com/)
* [Redux](https://redux.js.org/)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Socket.io Client](https://socket.io/docs/v4/client-api/)
* [Reactstrap](https://reactstrap.github.io)
* [FontAwesome](https://fontawesome.com)


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This is an example of things you need to use the application and how to install them.

* [node.js](https://nodejs.org/en/download/)

### Installation

1. Clone the repo
```sh
git clone https://github.com/reijiren/TelegramApp.git
```
2. Install NPM packages
```sh
npm install
```
3. Add .env file at your root folder project, and add the following
```sh
REACT_APP_BACKEND_URL = your_api_url

```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b your/branch`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/yourbranch`)
5. Open a Pull Request


<!-- RELATED PROJECT -->
## Related Project
[Telegram RESTful API](https://telegramapi-rhefrz.up.railway.app) is used in this application.
* [View API Documentation](https://github.com/reijiren/TelegramAPI)

