# Local-Weather-App

This is a simple web app that automatically detects your location and gives you the current weather of your location.

The current location is retrieved from the current ip address using https://ipinfo.io API, which in turn returns the coordinates of your location.
The coordinates in the form of longitudes and latitudes are then fed to http://openweathermap.org API, which gives back the weather data.

If you want to see this app in action, then head over to https://codepen.io/CoderArvind/pen/vyEVgj .
While on codepen, if there is any issue in showing the weather, then please change the application protocol from https to http in the browser URL as the API is not compatible with https.  

Please feel free to play around with this app.
