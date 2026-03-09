# WEB103 Project 1 - Unearthed

Submitted by: Oscar Mochizaki

About this web app: Unearthed is a list-based web app that displays five unique gift ideas. Users can browse the gifts, click each one to view a detailed page with all of its information, and see a custom 404 page for invalid routes. The app is built with HTML, CSS, JavaScript, Express, and styled with PicoCSS.**

Time spent: 8 hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
- [x] **Each detail view is a unique endpoint, such as `localhost:3000/gifts/disco-ball-candle` and `localhost:3000/gifts/lego-flower-bouquet-kit`**
- [x] **The unique URL is shown in the video walkthrough**
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] **The web app is styled using Picocss**

The following **optional** features are implemented:

- [x] The web app displays items in a unique format using cards

The following **additional** features are implemented:

- [x] Dynamic Express routes for gift detail pages
- [x] Separate client and server folders
- [x] Custom video walkthrough GIF included in the README

## Video Walkthrough

Here's a walkthrough of implemented required features:

![Video Walkthrough](PROJECT1.gif)

GIF created with Kap (macOS)

## Notes

One challenge was making sure the detail pages were served through unique Express routes and that invalid routes showed a proper 404 page. Another challenge was organizing the project into separate client and server folders while keeping routing and static files working correctly.

## License

Copyright 2026 Oscar Mochizaki

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.