# Reads the date from input
# Prints all the wards that has street sweeping
from wardAlocation import *
from shapely.geometry import Point, Polygon, shape
import pandas as pd
from datetime import datetime
import csv


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





dt = datetime(2017, 11, 9)
pt = Point(-87.584454, 41.8041113)
neighbour_wards = find_all_wards(pt, 1)

#print(neighbour_wards)
data  = sweep_data()
swept_wards = ward_cleaning_section(neighbour_wards, data, dt)

#print(swept_wards)
