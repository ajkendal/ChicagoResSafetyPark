from shapely.geometry import Point, Polygon, shape
import json
# import pandas as pd
# import geopandas as gpd
# import os
# import numpy as np
# wards = {}
# sections = {}

def read_ward():
    fname="../data/StreetSweeping-2017-Map.geojson"
    with open(fname) as f:
        js = json.load(f)
    return js
# def make_wards(data):
#     global wards
#     global sections
#     table_len = len(data['geometry'])
#     temp_ward = [(data['ward'][i], data['geometry'][i]) for i in range(table_len)]
#     temp_sections = [(data['ward'][i], data['section'][i]) for i in range(table_len)]
#     wards = dict(temp_ward)
#     sections = dict(temp_sections)

def in_which_ward(data, pt, rad):
    ward_info = []
    x_rad = rad * 0.01941
    y_rad = rad * 0.01445
    pt_corner_right_bottom = Point(pt.x + x_rad, pt.y - y_rad)
    pt_corner_left_bottom  = Point(pt.x - x_rad, pt.y - y_rad)
    pt_corner_right_top    = Point(pt.x + x_rad, pt.y + y_rad)
    pt_corner_left_top     = Point(pt.x - x_rad, pt.y + y_rad)

    Multi = shape({'type': 'MultiPolygon', 'coordinates': [[[(pt.x - x_rad, pt.y + y_rad), (pt.x - x_rad, pt.y - y_rad), (pt.x + x_rad, pt.y - y_rad), (pt.x + x_rad, pt.y + y_rad)]]]})
    for feature in data['features']:
        polygon = shape(feature['geometry'])
        if Multi.intersects(polygon):
            ward_info.append(feature['properties'])
    return ward_info
def find_all_wards(pt, rad=1):
    data = read_ward()
    info = in_which_ward(data, pt, rad)
    return info


# pt = Point(-87.584454, 41.8041113)
# print(find_all_wards(pt, 1))
