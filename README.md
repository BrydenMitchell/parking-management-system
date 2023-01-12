## Running the Parking Management System

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:80](http://localhost:80) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Configuration for OS

### Running on Windows
Modify the "package.json" -> scrips -> start with:

    "start": "set PORT=80 && react-scripts start",

### Running on Linux
Modify the "package.json" -> scrips -> start with:
   
    "start": "PORT=80 react-scripts start",

## Updating Map

### Image

Generate tiles using the Photoshop tool: https://github.com/bramus/photoshop-google-maps-tile-cutter. 

- Use Default settings
- Export as PNG
- Use Subfolders (eg. z/x/y.png)

Insert tile set in "public/lot-map-tiles"

### Stall Data

This application uses firebase to store stall data. Using the format

```JSON
{
    "stalls": {
        "a1": {
            "color": "#ff0000",
            "coords": [
                [
                    70.92,
                    -65.2
                ],
                [
                    69.82,
                    -63.7
                ]
            ],
            "id": "a1",
            "isDisability": false,
            "isEV": false,
            "isMC": false,
            "isSelected": false,
            "name": "a1"
        }
    }
}
```

### Firebase Config

Connect the application to firebase using the standard firebase config format:

```JSON
{
    "config": {
        "apiKey": "",
        "authDomain": "",
        "databaseURL": "",
        "projectId": "",
        "storageBucket": "",
        "messagingSenderId": "",
        "appId": ""
    }
}
```