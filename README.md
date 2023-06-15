# Deals Scraper README

## Introduction

Deals Scraper is a web application that allows users to scrape deals from different online food stores and display them based on the user's locality and store outlet. This README provides an overview of the project, its features, and instructions for setting it up and running.

## Features

- Scrapes deals from various online food stores
- Filters deals based on the user's locality and store outlet
- Provides an intuitive user interface for easy navigation
- Supports client-server architecture
- Built with the MERN stack (MongoDB, Express.js, React.js, Node.js)

## Prerequisites

Before running the Deals Scraper application, make sure you have the following software installed:

- Node.js (v12 or above)
- MongoDB
- npm (Node Package Manager)
- Docker (for backend deployment)

## Installation

1. Clone the repository:
```
git clone https://github.com/henishpatel9045/deals-scraper.git
```

2. Navigate to the backend directory:
```
cd deals-scraper/backend
```

3. Build and run the Docker container for the backend:
```
docker build -t deals-scraper-backend .
docker run -p 8080:8080 -d deals-scraper-backend
```

4. Navigate to the frontend directory:
```
cd ../frontend
```

5. Install client dependencies:
```
npm install
```


## Usage

1. Start the frontend server:
```
npm run dev
```

2. Open your browser and visit http://localhost:3000 to access the Deals Scraper application.

3. On the homepage, you will see a search bar where you can enter your locality.

4. Select the desired outlet of the store from the provided options.

5. Click on the "Search" button to scrape deals specific to your location and store outlet.

6. The deals will be displayed on the page with relevant details such as the item name, price, and discount.

7. You can scroll through the deals or use the pagination controls to navigate through the results.

## Contributing

We welcome contributions to the Deals Scraper project. To contribute, please follow these steps:

1. Fork the repository from the Deals Scraper GitHub page.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request detailing your changes and their benefits.


## Licence

The Deals Scraper project is licensed under the MIT License. Please refer to the LICENSE file for more information.


## Contact

For any inquiries or suggestions, please contact the project maintainer:

- Email: henishpatel9045@gmail.com
This README provides a brief overview of the Deals Scraper project. For detailed documentation and technical information, please refer to the project's source code and documentation files.

Happy scraping!