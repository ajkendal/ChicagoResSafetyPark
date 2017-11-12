# print("Helloo Bahar")
import time   #Importing the time library to check the time of code execution
import sys    #Importing the System Library
import os
import socket

from flask import Flask
from flask import render_template
from flask import jsonify
app = Flask(__name__)

# def main():
#     f = open('wards_codes.js','w')
#     f.write('console.log(Hello World);')
#     f.close()
#     return "Hi Saeed :)"

@app.route('/test')
def server():
    print("jooone madaret")
    return 0


if __name__ == "__main__":
  app.run()

# if __name__ == '__main__':
#     main()
# print("--- %s seconds ---" % (time.time() - start_time))
