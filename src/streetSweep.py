# Reads the date from input
# Prints all the wards that has street sweeping
from wardAlocation import *
from shapely.geometry import Point, Polygon, shape
# import pandas as pd
from datetime import datetime
import dateutil.parser as dt
import csv
import argparse



filename="Street_Sweeping_Schedule_-_2017.csv"

def sweep_data():
    #df = pd.read_csv('../data/'+ filename)
    df=[]
    csvReader = csv.reader(open('../data/'+ filename, 'rt'))
    for row in csvReader:
            df.append(row)
    #print(df)
    return df

def ward_cleaning_section(neighbour_wards, data, selected_time):
    swept_wards = []

    for nw in neighbour_wards:
        for row in data:
            if row[0]== nw['code'] and  row[4] == str(selected_time.month):
                days=row[5].split(",")
                if str(selected_time.day) in days:
                    swept_wards.append(nw)

    return swept_wards




# pt = Point(-87.584454, 41.8041113)
# dt = datetime(2017, 11, 9)
def main(lng,lat,date):

    pt = Point(lng, lat)
    date_time_obj = dt.parse(date) #"Tue, 22 Nov 2011 06:00:00 GMT"
    neighbour_wards = find_all_wards(pt, 1)
    data  = sweep_data()
    swept_wards = ward_cleaning_section(neighbour_wards, data, date_time_obj)
    return swept_wards

#print(swept_wards)



parser = argparse.ArgumentParser(description='Returns to be swept wards for a location and a time')

parser.add_argument('--lng', required=True, type=float)
parser.add_argument('--lat', required=True, type=float)
parser.add_argument('--date', required=True)
args = parser.parse_args()


lng=args.lng
lat=args.lat
date=args.date


#print(str(lng)+ " ** "+str(lat)+" ** "+date)
#print(main(-87.584454, 41.8041113,"Thu, 9 Nov 2017 06:00:00 GMT"))
print(main(lng,lat,date))
