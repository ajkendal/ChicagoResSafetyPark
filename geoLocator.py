import googlemaps
from datetime import datetime

gmaps = googlemaps.Client(key='AIzaSyCbXX0Bmh6f7Uk9iVEbJKptQWvLxtRV2W8')

# Geocoding an address
geocode_result = gmaps.geocode('1649 E 50th Street Chicago')
# print geocode_result
print geocode_result[0][u'geometry'][u'location']
# print geocode_result["u'geometry'"]

# Look up an address with reverse geocoding
reverse_geocode_result = gmaps.reverse_geocode((40.714224, -73.961452))

# Request directions via public transit
now = datetime.now()
directions_result = gmaps.directions("Sydney Town Hall",
                                     "Parramatta, NSW",
                                     mode="transit",
                                     departure_time=now)

#print directions_result
